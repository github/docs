import { readFileSync } from 'fs'
import path from 'path'

import { describe, expect, test } from 'vitest'

const uiPath = path.join(process.cwd(), 'data/ui.yml')

describe('data/ui.yml structure', () => {
  const content = readFileSync(uiPath, 'utf8')
  const lines = content.split('\n')

  test('every top-level key is preceded by a blank line (except the first)', () => {
    const violations: string[] = []

    for (let i = 0; i < lines.length; i++) {
      // A top-level key starts at column 0 with a word followed by ':'
      if (/^[a-z_]+:/.test(lines[i]) && i > 0) {
        if (lines[i - 1].trim() !== '') {
          violations.push(`Line ${i + 1}: "${lines[i]}" is not preceded by a blank line`)
        }
      }
    }

    expect(violations).toEqual([])
  })
})
