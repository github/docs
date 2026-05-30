import fs from 'fs'
import path from 'path'

import { describe, expect, test } from 'vitest'

const middlewareDir = path.join(__dirname, '..', 'middleware')

describe('shielding middleware security patterns', () => {
  const middlewareFiles = fs.readdirSync(middlewareDir).filter((f) => f.endsWith('.ts'))

  test("every .send() call uses .type('text')", () => {
    const violations: string[] = []

    for (const file of middlewareFiles) {
      // index.ts is just the router, skip it
      if (file === 'index.ts') continue

      const content = fs.readFileSync(path.join(middlewareDir, file), 'utf-8')
      const lines = content.split('\n')

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        if (line.includes('.send(') && !line.includes(".type('text')")) {
          violations.push(`${file}:${i + 1}: ${line.trim()}`)
        }
      }
    }

    expect(
      violations,
      `All .send() calls in shielding middleware must use .type('text') to prevent XSS.\n` +
        `Violations:\n${violations.join('\n')}`,
    ).toHaveLength(0)
  })

  test('no .send() call reflects user input via template literals', () => {
    const violations: string[] = []

    for (const file of middlewareFiles) {
      if (file === 'index.ts') continue

      const content = fs.readFileSync(path.join(middlewareDir, file), 'utf-8')
      const lines = content.split('\n')

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        if (line.includes('.send(') && line.includes('${')) {
          violations.push(`${file}:${i + 1}: ${line.trim()}`)
        }
      }
    }

    expect(
      violations,
      `Shielding middleware must not reflect user input in .send() responses.\n` +
        `Violations:\n${violations.join('\n')}`,
    ).toHaveLength(0)
  })
})
