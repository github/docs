// Generates an llms.txt file from popularity data and the docs page catalog.
//
// Usage:
//   npm run generate-llms-txt -- --config data/llms-txt/config-docs.yml --output data/llms-txt/docs.md
//   npm run generate-llms-txt -- --config data/llms-txt/config-monolith.yml --output /tmp/monolith.md
//
// Both targets layer overrides on top of data/llms-txt/config-default.yml.
// Writers can edit categories, pinned pages, thresholds, and copy in the
// configs without touching this script.
//
// Requires DOCS_BOT_PAT_BASE for fetching popularity data from
// github/docs-internal-data.

import fs from 'fs'

import yaml from 'js-yaml'

import { loadPageMap } from '@/frame/lib/page-data'
import { renderContent } from '@/content-render/index'
import { getDataByLanguage } from '@/data-directory/lib/get-data'
import { allVersions } from '@/versions/lib/all-versions'
import type { Page, Context } from '@/types'

interface LlmsTxtConfig {
  title: string
  description: string
  how_to_use_heading: string
  how_to_use: string
  pinned_section_heading: string
  pinned_pages: string[]
  top_n_popular_pages: number
  small_category_threshold: number
  excluded_categories: string[]
  excluded_slugs: string[]
  more_pages_heading: string
  auto_update_comment: string
}

const DEFAULT_CONFIG_PATH = 'data/llms-txt/config-default.yml'

export const ROLLUP_URL =
  'https://raw.githubusercontent.com/github/docs-internal-data/main/hydro/rollups/pageviews/en/free-pro-team/rollup.json'

const BASE_URL = 'https://docs.github.com'

export function loadConfig(overridePath?: string): LlmsTxtConfig {
  const defaults = yaml.load(fs.readFileSync(DEFAULT_CONFIG_PATH, 'utf8')) as Partial<LlmsTxtConfig>
  if (!overridePath || overridePath === DEFAULT_CONFIG_PATH) {
    return defaults as LlmsTxtConfig
  }
  const overrides = yaml.load(
    fs.readFileSync(overridePath, 'utf8'),
  ) as Partial<LlmsTxtConfig> | null
  return { ...(defaults as LlmsTxtConfig), ...(overrides || {}) }
}

export type Rollup = Record<string, number>
export type PageMap = Record<string, Page>

export async function fetchRollup(): Promise<Rollup> {
  const token = process.env.DOCS_BOT_PAT_BASE
  if (!token) throw new Error('DOCS_BOT_PAT_BASE is required')
  const res = await fetch(ROLLUP_URL, {
    headers: {
      Accept: 'application/vnd.github.raw+json',
      Authorization: `token ${token}`,
    },
  })
  if (!res.ok) {
    throw new Error(`Failed to fetch rollup: ${res.status} ${res.statusText} (${ROLLUP_URL})`)
  }
  return (await res.json()) as Rollup
}

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

export function pageExists(pagePath: string, pages: PageMap): boolean {
  return `/en/${pagePath}` in pages
}

function normalize(s: string): string {
  return s
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,;:!?])/g, '$1')
    .trim()
}

export async function getPageTitle(permalink: string, pages: PageMap): Promise<string> {
  const page = pages[permalink]
  const raw = page?.shortTitle || page?.title || ''
  if (!raw) return titleCase(permalink.split('/').pop() || '')
  const rendered = await renderLiquid(raw)
  return normalize(rendered).replace(/ documentation$/i, '')
}

export async function getPageIntro(permalink: string, pages: PageMap): Promise<string | null> {
  const page = pages[permalink]
  const raw = page?.intro || ''
  if (!raw) return null
  return normalize(await renderLiquid(raw))
}

export async function formatPageLine(pagePath: string, pages: PageMap): Promise<string> {
  const permalink = `/en/${pagePath}`
  const title =
    (await getPageTitle(permalink, pages)) || titleCase(pagePath.split('/').pop() || pagePath)
  const intro = await getPageIntro(permalink, pages)
  if (intro) return `* [${title}](${BASE_URL}${permalink}): ${intro}`
  return `* [${title}](${BASE_URL}${permalink})`
}

export function titleCase(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export async function generate(
  pages: PageMap,
  rollup: Rollup,
  config: LlmsTxtConfig,
): Promise<string> {
  const excludedCategories = new Set(config.excluded_categories)
  const excludedSlugs = new Set(config.excluded_slugs)
  const pinnedSet = new Set(config.pinned_pages)

  const topPages = Object.entries(rollup)
    .filter(
      ([path]) =>
        path &&
        !excludedSlugs.has(path.split('/').pop() || '') &&
        !excludedCategories.has(path.split('/')[0]) &&
        !pinnedSet.has(path) &&
        pageExists(path, pages),
    )
    .sort((a, b) => b[1] - a[1])
    .slice(0, config.top_n_popular_pages)

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

  const sections: string[] = []
  sections.push(`# ${config.title.trim()}`, '')
  sections.push(`> ${config.description.trim()}`, '')
  sections.push(`## ${config.how_to_use_heading.trim()}`, '')
  sections.push(config.how_to_use.trim(), '')

  const existingPinned = config.pinned_pages.filter((p) => pageExists(p, pages))
  if (existingPinned.length > 0) {
    sections.push(`## ${config.pinned_section_heading.trim()}`, '')
    for (const p of existingPinned) sections.push(await formatPageLine(p, pages))
    sections.push('')
  }

  const largeCategories: [string, string[]][] = []
  const smallCategoryPages: string[] = []
  for (const [cat, catPages] of categories) {
    if (catPages.length < config.small_category_threshold) smallCategoryPages.push(...catPages)
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
    sections.push(`## ${config.more_pages_heading.trim()}`, '')
    for (const p of smallCategoryPages) sections.push(await formatPageLine(p, pages))
    sections.push('')
  }

  sections.push(config.auto_update_comment.trim())
  return `${sections.join('\n')}\n`
}

function parseArgs(argv: string[]): { configPath?: string; outputPath?: string } {
  const out: { configPath?: string; outputPath?: string } = {}
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--config' || arg === '-c') out.configPath = argv[++i]
    else if (arg === '--output' || arg === '-o') out.outputPath = argv[++i]
  }
  return out
}

async function main() {
  const { configPath, outputPath } = parseArgs(process.argv.slice(2))
  const config = loadConfig(configPath)
  const pages = await loadPageMap(undefined, ['en'])
  const rollup = await fetchRollup()
  const content = await generate(pages, rollup, config)
  if (outputPath) {
    fs.writeFileSync(outputPath, content)
  } else {
    process.stdout.write(content)
  }
}

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
