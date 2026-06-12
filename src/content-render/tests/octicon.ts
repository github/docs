import { describe, expect, test } from 'vitest'

import { renderContent } from '@/content-render/index'

describe('octicon tag', () => {
  test('renders the expected octicon', async () => {
    const actual = await renderContent('{% octicon "check" %}')
    expect(actual).toContain('<svg ')
    expect(actual).toContain('class="octicon octicon-check"')
  })

  test('renders the expected octicon with an option', async () => {
    const actual = await renderContent('{% octicon "check" width="64" %}')
    expect(actual).toContain('<svg ')
    expect(actual).toContain('class="octicon octicon-check"')
    expect(actual).toContain('width="64"')
  })

  test('renders the expected octicon with multiple options', async () => {
    const actual = await renderContent('{% octicon "check" width="64" aria-label="A checkmark" %}')
    expect(actual).toContain('<svg ')
    expect(actual).toContain('class="octicon octicon-check"')
    expect(actual).toContain('width="64"')
    expect(actual).toContain('aria-label="A checkmark"')
  })

  test('uses label to set aria-label', async () => {
    const actual = await renderContent('{% octicon "check" label="A checkmark" %}')
    expect(actual).toContain('<svg ')
    expect(actual).toContain('class="octicon octicon-check"')
    expect(actual).toContain('aria-label="A checkmark"')
  })

  test('throws an error with invalid syntax', async () => {
    await expect(renderContent('{% octicon 123 %}')).rejects.toThrowError(
      'Syntax Error in tag \'octicon\' - Valid syntax: octicon "<name>" <key="value">',
    )
  })

  test('throws an error with a non-existant octicon', async () => {
    await expect(renderContent('{% octicon "pizza-patrol" %}')).rejects.toThrowError(
      'Octicon pizza-patrol does not exist',
    )
  })

  test('auto-generates aria-label when not provided', async () => {
    const actual = await renderContent('{% octicon "check" %}')
    expect(actual).toContain('<svg ')
    expect(actual).toContain('class="octicon octicon-check"')
    expect(actual).toContain('aria-label="check icon"')
  })

  test('auto-generates aria-label with spaces for hyphenated icon names', async () => {
    const actual = await renderContent('{% octicon "git-branch" %}')
    expect(actual).toContain('<svg ')
    expect(actual).toContain('class="octicon octicon-git-branch"')
    expect(actual).toContain('aria-label="git branch icon"')
  })

  test('uses custom aria-label instead of auto-generated one when provided', async () => {
    const actual = await renderContent('{% octicon "check" aria-label="Supported" %}')
    expect(actual).toContain('<svg ')
    expect(actual).toContain('class="octicon octicon-check"')
    expect(actual).toContain('aria-label="Supported"')
    expect(actual).not.toContain('aria-label="check icon"')
  })

  test('auto-generates aria-label even when other attributes are provided', async () => {
    const actual = await renderContent('{% octicon "filter" width="32" %}')
    expect(actual).toContain('<svg ')
    expect(actual).toContain('class="octicon octicon-filter"')
    expect(actual).toContain('aria-label="filter icon"')
    expect(actual).toContain('width="32"')
  })
})
