import cheerio from 'cheerio'
import got from 'got'
import { omitBy, isUndefined } from 'lodash-es'

export async function get(
  route,
  {
    method = 'get',
    body = undefined,
    followRedirects = false,
    followAllRedirects = false,
    headers = {},
    responseType = '',
    retries = 0,
  } = {},
) {
  const fn = got[method]
  if (!fn || typeof fn !== 'function') throw new Error(`No method function for '${method}'`)
  const xopts = omitBy(
    {
      body,
      headers,
      retry: { limit: retries },
      throwHttpErrors: false,
      followRedirect: followAllRedirects || followRedirects,
      responseType: responseType || undefined,
    },
    isUndefined,
  )
  return await fn(`http://localhost:4000${route}`, xopts)
}

export async function head(route, opts = { followRedirects: false }) {
  const res = await get(route, { method: 'head', followRedirects: opts.followRedirects })
  return res
}

export function post(route, opts) {
  return get(route, Object.assign({}, opts, { method: 'post' }))
}

const getDOMCache = new Map()

export async function getDOMCached(route, options) {
  // got() can take a `cache` option but it's slower than just doing
  // a simple memoization pattern.
  const key = `${route}::${JSON.stringify(options)}`
  if (!getDOMCache.has(key)) {
    getDOMCache.set(key, await getDOM(route, options))
  }
  return getDOMCache.get(key)
}

export async function getDOM(
  route,
  { headers, allow500s = false, allow404 = false, retries = 0 } = {},
) {
  const res = await get(route, { followRedirects: true, headers, retries })
  if (!allow500s && res.statusCode >= 500) {
    throw new Error(`Server error (${res.statusCode}) on ${route}`)
  }
  if (!allow404 && res.statusCode === 404) {
    throw new Error(`Page not found on ${route} (${res.statusCode})`)
  }
  const $ = cheerio.load(res.body || '', { xmlMode: true })
  $.res = Object.assign({}, res)
  return $
}

// For use with the ?json query param
// e.g. await getJSON('/en?json=breadcrumbs')
export async function getJSON(route, opts) {
  const res = await get(route, { ...opts, followRedirects: true })
  if (res.statusCode >= 500) {
    throw new Error(`Server error (${res.statusCode}) on ${route}`)
  }
  if (res.statusCode >= 400) {
    console.warn(`${res.statusCode} on ${route} and the response might not be JSON`)
  }
  return JSON.parse(res.body)
}
