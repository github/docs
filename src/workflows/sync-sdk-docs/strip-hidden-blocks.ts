/**
 * Removes `docs-validate: hidden` ranges from Copilot SDK docs.
 *
 * The copilot-sdk repo wraps validation-only code samples in a marker pair:
 *
 *     <!-- docs-validate: hidden -->
 *     ```go
 *     package main
 *
 *     func main() { ... }
 *     ```
 *     <!-- /docs-validate: hidden -->
 *
 *     ```go
 *     client := copilot.NewClient(nil)
 *     ```
 *
 * The first sample is a complete, compilable program that exists so the SDK's
 * `docs-validate` workflow has something a compiler can accept. The second is
 * the trimmed fragment intended for readers. The SDK's extractor treats the
 * closing marker as "validate the hidden block instead of the next one", so the
 * contract is: compile the hidden sample, publish the visible one.
 *
 * Nothing enforced the publishing half of that contract. The markers are plain
 * HTML comments, and a Markdown parser treats each as a self-contained
 * single-line HTML block — the fence between them is a sibling node, not a
 * child, so it renders like any other code block. Without this step both
 * samples ship and readers see the same example twice.
 */

// Markers are our own directive syntax, so match them permissively: a marker we
// fail to recognize silently reintroduces the duplicate-sample bug. Trailing
// content after `-->` is tolerated for the same reason.
const HIDDEN_OPEN = /^\s*<!--\s*docs-validate:\s*hidden\s*-->/i
const HIDDEN_CLOSE = /^\s*<!--\s*\/\s*docs-validate:\s*hidden\s*-->/i

// Fences are CommonMark structure, so match them exactly: an opener may be
// indented at most 3 spaces, and the run of backticks or tildes may exceed 3.
const FENCE = /^ {0,3}(`{3,}|~{3,})(.*)$/

interface OpenFence {
  char: string
  length: number
}

/**
 * Apply a line to the fence state machine and return the new state.
 *
 * A closing fence must use the same character as its opener, be at least as
 * long, and carry no info string. Tracking the length matters because a
 * four-backtick fence can legally contain a three-backtick line as content.
 */
function nextFenceState(line: string, open: OpenFence | null): OpenFence | null {
  const match = FENCE.exec(line)
  if (!match) return open

  const [, marker, info] = match
  const char = marker[0]
  const length = marker.length

  if (open === null) {
    // An info string on a backtick fence may not itself contain a backtick.
    if (char === '`' && info.includes('`')) return null
    return { char, length }
  }

  if (char === open.char && length >= open.length && info.trim() === '') return null
  return open
}

export interface StripHiddenBlocksResult {
  content: string
  /** Number of complete marker ranges removed. */
  removed: number
  /** Number of opening markers with no matching close. */
  unbalanced: number
}

/**
 * Find the closing marker for an opener, ignoring markers inside code fences.
 * Returns -1 when the range is malformed, which includes a second opener
 * appearing before any close.
 */
function findClosingMarker(lines: string[], start: number): number {
  // The opener is only matched outside a fence, so the inner scan starts closed.
  let fence: OpenFence | null = null

  for (let i = start; i < lines.length; i++) {
    const line = lines[i]
    const next = nextFenceState(line, fence)

    if (next !== fence) {
      fence = next
      continue
    }
    if (fence !== null) continue

    if (HIDDEN_CLOSE.test(line)) return i
    if (HIDDEN_OPEN.test(line)) return -1
  }

  return -1
}

/**
 * Strip every `docs-validate: hidden` range, markers included.
 *
 * Markers inside a fenced code block are sample text rather than directives and
 * are left alone. An opener with no matching close is also left alone: dropping
 * to the end of the file would silently destroy content, so the caller is
 * warned instead.
 */
export function stripHiddenBlocks(content: string): StripHiddenBlocksResult {
  const lines = content.split('\n')
  const result: string[] = []
  let removed = 0
  let unbalanced = 0
  let fence: OpenFence | null = null
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (fence === null && HIDDEN_OPEN.test(line)) {
      const closeIndex = findClosingMarker(lines, i + 1)

      if (closeIndex === -1) {
        unbalanced++
        result.push(line)
        i++
        continue
      }

      removed++
      i = closeIndex + 1

      const previous = result[result.length - 1]
      const next = lines[i]
      // Treat the start and end of the file as blank so the range never leaves
      // a stray blank line at either edge.
      const previousIsBlank = previous === undefined || previous.trim() === ''
      const nextIsBlank = next === undefined || next.trim() === ''

      if (previousIsBlank && nextIsBlank) {
        // Both sides were blank and are now adjacent — keep only one.
        i++
      } else if (!previousIsBlank && !nextIsBlank) {
        // The range was the only thing separating two blocks. Without a blank
        // line between them they would merge into a single paragraph.
        result.push('')
      }
      continue
    }

    fence = nextFenceState(line, fence)
    result.push(line)
    i++
  }

  return { content: result.join('\n'), removed, unbalanced }
}
