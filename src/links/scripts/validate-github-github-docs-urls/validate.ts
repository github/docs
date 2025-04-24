import fs from 'fs'

import chalk from 'chalk'
import { type DocsUrls, validateDocsUrl } from '@/links/lib/validate-docs-urls'

type Options = {
  failOnWarning?: boolean
  failOnError?: boolean
  output?: string
}

export async function validate(filePath: string, options: Options) {
  let exitCode = 0
  const docsUrls: DocsUrls = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  const label = `Checked ${Object.keys(docsUrls).length.toLocaleString()} URLs`
  console.time(label)
  const checks = await validateDocsUrl(docsUrls, { checkFragments: true })
  let i = 0
  for (const check of checks) {
    const prefix = `${++i}.`.padEnd(3)
    if (check.found) {
      if (check.redirect) {
        if (options.failOnWarning) exitCode++
        console.log(prefix, `🔀 ${check.url} -> ${check.redirect} (${check.identifier})`)
      } else {
        console.log(prefix, `✅ ${check.url} (${check.identifier})`)
      }
    } else {
      if (options.failOnError) exitCode++
      console.log(prefix, `❌ ${check.url} (${check.identifier})`)
    }
    if (check.fragment) {
      if (check.fragmentFound) {
        console.log(`    (fragment) 👍🏼 ${check.fragment}`)
      } else {
        console.log(`    (fragment) ❌ ${check.fragment}`)
        if (options.failOnError) exitCode++
      }
    }
  }

  console.log('')
  console.timeEnd(label)

  const T = (heading: string) => `${heading}:`.padEnd(20)
  console.log('')
  console.log(
    chalk.green(T('Perfect URLs')),
    checks.filter((check) => check.found && !check.redirect).length,
  )
  console.log(
    chalk.green(T('Perfect fragments')),
    checks.filter(
      (check) => check.found && !check.redirect && check.fragment && check.fragmentFound,
    ).length,
  )
  console.log(
    chalk.yellow(T('Redirects')),
    checks.filter((check) => check.found && check.redirect).length,
  )
  console.log(chalk.red(T('Failures')), checks.filter((check) => !check.found).length)
  console.log(
    chalk.red(T('Failing fragments')),
    checks.filter((check) => check.found && check.fragment && !check.fragmentFound).length,
  )

  if (options.output) {
    fs.writeFileSync(options.output, JSON.stringify(checks, null, 2))
  }

  process.exit(exitCode)
}
