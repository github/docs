import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { Command } from 'commander'
import walkFiles from '@/workflows/walk-files'
import readFrontmatter from '@/frame/lib/read-frontmatter'
import { getKustoClient } from '@/metrics/lib/kusto-client'
import { getDates, type DateRange } from '@/metrics/lib/dates'
import { getViews } from '@/metrics/queries/views'
import { getUsers } from '@/metrics/queries/users'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOTDIR = process.cwd()

interface CliOptions {
  range?: string
  verbose?: boolean
}

const program = new Command()

program
  .name('docsaudit')
  .description('Get data about a top-level docs product and output a CSV')
  .argument('<auditDir>', 'Name of the content directory you want to audit, e.g., actions')
  .option('-r, --range <days>', 'Number of days to look back', '30')
  .option('--verbose', 'Display Kusto queries being executed')
  .parse(process.argv)

const options = program.opts<CliOptions>()
const [auditDirName] = program.args
const contentDir = path.join(ROOTDIR, 'content')
const auditDir = path.join(contentDir, auditDirName)
const outputFile = path.join(__dirname, `${auditDirName}-audit.csv`)

if (!fs.existsSync(auditDir)) {
  console.error(`${auditDirName} not found`)
  process.exit(1)
}

// Get dates object in format { endDate, startDate, friendlyRange }
const dates: DateRange = getDates(options.range)

const files = walkFiles(auditDir, ['.md'])
console.log(`Auditing the ${files.length} "${auditDirName}" files. This may take a while.\n`)

main()

async function main(): Promise<void> {
  const client = getKustoClient()

  if (!client) {
    console.error('Failed to initialize Kusto client')
    process.exit(1)
  }

  let csvString = `title,path,versions,${options.range}d views,${options.range}d users\n`
  console.log(`Assembling data for these CSV columns: ${csvString}`)

  // Get the title, path, and versions from the filesystem
  // Get the views and users from the Kusto API
  const results: string[] = []
  for (const file of files) {
    const contents = await fs.promises.readFile(file)
    const contentPath = path.relative(ROOTDIR, file)
    const { data } = readFrontmatter(contents.toString())
    const versionString = JSON.stringify(data?.versions || {}).replaceAll('"', "'")
    const pathToQuery = getPathToQuery(file)
    // Pass null to get all versions (the default if no version is provided)
    const version = null
    // Only pass true for verbose on the first iteration
    const isFirst = results.length === 0
    const views = await getViews(pathToQuery, client, dates, version, options.verbose && isFirst)
    const users = await getUsers(pathToQuery, client, dates, version, options.verbose && isFirst)
    const csvEntry = `"${data?.title || 'Unknown'}","${contentPath}","${versionString}","${views}","${users}"`
    console.log(csvEntry)
    results.push(csvEntry)
  }
  csvString += `${results.join('\n')}\n`

  fs.writeFileSync(outputFile, csvString.trim(), 'utf8')
  console.log(`Done! Wrote ${outputFile}`)
}

function getPathToQuery(file: string): string {
  return path.relative(contentDir, file).replace('/index.md', '').replace('.md', '')
}
