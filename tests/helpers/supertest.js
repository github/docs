import cheerio from 'cheerio'
import supertest from 'supertest'
import createApp from '../../lib/app.js'
// This file makes an object with utility functions for re-use in
// multiple test files

const app = createApp()

const requester = supertest(app)
const request = (method, route) => requester[method](route)

export async function get(
  route,
  opts = { followRedirects: false, followAllRedirects: false, headers: {} }
) {
  let res = opts.headers
    ? await request('get', route).set(opts.headers)
    : await request('get', route)
  // follow all redirects, or just follow one
  if (opts.followAllRedirects && [301, 302].includes(res.status)) {
    res = await get(res.headers.location, opts)
  } else if (opts.followRedirects && [301, 302].includes(res.status)) {
    res = await get(res.headers.location)
  }

  return res
}

export async function head(route, opts = { followRedirects: false }) {
  const res = await request('head', route).redirects(opts.followRedirects ? 10 : 0)
  return res
}

export function post(route) {
  return request('post', route)
}

export async function getDOM(
  route,
  { headers, allow500s, allow404 } = { headers: undefined, allow500s: false, allow404: false }
) {
  const res = await get(route, { followRedirects: true, headers })
  if (!allow500s && res.status >= 500) {
    throw new Error(`Server error (${res.status}) on ${route}`)
  }
  if (!allow404 && res.status === 404) {
    throw new Error(`Page not found on ${route}`)
  }
  const $ = cheerio.load(res.text || '', { xmlMode: true })
  $.res = Object.assign({}, res)
  return $
}

// For use with the ?json query param
// e.g. await getJSON('/en?json=breadcrumbs')
export async function getJSON(route) {
  const res = await get(route, { followRedirects: true })
  if (res.status >= 500) {
    throw new Error(`Server error (${res.status}) on ${route}`)
  }
  if (res.status >= 400) {
    console.warn(`${res.status} on ${route} and the response might not be JSON`)
  }
  return JSON.parse(res.text)
}
