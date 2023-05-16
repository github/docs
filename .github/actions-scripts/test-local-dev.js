#!/usr/bin/env node

import assert from 'node:assert/strict'
import fs from 'fs'

import got from 'got'

/**
 * A very basic script that tests the local dev server.
 *
 * We use this in CI to make sure the local development server works.
 * There are certain things that only work and happen when in
 * local dev, that don't make sense to test in regular end-to-end tests
 * such as `jest` rendering.
 */

main()

async function get(path) {
  // By default, got() will use retries and follow redirects.
  const response = await got(makeURL(path))
  console.log(`GET ${path} => ${response.statusCode}`)
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
}

async function testEditingPage() {
  const string = `Today's date is ${new Date().toString()}`
  const filePath = 'content/get-started/quickstart/hello-world.md'
  const content = fs.readFileSync(filePath, 'utf-8')
  try {
    fs.appendFileSync(filePath, string, 'utf-8')

    const res = await get('/get-started/quickstart/hello-world')
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
    const res = await get('/get-started/quickstart/hello-world?json=currentVersion')
    const info = JSON.parse(res.body)
    assert(info === 'free-pro-team@latest')
  }

  // currentVersion should be free-pro-team@latest
  {
    const res = await get('/enterprise-server@latest/admin?json=currentVersion')
    const info = JSON.parse(res.body)
    assert(/enterprise-server@\d/.test(info))
  }

  // activeProducts
  {
    const res = await get('/en?json=activeProducts')
    const activeProducts = JSON.parse(res.body)
    assert(Array.isArray(activeProducts))
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
