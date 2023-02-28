#!/usr/bin/env node

import { existsSync } from 'fs'
import mkdirp from 'mkdirp'
import { readFile, writeFile } from 'fs/promises'
import path from 'path'
import { slug } from 'github-slugger'

import { getOverrideCategory } from '../../rest/scripts/utils/operation.js'
import { ENABLED_APPS_DIR, ENABLED_APPS_FILENAME } from '../lib/index.js'

// Creates the src/github-apps/data files used for
// https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps
export async function syncGitHubAppsData(sourceDirectory, sourceSchemas) {
  for (const schemaName of sourceSchemas) {
    const data = JSON.parse(await readFile(path.join(sourceDirectory, schemaName), 'utf8'))

    // Because the information used on the apps page doesn't require any
    // rendered content we can parse the dereferenced files directly
    const enabledForApps = {}
    for (const [requestPath, operationsAtPath] of Object.entries(data.paths)) {
      for (const [verb, operation] of Object.entries(operationsAtPath)) {
        // We only want to process operations that are
        // server-to-server GitHub App enabled
        if (!operation['x-github'].enabledForGitHubApps) continue

        const schemaCategory = operation['x-github'].category
        const schemaSubcategory = operation['x-github'].subcategory
        const { category, subcategory } = getOverrideCategory(
          operation.operationId,
          schemaCategory,
          schemaSubcategory
        )

        if (!enabledForApps[category]) {
          enabledForApps[category] = []
        }
        enabledForApps[category].push({
          slug: slug(operation.summary),
          subcategory,
          verb,
          requestPath,
        })
      }
    }

    if (Object.keys(enabledForApps).length === 0) {
      throw new Error(
        `Generating GitHub Apps data failed for ${sourceDirectory}/${schemaName}. The generated data file was empty.`
      )
    }

    // Sort the operations by category for readability
    const sortedOperations = Object.keys(enabledForApps)
      .sort()
      .reduce((acc, key) => {
        acc[key] = enabledForApps[key]
        return acc
      }, {})

    const versionName = path.basename(schemaName, '.json')
    const targetDirectory = path.join(ENABLED_APPS_DIR, versionName)

    // When a new version is added, we need to create the directory for it
    if (!existsSync(targetDirectory)) {
      await mkdirp(targetDirectory)
    }

    const targetPath = path.join(targetDirectory, ENABLED_APPS_FILENAME)
    await writeFile(targetPath, JSON.stringify(sortedOperations, null, 2))
    console.log(`✅ Wrote ${targetPath}`)
  }
}
