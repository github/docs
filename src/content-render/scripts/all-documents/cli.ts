// Generates JSON metadata for documents.
// Run npm run all-documents -- -o /tmp/all-documents.json.
// Defaults to all languages, free-pro-team, enterprise-cloud, latest enterprise-server,
// fields title, shortTitle, intro, and url, and output file all-documents.json.
// Use --version for versions such as free-pro-team@latest and ghes-3.12.
// Use --language for languages such as en and de.
// Use --filter to include only documents whose URL contains the given string.
// Use --field to choose output fields, such as url and title.
// Filter example: npm run all-documents -- -f get-started/using-github.
// Field example: npm run all-documents -- --field url --field title.
// Example field output: {"title":"Some title","url":"/some-url"}.

import { writeFileSync, statSync } from 'fs'

import { program, Option } from 'commander'

import { languageKeys } from '@/languages/lib/languages-server'
import { allVersions } from '@/versions/lib/all-versions'
import { allDocuments, POSSIBLE_FIELDS, type AllDocument } from './lib'

// Version flags accept enterprise-server@3.12 and free-pro-team@latest.
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
    const { documents: docDocuments, ...rest } = doc
    toJson.push({
      ...rest,
      documents: docDocuments,
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
