// Prints unreferenced YAML-powered table files under ./data/tables/ and paired schema files.
// Both {% data tables.copilot.matrix-meta %} and
// {% for level in tables.copilot.matrix-meta.supportLevels %} mark the table used.

import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'
import { program } from 'commander'
import walk from 'walk-sync'

import walkFiles from '@/workflows/walk-files'
import languages from '@/languages/lib/languages-server'

const TABLES_DIR = 'data/tables'
const SCHEMAS_DIR = 'src/data-directory/lib/data-schemas/tables'

// EXCEPTIONS protects tables loaded dynamically by code rather than mentioned in content.
const EXCEPTIONS = new Set<string>([])

export type TableFile = {
  // Repo-relative YAML path, such as data/tables/copilot/model-multipliers.yml.
  yml: string
  // Repo-relative path to the paired schema, if it exists on disk.
  schema?: string
  // Dotted Liquid key, such as copilot.model-multipliers.
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

// Exported for tests so orphan detection can run without filesystem reads.
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

// Guard main so tests can import getOrphanedTables; npm run find-orphaned-tables invokes it.
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
    // Search matching translations because translated content can still reference a table.
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

  // Search code because table-rendering helpers can reference tables without Liquid.
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

  // If every table looks orphaned, detection is probably broken; refuse to list deletions.
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
