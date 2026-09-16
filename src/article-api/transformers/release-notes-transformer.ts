import type { Context, Page, GHESReleasePatch } from '@/types'
import type { PageTransformer } from './types'
import { getReleaseNotes } from '@/release-notes/middleware/get-release-notes'
import { formatReleases } from '@/release-notes/lib/release-notes-utils'
import { renderContent } from '@/content-render/index'

/**
 * Transformer for GHES enterprise-server release notes pages.
 *
 * The release notes content comes from YAML data files (not the markdown body),
 * so the generic ArticleTransformer would return an empty body. This transformer
 * fetches the release notes data directly and renders it as markdown.
 */
export class ReleaseNotesTransformer implements PageTransformer {
  canTransform(page: Page): boolean {
    return page.layout === 'release-notes'
  }

  async transform(page: Page, _pathname: string, context: Context): Promise<string> {
    const currentVersion = context.currentVersion
    if (!currentVersion) {
      throw new Error('No currentVersion in context for release notes transformer')
    }

    const [plan, release] = currentVersion.split('@')
    if (plan !== 'enterprise-server') {
      throw new Error(`Release notes transformer only supports enterprise-server, got: ${plan}`)
    }

    const releaseNotes = getReleaseNotes('enterprise-server', 'en')
    const allReleases = formatReleases(releaseNotes)

    const matchedRelease = allReleases.find((r) => r.version === release)
    if (!matchedRelease) {
      throw new Error(`No release notes found for enterprise-server@${release}`)
    }

    const title = page.title
    const intro = page.intro ? await page.renderProp('intro', context, { textOnly: true }) : ''

    return await renderReleaseNotesMarkdown(title, intro, matchedRelease.patches, context)
  }
}

// Matches the labels used by the web renderer; keep in sync with
// src/release-notes/components/PatchNotes.tsx.
const SECTION_LABELS: Record<string, string> = {
  features: 'Features',
  bugs: 'Bug fixes',
  known_issues: 'Known issues',
  security_fixes: 'Security fixes',
  changes: 'Changes',
  deprecations: 'Deprecations',
  backups: 'Backups',
  errata: 'Errata',
  closing_down: 'Closing down',
  retired: 'Retired',
}

async function renderNoteMarkdown(raw: string, context: Context): Promise<string> {
  return await renderContent(raw, { ...context, markdownRequested: true })
}

// Format `text` as a list item at the given indent depth. The first line
// gets the `- ` bullet; continuation lines are indented to align under it,
// so multi-paragraph notes and fenced code blocks stay inside the list item
// per CommonMark/GFM rules.
function bulletize(text: string, depth = 0): string {
  const trimmed = text.replace(/\s+$/, '')
  if (!trimmed) return ''
  const indent = '  '.repeat(depth)
  const continuationIndent = `${indent}  `
  const [first, ...rest] = trimmed.split('\n')
  if (rest.length === 0) return `${indent}- ${first}`
  const continuation = rest.map((line) => (line.length ? `${continuationIndent}${line}` : line))
  return `${indent}- ${first}\n${continuation.join('\n')}`
}

export async function renderReleaseNotesMarkdown(
  title: string,
  intro: string,
  patches: GHESReleasePatch[],
  context: Context,
): Promise<string> {
  const lines: string[] = [`# ${title}`]
  if (intro) lines.push('', intro)

  for (const patch of patches) {
    lines.push('', `## ${patch.version}`)
    if (patch.date) lines.push('', `**Release date:** ${patch.date}`)
    if (patch.intro) {
      lines.push('', await renderNoteMarkdown(patch.intro, context))
    }

    for (const [sectionKey, sectionArray] of Object.entries(patch.sections)) {
      if (!Array.isArray(sectionArray) || sectionArray.length === 0) continue
      const sectionLabel = SECTION_LABELS[sectionKey] || sectionKey
      lines.push('', `### ${sectionLabel}`)

      for (const note of sectionArray) {
        if (typeof note === 'string') {
          const rendered = await renderNoteMarkdown(note, context)
          lines.push('', bulletize(rendered))
        } else if (
          note &&
          typeof note === 'object' &&
          'heading' in note &&
          'notes' in note &&
          Array.isArray((note as { notes: unknown }).notes)
        ) {
          const heading = (note as { heading: string }).heading
          const subNotes = (note as { notes: string[] }).notes
          lines.push('', `- **${heading}**`)
          for (const subNote of subNotes) {
            const rendered = await renderNoteMarkdown(subNote, context)
            lines.push(bulletize(rendered, 1))
          }
        } else {
          throw new Error(`Unrecognized release note shape in section ${sectionKey}`)
        }
      }
    }
  }

  return lines.join('\n')
}
