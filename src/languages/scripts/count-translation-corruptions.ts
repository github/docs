import path from 'path'
import fs from 'fs'

import { program } from 'commander'
import chalk from 'chalk'
import { TokenizationError } from 'liquidjs'
import walk from 'walk-sync'

import { getLiquidTokens } from '@/content-linter/lib/helpers/liquid-utils.js'
import languages from '@/languages/lib/languages.js'
import warmServer from '@/frame/lib/warm-server'
import type { Site } from '@/types'
import { correctTranslatedContentStrings } from '@/languages/lib/correct-translation-content.js'

program
  .description('Tally the number of liquid corruptions in a translation')
  .argument('[language...]', 'language(s) to compare against')
  .action(main)
program.parse(process.argv)

type Reusables = Map<string, string>

async function main(languageCodes: string[]) {
  const langCodes = languageCodes.length
    ? languageCodes
    : Object.keys(languages).filter((x) => x !== 'en')
  const site = await warmServer(languageCodes.length ? ['en', ...langCodes] : [])

  // When checking reusables, we only want to check the files that
  // have an English equivalent.
  const reusables = getReusables()

  const totalErrors = new Map<string, number>()

  for (const languageCode of langCodes) {
    if (!(languageCode in languages)) {
      console.error(chalk.red(`Language ${languageCode} not found`))
      return process.exit(1)
    }
    if (languageCode === 'en') {
      console.error(chalk.red("Can't test in English ('en')"))
      return process.exit(1)
    }
    const { errors } = run(languageCode, site, reusables)
    for (const [error, count] of Array.from(errors.entries())) {
      totalErrors.set(error, (totalErrors.get(error) || 0) + count)
    }
  }

  const sumTotal = Array.from(totalErrors.values()).reduce((acc, count) => acc + count, 0)
  console.log('\nGRAND TOTAL ERRORS:', sumTotal)
}

function getReusables(): Reusables {
  const reusables = new Map()
  const files = walk('data/reusables', {
    includeBasePath: true,
    globs: ['**/*.md'],
    ignore: ['**/README.md'],
  })
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8')
    reusables.set(file, content)
  }
  return reusables
}

function run(languageCode: string, site: Site, englishReusables: Reusables) {
  const PADDING = 60
  const language = languages[languageCode as keyof typeof languages]

  console.log(`--- Tallying liquid corruptions in ${languageCode} (${language.name}) ---`)

  const pageList = site.pageList
  const errors = new Map<string, number>()
  const wheres = new Map<string, number>()
  const illegalTags = new Map<string, number>()

  function countError(error: TokenizationError, where: string) {
    const originalError = (error as any).originalError
    const errorString = originalError ? originalError.message : error.message
    if (errorString.includes('illegal tag syntax')) {
      const illegalTag = (error as any).token.content
      illegalTags.set(illegalTag, (illegalTags.get(illegalTag) || 0) + 1)
    }
    errors.set(errorString, (errors.get(errorString) || 0) + 1)
    wheres.set(where, (wheres.get(where) || 0) + 1)
  }

  for (const page of pageList) {
    if (page.languageCode !== languageCode) continue

    const strings: string[][] = [
      ['title', page.title],
      ['shortTitle', page.shortTitle || ''],
      ['intro', page.intro || ''],
      ['markdown', page.markdown],
    ].filter(([, string]) => Boolean(string))

    for (const [where, string] of strings) {
      try {
        getLiquidTokens(string)
      } catch (error) {
        if (error instanceof TokenizationError) {
          countError(error, where)
        } else {
          throw error
        }
      }
    }
  }

  for (const [relativePath, englishContent] of Array.from(englishReusables.entries())) {
    try {
      const filePath = path.join(language.dir, relativePath)
      const rawContent = fs.readFileSync(filePath, 'utf8')
      const correctedContent = correctTranslatedContentStrings(rawContent, englishContent, {
        code: languageCode,
        relativePath,
      })
      getLiquidTokens(correctedContent)
    } catch (error) {
      if (error instanceof TokenizationError) {
        countError(error, 'reusable')
      } else if (error instanceof Error && error.message.startsWith('ENOENT')) {
        continue
      } else {
        throw error
      }
    }
  }

  const flat = Array.from(errors.entries()).sort((a, b) => b[1] - a[1])
  const sumTotal = flat.reduce((acc, [, count]) => acc + count, 0)

  console.log('\nMost common errors')
  flat.forEach(([error, count], i) => {
    console.log(`${i + 1}.`.padEnd(3), error.padEnd(PADDING), count)
  })
  console.log(`${'TOTAL:'.padEnd(3 + 1 + PADDING)}`, sumTotal)

  if (sumTotal) {
    const whereFlat = Array.from(wheres.entries()).sort((a, b) => b[1] - a[1])
    console.log('\nMost common places')
    whereFlat.forEach(([error, count], i) => {
      console.log(`${i + 1}.`.padEnd(3), error.padEnd(PADDING), count)
    })

    const illegalTagsFlat = Array.from(illegalTags.entries()).sort((a, b) => b[1] - a[1])
    if (illegalTagsFlat.reduce((acc, [, count]) => acc + count, 0)) {
      console.log('\nMost common illegal tags', illegalTagsFlat.length > 10 ? ' (Top 10)' : '')
      illegalTagsFlat.slice(0, 10).forEach(([error, count], i) => {
        console.log(`${i + 1}.`.padEnd(3), error.padEnd(PADDING), count)
      })
    }
  }
  console.log('\n')

  return { errors }
}
