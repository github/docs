#!/usr/bin/env node

/**
 * This script gathers all English pages, computes each page's
 * 'title', 'intro' and 'product' properties. These things are then stored
 * in a JSON file (and gzipped) on disk. Then, the pageinfo middleware
 * can load in that JSON file to have a cache of pageinfo for all English
 * pages.
 * Now, when someone requests `/api/pageinfo?pathname=/en/foo/bar`, for the
 * backend, it just needs to read from a precomputed cache file instead
 * of having to do this computation on every request. Time saved, up front.
 *
 * Why cache?: Despite being a fast computation (3 Liquid + Markdown renders),
 * it still adds up. And it's safe and cheap to precompute in advance.
 *
 * Why only the English by default?: To make the file not too large.
 * Given how good these things compress, we might consider, in the
 * future, to do all languages.
 *
 * Why brotli?: Because the file gets included in the Docker container and
 * there every byte counts.
 *
 * When is this script run?: On every push to main, it gets computed
 * and uses actions/cache to store the result. Meaning, it's not run
 * during deployment. (During the deploy it only *downloads* from
 * actions/cache).
 */

import fs from 'fs'
import { brotliCompressSync } from 'zlib'

import chalk from 'chalk'
import { program, Option } from 'commander'

import { languageKeys } from 'src/languages/lib/languages.js'
import { loadPages, loadUnversionedTree } from 'src/frame/lib/page-data.js'
import { CACHE_FILE_PATH, getPageInfo } from '../middleware'

program
  .description('Generates a JSON file with precompute pageinfo data by pathname')
  .addOption(
    new Option('-l, --language <LANGUAGE...>', 'Which languages to focus on')
      .choices(languageKeys.concat('all'))
      .default(['en']),
  )
  .option('-o, --output-file <path>', 'path to output file', CACHE_FILE_PATH)
  .option('--max-versions <number>', 'max. number of permalink versions per page')
  .parse(process.argv)

type Options = {
  outputFile: string
  languages: string[]
  maxVersions: number
}
const opts = program.opts()

main({
  outputFile: opts.outputFile,
  languages: opts.language,
  maxVersions: isNaN(opts.maxVersions) ? 1 : Number(opts.maxVersions),
})

const CI = Boolean(JSON.parse(process.env.CI || 'false'))

type PageInfo = {
  title: string
  intro: string
  product: string
}

async function main(options: Options) {
  const { outputFile, languages, maxVersions } = options
  if (outputFile !== CACHE_FILE_PATH) {
    console.warn(chalk.yellow(`Writing to ${outputFile} instead of ${CACHE_FILE_PATH}`))
  }
  if (languages.includes('all')) {
    // This sets it to [], which when sent into loadUnversionedTree means
    // it does all languages that it can find.
    languages.length = 0
  }

  const unversionedTree = await loadUnversionedTree(languages)
  const pageList = await loadPages(unversionedTree, languages)

  let label = `Compute pageinfos for ${pageList.length.toLocaleString()} pages`
  console.time(label)
  const pageinfos: {
    [pathname: string]: PageInfo
  } = {}
  for (const page of pageList) {
    let countVersions = 0
    for (const permalink of page.permalinks) {
      const pathname = permalink.href
      try {
        const computed = await getPageInfo(page, pathname)
        if (computed) {
          pageinfos[pathname] = computed
        }
      } catch (error) {
        console.error(`Error computing pageinfo for ${page.fullPath} (${pathname})`)
        throw error
      }
      // By default, we only compute the first permalink href.
      // But you can do more if you want.
      if (++countVersions >= maxVersions) {
        // This means we're content with only doing the first permalink href.
        // That's 99% the free-pro-team permalink pathname.
        break
      }
    }
  }
  console.timeEnd(label)

  label = `Serialize, compress, and write to ${outputFile}`
  console.time(label)
  const payload = CI ? JSON.stringify(pageinfos) : JSON.stringify(pageinfos, null, 2)
  if (outputFile.endsWith('.json')) {
    fs.writeFileSync(outputFile, payload)
  } else {
    const payloadBuffer = Buffer.from(payload, 'utf-8')
    const payloadCompressed = brotliCompressSync(payloadBuffer)
    fs.writeFileSync(outputFile, payloadCompressed)
  }
  console.timeEnd(label)
  console.log(
    chalk.green(
      `Wrote ${Object.keys(pageinfos).length.toLocaleString()} pageinfos to ${outputFile}`,
    ),
  )
}
