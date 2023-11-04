#!/usr/bin/env node

// [start-readme]
//
// This script adds and removes placeholder data files in the
// automation pipelines data directories and
// data/release-notes/enterprise-server directories. This script
// uses the supported and deprecated versions to determine what
// directories should exist. This script also modifies the `api-versions`
// key if it exists in a pipeline's lib/config.json file.
//
// [end-readme]

import { existsSync } from 'fs'
import { readFile, readdir, writeFile, cp } from 'fs/promises'
import { rimrafSync } from 'rimraf'
import { difference, intersection } from 'lodash-es'
import { mkdirp } from 'mkdirp'

import { deprecated, supported } from '#src/versions/lib/enterprise-server-releases.js'

const [currentReleaseNumber, previousReleaseNumber] = supported
const pipelines = JSON.parse(await readFile('src/automated-pipelines/lib/config.json'))[
  'automation-pipelines'
]
await updateAutomatedConfigFiles(pipelines, deprecated)

// The allVersions object uses the 'api-versions' data stored in the
// src/rest/lib/config.json file. We want to update 'api-versions'
// before the allVersions object is created so we need to import it
// after calling updateAutomatedConfigFiles.
const { allVersions } = await import('#src/versions/lib/all-versions.js')

// Gets all of the base names (e.g., ghes-) in the allVersions object
// Currently, this is only ghes- but if we had more than one type of
// numbered release it would get all of them.
const numberedReleaseBaseNames = Array.from(
  new Set([
    ...Object.values(allVersions)
      .filter((version) => version.hasNumberedReleases)
      .map((version) => version.openApiBaseName),
  ]),
)

// A list of currently supported versions (calendar date inclusive)
// in the format using the short name rather than full format
// (e.g., enterprise-server@). The list is filtered
// to only include versions that have numbered releases (e.g. ghes-).
// The list is generated from the `apiVersions` key in allVersions.
// This is currently only needed for the rest and github-apps pipelines.
const versionNamesCalDate = Object.values(allVersions)
  .filter((version) => version.hasNumberedReleases)
  .map((version) =>
    version.apiVersions.length
      ? version.apiVersions.map((apiVersion) => `${version.openApiVersionName}-${apiVersion}`)
      : version.openApiVersionName,
  )
  .flat()
// A list of currently supported versions in the format using the short name
// rather than the full format (e.g., enterprise-server@). The list is filtered
// to only include versions that have numbered releases (e.g. ghes-).
// Currently, this is used for the graphql and webhooks pipelines.
const versionNames = Object.values(allVersions)
  .filter((version) => version.hasNumberedReleases)
  .map((version) => version.openApiVersionName)

for (const pipeline of pipelines) {
  if (!existsSync(`src/${pipeline}/data`)) continue
  const isCalendarDateVersioned = JSON.parse(await readFile(`src/${pipeline}/lib/config.json`))[
    'api-versions'
  ]

  const directoryListing = await readdir(`src/${pipeline}/data`)
  // filter the directory list to only include directories that start with
  // basenames with numbered releases (e.g., ghes-).
  const existingDataDir = directoryListing.filter((directory) =>
    numberedReleaseBaseNames.some((basename) => directory.startsWith(basename)),
  )
  const expectedDirectory = isCalendarDateVersioned ? versionNamesCalDate : versionNames

  // Get a list of data directories to remove (deprecate) and remove them
  // This should only happen if a release is being deprecated.
  const removeFiles = difference(existingDataDir, expectedDirectory)
  for (const directory of removeFiles) {
    console.log(`Removing src/${pipeline}/data/${directory}`)
    rimrafSync(`src/${pipeline}/data/${directory}`)
  }

  // Get a list of data directories to create (release) and create them
  // This should only happen if a relase is being added.
  const addFiles = difference(expectedDirectory, existingDataDir)
  if (addFiles.length > numberedReleaseBaseNames.length) {
    throw new Error(
      'Only one new release per numbered release version should be added at a time. Check that the lib/enterprise-server-releases.js is correct.',
    )
  }

  // Temp workaround to only add files during a release. This will be removed
  // when we migrate these files to the src/graphql/data directory.
  if (addFiles.length && !removeFiles.length) {
    await cp(
      `data/graphql/ghes-${previousReleaseNumber}`,
      `data/graphql/ghes-${currentReleaseNumber}`,
      {
        recursive: true,
      },
    )
  }

  for (const base of numberedReleaseBaseNames) {
    const dirToAdd = addFiles.find((item) => item.startsWith(base))
    if (!dirToAdd) continue
    // The suppported array is ordered from most recent (index 0) to oldest
    // Index 1 will be the release prior to the most recent release
    const lastRelease = supported[1]
    const previousDirName = existingDataDir.filter((directory) => directory.includes(lastRelease))

    console.log(
      `Copying src/${pipeline}/data/${previousDirName} to src/${pipeline}/data/${dirToAdd}`,
    )
    await cp(`src/${pipeline}/data/${previousDirName}`, `src/${pipeline}/data/${dirToAdd}`, {
      recursive: true,
    })
  }
}

// Add and remove the GHES release note data. Once we create an automation
// pipeline for release notes, we can remove this because it will use the
// same directory structure as the other pipeline data directories.
const ghesReleaseNotesDirs = await readdir('data/release-notes/enterprise-server')
const supportedHyphenated = supported.map((version) => version.replace('.', '-'))
const deprecatedHyphenated = deprecated.map((version) => version.replace('.', '-'))
const addRelNoteDirs = difference(supportedHyphenated, ghesReleaseNotesDirs)
const removeRelNoteDirs = intersection(deprecatedHyphenated, ghesReleaseNotesDirs)
for (const directory of removeRelNoteDirs) {
  console.log(`Removing data/release-notes/enterprise-server/${directory}`)
  rimrafSync(`data/release-notes/enterprise-server/${directory}`)
}
for (const directory of addRelNoteDirs) {
  console.log(`Create new directory data/release-notes/enterprise-server/${directory}`)
  await mkdirp(`data/release-notes/enterprise-server/${directory}`)
  await cp(
    `data/release-notes/PLACEHOLDER-TEMPLATE.yml`,
    `data/release-notes/enterprise-server/${directory}/PLACEHOLDER.yml`,
  )
}

// If the config file for a pipeline includes `api-versions` update that list
// based on the supported and deprecated releases.
async function updateAutomatedConfigFiles(pipelines, deprecated) {
  for (const pipeline of pipelines) {
    const configFilepath = `src/${pipeline}/lib/config.json`
    const configData = JSON.parse(await readFile(configFilepath))
    const apiVersions = configData['api-versions']
    if (!apiVersions) continue
    for (const key of Object.keys(apiVersions)) {
      // Copy the previous release's calendar date versions to the new release
      if (key.endsWith(previousReleaseNumber)) {
        const newKey = key.replace(previousReleaseNumber, currentReleaseNumber)
        apiVersions[newKey] = apiVersions[key]
      }
      // Remove any deprecated versions
      for (const deprecatedRelease of deprecated) {
        if (key.endsWith(deprecatedRelease)) {
          delete apiVersions[key]
        }
      }
    }
    const newConfigData = Object.assign({}, configData)
    newConfigData['api-versions'] = apiVersions
    await writeFile(configFilepath, JSON.stringify(newConfigData, null, 2))
  }
}
