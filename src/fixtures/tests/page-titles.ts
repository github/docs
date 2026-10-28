import { describe, expect, test } from 'vitest'
import type { CheerioAPI } from 'cheerio'

import enterpriseServerReleases from '@/versions/lib/enterprise-server-releases'
import { getDOM } from '@/tests/helpers/e2etest'

describe('page titles', () => {
  test('homepage', async () => {
    const $: CheerioAPI = await getDOM('/en')
    expect($('title').text()).toBe('GitHub Docs')
  })

  test('ghec homepage', async () => {
    const $: CheerioAPI = await getDOM('/en/enterprise-cloud@latest')
    expect($('title').text()).toBe(
      'HubGit Enterprise Cloud.com Fixture Documentation - GitHub Enterprise Cloud Docs',
    )
  })

  test('ghes homepage', async () => {
    const $: CheerioAPI = await getDOM('/en/enterprise-server@latest')
    expect($('title').text()).toBe(
      `HubGit Enterprise Server Fixture Documentation - GitHub Enterprise Server ${enterpriseServerReleases.latestStable} Docs`,
    )
  })

  test('fpt article', async () => {
    const $: CheerioAPI = await getDOM('/get-started/start-your-journey/hello-world')
    expect($('title').text()).toBe('Hello World - GitHub Docs')
  })

  test('ghes article', async () => {
    const $: CheerioAPI = await getDOM(
      `/enterprise-server@latest/get-started/start-your-journey/hello-world`,
    )
    expect($('title').text()).toBe(
      `Hello World - GitHub Enterprise Server ${enterpriseServerReleases.latestStable} Docs`,
    )
  })

  test('fpt subcategory page', async () => {
    const $: CheerioAPI = await getDOM('/en/get-started/start-your-journey')
    expect($('title').text()).toBe('Start your journey - GitHub Docs')
  })

  test('fpt category page', async () => {
    const $: CheerioAPI = await getDOM('/actions/category')
    expect($('title').text()).toBe('Category page of GitHub Actions - GitHub Docs')
  })
})
