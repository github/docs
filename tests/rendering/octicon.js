const renderContent = require('../../lib/render-content')

describe('octicon tag', () => {
  it('renders the expected octicon', async () => {
    const actual = await renderContent('{% octicon "check" %}')
    expect(actual).toContain('<svg ')
    expect(actual).toContain('class="octicon octicon-check"')
  })

  it('renders the expected octicon with an option', async () => {
    const actual = await renderContent('{% octicon "check" width="64" %}')
    expect(actual).toContain('<svg ')
    expect(actual).toContain('class="octicon octicon-check"')
    expect(actual).toContain('width="64"')
  })

  it('renders the expected octicon with multiple options', async () => {
    const actual = await renderContent('{% octicon "check" width="64" aria-label="A checkmark" %}')
    expect(actual).toContain('<svg ')
    expect(actual).toContain('class="octicon octicon-check"')
    expect(actual).toContain('width="64"')
    expect(actual).toContain('aria-label="A checkmark"')
  })

  it('uses label to set aria-label', async () => {
    const actual = await renderContent('{% octicon "check" label="A checkmark" %}')
    expect(actual).toContain('<svg ')
    expect(actual).toContain('class="octicon octicon-check"')
    expect(actual).toContain('aria-label="A checkmark"')
  })

  it('throws an error with invalid syntax', async () => {
    await expect(renderContent('{% octicon 123 %}')).rejects
      .toThrowError('Syntax Error in tag \'octicon\' - Valid syntax: octicon "<name>" <key="value">')
  })

  it('throws an error with a non-existant octicon', async () => {
    await expect(renderContent('{% octicon "pizza-patrol" %}')).rejects
      .toThrowError('Octicon pizza-patrol does not exist')
  })
})
