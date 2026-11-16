// Removes docs-validate: hidden ranges from Copilot SDK docs.
//
// The copilot-sdk repo wraps validation-only samples in a marker pair:
//
//     <!-- docs-validate: hidden -->
//     ```go
//     package main
//
//     func main() { ... }
//     ```
//     <!-- /docs-validate: hidden -->
//
//     ```go
//     client := copilot.NewClient(nil)
//     ```
//
// The first sample gives the SDK docs-validate workflow a complete program the
// compiler accepts. The second sample is the fragment readers see. The
// SDK extractor treats the closing marker as "validate the hidden block instead
// of the next one", so the contract is: compile the hidden sample, publish the
// visible one.
//
// The markers are plain HTML comments. A Markdown parser treats each as a
// self-contained single-line HTML block, and the fence between them renders as
// any other code block. Removing the range keeps the hidden sample from publishing.

// Match markers permissively so unexpected spacing cannot republish duplicate samples.
// Tolerate trailing content after --> for the same reason.
const HIDDEN_OPEN = /^\s*<!--\s*docs-validate:\s*hidden\s*-->/i
const HIDDEN_CLOSE = /^\s*<!--\s*\/\s*docs-validate:\s*hidden\s*-->/i

// CommonMark fences can indent at most 3 spaces and can use more than 3 markers.
const FENCE = /^ {0,3}(`{3,}|~{3,})(.*)$/

export interface OpenFence {
  char: string
  length: number
}

// Track fence length because a four-backtick fence can contain a three-backtick line.
// A closing fence must use the opener's character, be at least as long, and
// carry no info string.
export function nextFenceState(line: string, open: OpenFence | null): OpenFence | null {
  const match = FENCE.exec(line)
  if (!match) return open

  const [, marker, info] = match
  const char = marker[0]
  const length = marker.length

  if (open === null) {
    // Backtick fence info strings cannot contain backticks.
    if (char === '`' && info.includes('`')) return null
    return { char, length }
  }

  if (char === open.char && length >= open.length && info.trim() === '') return null
  return open
}

export interface StripHiddenBlocksResult {
  content: string
  // Complete marker ranges removed.
  removed: number
  // Opening markers with no matching close.
  unbalanced: number
}

// Ignore markers inside code fences. Return -1 for malformed ranges, including
// a second opener before any close.
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

// Markers inside fenced code are sample text, not directives. Leave unmatched
// openers in place because dropping to the end of the file would destroy content.
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
      // Treat file edges as blank so the removed range leaves no stray edge blank.
      const previousIsBlank = previous === undefined || previous.trim() === ''
      const nextIsBlank = next === undefined || next.trim() === ''

      if (previousIsBlank && nextIsBlank) {
        // Keep one blank when removal makes two blanks adjacent.
        i++
      } else if (!previousIsBlank && !nextIsBlank) {
        // Preserve a paragraph boundary when the removed range separated text.
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
