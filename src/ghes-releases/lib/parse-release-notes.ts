// generate-release-notes.ts uses side-effect-free parsers.
// Tests can import them without starting the CLI.
import { load } from 'js-yaml'

export interface NoteEntry {
  heading: string
  notes: string[]
  sourceUrl: string
}

// Agent output can omit fences, so fall back to the first line starting with "- heading:".
export function extractYaml(agentOutput: string): string | null {
  const fenced = agentOutput.match(/```ya?ml\s*\n([\s\S]*?)```/)
  if (fenced) return fenced[1].trim()

  const lines = agentOutput.split('\n')
  const yamlLines: string[] = []
  let inYaml = false
  for (const line of lines) {
    if (line.match(/^-\s+heading:/)) {
      inYaml = true
    }
    if (inYaml) {
      // End fallback YAML when the response resumes prose.
      if (line.trim() && !line.match(/^[\s#-]/) && !line.match(/^\s+\w+:/)) {
        break
      }
      yamlLines.push(line)
    }
  }
  return yamlLines.length > 0 ? yamlLines.join('\n').trim() : null
}

export function extractSkipReason(yamlStr: string): string | null {
  const match = yamlStr.match(/^#\s*SKIP:\s*(.+)/m)
  return match ? match[1].trim() : null
}

export function parseNoteEntries(yamlStr: string, sourceUrl: string): NoteEntry[] {
  const entries: NoteEntry[] = []

  try {
    const parsed = load(yamlStr)
    if (!Array.isArray(parsed)) return entries

    for (const item of parsed) {
      if (item && typeof item.heading === 'string' && Array.isArray(item.notes)) {
        const heading = item.heading.trim()
        if (!heading) continue
        const notes = item.notes
          .filter((n: unknown) => typeof n === 'string')
          .map((n: string) => n.trim())
        if (notes.length > 0) {
          entries.push({
            heading,
            notes,
            sourceUrl,
          })
        }
      }
    }
  } catch {
    // Bad agent YAML produces no entries so one issue cannot stop the run.
  }

  return entries
}

const SECTION_KEY_PATTERN = /^ {2}([a-z_]+):/

// Notes in any other section, such as known_issues or errata, are hand-written and have no source issue.
const SECTION_HEADINGS: Record<string, string> = {
  changes: 'Changes',
  closing_down: 'Closing down',
  retired: 'Retired',
}

const GENERATED_SECTIONS = new Set(['features', ...Object.keys(SECTION_HEADINGS)])

export interface PreservedBlocks {
  header: string
  knownIssues: string | null
  otherSections: string[]
}

// Keep the parts of an existing file that the generator cannot rebuild, so reruns do not drop writer edits.
export function extractPreservedBlocks(content: string): PreservedBlocks | null {
  const lines = content.split('\n')
  const sectionsIndex = lines.findIndex((line) => line.match(/^sections:/))
  if (sectionsIndex === -1) return null

  const blocks: { key: string; lines: string[] }[] = []
  for (const line of lines.slice(sectionsIndex + 1)) {
    const keyMatch = line.match(SECTION_KEY_PATTERN)
    if (keyMatch) {
      blocks.push({ key: keyMatch[1], lines: [line] })
    } else if (blocks.length > 0) {
      blocks[blocks.length - 1].lines.push(line)
    }
  }

  let knownIssues: string | null = null
  const otherSections: string[] = []
  for (const block of blocks) {
    if (GENERATED_SECTIONS.has(block.key)) continue
    const text = block.lines.join('\n').trimEnd()
    if (block.key === 'known_issues') knownIssues = text
    else otherSections.push(text)
  }

  return {
    header: lines.slice(0, sectionsIndex).join('\n'),
    knownIssues,
    otherSections,
  }
}

// Parse release notes YAML manually so source issue URL comments stay attached to notes.
// js-yaml strips comments, which would break incremental mode and deduplication.
export function loadExistingEntriesFromString(content: string): {
  entries: NoteEntry[]
  coveredUrls: Set<string>
} {
  const entries: NoteEntry[] = []
  const coveredUrls = new Set<string>()

  const lines = content.split('\n')
  let currentSourceUrl: string | null = null
  let currentHeading: string | null = null
  let currentNote: string[] = []
  let inNote = false
  // Hand-written sections can use grouped headings too, so only generated sections may set a heading.
  let inGeneratedSection = true

  const enterSection = (key: string) => {
    inGeneratedSection = GENERATED_SECTIONS.has(key)
    currentHeading = SECTION_HEADINGS[key] ?? null
  }

  const flushNote = () => {
    if (currentSourceUrl && currentHeading && currentNote.length > 0) {
      const noteText = currentNote.join('\n').trim()
      if (noteText && noteText !== '...') {
        const existing = entries.find(
          (e) => e.heading === currentHeading && e.sourceUrl === currentSourceUrl,
        )
        if (existing) {
          existing.notes.push(noteText)
        } else {
          entries.push({
            heading: currentHeading!,
            notes: [noteText],
            sourceUrl: currentSourceUrl!,
          })
        }
        coveredUrls.add(currentSourceUrl)
      }
    }
    currentNote = []
    inNote = false
  }

  for (const line of lines) {
    const headingMatch = line.match(/^\s+-\s+heading:\s+(.+)/)
    if (headingMatch) {
      flushNote()
      if (inGeneratedSection) currentHeading = headingMatch[1].trim()
      continue
    }

    const sectionMatch = line.match(SECTION_KEY_PATTERN)
    if (sectionMatch) {
      flushNote()
      enterSection(sectionMatch[1])
      continue
    }

    const urlMatch = line.match(/^\s*#\s*(https:\/\/github\.com\/github\/releases\/issues\/\d+)/)
    if (urlMatch) {
      flushNote()
      if (inGeneratedSection) currentSourceUrl = urlMatch[1]
      continue
    }

    if (line.match(/^\s+-\s+\|\s*$/)) {
      flushNote()
      inNote = true
      continue
    }

    if (inNote) {
      if (line.trim() === '' || line.match(/^\s{4,}/)) {
        currentNote.push(line.replace(/^\s{6,}/, '').trimEnd())
      } else {
        flushNote()
        const reHeading = line.match(/^\s+-\s+heading:\s+(.+)/)
        if (reHeading) {
          if (inGeneratedSection) currentHeading = reHeading[1].trim()
          continue
        }
        const reSection = line.match(SECTION_KEY_PATTERN)
        if (reSection) {
          enterSection(reSection[1])
          continue
        }
        const reUrl = line.match(/^\s*#\s*(https:\/\/github\.com\/github\/releases\/issues\/\d+)/)
        if (reUrl) {
          if (inGeneratedSection) currentSourceUrl = reUrl[1]
          continue
        }
        if (line.match(/^\s+-\s+\|\s*$/)) {
          inNote = true
          continue
        }
      }
    }
  }
  flushNote()

  return { entries, coveredUrls }
}

export function appendNoteLines(lines: string[], noteEntries: NoteEntry[], indent: string): void {
  for (const entry of noteEntries) {
    lines.push(`${indent}# ${entry.sourceUrl}`)
    for (const note of entry.notes) {
      lines.push(`${indent}- |`)
      for (const noteLine of note.split('\n')) {
        lines.push(`${indent}  ${noteLine}`)
      }
    }
  }
}

export function buildReleaseNotesYaml(
  noteEntries: NoteEntry[],
  releaseCandidate: boolean,
  featureHeadings: string[],
  preserved?: PreservedBlocks,
): string {
  const today = new Date().toISOString().split('T')[0]
  const lines: string[] = []

  if (preserved) {
    lines.push(preserved.header)
  } else {
    lines.push(`date: '${today}'`)
    lines.push(`release_candidate: ${releaseCandidate}`)
    lines.push('deprecated: false')

    if (releaseCandidate) {
      lines.push('intro: |')
      lines.push(
        '  > [!NOTE] Release candidate (RC) builds are intended solely for use in a test environment. Do not install an RC in a production environment.',
      )
      lines.push('  >')
      lines.push('  > Do not upgrade to an RC from a supported, earlier version.')
      lines.push('  >')
      lines.push(
        '  > If {% data variables.location.product_location %} is running an RC, you cannot upgrade to the general availability (GA) release. You also cannot upgrade with a hotpatch.',
      )
      lines.push('')
      lines.push(
        '  For upgrade instructions, see [AUTOTITLE](/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process).',
      )
    } else {
      lines.push('intro: |')
      lines.push('')
    }
  }

  lines.push('sections:')

  const featureEntries = noteEntries.filter((e) => featureHeadings.includes(e.heading))
  const otherEntries = noteEntries.filter((e) => !featureHeadings.includes(e.heading))

  lines.push('')
  lines.push('  features:')

  if (featureEntries.length > 0) {
    const byHeading = new Map<string, NoteEntry[]>()
    for (const entry of featureEntries) {
      const existing = byHeading.get(entry.heading) || []
      existing.push(entry)
      byHeading.set(entry.heading, existing)
    }

    for (const heading of featureHeadings) {
      const entries = byHeading.get(heading)
      if (!entries) continue

      lines.push('')
      lines.push(`    - heading: ${heading}`)
      lines.push('      notes:')
      appendNoteLines(lines, entries, '        ')
    }
  } else {
    lines.push('    # TODO: Add feature notes')
  }

  const changeEntries = otherEntries.filter((e) => !['Closing down', 'Retired'].includes(e.heading))
  if (changeEntries.length > 0) {
    lines.push('')
    lines.push('  changes:')
    appendNoteLines(lines, changeEntries, '    ')
  }

  const knownIssuesStart = lines.length
  lines.push('')
  lines.push('  known_issues:')
  lines.push('    # TODO: Add known issues from "GHES Release Note Tracking" project')
  lines.push('    - |')
  lines.push('      ...')
  if (preserved) {
    // Writers curate known issues by hand, so their block replaces the placeholder.
    lines.length = knownIssuesStart
    if (preserved.knownIssues) lines.push('', preserved.knownIssues)
  }

  const closingEntries = otherEntries.filter((e) => e.heading === 'Closing down')
  if (closingEntries.length > 0) {
    lines.push('')
    lines.push('  closing_down:')
    appendNoteLines(lines, closingEntries, '    ')
  }

  const retiredEntries = otherEntries.filter((e) => e.heading === 'Retired')
  if (retiredEntries.length > 0) {
    lines.push('')
    lines.push('  retired:')
    appendNoteLines(lines, retiredEntries, '    ')
  }

  for (const section of preserved?.otherSections ?? []) {
    lines.push('')
    lines.push(section)
  }

  lines.push('')
  return lines.join('\n')
}
