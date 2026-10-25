import { addError } from 'markdownlint-rule-helpers'
import { EVENT_ID, getScalarValue, parseEvents } from 'js-yaml'
import type { Event } from 'js-yaml'

import { getRange, getFrontmatterLines } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback, Rule } from '@/content-linter/types'

const ERROR_MESSAGE =
  'An early access reference appears to be used in a non-early access doc. Remove early access references or disable this rule.'

// The rule allows early access files to reference early access pages.
// Other files keep feature-name mentions.
const isEarlyAccessFilepath = (filepath: string): boolean => filepath.includes('early-access')

const EARLY_ACCESS_REGEX = /early-access/gi
// This path fragment identifies articles about early access, not page references.
const EARLY_ACCESS_ARTICLE_REGEX = /-early-access-/

export const earlyAccessReferences: Rule = {
  names: ['GHD008', 'early-access-references'],
  description:
    'Files that are not early access should not reference early-access or early-access files',
  tags: ['feature', 'early-access'],
  severity: 'error',
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    if (isEarlyAccessFilepath(params.name)) return

    for (let i = 0; i < params.lines.length; i++) {
      const line = params.lines[i]
      const matches = line.match(EARLY_ACCESS_REGEX)
      if (matches && !EARLY_ACCESS_ARTICLE_REGEX.test(line)) {
        addError(
          onError,
          i + 1,
          ERROR_MESSAGE,
          line,
          getRange(line, matches[0]),
          null, // No fix possible
        )
      }
    }
  },
}

export const frontmatterEarlyAccessReferences: Rule = {
  names: ['GHD009', 'frontmatter-early-access-references'],
  description:
    'Files that are not early access should not have frontmatter that references early-access',
  tags: ['frontmatter', 'feature', 'early-access'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const filepath = params.name
    if (isEarlyAccessFilepath(filepath)) return

    if (params.lines[0] !== '---') return

    // redirect_from preserves early-access paths for redirects.
    const skippedKeys = new Set(['redirect_from'])
    // The home page links to early access content, and fixture indexes mirror that pattern.
    if (filepath === 'content/index.md' || filepath.includes('fixtures/content/index.md'))
      skippedKeys.add('children')

    // Parser events exclude YAML comments and give source offsets for quoted, folded, and block values.
    const fmLines = getFrontmatterLines(params.lines)
    const source = fmLines.slice(1, -1).join('\n')
    let events: Event[]
    try {
      events = parseEvents(source, {})
    } catch {
      // Other frontmatter rules and page loading report invalid YAML.
      return
    }

    const lineStarts = [0]
    for (let i = 0; i < source.length; i++) if (source[i] === '\n') lineStarts.push(i + 1)
    const containers: { isMapping: boolean; count: number }[] = []
    let topLevelKey = ''
    for (const event of events) {
      if (event.type === EVENT_ID.POP) {
        containers.pop()
        continue
      }
      const parent = containers.at(-1)
      const isTopLevelKey =
        containers.length === 2 && parent?.isMapping === true && parent.count % 2 === 0
      if (parent) parent.count++
      if (event.type !== EVENT_ID.SCALAR) {
        if (isTopLevelKey) topLevelKey = ''
        if (event.type !== EVENT_ID.ALIAS) {
          containers.push({ isMapping: event.type === EVENT_ID.MAPPING, count: 0 })
        }
        continue
      }
      if (isTopLevelKey) topLevelKey = getScalarValue(source, event)
      if (skippedKeys.has(topLevelKey)) continue

      for (let i = 0; i < lineStarts.length; i++) {
        const lineStart = lineStarts[i]
        const lineEnd = i + 1 < lineStarts.length ? lineStarts[i + 1] - 1 : source.length
        const segmentStart = Math.max(event.valueStart, lineStart)
        const segmentEnd = Math.min(event.valueEnd, lineEnd)
        if (segmentStart >= segmentEnd) continue

        const segment = source.slice(segmentStart, segmentEnd)
        if (EARLY_ACCESS_ARTICLE_REGEX.test(segment)) continue
        const line = fmLines[i + 1]
        for (const match of segment.matchAll(EARLY_ACCESS_REGEX)) {
          addError(
            onError,
            i + 2,
            ERROR_MESSAGE,
            line,
            [segmentStart - lineStart + match.index + 1, match[0].length],
            null, // No fix possible
          )
        }
      }
    }
  },
}
