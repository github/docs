import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest'
import fs from 'fs/promises'
import path from 'path'
import { execSync } from 'child_process'

const rootDir = path.join(__dirname, '../../..')
const testContentDir = path.join(rootDir, 'content/test-integration')

describe('liquid-tags script integration tests', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  beforeEach(async () => {
    // Create test directory
    await fs.mkdir(testContentDir, { recursive: true })
  })

  afterEach(async () => {
    // Clean up test files
    await fs.rm(testContentDir, { recursive: true, force: true })
  })

  // Helper function to run script commands
  async function runScript(args: string): Promise<{ output: string; exitCode: number }> {
    let output = ''
    let exitCode = 0

    try {
      output = execSync(`tsx src/content-render/scripts/liquid-tags.ts ${args}`, {
        encoding: 'utf8',
        cwd: rootDir,
        stdio: 'pipe',
        timeout: 30000,
      })
    } catch (error: any) {
      output = error.stdout + error.stderr
      exitCode = error.status || 1
    }

    return { output, exitCode }
  }

  test('expand command should complete successfully with basic content', async () => {
    // Create a test file with liquid reference
    const testFile = path.join(testContentDir, 'basic-test.md')
    const testContent = `---
title: Test
---

This uses {% data variables.product.prodname_dotcom %} in content.
`

    await fs.writeFile(testFile, testContent)

    const { output, exitCode } = await runScript(`expand --paths "${testFile}"`)

    // Should complete without error
    expect(exitCode, `Script failed with output: ${output}`).toBe(0)
    expect(output.length).toBeGreaterThan(0)

    // Check that the file was modified
    const expandedContent = await fs.readFile(testFile, 'utf8')
    expect(expandedContent).not.toBe(testContent)
    expect(expandedContent).toContain('GitHub') // Should expand to actual fixture value
  })

  test('restore command should complete successfully', async () => {
    const testFile = path.join(testContentDir, 'restore-test.md')
    const originalContent = `---
    title: Test
    ---

This uses {% data variables.product.prodname_dotcom %} in content.
`

    await fs.writeFile(testFile, originalContent)

    // First expand
    await runScript(`expand --paths "${testFile}"`)

    // Then restore
    const { output, exitCode } = await runScript(`restore --paths "${testFile}"`)

    expect(exitCode, `Restore script failed with output: ${output}`).toBe(0)
    expect(output.length).toBeGreaterThan(0)

    // Should be back to original liquid tags
    const restoredContent = await fs.readFile(testFile, 'utf8')
    expect(restoredContent).toContain('{% data variables.product.prodname_dotcom %}')
    expect(restoredContent).not.toContain('GitHub')
  })

  test('help command should display usage information', async () => {
    const { output, exitCode } = await runScript('expand --help')

    expect(exitCode, `Help command failed with output: ${output}`).toBe(0)
    expect(output).toMatch(/resolve|usage|help|command/i)
  })
})
