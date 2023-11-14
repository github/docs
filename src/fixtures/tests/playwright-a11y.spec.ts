import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const pages: { [key: string]: string } = {
  category: '/actions/category',
  codeAnnotations: '/get-started/markdown/code-annotations',
  guides: '/code-security/guides',
  homepage: '/',
  learningPath:
    '/code-security/getting-started/quickstart?learn=foo_bar&learnProduct=code-security',
  mapAndTopic: '/actions/category/map-topic',
  procedural: '/get-started/images/images-in-lists',
  productLanding: '/code-security',
  restCategory: '/rest/actions/artifacts',
  restLanding: '/rest',
  restOverview: '/rest/overview/about-githubs-apis',
  search: '/search?q=playwright',
  switchers: '/get-started/liquid/tool-platform-switcher',
  tableWithHeaders: '/get-started/liquid/table-row-headers',
  video: '/get-started',
  videoTranscript: '/get-started/video-transcripts/transcript--my-awesome-video',
}

// create a test for each page, will eventually be separated into finer grain tests
Object.keys(pages).forEach((pageName) => {
  test.describe(`${pageName}`, () => {
    test('full page axe scan', async ({ page }) => {
      await page.goto(pages[pageName])

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

      expect(accessibilityScanResults.violations).toEqual([])
    })
  })
})
