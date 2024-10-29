#!/usr/bin/env node

import assert from 'node:assert/strict'
import fs from 'fs'

import cheerio from 'cheerio'
import got from 'got'

/**
 * A very basic script that tests the local dev server.
 *
 * We use this in CI to make sure the local development server works.
 * There are certain things that only work and happen when in
 * local dev, that don't make sense to test in regular end-to-end tests
 * such as `vitest` rendering.
 *
 * For engineers to test this locally do the following:
 *
 *   1. Start `npm run dev` in one terminal
 *   2. Run `src/workflows/test-local-dev.js` in another terminal
 *
 */

main()

async function get(path, options) {
  // By default, got() will use retries and follow redirects.
  const t0 = new Date()
  const response = await got(makeURL(path), options)
  const took = new Date() - t0
  console.log(`GET ${path} => ${response.statusCode} (${took}ms)`)
  return response
}

function makeURL(path) {
  return `http://localhost:4000${path}`
}

async function main() {
  // Edit a page's content and expect to see that change when viewed
  await testEditingPage()

  // Only in local dev is the `?json=...` query string working
  await testJSONParameters()

  // In local development, it depends on proxying the search to prod
  // because if you haven't set up ELASTICSEARCH_URL.
  await testSiteSearch()

  await testViewingPages()

  // Next.js uses just-in-time compilation to compile pages on demand.
  // But once the server is up it should *not crash* to request these things.
  await testNextJsSpecialURLs()
}

async function testEditingPage() {
  const string = `Today's date is ${new Date().toString()}`
  const filePath = 'content/get-started/start-your-journey/hello-world.md'
  const content = fs.readFileSync(filePath, 'utf-8')
  try {
    fs.appendFileSync(filePath, string, 'utf-8')

    const res = await get('/get-started/start-your-journey/hello-world')
    if (!res.body.includes(string)) {
      throw new Error(`Couldn't find the string '${string}' in the response body`)
    }
  } finally {
    fs.writeFileSync(filePath, content, 'utf-8')
  }
}

async function testJSONParameters() {
  // currentVersion should be free-pro-team@latest
  {
    const res = await get('/get-started/start-your-journey/hello-world?json=currentVersion')
    const info = JSON.parse(res.body)
    assert(info === 'free-pro-team@latest')
  }

  // currentVersion should be free-pro-team@latest
  {
    const res = await get('/enterprise-server@latest/admin?json=currentVersion')
    const info = JSON.parse(res.body)
    assert(/enterprise-server@\d/.test(info))
  }

  // currentProduct (home page)
  {
    const res = await get('/en?json=currentProduct')
    const currentProduct = JSON.parse(res.body)
    assert(currentProduct === 'homepage')
  }

  // currentProduct (actions)
  {
    const res = await get('/en/actions?json=currentProduct')
    const currentProduct = JSON.parse(res.body)
    assert(currentProduct === 'actions')
  }

  // page
  {
    const res = await get('/en?json=page')
    const info = JSON.parse(res.body)
    assert(info.title === 'GitHub.com Help Documentation')
  }

  // Just ?json
  {
    const res = await get('/en?json')
    const info = JSON.parse(res.body)
    assert(info.message)
    assert(info.keys && Array.isArray(info.keys))
  }

  // Featured links
  {
    const res = await get('/en?json=featuredLinks.gettingStarted')
    const links = JSON.parse(res.body)
    assert(links && Array.isArray(links))
    assert(links[0].href)
    assert(links[0].page)
  }
}

async function testSiteSearch() {
  // Find something on free-pro-team@latest
  {
    const res = await get('/en/search?query=github')
    const $ = cheerio.load(res.body)
    // The [\d,]+ is because we use thousands separators in the number
    assert(/[\d,]+ Search results for "github"/.test($('h1').text()))
    assert($('[data-testid="search-result"]').length > 0)
  }
  // Find 0 things on enterprise-cloud@latest
  {
    const res = await get('/en/enterprise-cloud@latest/search?query=gobligook')
    const $ = cheerio.load(res.body)
    assert(/0 Search results for "gobligook"/.test($('h1').text()))
    assert($('[data-testid="search-result"]').length === 0)
  }
  // Using the search API
  {
    const res = await get('/api/search?query=github')
    const results = JSON.parse(res.body)
    assert(results.meta)
    assert(results.hits)
  }
  // Using the autocomplete search API
  {
    const res = await get('/api/search/autocomplete?query=gi')
    const results = JSON.parse(res.body)
    assert(results.meta)
    assert(results.hits)
  }
}

async function testViewingPages() {
  // Getting a 404 page with an /en/ prefix should be a 404 HTML page
  const res = await get('/en/never/heard/of', {
    throwHttpErrors: false,
  })
  assert(res.statusCode === 404)
  // console.log(res.body)
  const $ = cheerio.load(res.body)
  assert(/It looks like this page doesn't exist./.test($('article').text()))
}

async function testNextJsSpecialURLs() {
  // _next/webpack-hmr
  {
    const res = await get('/_next/webpack-hmr')
    assert(res.statusCode === 200)
  }
  // _next/static/webpack/HASH.webpack.hot-update.json
  {
    const res = await get('/_next/static/webpack/deadbeefdeadbeef.webpack.hot-update.json')
    assert(res.statusCode === 200)
  }
}
