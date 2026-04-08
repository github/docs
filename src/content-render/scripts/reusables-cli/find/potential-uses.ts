import fs from 'fs'
import {
  FilesWithLineNumbers,
  FilesWithSimilarity,
  findIndicesOfSubstringInString,
  findSimilarSubStringInString,
  getAllContentFilePaths,
  getAllReusablesFilePaths,
  getRelativeReusablesPath,
  printFindsWithLineNumbers,
} from '../shared'
import { reusablesToIgnore } from '../ignore-reusables'

export function findPotentialUses({
  similar,
  threshold,
  absolute,
}: {
  similar?: boolean
  threshold: number
  absolute: boolean
}) {
  const reusableFiles = getAllReusablesFilePaths()
  const allFilePaths = getAllContentFilePaths()

  const filesThatCouldUseReusable: FilesWithLineNumbers = []
  const filesThatCouldUseReusableSimilar: FilesWithSimilarity = []

  // Read all content & data files into memory
  const allFileContents = allFilePaths.map((filePath) => {
    return {
      filePath,
      fileContents: fs.readFileSync(filePath, 'utf-8'),
    }
  })

  console.log(`Searching ${allFileContents.length} files for potential reusable use...`)
  if (similar) {
    console.log('Using similarity search, this may take a while...')
  }

  let reusableCount = 0
  let reusableContents
  for (const reusableFilePath of reusableFiles) {
    reusableContents = fs.readFileSync(reusableFilePath, 'utf-8')

    const reusableRelativeFilePath = getRelativeReusablesPath(reusableFilePath)
    if (!reusableContents.trim()) {
      if (!absolute) {
        console.log(`Skipping empty reusable file: ${reusableRelativeFilePath}`)
      } else {
        console.log(`Skipping empty reusable file: ${reusableFilePath}`)
      }
      continue
    }

    if (reusablesToIgnore.includes(reusableRelativeFilePath)) {
      continue
    }

    if (reusableCount % 100 === 0) {
      console.log(`${reusableCount}/${reusableFiles.length} reusables checked...`)
    }
    reusableCount += 1

    for (const { filePath, fileContents } of allFileContents) {
      // Skip the reusable file itself
      if (filePath === reusableFilePath) continue

      const indices = findIndicesOfSubstringInString(reusableContents.trim(), fileContents)
      if (indices.length > 0) {
        // Find line numbers of each index in fileContents
        const lineNumbers = indices.map((index) => fileContents.slice(0, index).split('\n').length)

        filesThatCouldUseReusable.push({
          filePath,
          lineNumbers,
          reusableFile: reusableFilePath,
        })
      }

      if (similar) {
        const similarityScore = findSimilarSubStringInString(reusableContents.trim(), fileContents)
        if (similarityScore > threshold) {
          filesThatCouldUseReusableSimilar.push({
            filePath,
            similarityScore,
            reusableFile: reusableFilePath,
          })
        }
      }
    }
  }

  console.log(`${reusableCount}/${reusableFiles.length} reusables checked...`)

  console.log(`\nFound ${filesThatCouldUseReusable.length} files that could use reusables.`)
  printFindsWithLineNumbers(absolute, filesThatCouldUseReusable)
}
