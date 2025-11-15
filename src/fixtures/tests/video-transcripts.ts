import { describe, expect, test } from 'vitest'
import cheerio from 'cheerio'

import { getDOM } from '@/tests/helpers/e2etest'

describe('transcripts', () => {
  describe('product landing page', () => {
    test('video link from product landing page leads to video', async () => {
      const $: cheerio.Root = await getDOM('/en/get-started')
      expect($('a#product-video').attr('href')).toBe(
        '/en/video-transcripts/transcript--my-awesome-video',
      )
    })
  })

  describe('transcript page', () => {
    test('video link from transcript leads to video', async () => {
      const $: cheerio.Root = await getDOM(
        '/en/get-started/video-transcripts/transcript--my-awesome-video',
      )
      expect($('a#product-video').attr('href')).toBe('https://www.yourube.com/abc123')
    })
  })
})
