import fs from 'fs'
import path from 'path'

import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback, Rule } from '../../types'

// ---------------------------------------------------------------------------
// Template parser — derives all validation data from templates.md
// ---------------------------------------------------------------------------

const TEMPLATES_PATH = path.resolve('content/contributing/writing-for-github-docs/templates.md')
const SENTINEL = '<!-- rai-card-template-source'
const OPTIONAL_MARKER = '<!-- optional-section -->'
const PLACEHOLDER = 'APPLICATION-OR-PLATFORM-SERVICE'

interface TemplateHeading {
  level: number
  text: string
  /** Regex pattern for matching this heading in actual articles. */
  pattern: RegExp
  /** Human-readable label for error messages. */
  label: string
  /** If true, the section may be removed from a real article. */
  optional: boolean
  /** For H3 headings, the pattern of the parent H2. */
  parentPattern?: RegExp
}

export interface ParsedTemplate {
  h2s: TemplateHeading[]
  h3s: TemplateHeading[]
  reusables: string[]
}

/**
 * Extract the RAI card template code block from templates.md.
 * Finds the sentinel HTML comment, then captures the next fenced code block.
 * Strips {% raw %} / {% endraw %} and {% comment %}...{% endcomment %} blocks.
 */
function extractTemplateBlock(): string {
  const content = fs.readFileSync(TEMPLATES_PATH, 'utf-8')
  const sentinelIndex = content.indexOf(SENTINEL)
  if (sentinelIndex === -1) {
    throw new Error(
      `Could not find "${SENTINEL}" marker in ${TEMPLATES_PATH}. ` +
        'This marker is required for the GHD064 linter rule.',
    )
  }

  const afterSentinel = content.slice(sentinelIndex)
  const codeBlockMatch = afterSentinel.match(/```yaml\s*\n([\s\S]*?)```/)
  if (!codeBlockMatch) {
    throw new Error(
      `Could not find a fenced yaml code block after the "${SENTINEL}" marker in ${TEMPLATES_PATH}.`,
    )
  }

  return codeBlockMatch[1]
    .replace(/\{%\s*raw\s*%\}\s*/, '')
    .replace(/\{%\s*endraw\s*%\}\s*/, '')
    .replace(/\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}/g, '')
}

/**
 * Build a regex pattern from a template heading text.
 * Headings containing the placeholder get a pattern that matches any text
 * in place of the placeholder. Fixed headings get an exact match.
 */
function headingToPattern(text: string): RegExp {
  if (text.includes(PLACEHOLDER)) {
    const escaped = text
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      .replace(new RegExp(PLACEHOLDER.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '.+')
    return new RegExp(`^${escaped}$`, 'i')
  }
  return new RegExp(`^${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i')
}

/**
 * Build a human-readable label for error messages.
 * Replaces the placeholder with "..." to keep messages concise.
 */
function headingLabel(level: number, text: string): string {
  const prefix = '#'.repeat(level)
  const label = text.includes(PLACEHOLDER) ? text.replace(PLACEHOLDER, '...') : text
  return `${prefix} ${label}`
}

/**
 * Parse the RAI template into structured heading and reusable data.
 * This is the single source of truth for validation — no hardcoded constants.
 */
function parseTemplate(): ParsedTemplate {
  const block = extractTemplateBlock()
  const lines = block.split('\n')

  const h2s: TemplateHeading[] = []
  const h3s: TemplateHeading[] = []
  const reusables: string[] = []

  let currentH2Pattern: RegExp | undefined
  let nextIsOptional = false

  for (const line of lines) {
    if (line.trim() === OPTIONAL_MARKER) {
      nextIsOptional = true
      continue
    }

    const h2Match = line.match(/^## (.+)$/)
    if (h2Match) {
      const text = h2Match[1].trim()
      const pattern = headingToPattern(text)
      currentH2Pattern = pattern
      h2s.push({
        level: 2,
        text,
        pattern,
        label: headingLabel(2, text),
        optional: nextIsOptional,
      })
      nextIsOptional = false
      continue
    }

    const h3Match = line.match(/^### (.+)$/)
    if (h3Match) {
      const text = h3Match[1].trim()
      h3s.push({
        level: 3,
        text,
        pattern: headingToPattern(text),
        label: headingLabel(3, text),
        optional: nextIsOptional,
        parentPattern: currentH2Pattern,
      })
      nextIsOptional = false
      continue
    }

    // Parse reusable references
    const reusableMatches = line.matchAll(/\{%\s*data\s+([\w.-]+)\s*%\}/g)
    for (const m of reusableMatches) {
      if (!reusables.includes(m[1])) {
        reusables.push(m[1])
      }
    }

    // Reset optional flag if line has non-whitespace content (not a heading or marker)
    if (line.trim() !== '') {
      nextIsOptional = false
    }
  }

  return { h2s, h3s, reusables }
}

// Lazy singleton — parsed once on first use
let _parsed: ParsedTemplate | null = null

export function getTemplate(): ParsedTemplate {
  if (!_parsed) _parsed = parseTemplate()
  return _parsed
}

// ---------------------------------------------------------------------------
// File-level heading extraction
// ---------------------------------------------------------------------------

interface Heading {
  level: number
  text: string
  lineNumber: number
}

function extractHeadings(lines: string[]): Heading[] {
  const headings: Heading[] = []
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^(#{1,6})\s+(.+)$/)
    if (match) {
      headings.push({
        level: match[1].length,
        text: match[2].trim(),
        lineNumber: i + 1,
      })
    }
  }
  return headings
}

// ---------------------------------------------------------------------------
// Validators
// ---------------------------------------------------------------------------

/**
 * Validate required H2 sections exist and appear in the correct order.
 */
function validateH2Sections(
  headings: Heading[],
  template: ParsedTemplate,
  onError: RuleErrorCallback,
): void {
  const h2Headings = headings.filter((h) => h.level === 2)
  let lastMatchedIndex = -1

  for (const required of template.h2s) {
    const matchIndex = h2Headings.findIndex((h) => required.pattern.test(h.text))

    if (matchIndex === -1) {
      addError(
        onError,
        1,
        `Missing required section: ${required.label}. RAI application/platform cards must include all sections defined in the template.`,
        undefined,
        undefined,
        null,
      )
    } else if (matchIndex <= lastMatchedIndex) {
      addError(
        onError,
        h2Headings[matchIndex].lineNumber,
        `Section out of order: ${required.label}. RAI application/platform card sections must appear in the order defined by the template.`,
        h2Headings[matchIndex].text,
        undefined,
        null,
      )
    } else {
      lastMatchedIndex = matchIndex
    }
  }
}

/**
 * Validate H3 subsections in a single pass: required ones must exist,
 * and all H3s under structured parents must match a known template heading.
 */
function validateH3Subsections(
  headings: Heading[],
  template: ParsedTemplate,
  onError: RuleErrorCallback,
): void {
  // Group template H3s by parent pattern (keyed by pattern source string to
  // avoid relying on RegExp reference equality).
  const h3sByParent = new Map<string, { parentPattern: RegExp; h3s: TemplateHeading[] }>()
  for (const h3 of template.h3s) {
    if (!h3.parentPattern) continue
    const key = h3.parentPattern.source
    const entry = h3sByParent.get(key) || { parentPattern: h3.parentPattern, h3s: [] }
    entry.h3s.push(h3)
    h3sByParent.set(key, entry)
  }

  for (const [, { parentPattern, h3s: templateH3s }] of h3sByParent) {
    const parentIndex = headings.findIndex((h) => h.level === 2 && parentPattern.test(h.text))
    if (parentIndex === -1) continue // Missing parent caught by validateH2Sections

    // Collect actual H3s under this parent
    const childH3s: Heading[] = []
    for (let i = parentIndex + 1; i < headings.length; i++) {
      if (headings[i].level <= 2) break
      if (headings[i].level === 3) childH3s.push(headings[i])
    }

    // Check required H3s exist
    for (const required of templateH3s) {
      if (required.optional) continue
      const found = childH3s.some((h) => required.pattern.test(h.text))
      if (!found) {
        addError(
          onError,
          headings[parentIndex].lineNumber,
          `Missing required subsection: ${required.label}. This subsection is required under the parent section per the RAI application/platform card template.`,
          undefined,
          undefined,
          null,
        )
      }
    }

    // Check all actual H3s match a known template heading
    for (const child of childH3s) {
      const matchesKnown = templateH3s.some((t) => t.pattern.test(child.text))
      if (!matchesKnown) {
        addError(
          onError,
          child.lineNumber,
          `Unexpected subsection heading: "${child.text}". H3 headings under this section must match the RAI application/platform card template exactly.`,
          child.text,
          undefined,
          null,
        )
      }
    }
  }
}

/**
 * Validate that all required boilerplate reusable references are present.
 */
function validateReusables(
  lines: string[],
  template: ParsedTemplate,
  onError: RuleErrorCallback,
): void {
  const content = lines.join('\n')

  for (const reusable of template.reusables) {
    if (!content.includes(reusable)) {
      addError(
        onError,
        1,
        `Missing required boilerplate reusable: {% data ${reusable} %}. This reusable contains legally-mandated text that must be included in all RAI application/platform cards.`,
        undefined,
        undefined,
        null,
      )
    }
  }
}

// ---------------------------------------------------------------------------
// Rule export
// ---------------------------------------------------------------------------

interface Frontmatter {
  contentType?: string
  [key: string]: unknown
}

function isFileRaiCard(params: RuleParams): boolean {
  const fm: Frontmatter = (getFrontmatter(params.frontMatterLines) as Frontmatter) || {}
  return fm.contentType === 'rai'
}

export const raiAppCardStructure: Rule = {
  names: ['GHD064', 'rai-app-card-structure'],
  description: 'RAI application/platform card articles must follow the required template structure',
  tags: ['feature', 'rai'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    if (!isFileRaiCard(params)) return

    const template = getTemplate()
    const headings = extractHeadings(params.lines)
    validateH2Sections(headings, template, onError)
    validateH3Subsections(headings, template, onError)
    validateReusables(params.lines, template, onError)
  },
}
