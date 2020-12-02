const { liquid } = require('../../lib/render-content')
const loadPages = require('../../lib/pages')
const entities = new (require('html-entities').XmlEntities)()
const { set } = require('lodash')
const nonEnterpriseDefaultVersion = require('../../lib/non-enterprise-default-version')

describe('liquid helper tags', () => {
  const context = {}
  let pages
  beforeAll(async (done) => {
    pages = await loadPages()
    context.currentLanguage = 'en'
    context.currentVersion = nonEnterpriseDefaultVersion
    context.pages = pages
    context.redirects = []
    context.site = {}
    context.page = {
      relativePath: 'desktop/index.md'
    }
    set(context.site, 'data.reusables.example', 'a rose by any other name\nwould smell as sweet')
    done()
  })

  test('link tag with relative path (English)', async () => {
    const template = '{% link /contributing-and-collaborating-using-github-desktop %}'
    const expected = '<a class="link-title Bump-link--hover no-underline" href="/en/desktop/contributing-and-collaborating-using-github-desktop">Contributing and collaborating using GitHub Desktop</a>'
    const output = await liquid.parseAndRender(template, context)
    expect(output).toBe(expected)
  })

  test('link tag with relative path (translated)', async () => {
    context.currentLanguage = 'ja'
    const template = '{% link /contributing-and-collaborating-using-github-desktop %}'
    const expected = '<a class="link-title Bump-link--hover no-underline" href="/ja/desktop/contributing-and-collaborating-using-github-desktop">'
    const output = await liquid.parseAndRender(template, context)
    expect(output.includes(expected)).toBe(true)
  })

  test('link tag with absolute path', async () => {
    context.currentLanguage = 'en'
    const template = '{% link /desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories %}'
    const expected = '<a class="link-title Bump-link--hover no-underline" href="/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories">Adding and cloning repositories</a>'
    const output = await liquid.parseAndRender(template, context)
    expect(output).toBe(expected)
  })

  test('link_with_intro tag', async () => {
    const template = '{% link_with_intro /contributing-and-collaborating-using-github-desktop %}'
    const page = pages[`/en/${nonEnterpriseDefaultVersion}/desktop/contributing-and-collaborating-using-github-desktop`]
    const expected = `<a class="link-with-intro Bump-link--hover no-underline" href="/en/desktop/contributing-and-collaborating-using-github-desktop">
  <h4 class="link-with-intro-title">${page.title}<span class="Bump-link-symbol">→</span></h4>
</a>
<p class="link-with-intro-intro">${page.intro}</p>`
    const output = entities.decode(await liquid.parseAndRender(template, context))
    expect(output).toBe(expected)
  })

  test('homepage_link_with_intro tag', async () => {
    const template = '{% homepage_link_with_intro /github/writing-on-github/basic-writing-and-formatting-syntax %}'
    const page = pages[`/en/${nonEnterpriseDefaultVersion}/github/writing-on-github/basic-writing-and-formatting-syntax`]
    const expected = `<a class="link-with-intro Bump-link--hover no-underline d-block offset-lg-2 col-lg-8 mb-5" href="/en/github/writing-on-github/basic-writing-and-formatting-syntax">
  <h4 class="link-with-intro-title h4-mktg">${page.title}<span class="Bump-link-symbol">→</span></h4>
  <p class="link-with-intro-intro f5">${page.intro}</p>
</a>`
    const output = await liquid.parseAndRender(template, context)
    expect(output).toBe(expected)
  })

  test('link_in_list tag', async () => {
    const template = '{% link_in_list /contributing-and-collaborating-using-github-desktop %}'
    const expected = '- <a class="article-link link Bump-link--hover no-underline" href="/en/desktop/contributing-and-collaborating-using-github-desktop">Contributing and collaborating using GitHub Desktop</a>'
    const output = await liquid.parseAndRender(template, context)
    expect(output).toBe(expected)
  })

  test('link_with_short_title tag', async () => {
    const template = '{% link_with_short_title /contributing-and-collaborating-using-github-desktop %}'
    const expected = '<a class="link-title Bump-link--hover no-underline" href="/en/desktop/contributing-and-collaborating-using-github-desktop">Contributing and collaborating</a>'
    const output = await liquid.parseAndRender(template, context)
    expect(output).toBe(expected)
  })

  describe('indented_data_reference tag', () => {
    set(context.site, 'data.reusables.example', 'a rose by any other name\nwould smell as sweet')

    test('without any number of spaces specified', async () => {
      const template = '{% indented_data_reference site.data.reusables.example %}'
      const expected = `  a rose by any other name
  would smell as sweet`
      const output = await liquid.parseAndRender(template, context)
      expect(output).toBe(expected)
    })

    test('with 0 spaces specified', async () => {
      const template = '{% indented_data_reference site.data.reusables.example spaces=0 %}'
      const expected = `a rose by any other name
would smell as sweet`
      const output = await liquid.parseAndRender(template, context)
      expect(output).toBe(expected)
    })

    test('with 0 spaces specified and whitespace around equals sign', async () => {
      const template = '{% indented_data_reference site.data.reusables.example spaces = 0 %}'
      const expected = `a rose by any other name
would smell as sweet`
      const output = await liquid.parseAndRender(template, context)
      expect(output).toBe(expected)
    })

    test('with 5 spaces specified', async () => {
      const template = '{% indented_data_reference site.data.reusables.example spaces=5 %}'
      const expected = `     a rose by any other name
     would smell as sweet`
      const output = await liquid.parseAndRender(template, context)
      expect(output).toBe(expected)
    })
  })
})
