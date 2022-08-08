#!/usr/bin/env node
import dotenv from 'dotenv'
import got from 'got'
import Bottleneck from 'bottleneck'

// NOTE: If you get this error:
//
//    Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'bottleneck' ...
//
// it's because you haven't installed all the *optional* dependencies.
// To do that, run:
//
//    npm install --include=optional
//

import { loadPages } from '../../lib/page-data.js'
import { allVersions } from '../../lib/all-versions.js'
import languages from '../../lib/languages.js'
const port = 4002

dotenv.config()
/*
  Good local testing values are MAX_CONCURRENT=30, MIN_TIME=20
*/
const MAX_CONCURRENT = parseInt(process.env.BUILD_RECORDS_MAX_CONCURRENT || '200', 10)
const MIN_TIME = parseInt(process.env.BUILD_RECORDS_MIN_TIME || '5', 10)
const languageCode = process.env.LANGUAGE
const singleVersion = process.env.VERSION

main()

async function main() {
  const start = process.hrtime.bigint()
  const opts = {
    maxConcurrent: MAX_CONCURRENT,
    minTime: MIN_TIME,
  }
  const limiter = new Bottleneck(opts)
  const allPages = await loadPages()
  const languageCodes =
    [languageCode] ||
    Object.keys(languages)
      .filter((language) => language !== 'en')
      .map((language) => languages[language].code)
  const versions = singleVersion ? [singleVersion] : Object.keys(allVersions)

  const allPermalinks = []
  for (const language of languageCodes) {
    for (const version of versions) {
      const pages = allPages.filter(
        (page) => page.languageCode === language && page.applicableVersions.includes(version)
      )

      const permalinks = pages
        .map((page) => {
          return page.permalinks.find((permalink) => {
            return permalink.languageCode === language && permalink.pageVersion === version
          })
        })
        .map((permalink) => {
          permalink.url = `http://localhost:${port}${permalink.href}`
          return permalink
        })
      allPermalinks.push(...permalinks)
    }
  }
  allPermalinks.forEach((page) => {
    limiter.schedule(getPage, page)
  })

  limiter
    .on('idle', () => {
      const end = process.hrtime.bigint()
      console.log(`Took ${Number(end - start) / 1000000000}s`)
      console.log('All done!')
    })
    .on('error', (err) => {
      console.log('error', err)
    })
}

async function getPage(page) {
  try {
    const response = await got.get(page.url, { throwHttpErrors: false })
    if (response.statusCode !== 200) {
      console.log('Status Code:', response.statusCode, 'Page: ', page.url)
    }
  } catch (err) {
    console.error(err)
  }
}
