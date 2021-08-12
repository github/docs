import '../../lib/feature-flags.js'
import { getDOM } from '../helpers/supertest.js'
import { jest } from '@jest/globals'

describe('sidebar', () => {
  jest.setTimeout(3 * 60 * 1000)

  let $homePage, $githubPage, $enterprisePage
  beforeAll(async () => {
    ;[$homePage, $githubPage, $enterprisePage] = await Promise.all([
      getDOM('/en'),
      getDOM('/en/github'),
      getDOM('/en/enterprise/admin'),
    ])
  })

  test('highlights active product on Enterprise pages', async () => {
    expect($enterprisePage('.sidebar-products li.sidebar-product').length).toBe(1)
    expect($enterprisePage('.sidebar-products li.sidebar-product > a').text().trim()).toBe(
      'Enterprise administrators'
    )
  })

  test('highlights active product on GitHub pages', async () => {
    expect($githubPage('.sidebar-products li.sidebar-product').length).toBe(1)
    expect($githubPage('.sidebar-products li.sidebar-product > a').text().trim()).toBe('GitHub')
  })

  test('includes links to external products like the CLI, Atom, Electron, and CodeQL', async () => {
    expect($homePage('.sidebar-products a[href="https://cli.github.com/manual"]')).toHaveLength(1)
    expect($homePage('.sidebar-products a[href="https://atom.io/docs"]')).toHaveLength(1)
    expect($homePage('.sidebar-products a[href="https://electronjs.org/docs"]')).toHaveLength(1)
    expect($homePage('.sidebar-products a[href="https://codeql.github.com/docs"]')).toHaveLength(1)
  })

  test('adds an `is-current-page` class to the sidebar link to the current page', async () => {
    const url =
      '/en/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings'
    const $ = await getDOM(url)
    expect($('.sidebar-products .is-current-page').length).toBe(1)
    expect($('.sidebar-products .is-current-page a').attr('href')).toContain(url)
  })

  test('does not display Early Access as a product', async () => {
    expect($homePage('.sidebar-products li.sidebar-product[title*="Early"]').length).toBe(0)
    expect($homePage('.sidebar-products li.sidebar-product[title*="early"]').length).toBe(0)
  })
})
