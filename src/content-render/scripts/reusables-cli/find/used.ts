import fs from 'fs'
import path from 'path'
import { getLiquidTokens } from '@/content-linter/lib/helpers/liquid-utils.js'
import {
  FilesWithLineNumbers,
  getAllContentFilePaths,
  getIndicesOfLiquidVariable,
  getRelativeReusablesPath,
  getReusableLiquidString,
  printFindsWithLineNumbers,
  resolveReusablePath,
} from '../shared'

export function findUsed(reusablePath: string, { absolute }: { absolute: boolean }) {
  const reusableFilePath = resolveReusablePath(reusablePath)
  const reusableLiquidVar = getReusableLiquidString(reusableFilePath)

  const printReusablePath = absolute ? reusableFilePath : getRelativeReusablesPath(reusableFilePath)

  console.log(`Searching for content files that use ${printReusablePath}...`)

  const allFilePaths = getAllContentFilePaths()

  const filesWithReusables: FilesWithLineNumbers = []

  for (const filePath of allFilePaths) {
    // Skip the reusable file itself
    if (filePath === reusableFilePath) continue

    const fileContents = fs.readFileSync(filePath, 'utf-8')

    const indices = getIndicesOfLiquidVariable(reusableLiquidVar, fileContents)
    if (indices.length > 0) {
      // Find line numbers of each index in fileContents
      const lineNumbers = indices.map((index) => fileContents.slice(0, index).split('\n').length)

      filesWithReusables.push({
        filePath,
        lineNumbers,
      })
    }
  }

  console.log(`\nFound ${filesWithReusables.length} files that use ${printReusablePath}.`)
  printFindsWithLineNumbers(absolute, filesWithReusables)
}

export function findTopUsed(numberOfMostUsedToFind: number, { absolute }: { absolute: boolean }) {
  const allFilePaths = getAllContentFilePaths()

  const reusableCounts = new Map<string, number>()
  for (const filePath of allFilePaths) {
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    const liquidTokens = getLiquidTokens(fileContents)
    for (const token of liquidTokens) {
      const { args, name } = token
      if (name === 'data' && args.startsWith('reusables.')) {
        reusableCounts.set(args, (reusableCounts.get(args) || 0) + 1)
      }
    }
  }

  const sortedCounts = Array.from(reusableCounts.entries()).sort((a, b) => b[1] - a[1])

  console.log(`\nTop ${numberOfMostUsedToFind} most used reusables:`)
  let i = 0
  for (const [reusable, count] of sortedCounts.slice(0, numberOfMostUsedToFind)) {
    let printReusablePath = path.join('data', ...reusable.split('.')) + '.md'
    if (absolute) {
      printReusablePath = path.resolve(printReusablePath)
    }
    console.log(`#${`${++i}.`.padEnd(3)} ${count} uses of ${printReusablePath}`)
  }
}
