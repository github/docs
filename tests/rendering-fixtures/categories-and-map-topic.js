import { getDOM, head } from '../helpers/e2etest.js'

describe('map topics', () => {
  test('get-started/quickstart map-topic', async () => {
    const $ = await getDOM('/get-started/quickstart')
    const lead = $('[data-search=lead]').text()
    expect(lead).toMatch('Get started using GitHub to manage Git repositories')

    const links = $('[data-testid=table-of-contents] a[href]')
    expect(links.length).toBeGreaterThan(0)
    // They all have the same prefix
    const hrefs = links.map((i, el) => $(el).attr('href')).get()
    expect(hrefs.every((href) => href.startsWith('/en/get-started/quickstart/'))).toBeTruthy()
    // The all resolve to a 200 OK without redirects
    const responses = await Promise.all(hrefs.map((href) => head(href)))
    expect(responses.every((r) => r.statusCode === 200)).toBeTruthy()
  })

  test('actions/category/map-topic map-topic has its articles intro', async () => {
    const $ = await getDOM('/actions/category/map-topic')
    const lead = $('[data-search=lead]').text()
    expect(lead).toMatch("Here's the intro for GitHub Actions.")

    const links = $('[data-testid=table-of-contents] a[href]')
    const hrefs = links.map((i, el) => $(el).attr('href')).get()
    expect(hrefs.every((href) => href.startsWith('/en/actions/category/'))).toBeTruthy()

    const firstArticleH2 = $('[data-testid=table-of-contents] h2').first()
    expect(firstArticleH2.text()).toMatch('Article title')

    const firstArticleIntro = $('[data-testid=table-of-contents] p').first()
    // Its HTML in the intro is escaped and Markdown converted
    expect(firstArticleIntro.html()).toMatch(
      'This page uses &lt; and &gt; in the title and <code>shortTitle</code>',
    )
  })
})

describe('categories', () => {
  test('actions/category map-topic', async () => {
    const $ = await getDOM('/actions/category')
    const lead = $('[data-search=lead]').text()
    expect(lead).toMatch('Learn how to migrate your existing CI/CD')

    const links = $('[data-testid=table-of-contents] a[href]')
    expect(links.length).toBeGreaterThan(0)
    // They all have the same prefix
    const hrefs = links.map((i, el) => $(el).attr('href')).get()
    expect(hrefs.every((href) => href.startsWith('/en/actions/category/'))).toBeTruthy()
    // The all resolve to a 200 OK without redirects
    const responses = await Promise.all(hrefs.map((href) => head(href)))
    expect(responses.every((r) => r.statusCode === 200)).toBeTruthy()
  })
})
