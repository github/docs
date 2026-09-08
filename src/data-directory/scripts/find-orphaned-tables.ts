// [start-readme]
//
// Print a list of all the YAML-powered table files in ./data/tables/ that
// can't be found mentioned in any source file (content, data & code), along
// with their paired schema files. Mirrors find-orphaned-assets.ts.
//
// Tables are referenced from Liquid like:
//
//     {% data tables.<group>.<name> %}
//     {% for entry in tables.<group>.<name> %}
//
// so a table file `data/tables/<group>/<name>.yml` is "used" if the string
// `tables.<group>.<name>` appears anywhere. A deeper reference such as
// `tables.<group>.<name>.<subkey>` also counts, because the file key is a
// prefix of it.
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'
import { program } from 'commander'
import walk from 'walk-sync'

import walkFiles from '@/workflows/walk-files'
import languages from '@/languages/lib/languages-server'

const TABLES_DIR = 'data/tables'
const SCHEMAS_DIR = 'src/data-directory/lib/data-schemas/tables'

// Tables that are referenced dynamically (not via Liquid) and must never be
// flagged as orphans. Add an entry here (the dotted key, e.g. `copilot.foo`)
// if a table is loaded by code rather than mentioned in content.
const EXCEPTIONS = new Set<string>([])

export type TableFile = {
  // Repo-relative path to the YAML file, e.g. data/tables/copilot/model-multipliers.yml
  yml: string
  // Repo-relative path to the paired schema, if it exists on disk.
  schema?: string
  // Dotted key used in Liquid, e.g. copilot.model-multipliers
  key: string
}

function getTableFiles(): TableFile[] {
  if (!fs.existsSync(TABLES_DIR)) return []
  return walk(TABLES_DIR, { includeBasePath: true, directories: false })
    .filter((filePath) => filePath.endsWith('.yml'))
    .map((ymlPath) => {
      const relative = path.relative(TABLES_DIR, ymlPath)
      const key = relative.slice(0, -'.yml'.length).split(path.sep).join('.')
      const schemaPath = path.join(SCHEMAS_DIR, relative.replace(/\.yml$/, '.ts'))
      return {
        yml: ymlPath,
        schema: fs.existsSync(schemaPath) ? schemaPath : undefined,
        key,
      }
    })
}

program
  .description('Print all tables in ./data/tables/ not found in any source file')
  .option('-e, --exit', 'Exit script by count of orphans (useful for CI)')
  .option('-v, --verbose', 'Verbose outputs')
  .option('--json', 'Output in JSON format')
  .option('--exclude-translations', "Don't search in translations/")

type MainOptions = {
  json: boolean
  verbose: boolean
  exit: boolean
  excludeTranslations: boolean
}

// Given the table files and the contents of every source file, return the
// tables whose Liquid key is never mentioned. Pulled out of main() so it can
// be unit tested without touching the filesystem.
export function getOrphanedTables(
  tables: TableFile[],
  sourceContents: Iterable<string>,
): TableFile[] {
  const orphans = new Map(tables.map((table) => [table.key, table]))
  for (const content of sourceContents) {
    if (orphans.size === 0) break
    for (const [key] of orphans) {
      if (EXCEPTIONS.has(key) || content.includes(`tables.${key}`)) {
        orphans.delete(key)
      }
    }
  }
  return [...orphans.values()].sort((a, b) => a.yml.localeCompare(b.yml))
}

// Only parse argv and run when invoked directly (e.g. via `npm run
// find-orphaned-tables`), not when imported by a test.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  program.parse(process.argv)
  main(program.opts())
}

async function main(opts: MainOptions) {
  const { json, verbose, exit, excludeTranslations } = opts

  const englishFiles: string[] = []
  englishFiles.push(...walkFiles(path.join(languages.en.dir, 'content'), ['.md']))
  englishFiles.push(...walkFiles(path.join(languages.en.dir, 'data'), ['.md', '.yml']))

  const sourceFiles: string[] = [...englishFiles]

  if (!excludeTranslations) {
    // Translations are often behind English. A table can still be referenced
    // in a translation even when no English content references it, so we must
    // search translations too. We only look at files that also exist in
    // English, because translations rarely delete renamed/removed files.
    const englishRelativeFiles = new Set(
      englishFiles.map((englishFile) => path.relative(languages.en.dir, englishFile)),
    )
    for (const [language, { dir }] of Object.entries(languages)) {
      if (language === 'en') continue
      if (!fs.existsSync(dir)) {
        throw new Error(
          `${dir} does not exist. Get around this by using the flag \`--exclude-translations\`.`,
        )
      }
      const languageFiles: string[] = []
      languageFiles.push(...walkFiles(path.join(dir, 'content'), ['.md']))
      languageFiles.push(...walkFiles(path.join(dir, 'data'), ['.md', '.yml']))
      sourceFiles.push(
        ...languageFiles.filter((languageFile) =>
          englishRelativeFiles.has(path.relative(dir, languageFile)),
        ),
      )
    }
  }

  // Tables can also be referenced from code (e.g. table-rendering helpers), so
  // search src and contributing as well. Searching more files only ever marks
  // a table as used, never as an orphan, so it errs on the safe side.
  for (const root of ['contributing', 'src']) {
    if (!fs.existsSync(root)) continue
    sourceFiles.push(
      ...walk(root, {
        includeBasePath: true,
        directories: false,
        globs: ['!**/*.+(png|jpe?g|csv|graphql|json|svg)'],
      }),
    )
  }

  if (verbose) {
    console.error(`${sourceFiles.length.toLocaleString()} source files found in total.`)
  }

  const tables = getTableFiles()
  if (verbose) {
    console.error(`${tables.length.toLocaleString()} table files found in total.`)
  }

  // Read files lazily so we can stop early once every table is accounted for.
  function* readContents(): Generator<string> {
    for (const sourceFile of sourceFiles) {
      yield fs.readFileSync(sourceFile, 'utf-8')
    }
  }

  const orphanTables = getOrphanedTables(tables, readContents())

  // Safety net: if every table looks orphaned, the detection is almost
  // certainly broken (e.g. content wasn't checked out). Refuse to suggest
  // deleting everything.
  if (tables.length > 0 && orphanTables.length === tables.length) {
    console.error(
      'Every table was flagged as orphaned, which is almost certainly a bug. ' +
        'Refusing to output anything. Was the content checked out?',
    )
    process.exit(1)
  }

  if (verbose && orphanTables.length) {
    console.error('The following tables are not mentioned anywhere in any source file:')
  }

  if (json) {
    console.log(JSON.stringify(orphanTables, undefined, 2))
  } else {
    const filesToRemove: string[] = []
    for (const table of orphanTables) {
      filesToRemove.push(table.yml)
      if (table.schema) filesToRemove.push(table.schema)
    }
    for (const filePath of filesToRemove) {
      console.log(filePath)
    }
  }

  if (verbose) {
    console.error(`${orphanTables.length.toLocaleString()} orphan tables left.`)
  }

  if (exit) {
    process.exit(orphanTables.length)
  }
}
