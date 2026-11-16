import { describe, expect, test } from 'vitest'
import { load } from 'cheerio'

import { renderContent } from '@/content-render/index'

function imgSrcs($: ReturnType<typeof load>): string[] {
  return $('img')
    .map((_, el) => $(el).attr('src'))
    .get()
}

describe('wrap-procedural-images rehype plugin', () => {
  test('wraps a single tight list image once', async () => {
    const html = await renderContent(
      '1. Click **Settings**.\n   ![Before](/assets/images/a.png)\n1. Next step.\n',
    )
    const $ = load(html)
    expect($('.procedural-image-wrapper')).toHaveLength(1)
    expect($('li > .procedural-image-wrapper img').attr('src')).toContain('a.png')
  })

  test('wraps each sibling image separately in a tight list', async () => {
    const html = await renderContent(
      '1. Click **Settings**.\n   ![Before](/assets/images/a.png)\n   ![After](/assets/images/b.png)\n1. Next step.\n',
    )
    const $ = load(html)
    expect($('.procedural-image-wrapper')).toHaveLength(2)
    expect($('.procedural-image-wrapper .procedural-image-wrapper')).toHaveLength(0)
    const srcs = imgSrcs($)
    expect(srcs).toHaveLength(2)
    expect(srcs.filter((src) => src.includes('a.png'))).toHaveLength(1)
    expect(srcs.filter((src) => src.includes('b.png'))).toHaveLength(1)
  })

  test('wraps each raw HTML sibling image separately', async () => {
    const html = await renderContent(
      '1. Click **Settings**.\n\n   <img src="/assets/images/a.png" alt="A">\n   <img src="/assets/images/b.png" alt="B">\n1. Next step.\n',
    )
    const $ = load(html)
    expect($('.procedural-image-wrapper')).toHaveLength(2)
    expect($('.procedural-image-wrapper .procedural-image-wrapper')).toHaveLength(0)
    const srcs = imgSrcs($)
    expect(srcs.filter((src) => src.includes('a.png'))).toHaveLength(1)
    expect(srcs.filter((src) => src.includes('b.png'))).toHaveLength(1)
  })

  test('does not wrap a loose list image inside a paragraph', async () => {
    const html = await renderContent(
      '1. Click **Settings**.\n\n   ![Before](/assets/images/a.png)\n\n1. Next step.\n',
    )
    const $ = load(html)
    expect($('.procedural-image-wrapper')).toHaveLength(0)
    expect($('li p img').attr('src')).toContain('a.png')
  })
})
