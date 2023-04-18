import { getDOM } from '../helpers/e2etest.js'

describe('guides', () => {
  test("page's title should be document title", async () => {
    const $ = await getDOM('/code-security/guides')
    // This is what you'd find in tests/fixtures/content/code-security/guides.md
    const title = 'Guides for cool security'
    expect($('title').text()).toMatch(title)
    expect($('h1').text()).toMatch(title)
    const learningPaths = $('#learning-paths h2')
    expect(learningPaths.text()).toMatch('Code security learning paths')
    const allGuides = $('#all-guides h2')
    expect(allGuides.text()).toMatch('All Code security guides')
  })
})
