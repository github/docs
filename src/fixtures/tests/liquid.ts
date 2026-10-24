import { describe, expect, test } from 'vitest'
import type { CheerioAPI } from 'cheerio'

import { getDataByLanguage } from '@/data-directory/lib/get-data'
import { getDOM } from '@/tests/helpers/e2etest'
import { supported } from '@/versions/lib/enterprise-server-releases'

describe('raw', () => {
  test('renders raw', async () => {
    const $: CheerioAPI = await getDOM('/get-started/liquid/raw')
    const lead = $('[data-testid="lead"]').html()
    expect(lead).toMatch('{% raw %}')
    const code = $('pre code').html()
    expect(code).toMatch('{% data foo.bar.buzz %}')
    expect(code).toMatch('{{ page.title }}')
  })
})

describe('tool', () => {
  test('renders platform-specific content', async () => {
    const $: CheerioAPI = await getDOM('/get-started/liquid/platform-specific')
    expect($('.ghd-tool.mac p').length).toBe(1)
    expect($('.ghd-tool.mac p').text().includes('mac specific content')).toBe(true)
    expect($('.ghd-tool.windows p').length).toBe(1)
    expect($('.ghd-tool.windows p').text().includes('windows specific content')).toBe(true)
    expect($('.ghd-tool.linux p').length).toBe(1)
    expect($('.ghd-tool.linux p').text().includes('linux specific content')).toBe(true)
  })

  test('renders expected mini TOC headings in platform-specific content', async () => {
    const $: CheerioAPI = await getDOM('/get-started/liquid/platform-specific')
    expect($('h2#in-this-article').length).toBe(1)
    expect($('h2#in-this-article + nav ul .ghd-tool.mac').length).toBe(1)
    expect($('h2#in-this-article + nav ul .ghd-tool.windows').length).toBe(1)
    expect($('h2#in-this-article + nav ul .ghd-tool.linux').length).toBe(1)
  })
})

describe('codetabs', () => {
  test('renders code tabs with language metadata', async () => {
    const $: CheerioAPI = await getDOM('/get-started/liquid/code-tabs-test')

    expect($('.ghd-codetabs').length).toBe(2)
    expect($('.ghd-codetab[data-lang="typescript"][data-label="TypeScript"]').length).toBe(2)
    expect($('.ghd-codetab[data-lang="python"][data-label="Python"]').length).toBe(2)
    expect($('.ghd-codetab-fallback-label').first().text()).toBe('TypeScript')
  })
})

describe('post', () => {
  test('whitespace control', async () => {
    const $: CheerioAPI = await getDOM('/get-started/liquid/whitespace')
    const html = $('#article-contents').html()
    expect(html).toMatch('<p>HubGit</p>')
    expect(html).toMatch('<p>Text before. HubGit Text after.</p>')
    expect(html).toMatch('<li>HubGit</li>')
    expect(html).toMatch('CramFPTped')

    // Cram{% ifversion fpt %}FPT{% endif %}ped renders as Cramped outside free-pro-team.
    {
      const $inner: CheerioAPI = await getDOM(
        '/enterprise-server@latest/get-started/liquid/whitespace',
      )
      const innerHtml = $inner('#article-contents').html()
      // Empty ifversion output must not leave extra whitespace.
      expect(innerHtml).toMatch('Cramped')
    }
  })
})

describe('rowheaders', () => {
  // The first fixture table rewrites the first cell in each of two tbody rows to th,
  // leaving three td cells per row.
  // The second fixture table has three tbody rows with three td cells each.
  // Axe's scope-attr-valid rule requires col scope on thead th and row scope on tbody th.
  // https://dequeuniversity.com/rules/axe/4.1/scope-attr-valid?application=RuleDescription
  test('rowheaders', async () => {
    const $: CheerioAPI = await getDOM('/get-started/liquid/table-row-headers')
    const tables = $('#article-contents table')
    expect(tables.length).toBe(2)

    const firstTable = tables.filter((i: number) => i === 0)
    expect($('tbody tr th', firstTable).length).toBe(2)
    expect($('tbody tr td', firstTable).length).toBe(2 * 3)

    const secondTable = tables.filter((i: number) => i === 1)
    expect($('tbody tr th', secondTable).length).toBe(0)
    expect($('tbody tr td', secondTable).length).toBe(3 * 3)

    $('thead th', firstTable).each((i, element) => {
      expect($(element).attr('scope')).toBe('col')
    })
    $('tbody th', firstTable).each((i, element) => {
      expect($(element).attr('scope')).toBe('row')
    })
    // Start with the five fixed assertions before counting each loop assertion.
    let totalAssertions = 5
    totalAssertions += $('thead th', firstTable).length
    totalAssertions += $('tbody th', firstTable).length
    expect.assertions(totalAssertions)
  })
})

describe('ifversion', () => {
  // matchesPerVersion lists expected conditions and also defines the inverse set per version.
  const ghesLast = `enterprise-server@${supported[supported.length - 1]}`
  const ghesPenultimate = `enterprise-server@${supported[supported.length - 2]}`
  const matchesPerVersion: Record<string, string[]> = {
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
    async (version: string) => {
      const $: CheerioAPI = await getDOM(`/${version}/get-started/liquid/ifversion`)
      const html = $('#article-contents').html()

      const allConditions = Object.values(matchesPerVersion).flat()

      const wantedConditions = allConditions.filter((condition: string) => {
        return matchesPerVersion[version].includes(condition)
      })

      const unwantedConditions = allConditions.filter((condition: string) => {
        return !matchesPerVersion[version].includes(condition)
      })

      for (const condition of wantedConditions as string[]) {
        expect(html).toMatch(condition)
      }
      for (const condition of unwantedConditions as string[]) {
        expect(html).not.toMatch(condition)
      }
    },
  )
})

describe('misc Liquid', () => {
  test('links with liquid from data', async () => {
    const $: CheerioAPI = await getDOM('/get-started/liquid/links-with-liquid')
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

  test('page with tool Liquid tag followed by Markdown', async () => {
    // Markdown must render when it immediately follows a {% linux %}...{% endlinux %} tag.
    const $: CheerioAPI = await getDOM('/get-started/liquid/tool-platform-switcher')
    const innerHTML = $('#article-contents').html()
    expect(innerHTML).not.toMatch('On *this* line is `Markdown` too.')
    expect(innerHTML).toMatch('<p>On <em>this</em> line is <code>Markdown</code> too.</p>')
  })
})

describe('data tag', () => {
  test('injects data reusables with the right whitespace', async () => {
    const $: CheerioAPI = await getDOM('/get-started/liquid/data')

    // Incorrect reusable indentation can break CommonMark parsing, so expect exactly two tables.
    expect($('#article-contents table').length).toBe(2)

    // Data tags inside ordered-list items must not split item bodies into new list items.
    expect($('#article-contents ol').length).toBe(3)
    expect($('#article-contents ol li').length).toBe(2 + 1 + 2)

    // The indented {% data reusables.injectables.multiple_numbers %} call keeps every line in the first list item.
    const liText = $('#article-contents ol li').first().text()
    expect(liText).toMatch(/Bullet point\nOne\nTwo\nThree\nFour/)

    // Multi-line code-block reusables start at the far left, with no extra indentation.
    const codeBlock = $('#article-contents li pre').text()
    expect(codeBlock).toMatch(/^One\n/)
    expect(codeBlock).toMatch(/^One\nTwo\n/)
    expect(codeBlock).toMatch(/^One\nTwo\nThree\n/)

    // The code block also receives one single-line reusable.
    expect(codeBlock).toMatch(/One Two Three Four\n/)

    // src/fixtures/fixtures/data/reusables/injectables/paragraphs.md inherits indentation from its data call.
    const li = $('#article-contents li')
      .filter((_, element) => {
        return $(element).text().trim().startsWith('Point 1')
      })
      .eq(0)
    // Cheerio cannot test original HTML whitespace, so the bullet text checks every paragraph.
    expect(li.text()).toMatch(/Paragraph one/)
    expect(li.text()).toMatch(/Paragraph two/)
    expect(li.text()).toMatch(/Paragraph three/)
  })
})
