import cheerio from 'cheerio'
import got from 'got'
import { omitBy, isUndefined } from 'lodash-es'

export async function get(
  route,
  opts = {
    method: 'get',
    body: undefined,
    followRedirects: false,
    followAllRedirects: false,
    headers: {},
    responseType: undefined,
  }
) {
  const method = opts.method || 'get'
  const fn = got[method]
  if (!fn || typeof fn !== 'function') throw new Error(`No method function for '${method}'`)
  const absURL = `http://localhost:4000${route}`
  const xopts = omitBy(
    {
      body: opts.body,
      headers: opts.headers,
      retry: { limit: 0 },
      throwHttpErrors: false,
      followRedirect: opts.followAllRedirects || opts.followRedirects,
      responseType: opts.responseType,
    },
    isUndefined
  )
  const res = await fn(absURL, xopts)
  // follow all redirects, or just follow one
  if (opts.followAllRedirects && [301, 302].includes(res.status)) {
    // res = await get(res.headers.location, opts)
    throw new Error('A')
  } else if (opts.followRedirects && [301, 302].includes(res.status)) {
    // res = await get(res.headers.location)
    throw new Error('B')
  }

  const { body, statusCode, headers, url } = res
  return {
    body,
    statusCode,
    headers,
    url,
    // Legacy
    text: body,
    status: statusCode,
    header: headers,
  }
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
  return getDOM(route, Object.assign({ cache: getDOMCache }, options))
}

export async function getDOM(
  route,
  { headers, allow500s, allow404 } = {
    headers: undefined,
    allow500s: false,
    allow404: false,
  }
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
export async function getJSON(route, opts) {
  const res = await get(route, { ...opts, followRedirects: true })
  if (res.status >= 500) {
    throw new Error(`Server error (${res.status}) on ${route}`)
  }
  if (res.status >= 400) {
    console.warn(`${res.status} on ${route} and the response might not be JSON`)
  }
  return JSON.parse(res.text)
}
