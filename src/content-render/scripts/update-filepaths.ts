// [start-readme]
//
// Run this script to update filepaths to match short titles (or titles as a fallback).
// Use
// npm run-script -- update-filepaths --help
//
// [end-readme]

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

async function main(): Promise<void> {
  const slugger = new GithubSlugger()
  const contentDir: string = path.join(process.cwd(), 'content')
  // Filter to get all the content files we want to read in.
  // Then sort them from longest > shortest so we can do the file moves in order.
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

  // Process files sequentially to maintain the correct order of operations.
  // Files must be moved before directories, and directories must be moved
  // from deepest to shallowest to avoid path conflicts during the move operations.
  // The result is rather slow, but an asynchronous approach that ensures
  // sequential processing would not be faster.
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
  options: ScriptOptions,
): Promise<string[] | null> {
  const { data } = frontmatter(fs.readFileSync(file, 'utf8')) as unknown as {
    data: PageFrontmatter
  }

  const isDirectory = isDirectoryCheck(file)

  // Assess the frontmatter and other conditions to determine if we want to process the path.
  const processPage: boolean = determineProcessStatus(data, isDirectory, options)
  if (!processPage) return null

  let stringToSlugify: string = data.shortTitle || data.title

  // Check if we need to process Liquid
  if (stringToSlugify.includes('{%')) {
    stringToSlugify = await renderContent(stringToSlugify, context, { textOnly: true })
  }

  // Slugify the short title of each article.
  // Where: shortTitle = Foo bar
  // Returns: slug = foo-bar
  // Fall back to title if shortTitle doesn't exist.
  const slug: string = slugger.slug(decode(stringToSlugify))

  // Get the basename, depending on whether it's a file or dir.
  let basename: string
  if (isDirectory) {
    // Where: content location = content/foobar/index.md
    // Returns: basename = foobar
    basename = path.basename(path.dirname(file))
  } else {
    // Where: content location = content/foobar.md
    // Returns: basename = foobar
    basename = path.basename(file, '.md')
  }

  // If slug and basename already match, all set here. Return early.
  if (slug === basename) return null

  // Build the new path based on file type.
  const newPath = isDirectory
    ? path.join(path.dirname(path.dirname(file)), slug, 'index.md')
    : path.join(path.dirname(file), `${slug}.md`)

  // Get relative paths and adjust for directories.
  const getContentPath = (filePath: string): string => {
    const relativePath = path.relative(process.cwd(), filePath)
    return isDirectory ? path.dirname(relativePath) : relativePath
  }

  const contentPath = getContentPath(file)
  const newContentPath = getContentPath(newPath)

  return [contentPath, newContentPath]
}

function moveFile(result: string[], options: ScriptOptions): void {
  const [contentPath, newContentPath] = result

  if (options.dryRun) {
    console.log('Move:\n', contentPath, '\nto:\n', newContentPath, '\n')
    return
  }

  // Call out to well-tested move-content script for the moving and redirect adding functions.
  const stdout = execFileSync(
    'tsx',
    [
      'src/content-render/scripts/move-content.js',
      '--no-git',
      '--verbose',
      contentPath,
      newContentPath,
    ],
    { encoding: 'utf8' },
  )

  // Grab just the "Moving..." and "Renamed..." output from stdout; otherwise output is too noisy.
  const moveMsg = stdout.split('\n').find((l) => l.startsWith('Moving') || l.startsWith('Renamed'))
  if (moveMsg && !options.verbose) {
    console.log(moveMsg, '\n')
  } else {
    console.log(stdout, '\n')
  }
}

function sortFiles(filesArray: string[]): string[] {
  // The order of operations is important.
  // We need to return an array so that the moving operations happens in this order:
  // 1. Filepaths
  // 2. Deepest subdirectory path
  // 3. Shallowest subdirectory path (up to category level, e.g., content/product/category)
  return filesArray.toSorted((a, b) => {
    // If A is a file and B is a directory, A comes first (negative)
    if (!isDirectoryCheck(a) && isDirectoryCheck(b)) {
      return -1
    }
    // If A is a directory and B is a file, B comes first (positive)
    if (isDirectoryCheck(a) && !isDirectoryCheck(b)) {
      return 1
    }
    // If A and B are both files, neutral
    if (!isDirectoryCheck(a) && !isDirectoryCheck(b)) {
      return 0
    }
    // If both are directories, sort by depth (deepest first)
    if (isDirectoryCheck(a) && isDirectoryCheck(b)) {
      const aDepth = a.split(path.sep).length
      const bDepth = b.split(path.sep).length
      return bDepth - aDepth // Deeper paths first
    }

    // This should never be reached, but return 0 for safety
    return 0
  })
}

function filterFiles(contentDir: string, options: ScriptOptions) {
  return walkFiles(contentDir, ['.md']).filter((file: string) => {
    // Never move readmes
    if (file.endsWith('README.md')) return false
    // Never move early access files
    if (file.includes('early-access')) return false
    // Never move the homepage (content/index.md)
    if (path.relative(contentDir, file) === 'index.md') return false
    // Never move product landings (content/foo/index.md)
    if (path.relative(contentDir, file).split(path.sep)[1] === 'index.md') return false

    // If no specific paths are passed, we are done filtering.
    if (!options.paths) return true

    return options.paths.some((p: string) => {
      // Allow either a full content path like "content/foo/bar.md"
      // or a top-level directory name like "copilot"
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
  options: ScriptOptions,
): boolean {
  // Assess the conditions in this order:
  // If it's a directory AND we're excluding dirs, do not process it no matter what.
  if (isDirectory && options.excludeDirs) {
    return false
  }
  // If the force option is passed, process it no matter what.
  if (options.force) {
    return true
  }
  // If the page has the override set, do not process it.
  if (data.allowTitleToDifferFromFilename) {
    return false
  }
  // In all other cases, process it.
  return true
}

main()
