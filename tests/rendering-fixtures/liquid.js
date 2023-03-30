import { getDataByLanguage } from '../../lib/get-data.js'
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

  test('renders styled danger', async () => {
    const $ = await getDOM('/get-started/liquid/danger')
    const nodes = $('div.extended-markdown.danger')
    expect(nodes.length).toBe(1)
    expect(nodes.text().includes('Danger, Will Robinson.')).toBe(true)
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

    // The second table should have this structure:
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

    // More specifically, the <th> tags should have the appropriate
    // `scope` attribute.
    // See "Scope attribute should be used correctly on tables"
    // https://dequeuniversity.com/rules/axe/4.1/scope-attr-valid?application=RuleDescription
    $('thead th', firstTable).each((i, element) => {
      expect($(element).attr('scope')).toBe('col')
    })
    $('tbody th', firstTable).each((i, element) => {
      expect($(element).attr('scope')).toBe('row')
    })
    // The 5 here is the other `expect(...)` that happens before these
    // two, just above, `expect(...)` inside the `.each(...)` loops.
    let totalAssertions = 5
    totalAssertions += $('thead th', firstTable).length
    totalAssertions += $('tbody th', firstTable).length
    expect.assertions(totalAssertions)
  })

  // tests for ifversion

  // the matchesPerVersion object contains a list of conditions that
  // should match per version tested, but we also operate against it
  // to find out versions that shouldn't match
  const matchesPerVersion = {
    'free-pro-team@latest': [
      'condition-a',
      'condition-b',
      'condition-d',
      'condition-i',
      'condition-j',
      'condition-l',
    ],
    'enterprise-cloud@latest': ['condition-c', 'condition-j', 'condition-l'],
    'enterprise-server@3.4': [
      'condition-c',
      'condition-e',
      'condition-g',
      'condition-i',
      'condition-j',
      'condition-m',
      'condition-n',
    ],
    'enterprise-server@3.5': [
      'condition-c',
      'condition-e',
      'condition-f',
      'condition-g',
      'condition-h',
      'condition-i',
      'condition-k',
      'condition-m',
      'condition-o',
    ],
    'enterprise-server@3.6': [
      'condition-c',
      'condition-e',
      'condition-f',
      'condition-i',
      'condition-j',
      'condition-m',
      'condition-o',
    ],
  }

  test.each(Object.keys(matchesPerVersion))(
    'ifversion using rendered version %p',
    async (version) => {
      const $ = await getDOM(`/${version}/get-started/liquid/ifversion`)
      const html = $('#article-contents').html()

      const allConditions = Object.values(matchesPerVersion).flat()

      // this is all conditions that should match for this rendered version
      const wantedConditions = allConditions.filter((condition) => {
        return matchesPerVersion[version].includes(condition)
      })

      // this is the inverse of the above, conditions that shoudn't match for this rendered version
      const unwantedConditions = allConditions.filter((condition) => {
        return !matchesPerVersion[version].includes(condition)
      })

      wantedConditions.forEach((condition) => {
        expect(html).toMatch(condition)
      })
      unwantedConditions.forEach((condition) => {
        expect(html).not.toMatch(condition)
      })
    }
  )
})

describe('misc Liquid', () => {
  test('links with liquid from data', async () => {
    const $ = await getDOM('/get-started/liquid/links-with-liquid')
    // The URL comes from variables.product.pricing_url
    const url = getDataByLanguage('variables.product.pricing_url', 'en')
    if (!url) throw new Error('variable could not be found')
    const links = $(`#article-contents a[href="${url}"]`)
    expect(links.length).toBe(2)
    const texts = links
      .map((i, element) => {
        return $(element).text()
      })
      .get()
    expect(texts[0]).toBe(url)
    expect(texts[1]).toBe('Pricing')
  })
})
