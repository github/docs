// Builds search records from the Article API rather than by scraping HTML.
// Fetching pre-rendered markdown skips the full HTML render, takes title,
// intro and breadcrumbs from structured metadata, and parses headings out of
// an mdast tree instead of a DOM.

import Bottleneck from 'bottleneck'
import chalk from 'chalk'
import dotenv from 'dotenv'
import boxen from 'boxen'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toString } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'
import { gfm } from 'micromark-extension-gfm'
import { gfmFromMarkdown } from 'mdast-util-gfm'
import GithubSlugger from 'github-slugger'
import type { Node, Parent } from 'unist'

import languages from '@/languages/lib/languages-server'
import getPopularPages from '@/search/scripts/scrape/lib/popular-pages'
import { getAllVersionsKeyFromIndexVersion } from '@/search/lib/elasticsearch-versions'
import { fetchWithRetry } from '@/frame/lib/fetch-utils'

import type {
  Record,
  FailedPage,
  Page,
  Permalink,
  Config,
  Redirects,
} from '@/search/scripts/scrape/types'

// The rehype alerts plugin only runs in the HTML pipeline, so GitHub-style
// alert markers such as `> [!NOTE]` reach the markdown-only output as literal
// text. Strip them so they stay out of search results.
const ALERT_MARKER_REGEXP = /\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION)\]\n?/gi

// Same ignored headings as the HTML scraping approach
const IGNORED_HEADING_SLUGS = new Set(['in-this-article', 'further-reading', 'prerequisites'])

// Known translations of the 3 ignored navigational headings.
// These are used as a fallback when github-slugger produces non-ASCII slugs
// that don't match the English slug set above.
const IGNORED_HEADING_TEXTS = new Set([
  // English (lowercase)
  'in this article',
  'further reading',
  'prerequisites',
  // Japanese (ja)
  'この記事の内容',
  '参考資料',
  '前提条件',
  // Chinese (zh)
  '本文内容',
  '延伸阅读',
  '先决条件',
  // Korean (ko)
  '이 문서의 내용',
  '추가 참고 자료',
  '필수 조건',
  // Spanish (es)
  'en este artículo',
  'información adicional',
  'requisitos previos',
  // Portuguese (pt)
  'neste artigo',
  'leitura adicional',
  'pré-requisitos',
  // Russian (ru)
  'в этой статье',
  'дополнительные материалы',
  'необходимые компоненты',
  // French (fr)
  'dans cet article',
  'pour aller plus loin',
  'prérequis',
  // German (de)
  'in diesem artikel',
  'weiterführende themen',
  'voraussetzungen',
])

// Default port matches build-records.ts for consistency
const DEFAULT_PORT = 4002

dotenv.config()

// These defaults are known to work fine in GitHub Actions.
const MAX_CONCURRENT = parseInt(process.env.BUILD_RECORDS_MAX_CONCURRENT || '5', 10)
const MIN_TIME = parseInt(process.env.BUILD_RECORDS_MIN_TIME || '200', 10)

const FORCE_0_POPULARITY_PRODUCTS = new Set(['contributing'])

const pageMarker = chalk.green('|')
const recordMarker = chalk.grey('.')

interface HeadingNode extends Node {
  type: 'heading'
  depth: number
}

export interface ArticleApiResponse {
  meta: {
    title: string
    intro: string
    product: string
    breadcrumbs?: Array<{ href: string; title: string }>
  }
  body: string
}

export interface ArticleApiErrorResponse {
  error: string
}

export type ArticleApiResult = ArticleApiResponse | ArticleApiErrorResponse

function parseMarkdown(markdown: string) {
  return fromMarkdown(markdown, {
    extensions: [gfm()],
    mdastExtensions: [gfmFromMarkdown()],
  })
}

// Block container types whose children should be separated by newlines.
// These contain other block-level nodes (paragraphs, lists, etc.) and
// toString() would concatenate them without whitespace, producing tokens
// like "SSH.Make" that the ES tokenizer can't split.
const BLOCK_CONTAINER_TYPES = new Set([
  'root',
  'blockquote',
  'list',
  'listItem',
  'table',
  'tableRow',
  'footnoteDefinition',
])

// Converts an AST to plain text, joining block-level children with newlines.
// It recurses into block containers such as lists and blockquotes so nested
// block boundaries get whitespace too, not just the ones at the root.
function astToPlainText(node: Node): string {
  const parent = node as Parent
  if (!parent.children) {
    return toString(node)
  }

  if (BLOCK_CONTAINER_TYPES.has(node.type)) {
    return parent.children.map((child) => astToPlainText(child)).join('\n')
  }

  // Leaf blocks (paragraph, heading, tableCell) and inline nodes:
  // concatenate inline text directly.
  return toString(node)
}

// Parses the markdown once, then extracts both headings and plain-text
// content from the tree. Code blocks stay in the text so terms that only
// appear in an example, such as `ssh_url` or `ssh://`, stay searchable.
export function extractFromMarkdown(markdown: string): { headings: string; content: string } {
  const ast = parseMarkdown(markdown)

  const headings: string[] = []
  const slugger = new GithubSlugger()

  visit(ast, (node: Node) => {
    if (node.type !== 'heading') return
    const headingNode = node as HeadingNode
    if (headingNode.depth !== 2) return

    const headingText = toString(node)
    const slug = slugger.slug(headingText)

    // Skip navigational headings by slug or known translated text
    if (IGNORED_HEADING_SLUGS.has(slug)) return
    if (IGNORED_HEADING_TEXTS.has(headingText.toLowerCase().trim())) return

    headings.push(headingText)
  })

  const content = astToPlainText(ast).replace(ALERT_MARKER_REGEXP, '')

  return { headings: headings.join('\n'), content }
}

// Extracts h2 headings, minus the navigational ones: in-this-article,
// further-reading and prerequisites.
export function extractHeadingsFromMarkdown(markdown: string): string {
  return extractFromMarkdown(markdown).headings
}

export function markdownToPlainText(markdown: string): string {
  return extractFromMarkdown(markdown).content
}

export function articleApiResponseToRecord(pathname: string, data: ArticleApiResponse): Record {
  const breadcrumbsArray = data.meta.breadcrumbs?.map((b) => b.title) || []
  const breadcrumbs =
    breadcrumbsArray
      .slice(0, breadcrumbsArray.length > 1 ? -1 : breadcrumbsArray.length)
      .join(' / ') || ''

  const { headings, content: bodyText } = extractFromMarkdown(data.body)

  const intro = data.meta.intro || ''
  const content =
    intro && !bodyText.includes(intro.trim())
      ? `${intro.trim()}\n${bodyText.trim()}`.trim()
      : bodyText.trim()

  return {
    objectID: pathname,
    breadcrumbs,
    title: data.meta.title,
    headings,
    content,
    intro,
    toplevel: breadcrumbsArray[0] || '',
  }
}

export interface FetchResult {
  record: Record | null
  failure: FailedPage | null
}

function isErrorResponse(data: ArticleApiResult): data is ArticleApiErrorResponse {
  return 'error' in data
}

export async function fetchArticleAsRecord(
  pathname: string,
  baseUrl: string = `http://localhost:${DEFAULT_PORT}`,
): Promise<FetchResult> {
  const url = `${baseUrl}/api/article?pathname=${encodeURIComponent(pathname)}`

  try {
    const response = await fetchWithRetry(url, undefined, {
      retries: 3,
      throwHttpErrors: false,
      timeout: 60000,
    })
    if (!response.ok) {
      let errorMessage = `HTTP ${response.status}: ${response.statusText}`
      let errorType = `HTTP ${response.status}`
      try {
        const body = await response.json()
        if (body && typeof body.error === 'string') {
          errorMessage = body.error
          errorType = 'API Error'
        }
      } catch {
        /* ignore JSON parse errors */
      }
      return {
        record: null,
        failure: {
          url: pathname,
          error: errorMessage,
          errorType,
        },
      }
    }

    const data = (await response.json()) as ArticleApiResult

    if (isErrorResponse(data)) {
      return {
        record: null,
        failure: {
          url: pathname,
          error: data.error,
          errorType: 'API Error',
        },
      }
    }

    const record = articleApiResponseToRecord(pathname, data)
    return { record, failure: null }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    const errorName = error instanceof Error ? error.name : undefined
    const errorCode = (error as { code?: string }).code

    // Prefer structured timeout indicators (name/code), with a documented
    // fallback to message inspection for environments that only expose text.
    const isTimeout =
      errorName === 'AbortError' ||
      errorCode === 'ETIMEDOUT' ||
      errorCode === 'ECONNABORTED' ||
      message.toLowerCase().includes('timeout')

    return {
      record: null,
      failure: {
        url: pathname,
        error: message,
        errorType: isTimeout ? 'Timeout' : 'Network Error',
      },
    }
  }
}

export interface BuildRecordsResult {
  records: Record[]
  failedPages: FailedPage[]
}

// A drop-in replacement for buildRecords in build-records.ts.
export default async function buildRecordsFromApi(
  indexName: string,
  indexablePages: Page[],
  indexVersion: string,
  languageCode: string,
  redirects: Redirects,
  config: Config = {} as Config,
): Promise<BuildRecordsResult> {
  const pageVersion = getAllVersionsKeyFromIndexVersion(indexVersion)
  const { noMarkers, docsInternalDataPath } = config

  console.log(`\n\nBuilding records for index '${indexName}' (${languages[languageCode].name})`)

  const records: Record[] = []
  const failedPages: FailedPage[] = []

  const pages = indexablePages
    .filter((page) => page.languageCode === languageCode)
    .filter((page) => page.permalinks.some((permalink) => permalink.pageVersion === pageVersion))

  // Get permalinks for this language and version, deduplicating by href.
  // Cross-product children can cause the same page to appear multiple
  // times in the tree under different parents.
  const seen = new Set<string>()
  const permalinks = pages
    .map((page) =>
      page.permalinks.find(
        (permalink) =>
          permalink.languageCode === languageCode && permalink.pageVersion === pageVersion,
      ),
    )
    .filter((permalink): permalink is Permalink => {
      if (!permalink) return false
      if (seen.has(permalink.href)) return false
      seen.add(permalink.href)
      return true
    })

  const popularPages = docsInternalDataPath
    ? await getPopularPages(docsInternalDataPath, redirects, indexVersion, languageCode)
    : {}

  console.log('indexable pages', indexablePages.length)
  console.log('pages in index', pages.length)
  console.log('permalinks in index', permalinks.length)
  console.log(pageMarker, 'denotes pages')
  console.log(recordMarker, 'denotes records derived from sections of pages')
  console.log('popular page ratios', Object.keys(popularPages).length)

  const hasPopularPages = Object.keys(popularPages).length > 0
  const baseUrl = `http://localhost:${DEFAULT_PORT}`

  const limiter = new Bottleneck({
    maxConcurrent: MAX_CONCURRENT,
    minTime: MIN_TIME,
  })

  const fetchPromises = permalinks.map((permalink) =>
    limiter.schedule(async () => {
      const result = await fetchArticleAsRecord(permalink.href, baseUrl)

      if (result.failure) {
        result.failure.relativePath = permalink.relativePath
        failedPages.push(result.failure)
        if (!noMarkers) process.stdout.write(chalk.red('✗'))
        return null
      }

      if (result.record) {
        if (!result.record.title) {
          failedPages.push({
            url: permalink.href,
            relativePath: permalink.relativePath,
            error: 'Record has empty title',
            errorType: 'Validation Error',
          })
          if (!noMarkers) process.stdout.write(chalk.red('✗'))
          return null
        }

        const pathArticle = permalink.relativePath.replace('/index.md', '').replace('.md', '')
        let popularity = (hasPopularPages && popularPages[pathArticle]) || 0.0

        if (FORCE_0_POPULARITY_PRODUCTS.size) {
          const product = result.record.objectID.split('/')[2]
          if (FORCE_0_POPULARITY_PRODUCTS.has(product)) {
            popularity = 0.0
          }
        }

        result.record.popularity = popularity
        if (!noMarkers) process.stdout.write(pageMarker + recordMarker)
        return result.record
      }

      return null
    }),
  )

  const results = await Promise.all(fetchPromises)
  for (const record of results) {
    if (record) records.push(record)
  }

  console.log('\nrecords in index: ', records.length)

  if (failedPages.length > 0) {
    const failureCount = failedPages.length
    const header = chalk.bold.red(`${failureCount} page(s) failed to scrape\n\n`)

    const failureList = failedPages
      .slice(0, 10)
      .map((failure, idx) => {
        const number = chalk.gray(`${idx + 1}. `)
        const errorType = chalk.yellow(failure.errorType)
        const pathLine = failure.relativePath
          ? `\n${chalk.cyan('   Path: ')}${failure.relativePath}`
          : ''
        const urlLine = failure.url ? `\n${chalk.cyan('   URL: ')}${failure.url}` : ''
        const errorLine = `\n${chalk.gray(`   Error: ${failure.error}`)}`

        return `${number}${errorType}${pathLine}${urlLine}${errorLine}`
      })
      .join('\n\n')

    const remaining =
      failureCount > 10 ? `\n\n${chalk.gray(`... and ${failureCount - 10} more`)}` : ''

    const boxContent = header + failureList + remaining
    const box = boxen(boxContent, {
      title: chalk.red('⚠ Failed Pages'),
      padding: 1,
      borderColor: 'yellow',
    })

    console.log(`\n${box}\n`)

    console.log(
      chalk.yellow(
        `💡 Tip: These failures won't stop the scraping process. The script will continue with the remaining pages.`,
      ),
    )

    if (failedPages.some((f) => f.errorType === 'Timeout')) {
      console.log(
        chalk.gray(
          `   For timeout errors, try: export BUILD_RECORDS_MAX_CONCURRENT=50 (currently ${MAX_CONCURRENT})`,
        ),
      )
    }
  }

  return { records, failedPages }
}
