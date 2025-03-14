import { describe, expect, test } from 'vitest'

import enterpriseServerReleases from '#src/versions/lib/enterprise-server-releases.js'
import { getDOM } from '#src/tests/helpers/e2etest.js'

describe('page titles', () => {
  test('homepage', async () => {
    const $ = await getDOM('/en')
    expect($('title').text()).toBe('GitHub Docs')
  })

  test('fpt article', async () => {
    const $ = await getDOM('/get-started/start-your-journey/hello-world')
    expect($('title').text()).toBe('Hello World - GitHub Docs')
  })

  test('ghes article', async () => {
    const $ = await getDOM(`/enterprise-server@latest/get-started/start-your-journey/hello-world`)
    expect($('title').text()).toBe(
      `Hello World - GitHub Enterprise Server ${enterpriseServerReleases.latestStable} Docs`,
    )
  })

  test('fpt map topic page', async () => {
    const $ = await getDOM('/en/get-started/start-your-journey')
    expect($('title').text()).toBe('Start your journey - GitHub Docs')
  })

  test('fpt category page', async () => {
    const $ = await getDOM('/actions/category')
    expect($('title').text()).toBe('Category page of GitHub Actions - GitHub Docs')
  })
})
