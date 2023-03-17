import { getDOM } from '../helpers/e2etest.js'

describe('extended Markdown', () => {
  test('renders styled warnings', async () => {
    const $ = await getDOM('/get-started/liquid/warnings')
    const nodes = $('div.extended-markdown.warning')
    expect(nodes.length).toBe(1)
    expect(nodes.text().includes('This is inside the warning.')).toBe(true)
    expect(nodes.hasClass('color-border-danger')).toBe(true)
    expect(nodes.hasClass('color-bg-danger')).toBe(true)
  })

  test('renders styled tips', async () => {
    const $ = await getDOM('/get-started/liquid/tips')
    const nodes = $('div.extended-markdown.tip')
    expect(nodes.length).toBe(1)
    expect(nodes.text().includes('This is inside the tip.')).toBe(true)
    expect(nodes.hasClass('color-border-accent-emphasis')).toBe(true)
    expect(nodes.hasClass('color-bg-accent')).toBe(true)
  })

  test('renders styled notes', async () => {
    const $ = await getDOM('/get-started/liquid/notes')
    const nodes = $('div.extended-markdown.note')
    expect(nodes.length).toBe(1)
    expect(nodes.text().includes('This is inside the note.')).toBe(true)
    expect(nodes.hasClass('color-border-accent-emphasis')).toBe(true)
    expect(nodes.hasClass('color-bg-accent')).toBe(true)
  })

  test('renders raw', async () => {
    const $ = await getDOM('/get-started/liquid/raw')
    const lead = $('[data-testid="lead"]').html()
    expect(lead).toMatch('{% raw %}')
    const code = $('pre code').html()
    expect(code).toMatch('{% data foo.bar.buzz %}')
    expect(code).toMatch('{{ page.title }}')
  })

  test('renders platform-specific content', async () => {
    const $ = await getDOM('/get-started/liquid/platform-specific')
    expect($('.extended-markdown.mac p').length).toBe(1)
    expect($('.extended-markdown.mac p').text().includes('mac specific content')).toBe(true)
    expect($('.extended-markdown.windows p').length).toBe(1)
    expect($('.extended-markdown.windows p').text().includes('windows specific content')).toBe(true)
    expect($('.extended-markdown.linux p').length).toBe(1)
    expect($('.extended-markdown.linux p').text().includes('linux specific content')).toBe(true)
  })

  test('renders expected mini TOC headings in platform-specific content', async () => {
    const $ = await getDOM('/get-started/liquid/platform-specific')
    expect($('h2#in-this-article').length).toBe(1)
    expect($('h2#in-this-article + nav ul div.extended-markdown.mac').length).toBe(1)
    expect($('h2#in-this-article + nav ul div.extended-markdown.windows').length).toBe(1)
    expect($('h2#in-this-article + nav ul div.extended-markdown.linux').length).toBe(1)
  })

  test('whitespace control', async () => {
    const $ = await getDOM('/get-started/liquid/whitespace')
    const html = $('#article-contents').html()
    expect(html).toMatch('<p>GitHub</p>')
    expect(html).toMatch('<p>Text before. GitHub Text after.</p>')
    expect(html).toMatch('<li>GitHub</li>')
    expect(html).toMatch('CramFPTped')

    // Test what happens to `Cram{% ifversion fpt %}FPT{% endif %}ped.`
    // when it's not free-pro-team.
    {
      const $ = await getDOM('/enterprise-server@latest/get-started/liquid/whitespace')
      const html = $('#article-contents').html()
      // Assures that there's not whitespace left when the `{% ifversion %}`
      // yields an empty string.
      expect(html).toMatch('Cramped')
    }
  })

  test('rowheaders', async () => {
    const $ = await getDOM('/get-started/liquid/table-row-headers')
    const tables = $('#article-contents table')
    expect(tables.length).toBe(2)

    // The first table should have this structure:
    //
    //   table
    //     tbody
    //       tr
    //         th
    //         td
    //         td
    //         td
    //
    // (and there are 2 of these <tr> rows)
    //
    // That's because a Liquid + Markdown solution rewrites the
    // *first* `tbody td` to become a `th` instead.
    const firstTable = tables.filter((i) => i === 0)
    expect($('tbody tr th', firstTable).length).toBe(2)
    expect($('tbody tr td', firstTable).length).toBe(2 * 3)

    // The first table should have this structure:
    //
    //   table
    //     tbody
    //       tr
    //         td
    //         td
    //         td
    //
    // (and there are 4 of these <tr> rows)
    const secondTable = tables.filter((i) => i === 1)
    expect($('tbody tr th', secondTable).length).toBe(0)
    expect($('tbody tr td', secondTable).length).toBe(3 * 4)
  })
})
