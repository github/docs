import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import walkFiles from 'walk-sync'

import frontmatter from '@/frame/lib/read-frontmatter'
import { supported, deprecated } from '@/versions/lib/enterprise-server-releases'
import { isInAllGhes } from '../version-utils'
import { Versions } from '@/types'

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
        removeFileUpdateParent(file)
      } else {
        // Remove the ghes property from versions Fm and return
        delete data.versions.ghes
        console.log('Removing GHES version from: ', file)
        fs.writeFileSync(file, frontmatter.stringify(content, data, { lineWidth: -1 } as any))
      }
    }
  }
}

function removeFileUpdateParent(filePath: string) {
  console.log('Removing file: ', filePath)
  fs.unlinkSync(filePath)
  const filePathDirectory = path.dirname(filePath)
  if (fs.readdirSync(filePathDirectory).length === 0) {
    fs.rmdirSync(filePathDirectory)
  }
  const parentFilePath = getParentFilePath(filePath)
  if (!parentFilePath) return
  const indexFileContent = fs.readFileSync(parentFilePath, 'utf8')
  const { content, data } = frontmatter(indexFileContent) as {
    content: string | undefined
    data: { children: string[] } | undefined
  }
  if (!data) return
  // Children paths are relative to the index.md file's directory
  const childPath = filePath.endsWith('index.md')
    ? '/' + path.basename(path.dirname(filePath))
    : '/' + path.basename(filePath, '.md')

  // Remove the childPath from the parent index.md file's children frontmatter
  data.children = data.children.filter((child) => child !== childPath)

  // If removing the childPath leaves the parent index.md file empty, remove it
  if (data.children.length === 0) {
    removeFileUpdateParent(parentFilePath)
  } else {
    console.log('..Updating children in: ', parentFilePath)
    fs.writeFileSync(
      parentFilePath,
      frontmatter.stringify(content || '', data, { lineWidth: -1 } as any),
    )
  }
}

// Gets the next parent file path.
// If the filePath is an article (e.g., doesn't end with index.md),
// then the parent file is the index.md file in the same directory.
// If the filePath is a category or subcategory (e.g., ends with index.md),
// the parent is the index.md file in the next directory up.
function getParentFilePath(filePath: string) {
  // This is the root index.md file, it has no parent
  if (!filePath || filePath === 'content/index.md') return null
  // Handle index.md files with index.md parent in directory above
  if (filePath.endsWith('index.md')) {
    const pathParts = filePath.split('/')
    pathParts.pop()
    pathParts.pop()
    pathParts.push('index.md')
    return pathParts.join('/')
  }
  // Handle articles with a parent index.md file
  return filePath.replace(path.basename(filePath), 'index.md')
}
