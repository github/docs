import { unified } from 'unified'
import remarkParse from 'remark-parse'
import gfm from 'remark-gfm'
import emoji from 'remark-gemoji-to-emoji'
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
import rewriteTheadThScope from './rewrite-thead-th-scope'
import rewriteEmptyTableRows from './rewrite-empty-table-rows'
import rewriteForRowheaders from './rewrite-for-rowheaders'
import rewriteTableCaptions from './rewrite-table-captions'
import wrapProceduralImages from './wrap-procedural-images'
import parseInfoString from './parse-info-string'
import annotate from './annotate'
import alerts from './alerts'
import removeHtmlComments from 'remark-remove-comments'
import remarkStringify from 'remark-stringify'
import type { Context, UnifiedProcessor } from '@/content-render/types'

export function createProcessor(context: Context): UnifiedProcessor {
  return (
    unified()
      .use(remarkParse)
      .use(removeHtmlComments)
      .use(gfm)
      // Markdown AST below vvv
      .use(parseInfoString)
      .use(rewriteLocalLinks, context)
      .use(emoji)
      // Markdown AST above ^^^
      .use(remark2rehype, { allowDangerousHtml: true })
      // HTML AST below vvv
      .use(slug)
      // useEnglishHeadings plugin requires context with englishHeadings property
      .use(useEnglishHeadings as any, context || {})
      .use(headingLinks)
      .use(codeHeader)
      .use(annotate, context)
      // Using 'as any' for highlight plugin due to complex type mismatch between unified and rehype-highlight
      .use(highlight as any, {
        languages: { ...common, graphql, dockerfile, http, groovy, erb, powershell },
        subset: false,
        aliases: {
          // As of Jan 2024, 'jsonc' is not supported by highlight.js. It
          // just because plain text.
          // But 'jsonc' works great in github.com. For example, when
          // previewing and edited .md content in the browser. Or viewing
          // PR diffs in web view.
          // So by sticking to 'jsonc' where there's JSON with comments,
          // it's technically more correct, looks good in github.com,
          // but with this alias you get the nice syntax highlighting when
          // viewed on our site.
          json: 'jsonc',
        },
      })
      .use(raw)
      .use(wrapProceduralImages)
      .use(rewriteEmptyTableRows)
      .use(rewriteTheadThScope)
      .use(rewriteForRowheaders)
      .use(rewriteTableCaptions)
      .use(rewriteImgSources)
      .use(rewriteAssetImgTags)
      // alerts plugin requires context with alertTitles property
      .use(alerts as any, context || {})
      // HTML AST above ^^^
      .use(html) as UnifiedProcessor // String below vvv
  )
}

export function createMarkdownOnlyProcessor(context: Context): UnifiedProcessor {
  return unified()
    .use(remarkParse)
    .use(gfm)
    .use(rewriteLocalLinks, context)
    .use(remarkStringify) as UnifiedProcessor
}

export function createMinimalProcessor(context: Context): UnifiedProcessor {
  return unified()
    .use(remarkParse)
    .use(gfm)
    .use(rewriteLocalLinks, context)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(slug)
    .use(raw)
    .use(html) as UnifiedProcessor
}
