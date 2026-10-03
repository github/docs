import path from 'path'
import type { Link, LinkReference, Definition, Text } from 'mdast'
import type { Node } from 'unist'

import stripAnsi from 'strip-ansi'
import { visit } from 'unist-util-visit'
import { distance } from 'fastest-levenshtein'
import { getPathWithoutLanguage, getVersionStringFromPath } from '@/frame/lib/path-utils'
import { getNewVersionedPath } from '@/archives/lib/old-versions-utils'
import patterns from '@/frame/lib/patterns'
import { createLogger } from '@/observability/logger'
import { deprecated, latest } from '@/versions/lib/enterprise-server-releases'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { allVersions } from '@/versions/lib/all-versions'
import removeFPTFromPath from '@/versions/lib/remove-fpt-from-path'
import readJsonFile from '@/frame/lib/read-json-file'
import findPage from '@/frame/lib/find-page'
import type { Context, Page } from '@/types'

const logger = createLogger(import.meta.url)

const isProd = process.env.NODE_ENV === 'production'

// CI or a true LOG_ERROR_ANNOTATIONS value enables annotations.
const CI = Boolean(JSON.parse(process.env.CI || 'false'))
const LOG_ERROR_ANNOTATIONS =
  CI || Boolean(JSON.parse(process.env.LOG_ERROR_ANNOTATIONS || 'false'))

const supportedPlans = new Set(Object.values(allVersions).map((v) => v.plan))
const externalRedirects = readJsonFile('./src/redirects/lib/external-sites.json') as Record<
  string,
  string
>

// Log each file, line, and message once because one CI run can hit the same error repeatedly.
const _logged = new Set<string>()

// GitHub Actions turns this stdout command format into a PR inline annotation.
function logError(file: string, line: number, message: string, title = 'Error') {
  if (LOG_ERROR_ANNOTATIONS) {
    const hash = `${file}:${line}:${message}`
    if (_logged.has(hash)) return
    _logged.add(hash)
    message = stripAnsi(
      // Escape like Actions core: https://github.com/actions/toolkit/blob/main/packages/core/src/command.ts
      message.replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A'),
    )
    const error = `::error file=${file},line=${line},title=${title}::${message}`
    process.stdout.write(`${error}\n`)
    logger.info('GitHub Actions error annotation', { annotation: error })
  }
}

// AUTOTITLE matching tolerates writer-added spaces around the marker.
const AUTOTITLE = /^\s*AUTOTITLE\s*$/

// Translations treat this Liquid-style error as a signal to fall back to English.
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

// Rewrite root-relative links to the current language and page version during rendering.
// Resolve refs before rewrites: https://github.github.com/gfm/#link-reference-definitions
// [Some link][some-reference] plus [some-reference]: /abc/123
// resolves to [Some link](/abc/123).
export default function rewriteLocalLinks(context?: Context) {
  return async function (tree: Node): Promise<void> {
    if (!context) return
    const { currentLanguage, autotitleLanguage, currentVersion } = context
    if (!currentLanguage || !currentVersion) return
    const nodes: NodeToProcess[] = []

    const definitions = new Map<string, Definition>()
    visit(tree, 'definition', (node: Node) => {
      const defNode = node as Definition
      definitions.set(defNode.identifier, defNode)
    })

    visit(tree, 'linkReference', (node: Node) => {
      const linkRefNode = node as LinkReference
      const definition = definitions.get(linkRefNode.identifier)
      if (definition) {
        // Mutate LinkReference into Link because TypeScript sees incompatible mdast shapes.
        const mutableNode = linkRefNode as unknown as Link
        mutableNode.type = 'link'
        mutableNode.url = definition.url
        mutableNode.title = definition.title
      } else {
        logger.warn('Definition not found for identifier', { identifier: linkRefNode.identifier })
      }
    })

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
  visit(tree, 'link', (node: Node) => {
    const linkNode = node as Link
    if (linkNode.url && linkNode.url.startsWith('/')) {
      processLinkNode(linkNode, language, version, nodes)
    }
  })

  if (!isProd) {
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

  // Resolve queued AUTOTITLE text after all links have their final URLs.
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
        // Non-production English renders reject near-miss AUTOTITLE markers before they ship.
        process.env.NODE_ENV !== 'production' &&
        language === 'en'
      ) {
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
    // The parser keeps source coordinates from the original file, including frontmatter.
    const line = child.position?.start.line || 1

    const linkText = originalHref || href
    const message = `The link '${linkText}' could not be resolved in one or more versions of the documentation. Make sure that this link can be reached from all versions of the documentation it appears in. (Line: ${line})`
    logError(context.page!.fullPath, line, message, 'Link Resolution Error')
    throw new TitleFromAutotitleError(message)
  }
  return await page.renderProp('title', context, { textOnly: true })
}

// Known plan paths such as /enterprise-server@2.20/rest/... only gain a language prefix,
// except enterprise-server@latest, which normalizes below.
// Deprecated paths such as /enterprise/11.10.340/admin/articles/... also only gain a prefix.
function getNewHref(node: LinkNode, languageCode: string, version: string): string | undefined {
  const { url } = node
  if (url.startsWith('/assets')) return
  if (url.startsWith('/public')) return
  if (url in externalRedirects) return

  let newHref = url
  const firstLinkSegment = url.split('/')[1]
  if (supportedPlans.has(firstLinkSegment.split('@')[0])) {
    newHref = path.posix.join('/', languageCode, url)
  } else if (firstLinkSegment.includes('@')) {
    // An unknown plan segment containing @ usually means the author mistyped a versioned plan.
    logger.warn(
      'First segment of internal link has @ character but plan is not recognized, likely a typo',
      { url },
    )
  }

  const oldEnterpriseVersionNumber = url.match(patterns.getEnterpriseVersionNumber)
  if (oldEnterpriseVersionNumber && deprecated.includes(oldEnterpriseVersionNumber[1])) {
    newHref = path.posix.join('/', languageCode, url)
  }

  // Enterprise Server replaces latest with a release number to avoid redirects and archive drift.
  newHref = newHref.replace('/enterprise-server@latest/', `/enterprise-server@${latest}/`)

  if (newHref === url) {
    // Strip any language prefix because lib/liquid-tags/link.ts adds language codes for TOC pages.
    const hrefWithoutLang = getPathWithoutLanguage(url)

    newHref = path.posix.join('/', languageCode, getNewVersionedPath(hrefWithoutLang))

    const versionFromHref = getVersionStringFromPath(newHref)

    // Desktop links always target dotcom.
    if (patterns.desktop.test(hrefWithoutLang)) {
      version = nonEnterpriseDefaultVersion
    }

    // Admin links on dotcom always target Enterprise Cloud.
    if (patterns.adminProduct.test(hrefWithoutLang) && version === nonEnterpriseDefaultVersion) {
      version = 'enterprise-cloud@latest'
    }

    newHref = newHref.replace(versionFromHref, version)
  }
  newHref = removeFPTFromPath(newHref)

  newHref = newHref.replace(patterns.trailingSlash, '$1')
  return newHref
}
