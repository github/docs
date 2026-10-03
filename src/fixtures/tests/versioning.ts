import { describe, expect, test } from 'vitest'
import type { CheerioAPI } from 'cheerio'

import { getDOM, head } from '@/tests/helpers/e2etest'
import { supported } from '@/versions/lib/enterprise-server-releases'

describe('article versioning', () => {
  test('only links to articles for fpt', async () => {
    const $: CheerioAPI = await getDOM('/get-started/versioning')
    const links = $('[data-testid="table-of-contents"] a')
    // /get-started/versioning has one free-pro-team article.
    expect(links.length).toBe(1)
    expect(links.attr('href')).toBe('/en/get-started/versioning/only-fpt')
  })

  test('only links to articles for ghec', async () => {
    const $: CheerioAPI = await getDOM('/enterprise-cloud@latest/get-started/versioning')
    const links = $('[data-testid="table-of-contents"] a')
    expect(links.length).toBe(2)
    const first = links.filter((i: number) => i === 0)
    const second = links.filter((i: number) => i === 1)
    expect(first.attr('href')).toBe('/en/enterprise-cloud@latest/get-started/versioning/only-ghec')
    expect(second.attr('href')).toBe(
      '/en/enterprise-cloud@latest/get-started/versioning/only-ghec-and-ghes',
    )
    // Both linked enterprise-cloud articles must resolve without redirects.
    expect((await head(first.attr('href')!)).statusCode).toBe(200)
    expect((await head(second.attr('href')!)).statusCode).toBe(200)
  })

  test('wrong version prefix for a non-fpt article will 404', async () => {
    const res = await head('/enterprise-server@latest/get-started/versioning/only-ghec')
    expect(res.statusCode).toBe(404)
  })

  test('going to articles with the wrong version will 404', async () => {
    const res = await head('/enterprise-cloud@latest/get-started/versioning/only-fpt')
    expect(res.statusCode).toBe(404)
  })
  test('going to non-fpt article with fpt prefix will redirect', async () => {
    // Without the ghec prefix, a ghec-only article redirects to enterprise-cloud.
    const res = await head('/get-started/versioning/only-ghec', {
      followRedirects: false,
    })
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe(
      '/en/enterprise-cloud@latest/get-started/versioning/only-ghec',
    )
  })
})

describe('category versioning', () => {
  test('category page work in all children versions', async () => {
    {
      // get-started/versioning/index.md deliberately omits fpt, but the category resolves.
      const res = await head('/en/get-started/versioning')
      expect(res.statusCode).toBe(200)
    }
    {
      // get-started/versioning/index.md omits latest ghes, but it redirects to a number.
      const res = await head('/en/enterprise-server@latest/get-started/versioning')
      expect(res.statusCode).toBe(302)
      expect(res.headers.location).toMatch(
        /\/en\/enterprise-server@[\d.]+\/get-started\/versioning/,
      )
    }
    {
      // get-started/versioning/index.md omits latest ghec, but enterprise-cloud resolves.
      const res = await head('/en/enterprise-cloud@latest/get-started/versioning')
      expect(res.statusCode).toBe(200)
    }
  })
})

describe('home page versioning', () => {
  test('invalid language and valid version', async () => {
    // Use a numbered release so the invalid language returns 404 before any version redirect.
    const res = await head(`/ennnnn/enterprise-server@${supported[0]}`)
    expect(res.statusCode).toBe(404)
  })
  test('invalid language and invalid version', async () => {
    const res = await head(`/ennnnn/enterprise-server@4.987`)
    expect(res.statusCode).toBe(404)
  })
  test('valid language and valid version', async () => {
    const res = await head(`/en/enterprise-server@${supported[supported.length - 1]}`)
    expect(res.statusCode).toBe(200)
  })
  test('invalid language and "latest" version', async () => {
    const res = await head('/ennnnn/enterprise-server@latest')
    expect(res.statusCode).toBe(404)
  })
})
