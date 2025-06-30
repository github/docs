import { describe, expect, test } from 'vitest'
import cheerio from 'cheerio'

import enterpriseServerReleases from '@/versions/lib/enterprise-server-releases'
import { getDOM } from '@/tests/helpers/e2etest'

describe('page titles', () => {
  test('homepage', async () => {
    const $: cheerio.Root = await getDOM('/en')
    expect($('title').text()).toBe('GitHub Docs')
  })

  test('fpt article', async () => {
    const $: cheerio.Root = await getDOM('/get-started/start-your-journey/hello-world')
    expect($('title').text()).toBe('Hello World - GitHub Docs')
  })

  test('ghes article', async () => {
    const $: cheerio.Root = await getDOM(
      `/enterprise-server@latest/get-started/start-your-journey/hello-world`,
    )
    expect($('title').text()).toBe(
      `Hello World - GitHub Enterprise Server ${enterpriseServerReleases.latestStable} Docs`,
    )
  })

  test('fpt subcategory page', async () => {
    const $: cheerio.Root = await getDOM('/en/get-started/start-your-journey')
    expect($('title').text()).toBe('Start your journey - GitHub Docs')
  })

  test('fpt category page', async () => {
    const $: cheerio.Root = await getDOM('/actions/category')
    expect($('title').text()).toBe('Category page of GitHub Actions - GitHub Docs')
  })
})
