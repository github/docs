/**
 * Pure parsing/extraction functions used by generate-release-notes.ts.
 * Extracted here so they can be unit-tested without triggering the CLI.
 */
import fs from 'fs'
import yaml from 'js-yaml'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface NoteEntry {
  heading: string
  notes: string[]
  sourceUrl: string
}

// ─── extractYaml ─────────────────────────────────────────────────────────────

/**
 * Extract YAML content from agent output.
 * Looks for ```yaml ... ``` blocks, or falls back to lines starting with "- heading:"
 */
export function extractYaml(agentOutput: string): string | null {
  // Try to extract from fenced YAML code block
  const fenced = agentOutput.match(/```ya?ml\s*\n([\s\S]*?)```/)
  if (fenced) return fenced[1].trim()

  // Fall back: look for lines that look like YAML note entries
  const lines = agentOutput.split('\n')
  const yamlLines: string[] = []
  let inYaml = false
  for (const line of lines) {
    if (line.match(/^-\s+heading:/)) {
      inYaml = true
    }
    if (inYaml) {
      // Stop if we hit a non-YAML line (not indented, not a list item, not a comment, not empty)
      if (line.trim() && !line.match(/^[\s#-]/) && !line.match(/^\s+\w+:/)) {
        break
      }
      yamlLines.push(line)
    }
  }
  return yamlLines.length > 0 ? yamlLines.join('\n').trim() : null
}

// ─── extractSkipReason ───────────────────────────────────────────────────────

/**
 * Extract a skip reason from YAML that contains `# SKIP: <reason>` followed by `[]`.
 */
export function extractSkipReason(yamlStr: string): string | null {
  const match = yamlStr.match(/^#\s*SKIP:\s*(.+)/m)
  return match ? match[1].trim() : null
}

// ─── parseNoteEntries ────────────────────────────────────────────────────────

/**
 * Parse extracted YAML into structured note entries
 */
export function parseNoteEntries(yamlStr: string, sourceUrl: string): NoteEntry[] {
  const entries: NoteEntry[] = []

  try {
    const parsed = yaml.load(yamlStr)
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
    // YAML parse failed
  }

  return entries
}

// ─── loadExistingEntries ─────────────────────────────────────────────────────

/**
 * Parse an existing release notes YAML file and extract NoteEntry[] from it,
 * along with a set of source issue URLs already covered.
 * Returns { entries, coveredUrls } or null if the file doesn't exist.
 */
export function loadExistingEntries(yamlPath: string): {
  entries: NoteEntry[]
  coveredUrls: Set<string>
} | null {
  if (!fs.existsSync(yamlPath)) return null

  const content = fs.readFileSync(yamlPath, 'utf8')
  return loadExistingEntriesFromString(content)
}

/**
 * Parse release notes YAML content (as a string) and extract NoteEntry[] from it.
 * This is the testable core — no file I/O.
 *
 * Note: This uses manual line-by-line parsing instead of js-yaml because we need
 * to preserve the `# https://github.com/.../issues/NNN` source URL comments that
 * precede each note. YAML comments are stripped by js-yaml.load() and aren't part
 * of the YAML data model, so a standard parser can't track the comment-to-note
 * relationship we rely on for incremental mode and deduplication.
 */
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

  let currentSection: string | null = null

  for (const line of lines) {
    const headingMatch = line.match(/^\s+-\s+heading:\s+(.+)/)
    if (headingMatch) {
      flushNote()
      currentHeading = headingMatch[1].trim()
      continue
    }

    const sectionMatch = line.match(/^\s+(changes|closing_down|retired|known_issues):/)
    if (sectionMatch) {
      flushNote()
      currentSection = sectionMatch[1]
      if (currentSection === 'changes') currentHeading = 'Changes'
      else if (currentSection === 'closing_down') currentHeading = 'Closing down'
      else if (currentSection === 'retired') currentHeading = 'Retired'
      else currentHeading = null // known_issues — skip
      continue
    }

    if (line.match(/^\s+features:/)) {
      flushNote()
      currentSection = 'features'
      continue
    }

    const urlMatch = line.match(/^\s*#\s*(https:\/\/github\.com\/github\/releases\/issues\/\d+)/)
    if (urlMatch) {
      flushNote()
      currentSourceUrl = urlMatch[1]
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
          currentHeading = reHeading[1].trim()
          continue
        }
        const reSection = line.match(/^\s+(changes|closing_down|retired|known_issues):/)
        if (reSection) {
          currentSection = reSection[1]
          if (currentSection === 'changes') currentHeading = 'Changes'
          else if (currentSection === 'closing_down') currentHeading = 'Closing down'
          else if (currentSection === 'retired') currentHeading = 'Retired'
          else currentHeading = null
          continue
        }
        if (line.match(/^\s+features:/)) {
          currentSection = 'features'
          continue
        }
        const reUrl = line.match(/^\s*#\s*(https:\/\/github\.com\/github\/releases\/issues\/\d+)/)
        if (reUrl) {
          currentSourceUrl = reUrl[1]
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

// ─── buildReleaseNotesYaml ───────────────────────────────────────────────────

/**
 * Append YAML lines for a list of note entries at a given indentation level.
 * Handles the `# sourceUrl`, `- |`, and multi-line note content pattern.
 */
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

/**
 * Build the final release notes YAML string from note entries.
 */
export function buildReleaseNotesYaml(
  noteEntries: NoteEntry[],
  releaseCandidate: boolean,
  featureHeadings: string[],
): string {
  const today = new Date().toISOString().split('T')[0]
  const lines: string[] = []

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

  lines.push('sections:')

  // ── Features (grouped by heading) ──
  const featureEntries = noteEntries.filter((e) => featureHeadings.includes(e.heading))
  const otherEntries = noteEntries.filter((e) => !featureHeadings.includes(e.heading))

  lines.push('')
  lines.push('  features:')

  if (featureEntries.length > 0) {
    // Group by heading, preserving template order
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

  // ── Changes ──
  const changeEntries = otherEntries.filter((e) => !['Closing down', 'Retired'].includes(e.heading))
  if (changeEntries.length > 0) {
    lines.push('')
    lines.push('  changes:')
    appendNoteLines(lines, changeEntries, '    ')
  }

  // ── Known issues ──
  lines.push('')
  lines.push('  known_issues:')
  lines.push('    # TODO: Add known issues from "GHES Release Note Tracking" project')
  lines.push('    - |')
  lines.push('      ...')

  // ── Closing down ──
  const closingEntries = otherEntries.filter((e) => e.heading === 'Closing down')
  if (closingEntries.length > 0) {
    lines.push('')
    lines.push('  closing_down:')
    appendNoteLines(lines, closingEntries, '    ')
  }

  // ── Retired ──
  const retiredEntries = otherEntries.filter((e) => e.heading === 'Retired')
  if (retiredEntries.length > 0) {
    lines.push('')
    lines.push('  retired:')
    appendNoteLines(lines, retiredEntries, '    ')
  }

  lines.push('')
  return lines.join('\n')
}
