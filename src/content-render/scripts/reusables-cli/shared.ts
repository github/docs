import walk from 'walk-sync'
import path from 'path'
import { TokenizationError } from 'liquidjs'
import { getLiquidTokens } from '@/content-linter/lib/helpers/liquid-utils'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const repoRoot = path.resolve(__dirname, '../../../../')
const contentDirectory = path.resolve(__dirname, repoRoot, 'content/')
const dataDirectory = path.resolve(__dirname, repoRoot, 'data/')

const reusablesDirectory = path.resolve(dataDirectory, 'reusables/')

export type FilesWithLineNumbers = {
  filePath: string
  lineNumbers: number[]
  reusableFile?: string
}[]
export type FilesWithSimilarity = {
  filePath: string
  similarityScore: number
  reusableFile?: string
}[]

export function filterFiles(files: string[]) {
  return files.filter(
    (filePath) =>
      filePath.endsWith('.md') || (filePath.endsWith('.yml') && !filePath.endsWith('README.md')),
  )
}

export function getAllContentFilePaths() {
  const allContentFiles = filterFiles(
    walk(contentDirectory, {
      includeBasePath: true,
      directories: false,
    }),
  )

  const allDataFiles = filterFiles(
    walk(dataDirectory, {
      includeBasePath: true,
      directories: false,
    }),
  )

  return [...allContentFiles, ...allDataFiles]
}

// Get the string that represents the reusable in the content files
export function getReusableLiquidString(reusablePath: string): string {
  const relativePath = path.relative(reusablesDirectory, reusablePath)
  return `reusables.${relativePath.slice(0, -3).split('/').join('.')}`
}

export function getIndicesOfLiquidVariable(liquidVariable: string, fileContents: string): number[] {
  const indices: number[] = []
  try {
    for (const token of getLiquidTokens(fileContents)) {
      if (token.name === 'data' && token.args.trim() === liquidVariable) {
        indices.push(token.begin)
      }
    }
  } catch (err) {
    if (err instanceof TokenizationError) return []
    throw err
  }

  return indices
}

// Find the path to a reusable file.
export function resolveReusablePath(reusablePath: string): string {
  // Try .md if extension is not provided
  if (!reusablePath.endsWith('.md') && !reusablePath.endsWith('.yml')) {
    reusablePath += '.md'
  }

  // Allow user to just pass the name of the file. If it's not ambiguous, we'll find it.
  const allReusableFiles = getAllReusablesFilePaths()
  const foundPaths = []
  for (const possiblePath of allReusableFiles) {
    if (possiblePath.includes(reusablePath)) {
      foundPaths.push(possiblePath)
    }
  }

  if (foundPaths.length === 0) {
    console.error(`Reusables file not found: ${reusablePath}`)
    process.exit(1)
  } else if (foundPaths.length === 1) {
    return foundPaths[0]
  } else {
    console.error(`Multiple reusables found by name: ${reusablePath}`)
    for (let i = 0; i < foundPaths.length; i++) {
      console.error(`  ${i + 1}: ${getRelativeReusablesPath(foundPaths[i])}`)
    }
    console.error('Please specify which reusable by passing the full path')
    process.exit(1)
  }
}

export function getAllReusablesFilePaths(): string[] {
  return filterFiles(
    walk(reusablesDirectory, {
      includeBasePath: true,
      directories: false,
    }),
  )
}

export function findIndicesOfSubstringInString(substr: string, str: string): number[] {
  str = str.toLowerCase()

  const result: number[] = []

  let idx = str.indexOf(substr)

  while (idx !== -1) {
    result.push(idx)
    idx = str.indexOf(substr, idx + 1)
  }
  return result
}

export function findSimilarSubStringInString(substr: string, str: string) {
  // Take every sentence in the substr, lower case it, and compare it to every sentence in the str to get a similarity score
  const substrSentences = substr.split('.').map((sentence) => sentence.toLowerCase())
  const corpus = str.split('.').map((sentence) => sentence.toLowerCase())

  let similarityScore = 0

  // Find how similar every two strings are based on the words they share
  for (const substrSentence of substrSentences) {
    for (const sentence of corpus) {
      const substrTokens = substrSentence.split(' ')
      const tokens = sentence.split(' ')

      const sharedWords = substrTokens.filter((token) => tokens.includes(token))

      similarityScore += sharedWords.length / (substrTokens.length + tokens.length)
    }
  }

  // Normalize the similarity score
  return Math.round((similarityScore / substrSentences.length) * corpus.length)
}

export function printFindsWithLineNumbers(
  absolute: boolean,
  reusableFindings: { filePath: string; lineNumbers: number[]; reusableFile?: string }[],
  similarityFindings?: { filePath: string; similarityScore: number; reusableFile?: string }[],
) {
  for (const { filePath, lineNumbers, reusableFile } of reusableFindings) {
    let printReusablePath = reusableFile
    let printFilePath = filePath
    if (!absolute) {
      printReusablePath = getRelativeReusablesPath(printReusablePath as string)
      printFilePath = path.relative(repoRoot, printFilePath)
    }
    if (reusableFile) {
      console.log(`\nReusable ${printReusablePath} can be used`)
      console.log(`In ${printFilePath} on:`)
    } else {
      console.log(`\nIn ${printFilePath} on:`)
    }
    for (const lineNumber of lineNumbers) {
      console.log(`  Line ${lineNumber}`)
    }
  }

  if (similarityFindings?.length) {
    console.log('\nFindings using "similar" algorithm:')
    for (const { filePath, similarityScore, reusableFile } of similarityFindings) {
      let printReusablePath = reusableFile
      let printFilePath = filePath
      if (!absolute) {
        printReusablePath = getRelativeReusablesPath(printReusablePath as string)
        printFilePath = path.relative(repoRoot, printFilePath)
      }
      if (reusableFile) {
        console.log(`\nReusables ${printReusablePath} can be used`)
        console.log(`In ${printFilePath} with similarity score: ${similarityScore}`)
      } else {
        console.log(`\nIn ${printFilePath} with similarity score: ${similarityScore}`)
      }
    }
  }
}

export function getRelativeReusablesPath(reusablePath: string) {
  if (!reusablePath) {
    return ''
  }
  return path.relative(repoRoot, reusablePath)
}
