import fs from 'fs'
import path from 'path'
import { expect, jest } from '@jest/globals'

import '../../lib/feature-flags.js'
import getApplicableVersions from '../../lib/get-applicable-versions.js'
import frontmatter from '../../lib/read-frontmatter.js'
import { getDOM } from '../helpers/e2etest.js'
import { allVersions } from '../../lib/all-versions.js'

jest.useFakeTimers({ legacyFakeTimers: true })

describe('sidebar', () => {
  jest.setTimeout(3 * 60 * 1000)

  let $homePage, $githubPage, $enterprisePage, $restPage
  beforeAll(async () => {
    ;[$homePage, $githubPage, $enterprisePage, $restPage] = await Promise.all([
      getDOM('/en'),
      getDOM('/en/get-started'),
      getDOM('/en/enterprise/admin'),
      getDOM('/en/rest'),
    ])
  })

  test('highlights active product on Enterprise pages', async () => {
    expect($enterprisePage('[data-testid=sidebar] [data-testid=sidebar-product]').length).toBe(1)
    expect(
      $enterprisePage('[data-testid=sidebar] [data-testid=sidebar-product] > a').text().trim()
    ).toBe('Enterprise administrators')
  })

  test('highlights active product on GitHub pages', async () => {
    expect($githubPage('[data-testid=sidebar] [data-testid=sidebar-product]').length).toBe(1)
    expect(
      $githubPage('[data-testid=sidebar] [data-testid=sidebar-product] > a').text().trim()
    ).toBe('Get started')
  })

  test('includes links to external products like the Atom, Electron, and CodeQL', async () => {
    expect($homePage('[data-testid=sidebar] a[href="https://atom.io/docs"]')).toHaveLength(1)
    expect($homePage('[data-testid=sidebar] a[href="https://electronjs.org/docs"]')).toHaveLength(1)
    expect(
      $homePage('[data-testid=sidebar] a[href="https://codeql.github.com/docs"]')
    ).toHaveLength(1)
    expect($homePage('[data-testid=sidebar] a[href="https://docs.npmjs.com/"]')).toHaveLength(1)
  })

  test('adds `data-is-current-page` and `data-is-active-category` properties to the sidebar link for the current page', async () => {
    const url = '/en/get-started/importing-your-projects-to-github/importing-source-code-to-github'
    const $ = await getDOM(url)
    expect($('[data-testid=sidebar] [data-is-active-category=true]').length).toBe(1)
    expect($('[data-testid=sidebar] [data-is-current-page=true]').length).toBe(1)
    expect($('[data-testid=sidebar] [data-is-current-page=true] a').attr('href')).toContain(url)
  })

  test('does not display Early Access as a product', async () => {
    expect(
      $homePage('[data-testid=sidebar] [data-testid=sidebar-product][title*="Early"]').length
    ).toBe(0)
    expect(
      $homePage('[data-testid=sidebar] [data-testid=sidebar-product][title*="early"]').length
    ).toBe(0)
  })

  test('REST API Reference title is viewable', async () => {
    expect($restPage('[data-testid=rest-sidebar-reference]').length).toBe(1)
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
          !file.includes('README.md')
        ) {
          return contentFiles.push(absolute)
        }
      })
    }

    // Create a ContentCheck object that has all the categories/subcategories and get the title from frontmatter
    async function createContentCheckDirectory() {
      for (const filename of contentFiles) {
        const { data } = frontmatter(await fs.promises.readFile(filename, 'utf8'))
        const applicableVersions = getApplicableVersions(data.versions, filename)
        const splitPath = filename.split('/')
        let category = ''
        let subCategory = ''

        if (splitPath[splitPath.length - 2] === 'rest') {
          category = data.title
        } else if (splitPath[splitPath.length - 3] === 'rest') {
          if (filename.includes('index.md')) {
            category = data.shortTitle || data.title
          } else {
            subCategory = data.shortTitle || data.title
          }
        }
        for (const version of applicableVersions) {
          if (category !== '') contentCheck[version].cat.push(category)
          if (subCategory !== '') contentCheck[version].subcat.push(subCategory)
        }
      }
    }
  })
})
