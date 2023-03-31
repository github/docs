import path from 'path'
import walk from 'walk-sync'
import { readFile } from 'fs/promises'

import {
  updateContentDirectory,
  convertVersionsToFrontmatter,
  MARKDOWN_COMMENT,
} from '../../../automated-pipelines/lib/update-markdown.js'
import { getDocsVersion } from '../../../../lib/all-versions.js'
import { REST_DATA_DIR, REST_SCHEMA_FILENAME } from '../../lib/index.js'

const { frontmatterDefaults, targetDirectory } = JSON.parse(
  await readFile('src/rest/lib/config.json', 'utf-8')
)

export async function updateRestFiles() {
  const restVersions = await getDataFrontmatter(REST_DATA_DIR, REST_SCHEMA_FILENAME)
  const restMarkdownContent = await getMarkdownContent(restVersions)
  await updateContentDirectory({
    targetDirectory,
    sourceContent: restMarkdownContent,
    frontmatter: frontmatterDefaults,
  })
}

// Reads data files from the directory provided and returns a
// JSON object that lists the versions for each category/subcategory
// The data files are split up by version, so all files must be
// read to get a complete list of versions.
async function getDataFrontmatter(dataDirectory, schemaFilename) {
  const fileList = walk(dataDirectory, { includeBasePath: true }).filter(
    (file) => path.basename(file) === schemaFilename
  )

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
          "github-ae@latest",
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

  for (const category of Object.keys(versions)) {
    const subcategories = Object.keys(versions[category])
    // When there is only a single subcategory and the name
    // matches the category, this is an override due to a
    // subcategory not being defined. In this case,
    // the markdown file will be in the content/rest directory.
    // The file path will be content/rest/<category>.md
    if (subcategories.length === 1 && category === subcategories[0]) {
      // this will be a file in the root of the rest directory
      const filepath = path.join('content/rest', `${category}.md`)
      markdownUpdates[filepath] = {
        data: {
          title: category,
          shortTitle: category,
          intro: '',
          versions: await convertVersionsToFrontmatter(
            versions[category][subcategories[0]].versions
          ),
          ...frontmatterDefaults,
        },
        content: MARKDOWN_COMMENT,
      }
      continue
    }

    // The file path will be content/rest/<category>/<subcategory>.md
    for (const subcategory of subcategories) {
      const filepath = path.join('content/rest', category, `${subcategory}.md`)
      markdownUpdates[filepath] = {
        data: {
          title: subcategory,
          shortTitle: subcategory,
          intro: '',
          versions: await convertVersionsToFrontmatter(versions[category][subcategory].versions),
          ...frontmatterDefaults,
        },
        content: MARKDOWN_COMMENT,
      }
    }
  }

  return markdownUpdates
}
