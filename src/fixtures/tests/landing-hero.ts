import { describe, expect, test } from 'vitest'
import type { CheerioAPI } from 'cheerio'

import { getDOM } from '@/tests/helpers/e2etest'

describe('product landing page', () => {
  test('product landing page displays full title', async () => {
    const $: CheerioAPI = await getDOM('/get-started')
    expect($('h1').first().text()).toMatch(/Getting started with HubGit/)
  })
})
