import { getDOM } from '../helpers/e2etest.js'

describe('product landing page', () => {
  test('product landing page displays full title', async () => {
    const $ = await getDOM('/get-started')
    expect($('h1').first().text()).toMatch(/Getting started with HubGit/)
  })

  test('product landing page lists with shortTitle heading (free-pro-team)', async () => {
    const $ = await getDOM('/pages')
    // Note that this particular page (in the fixtures) has Liquid
    // in its shorTitle.
    expect($('#all-docs a').first().text()).toMatch('All Pages (GitHub) docs')
  })

  test('product landing page lists with shortTitle heading (enterprise-server)', async () => {
    const $ = await getDOM('/enterprise-server@latest/pages')
    // Note that this particular page (in the fixtures) has Liquid
    // in its shorTitle.
    expect($('#all-docs a').first().text()).toMatch('All Pages (GitHub Enterprise Server) docs')
  })
})
