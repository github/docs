// This file makes an object with utility functions for re-use in
// multiple test files

const cheerio = require('cheerio')
const supertest = require('supertest')
const createApp = require('../../lib/app')
const app = createApp()

const helpers = {}

const request = (method, route) => supertest(app)[method](route)

helpers.get = async function (route, opts = { followRedirects: false, followAllRedirects: false, headers: {} }) {
  let res = (opts.headers) ? await request('get', route).set(opts.headers) : await request('get', route)
  // follow all redirects, or just follow one
  if (opts.followAllRedirects && [301, 302].includes(res.status)) {
    res = await helpers.get(res.headers.location, opts)
  } else if (opts.followRedirects && [301, 302].includes(res.status)) {
    res = await helpers.get(res.headers.location)
  }

  return res
}

helpers.head = async function (route, opts = { followRedirects: false }) {
  const res = await request('head', route).redirects(opts.followRedirects ? 10 : 0)
  return res
}

helpers.post = route => request('post', route)

helpers.getDOM = async function (route, headers) {
  const res = await helpers.get(route, { followRedirects: true, headers })
  const $ = cheerio.load((res.text || ''), { xmlMode: true })
  $.res = Object.assign({}, res)
  return $
}

// For use with the ?json query param
// e.g. await getJSON('/en?json=breadcrumbs')
helpers.getJSON = async function (route) {
  const res = await helpers.get(route, { followRedirects: true })
  return JSON.parse(res.text)
}

module.exports = helpers
