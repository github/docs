import { describe, expect, test } from 'vitest'
import cheerio from 'cheerio'

import { getDOM } from '@/tests/helpers/e2etest'

describe('product landing page', () => {
  test('product landing page displays full title', async () => {
    const $: cheerio.Root = await getDOM('/get-started')
    expect($('h1').first().text()).toMatch(/Getting started with HubGit/)
  })

  test('product landing page lists with shortTitle heading (free-pro-team)', async () => {
    const $: cheerio.Root = await getDOM('/pages')
    // Note that this particular page (in the fixtures) has Liquid
    // in its shorTitle.
    expect($('#all-docs a').first().text()).toMatch('All Pages (HubGit) docs')
  })

  test('product landing page lists with shortTitle heading (enterprise-server)', async () => {
    const $: cheerio.Root = await getDOM('/enterprise-server@latest/pages')
    // Note that this particular page (in the fixtures) has Liquid
    // in its shorTitle.
    expect($('#all-docs a').first().text()).toMatch('All Pages (HubGit Enterprise Server) docs')
  })
})
