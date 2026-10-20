import { unified } from 'unified'
import remarkParse from 'remark-parse'
import gfm from 'remark-gfm'
import emoji from 'remark-gemoji'
import remark2rehype from 'remark-rehype'
import raw from 'rehype-raw'
import slug from 'rehype-slug'
import highlight from 'rehype-highlight'
import { common } from 'lowlight'
import dockerfile from 'highlight.js/lib/languages/dockerfile'
import http from 'highlight.js/lib/languages/http'
import groovy from 'highlight.js/lib/languages/groovy'
import erb from 'highlight.js/lib/languages/erb'
import powershell from 'highlight.js/lib/languages/powershell'
import graphql from 'highlight.js/lib/languages/graphql'
import html from 'rehype-stringify'
import codeHeader from './code-header'
import rewriteLocalLinks from './rewrite-local-links'
import rewriteImgSources from './rewrite-asset-urls'
import rewriteAssetImgTags from './rewrite-asset-img-tags'
import useEnglishHeadings from './use-english-headings'
import headingLinks from './heading-links'
import collectMiniToc from './collect-mini-toc'
import rewriteTheadThScope from './rewrite-thead-th-scope'
import rewriteEmptyTableRows from './rewrite-empty-table-rows'
import rewriteForRowheaders from './rewrite-for-rowheaders'
import rewriteTableCaptions from './rewrite-table-captions'
import wrapProceduralImages from './wrap-procedural-images'
import wrapCodeTerms from './wrap-code-terms'
import parseInfoString from './parse-info-string'
import annotate from './annotate'
import alerts from './alerts'
import removeHtmlComments from 'remark-remove-comments'
import remarkStringify from 'remark-stringify'
import { visit } from 'unist-util-visit'
import type { Parents, Root, Text } from 'mdast'
import type { Info, State } from 'mdast-util-to-markdown'
import type { Context, UnifiedProcessor } from '@/content-render/types'
import type { CollectedHeading } from '@/frame/lib/get-mini-toc-items'

export function createProcessor(context: Context): UnifiedProcessor {
  return (
    unified()
      .use(remarkParse)
      .use(removeHtmlComments)
      .use(gfm)
      .use(parseInfoString)
      // TypeScript's unified plugin types do not model context-bound transformer factories.
      .use(rewriteLocalLinks as unknown as (ctx: Context) => void, context)
      .use(emoji)
      .use(remark2rehype, { allowDangerousHtml: true })
      .use(slug)
      .use(useEnglishHeadings as unknown as (ctx: Context) => void, context || {})
      .use(headingLinks)
      .use(codeHeader)
      .use(annotate as unknown as (ctx: Context) => void, context)
      // TypeScript's unified plugin types do not model rehype-highlight's lowlight options.
      .use(highlight as unknown as (options: unknown) => void, {
        languages: { ...common, graphql, dockerfile, http, groovy, erb, powershell },
        subset: false,
        aliases: {
          // Register jsonc as a JSON alias so JSON with comments gets docs-site highlighting.
          json: 'jsonc',
          // Map docs-only copilot fences to text so contributors can use them.
          text: 'copilot',
        },
      })
      .use(raw)
      .use(collectMiniToc, {
        collectInto: context.collectMiniToc as CollectedHeading[] | undefined,
      })
      .use(wrapProceduralImages)
      .use(rewriteEmptyTableRows)
      .use(rewriteTheadThScope)
      .use(rewriteForRowheaders)
      .use(rewriteTableCaptions)
      .use(wrapCodeTerms)
      .use(rewriteImgSources)
      .use(rewriteAssetImgTags)
      .use(alerts as unknown as (ctx: Context) => void, context || {})
      .use(html) as unknown as UnifiedProcessor
  )
}

export function createMarkdownOnlyProcessor(context: Context): UnifiedProcessor {
  return (
    unified()
      .use(remarkParse)
      .use(gfm)
      .use(markUnescapedAlertMarkers)
      // TypeScript's unified plugin types do not model context-bound transformer factories.
      .use(rewriteLocalLinks as unknown as (ctx: Context) => void, context)
      .use(remarkStringify, {
        handlers: { text: textWithAlertMarkers },
      }) as unknown as UnifiedProcessor
  )
}

// GitHub alert markers stop rendering as alerts once remark-stringify escapes their brackets.
const ALERT_MARKER = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?=\s|$)/i

// remark-parse drops the backslash from `\[!NOTE]`, so only the source shows an intentionally literal marker.
const unescapedAlertMarkers = new WeakSet<Text>()

function markUnescapedAlertMarkers() {
  return (tree: Root, file: { value: unknown }) => {
    const source = String(file.value)
    visit(tree, 'text', (node) => {
      const offset = node.position?.start.offset
      if (offset !== undefined && source[offset] === '[' && ALERT_MARKER.test(node.value)) {
        unescapedAlertMarkers.add(node)
      }
    })
  }
}

function textWithAlertMarkers(
  node: Text,
  parent: Parents | undefined,
  state: State,
  info: Info,
): string {
  const marker = node.value.match(ALERT_MARKER)?.[0]
  const startsBlockquoteParagraph =
    parent?.type === 'paragraph' &&
    parent.children[0] === node &&
    state.stack[state.stack.length - 3] === 'blockquote'
  if (!marker || !startsBlockquoteParagraph || !unescapedAlertMarkers.has(node))
    return state.safe(node.value, info)
  return marker + state.safe(node.value.slice(marker.length), { ...info, before: ']' })
}

export function createMinimalProcessor(context: Context): UnifiedProcessor {
  return (
    unified()
      .use(remarkParse)
      .use(gfm)
      // TypeScript's unified plugin types do not model context-bound transformer factories.
      .use(rewriteLocalLinks as unknown as (ctx: Context) => void, context)
      .use(remark2rehype, { allowDangerousHtml: true })
      .use(slug)
      .use(raw)
      .use(html) as unknown as UnifiedProcessor
  )
}
