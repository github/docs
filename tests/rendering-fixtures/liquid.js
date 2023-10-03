import { getDataByLanguage } from '../../lib/get-data.js'
import { getDOM } from '../helpers/e2etest.js'
import { supported } from '#src/versions/lib/enterprise-server-releases.js'

describe('spotlight', () => {
  test('renders styled warnings', async () => {
    const $ = await getDOM('/get-started/liquid/warnings')
    const nodes = $('.ghd-spotlight-warning')
    expect(nodes.length).toBe(1)
    expect(nodes.text().includes('This is inside the warning.')).toBe(true)
    expect(nodes.hasClass('color-border-danger-emphasis')).toBe(true)
    expect(nodes.hasClass('color-bg-danger')).toBe(true)
  })

  test('renders styled danger', async () => {
    const $ = await getDOM('/get-started/liquid/danger')
    const nodes = $('.ghd-spotlight-danger')
    expect(nodes.length).toBe(1)
    expect(nodes.text().includes('Danger, Will Robinson.')).toBe(true)
    expect(nodes.hasClass('color-border-danger-emphasis')).toBe(true)
    expect(nodes.hasClass('color-bg-danger')).toBe(true)
  })

  test('renders styled tips', async () => {
    const $ = await getDOM('/get-started/liquid/tips')
    const nodes = $('.ghd-spotlight-tip')
    expect(nodes.length).toBe(1)
    expect(nodes.text().includes('This is inside the tip.')).toBe(true)
    expect(nodes.hasClass('color-border-accent-emphasis')).toBe(true)
    expect(nodes.hasClass('color-bg-accent')).toBe(true)
  })

  test('renders styled notes', async () => {
    const $ = await getDOM('/get-started/liquid/notes')
    const nodes = $('.ghd-spotlight-note')
    expect(nodes.length).toBe(1)
    expect(nodes.text().includes('This is inside the note.')).toBe(true)
    expect(nodes.hasClass('color-border-accent-emphasis')).toBe(true)
    expect(nodes.hasClass('color-bg-accent')).toBe(true)
  })
})

describe('raw', () => {
  test('renders raw', async () => {
    const $ = await getDOM('/get-started/liquid/raw')
    const lead = $('[data-testid="lead"]').html()
    expect(lead).toMatch('{% raw %}')
    const code = $('pre code').html()
    expect(code).toMatch('{% data foo.bar.buzz %}')
    expect(code).toMatch('{{ page.title }}')
  })
})

describe('tool', () => {
  test('renders platform-specific content', async () => {
    const $ = await getDOM('/get-started/liquid/platform-specific')
    expect($('.ghd-tool.mac p').length).toBe(1)
    expect($('.ghd-tool.mac p').text().includes('mac specific content')).toBe(true)
    expect($('.ghd-tool.windows p').length).toBe(1)
    expect($('.ghd-tool.windows p').text().includes('windows specific content')).toBe(true)
    expect($('.ghd-tool.linux p').length).toBe(1)
    expect($('.ghd-tool.linux p').text().includes('linux specific content')).toBe(true)
  })

  test('renders expected mini TOC headings in platform-specific content', async () => {
    const $ = await getDOM('/get-started/liquid/platform-specific')
    expect($('h2#in-this-article').length).toBe(1)
    expect($('h2#in-this-article + nav ul .ghd-tool.mac').length).toBe(1)
    expect($('h2#in-this-article + nav ul .ghd-tool.windows').length).toBe(1)
    expect($('h2#in-this-article + nav ul .ghd-tool.linux').length).toBe(1)
  })
})

describe('post', () => {
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
})

describe('rowheaders', () => {
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
    // (and there are 3 of these <tr> rows)
    const secondTable = tables.filter((i) => i === 1)
    expect($('tbody tr th', secondTable).length).toBe(0)
    expect($('tbody tr td', secondTable).length).toBe(3 * 3)

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
})

describe('ifversion', () => {
  // the matchesPerVersion object contains a list of conditions that
  // should match per version tested, but we also operate against it
  // to find out versions that shouldn't match
  const ghesLast = `enterprise-server@${supported[supported.length - 1]}`
  const ghesPenultimate = `enterprise-server@${supported[supported.length - 2]}`
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
    [ghesLast]: [
      'condition-c',
      'condition-e',
      'condition-f',
      'condition-g',
      'condition-h',
      'condition-i',
      'condition-k',
      'condition-m',
      'condition-n',
      'condition-o',
    ],
    [ghesPenultimate]: [
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
    },
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

describe('data tag', () => {
  test('injects data reusables with the right whitespace', async () => {
    const $ = await getDOM('/get-started/liquid/data')

    // This proves that the two injected reusables tables work.
    // CommonMark is finicky if the indentation isn't perfect, so
    // if you don't get exactly 2 tables, something is wrong, and if it's
    // wrong it's most likely because of the leading whitespaces.
    expect($('#article-contents table').length).toBe(2)

    // To truly understand this test, you have to see
    // http://localhost:4000/en/get-started/liquid/data to understand it.
    // The page uses `{% data ... %}` within the bodies of bullet points.
    // If the whitespace isn't correct and working, the bullet points
    // would get confused and think the bullet point "body" is a new
    // bullet point on its own.
    expect($('#article-contents ol').length).toBe(3)
    expect($('#article-contents ol li').length).toBe(2 + 1 + 2)

    // In the very first bullet point we inject something that multiple
    // linebreaks in it. The source looks like this:
    //
    //    1. Bullet point
    //
    //       {% data reusables.injectables.multiple_numbers %}
    //
    // (The code comment itself here has 3 spaces of manual indentation)
    // What's important is that all the expected lines of that reusables
    // stick inside this `ul li` block.
    const liText = $('#article-contents ol li').first().text()
    expect(liText).toMatch(/Bullet point\nOne\nTwo\nThree\nFour/)

    // The code block uses `{% data ... %}` and it should be indented
    // so that it aligns perfectly with the code block itself.
    // One of the injected data reusables contains multiple lines.
    // It's important that each line from that starts at the far
    // left. No more or less whitespace.
    const codeBlock = $('#article-contents li pre').text()
    expect(codeBlock).toMatch(/^One\n/)
    expect(codeBlock).toMatch(/^One\nTwo\n/)
    expect(codeBlock).toMatch(/^One\nTwo\nThree\n/)

    // The code block also a reusables that is just one line.
    expect(codeBlock).toMatch(/One Two Three Four\n/)

    // On its own, if you look at
    // tests/fixtures/data/reusables/injectables/paragraphs.md, you'll
    // see each line is NOT prefixed with whitespace indentation.
    // But because `{% data reusables.injectables.paragraphs %}` is
    // inserted with some indentation, that's replicated on every line.
    const li = $('#article-contents li')
      .filter((_, element) => {
        return $(element).text().trim().startsWith('Point 1')
      })
      .eq(0)
    // You can't really test the exact whitespace with cheerio,
    // of the original HTML, but it doesn't actually matter. What
    // matters is that within the bullet point, that starts with "Point 1",
    // it *contains* all the paragraphs
    // from tests/fixtures/data/reusables/injectables/paragraphs.md.
    expect(li.text()).toMatch(/Paragraph one/)
    expect(li.text()).toMatch(/Paragraph two/)
    expect(li.text()).toMatch(/Paragraph three/)
  })
})
