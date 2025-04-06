/**
 * You specify one or more languages and versions, and this script
 * will output a JSON file with the metadata needed.
 * You run it with:
 *
 *    npm run all-documents -- -o /tmp/all-documents.json
 *
 * By default, it will do free-pro-team, enterprise-cloud, and whatever
 * the latest enterprise-server is. You can specify versions with: --version
 * For example:
 *
 *    npm run all-documents -- -v free-pro-team@latest -v ghes-3.12
 *
 * By default it will include all languages, but you can specify
 * with --language
 *
 *    npm run all-documents -- -l en -l de
 *
 * For debugging purposes, because there are so *many* documents you can
 * apply a filter by URL matching, for example:
 *
 *    npm run all-documents -- -f get-started/using-github
 *
 * This will only include documents whose URL contains the string
 * 'get-started/using-github'.
 *
 * If you don't specify an output file (the --output flag or -o for short),
 * it will print all the JSON to stdout.
 *
 * By default the fields set to include are: title, shortTitle, intro, url.
 * You can instead specify the fields you only want. For example
 *
 *    npm run all-documents -- --field url --field title
 *
 * Now the JSON will look like this:
 *
 *    ...
 *    {"title": "Some title", "url": "/some-url"}
 *    ...
 */

import { writeFileSync, statSync } from 'fs'

import { program, Option } from 'commander'

import { languageKeys } from '@/languages/lib/languages.js'
import { allVersions } from '@/versions/lib/all-versions.js'
import { allDocuments, POSSIBLE_FIELDS, type AllDocument } from './lib'

// E.g. enteprise-server@3.12, free-pro-team@latest, etc
const fullVersions = Object.keys(allVersions)
const defaultVersions: string[] = []
const shortAlias = new Map<string, string>()
for (const [version, info] of Object.entries(allVersions)) {
  shortAlias.set(info.openApiVersionName, version)
  if (info.hasNumberedReleases) {
    if (info.latestRelease === info.currentRelease) {
      defaultVersions.push(version)
    }
  } else {
    defaultVersions.push(version)
  }
}

program
  .description("Generate a JSON output of all documents' metadata")
  .addOption(
    new Option('-l, --language <language...>', 'Specific languages(s)').choices(languageKeys),
  )
  .addOption(
    new Option('-v, --version <version...>', 'Specific version(s)').choices([
      ...fullVersions,
      ...shortAlias.keys(),
    ]),
  )
  .addOption(
    new Option('--field <field...>', 'Fields to include for each document (multiple)').choices(
      POSSIBLE_FIELDS,
    ),
  )
  .option('-f, --filter <search>', 'Only for matched files (most for debugging)')
  .option('-o, --output <output-file>', 'Output file', 'all-documents.json')
  .action(main)

program.parse(process.argv)

type Options = {
  version?: string[]
  language?: string[]
  field?: string[]
  output: string
  filter?: string
}
async function main(options: Options) {
  const languages = options.language ? options.language : languageKeys
  const versions: string[] = []
  for (const v of options.version || defaultVersions) {
    if (shortAlias.has(v)) {
      versions.push(shortAlias.get(v)!)
    } else {
      versions.push(v)
    }
  }
  const filter = options.filter
  const fields = options.field || POSSIBLE_FIELDS

  const t0 = new Date()
  const documents = await allDocuments({
    languages,
    versions,
    filter,
    fields,
  })
  const t1 = new Date()

  const toJson: AllDocument[] = []
  for (const doc of documents) {
    const { documents, ...rest } = doc
    toJson.push({
      ...rest,
      documents,
    })
  }

  const toString = JSON.stringify(toJson, null, 2)
  const outFile = options.output
  writeFileSync(outFile, toString)
  const seconds = (t1.getTime() - t0.getTime()) / 1000
  const size = statSync(outFile).size
  console.log(`Wrote ${outFile} (${fileSize(size)}). Took ${seconds.toFixed(1)} seconds.`)
}

const fileSize = (bytes: number) => {
  if (bytes > 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)}Mb`
  if (bytes > 1024) return `${(bytes / 1024).toFixed(1)}Kb`
  return `${bytes} bytes`
}
