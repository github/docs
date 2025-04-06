import fs from 'fs'
import path from 'path'
import { getLiquidTokens } from '@/content-linter/lib/helpers/liquid-utils.js'
import {
  getAllContentFilePaths,
  getAllReusablesFilePaths,
  getRelativeReusablesPath,
  resolveReusablePath,
} from '../shared'

export function findUnused({ absolute }: { absolute: boolean }) {
  const reusableFilePaths = getAllReusablesFilePaths()
  const allFilePaths = getAllContentFilePaths()

  const usedReusables = new Set<string>()
  const totalFiles = allFilePaths.length
  let lastLoggedPercent = 0

  console.log(`Searching ${totalFiles} files and ${reusableFilePaths.length} reusables...`)

  for (let i = 0; i < totalFiles; i++) {
    const filePath = allFilePaths[i]
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    const liquidTokens = getLiquidTokens(fileContents)
    for (const token of liquidTokens) {
      const { args, name } = token
      if (name === 'data' && args.startsWith('reusables.')) {
        const reusableName = path.join('data', ...args.split('.')) + '.md'
        // Special cases where we don't want them to count as reusables. It's an example in a how-to doc
        if (reusableName.includes('foo/bar.md') || reusableName.includes('your-reusable-name.md')) {
          continue
        }
        const reusablePath = resolveReusablePath(reusableName)
        usedReusables.add(reusablePath)
      }
    }

    const percentDone = Math.floor(((i + 1) / totalFiles) * 100)
    if (percentDone >= lastLoggedPercent + 5) {
      console.log(`Progress: ${percentDone}% done`)
      lastLoggedPercent = percentDone
    }
  }

  const unusedReusables = reusableFilePaths.filter((filePath) => !usedReusables.has(filePath))

  console.log(`\nFound ${unusedReusables.length} unused reusables:`)
  for (const reusableFilePath of unusedReusables) {
    const printReusablePath = absolute
      ? reusableFilePath
      : getRelativeReusablesPath(reusableFilePath)
    console.log(printReusablePath)
  }
}
