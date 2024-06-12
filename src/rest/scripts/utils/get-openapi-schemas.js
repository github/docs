import { readFile, readdir } from 'fs/promises'
import yaml from 'js-yaml'
import path from 'path'

import { allVersions } from '#src/versions/lib/all-versions.js'

const OPEN_API_RELEASES_DIR = '../github/app/api/description/config/releases'
const configData = JSON.parse(await readFile('src/rest/lib/config.json', 'utf8'))
// Gets the full list of unpublished + active, deprecated + active,
// or active schemas from the github/github repo
// `openApiReleaseDir` is the path to the `app/api/description/config/releases`
// directory in `github/github`
// You can also specify getting specific versions of schemas.
export async function getSchemas(directory = OPEN_API_RELEASES_DIR) {
  const openAPIConfigs = await readdir(directory)
  const unpublished = []
  const deprecated = []
  const currentReleases = []

  // The file content in the `github/github` repo is YAML before it is
  // bundled into JSON.
  for (const file of openAPIConfigs) {
    const fileBaseName = path.basename(file, '.yaml')
    const newFileName = `${fileBaseName}.deref.json`
    const content = await readFile(path.join(directory, file), 'utf8')
    const yamlContent = yaml.load(content)

    const releaseMatch = Object.keys(configData.versionMapping).find((name) =>
      fileBaseName.startsWith(name),
    )
    if (!releaseMatch) {
      throw new Error(
        `🛑 The file ${fileBaseName} does not match any known docs version name. (not one of ${Object.keys(
          configData.versionMapping,
        )})`,
      )
    }
    const docsName =
      configData.versionMapping[fileBaseName] ||
      fileBaseName.replace(releaseMatch, configData.versionMapping[releaseMatch])
    const isDeprecatedInDocs = !Object.keys(allVersions).find(
      (version) => allVersions[version].openApiVersionName === docsName,
    )
    if (!yamlContent.published) {
      unpublished.push(newFileName)
    }
    // If it's deprecated, it must have been published at some point in the past
    // This checks if the schema is deprecated in github/github and
    // github/docs-internal. Sometimes deprecating in github/github lags
    // behind deprecating in github/docs-internal a few days
    if (
      (yamlContent.deprecated && yamlContent.published) ||
      (isDeprecatedInDocs && yamlContent.published)
    ) {
      deprecated.push(newFileName)
    }
    if (!yamlContent.deprecated && !isDeprecatedInDocs && yamlContent.published) {
      currentReleases.push(newFileName)
    }
  }

  return { currentReleases, unpublished, deprecated }
}

export async function validateVersionsOptions(versions) {
  const schemas = await getSchemas()
  // Validate individual versions provided
  versions.forEach((version) => {
    if (
      schemas.deprecated.includes(`${version}.deref.json`) ||
      schemas.unpublished.includes(`${version}.deref.json`)
    ) {
      const errorMsg = `🛑 This script doesn't support generating individual deprecated or unpublished schemas. Please reach out to #docs-engineering if this is a use case that you need.`
      throw new Error(errorMsg)
    } else if (!schemas.currentReleases.includes(`${version}.deref.json`)) {
      throw new Error(`🛑 The version (${version}) you specified is not valid.`)
    }
  })
}
