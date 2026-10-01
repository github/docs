import fs from 'fs'

import { visit, Test } from 'unist-util-visit'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toMarkdown } from 'mdast-util-to-markdown'
import { dump } from 'js-yaml'
import { loadYaml } from '@/frame/lib/load-yaml'
import { type Node, type Nodes, type Definition, type Link } from 'mdast'

import type { Context, Page } from '@/types'
import { createLogger } from '@/observability/logger'
import frontmatter from '@/frame/lib/read-frontmatter'
import {
  getPathWithLanguage,
  getPathWithoutLanguage,
  getPathWithoutVersion,
  getVersionStringFromPath,
} from '@/frame/lib/path-utils'
import loadRedirects from '@/redirects/lib/precompile'
import patterns from '@/frame/lib/patterns'
import { loadUnversionedTree, loadPages, loadPageMap } from '@/frame/lib/page-data'
import getRedirect, { splitPathByLanguage } from '@/redirects/lib/get-redirect'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { deprecated } from '@/versions/lib/enterprise-server-releases'
import { RedirectedFragmentValidator } from '@/links/lib/validate-redirected-fragment'

const logger = createLogger(import.meta.url)

// Placeholder link text that the renderer swaps for the destination page title.
const AUTOTITLE = 'AUTOTITLE'

export type LinkContext = {
  pages: Record<string, Page>
  redirects: NonNullable<Context['redirects']>
  currentLanguage: string
  userLanguage: string
  fragmentValidator: RedirectedFragmentValidator
}

type Replacement = {
  asMarkdown: string
  newAsMarkdown: string
  line: number
  column?: number
}

type Warning = {
  warning: string
  asMarkdown: string
  line: number
  column?: number
}

// Redirected paths can carry anchors to pages with different headings, so validate first.
type CarriedFragment = {
  hash: string
  destPage?: Page
}

type NewHrefResult = {
  // href omits a carried fragment so the caller can decide whether to re-append it.
  href: string
  fragment?: CarriedFragment
}

// Defer replacements until async fragment validation can drop stale carried anchors.
type PendingReplacement = {
  asMarkdown: string
  line: number
  column?: number
  baseHref: string
  makeMarkdown: (href: string) => string
  fragment?: CarriedFragment
  // Ranged replacements keep identical link text elsewhere in the file untouched.
  span?: [number, number]
}

const Options = {
  setAutotitle: false,
  fixHref: false,
  verbose: false,
  strict: false,
  // Keep stale carried anchors as warnings instead of dropping them after validation.
  keepStaleFragments: false,
}

export async function updateInternalLinks(files: string[], options = {}) {
  const opts = Object.assign({}, Options, options)

  const results = []

  const unversionedTree = await loadUnversionedTree(['en'])
  const pageList = await loadPages(unversionedTree, ['en'])
  const pageMap = await loadPageMap(pageList)
  const redirects = await loadRedirects(pageList)

  const context = {
    pages: pageMap,
    redirects,
    currentLanguage: 'en',
    userLanguage: 'en',
    fragmentValidator: new RedirectedFragmentValidator(pageMap, redirects, 'en'),
  }

  for (const file of files) {
    try {
      results.push({
        file,
        ...(await updateFile(file, context, opts)),
      })
    } catch (err) {
      logger.warn('File processing failed', { file })
      throw err
    }
  }

  return results
}

// A hand-built test context avoids loading the real page tree, which takes tens of seconds.
export async function updateFile(file: string, context: LinkContext, opts: typeof Options) {
  const rawContent = fs.readFileSync(file, 'utf8')
  let { data, content } = frontmatter(rawContent)
  data = data || {}
  content = content || ''

  // frontmatter data is empty for .yml files, so read YAML files again for link arrays.
  const isYaml = file.endsWith('.yml')
  if (isYaml) {
    Object.assign(data, loadYaml(content))
  }

  let newContent = content

  // Captured so the closure below sees a non-reassignable string.
  const source = content

  // Dedent YAML because values indented four or more spaces parse as code blocks; lines stay put.
  const parseSource = isYaml ? dedentLines(source) : source
  const lineStarts = buildLineStarts(source)
  const indents = isYaml ? source.split('\n').map((line) => /^[ \t]*/.exec(line)![0].length) : null

  // Report original columns by adding YAML indentation back onto the dedented parse.
  function sourceColumn(node: Nodes): number | undefined {
    const pos = node.position
    if (!pos?.start.column) return undefined
    const indent = indents ? (indents[pos.start.line - 1] ?? 0) : 0
    return pos.start.column + indent
  }

  // Trust a source range only when one line serializes back to the original text.
  function sourceSpan(node: Nodes, asMarkdown: string): [number, number] | undefined {
    const pos = node.position
    if (!pos?.start.line || !pos.end.line || pos.start.line !== pos.end.line) return undefined
    const lineIndex = pos.start.line - 1
    const lineStart = lineStarts[lineIndex]
    if (lineStart === undefined) return undefined
    const indent = indents ? indents[lineIndex] : 0
    const start = lineStart + indent + (pos.start.column - 1)
    const end = lineStart + indent + (pos.end.column - 1)
    return source.slice(start, end) === asMarkdown ? [start, end] : undefined
  }

  const ast = fromMarkdown(parseSource)

  const replacements: Replacement[] = []
  const spanEdits: { start: number; end: number; text: string }[] = []
  const stringEdits: { find: string; text: string }[] = []
  const warnings: Warning[] = []

  const newData = structuredClone(data)

  const ANY = Symbol('any')
  const IS_ARRAY = Symbol('is array')

  // Only these frontmatter keys hold links this script rewrites.
  const HAS_LINKS: Record<string, string[] | symbol> = {
    featuredLinks: ['gettingStarted', 'startHere', 'guideCards', 'popular'],
    introLinks: ANY,
  }

  for (const [key, seek] of Object.entries(HAS_LINKS)) {
    if (!(key in data)) {
      continue
    }
    try {
      if (Array.isArray(data[key])) {
        if ((Array.isArray(seek) && seek.includes(key)) || seek === IS_ARRAY || seek === ANY) {
          const better = getNewFrontmatterLinkList(data[key], context, opts, file, rawContent)
          if (!equalArray(better, data[key])) {
            newData[key] = better
          }
        }
      } else {
        for (const [group, thing] of Object.entries(data[key])) {
          if (Array.isArray(thing)) {
            if (
              (Array.isArray(seek) && seek.includes(group)) ||
              seek === IS_ARRAY ||
              seek === ANY
            ) {
              const better = getNewFrontmatterLinkList(thing, context, opts, file, rawContent)
              if (!equalArray(better, thing)) {
                newData[key][group] = better
              }
            }
          } else if (typeof thing === 'string' && thing.startsWith('/')) {
            const better = getNewFrontmatterLinkList([thing], context, opts, file, rawContent)
            if (!equalArray(better, [thing])) {
              newData[key][group] = better[0]
            }
          }
        }
      }
    } catch (error) {
      // Include the failing frontmatter key because the CLI warning only names the file.
      logger.warn('Frontmatter key processing failed', { key })
      throw error
    }
  }

  const lineOffset = rawContent.replace(content, '').split(/\n/g).length - 1

  // Apply replacements after async fragment validation so stale carried anchors can drop.
  const pending: PendingReplacement[] = []

  visit(ast, definitionMatcher as Test, (node: Nodes) => {
    const asMarkdown = toMarkdown(node).trim()
    if (opts.fixHref && content.includes(asMarkdown) && isDefinition(node)) {
      const { label } = node
      const result = getNewHref(node.url, context, opts, file)
      // getNewHref returns undefined when non-strict mode cannot resolve the link.
      const baseHref = result === undefined ? node.url : result.href
      const column = sourceColumn(node)
      const line = (node.position?.start.line ?? 0) + lineOffset
      pending.push({
        asMarkdown,
        line,
        column,
        baseHref,
        makeMarkdown: (href) => `[${label}]: ${href}`,
        fragment: result?.fragment,
        span: sourceSpan(node, asMarkdown),
      })
    }
  })

  visit(ast, linkMatcher as Test, (node: Nodes) => {
    const asMarkdown = toMarkdown(node).trim()
    if (content.includes(asMarkdown) && isLink(node)) {
      // Serializing children preserves Markdown markers, so [This *is* cool] stays unmatched.
      const title = node.children.map((child: Nodes) => toMarkdown(child).slice(0, -1)).join('')

      let newTitle = title
      let baseHref = node.url
      let fragment: CarriedFragment | undefined

      const hasQuotesAroundLink = content.includes(`"${asMarkdown}`)

      const xValue = (node.children[0] as { value?: string } | undefined)?.value

      if (opts.setAutotitle) {
        if (hasQuotesAroundLink) {
          if (title !== AUTOTITLE) {
            newTitle = AUTOTITLE
          }
        } else {
          if (xValue) {
            if (singleStartingQuote(xValue)) {
              const column = sourceColumn(node)
              const line = (node.position?.start.line ?? 0) + lineOffset
              warnings.push({
                warning: 'Starts with a single " inside the text',
                asMarkdown,
                line,
                column,
              })
            } else if (isSimpleQuote(xValue)) {
              const column = sourceColumn(node)
              const line = (node.position?.start.line ?? 0) + lineOffset
              warnings.push({
                warning: 'Starts and ends with a " inside the text',
                asMarkdown,
                line,
                column,
              })
            }
          }
        }
      }
      if (opts.fixHref) {
        const result = getNewHref(node.url, context, opts, file)
        // getNewHref returns undefined when non-strict mode cannot resolve the link.
        if (result !== undefined) {
          baseHref = result.href
          fragment = result.fragment
        }
      }
      const column = sourceColumn(node)
      const line = (node.position?.start.line ?? 0) + lineOffset
      pending.push({
        asMarkdown,
        line,
        column,
        baseHref,
        makeMarkdown: (href) => `[${newTitle}](${href})`,
        fragment,
        span: sourceSpan(node, asMarkdown),
      })
    } else if (opts.verbose) {
      logger.warn('Unable to find link as Markdown in the source content', {
        asMarkdown,
        file,
      })
    }
  })

  // Validate carried fragments before applying replacements in document order.
  for (const item of pending) {
    let finalHref = item.baseHref
    if (item.fragment) {
      const { hash, destPage } = item.fragment
      const decision = await context.fragmentValidator.classify(destPage, hash)
      if (decision === 'drop') {
        if (opts.keepStaleFragments) {
          finalHref = item.baseHref + hash
          warnings.push({
            warning: `Stale anchor '${hash}' not found on the redirected destination page in any applicable version, but kept because keepStaleFragments is set`,
            asMarkdown: item.asMarkdown,
            line: item.line,
            column: item.column,
          })
        } else {
          // Drop the stale fragment by leaving finalHref at the fragmentless base href.
          warnings.push({
            warning: `Removed stale anchor '${hash}': not found on the redirected destination page in any applicable version`,
            asMarkdown: item.asMarkdown,
            line: item.line,
            column: item.column,
          })
        }
      } else if (decision === 'mixed') {
        finalHref = item.baseHref + hash
        warnings.push({
          warning: `Anchor '${hash}' exists in some but not all versions of the redirected destination page; kept for manual review`,
          asMarkdown: item.asMarkdown,
          line: item.line,
          column: item.column,
        })
      } else if (decision === 'unvalidatable') {
        finalHref = item.baseHref + hash
        warnings.push({
          warning: `Could not validate anchor '${hash}' on the redirected destination page; kept unchanged`,
          asMarkdown: item.asMarkdown,
          line: item.line,
          column: item.column,
        })
      } else {
        // keep means the anchor exists in every applicable destination version.
        finalHref = item.baseHref + hash
      }
    }
    const newAsMarkdown = item.makeMarkdown(finalHref)
    if (item.asMarkdown !== newAsMarkdown && content.includes(item.asMarkdown)) {
      replacements.push({
        asMarkdown: item.asMarkdown,
        newAsMarkdown,
        line: item.line,
        column: item.column,
      })
      if (item.span) {
        spanEdits.push({ start: item.span[0], end: item.span[1], text: newAsMarkdown })
      } else {
        // String-search fallback runs after ranged edits because it cannot adjust offsets.
        stringEdits.push({ find: item.asMarkdown, text: newAsMarkdown })
      }
    }
  }

  // Descending ranged edits preserve offsets and keep identical text elsewhere untouched.
  spanEdits.sort((a, b) => b.start - a.start)
  for (const edit of spanEdits) {
    newContent = newContent.slice(0, edit.start) + edit.text + newContent.slice(edit.end)
  }
  for (const edit of stringEdits) {
    if (newContent.includes(edit.find)) {
      newContent = newContent.replace(edit.find, edit.text)
    }
  }

  return {
    data,
    content,
    rawContent,
    newContent,
    replacements,
    warnings,
    newData,
  }
}

// Preserve line count while stripping leading whitespace from every line.
function dedentLines(content: string): string {
  return content
    .split('\n')
    .map((line) => line.replace(/^[ \t]+/, ''))
    .join('\n')
}

function buildLineStarts(content: string): number[] {
  const starts = [0]
  for (let i = 0; i < content.length; i++) {
    if (content[i] === '\n') starts.push(i + 1)
  }
  return starts
}

function isDefinition(node: Node): node is Definition {
  return node.type === 'definition'
}

function isLink(node: Node): node is Link {
  return node.type === 'link'
}

function definitionMatcher(node: Node) {
  if (!isDefinition(node)) return false
  const { url } = node
  if (url) {
    return url.startsWith('/')
  }
  return false
}

function linkMatcher(node: Node) {
  if (isLink(node) && node.url) {
    const { url } = node
    if (url.startsWith('/') || url.startsWith('./')) {
      // Asset and public paths serve static assets or generated schema files, not pageMap entries.
      if (url.startsWith('/assets') || url.startsWith('/public/')) {
        return false
      }

      // Liquid links need full rendering, which this script does not do.
      if (url.includes('{{') || url.includes('{%')) {
        return false
      }

      const version = getVersionStringFromPath(url)
      if (
        version &&
        version.startsWith('enterprise-server@') &&
        deprecated.includes(version.replace('enterprise-server@', ''))
      ) {
        return false
      }

      // Legacy enterprise paths deliberately point to archived content.
      if (patterns.getEnterpriseVersionNumber.test(url)) {
        return false
      }

      return true
    }
  }
  return false
}

function getNewFrontmatterLinkList(
  list: string[],
  context: LinkContext,
  opts: {
    setAutotitle: boolean
    fixHref: boolean
    verbose: boolean
    strict: boolean
  },
  file: string,
  rawContent: string,
) {
  const better = []
  for (const entry of list) {
    if (/{%\s*else\s*%}/.test(entry)) {
      logger.warn('Skipping frontmatter link with {% else %} in it', { entry, file })
      better.push(entry)
      continue
    }
    const pure = stripLiquid(entry)
    let asURL = '/en'
    if (!pure.startsWith('/')) {
      asURL += '/'
    }
    asURL += pure
    if (asURL in context.pages) {
      better.push(entry)
    } else {
      const redirected = getRedirect(asURL, context)
      if (redirected === undefined) {
        const lineNumber = findLineNumber(entry, rawContent)
        const msg =
          'A frontmatter link appears to be broken. ' +
          `Neither redirect or a findable page: ${pure}. (file: ${file} line: ${
            lineNumber || 'unknown'
          })`

        if (opts.strict) {
          throw new Error(msg)
        }
        logger.warn(msg, { file, pure, lineNumber })
        better.push(entry)
      } else {
        // Keep links whose redirect only adds a supported version prefix.
        const redirectedWithoutLanguage = getPathWithoutLanguage(redirected)
        const asURLWithoutVersion = getPathWithoutVersion(redirectedWithoutLanguage)
        if (asURLWithoutVersion === pure) {
          better.push(entry)
        } else {
          better.push(entry.replace(pure, asURLWithoutVersion))
        }
      }
    }
  }
  return better
}

// Find the raw line for a parsed YAML entry when the original text survives unchanged.
function findLineNumber(entry: string, rawContent: string) {
  let number = 0
  for (const line of rawContent.split(/\n/g)) {
    number++
    if (line.endsWith(entry) && line.includes(` ${entry}`)) {
      return number
    }
  }

  return null
}

const liquidStartRex = /^{%-?\s*ifversion .+?\s*%}/
const liquidEndRex = /{%-?\s*endif\s*-?%}$/

function stripLiquid(text: string) {
  if (liquidStartRex.test(text) && liquidEndRex.test(text)) {
    return text.replace(liquidStartRex, '').replace(liquidEndRex, '').trim()
  } else if (text.includes('{')) {
    throw new Error(`Unsupported Liquid in frontmatter link list (${text})`)
  }
  return text
}

function equalArray(arr1: unknown[], arr2: unknown[]) {
  return arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])
}

function getNewHref(
  href: string,
  context: LinkContext,
  opts: {
    setAutotitle: boolean
    fixHref: boolean
    verbose: boolean
    strict: boolean
  },
  file: string,
): NewHrefResult | undefined {
  const { currentLanguage } = context
  const parsed = new URL(href, 'https://docs.github.com')
  const hash = parsed.hash
  const search = parsed.search
  const pure = parsed.pathname
  let newHref = pure.replace(patterns.trailingSlash, '$1')

  // Redirect checks need the English prefix even though source links omit it.
  const [language, withoutLanguage] = splitPathByLanguage(newHref, currentLanguage)
  if (withoutLanguage !== newHref) {
    // Skip hardcoded-language links because source links stay language-neutral.
    const msg = `Unable to cope with internal links with hardcoded language '${newHref}' (file: ${file})`
    if (opts.strict) {
      throw new Error(msg)
    } else {
      logger.warn(msg, { file, href: newHref })
      return
    }
  }
  const newHrefWithLanguage = getPathWithLanguage(withoutLanguage, language)
  const redirected = getRedirect(newHrefWithLanguage, context)

  // A missing redirect plus no pageMap entry means the link is broken.
  if (redirected === undefined) {
    if (!context.pages[newHrefWithLanguage]) {
      const msg = `A link appears to be broken. Neither redirect or a findable page '${href}' (${file})`
      if (opts.strict) {
        throw new Error(msg)
      } else {
        logger.warn(msg, { file, href })
        return
      }
    }
  }

  if (redirected) {
    // Static rewrites drop getRedirect's language prefix because source links stay neutral.
    const redirectedWithoutLanguage = getPathWithoutLanguage(redirected)
    if (withoutLanguage.includes(`/${nonEnterpriseDefaultVersion}/`)) {
      newHref = `/${nonEnterpriseDefaultVersion}${redirectedWithoutLanguage}`
    } else if (withoutLanguage.startsWith('/enterprise-server/')) {
      const msg =
        "Old /enterprise-server/ links that don't include a @version are no longer supported. " +
        'If you see this, manually fix that link to use enterprise-server@latest.'
      if (opts.strict) {
        throw new Error(msg)
      } else {
        logger.warn(msg, { file })
        return
      }
    } else if (withoutLanguage.startsWith('/enterprise-server@latest')) {
      // Preserve enterprise-server@latest because source content tracks the moving release.
      newHref = `/enterprise-server@latest${getPathWithoutVersion(redirectedWithoutLanguage)}`
    } else if (getPathWithoutVersion(withoutLanguage) !== withoutLanguage) {
      newHref = redirectedWithoutLanguage
    } else {
      newHref = getPathWithoutVersion(redirectedWithoutLanguage)
    }
  }

  const base = search ? `${newHref}${search}` : newHref

  if (!hash) {
    return { href: base }
  }

  // Unredirected paths keep fragments because they still point at the same page.
  if (!redirected) {
    return { href: base + hash }
  }

  // Redirected paths validate carried fragments against the destination page's headings.
  const destPage = resolveDestinationPage(context.pages, redirected)
  return { href: base, fragment: { hash, destPage } }
}

// getRedirect returns language-prefixed permalinks, matching the primary pageMap keys.
function resolveDestinationPage(pages: Record<string, Page>, redirected: string): Page | undefined {
  return pages[redirected] || pages[getPathWithLanguage(getPathWithoutLanguage(redirected), 'en')]
}

function singleStartingQuote(text: string) {
  return text.startsWith('"') && text.split('"').length === 2
}

function isSimpleQuote(text: string) {
  return text.startsWith('"') && text.endsWith('"') && text.split('"').length === 3
}

// YAML link fixes choose newContent because updateFile rewrites parsed Markdown links
// against the file's own text. newData changes only for structured link keys such as
// featuredLinks and introLinks, which no data file uses. dump would reserialize untouched data.
export function serializeYaml(
  newContent: string,
  newData: Record<string, unknown> | undefined,
  differentContent: boolean,
  differentData: boolean,
): string {
  if (!differentData) return newContent
  if (differentContent) {
    // No format-preserving merge exists for simultaneous text and structured data edits.
    throw new Error(
      'Cannot serialize a YAML file that has both text and structured data changes ' +
        'without losing one of them. This needs a format-preserving merge.',
    )
  }
  return dump(newData || {})
}

// Preserve original Markdown frontmatter when frontmatter data did not change. The YAML
// serializer reflows untouched intro, redirect_from, and quoting, which hides link fixes
// in bulk runs.
export function serializeMarkdown(
  rawContent: string,
  content: string,
  newContent: string,
  newData: Record<string, unknown> | undefined,
  differentData: boolean,
): string {
  // content is the file tail, so everything before it is the original frontmatter block.
  if (!differentData && rawContent.endsWith(content)) {
    return rawContent.slice(0, rawContent.length - content.length) + newContent
  }
  return frontmatter.stringify(newContent, newData || {})
}
