import fs from 'fs'
import { difference } from 'lodash-es'
import walkFiles from 'walk-sync'
import yaml from 'js-yaml'

import { isInAllGhes, isFeatureDeprecated } from '../version-utils'
import type { MarkdownFrontmatter } from '#src/types.ts'

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

// Removes empty data/reusables files and removes the deleted
// reusable from any content or data/reusables files that reference it.
function updateReusableData() {
  const deletedDataFiles = []

  // Remove empty reusables
  for (const file of dataReusables) {
    const oldContents = fs.readFileSync(file, 'utf8').trim()
    if (oldContents === '') {
      console.log('Removing reusable file: ', file)
      fs.unlinkSync(file)
      deletedDataFiles.push(file)
    }
  }
  // Map the format:
  // data/reusables/actions/actions-runner-controller-unsupported-customization.md
  // to the format:
  // {% data reusables.code-scanning.beta-org-enable-all %}
  const reusableNames = deletedDataFiles.map(
    (file) => `{% data ${file.replace('.md', '').split('/').slice(1).join('.')} %}`,
  )
  const existingDataReusables = difference(dataReusables, deletedDataFiles)

  // Remove deleted reusables from content and data resuables files
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

// Removes deprecated data/feature files and outputs a list
// of data/features available in all versions - this list
// is currently only used used for reviewing purposes when
// deprecating a GHES release
function updateFeatureData() {
  const allFeatureFiles = new Set()

  for (const file of dataFeatures) {
    const dataFeatureContent = fs.readFileSync(file, 'utf8')
    const data = yaml.load(dataFeatureContent) as MarkdownFrontmatter
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
  allFeatureFiles.forEach((file) => console.log(file))
}
