// @purpose Writer tool
// @description Update content filenames to match short titles

import fs from 'fs'
import path from 'path'
import { program } from 'commander'
import GithubSlugger from 'github-slugger'
import { decode } from 'html-entities'
import { execFileSync } from 'child_process'
import walkFiles from '@/workflows/walk-files'
import frontmatter from '@/frame/lib/read-frontmatter'
import { renderContent } from '@/content-render/index'
import fpt from '@/versions/lib/non-enterprise-default-version'
import { allVersions } from '@/versions/lib/all-versions'
import type { PageFrontmatter, Context } from '@/types'

interface ScriptOptions {
  force?: boolean
  excludeDirs?: boolean
  paths?: string[]
  dryRun?: boolean
  verbose: boolean
}

const context: Context = {
  currentLanguage: 'en',
  currentVersionObj: allVersions[fpt],
}

program
  .description(
    'Update filepaths to match short titles, unless frontmatter override is present. Processes both files and directories by default.',
  )
  .option('-f, --force', 'Update paths even if frontmatter override is present')
  .option('-e, --exclude-dirs', 'Exclude directories')
  .option(
    '-p, --paths [paths...]',
    `One or more specific paths to process (e.g., copilot or content/copilot/how-tos/file.md)`,
  )
  .option('-d, --dry-run', 'Preview changes without actually making them')
  .option('-v, --verbose', 'Verbose')
  .parse(process.argv)

const options: ScriptOptions = program.opts()

const isDirectoryCheck = (file: string): boolean => file.endsWith('index.md')

// The script takes about 2 seconds per file, so divide by 30 instead of 60 to get the minutes.
const estimateScriptMinutes = (numberOfFiles: number): string => {
  const estNum = Math.round(numberOfFiles / 30)
  return estNum === 0 ? '<1' : estNum.toString()
}

// main processes files sequentially because move-content must move files before directories,
// and deepest directories before parents.
// Async does not shorten this work because each path move depends on the ordered result.
async function main(): Promise<void> {
  const slugger = new GithubSlugger()
  const contentDir: string = path.join(process.cwd(), 'content')
  const filesToProcess: string[] = sortFiles(filterFiles(contentDir, options))

  if (filesToProcess.length === 0) {
    console.log('No files to process')
    return
  }

  if (!options.dryRun) {
    const estimate = estimateScriptMinutes(filesToProcess.length)
    console.log(`Processing ${filesToProcess.length} files`)
    console.log(`Estimated time: ${estimate} min\n`)
  }

  for (const file of filesToProcess) {
    try {
      slugger.reset()

      const result = await processFile(file, slugger, options)
      if (!result) continue

      moveFile(result, options)
    } catch (error) {
      console.error(`Failed to process ${file}:`, error)
    }
  }
}

async function processFile(
  file: string,
  slugger: GithubSlugger,
  scriptOptions: ScriptOptions,
): Promise<string[] | null> {
  const { data } = frontmatter(fs.readFileSync(file, 'utf8')) as unknown as {
    data: PageFrontmatter
  }

  const isDirectory = isDirectoryCheck(file)

  const processPage: boolean = determineProcessStatus(data, isDirectory, scriptOptions)
  if (!processPage) return null

  let stringToSlugify: string = data.shortTitle || data.title

  if (stringToSlugify.includes('{%')) {
    stringToSlugify = await renderContent(stringToSlugify, context, { textOnly: true })
  }

  // Slug shortTitle, or title when shortTitle is absent, to get the target basename.
  const slug: string = slugger.slug(decode(stringToSlugify))

  let basename: string
  if (isDirectory) {
    basename = path.basename(path.dirname(file))
  } else {
    basename = path.basename(file, '.md')
  }

  if (slug === basename) return null

  const newPath = isDirectory
    ? path.join(path.dirname(path.dirname(file)), slug, 'index.md')
    : path.join(path.dirname(file), `${slug}.md`)

  const getContentPath = (filePath: string): string => {
    const relativePath = path.relative(process.cwd(), filePath)
    return isDirectory ? path.dirname(relativePath) : relativePath
  }

  const contentPath = getContentPath(file)
  const newContentPath = getContentPath(newPath)

  return [contentPath, newContentPath]
}

function moveFile(result: string[], scriptOptions: ScriptOptions): void {
  const [contentPath, newContentPath] = result

  if (scriptOptions.dryRun) {
    console.log('Move:\n', contentPath, '\nto:\n', newContentPath, '\n')
    return
  }

  // move-content handles file moves, redirects, and children updates.
  const stdout = execFileSync(
    'tsx',
    [
      'src/content-render/scripts/move-content.ts',
      '--no-git',
      '--verbose',
      contentPath,
      newContentPath,
    ],
    { encoding: 'utf8' },
  )

  // Print only Moving or Renamed lines unless verbose; full move-content output is noisy.
  const moveMsg = stdout.split('\n').find((l) => l.startsWith('Moving') || l.startsWith('Renamed'))
  if (moveMsg && !options.verbose) {
    console.log(moveMsg, '\n')
  } else {
    console.log(stdout, '\n')
  }
}

function sortFiles(filesArray: string[]): string[] {
  // Move files before directories, then deepest directories before parents.
  return filesArray.toSorted((a, b) => {
    if (!isDirectoryCheck(a) && isDirectoryCheck(b)) {
      return -1
    }
    if (isDirectoryCheck(a) && !isDirectoryCheck(b)) {
      return 1
    }
    if (!isDirectoryCheck(a) && !isDirectoryCheck(b)) {
      return 0
    }
    if (isDirectoryCheck(a) && isDirectoryCheck(b)) {
      const aDepth = a.split(path.sep).length
      const bDepth = b.split(path.sep).length
      return bDepth - aDepth
    }

    return 0
  })
}

function filterFiles(contentDir: string, scriptOptions: ScriptOptions) {
  return walkFiles(contentDir, ['.md']).filter((file: string) => {
    // Keep README paths unchanged.
    if (file.endsWith('README.md')) return false
    // Keep early access paths unchanged.
    if (file.includes('early-access')) return false
    // Keep the homepage path unchanged.
    if (path.relative(contentDir, file) === 'index.md') return false
    // Keep product landing paths unchanged.
    if (path.relative(contentDir, file).split(path.sep)[1] === 'index.md') return false

    if (!scriptOptions.paths) return true

    return scriptOptions.paths.some((p: string) => {
      // Accept full content paths like content/foo/bar.md or top-level dirs like copilot.
      if (!p.startsWith('content')) {
        p = path.join('content', p)
      }
      if (!fs.existsSync(p)) {
        console.error(`${p} not found`)
        process.exit(1)
      }
      if (path.relative(process.cwd(), file).startsWith(p)) return true
      return false
    })
  })
}

function determineProcessStatus(
  data: PageFrontmatter,
  isDirectory: boolean,
  scriptOptions: ScriptOptions,
): boolean {
  // exclude-dirs prevents directory moves even when force is set.
  if (isDirectory && scriptOptions.excludeDirs) {
    return false
  }
  if (scriptOptions.force) {
    return true
  }
  if (data.allowTitleToDifferFromFilename) {
    return false
  }
  return true
}

main()
