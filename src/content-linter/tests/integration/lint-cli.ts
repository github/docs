// End-to-end tests for the lint-content script, run via npm and checked by
// their output. They cover argument parsing, file discovery, rule filtering,
// and exit codes.
//
// Test files are written to content/test-integration/ because the linter only
// processes files under content/ or data/.

import { execSync } from 'child_process'
import { beforeEach, afterEach, describe, test, expect } from 'vitest'
import fs from 'fs/promises'
import path from 'path'

const rootDir = path.join(__dirname, '../../../..')
const testContentDir = path.join(rootDir, 'content/test-integration')

describe('Content Linter CLI Integration Tests', { timeout: 30000 }, () => {
  beforeEach(async () => {
    await fs.mkdir(testContentDir, { recursive: true })
  })

  afterEach(async () => {
    await fs.rm(testContentDir, { recursive: true, force: true })
  })

  async function runLinter(args: string): Promise<{ output: string; exitCode: number }> {
    let output = ''
    let exitCode = 0

    try {
      output = execSync(`npm run lint-content -- ${args}`, {
        encoding: 'utf8',
        cwd: rootDir,
        stdio: 'pipe',
        timeout: 10000,
      })
    } catch (error: unknown) {
      const execError = error as { stdout?: string; stderr?: string; status?: number }
      output = (execError.stdout || '') + (execError.stderr || '')
      exitCode = execError.status || 1
    }

    return { output, exitCode }
  }

  describe('Linter functionality verification', () => {
    test('should detect errors when explicitly running search-replace rule', async () => {
      // Baseline: if this fails, the linter is not detecting anything at all.
      const testFile = path.join(testContentDir, 'baseline-test.md')
      const testContent = `---
title: Baseline Test
shortTitle: TODOCS This should definitely be caught
intro: Testing basic linter functionality
versions:
  feature: test
---

TODOCS This placeholder should definitely be detected.
`

      await fs.writeFile(testFile, testContent)

      const { output, exitCode } = await runLinter(`--paths "${testFile}" --rules search-replace`)

      // This MUST work - if it doesn't, the linter is completely broken
      expect(exitCode).toBe(1)
      expect(output).toContain('todocs-placeholder')
      expect(output).toContain('ERROR')
    })
  })

  describe('Default linter behavior', () => {
    test('should verify default rule execution behavior', async () => {
      // This test verifies that all rules run by default when no --rules are specified
      // It serves as regression protection against the TODOCS bug where no rules would run
      const testFile = path.join(testContentDir, 'default-behavior-test.md')
      const testContent = `---
title: Test Article
shortTitle: TODOCS Test title
intro: This is a test article
versions:
  feature: test
---

TODOCS This is placeholder content that should now be detected by default.

### This heading skips H2 which should be a heading-increment error

`

      await fs.writeFile(testFile, testContent)

      const { output, exitCode } = await runLinter(`--paths "${testFile}"`)

      expect(exitCode).toBe(1)
      expect(output).toContain('todocs-placeholder')
      expect(output).toContain('ERROR')
    })

    test('should respect rule filtering when specific rules are provided', async () => {
      const testFile = path.join(testContentDir, 'multi-error-file.md')
      const testContent = `---
title: Test Article
shortTitle: TODOCS Test title
intro: This is a test article
versions:
  feature: test
---

TODOCS This file has multiple error types.

### This heading skips H2 (heading-increment error)
`

      await fs.writeFile(testFile, testContent)

      const { output, exitCode } = await runLinter(
        `--paths "${testFile}" --rules heading-increment`,
      )

      expect(exitCode).toBe(0)
      expect(output).not.toContain('ERROR')
      expect(output).not.toContain('todocs-placeholder')
    })
  })
})
