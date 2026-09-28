import fs from 'fs'
import { difference } from 'lodash-es'
import walkFiles from 'walk-sync'
import { load } from 'js-yaml'

import { isInAllGhes, isFeatureDeprecated } from '../version-utils'
import type { MarkdownFrontmatter } from '@/types'

const contentFiles = walkFiles('content', {
  includeBasePath: true,
  directories: false,
  globs: ['**/*.md'],
  ignore: ['**/README.md'],
})

const dataReusables = walkFiles('data/reusables', {
  includeBasePath: true,
  directories: false,
  globs: ['**/*.md'],
  ignore: ['**/README.md'],
})

const dataFeatures = walkFiles('data/features', {
  includeBasePath: true,
  directories: false,
  globs: ['**/*.yml'],
})

export function updateDataFiles() {
  updateReusableData()
  updateFeatureData()
}

// Remove empty reusable files and their Liquid references so content does not use deleted data.
function updateReusableData() {
  const deletedDataFiles = []

  for (const file of dataReusables) {
    const oldContents = fs.readFileSync(file, 'utf8').trim()
    if (oldContents === '') {
      console.log('Removing reusable file: ', file)
      fs.unlinkSync(file)
      deletedDataFiles.push(file)
    }
  }
  // Example: data/reusables/actions/runner.md becomes {% data reusables.actions.runner %}.
  const reusableNames = deletedDataFiles.map(
    (file) => `{% data ${file.replace('.md', '').split('/').slice(1).join('.')} %}`,
  )
  const existingDataReusables = difference(dataReusables, deletedDataFiles)

  for (const file of [...existingDataReusables, ...contentFiles]) {
    const originalContent = fs.readFileSync(file, 'utf8')
    let content = originalContent

    for (const reusableName of reusableNames) {
      if (content.includes(reusableName)) {
        content = content.replaceAll(reusableName, '')
      }
    }
    if (originalContent !== content) {
      console.log('Removing empty reusable from file: ', file)
      fs.writeFileSync(file, content)
    }
  }
}

// Lists all-version data/features for human review during GHES deprecation.
function updateFeatureData() {
  const allFeatureFiles = new Set()

  for (const file of dataFeatures) {
    const dataFeatureContent = fs.readFileSync(file, 'utf8')
    const data = load(dataFeatureContent) as MarkdownFrontmatter
    if (!data) throw new Error(`Could not load feature versions from ${file}`)

    if (isFeatureDeprecated(data.versions)) {
      console.log('Removing feature file: ', file)
      fs.unlinkSync(file)
      continue
    }

    if (
      data.versions.ghec &&
      data.versions.fpt &&
      data.versions.ghes &&
      isInAllGhes(data.versions.ghes)
    ) {
      if (!allFeatureFiles.has(file)) {
        allFeatureFiles.add(file)
      }
    }
  }

  console.log('Feature files with all versions: ')
  for (const file of allFeatureFiles) {
    console.log(file)
  }
}
