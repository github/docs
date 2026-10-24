import fs from 'fs'
import path from 'path'
import { load } from 'js-yaml'
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

// Updates versions frontmatter during GHES deprecation.
// Deletes GHES-only files with no supported release from their parent index.md.
export function updateContentFiles() {
  for (const file of contentFiles) {
    const oldContents = fs.readFileSync(file, 'utf8')
    const { content, data } = frontmatter(oldContents)
    if (!data) continue
    let featureData = undefined

    if (data.versions.feature) {
      const featureFilePath = `data/features/${data.versions.feature}.yml`
      const featureContent = fs.readFileSync(featureFilePath, 'utf8')
      featureData = load(featureContent) as featureDataType
      if (!featureData || !featureData.versions)
        throw new Error(`Could not load feature versions from ${featureFilePath}`)
    }

    if (!data.versions.ghes && !featureData?.versions?.ghes) continue
    if (data.versions.ghes === '*') continue

    const deprecatedRelease = deprecated[0]
    const oldestRelease = supported[supported.length - 1]

    // Feature-backed content becomes all versions when it applies to FPT, GHEC, and every GHES.
    const featureAppliesToAllVersions =
      featureData &&
      featureData.versions.ghec &&
      featureData.versions.fpt &&
      featureData.versions.ghes &&
      isInAllGhes(featureData.versions.ghes)

    if (isInAllGhes(data.versions.ghes)) {
      console.log('Updating GHES version in: ', file)
      data.versions.ghes = '*'
      // lineWidth -1 preserves existing newlines, so only frontmatter changes are written.
      fs.writeFileSync(
        file,
        frontmatter.stringify(content!, data, { lineWidth: -1 } as unknown as Parameters<
          typeof frontmatter.stringify
        >[2]),
      )
      continue
    }
    if (featureAppliesToAllVersions) {
      console.log('Updating frontmatter to all versions in: ', file)
      data.versions = {
        fpt: '*',
        ghec: '*',
        ghes: '*',
      }
      // lineWidth -1 preserves existing newlines, so only frontmatter changes are written.
      fs.writeFileSync(
        file,
        frontmatter.stringify(content!, data, { lineWidth: -1 } as unknown as Parameters<
          typeof frontmatter.stringify
        >[2]),
      )
      continue
    }

    const deprecatedRegex = new RegExp(`(<|<=)\\s?${deprecatedRelease}`, 'g')
    const oldestRegex = new RegExp(`<\\s?${oldestRelease}`, 'g')
    // Remove GHES frontmatter or delete GHES-only files when no supported GHES applies.
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
        delete data.versions.ghes
        console.log('Removing GHES version from: ', file)
        fs.writeFileSync(
          file,
          frontmatter.stringify(content!, data, { lineWidth: -1 } as unknown as Parameters<
            typeof frontmatter.stringify
          >[2]),
        )
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
  // Children paths are relative to the index.md file's directory.
  const childPath = filePath.endsWith('index.md')
    ? `/${path.basename(path.dirname(filePath))}`
    : `/${path.basename(filePath, '.md')}`

  data.children = data.children.filter((child) => child !== childPath)

  // Empty parent indexes must disappear with their last child.
  if (data.children.length === 0) {
    removeFileUpdateParent(parentFilePath)
  } else {
    console.log('..Updating children in: ', parentFilePath)
    fs.writeFileSync(
      parentFilePath,
      frontmatter.stringify(content || '', data, { lineWidth: -1 } as unknown as Parameters<
        typeof frontmatter.stringify
      >[2]),
    )
  }
}

// Articles use the index.md in their directory; index.md files use the parent directory's index.md.
// content/index.md has no parent.
function getParentFilePath(filePath: string) {
  if (!filePath || filePath === 'content/index.md') return null
  if (filePath.endsWith('index.md')) {
    const pathParts = filePath.split('/')
    pathParts.pop()
    pathParts.pop()
    pathParts.push('index.md')
    return pathParts.join('/')
  }
  return filePath.replace(path.basename(filePath), 'index.md')
}
