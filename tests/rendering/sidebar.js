import fs from 'fs'
import path from 'path'
import { expect, jest } from '@jest/globals'

import getApplicableVersions from '../../lib/get-applicable-versions.js'
import frontmatter from '../../lib/read-frontmatter.js'
import { getDOM } from '../helpers/e2etest.js'
import { allVersions } from '../../lib/all-versions.js'
import renderContent from '../../lib/render-content/index.js'
import shortVersionsMiddleware from '../../middleware/contextualizers/short-versions.js'

jest.useFakeTimers({ legacyFakeTimers: true })
const req = {}
describe('sidebar', () => {
  jest.setTimeout(3 * 60 * 1000)
  beforeAll(async () => {
    req.context = {
      allVersions,
      currentLanguage: 'en',
    }
  })

  test('highlights active product on Enterprise pages on xl viewport', async () => {
    const $ = await getDOM('/en/enterprise/admin')
    expect($('[data-testid=sidebar-product-xl]').length).toBe(1)
    expect($('[data-testid=sidebar-product-xl]').text().trim()).toBe('Enterprise administrators')
  })

  test('REST API Reference title is viewable', async () => {
    const $ = await getDOM('/en/rest')
    expect($('[data-testid=rest-sidebar-reference]').length).toBe(1)
  })

  test('Check REST categories and subcategories are rendering', async () => {
    // Get the titles from the content/rest directory to match the titles on the page
    const contentPath = path.join(process.cwd(), 'content/rest')
    const contentFiles = []
    const contentCheck = Object.keys(allVersions).reduce((acc, val) => {
      return { ...acc, [val]: { cat: [], subcat: [] } }
    }, {})
    getCatAndSubCat(contentPath)
    await createContentCheckDirectory()

    for (const version in allVersions) {
      // Get MapTopic level categories/subcategories for each version on /rest page
      const url = `/en/${version}/rest`
      const $ = await getDOM(url)

      const categories = []
      $('[data-testid=sidebar] [data-testid=rest-category]').each((i, el) => {
        categories[i] = $(el).text()
      })

      const subcategories = []
      $('[data-testid=sidebar] [data-testid=rest-subcategory] a').each((i, el) => {
        subcategories[i] = $(el).text()
      })

      expect(contentCheck[version].cat.length).toBe(categories.length)
      expect(contentCheck[version].subcat.length).toBe(subcategories.length)

      categories.forEach((category) => {
        expect(contentCheck[version].cat).toContain(category)
      })

      subcategories.forEach((subcategory) => {
        expect(contentCheck[version].subcat).toContain(subcategory)
      })
    }
    // Recursively go through the content/rest directory and get all the absolute file names
    function getCatAndSubCat(directory) {
      fs.readdirSync(directory).forEach((file) => {
        const absolute = path.join(directory, file)
        if (fs.statSync(absolute).isDirectory()) {
          return getCatAndSubCat(absolute)
        } else if (
          !directory.includes('rest/guides') &&
          !directory.includes('rest/overview') &&
          !absolute.includes('rest/index.md') &&
          !absolute.includes('rest/quickstart.md') &&
          !file.includes('README.md')
        ) {
          return contentFiles.push(absolute)
        }
      })
    }

    // Create a ContentCheck object that has all the categories/subcategories and get the title from frontmatter
    async function createContentCheckDirectory() {
      const renderOpts = { textOnly: true }

      for (const filename of contentFiles) {
        const { data } = frontmatter(await fs.promises.readFile(filename, 'utf8'))
        const applicableVersions = getApplicableVersions(data.versions, filename)
        const splitPath = filename.split('/')
        let category = ''
        let subCategory = ''

        if (splitPath[splitPath.length - 2] === 'rest') {
          category = data.title
        } else if (splitPath[splitPath.length - 3] === 'rest') {
          filename.includes('index.md')
            ? (category = data.shortTitle || data.title)
            : (subCategory = data.shortTitle || data.title)
        }
        for (const version of applicableVersions) {
          req.context.currentVersion = version

          if (category !== '')
            if (category.includes('{')) {
              await shortVersionsMiddleware(req, null, () => {})
              contentCheck[version].cat.push(
                await renderContent.liquid.parseAndRender(category, req.context, renderOpts)
              )
            } else {
              contentCheck[version].cat.push(category)
            }
          if (subCategory !== '')
            if (subCategory.includes('{')) {
              await shortVersionsMiddleware(req, null, () => {})
              contentCheck[version].subcat.push(
                await renderContent.liquid.parseAndRender(subCategory, req.context, renderOpts)
              )
            } else {
              contentCheck[version].subcat.push(subCategory)
            }
        }
      }
    }
  })
  test("test a page where there's known sidebar short titles that use Liquid and ampersands", async () => {
    const url =
      '/en/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards'
    const $ = await getDOM(url)
    const linkTexts = []
    $('[data-testid=sidebar]  a').each((i, element) => {
      linkTexts.push($(element).text())
    })
    // This makes sure that none of the texts in there has their final HTML
    // to be HTML entity encoded.
    expect(linkTexts.filter((text) => text.includes('&amp;')).length).toBe(0)
  })
})
