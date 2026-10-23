import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest'
import fs from 'fs/promises'
import path from 'path'
import { execSync } from 'child_process'
import { load } from 'js-yaml'

const rootDir = path.join(__dirname, '../../..')
const testContentDir = path.join(rootDir, 'content/test-integration')

describe('liquid-tags script integration tests', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  beforeEach(async () => {
    await fs.mkdir(testContentDir, { recursive: true })
  })

  afterEach(async () => {
    await fs.rm(testContentDir, { recursive: true, force: true })
  })

  async function runScript(
    args: string,
    env: Record<string, string> = {},
  ): Promise<{ output: string; exitCode: number }> {
    let output = ''
    let exitCode = 0

    try {
      output = execSync(`tsx src/content-render/scripts/liquid-tags.ts ${args}`, {
        encoding: 'utf8',
        cwd: rootDir,
        stdio: 'pipe',
        timeout: 30000,
        env: { ...process.env, ...env },
      })
    } catch (error: unknown) {
      const execError = error as { stdout?: string; stderr?: string; status?: number }
      output = (execError.stdout || '') + (execError.stderr || '')
      exitCode = execError.status || 1
    }

    return { output, exitCode }
  }

  test('expand command should complete successfully with basic content', async () => {
    const testFile = path.join(testContentDir, 'basic-test.md')
    const testContent = `---
title: Test
---

This uses {% data variables.product.prodname_dotcom %} in content.
`

    await fs.writeFile(testFile, testContent)

    const { output, exitCode } = await runScript(`expand --paths "${testFile}"`)

    expect(exitCode, `Script failed with output: ${output}`).toBe(0)
    expect(output.length).toBeGreaterThan(0)

    const expandedContent = await fs.readFile(testFile, 'utf8')
    expect(expandedContent).not.toBe(testContent)
    // The fixture data tag expands to GitHub.
    expect(expandedContent).toContain('GitHub')
  })

  test('restore command should complete successfully', async () => {
    const testFile = path.join(testContentDir, 'restore-test.md')
    const originalContent = `---
    title: Test
    ---

This uses {% data variables.product.prodname_dotcom %} in content.
`

    await fs.writeFile(testFile, originalContent)

    await runScript(`expand --paths "${testFile}"`)

    const { output, exitCode } = await runScript(`restore --paths "${testFile}"`)

    expect(exitCode, `Restore script failed with output: ${output}`).toBe(0)
    expect(output.length).toBeGreaterThan(0)

    const restoredContent = await fs.readFile(testFile, 'utf8')
    expect(restoredContent).toContain('{% data variables.product.prodname_dotcom %}')
    expect(restoredContent).not.toContain('GitHub')
  })

  test('help command should display usage information', async () => {
    const { output, exitCode } = await runScript('expand --help')

    expect(exitCode, `Help command failed with output: ${output}`).toBe(0)
    expect(output).toMatch(/resolve|usage|help|command/i)
  })

  test('restore writes an edit in a later nested reusable to its data file', async () => {
    // A fixture ROOT keeps a failing restore from rewriting the real data directory.
    const fixtureRoot = path.join(testContentDir, 'root')
    const outerFile = path.join(fixtureRoot, 'data/reusables/outer.md')
    const innerFile = path.join(fixtureRoot, 'data/reusables/inner.md')
    const yamlFile = path.join(fixtureRoot, 'data/variables/product.yml')
    const outerContent =
      'Intro {% data variables.product.name %}.\n\n{% data reusables.inner %}\n\nOutro.\n'
    const yamlContent = '# A comment that must survive\nname: Octo\n'
    await fs.mkdir(path.dirname(outerFile), { recursive: true })
    await fs.mkdir(path.dirname(yamlFile), { recursive: true })
    await fs.writeFile(outerFile, outerContent)
    await fs.writeFile(innerFile, 'Inner original text.\n')
    await fs.writeFile(yamlFile, yamlContent)
    const testFile = path.join(testContentDir, 'nested-edit.md')
    const originalContent = '{% data reusables.outer %}\n\n{% data reusables.outer %}\n'
    await fs.writeFile(testFile, originalContent)
    const env = { ROOT: fixtureRoot }

    await runScript(`expand --paths "${testFile}"`, env)
    const expandedContent = await fs.readFile(testFile, 'utf8')
    expect(expandedContent).toContain('<!-- begin reusables.inner -->')
    // Edit only the second copy, so an unedited first copy cannot win.
    const secondInner = expandedContent.lastIndexOf('Inner original text.')
    await fs.writeFile(
      testFile,
      expandedContent.slice(0, secondInner) +
        expandedContent.slice(secondInner).replace('Inner original text.', 'Inner edited text.'),
    )

    const { output, exitCode } = await runScript(`restore --paths "${testFile}"`, env)

    expect(exitCode, `Restore script failed with output: ${output}`).toBe(0)
    expect(await fs.readFile(testFile, 'utf8')).toBe(originalContent)
    expect(await fs.readFile(innerFile, 'utf8')).toBe('Inner edited text.\n')
    expect(await fs.readFile(outerFile, 'utf8')).toBe(outerContent)
    expect(await fs.readFile(yamlFile, 'utf8')).toBe(yamlContent)
  })

  test('expand then restore leaves a variable that nests a variable unchanged', async () => {
    const fixtureRoot = path.join(testContentDir, 'root')
    const reusableFile = path.join(fixtureRoot, 'data/reusables/outer.md')
    const yamlFile = path.join(fixtureRoot, 'data/variables/product.yml')
    const reusableContent = 'Use {% data variables.product.UI_name %} here.\n'
    const yamlContent =
      "# A comment that must survive\nname: Octo\nUI_name: '{% data variables.product.name %}'\n"
    await fs.mkdir(path.dirname(reusableFile), { recursive: true })
    await fs.mkdir(path.dirname(yamlFile), { recursive: true })
    await fs.writeFile(reusableFile, reusableContent)
    await fs.writeFile(yamlFile, yamlContent)
    const testFile = path.join(testContentDir, 'nested-variable.md')
    const originalContent = '{% data reusables.outer %}\n'
    await fs.writeFile(testFile, originalContent)
    const env = { ROOT: fixtureRoot }

    await runScript(`expand --paths "${testFile}"`, env)
    expect(await fs.readFile(testFile, 'utf8')).toContain('<!-- begin variables.product.name -->')

    const { output, exitCode } = await runScript(`restore --paths "${testFile}"`, env)

    expect(exitCode, `Restore script failed with output: ${output}`).toBe(0)
    expect(output).not.toContain('contains expanded references')
    expect(await fs.readFile(testFile, 'utf8')).toBe(originalContent)
    expect(await fs.readFile(reusableFile, 'utf8')).toBe(reusableContent)
    expect(await fs.readFile(yamlFile, 'utf8')).toBe(yamlContent)
  })

  test('restore keeps an edit when a later file has an unedited nested copy', async () => {
    const fixtureRoot = path.join(testContentDir, 'root')
    const outerFile = path.join(fixtureRoot, 'data/reusables/outer.md')
    const innerFile = path.join(fixtureRoot, 'data/reusables/inner.md')
    const outerContent = 'Outer text.\n\n{% data reusables.inner %}\n'
    await fs.mkdir(path.dirname(outerFile), { recursive: true })
    await fs.writeFile(outerFile, outerContent)
    await fs.writeFile(innerFile, 'Inner original text.\n')
    const editedFile = path.join(testContentDir, 'edited.md')
    const uneditedFile = path.join(testContentDir, 'unedited.md')
    const editedOriginal = '{% data reusables.inner %}\n'
    const uneditedOriginal = '{% data reusables.outer %}\n'
    await fs.writeFile(editedFile, editedOriginal)
    await fs.writeFile(uneditedFile, uneditedOriginal)
    const env = { ROOT: fixtureRoot }
    const paths = `--paths "${editedFile}" "${uneditedFile}"`

    await runScript(`expand ${paths}`, env)
    const expandedContent = await fs.readFile(editedFile, 'utf8')
    expect(await fs.readFile(uneditedFile, 'utf8')).toContain('<!-- begin reusables.inner -->')
    await fs.writeFile(
      editedFile,
      expandedContent.replace('Inner original text.', 'Inner edited text.'),
    )

    const { output, exitCode } = await runScript(`restore ${paths}`, env)

    expect(exitCode, `Restore script failed with output: ${output}`).toBe(0)
    expect(await fs.readFile(editedFile, 'utf8')).toBe(editedOriginal)
    expect(await fs.readFile(uneditedFile, 'utf8')).toBe(uneditedOriginal)
    expect(await fs.readFile(innerFile, 'utf8')).toBe('Inner edited text.\n')
    expect(await fs.readFile(outerFile, 'utf8')).toBe(outerContent)
  })

  test('restore keeps an edit to a reusable that is also an input path', async () => {
    const fixtureRoot = path.join(testContentDir, 'root')
    const outerFile = path.join(fixtureRoot, 'data/reusables/outer.md')
    const innerFile = path.join(fixtureRoot, 'data/reusables/inner.md')
    await fs.mkdir(path.dirname(outerFile), { recursive: true })
    await fs.writeFile(outerFile, 'Outer text.\n\n{% data reusables.inner %}\n')
    await fs.writeFile(innerFile, 'Inner original text.\n')
    const testFile = path.join(testContentDir, 'article.md')
    const originalContent = '{% data reusables.outer %}\n'
    await fs.writeFile(testFile, originalContent)
    const env = { ROOT: fixtureRoot }
    const paths = `--paths "${testFile}" "${outerFile}"`

    await runScript(`expand ${paths}`, env)
    expect(await fs.readFile(outerFile, 'utf8')).toContain('<!-- begin reusables.inner -->')
    const expandedContent = await fs.readFile(testFile, 'utf8')
    await fs.writeFile(testFile, expandedContent.replace('Outer text.', 'Outer edited text.'))

    const { output, exitCode } = await runScript(`restore ${paths}`, env)

    expect(exitCode, `Restore script failed with output: ${output}`).toBe(0)
    expect(await fs.readFile(testFile, 'utf8')).toBe(originalContent)
    expect(await fs.readFile(outerFile, 'utf8')).toBe(
      'Outer edited text.\n\n{% data reusables.inner %}\n',
    )
    expect(await fs.readFile(innerFile, 'utf8')).toBe('Inner original text.\n')
  })

  test('restore --reusables-only keeps an edit in a variable inside a reusable', async () => {
    const fixtureRoot = path.join(testContentDir, 'root')
    const reusableFile = path.join(fixtureRoot, 'data/reusables/outer.md')
    const yamlFile = path.join(fixtureRoot, 'data/variables/product.yml')
    const reusableContent = 'Use {% data variables.product.name %} here.\n'
    await fs.mkdir(path.dirname(reusableFile), { recursive: true })
    await fs.mkdir(path.dirname(yamlFile), { recursive: true })
    await fs.writeFile(reusableFile, reusableContent)
    await fs.writeFile(yamlFile, 'name: Octo\n')
    const testFile = path.join(testContentDir, 'reusables-only.md')
    const originalContent = '{% data reusables.outer %}\n'
    await fs.writeFile(testFile, originalContent)
    const env = { ROOT: fixtureRoot }

    await runScript(`expand --paths "${testFile}"`, env)
    const expandedContent = await fs.readFile(testFile, 'utf8')
    expect(expandedContent).toContain('<!-- begin variables.product.name -->Octo<')
    await fs.writeFile(testFile, expandedContent.replace('Octo<', 'Octopus<'))

    const { output, exitCode } = await runScript(
      `restore --reusables-only --paths "${testFile}"`,
      env,
    )

    expect(exitCode, `Restore script failed with output: ${output}`).toBe(0)
    expect(await fs.readFile(testFile, 'utf8')).toBe(originalContent)
    expect(await fs.readFile(reusableFile, 'utf8')).toBe(reusableContent)
    expect(await fs.readFile(yamlFile, 'utf8')).toBe('name: Octopus\n')
  })

  test('restore --variables-only keeps an edit in a reusable inside a variable', async () => {
    const fixtureRoot = path.join(testContentDir, 'root')
    const innerFile = path.join(fixtureRoot, 'data/reusables/inner.md')
    const yamlFile = path.join(fixtureRoot, 'data/variables/product.yml')
    const yamlContent = "# A comment that must survive\nUI_name: '{% data reusables.inner %}'\n"
    await fs.mkdir(path.dirname(innerFile), { recursive: true })
    await fs.mkdir(path.dirname(yamlFile), { recursive: true })
    await fs.writeFile(innerFile, 'Inner original text.\n')
    await fs.writeFile(yamlFile, yamlContent)
    const testFile = path.join(testContentDir, 'variables-only.md')
    const originalContent = 'Click {% data variables.product.UI_name %}.\n'
    await fs.writeFile(testFile, originalContent)
    const env = { ROOT: fixtureRoot }

    await runScript(`expand --paths "${testFile}"`, env)
    const expandedContent = await fs.readFile(testFile, 'utf8')
    expect(expandedContent).toContain('<!-- begin reusables.inner -->')
    await fs.writeFile(
      testFile,
      expandedContent.replace('Inner original text.', 'Inner edited text.'),
    )

    const { output, exitCode } = await runScript(
      `restore --variables-only --paths "${testFile}"`,
      env,
    )

    expect(exitCode, `Restore script failed with output: ${output}`).toBe(0)
    expect(await fs.readFile(testFile, 'utf8')).toBe(originalContent)
    expect(await fs.readFile(innerFile, 'utf8')).toBe('Inner edited text.\n')
    expect(await fs.readFile(yamlFile, 'utf8')).toBe(yamlContent)
  })

  async function writeNestedFixture() {
    const fixtureRoot = path.join(testContentDir, 'root')
    const yamlFile = path.join(fixtureRoot, 'data/variables/test.yml')
    const reusableFile = path.join(fixtureRoot, 'data/reusables/foo/bar.md')
    const yamlContent = `# A comment that must survive
inner: Foo
outer: '{% data variables.test.inner %}'
`
    const reusableContent = 'Use {% data variables.test.inner %} here.\n'
    await fs.mkdir(path.dirname(yamlFile), { recursive: true })
    await fs.mkdir(path.dirname(reusableFile), { recursive: true })
    await fs.writeFile(yamlFile, yamlContent)
    await fs.writeFile(reusableFile, reusableContent)
    return { fixtureRoot, yamlFile, reusableFile, yamlContent, reusableContent }
  }

  test('expand then restore leaves an article variable that nests a variable unchanged', async () => {
    const { fixtureRoot, yamlFile, yamlContent } = await writeNestedFixture()
    const testFile = path.join(testContentDir, 'nested-article-variable.md')
    const originalContent = 'Uses {% data variables.test.outer %} here.\n'
    await fs.writeFile(testFile, originalContent)
    const env = { ROOT: fixtureRoot }

    await runScript(`expand --paths "${testFile}"`, env)
    expect(await fs.readFile(testFile, 'utf8')).toContain('<!-- begin variables.test.inner -->')

    const { output, exitCode } = await runScript(`restore --paths "${testFile}"`, env)

    expect(exitCode, `Restore script failed with output: ${output}`).toBe(0)
    expect(output).not.toContain('contains expanded references')
    expect(await fs.readFile(testFile, 'utf8')).toBe(originalContent)
    expect(await fs.readFile(yamlFile, 'utf8')).toBe(yamlContent)
  })

  test('restore --reusables-only does not write nested variable markers to reusables', async () => {
    const { fixtureRoot, yamlFile, reusableFile, yamlContent, reusableContent } =
      await writeNestedFixture()
    const testFile = path.join(testContentDir, 'nested-reusable.md')
    const originalContent = '{% data reusables.foo.bar %}\n'
    await fs.writeFile(testFile, originalContent)
    const env = { ROOT: fixtureRoot }

    await runScript(`expand --paths "${testFile}"`, env)
    const { output, exitCode } = await runScript(
      `restore --reusables-only --paths "${testFile}"`,
      env,
    )

    expect(exitCode, `Restore script failed with output: ${output}`).toBe(0)
    expect(await fs.readFile(testFile, 'utf8')).toBe(originalContent)
    expect(await fs.readFile(reusableFile, 'utf8')).toBe(reusableContent)
    expect(await fs.readFile(yamlFile, 'utf8')).toBe(yamlContent)
  })

  test('restore --reusables-only writes reusable edits with nested variables as Liquid tags', async () => {
    const { fixtureRoot, reusableFile } = await writeNestedFixture()
    const testFile = path.join(testContentDir, 'edited-reusable.md')
    const originalContent = '{% data reusables.foo.bar %}\n'
    await fs.writeFile(testFile, originalContent)
    const env = { ROOT: fixtureRoot }

    await runScript(`expand --paths "${testFile}"`, env)
    const expandedContent = await fs.readFile(testFile, 'utf8')
    await fs.writeFile(testFile, expandedContent.replace(' here.', ' there.'))
    const { output, exitCode } = await runScript(
      `restore --reusables-only --paths "${testFile}"`,
      env,
    )

    expect(exitCode, `Restore script failed with output: ${output}`).toBe(0)
    expect(await fs.readFile(testFile, 'utf8')).toBe(originalContent)
    expect(await fs.readFile(reusableFile, 'utf8')).toBe(
      'Use {% data variables.test.inner %} there.\n',
    )
  })

  test('restore saves an edit made only inside a nested variable', async () => {
    const { fixtureRoot, yamlFile } = await writeNestedFixture()
    const testFile = path.join(testContentDir, 'edited-nested-variable.md')
    const originalContent = 'Uses {% data variables.test.outer %} here.\n'
    await fs.writeFile(testFile, originalContent)
    const env = { ROOT: fixtureRoot }

    await runScript(`expand --paths "${testFile}"`, env)
    const expandedContent = await fs.readFile(testFile, 'utf8')
    await fs.writeFile(testFile, expandedContent.replace('Foo', 'Bar'))
    const { output, exitCode } = await runScript(`restore --paths "${testFile}"`, env)

    expect(exitCode, `Restore script failed with output: ${output}`).toBe(0)
    expect(await fs.readFile(testFile, 'utf8')).toBe(originalContent)
    expect(load(await fs.readFile(yamlFile, 'utf8'))).toEqual({
      inner: 'Bar',
      outer: '{% data variables.test.inner %}',
    })
  })

  test('restore saves edits to both an outer variable and its nested variable', async () => {
    const { fixtureRoot, yamlFile } = await writeNestedFixture()
    const testFile = path.join(testContentDir, 'edited-outer-and-nested.md')
    const originalContent = 'Uses {% data variables.test.outer %} here.\n'
    await fs.writeFile(testFile, originalContent)
    const env = { ROOT: fixtureRoot }

    await runScript(`expand --paths "${testFile}"`, env)
    const expandedContent = await fs.readFile(testFile, 'utf8')
    await fs.writeFile(
      testFile,
      expandedContent
        .replace('Foo', 'Bar')
        .replace('<!-- begin variables.test.outer -->', '<!-- begin variables.test.outer -->Hi '),
    )
    const { output, exitCode } = await runScript(`restore --paths "${testFile}"`, env)

    expect(exitCode, `Restore script failed with output: ${output}`).toBe(0)
    expect(await fs.readFile(testFile, 'utf8')).toBe(originalContent)
    expect(load(await fs.readFile(yamlFile, 'utf8'))).toEqual({
      inner: 'Bar',
      outer: 'Hi {% data variables.test.inner %}',
    })
  })

  test('restore --variables-only restores a variable inside a reusable and keeps its edit', async () => {
    const { fixtureRoot, yamlFile, reusableFile, reusableContent } = await writeNestedFixture()
    const testFile = path.join(testContentDir, 'variables-only-in-reusable.md')
    await fs.writeFile(testFile, '{% data reusables.foo.bar %}\n')
    const env = { ROOT: fixtureRoot }

    await runScript(`expand --paths "${testFile}"`, env)
    const expandedContent = await fs.readFile(testFile, 'utf8')
    await fs.writeFile(testFile, expandedContent.replace('Foo', 'Bar'))
    const { output, exitCode } = await runScript(
      `restore --variables-only --paths "${testFile}"`,
      env,
    )

    expect(exitCode, `Restore script failed with output: ${output}`).toBe(0)
    const restoredContent = await fs.readFile(testFile, 'utf8')
    expect(restoredContent).toContain('<!-- begin reusables.foo.bar -->')
    expect(restoredContent).toContain('Use {% data variables.test.inner %} here.')
    expect(restoredContent).not.toContain('<!-- begin variables.')
    expect(await fs.readFile(reusableFile, 'utf8')).toBe(reusableContent)
    expect(load(await fs.readFile(yamlFile, 'utf8'))).toEqual({
      inner: 'Bar',
      outer: '{% data variables.test.inner %}',
    })
  })
})
