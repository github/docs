#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { Command } from 'commander'
import chalk from 'chalk'
import ora from 'ora'
import frontmatter from '@/frame/lib/read-frontmatter'
import { getKustoClient } from '@/metrics/lib/kusto-client'
import { getDates, type DateRange } from '@/metrics/lib/dates'
import { getViews } from '@/metrics/queries/views'
import { getUsers } from '@/metrics/queries/users'
import { getViewDuration } from '@/metrics/queries/view-duration'
import { getBounces } from '@/metrics/queries/bounces'
import { getScore } from '@/metrics/queries/survey-score'
import { getExitsToSupport } from '@/metrics/queries/exits-to-support'

const { green, white, red, blue } = chalk

const DOCS_ROOT = 'https://docs.github.com'
const DOCS_API_PATH = 'https://docs.github.com/api/pagelist/en'
const FREE_PRO_TEAM = 'free-pro-team@latest'
const ENTERPRISE_REGEX = /enterprise-(server|cloud)@/

interface CliOptions {
  range?: string
  compare?: boolean
  views?: boolean
  users?: boolean
  viewDuration?: boolean
  bounces?: boolean
  score?: boolean
  exits?: boolean
  json?: boolean
  skipValidation?: boolean
  redirects?: boolean
  fptOnly?: boolean
  verbose?: boolean
  defaultToAll?: boolean
  showDocset?: boolean
  allVersions?: boolean
}

interface QueryResults {
  views?: string
  viewsDocset?: string
  users?: string
  usersDocset?: string
  viewDuration?: string
  viewDurationDocset?: string
  bounces?: string
  bouncesDocset?: string
  score?: string
  scoreDocset?: string
  exits?: string
  exitsDocset?: string
}

interface JsonOutput {
  daysRange: string
  startDate: string
  endDate: string
  dateRange: string
  inputUrl: string
  data: {
    path: string
    views?: string
    users?: string
    viewDuration?: string
    bounces?: string
    score?: string
    exits?: string
  }
  docset?: {
    path: string
    data: {
      views?: string
      users?: string
      viewDuration?: string
      bounces?: string
      score?: string
      exits?: string
    }
  }
}

const program = new Command()

program
  .name('docstat')
  .description(
    `Get a data snapshot of a given Docs URL for the last 30 days or specified period. By default, it looks up:

- Views
- Users
- View duration per day average
- Bounces
- Helpfulness score
- Exits to support`,
  )
  .argument('<url>', 'URL to query data for')
  .option('-r, --range <days>', 'Number of days to look back', '30')
  .option('-c, --compare', 'Compare with top-level docset data')
  .option('-v, --views', 'Get page views')
  .option('-u, --users', 'Get unique users')
  .option('-d, --viewDuration', 'Get view duration per day average')
  .option('-b, --bounces', 'Get bounces')
  .option('-s, --score', 'Get helpfulness survey score')
  .option('-e, --exits', 'Get exits to support percentage')
  .option('-j, --json', 'Output results in JSON format')
  .option('-k, --skipValidation', 'Skip path validation against Docs API pagelist')
  .option('--redirects', 'Include all redirected URLs for the given URL in the queries')
  .option(
    '--fptOnly',
    'Get data for free-pro-team@latest only (default: all versions if URL is versionless)',
  )
  .option('--verbose', 'Display Kusto queries being executed')
  .parse(process.argv)

const options = program.opts<CliOptions>()

// If specific options are not provided, default to all
options.defaultToAll = !(
  options.views ||
  options.users ||
  options.viewDuration ||
  options.bounces ||
  options.score ||
  options.exits
)

// If defaulting to all, set all options to true
if (options.defaultToAll) {
  options.views = true
  options.users = true
  options.viewDuration = true
  options.bounces = true
  options.score = true
  options.exits = true
}

// Get the path to query
// Given input: https://docs.github.com/en/copilot/managing-copilot/
// Use: copilot/managing-copilot
const providedPath = program.args[0]
let cleanPath = getCleanPath(providedPath)

// Get the version
let version: string | null = getVersion(cleanPath)
let usingFptOnly = !!options.fptOnly

// If the URL does not specify a version, default to all versions unless --fptOnly is passed
if (version === FREE_PRO_TEAM) {
  if (usingFptOnly) {
    // User explicitly wants only free-pro-team@latest
    console.log(
      '\nFetching data for free-pro-team@latest only. To get all versions, omit the --fptOnly flag.\n',
    )
  } else {
    // Default: all versions
    version = null
    console.log(
      '\nFetching data for all versions (no version specified in URL). To get only free-pro-team@latest, pass "--fptOnly".\n',
    )
  }
} else {
  // Version is specified in the URL (e.g. enterprise-server@)
  console.log(
    `\nFetching data for version "${version}" as specified in the URL. To get data for all versions, remove the version segment from the URL.\n`,
  )
  if (usingFptOnly) {
    console.log(
      `You specified a version in the URL (${version}), but also passed --fptOnly. Only the version in the URL will be used.\n`,
    )
  }
  // Always use the version from the URL
}

// Get the version-specific Docs API path
const VERSIONED_DOCS_API_PATH = path.join(DOCS_API_PATH, version || FREE_PRO_TEAM)
// Remove the version from the path for queries
cleanPath = removeVersionSegment(cleanPath, version || FREE_PRO_TEAM)
// Validate the path against the Docs API pagelist
if (!options.skipValidation) await validatePath(cleanPath, version || FREE_PRO_TEAM)

if (options.allVersions) version = null

// Get the path for the overall docset
const docsetPath = cleanPath.split('/')[0]

// Get redirect_from frontmatter and include those paths in the queries
let redirects: string[] = []
if (options.redirects) {
  let contentPath = path.join('content', cleanPath)
  contentPath = fs.existsSync(contentPath)
    ? path.join(contentPath, 'index.md')
    : `${contentPath}.md`
  const { data } = frontmatter(fs.readFileSync(contentPath, 'utf8'))
  // If redirect_from paths exists, they'll be in this format: /foo/bar
  redirects = (data?.redirect_from || []).map((oldPath: string) => oldPath.replace('/', '')) // remove leading '/'
}

const queryPaths = [cleanPath].concat(redirects)

// Get dates object in format { endDate, startDate, friendlyRange }
const dates: DateRange = getDates(options.range)

async function main(): Promise<void> {
  const spinner = ora('Connecting to Kusto...').start()

  try {
    const client = getKustoClient()

    if (!client) {
      spinner.fail('Failed to connect to Kusto')
      process.exit(1)
    }

    spinner.text = 'Connected! Querying Kusto...'

    // Only show docset stats if option is passed AND if the given path is not already a docset.
    options.showDocset = !(cleanPath === docsetPath) && options.compare
    if (options.compare && cleanPath === docsetPath) {
      console.log(`\n\nSkipping comparison, since '${cleanPath}' is already a docset.\n`)
    }

    // Create query promises for all requested metrics
    const queryPromises: Promise<void>[] = []
    const results: QueryResults = {}

    // Setup all the promises for parallel execution
    if (options.views) {
      const queryType = 'views'
      queryPromises.push(
        getViews(queryPaths, client, dates, version, options.verbose, queryType).then((data) => {
          results.views = data
        }),
      )
      if (options.showDocset) {
        const queryType = 'docset views'
        queryPromises.push(
          getViews(docsetPath, client, dates, version, options.verbose, queryType).then((data) => {
            results.viewsDocset = data
          }),
        )
      }
    }

    if (options.users) {
      const queryType = 'users'
      queryPromises.push(
        getUsers(queryPaths, client, dates, version, options.verbose, queryType).then((data) => {
          results.users = data
        }),
      )
      if (options.showDocset) {
        const queryType = 'docset users'
        queryPromises.push(
          getUsers(docsetPath, client, dates, version, options.verbose, queryType).then((data) => {
            results.usersDocset = data
          }),
        )
      }
    }

    if (options.viewDuration) {
      const queryType = 'view duration'
      queryPromises.push(
        getViewDuration(queryPaths, client, dates, version, options.verbose, queryType).then(
          (data) => {
            results.viewDuration = data
          },
        ),
      )
      if (options.showDocset) {
        const queryType = 'docset view duration'
        queryPromises.push(
          getViewDuration(docsetPath, client, dates, version, options.verbose, queryType).then(
            (data) => {
              results.viewDurationDocset = data
            },
          ),
        )
      }
    }

    if (options.bounces) {
      const queryType = 'bounces'
      queryPromises.push(
        getBounces(queryPaths, client, dates, version, options.verbose, queryType).then((data) => {
          results.bounces = data
        }),
      )
      if (options.showDocset) {
        const queryType = 'docset bounces'
        queryPromises.push(
          getBounces(docsetPath, client, dates, version, options.verbose, queryType).then(
            (data) => {
              results.bouncesDocset = data
            },
          ),
        )
      }
    }

    if (options.score) {
      const queryType = 'score'
      queryPromises.push(
        getScore(queryPaths, client, dates, version, options.verbose, queryType).then((data) => {
          results.score = data
        }),
      )
      if (options.showDocset) {
        const queryType = 'docset score'
        queryPromises.push(
          getScore(docsetPath, client, dates, version, options.verbose, queryType).then((data) => {
            results.scoreDocset = data
          }),
        )
      }
    }

    if (options.exits) {
      const queryType = 'exits'
      queryPromises.push(
        getExitsToSupport(queryPaths, client, dates, version, options.verbose, queryType).then(
          (data) => {
            results.exits = data
          },
        ),
      )
      if (options.showDocset) {
        const queryType = 'docset exits'
        queryPromises.push(
          getExitsToSupport(docsetPath, client, dates, version, options.verbose, queryType).then(
            (data) => {
              results.exitsDocset = data
            },
          ),
        )
      }
    }

    // Execute all queries in parallel
    await Promise.all(queryPromises)

    spinner.succeed('Data retrieved successfully!\n')

    // Extract all results from the results object
    const {
      views,
      viewsDocset,
      users,
      usersDocset,
      viewDuration,
      viewDurationDocset,
      bounces,
      bouncesDocset,
      score,
      scoreDocset,
      exits,
      exitsDocset,
    } = results

    // Output JSON and exit
    if (options.json) {
      const jsonOutput: JsonOutput = {
        daysRange: options.range || '30',
        startDate: dates.startDate,
        endDate: dates.endDate,
        dateRange: dates.friendlyRange,
        inputUrl: program.args[0],
        data: {
          path: cleanPath,
        },
      }

      // Add requested data points
      if (options.views) {
        jsonOutput.data.views = views
      }
      if (options.users) {
        jsonOutput.data.users = users
      }
      if (options.viewDuration) {
        jsonOutput.data.viewDuration = viewDuration
      }
      if (options.bounces) {
        jsonOutput.data.bounces = bounces
      }
      if (options.score) {
        jsonOutput.data.score = score
      }
      if (options.exits) {
        jsonOutput.data.exits = exits
      }

      // Add docset comparison if requested
      if (options.showDocset) {
        jsonOutput.docset = {
          path: docsetPath,
          data: {},
        }

        if (options.views) {
          jsonOutput.docset.data.views = viewsDocset
        }
        if (options.users) {
          jsonOutput.docset.data.users = usersDocset
        }
        if (options.viewDuration) {
          jsonOutput.docset.data.viewDuration = viewDurationDocset
        }
        if (options.bounces) {
          jsonOutput.docset.data.bounces = bouncesDocset
        }
        if (options.score) {
          jsonOutput.docset.data.score = scoreDocset
        }
        if (options.exits) {
          jsonOutput.docset.data.exits = exitsDocset
        }
      }

      console.log(JSON.stringify(jsonOutput, null, 2))
      return // Exit early
    }

    console.log(white(`Last ${options.range || '30'} days:`), blue(dates.friendlyRange))
    console.log(green('-------------------------------------------'))
    console.log(green('Path:'), white(cleanPath))
    if (options.redirects) {
      console.log(
        green('Redirects included:'),
        white(redirects.length ? redirects.join(', ') : 'none found'),
      )
    }
    console.log(green('Version:'), white(version || 'all versions'))
    console.log('')

    if (options.views) {
      console.log(green('Views:'), white(views))
    }
    if (options.users) {
      console.log(green('Users:'), white(users))
    }
    if (options.viewDuration) {
      console.log(green('View duration per day average:'), white(viewDuration))
    }
    if (options.bounces) {
      console.log(green('Bounces:'), white(`${bounces}`))
    }
    if (options.score) {
      console.log(green('Score:'), white(`${score}`))
    }
    if (options.exits) {
      console.log(green(`Exits to support:`), white(`${exits}`))
    }

    if (options.showDocset) {
      console.log('')
      console.log(white('Comparing to...'))
      console.log(green('-------------------------------------------'))
      console.log(green('Docset:'), white(docsetPath))
      console.log(green('Version:'), white(version || 'all versions'))
      console.log('')

      if (options.views) {
        console.log(green('Views:'), white(viewsDocset))
      }
      if (options.users) {
        console.log(green('Users:'), white(usersDocset))
      }
      if (options.viewDuration) {
        console.log(green(`View duration per day average:`), white(`${viewDurationDocset}`))
      }
      if (options.bounces) {
        console.log(green(`Bounces:`), white(`${bouncesDocset}`))
      }
      if (options.score) {
        console.log(green(`Score:`), white(`${scoreDocset}`))
      }
      if (options.exits) {
        console.log(green(`Exits to support:`), white(`${exitsDocset}`))
      }
    }

    console.log(green('-------------------------------------------'))
  } catch (error) {
    spinner.fail('Error getting data')
    console.error(red('Error details:'))
    console.error(error)
  }
}

main().catch((error) => {
  console.error(red('Unexpected error:'))
  console.error(error)
  process.exit(1)
})

/* -------- UTILITY FUNCTIONS -------- */

// Given input: https://docs.github.com/en/copilot/managing-copilot/
// Use: copilot/managing-copilot
function getCleanPath(providedPath: string): string {
  let clean = providedPath
  const cleanArr = clean.split('?') // remove query params
  if (cleanArr.length > 1) cleanArr.pop()
  clean = cleanArr.join('/')
  const cleanArr2 = clean.split('#') // remove hash fragments
  if (cleanArr2.length > 1) cleanArr2.pop()
  clean = cleanArr2.join('/')
  if (clean === DOCS_ROOT || clean === `${DOCS_ROOT}/en`) {
    // Kusto uses 'index' for the homepage
    return 'index'
  }
  const pathParts = clean.replace(DOCS_ROOT, '').split('/').filter(Boolean)
  if (pathParts[0] === 'en') pathParts.shift() // remove English lang code
  clean = pathParts.join('/')

  return clean
}

function getVersion(cleanPath: string): string {
  const pathParts = cleanPath.split('/')
  const version = ENTERPRISE_REGEX.test(pathParts[0]) ? pathParts[0] : FREE_PRO_TEAM
  return version
}

function removeVersionSegment(cleanPath: string, version: string): string {
  if (version === FREE_PRO_TEAM) return cleanPath
  const pathParts = cleanPath.split('/')
  pathParts.shift()
  if (!pathParts.length) return 'index'
  return pathParts.join('/')
}

// Try to find the path in the list of valid pages at https://docs.github.com/api/pagelist/en
async function validatePath(cleanPath: string, version: string): Promise<void> {
  // Only Kusto uses 'index' for the homepage; the Docs API uses '/en'
  const basePath = cleanPath === 'index' ? '' : cleanPath

  const pathToCheck =
    version === FREE_PRO_TEAM
      ? path.join('/', 'en', basePath)
      : path.join('/', 'en', version, basePath)

  let data: string
  try {
    const response = await fetch(VERSIONED_DOCS_API_PATH)
    data = await response.text()
  } catch (err) {
    console.error(`Error fetching data from ${VERSIONED_DOCS_API_PATH}`)
    throw err
  }

  if (data.startsWith('{')) {
    const parsedData = JSON.parse(data)
    if (parsedData.error) {
      console.error(data)
      process.exit(1)
    }
  }

  const isValid = data.includes(pathToCheck)
  if (!isValid) {
    console.error(
      `Error! Provided URL is not in Docs API list of valid paths at ${VERSIONED_DOCS_API_PATH}`,
    )
    process.exit(1)
  }
}
