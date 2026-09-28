// Precomputes title, intro, and product for article metadata into a Brotli cache.
// This avoids rendering three properties with Liquid and Markdown on every request.
// Default English-only output keeps the cache small; Brotli keeps the Docker image smaller.
// The main workflow computes the cache; deployment only restores it.

import fs from 'fs'
import { brotliCompressSync } from 'zlib'

import chalk from 'chalk'
import { program, Option } from 'commander'

import { languageKeys } from '@/languages/lib/languages-server'
import { loadPages, loadUnversionedTree } from '@/frame/lib/page-data'
import { CACHE_FILE_PATH, getCacheablePageInfo } from '../middleware/article-pageinfo'

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
    // loadUnversionedTree treats an empty language list as all languages.
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
        const computed = await getCacheablePageInfo(page, pathname)
        if (computed) {
          pageinfos[pathname] = computed
        }
      } catch (error) {
        console.error(`Error computing pageinfo for ${page.fullPath} (${pathname})`)
        throw error
      }
      if (++countVersions >= maxVersions) {
        // The default keeps one permalink; 99% of first permalinks use the free-pro-team pathname.
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
    const payloadCompressed = brotliCompressSync(payloadBuffer as NodeJS.ArrayBufferView)
    fs.writeFileSync(outputFile, payloadCompressed as NodeJS.ArrayBufferView)
  }
  console.timeEnd(label)
  console.log(
    chalk.green(
      `Wrote ${Object.keys(pageinfos).length.toLocaleString()} pageinfos to ${outputFile}`,
    ),
  )
}
