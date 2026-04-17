//
// Generates the llms.txt content for github.com from popularity data
// and the docs page catalog. Run via:
//
//   npx tsx src/workflows/generate-llms-txt.ts > llms.txt
//
// Requires DOCS_BOT_PAT_BASE for fetching popularity data from
// github/docs-internal-data.
//
// Configuration lives in data/llms-txt-config.yml — writers can edit
// categories, pinned pages, thresholds, and text there without
// touching this script.
//

import fs from 'fs'

import yaml from 'js-yaml'

import { loadPageMap } from '@/frame/lib/page-data'
import { renderContent } from '@/content-render/index'
import { getDataByLanguage } from '@/data-directory/lib/get-data'
import { allVersions } from '@/versions/lib/all-versions'
import type { Page, Context } from '@/types'

// =====================================================================
// Configuration — loaded from data/llms-txt-config.yml
// =====================================================================

interface LlmsTxtConfig {
  top_n: number
  small_category_threshold: number
  excluded_categories: string[]
  excluded_slugs: string[]
  pinned_pages: string[]
  pinned_section_heading: string
  more_pages_heading: string
  auto_update_comment: string
  header: string
  api_section: string
}

export function loadConfig(configPath = 'data/llms-txt-config.yml'): LlmsTxtConfig {
  return yaml.load(fs.readFileSync(configPath, 'utf8')) as LlmsTxtConfig
}

const config = loadConfig()

export const ROLLUP_URL =
  'https://raw.githubusercontent.com/github/docs-internal-data/main/hydro/rollups/pageviews/en/free-pro-team/rollup.json'
export const TOP_N = config.top_n
export const SMALL_CATEGORY_THRESHOLD = config.small_category_threshold
export const EXCLUDED_CATEGORIES = new Set(config.excluded_categories)
export const EXCLUDED_SLUGS = new Set(config.excluded_slugs)
export const PINNED_PAGES = config.pinned_pages

const BASE_URL = 'https://docs.github.com'

const HEADER = config.header.trimEnd()
const API_SECTION = config.api_section.trimEnd()
const PINNED_SECTION_HEADING = config.pinned_section_heading.trimEnd()
const MORE_PAGES_HEADING = config.more_pages_heading.trimEnd()
const AUTO_UPDATE_COMMENT = config.auto_update_comment.trimEnd()

// =====================================================================
// Types
// =====================================================================

export type Rollup = Record<string, number>
export type PageMap = Record<string, Page>

// =====================================================================
// Data loading
// =====================================================================

export async function fetchRollup(): Promise<Rollup> {
  const token = process.env.DOCS_BOT_PAT_BASE
  if (!token) throw new Error('DOCS_BOT_PAT_BASE is required')
  const res = await fetch(ROLLUP_URL, {
    headers: {
      Accept: 'application/vnd.github.raw+json',
      Authorization: `token ${token}`,
    },
  })
  if (!res.ok)
    throw new Error(`Failed to fetch rollup: ${res.status} ${res.statusText} (${ROLLUP_URL})`)
  return (await res.json()) as Rollup
}

// =====================================================================
// Liquid rendering
// =====================================================================

const renderContext: Context = {
  currentLanguage: 'en',
  currentVersion: 'free-pro-team@latest',
  currentVersionObj: allVersions['free-pro-team@latest'],
  getDottedData: (path: string) => getDataByLanguage(path, 'en'),
} as Context

export async function renderLiquid(template: string): Promise<string> {
  if (!template || (!template.includes('{%') && !template.includes('{{'))) return template
  const html = await renderContent(template, renderContext, { textOnly: true })
  return html.replace(/^<p>|<\/p>$/g, '').trim()
}

// =====================================================================
// Helpers
// =====================================================================

export function pageExists(pagePath: string, pages: PageMap): boolean {
  return `/en/${pagePath}` in pages
}

export async function getPageTitle(permalink: string, pages: PageMap): Promise<string> {
  const page = pages[permalink]
  const raw = page?.shortTitle || page?.title || ''
  if (!raw) return titleCase(permalink.split('/').pop() || '')
  const rendered = await renderLiquid(raw)
  return rendered.replace(/ documentation$/i, '')
}

export async function getPageIntro(permalink: string, pages: PageMap): Promise<string | null> {
  const page = pages[permalink]
  const raw = page?.intro || ''
  if (!raw) return null
  return renderLiquid(raw)
}

export async function formatPageLine(pagePath: string, pages: PageMap): Promise<string> {
  const permalink = `/en/${pagePath}`
  const title =
    (await getPageTitle(permalink, pages)) || titleCase(pagePath.split('/').pop() || pagePath)
  const intro = await getPageIntro(permalink, pages)
  if (intro) return `- [${title}](${BASE_URL}${permalink}): ${intro}`
  return `- [${title}](${BASE_URL}${permalink})`
}

export function titleCase(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

// =====================================================================
// Main generation
// =====================================================================

export async function generate(pages: PageMap, rollup: Rollup): Promise<string> {
  const pinnedSet = new Set(PINNED_PAGES)
  const topPages = Object.entries(rollup)
    .filter(
      ([path]) =>
        path &&
        !EXCLUDED_SLUGS.has(path) &&
        !EXCLUDED_CATEGORIES.has(path.split('/')[0]) &&
        !pinnedSet.has(path) &&
        pageExists(path, pages),
    )
    .sort((a, b) => b[1] - a[1])
    .slice(0, TOP_N)

  // Group by category, alphabetical within each
  const categoryMap = new Map<string, string[]>()
  for (const [pagePath] of topPages) {
    const category = pagePath.split('/')[0]
    const list = categoryMap.get(category) ?? []
    list.push(pagePath)
    categoryMap.set(category, list)
  }
  for (const [, list] of categoryMap) list.sort()
  const categories = new Map(
    [...categoryMap.entries()].sort(
      (a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]),
    ),
  )

  const sections: string[] = [HEADER, '', API_SECTION, '']

  // Pinned section
  const existingPinned = PINNED_PAGES.filter((p) => pageExists(p, pages))
  if (existingPinned.length > 0) {
    sections.push(`## ${PINNED_SECTION_HEADING}`, '')
    for (const p of existingPinned) sections.push(await formatPageLine(p, pages))
    sections.push('')
  }

  // Large and small categories
  const largeCategories: [string, string[]][] = []
  const smallCategoryPages: string[] = []
  for (const [cat, catPages] of categories) {
    if (catPages.length < SMALL_CATEGORY_THRESHOLD) smallCategoryPages.push(...catPages)
    else largeCategories.push([cat, catPages])
  }
  smallCategoryPages.sort()

  for (const [cat, catPages] of largeCategories) {
    const title = (await getPageTitle(`/en/${cat}`, pages)) || titleCase(cat)
    sections.push(`## ${title}`, '')
    const intro = await getPageIntro(`/en/${cat}`, pages)
    if (intro) sections.push(`> ${intro}`, '')
    for (const p of catPages) sections.push(await formatPageLine(p, pages))
    sections.push('')
  }

  if (smallCategoryPages.length > 0) {
    sections.push(`## ${MORE_PAGES_HEADING}`, '')
    for (const p of smallCategoryPages) sections.push(await formatPageLine(p, pages))
    sections.push('')
  }

  sections.push(AUTO_UPDATE_COMMENT)
  return sections.join('\n')
}

// =====================================================================
// Entry point
// =====================================================================

async function main() {
  const pages = await loadPageMap(undefined, ['en'])
  const rollup = await fetchRollup()
  const content = await generate(pages, rollup)
  process.stdout.write(content)
}

// Only run when executed directly, not when imported for testing
const isEntryPoint =
  import.meta.url === `file://${process.argv[1]}` ||
  process.argv[1]?.endsWith('generate-llms-txt.ts')

if (isEntryPoint) {
  try {
    await main()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
