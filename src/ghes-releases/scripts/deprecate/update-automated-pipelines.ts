// Adds and removes placeholder data for automation pipelines and GHES release notes
// from the supported and deprecated GHES versions.
// Updates api-versions in each pipeline lib/config.json when that key exists.

import { existsSync, rmSync } from 'fs'
import { mkdir, readFile, readdir, writeFile, cp } from 'fs/promises'
import { difference, intersection } from 'lodash-es'

import { deprecated, supported } from '@/versions/lib/enterprise-server-releases'

const [currentReleaseNumber, previousReleaseNumber] = supported
const pipelines = JSON.parse(await readFile('src/automated-pipelines/lib/config.json', 'utf-8'))[
  'automation-pipelines'
]

// Pipelines with api-versions copy previous calendar date variants to the current release.
// Deprecated variants are dropped.
export async function updateAutomatedConfigFiles() {
  for (const pipeline of pipelines) {
    const configFilepath = `src/${pipeline}/lib/config.json`
    const configData = JSON.parse(await readFile(configFilepath, 'utf-8'))
    const apiVersions = configData['api-versions']
    if (!apiVersions) continue
    for (const key of Object.keys(apiVersions)) {
      if (key.endsWith(previousReleaseNumber)) {
        const newKey = key.replace(previousReleaseNumber, currentReleaseNumber)
        apiVersions[newKey] = apiVersions[key]
      }
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
  await updateAutomatedPipelines()
}

export async function updateAutomatedPipelines() {
  // Import allVersions after config updates so src/rest/lib/config.json changes take effect.
  const { allVersions } = await import('@/versions/lib/all-versions')

  const numberedReleaseBaseNames = Array.from(
    new Set(
      Object.values(allVersions)
        .filter((version) => version.hasNumberedReleases)
        .map((version) => version.openApiBaseName),
    ),
  )

  // rest and github-apps read calendar-date versions from allVersions.apiVersions.
  const versionNamesCalDate = Object.values(allVersions)
    .filter((version) => version.hasNumberedReleases)
    .map((version) =>
      version.apiVersions.length
        ? version.apiVersions.map((apiVersion) => `${version.openApiVersionName}-${apiVersion}`)
        : version.openApiVersionName,
    )
    .flat()
  // graphql and webhooks read numbered versions in ghes-major.minor form.
  const versionNames = Object.values(allVersions)
    .filter((version) => version.hasNumberedReleases)
    .map((version) => version.openApiVersionName)

  for (const pipeline of pipelines) {
    // secret-scanning stores pattern docs outside the shared pipeline data layout.
    const directoryWithReleases =
      pipeline === 'secret-scanning'
        ? 'src/secret-scanning/data/pattern-docs'
        : `src/${pipeline}/data`
    if (!existsSync(directoryWithReleases)) continue

    const isCalendarDateVersioned = JSON.parse(
      await readFile(`src/${pipeline}/lib/config.json`, 'utf-8'),
    )['api-versions']

    const directoryListing = await readdir(directoryWithReleases)
    // Limit pipeline data dirs to numbered release basenames like ghes-.
    const existingDataDir = directoryListing.filter((directory) =>
      numberedReleaseBaseNames.some((basename) => directory.startsWith(basename)),
    )

    if (!existingDataDir.length) {
      throw new Error(`Cannot find ghes- release directories in ${directoryWithReleases}.`)
    }

    const expectedDirectory = isCalendarDateVersioned ? versionNamesCalDate : versionNames

    const removeFiles = difference(existingDataDir, expectedDirectory)
    for (const directory of removeFiles) {
      console.log(`Removing src/${pipeline}/data/${directory}`)
      rmSync(`src/${pipeline}/data/${directory}`, { recursive: true, force: true })
    }

    const addFiles = difference(expectedDirectory, existingDataDir)

    // Reject directories unrelated to the current release before creating them.
    for (const dir of addFiles) {
      if (!dir.includes(currentReleaseNumber)) {
        throw new Error(
          `Unexpected directory to add: ${dir}. Only directories for the current release ` +
            `(${currentReleaseNumber}) should be added. Check that the lib/enterprise-server-releases.ts is correct.`,
        )
      }
    }

    for (const base of numberedReleaseBaseNames) {
      // Calendar-date releases can add more than one directory for the same base name.
      const dirsToAdd = addFiles.filter((item) => item.startsWith(base))
      for (const dirToAdd of dirsToAdd) {
        // Keep calendar-date suffixes unchanged when mapping previous dirs to current dirs.
        const previousDirName = dirToAdd.replace(currentReleaseNumber, previousReleaseNumber)
        if (!existingDataDir.includes(previousDirName)) {
          throw new Error(
            `Cannot find previous release directory '${previousDirName}' to copy from ` +
              `when creating '${dirToAdd}' in src/${pipeline}/data/.`,
          )
        }

        console.log(
          `Copying src/${pipeline}/data/${previousDirName} to src/${pipeline}/data/${dirToAdd}`,
        )
        await cp(`src/${pipeline}/data/${previousDirName}`, `src/${pipeline}/data/${dirToAdd}`, {
          recursive: true,
        })
      }
    }
  }

  // GHES release notes stay in this path until an automation pipeline owns the same layout.
  const ghesReleaseNotesDirs = await readdir('data/release-notes/enterprise-server')
  const supportedHyphenated = supported.map((version) => version.replace('.', '-'))
  const deprecatedHyphenated = deprecated.map((version) => version.replace('.', '-'))
  const addRelNoteDirs = difference(supportedHyphenated, ghesReleaseNotesDirs)
  const removeRelNoteDirs = intersection(deprecatedHyphenated, ghesReleaseNotesDirs)
  for (const directory of removeRelNoteDirs) {
    console.log(`Removing data/release-notes/enterprise-server/${directory}`)
    rmSync(`data/release-notes/enterprise-server/${directory}`, { recursive: true, force: true })
  }
  for (const directory of addRelNoteDirs) {
    console.log(`Create new directory data/release-notes/enterprise-server/${directory}`)
    await mkdir(`data/release-notes/enterprise-server/${directory}`, { recursive: true })
    await cp(
      `data/release-notes/PLACEHOLDER-TEMPLATE.yml`,
      `data/release-notes/enterprise-server/${directory}/PLACEHOLDER.yml`,
    )
  }
}
