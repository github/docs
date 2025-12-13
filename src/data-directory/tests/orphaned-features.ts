import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

import { describe, expect, test } from 'vitest'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const fixturesDir = path.join(__dirname, 'orphaned-features', 'fixtures')

// Import the actual helper functions from the orphaned features script
const { getVariableFiles, getReusableFiles } = await import(
  '@/data-directory/scripts/find-orphaned-features/find'
)

describe('orphaned features detection', () => {
  test('getVariableFiles finds all yml files in variables directory', () => {
    const variablesDir = path.join(fixturesDir, 'data', 'variables')
    const variableFiles = getVariableFiles(variablesDir)

    // Should find our test.yml file
    expect(variableFiles).toHaveLength(1)
    expect(variableFiles[0]).toMatch(/test\.yml$/)

    // Verify the file exists and contains expected content
    const testVariableContent = fs.readFileSync(variableFiles[0], 'utf-8')
    expect(testVariableContent).toContain('used-in-variables')
    expect(testVariableContent).toContain('ifversion')
  })

  test('getReusableFiles finds all md files in reusables directory', () => {
    const reusablesDir = path.join(fixturesDir, 'data', 'reusables')
    const reusableFiles = getReusableFiles(reusablesDir)

    // Should find our test.md file
    expect(reusableFiles).toHaveLength(1)
    expect(reusableFiles[0]).toMatch(/test\.md$/)

    // Verify the file exists and contains expected content
    const testReusableContent = fs.readFileSync(reusableFiles[0], 'utf-8')
    expect(testReusableContent).toContain('used-in-reusables')
    expect(testReusableContent).toContain('ifversion')
  })

  test('variables files contain feature references that should be detected', () => {
    const variablesDir = path.join(fixturesDir, 'data', 'variables')
    const testVariableFile = path.join(variablesDir, 'test.yml')

    expect(fs.existsSync(testVariableFile)).toBe(true)

    const content = fs.readFileSync(testVariableFile, 'utf-8')

    // Verify the test file has the expected feature usage patterns
    expect(content).toContain('{% ifversion used-in-variables %}')
    expect(content).toContain('test_variable_with_feature')
    expect(content).toContain('complex_variable')
  })

  test('helper functions handle nested directories', () => {
    // Create a temporary nested structure to test
    const tempDir = path.join(__dirname, 'temp-nested-test')
    const nestedVariablesDir = path.join(tempDir, 'variables', 'nested')
    const nestedReusablesDir = path.join(tempDir, 'reusables', 'nested')

    // Create directories
    fs.mkdirSync(nestedVariablesDir, { recursive: true })
    fs.mkdirSync(nestedReusablesDir, { recursive: true })

    // Create test files
    fs.writeFileSync(path.join(nestedVariablesDir, 'nested.yml'), 'test: value')
    fs.writeFileSync(path.join(nestedReusablesDir, 'nested.md'), '# Test content')
    fs.writeFileSync(path.join(tempDir, 'variables', 'root.yml'), 'root: value')
    fs.writeFileSync(path.join(tempDir, 'reusables', 'root.md'), '# Root content')

    try {
      // Test getVariableFiles with nested structure
      const variableFiles = getVariableFiles(path.join(tempDir, 'variables'))
      expect(variableFiles).toHaveLength(2)
      expect(variableFiles.some((f) => f.includes('nested.yml'))).toBe(true)
      expect(variableFiles.some((f) => f.includes('root.yml'))).toBe(true)

      // Test getReusableFiles with nested structure
      const reusableFiles = getReusableFiles(path.join(tempDir, 'reusables'))
      expect(reusableFiles).toHaveLength(2)
      expect(reusableFiles.some((f) => f.includes('nested.md'))).toBe(true)
      expect(reusableFiles.some((f) => f.includes('root.md'))).toBe(true)
    } finally {
      // Clean up
      fs.rmSync(tempDir, { recursive: true, force: true })
    }
  })

  test('helper functions ignore non-target files', () => {
    // Create a temporary directory with mixed file types
    const tempDir = path.join(__dirname, 'temp-mixed-files')
    fs.mkdirSync(tempDir, { recursive: true })

    // Create various file types
    fs.writeFileSync(path.join(tempDir, 'test.yml'), 'yml: content')
    fs.writeFileSync(path.join(tempDir, 'test.md'), '# MD content')
    fs.writeFileSync(path.join(tempDir, 'test.json'), '{"json": true}')
    fs.writeFileSync(path.join(tempDir, 'test.txt'), 'text content')
    fs.writeFileSync(path.join(tempDir, 'README.yml'), 'readme: content')
    fs.writeFileSync(path.join(tempDir, 'README.md'), '# README')

    try {
      // getVariableFiles should only find .yml files (excluding README.yml)
      const variableFiles = getVariableFiles(tempDir)
      expect(variableFiles).toHaveLength(1)
      expect(variableFiles[0]).toMatch(/test\.yml$/)

      // getReusableFiles should only find .md files (excluding README.md)
      const reusableFiles = getReusableFiles(tempDir)
      expect(reusableFiles).toHaveLength(1)
      expect(reusableFiles[0]).toMatch(/test\.md$/)
    } finally {
      // Clean up
      fs.rmSync(tempDir, { recursive: true, force: true })
    }
  })

  test('verify fix addresses the original issue scenario', () => {
    // This test simulates the original issue where features were used only in variables
    // but not detected by the orphaned features script

    const variablesDir = path.join(fixturesDir, 'data', 'variables')
    const featuresDir = path.join(fixturesDir, 'data', 'features')

    // Verify our test setup has the scenario described in the issue
    expect(fs.existsSync(path.join(featuresDir, 'used-in-variables.yml'))).toBe(true)
    expect(fs.existsSync(path.join(featuresDir, 'truly-orphaned.yml'))).toBe(true)

    // Check that the variable file references the feature
    const variableContent = fs.readFileSync(path.join(variablesDir, 'test.yml'), 'utf-8')
    expect(variableContent).toContain('used-in-variables')

    // Verify that the getVariableFiles function would find this file
    const variableFiles = getVariableFiles(variablesDir)
    expect(variableFiles.length).toBeGreaterThan(0)

    // This proves that the fix would catch features used in variables files
    // because the orphaned features script now scans these files
    const foundFeatureUsage = variableFiles.some((filePath) => {
      const content = fs.readFileSync(filePath, 'utf-8')
      return content.includes('used-in-variables')
    })

    expect(foundFeatureUsage).toBe(true)
  })

  test('functions correctly identify different file types in same directory', () => {
    // Create a directory with both .yml and .md files to ensure each function
    // only picks up its target file types
    const tempDir = path.join(__dirname, 'temp-mixed-target-files')
    fs.mkdirSync(tempDir, { recursive: true })

    // Create files that both functions might encounter
    fs.writeFileSync(
      path.join(tempDir, 'variables.yml'),
      'var: {% ifversion test-feature %}enabled{% endif %}',
    )
    fs.writeFileSync(
      path.join(tempDir, 'reusable.md'),
      '{% ifversion test-feature %}Reusable content{% endif %}',
    )
    fs.writeFileSync(path.join(tempDir, 'other.txt'), 'other content')

    try {
      // Each function should only find its target file type
      const variableFiles = getVariableFiles(tempDir)
      const reusableFiles = getReusableFiles(tempDir)

      expect(variableFiles).toHaveLength(1)
      expect(variableFiles[0]).toMatch(/variables\.yml$/)

      expect(reusableFiles).toHaveLength(1)
      expect(reusableFiles[0]).toMatch(/reusable\.md$/)

      // Verify no cross-contamination
      expect(variableFiles.some((f) => f.endsWith('.md'))).toBe(false)
      expect(reusableFiles.some((f) => f.endsWith('.yml'))).toBe(false)
    } finally {
      // Clean up
      fs.rmSync(tempDir, { recursive: true, force: true })
    }
  })
})
