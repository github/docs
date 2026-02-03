import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { tableColumnIntegrity } from '../../lib/linting-rules/table-column-integrity'

describe(tableColumnIntegrity.names.join(' - '), () => {
  test('Valid table with consistent columns passes', async () => {
    const markdown = [
      '| Artist | Album | Year |',
      '|--------|-------|------|',
      '| Beyoncé | Lemonade | 2016 |',
      '| Kendrick Lamar | DAMN. | 2017 |',
    ].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Table with extra columns causes error', async () => {
    const markdown = ['| Name | Age |', '|------|-----|', '| Alice | 25 | Extra |'].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(3)
    if ((errors[0] as any).detail) {
      expect((errors[0] as any).detail).toContain('Table row has 3 columns but header has 2')
    } else if (errors[0].errorDetail) {
      expect(errors[0].errorDetail).toContain('Table row has 3 columns but header has 2')
    } else {
      console.log('Error structure:', JSON.stringify(errors[0], null, 2))
      expect(errors[0]).toHaveProperty('detail')
    }
  })

  test('Table with missing columns causes error', async () => {
    const markdown = ['| Name | Age | City |', '|------|-----|------|', '| Bob | 30 |'].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(3)
    if ((errors[0] as any).detail) {
      expect((errors[0] as any).detail).toContain('Table row has 2 columns but header has 3')
    } else if (errors[0].errorDetail) {
      expect(errors[0].errorDetail).toContain('Table row has 2 columns but header has 3')
    } else {
      console.log('Error structure:', JSON.stringify(errors[0], null, 2))
      expect(errors[0]).toHaveProperty('detail')
    }
  })

  test('Liquid-only rows are ignored', async () => {
    const markdown = [
      '| Feature | Status |',
      '|---------|--------|',
      '| {% ifversion ghes %} |',
      '| Advanced | Enabled |',
      '| {% endif %} |',
    ].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Escaped pipes (\\|) are not counted as column separators', async () => {
    const markdown = [
      '| Command | Description |',
      '|---------|-------------|',
      '| `git log --oneline \\| head` | Shows recent commits |',
      '| `echo "hello \\| world"` | Prints text with pipe |',
    ].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Escaped pipes mixed with real separators work correctly', async () => {
    const markdown = [
      '| Code | Output | Notes |',
      '|------|--------|-------|',
      '| `echo "a \\| b" \\| wc` | 1 | Pipe in string and command |',
      '| `grep "x" file` | matches | No pipes here |',
    ].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Liquid for/endfor statements are ignored in table rows', async () => {
    const markdown = [
      '| Item | Details |',
      '|------|---------|',
      '| {% for item in collection %} |',
      '| Product A | Available |',
      '| Product B | Sold out |',
      '| {% endfor %} |',
    ].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Mixed liquid statements (ifversion, for, endif) are ignored', async () => {
    const markdown = [
      '| Feature | Status | Version |',
      '|---------|--------|---------|',
      '| {% ifversion ghes %} |',
      '| {% for version in site.data.versions %} |',
      '| Basic | Active | 1.0 |',
      '| {% endfor %} |',
      '| {% endif %} |',
      '| Advanced | Beta | 2.0 |',
    ].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Tables inside code fences are ignored', async () => {
    const markdown = [
      'Here is some example markdown:',
      '',
      '```markdown',
      '| Name | Age |',
      '|------|-----|',
      '| Alice | 25 | Extra column that would normally cause error |',
      '| Bob |',
      '```',
      '',
      'But this real table should be validated:',
      '',
      '| Product | Price |',
      '|---------|-------|',
      '| Widget | $10 |',
    ].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Tables inside different code fence types are ignored', async () => {
    const markdown = [
      '```',
      '| Malformed | Table |',
      '|-----------|-------|',
      '| Too | Many | Columns | Here |',
      '```',
      '',
      '```text',
      '| Another | Bad |',
      '|---------|-----|',
      '| Missing |',
      '```',
      '',
      '```yaml',
      '| YAML | Example |',
      '|------|---------|',
      '| key: | value | extra |',
      '```',
    ].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('File paths with pipes are handled correctly (regression test)', async () => {
    // This test catches the specific issue from content/actions/tutorials/build-and-test-code/python.md
    // where the old regex /[^\\]\|/ was consuming characters before pipes and miscounting columns
    const markdown = [
      '| Directory | Ubuntu | macOS |',
      '|-----------|--------|-------|',
      '|**Tool Cache Directory** |`/opt/hostedtoolcache/*`|`/Users/runner/hostedtoolcache/*`|',
      '|**Python Tool Cache**|`/opt/hostedtoolcache/Python/*`|`/Users/runner/hostedtoolcache/Python/*`|',
      '|**PyPy Tool Cache**|`/opt/hostedtoolcache/PyPy/*`|`/Users/runner/hostedtoolcache/PyPy/*`|',
    ].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Complex file paths with multiple characters before pipes', async () => {
    // Additional test to ensure the lookbehind regex works with various characters before pipes
    const markdown = [
      '| Pattern | Linux Path | Windows Path |',
      '|---------|------------|--------------|',
      '| Cache | `/home/user/.cache/*` | `C:\\Users\\user\\AppData\\*` |',
      '| Logs | `/var/log/app/*` | `C:\\ProgramData\\logs\\*` |',
      '| Config | `/etc/myapp/*` | `C:\\Program Files\\MyApp\\*` |',
    ].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Code fence spanning multiple lines with tables inside', async () => {
    const markdown = [
      'Here is some documentation:',
      '',
      '```markdown',
      '# Example Document',
      '',
      '| Bad | Table |',
      '|-----|-------|',
      '| Missing | column | here | extra |',
      '| Another | bad | row |',
      '',
      'More content here',
      '```',
      '',
      'This real table should be validated:',
      '',
      '| Good | Table |',
      '|------|-------|',
      '| Valid | Row |',
    ].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Multiple code fences with tables between them', async () => {
    const markdown = [
      '```js',
      '| Bad | JS | Table |',
      '|-----|----|----|',
      '| Extra | column | here | bad |',
      '```',
      '',
      'Real table that should be checked:',
      '',
      '| Name | Status |',
      '|------|--------|',
      '| Test | Pass |',
      '',
      '```bash',
      '| Command | Output |',
      '|---------|--------|',
      '| ls | file1.txt | file2.txt | extra |',
      '```',
    ].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('Code fence with language identifier', async () => {
    const markdown = [
      '```typescript',
      'const badTable = `',
      '| Name | Age |',
      '|------|-----|',
      '| Alice | 25 | Extra |',
      '`',
      '```',
      '',
      '```yaml',
      'table:',
      '  - name: Bad',
      '  - age: 30',
      '  - extra: column',
      '```',
    ].join('\n')
    const result = await runRule(tableColumnIntegrity, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})
