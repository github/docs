/**
 * Integration tests for the content linter CLI script.
 *
 * These tests verify the actual end-to-end behavior of the lint-content script
 * by running it via npm commands and checking the output. Unlike unit tests that
 * test individual functions in isolation, these tests catch issues in the full
 * CLI workflow including:
 *
 * - Command-line argument parsing
 * - File discovery and processing logic
 * - Rule configuration and filtering
 * - Error reporting and exit codes
 *
 * Test file structure:
 * - Test files are created in content/test-integration/ during tests
 * - This ensures the linter actually processes them (it only processes files in content/ or data/)
 * - Files are cleaned up after each test
 *
 * These tests serve as regression protection and verify that the linter
 * continues to work as expected when changes are made to the CLI logic.
 */

import { execSync } from 'child_process'
import { beforeEach, afterEach, describe, test, expect } from 'vitest'
import fs from 'fs/promises'
import path from 'path'

const rootDir = path.join(__dirname, '../../../..')
const testContentDir = path.join(rootDir, 'content/test-integration')

describe('Content Linter CLI Integration Tests', () => {
  // Run all tests in sequence to avoid npm process conflicts
  beforeEach(async () => {
    // Create test directory
    await fs.mkdir(testContentDir, { recursive: true })
  })

  afterEach(async () => {
    // Clean up test files
    await fs.rm(testContentDir, { recursive: true, force: true })
  })

  // Helper function to run linter commands
  async function runLinter(args: string): Promise<{ output: string; exitCode: number }> {
    let output = ''
    let exitCode = 0

    try {
      output = execSync(`npm run lint-content -- ${args}`, {
        encoding: 'utf8',
        cwd: rootDir,
        stdio: 'pipe',
        timeout: 10000, // 10 second timeout
      })
    } catch (error: any) {
      output = error.stdout + error.stderr
      exitCode = error.status || 1
    }

    return { output, exitCode }
  }

  describe('Linter functionality verification', () => {
    test('should detect errors when explicitly running search-replace rule', async () => {
      // Baseline test - ensures the linter can detect errors
      const testFile = path.join(testContentDir, 'baseline-test.md')
      const testContent = `---
title: Baseline Test
shortTitle: TODOCS This should definitely be caught
intro: Testing basic linter functionality
versions:
  feature: test
topics:
  - Test
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
topics:
  - Test
---

TODOCS This is placeholder content that should now be detected by default.

### This heading skips H2 which should be a heading-increment error

`

      await fs.writeFile(testFile, testContent)

      const { output, exitCode } = await runLinter(`--paths "${testFile}"`)

      // Verify that the linter properly detects errors when no --rules are specified
      expect(exitCode).toBe(1) // Should exit with error due to TODOCS
      expect(output).toContain('todocs-placeholder') // TODOCS should be detected by default
      expect(output).toContain('ERROR') // Errors should be detected
    })

    test('should respect rule filtering when specific rules are provided', async () => {
      const testFile = path.join(testContentDir, 'multi-error-file.md')
      const testContent = `---
title: Test Article
shortTitle: TODOCS Test title
intro: This is a test article
versions:
  feature: test
topics:
  - Test
---

TODOCS This file has multiple error types.

### This heading skips H2 (heading-increment error)
`

      await fs.writeFile(testFile, testContent)

      const { output, exitCode } = await runLinter(
        `--paths "${testFile}" --rules heading-increment`,
      )

      expect(exitCode).toBe(0) // heading-increment rule behavior with filtering
      expect(output).not.toContain('ERROR')
      expect(output).not.toContain('todocs-placeholder')
    })
  })
})
