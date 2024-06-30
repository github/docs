import fs from 'fs'

import chalk from 'chalk'

import { type Check } from '../../lib/validate-docs-urls'

type Options = {
  output?: string
}
type DocsUrls = {
  [key: string]: string
}
export function generateNewJSON(
  checksFilePath: string,
  destinationFilePath: string,
  options: Options,
) {
  const checks: Check[] = JSON.parse(fs.readFileSync(checksFilePath, 'utf8'))
  const destination: DocsUrls = JSON.parse(fs.readFileSync(destinationFilePath, 'utf8'))

  let countChanges = 0
  for (const [identifier, url] of Object.entries(destination)) {
    const check = checks.find((check) => check.identifier === identifier)
    if (check) {
      // At the moment, the only possible correction is if the URL is
      // found but required a redirect.
      if (check.redirect) {
        destination[identifier] = check.redirect
        console.log(
          `For identifier '${chalk.bold(identifier)}' change from '${chalk.bold(url)}' to '${chalk.bold(check.redirect)}'`,
        )
        countChanges++
      }
    }
  }

  if (countChanges > 0) {
    const writeTo = options.output || destinationFilePath
    // It's important that this serializes exactly like the Ruby code
    // that is the CLI script `script/add-docs-url` in github/github.
    const serialized = JSON.stringify(destination, null, 2) + '\n'
    fs.writeFileSync(writeTo, serialized, 'utf-8')
    console.log(`Wrote ${countChanges} change${countChanges === 1 ? '' : 's'} to ${writeTo}`)
    if (writeTo !== destinationFilePath) {
      console.log(`Consider now running: diff ${destinationFilePath} ${writeTo}`)
    }
  } else {
    console.log(chalk.yellow('No changes to write'))
  }
}
