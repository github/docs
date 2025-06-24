import path from 'path'
import walk from 'walk-sync'
import { readFile } from 'fs/promises'

import {
  updateContentDirectory,
  convertVersionsToFrontmatter,
} from '../../../automated-pipelines/lib/update-markdown.js'
import { getDocsVersion } from '#src/versions/lib/all-versions.js'
import { REST_DATA_DIR, REST_SCHEMA_FILENAME } from '../../lib/index.js'
import { deprecated } from '#src/versions/lib/enterprise-server-releases.js'

const { frontmatterDefaults, targetDirectory, indexOrder } = JSON.parse(
  await readFile('src/rest/lib/config.json', 'utf-8'),
)

export async function updateRestFiles() {
  const restVersions = await getDataFrontmatter(REST_DATA_DIR, REST_SCHEMA_FILENAME)
  const restMarkdownContent = await getMarkdownContent(restVersions)
  await updateContentDirectory({
    targetDirectory,
    sourceContent: restMarkdownContent,
    frontmatter: frontmatterDefaults,
    indexOrder,
  })
}

// Reads data files from the directory provided and returns a
// JSON object that lists the versions for each category/subcategory
/**
 * Extract GHES version from a file path if it's a GHES directory
 * @param {string} filePath - File path to parse
 * @returns {string|null} - GHES version or null if not a GHES file
 */
export function getGHESVersionFromFilepath(filePath) {
  // Normalize path separators to handle both Unix and Windows paths
  const normalizedPath = filePath.replace(/\\/g, '/')
  const pathParts = normalizedPath.split('/')
  const ghesDir = pathParts.find((part) => part.startsWith('ghes-'))

  if (!ghesDir) {
    return null
  }

  // Extract version from ghes-X.Y or ghes-X.Y-YYYY-MM-DD format
  const versionMatch = ghesDir.match(/^ghes-(\d+\.\d+)/)
  return versionMatch ? versionMatch[1] : null
}

// The data files are split up by version, so all files must be
// read to get a complete list of versions.
async function getDataFrontmatter(dataDirectory, schemaFilename) {
  const fileList = walk(dataDirectory, { includeBasePath: true })
    .filter((file) => path.basename(file) === schemaFilename)
    // Ignore any deprecated versions. This allows us to stop supporting
    // the most recent deprecated version but still allow data to exist.
    // This makes the deprecation steps easier.
    .filter((file) => {
      const ghesVersion = getGHESVersionFromFilepath(file)

      // If it's not a GHES file, include it (e.g., ghae, fpt, ghec)
      if (!ghesVersion) {
        return true
      }

      // If it's a GHES file, exclude it only if the version is deprecated
      return !deprecated.includes(ghesVersion)
    })

  const restVersions = {}

  for (const file of fileList) {
    const data = JSON.parse(await readFile(file, 'utf-8'))
    const docsVersionName = getDocsVersion(path.basename(path.dirname(file)))
    Object.keys(data).forEach((category) => {
      // Used to automatically update Markdown files
      const subcategories = Object.keys(data[category])
      subcategories.forEach((subcategory) => {
        if (!restVersions[category]) {
          restVersions[category] = {}
        }
        if (!restVersions[category][subcategory]) {
          restVersions[category][subcategory] = {
            versions: [docsVersionName],
          }
        } else if (!restVersions[category][subcategory].versions.includes(docsVersionName)) {
          restVersions[category][subcategory].versions.push(docsVersionName)
        }
      })
    })
  }
  return restVersions
}

/*
  Take an object that includes the version frontmatter
  that should be applied to the Markdown page that corresponds
  to the category and subcategory. The format looks like this:
  {
    "actions": {
      "artifacts": {
        "versions": {
          "free-pro-team@latest",
          "enterprise-cloud@latest",
          "enterprise-server@3.4",
          "enterprise-server@3.5",
          "enterprise-server@3.6",
          "enterprise-server@3.7",
          "enterprise-server@3.8"
        }
      }
    }
  }
*/
async function getMarkdownContent(versions) {
  const markdownUpdates = {}

  for (const [category, subcategoryObject] of Object.entries(versions)) {
    const subcategories = Object.keys(subcategoryObject)
    // The file path will be content/rest/<category>/<subcategory>.md
    for (const subcategory of subcategories) {
      const filepath = path.join('content/rest', category, `${subcategory}.md`)
      // If the file already exists on disk, only the `versions` frontmatter
      // property is updated. So the TODOCS placeholder values are only used
      // when the file is newly created, which is the intention. When the TODOCS
      // placeholder is added, it will fail the content linter CI test alerting
      // the docs content reviewer to update the file before merging.
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
