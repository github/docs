import { unified } from 'unified'
import markdown from 'remark-parse-no-trim'
import markdownNext from 'remark-parse'
import gfm from 'remark-gfm'
import emoji from 'remark-gemoji-to-emoji'
import remark2rehype from 'remark-rehype'
import raw from 'rehype-raw'
import slug from 'rehype-slug'
import autolinkHeadings from 'rehype-autolink-headings'
import highlight from 'rehype-highlight'
import dockerfile from 'highlight.js/lib/languages/dockerfile.js'
import http from 'highlight.js/lib/languages/http.js'
import groovy from 'highlight.js/lib/languages/groovy.js'
import erb from 'highlight.js/lib/languages/erb.js'
import powershell from 'highlight.js/lib/languages/powershell.js'
import html from 'rehype-stringify'
import HighlightjsGraphql from 'highlightjs-graphql'
import remarkCodeExtra from 'remark-code-extra'
import codeHeader from './plugins/code-header.js'
import rewriteLocalLinks from './plugins/rewrite-local-links.js'
import useEnglishHeadings from './plugins/use-english-headings.js'
import rewriteLegacyAssetPaths from './plugins/rewrite-legacy-asset-paths.js'
import wrapInElement from './plugins/wrap-in-element.js'
const graphql = HighlightjsGraphql.definer

export default function createProcessor(context) {
  return unified()
    .use(process.env.COMMONMARK ? markdownNext : markdown)
    .use(process.env.COMMONMARK ? gfm : null)
    .use(remarkCodeExtra, { transform: codeHeader })
    .use(emoji)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(slug)
    .use(useEnglishHeadings, context)
    .use(autolinkHeadings, { behavior: 'wrap' })
    .use(highlight, {
      languages: { graphql, dockerfile, http, groovy, erb, powershell },
      subset: false,
    })
    .use(raw)
    .use(rewriteLegacyAssetPaths, context)
    .use(wrapInElement, { selector: 'ol > li img', wrapper: 'span.procedural-image-wrapper' })
    .use(rewriteLocalLinks, {
      languageCode: context.currentLanguage,
      version: context.currentVersion,
    })
    .use(html)
}
