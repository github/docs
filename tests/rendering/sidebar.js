import { expect, jest } from '@jest/globals'

import '../../lib/feature-flags.js'
import { getDOM } from '../helpers/e2etest.js'
import fs from 'fs'
import path from 'path'

describe('sidebar', () => {
  jest.setTimeout(3 * 60 * 1000)

  let $homePage, $githubPage, $enterprisePage, $restPage
  beforeAll(async () => {
    ;[$homePage, $githubPage, $enterprisePage, $restPage] = await Promise.all([
      getDOM('/en'),
      getDOM('/en/github'),
      getDOM('/en/enterprise/admin'),
      // Using enterprise cloud bc we currently have a one off situation where secret-scanning is not a part of FPT
      getDOM('/en/enterprise-cloud@latest/rest'),
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
    ).toBe('GitHub')
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

  test('Check that the top level categories in the REST sidebar match content/rest directory for ghec', async () => {
    const dir = path.posix.join(process.cwd(), 'content', 'rest')
    const numCategories = []
    const sidebarRestCategories = $restPage(
      '[data-testid=sidebar] [data-testid=rest-sidebar-items] details summary div div'
    ).get()
    const sidebarRestCategoryTitles = sidebarRestCategories.map((el) => $restPage(el).text().trim())

    fs.readdirSync(dir).forEach((file) => {
      if (file !== 'index.md' && file !== 'README.md' && file !== '.DS_Store') {
        numCategories.push(file)
      }
    })

    expect(numCategories.length).toBe(sidebarRestCategoryTitles.length)
  })
})
