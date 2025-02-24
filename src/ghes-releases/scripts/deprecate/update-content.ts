import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import walkFiles from 'walk-sync'

import frontmatter from '#src/frame/lib/read-frontmatter.js'
import { supported, deprecated } from '#src/versions/lib/enterprise-server-releases.js'
import { isInAllGhes } from '../version-utils'
import { Versions } from '#src/types.js'

type featureDataType = Versions | undefined

const contentFiles = walkFiles('content', {
  includeBasePath: true,
  directories: false,
  globs: ['**/*.md'],
  ignore: ['**/README.md', '**/index.md'],
})

// This module updates the versions frontmatter in content files.
// When a content file contains only deprecated GHES releases, the
// file is deleted and removed from the parent index.md file.
export function updateContentFiles() {
  for (const file of contentFiles) {
    const oldContents = fs.readFileSync(file, 'utf8')
    const { content, data } = frontmatter(oldContents)
    if (!data) continue
    let featureData = undefined

    if (data.versions.feature) {
      const featureFilePath = 'data/features/' + data.versions.feature + '.yml'
      const featureContent = fs.readFileSync(featureFilePath, 'utf8')
      featureData = yaml.load(featureContent) as featureDataType
      if (!featureData || !featureData.versions)
        throw new Error(`Could not load feature versions from ${featureFilePath}`)
    }

    // skip files with no Enterprise Server versions frontmatter
    if (!data.versions.ghes && !featureData?.versions?.ghes) continue
    // skip files with all ghes releases defined
    if (data.versions.ghes === '*') continue

    const deprecatedRelease = deprecated[0]
    const oldestRelease = supported[supported.length - 1]

    // If the frontmatter versions.ghes property is now
    // applicable to all GHES releases, update the value to '*'.
    const featureAppliesToAllVersions =
      featureData &&
      featureData.versions.ghec &&
      featureData.versions.fpt &&
      featureData.versions.ghes &&
      isInAllGhes(featureData.versions.ghes)

    if (isInAllGhes(data.versions.ghes)) {
      console.log('Updating GHES version in: ', file)
      data.versions.ghes = '*'
      // To preserve newlines when stringifying,
      // you can set the lineWidth option to -1
      // This prevents updates to the file that aren't actual changes.
      fs.writeFileSync(file, frontmatter.stringify(content, data, { lineWidth: -1 } as any))
      continue
    }
    if (featureAppliesToAllVersions) {
      console.log('Updating frontmatter to all versions in: ', file)
      data.versions = {
        fpt: '*',
        ghec: '*',
        ghes: '*',
      }
      // To preserve newlines when stringifying,
      // you can set the lineWidth option to -1
      // This prevents updates to the file that aren't actual changes.
      fs.writeFileSync(file, frontmatter.stringify(content, data, { lineWidth: -1 } as any))
      continue
    }

    const deprecatedRegex = new RegExp(`(<|<=)\\s?${deprecatedRelease}`, 'g')
    const oldestRegex = new RegExp(`<\\s?${oldestRelease}`, 'g')
    // If the frontmatter versions.ghes property is now
    // deprecated, remove it. If the content file is only
    // versioned for GHES, remove the file and update index.md.
    const featureGhes = featureData?.versions?.ghes || ''
    const appliesToNoSupportedGhesReleases =
      deprecatedRegex.test(data.versions.ghes) ||
      deprecatedRegex.test(featureGhes) ||
      oldestRegex.test(data.versions.ghes) ||
      oldestRegex.test(featureGhes)

    if (appliesToNoSupportedGhesReleases) {
      if (Object.keys(data.versions).length === 1) {
        console.log('Removing file: ', file)
        fs.unlinkSync(file)
        const indexFile = file.replace(path.basename(file), 'index.md')
        const indexFileContent = fs.readFileSync(indexFile, 'utf8')
        const { content, data } = frontmatter(indexFileContent) as {
          content: string | undefined
          data: { children: string[] } | undefined
        }
        if (!data) continue
        data.children = data.children.filter((child) => child !== '/' + path.basename(file, '.md'))
        console.log('..Updating children in: ', indexFile)
        fs.writeFileSync(
          indexFile,
          frontmatter.stringify(content || '', data, { lineWidth: -1 } as any),
        )
        continue
      }
      // Remove the ghes property from versions Fm and return
      delete data.versions.ghes
      console.log('Removing GHES version from: ', file)
      fs.writeFileSync(file, frontmatter.stringify(content, data, { lineWidth: -1 } as any))
    }
  }
}
