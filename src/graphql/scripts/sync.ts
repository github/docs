import fs from 'fs/promises'
import { appendFileSync } from 'fs'
import path from 'path'
import { load } from 'js-yaml'
import { execSync } from 'child_process'
import { getContents, hasMatchingRef } from '@/workflows/git-utils'
import { allVersions } from '@/versions/lib/all-versions'
import processPreviews from './utils/process-previews'
import processUpcomingChanges from './utils/process-upcoming-changes'
import processSchemas from './utils/process-schemas'
import { bucketSchemaByCategory, writeCategoryFiles } from './utils/bucket-by-category'
import { syncCategoryContentFiles, type CategoryPresence } from './utils/sync-category-content'
import { ALL_KIND_KEYS } from '@/graphql/lib/categories'
import {
  prependDatedEntry,
  createChangelogEntry,
  getIgnoredChangesSummary,
} from './build-changelog'

interface GitHubRepoOptions {
  owner: string
  repo: string
  ref?: string
  path?: string
}

interface IgnoredChange {
  version: string
  totalCount: number
  types: Array<{ type: string }>
}

interface RawPreview {
  title: string
  description?: string
  toggled_on: string[]
  toggled_by: string
  announcement?: unknown
  updates?: unknown
  owning_teams?: string[]
}

interface UpcomingChangeEntry {
  location: string
  date: string
  description: string
  [key: string]: unknown
}

interface UpcomingChangesDocument {
  upcoming_changes: UpcomingChangeEntry[]
}

type SchemaPreview = Omit<RawPreview, 'toggled_by'> & { toggled_by: string[] }

const graphqlStaticDir = 'src/graphql/data'
const dataFilenames = JSON.parse(
  await fs.readFile('src/graphql/scripts/utils/data-filenames.json', 'utf8'),
)

if (!process.env.GITHUB_TOKEN) {
  throw new Error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
}

const versionsToBuild = Object.keys(allVersions)

// Declare categoryPresence before the main() call so the loop never reads it in the temporal dead zone.
const categoryPresence: CategoryPresence = new Map()

main()

const allIgnoredChanges: IgnoredChange[] = []

async function main() {
  for (const version of versionsToBuild) {
    // Examples: free-pro-team@latest maps to dotcom; enterprise-server@2.22 maps to ghes-2.22.
    const graphqlVersion = allVersions[version].openApiVersionName

    const previewsPath = getDataFilepath('previews', graphqlVersion)
    const rawPreviews = load(
      await getRemoteRawContent(previewsPath, graphqlVersion),
    ) as RawPreview[]
    const safeForPublicPreviews: RawPreview[] = Array.isArray(rawPreviews) ? rawPreviews : []
    const previewsJson = processPreviews(safeForPublicPreviews)
    await updateStaticFile(
      previewsJson,
      path.join(graphqlStaticDir, graphqlVersion, 'previews.json'),
    )

    const upcomingChangesPath = getDataFilepath('upcomingChanges', graphqlVersion)
    const previousUpcomingChanges = load(
      await fs.readFile(upcomingChangesPath, 'utf8'),
    ) as UpcomingChangesDocument
    const safeForPublicChanges = await getRemoteRawContent(upcomingChangesPath, graphqlVersion)
    await updateFile(upcomingChangesPath, safeForPublicChanges)
    const upcomingChangesJson = await processUpcomingChanges(safeForPublicChanges)
    await updateStaticFile(
      upcomingChangesJson,
      path.join(graphqlStaticDir, graphqlVersion, 'upcoming-changes.json'),
    )

    const previewFilePath = getDataFilepath('schemas', graphqlVersion)
    const previousSchemaString = await fs.readFile(previewFilePath, 'utf8')
    const latestSchema = await getRemoteRawContent(previewFilePath, graphqlVersion)
    await updateFile(previewFilePath, latestSchema)
    const previewsForSchema: SchemaPreview[] = safeForPublicPreviews.map((preview) => ({
      ...preview,
      toggled_by: [preview.toggled_by].flat(),
    }))
    // GHES schemas before 3.22 lack @docsCategory, so fall back to the fpt category map.
    let fallbackCategoryMap: Record<string, Record<string, string>> | undefined
    const ghesMatch = /^ghes-(\d+)\.(\d+)$/.exec(graphqlVersion)
    if (ghesMatch) {
      const major = Number(ghesMatch[1])
      const minor = Number(ghesMatch[2])
      if (major < 3 || (major === 3 && minor < 22)) {
        try {
          fallbackCategoryMap = JSON.parse(
            await fs.readFile(path.join(graphqlStaticDir, 'fpt', 'category-map.json'), 'utf8'),
          )
          console.log(`Using fpt/category-map.json as @docsCategory fallback for ${graphqlVersion}`)
        } catch {
          // fpt runs first; if category-map.json is unavailable, GHES types fall back to other.
        }
      }
    }
    const schemaJsonPerVersion = await processSchemas(
      latestSchema,
      previewsForSchema,
      fallbackCategoryMap,
      { currentLanguage: 'en', currentVersion: version },
    )

    // processSchemas is slow; per-category files are the only on-disk format for scoped loads.
    const perCategoryFiles = bucketSchemaByCategory(schemaJsonPerVersion)
    await writeCategoryFiles(path.join(graphqlStaticDir, graphqlVersion), perCategoryFiles)

    // Store docs version keys so convertVersionsToFrontmatter can update pages after the loop.
    for (const [cat, bucket] of perCategoryFiles.entries()) {
      const hasTypes = ALL_KIND_KEYS.some((kind) => (bucket[kind]?.length ?? 0) > 0)
      if (!hasTypes) continue
      if (!categoryPresence.has(cat)) categoryPresence.set(cat, new Set())
      categoryPresence.get(cat)!.add(version)
    }

    if (allVersions[version].nonEnterpriseDefault) {
      // Build the changelog only for free-pro-team@latest.
      const changelogEntry = await createChangelogEntry(
        previousSchemaString,
        latestSchema,
        safeForPublicPreviews,
        previousUpcomingChanges.upcoming_changes,
        (load(safeForPublicChanges) as UpcomingChangesDocument).upcoming_changes,
      )
      if (changelogEntry) {
        prependDatedEntry(
          changelogEntry,
          path.join(graphqlStaticDir, graphqlVersion, 'changelog.json'),
        )
      }

      const ignoredSummary = getIgnoredChangesSummary()
      if (ignoredSummary) {
        allIgnoredChanges.push({
          version: graphqlVersion,
          ...ignoredSummary,
        })
      }
    }
  }

  // Sync category pages, index children, and disappearance redirects after all versions run.
  await syncCategoryContentFiles(categoryPresence)

  execSync('npx prettier -w "**/*.{yml,yaml}"')

  if (allIgnoredChanges.length > 0) {
    const totalIgnored = allIgnoredChanges.reduce((sum, item) => sum + item.totalCount, 0)
    const uniqueTypes = [
      ...new Set(allIgnoredChanges.flatMap((item) => item.types.map((t) => t.type))),
    ]

    console.log(
      '::notice title=GraphQL Ignored Changes::Found ignored change types that may need review',
    )

    if (process.env.GITHUB_OUTPUT) {
      appendFileSync(
        process.env.GITHUB_OUTPUT,
        `ignored-changes=${JSON.stringify(allIgnoredChanges)}\n`,
      )
      appendFileSync(process.env.GITHUB_OUTPUT, `ignored-count=${totalIgnored}\n`)
      appendFileSync(process.env.GITHUB_OUTPUT, `ignored-types=${uniqueTypes.join(', ')}\n`)
    }
  }
}

async function getRemoteRawContent(filepath: string, graphqlVersion: string) {
  const options: GitHubRepoOptions = {
    owner: 'github',
    repo: 'github',
  }

  let t0 = new Date().getTime()
  options.ref = await getBranchAsRef(options, graphqlVersion)
  let took = new Date().getTime() - t0
  console.log(`Got ref (${options.ref}) for '${graphqlVersion}'. Took ${formatTime(took)}`)

  options.path = `config/${path.basename(filepath)}`

  t0 = new Date().getTime()
  const contents = await getContents(options.owner, options.repo, options.ref, options.path)
  took = new Date().getTime() - t0
  console.log(`Got content for '${options.path}' (in ${options.ref}). Took ${formatTime(took)}`)

  return contents
}

function getDataFilepath(id: string, graphqlVersion: string) {
  const versionType = getVersionName(graphqlVersion)

  // Example: dataFilenames.schema.ghes maps to schema.docs-enterprise.graphql.
  const filename = dataFilenames[id][versionType]

  return path.join(graphqlStaticDir, graphqlVersion, filename)
}

async function getBranchAsRef(
  options: GitHubRepoOptions,
  graphqlVersion: string,
  branch: string | boolean = false,
): Promise<string> {
  const versionType = getVersionName(graphqlVersion) as 'fpt' | 'ghec' | 'ghes'
  const defaultBranch = 'master'

  const branches: Record<string, string> = {
    fpt: defaultBranch,
    ghec: defaultBranch,
    ghes: `enterprise-${graphqlVersion.replace('ghes-', '')}-release`,
  }

  if (!branch) branch = branches[versionType]

  const ref = `heads/${branch}`

  const exists = await hasMatchingRef(options.owner, options.repo, ref)

  if (!exists) {
    const fallbackBranch = defaultBranch
    return await getBranchAsRef(options, graphqlVersion, fallbackBranch)
  }
  return ref
}

// Examples: ghes-2.22 returns ghes; dotcom returns dotcom.
function getVersionName(graphqlVersion: string) {
  return graphqlVersion.split('-')[0]
}

async function updateFile(filepath: string, content: string) {
  console.log(`Updating file ${filepath}`)
  await fs.mkdir(path.dirname(filepath), { recursive: true })
  return fs.writeFile(filepath, content, 'utf8')
}

// Serialize unknown GraphQL shapes because schema processing returns nested arrays and objects.
async function updateStaticFile(json: unknown, filepath: string) {
  console.log(`Updating static file ${filepath}`)
  const jsonString = JSON.stringify(json, null, 2)
  return updateFile(filepath, jsonString)
}

function formatTime(ms: number) {
  if (ms < 1000) {
    return `${ms.toFixed(0)}ms`
  }
  const seconds = ms / 1000
  if (seconds > 60) {
    return `${Math.round(seconds / 60)}m${Math.round(seconds % 60)}s`
  }
  return `${seconds.toFixed(1)}s`
}
