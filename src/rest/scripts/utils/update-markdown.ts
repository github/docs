import path from 'path'
import walk from 'walk-sync'
import { readFile } from 'fs/promises'

import {
  updateContentDirectory,
  convertVersionsToFrontmatter,
} from '../../../automated-pipelines/lib/update-markdown'
import { getDocsVersion } from '@/versions/lib/all-versions'
import { REST_DATA_DIR } from '../../lib/index'
import { deprecated } from '@/versions/lib/enterprise-server-releases'

type RestVersions = {
  [category: string]: {
    [subcategory: string]: {
      versions: string[]
    }
  }
}

type MarkdownUpdate = {
  data: {
    title: string
    shortTitle: string
    intro: string
    versions: { [key: string]: string }
    [key: string]: unknown
  }
  content: string
}

type MarkdownUpdates = {
  [filepath: string]: MarkdownUpdate
}

const { frontmatterDefaults, targetDirectory, indexOrder } = JSON.parse(
  await readFile('src/rest/lib/config.json', 'utf-8'),
)

export async function updateRestFiles() {
  const restVersions = await getDataFrontmatter(REST_DATA_DIR)
  const restMarkdownContent = await getMarkdownContent(restVersions)
  await updateContentDirectory({
    targetDirectory,
    sourceContent: restMarkdownContent,
    frontmatter: frontmatterDefaults,
    indexOrder,
  })
}

// GitHub Enterprise Server paths include ghes-<version>; other paths return null.
export function getGHESVersionFromFilepath(filePath: string): string | null {
  // Normalize Windows separators before splitting paths.
  const normalizedPath = filePath.replace(/\\/g, '/')
  const pathParts = normalizedPath.split('/')
  const ghesDir = pathParts.find((part) => part.startsWith('ghes-'))

  if (!ghesDir) {
    return null
  }

  const versionMatch = ghesDir.match(/^ghes-(\d+\.\d+)/)
  return versionMatch ? versionMatch[1] : null
}

// Read every version directory because REST data files split versions across
// per-category JSON files.
async function getDataFrontmatter(dataDirectory: string): Promise<RestVersions> {
  const fileList = walk(dataDirectory, { includeBasePath: true })
    .filter((file) => file.endsWith('.json'))
    // Keep non-category JSON files out of category data; add future sidecar files to this filter.
    .filter((file) => !file.endsWith('client-side-rest-api-redirects.json'))
    // Legacy monolithic schema files use category keys; without this filter, schema becomes a fake category.
    .filter((file) => !file.endsWith('schema.json'))
    // Ignore deprecated GitHub Enterprise Server versions so data stays on disk after support ends.
    .filter((file) => {
      const ghesVersion = getGHESVersionFromFilepath(file)

      if (!ghesVersion) {
        return true
      }

      return !deprecated.includes(ghesVersion)
    })

  const restVersions: RestVersions = {}

  for (const file of fileList) {
    const data = JSON.parse(await readFile(file, 'utf-8'))
    const docsVersionName = getDocsVersion(path.basename(path.dirname(file)))
    const category = path.basename(file, '.json')
    const subcategories = Object.keys(data)
    for (const subcategory of subcategories) {
      if (!restVersions[category]) restVersions[category] = {}
      if (!restVersions[category][subcategory]) {
        restVersions[category][subcategory] = { versions: [docsVersionName] }
      } else if (!restVersions[category][subcategory].versions.includes(docsVersionName)) {
        restVersions[category][subcategory].versions.push(docsVersionName)
      }
    }
  }
  return restVersions
}

// For existing files, updateContentDirectory keeps everything but versions.
// TODOCS defaults apply only to new files, so the content linter blocks
// merging until a docs reviewer fills them in.
async function getMarkdownContent(versions: RestVersions): Promise<MarkdownUpdates> {
  const markdownUpdates: MarkdownUpdates = {}

  for (const [category, subcategoryObject] of Object.entries(versions)) {
    const subcategories = Object.keys(subcategoryObject)
    for (const subcategory of subcategories) {
      const filepath = path.join('content/rest', category, `${subcategory}.md`)
      markdownUpdates[filepath] = {
        data: {
          title: 'TODOCS',
          shortTitle: 'TODOCS',
          intro: 'TODOCS',
          versions: await convertVersionsToFrontmatter(versions[category][subcategory].versions),
          ...frontmatterDefaults,
        },
        content: '',
      }
    }
  }

  return markdownUpdates
}
