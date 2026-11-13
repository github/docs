import fs from 'fs'
import path from 'path'
import matter from '@gr2m/gray-matter'
import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '@/content-linter/lib/helpers/utils'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

// A journey landing page that sets docsTeamMetrics declares the membership of
// that initiative: the tagged articles must be exactly the guides it links.
// Initiative metrics sum page views over every article with the tag, so a
// guide added to the journey without the tag silently drops out of the
// numbers, and that lost history can't be recovered later. Tags that no
// landing page declares (for example copilot-cli, which is enforced by path
// in GHD066) are ignored by this rule.
//
// CI lints only the files a pull request changes, and adding or removing a
// journey guide usually changes only the landing page. So the landing page
// checks its guides for the tag, and also reports any article outside the
// journey that still has the tag.

type JourneyIndex = {
  // content-relative file path -> tags required because a tagged landing page links it
  requiredTags: Map<string, Set<string>>
  // tags declared by at least one journey landing page
  declaredTags: Set<string>
  // tagged journey landing page path -> its tags and resolved guide paths
  landings: Map<string, { tags: string[]; guides: Set<string> }>
  // non-landing article path -> its docsTeamMetrics values
  taggedArticles: Map<string, string[]>
}

const indexCache = new Map<string, JourneyIndex>()

function getContentDir(): string {
  return path.resolve(process.env.ROOT || '.', 'content')
}

function toTags(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : []
}

function getGuideHrefs(fm: Record<string, unknown>): string[] {
  if (!Array.isArray(fm.journeyTracks)) return []
  const hrefs: string[] = []
  for (const track of fm.journeyTracks) {
    if (!track || typeof track !== 'object' || !Array.isArray(track.guides)) continue
    for (const guide of track.guides) {
      if (guide && typeof guide === 'object' && typeof guide.href === 'string') {
        hrefs.push(guide.href)
      }
    }
  }
  return hrefs
}

// Resolve a guide href to a content-relative file path using the same order
// as GHD059: from content/ first, then relative to the landing page's
// directory. Returning null skips every GHD068 check for that guide, so the
// two rules must accept the same hrefs. Hrefs containing Liquid can't be
// resolved statically, and GHD059 already reports hrefs that don't exist, so
// both return null here rather than raising a second error.
function resolveGuide(href: string, contentDir: string, landingFile: string): string | null {
  if (href.includes('{%') || href.includes('{{')) return null
  const normalized = href.replace(/^\/+/, '').replace(/\/+$/, '')
  const bases = [contentDir, path.dirname(landingFile)]
  for (const base of bases) {
    for (const candidate of [`${normalized}.md`, path.join(normalized, 'index.md')]) {
      const full = path.resolve(base, candidate)
      if (!fs.existsSync(full) || !fs.statSync(full).isFile()) continue
      // path.relative uses platform separators, so keys match lookups on Windows.
      const rel = path.relative(contentDir, full)
      if (rel.startsWith('..') || path.isAbsolute(rel)) continue
      return rel
    }
  }
  return null
}

// Early Access content comes from a separate repo and its pages aren't
// linked from public journey landing pages, so GHD068 ignores it entirely.
function isEarlyAccess(contentRelPath: string): boolean {
  return contentRelPath.split(path.sep)[0] === 'early-access'
}

function readFrontmatterFromDisk(file: string): Record<string, unknown> {
  try {
    return matter(fs.readFileSync(file, 'utf8')).data as Record<string, unknown>
  } catch {
    return {}
  }
}

function buildIndex(contentDir: string): JourneyIndex {
  const index: JourneyIndex = {
    requiredTags: new Map(),
    declaredTags: new Set(),
    landings: new Map(),
    taggedArticles: new Map(),
  }
  const entries = fs.readdirSync(contentDir, { recursive: true, withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.md')) continue
    const full = path.join(entry.parentPath, entry.name)
    const rel = path.relative(contentDir, full)
    if (isEarlyAccess(rel)) continue
    const raw = fs.readFileSync(full, 'utf8')
    // Check the raw text first, so only tagged files get parsed.
    if (!raw.includes('docsTeamMetrics')) continue
    const fm = matter(raw).data as Record<string, unknown>
    const tags = toTags(fm.docsTeamMetrics)
    if (tags.length === 0) continue
    if (fm.layout !== 'journey-landing') {
      index.taggedArticles.set(rel, tags)
      continue
    }
    for (const tag of tags) index.declaredTags.add(tag)
    const guides = new Set<string>()
    index.landings.set(rel, { tags, guides })
    for (const href of getGuideHrefs(fm)) {
      const guide = resolveGuide(href, contentDir, full)
      if (!guide) continue
      guides.add(guide)
      const required = index.requiredTags.get(guide) || new Set<string>()
      for (const tag of tags) required.add(tag)
      index.requiredTags.set(guide, required)
    }
  }
  return index
}

// Cached per content directory so the scan runs once per lint run, while
// tests that point ROOT at a fixture directory get their own index.
function getIndex(): JourneyIndex {
  const contentDir = getContentDir()
  let index = indexCache.get(contentDir)
  if (!index) {
    index = buildIndex(contentDir)
    indexCache.set(contentDir, index)
  }
  return index
}

function findLine(lines: string[], needle: string): number {
  const i = lines.findIndex((line) => line.includes(needle))
  return i === -1 ? 1 : i + 1
}

export const docsTeamMetricsJourney = {
  names: ['GHD068', 'docs-team-metrics-journey'],
  description:
    'When a journey landing page sets docsTeamMetrics, every guide it links must have the same docsTeamMetrics values, and no other article may have them.',
  tags: ['frontmatter', 'docs-team-metrics', 'journey-tracks'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const fm = getFrontmatter(params.lines)
    if (!fm) return

    const contentDir = getContentDir()
    // Resolve against ROOT, not the working directory, or other ROOTs skip every check.
    const rootDir = process.env.ROOT || '.'
    const resolved = path.isAbsolute(params.name) ? params.name : path.resolve(rootDir, params.name)
    const relPath = path.relative(contentDir, resolved)
    if (relPath.startsWith('..') || path.isAbsolute(relPath)) return
    if (isEarlyAccess(relPath)) return

    const currentTags = toTags(fm.docsTeamMetrics)
    const landingTags = fm.layout === 'journey-landing' ? currentTags : []

    if (landingTags.length > 0) {
      for (const href of getGuideHrefs(fm)) {
        const guide = resolveGuide(href, contentDir, resolved)
        if (!guide) continue
        const guideTags = toTags(
          readFrontmatterFromDisk(path.join(contentDir, guide)).docsTeamMetrics,
        )
        const missing = landingTags.filter((tag) => !guideTags.includes(tag))
        if (missing.length === 0) continue
        addError(
          onError,
          findLine(params.lines, href),
          `Journey guide ${href} is missing docsTeamMetrics: [${missing.join(', ')}]. Add the value to that article's frontmatter so its page views count toward the initiative.`,
          href,
          undefined,
          null,
        )
      }
    }

    const index = getIndex()

    if (landingTags.length > 0) {
      const linkedHere = new Set<string>()
      for (const href of getGuideHrefs(fm)) {
        const guide = resolveGuide(href, contentDir, resolved)
        if (guide) linkedHere.add(guide)
      }
      for (const [article, articleTags] of index.taggedArticles) {
        if (linkedHere.has(article)) continue
        const stray = articleTags.filter(
          (tag) =>
            landingTags.includes(tag) &&
            ![...index.landings].some(
              ([other, landing]) =>
                other !== relPath && landing.tags.includes(tag) && landing.guides.has(article),
            ),
        )
        if (stray.length === 0) continue
        addError(
          onError,
          findLine(params.lines, 'docsTeamMetrics'),
          `${article} has docsTeamMetrics: [${stray.join(', ')}] but isn't a guide in this journey. Remove the value from that article, or add it to journeyTracks.`,
          undefined,
          undefined,
          null,
        )
      }
    }

    const required = index.requiredTags.get(relPath) || new Set<string>()

    const missing = [...required].filter((tag) => !currentTags.includes(tag))
    if (missing.length > 0) {
      addError(
        onError,
        1,
        `This article is a guide in a journey tagged docsTeamMetrics: [${missing.join(', ')}], but is missing that value. Add it to frontmatter, or remove the article from the journey landing page.`,
        undefined,
        undefined,
        null,
      )
    }

    // Exempt the landing page's own tags, since the landing page counts toward the initiative.
    const unlinked = currentTags.filter(
      (tag) => index.declaredTags.has(tag) && !required.has(tag) && !landingTags.includes(tag),
    )
    if (unlinked.length > 0) {
      addError(
        onError,
        findLine(params.lines, 'docsTeamMetrics'),
        `docsTeamMetrics: [${unlinked.join(', ')}] is only for guides linked from the journey landing page that declares it, and this article isn't linked there. Remove the value, or add the article to the journey.`,
        undefined,
        undefined,
        null,
      )
    }
  },
}
