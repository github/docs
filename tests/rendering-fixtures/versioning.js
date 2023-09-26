import { expect } from '@jest/globals'
import { getDOM, head } from '../helpers/e2etest.js'
import { supported } from '#src/versions/lib/enterprise-server-releases.js'

describe('article versioning', () => {
  test('only links to articles for fpt', async () => {
    const $ = await getDOM('/get-started/versioning')
    const links = $('[data-testid="table-of-contents"] a')
    // Only 1 link because there's only 1 article available in fpt
    expect(links.length).toBe(1)
    expect(links.attr('href')).toBe('/en/get-started/versioning/only-fpt')
  })

  test('only links to articles for ghae', async () => {
    const $ = await getDOM('/enterprise-cloud@latest/get-started/versioning')
    const links = $('[data-testid="table-of-contents"] a')
    expect(links.length).toBe(2)
    const first = links.filter((i) => i === 0)
    const second = links.filter((i) => i === 1)
    expect(first.attr('href')).toBe('/en/enterprise-cloud@latest/get-started/versioning/only-ghec')
    expect(second.attr('href')).toBe(
      '/en/enterprise-cloud@latest/get-started/versioning/only-ghec-and-ghes',
    )
    // Both links should 200 if you go to them
    expect((await head(first.attr('href'))).statusCode).toBe(200)
    expect((await head(second.attr('href'))).statusCode).toBe(200)
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
    // Viewing a ghec only article without ghec prefix
    const res = await head('/get-started/versioning/only-ghec', {
      followRedirects: false,
    })
    expect(res.statusCode).toBe(302)
    expect(res.headers.location).toBe(
      '/en/enterprise-cloud@latest/get-started/versioning/only-ghec',
    )
  })
})

describe('home page versioning', () => {
  test('invalid language and valid version', async () => {
    // Don't use 'latest' here because that will trigger a redirect
    // first to the latest actual number.
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
