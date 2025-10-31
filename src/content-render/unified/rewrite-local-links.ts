import path from 'path'
import type { Link, LinkReference, Definition, Text } from 'mdast'
import type { Node } from 'unist'

import stripAnsi from 'strip-ansi'
import { visit } from 'unist-util-visit'
import { distance } from 'fastest-levenshtein'
import { getPathWithoutLanguage, getVersionStringFromPath } from '@/frame/lib/path-utils'
import { getNewVersionedPath } from '@/archives/lib/old-versions-utils'
import patterns from '@/frame/lib/patterns'
import { deprecated, latest } from '@/versions/lib/enterprise-server-releases'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { allVersions } from '@/versions/lib/all-versions'
import removeFPTFromPath from '@/versions/lib/remove-fpt-from-path'
import readJsonFile from '@/frame/lib/read-json-file'
import findPage from '@/frame/lib/find-page'
import type { Context, Page } from '@/types'

const isProd = process.env.NODE_ENV === 'production'

// This way, if you *set* the `LOG_ERROR_ANNOTATIONS` env var, whatever its
// value is, it determines it. But if it's not set, the default is to look
// for a truty value in `process.env.CI`.
const CI = Boolean(JSON.parse(process.env.CI || 'false'))
const LOG_ERROR_ANNOTATIONS =
  CI || Boolean(JSON.parse(process.env.LOG_ERROR_ANNOTATIONS || 'false'))

const supportedPlans = new Set(Object.values(allVersions).map((v) => v.plan))
const externalRedirects = readJsonFile('./src/redirects/lib/external-sites.json') as Record<
  string,
  string
>

// The reason we "memoize" which lines we've logged is because the same
// error might happen more than once in the whole space of one CI run.
const _logged = new Set<string>()

// Printing this to stdout in this format, will automatically be picked up
// by Actions to turn that into a PR inline annotation.
function logError(file: string, line: number, message: string, title = 'Error') {
  if (LOG_ERROR_ANNOTATIONS) {
    const hash = `${file}:${line}:${message}`
    if (_logged.has(hash)) return
    _logged.add(hash)
    message = stripAnsi(
      // copied from: https://github.com/actions/toolkit/blob/main/packages/core/src/command.ts
      message.replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A'),
    )
    const error = `::error file=${file},line=${line},title=${title}::${message}`
    console.log(error)
  }
}

// Meaning it can be 'AUTOTITLE ' or ' AUTOTITLE' or 'AUTOTITLE'
const AUTOTITLE = /^\s*AUTOTITLE\s*$/

// This is exported because in translations, we need to treat this as
// one of those Liquid parsing errors which happens on corrupted translations
// which we use to know that we need to fall back to English.
export class TitleFromAutotitleError extends Error {}

interface LinkNode extends Link {
  originalHref?: string
  _originalHref?: string
}

interface NodeToProcess {
  url: string
  child: Text
  originalHref?: string
}

// Content authors write links like `/some/article/path`, but they need to be
// rewritten on the fly to match the current language and page version
export default function rewriteLocalLinks(context?: Context) {
  return async function (tree: Node): Promise<void> {
    if (!context) return
    const { currentLanguage, autotitleLanguage, currentVersion } = context
    // There's no languageCode or version passed, so nothing to do
    if (!currentLanguage || !currentVersion) return
    const nodes: NodeToProcess[] = []

    // For links using linkReference and definition, we must
    // first get the list of definitions and later resolve
    // the linkReferences.
    //
    // So, for example, a reference that looks like:
    //    [Some link](some-reference)
    //    [some-reference]: /abc/123
    // Becomes:
    //    [Some link](/abc/123)
    // And then we can treat it like a regular 'link';
    // see https://github.github.com/gfm/#link-reference-definitions for spec
    const definitions = new Map<string, Definition>()
    visit(tree, 'definition', (node: Node) => {
      const defNode = node as Definition
      definitions.set(defNode.identifier, defNode)
    })

    visit(tree, 'linkReference', (node: Node) => {
      const linkRefNode = node as LinkReference
      const definition = definitions.get(linkRefNode.identifier)
      if (definition) {
        // Replace the LinkReference node with a Link node
        // Using 'as any' because we're mutating the node type at runtime,
        // which TypeScript doesn't allow as LinkReference and Link are incompatible types
        ;(linkRefNode as any).type = 'link'
        ;(linkRefNode as any).url = definition.url
        ;(linkRefNode as any).title = definition.title
      } else {
        console.warn(`Definition not found for identifier: ${linkRefNode.identifier}`)
      }
    })

    // this function handles processing the tree recursively, sometimes we have additional trees to convert
    await processTree(tree, autotitleLanguage || currentLanguage, currentVersion, nodes, context)
  }
}

async function processTree(
  tree: Node,
  language: string,
  version: string,
  nodes: NodeToProcess[],
  context: Context,
) {
  // internal links begin with `/something`
  visit(tree, 'link', (node: Node) => {
    const linkNode = node as Link
    if (linkNode.url && linkNode.url.startsWith('/')) {
      processLinkNode(linkNode, language, version, nodes)
    }
  })

  if (!isProd) {
    // handles anchor links
    visit(tree, 'link', (node: Node) => {
      const linkNode = node as Link
      if (linkNode.url && linkNode.url.startsWith('#')) {
        for (const child of linkNode.children || []) {
          if (
            child.type === 'text' &&
            (child as Text).value &&
            AUTOTITLE.test((child as Text).value)
          ) {
            throw new Error(
              `Found anchor link with text AUTOTITLE ('${linkNode.url}'). ` +
                'Update the anchor link with text that is not AUTOTITLE.',
            )
          }
        }
      }
    })
  }

  // nodes[] contains all the link nodes that need new titles
  // and now we call to get those titles
  await Promise.all(
    nodes.map(({ url, child, originalHref }: NodeToProcess) =>
      getNewTitleSetter(child, url, context, originalHref),
    ),
  )
}

function processLinkNode(node: Link, language: string, version: string, nodes: NodeToProcess[]) {
  const linkNode = node as LinkNode
  const newHref = getNewHref(linkNode, language, version)
  if (newHref) {
    linkNode.originalHref = linkNode.url
    linkNode.url = newHref
  }
  for (const child of linkNode.children) {
    if (child.type === 'text' && (child as Text).value) {
      const textChild = child as Text
      if (AUTOTITLE.test(textChild.value)) {
        nodes.push({
          url: linkNode.url,
          child: textChild,
          originalHref: linkNode._originalHref,
        })
      } else if (
        // This means CI and local dev
        process.env.NODE_ENV !== 'production' &&
        // But only raise this (in CI or local dev) if it's English
        language === 'en'
      ) {
        // Throw if the link text *almost*  is AUTOTITLE
        const childText = child as Text
        if (
          childText.value.toUpperCase() === 'AUTOTITLE' ||
          distance(childText.value.toUpperCase(), 'AUTOTITLE') <= 2
        ) {
          throw new Error(
            `Found link text '${childText.value}', expected 'AUTOTITLE'. ` +
              `Find the mention of the link text '${childText.value}' and change it to 'AUTOTITLE'. Case matters.`,
          )
        }
      }
    }
  }
}

async function getNewTitleSetter(
  child: Text,
  href: string,
  context: Context,
  originalHref?: string,
) {
  child.value = await getNewTitle(href, context, child, originalHref)
}

async function getNewTitle(href: string, context: Context, child: Text, originalHref?: string) {
  const page = findPage(href, context.pages, context.redirects) as Page | undefined
  if (!page) {
    // The child.position.start.line is 1-based and already represents the line number
    // in the original file (including frontmatter), so no offset adjustment is needed
    const line = child.position?.start.line || 1

    const linkText = originalHref || href
    const message = `The link '${linkText}' could not be resolved in one or more versions of the documentation. Make sure that this link can be reached from all versions of the documentation it appears in. (Line: ${line})`
    logError(context.page!.fullPath, line, message, 'Link Resolution Error')
    throw new TitleFromAutotitleError(message)
  }
  return await page.renderProp('title', context, { textOnly: true })
}

function getNewHref(node: LinkNode, languageCode: string, version: string): string | undefined {
  const { url } = node
  // Exceptions to link rewriting
  if (url.startsWith('/assets')) return
  if (url.startsWith('/public')) return
  if (url in externalRedirects) return

  let newHref = url
  // If the link has a hardcoded plan or version in it, do not update other than adding a language code
  // Examples:
  // /enterprise-server@2.20/rest/reference/oauth-authorizations
  // /enterprise-server/rest/reference/oauth-authorizations (this redirects to the latest version)
  // /enterprise-server@latest/rest/reference/oauth-authorizations (this redirects to the latest version)
  const firstLinkSegment = url.split('/')[1]
  if (supportedPlans.has(firstLinkSegment.split('@')[0])) {
    newHref = path.posix.join('/', languageCode, url)
  } else if (firstLinkSegment.includes('@')) {
    // This could mean a bad typo!
    // This can happen if you have something
    // like `/enterprise-servr@3.9/foo/bar` which is a typo. I.e.
    // `enterprise-servr` is not a valid plan, but it has a `@` character  in it.
    console.warn(
      `
Warning! The first segment of the internal link has a '@' character in it
but the plan is not recognized. This is likely a typo.
Please inspect the link and fix it if it's a typo.
Look for an internal link that starts with '${url}'.
    `,
    )
  }

  // If the link includes a deprecated version, do not update other than adding a language code
  // Example: /enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release
  const oldEnterpriseVersionNumber = url.match(patterns.getEnterpriseVersionNumber)
  if (oldEnterpriseVersionNumber && deprecated.includes(oldEnterpriseVersionNumber[1])) {
    newHref = path.posix.join('/', languageCode, url)
  }

  // Treat the unicorn where we have version numbers.
  // As of Jan 2022, the only plan that uses version numbers is
  // 'enterprise-server'. But some day there might more and when that day
  // comes this line needs to account for all those where "latest" needs
  // to be replaced by its actual latest version number.
  // The reason for doing this rewrite is that we want to suppress the
  // use of '...@latest' because it's just going to redirect when viewed
  // anyway. And if a page is archived, all "latest" is replaced to the
  // current number anyway.
  newHref = newHref.replace('/enterprise-server@latest/', `/enterprise-server@${latest}/`)

  if (newHref === url) {
    // start clean with no language (TOC pages already include the lang codes via lib/liquid-tags/link.ts)
    const hrefWithoutLang = getPathWithoutLanguage(url)

    // normalize any legacy links so they conform to new link structure
    newHref = path.posix.join('/', languageCode, getNewVersionedPath(hrefWithoutLang))

    // get the current version from the link
    const versionFromHref = getVersionStringFromPath(newHref)

    // ------ BEGIN ONE-OFF OVERRIDES ------//
    // desktop links always point to dotcom
    if (patterns.desktop.test(hrefWithoutLang)) {
      version = nonEnterpriseDefaultVersion
    }

    // admin links on dotcom always point to Enterprise Cloud
    if (patterns.adminProduct.test(hrefWithoutLang) && version === nonEnterpriseDefaultVersion) {
      version = 'enterprise-cloud@latest'
    }
    // ------ END ONE-OFF OVERRIDES ------//

    // update the version in the link
    newHref = newHref.replace(versionFromHref, version)
  }
  newHref = removeFPTFromPath(newHref)

  newHref = newHref.replace(patterns.trailingSlash, '$1')
  return newHref
}
