#!/usr/bin/env node

import { readFile, writeFile, copyFile } from 'fs/promises'
import { existsSync } from 'fs'
import walk from 'walk-sync'
import { mkdirp } from 'mkdirp'
import { execFileSync, execSync } from 'child_process'
import path from 'path'
import matter from 'gray-matter'
import { rimraf } from 'rimraf'

import { updateContentDirectory } from '../../automated-pipelines/lib/update-markdown.js'
import { convertContentToDocs } from './convert-markdown-for-docs.js'

const { targetDirectory, sourceDirectory, frontmatterDefaults, markdownPrefix } = JSON.parse(
  await readFile(path.join('src/codeql-cli/lib/config.json'), 'utf-8'),
)
const SOURCE_REPO = sourceDirectory.split('/')[0]
const TEMP_DIRECTORY = path.join(SOURCE_REPO, 'tempCliDocs')
const MARKDOWN_PREFIX = `\n${markdownPrefix}\n\n`

main()

async function main() {
  await setupEnvironment()

  // convert the rst files to Markdown using pandoc
  await rstToMarkdown(sourceDirectory)

  const markdownFiles = walk(TEMP_DIRECTORY, {
    includeBasePath: true,
    globs: ['**/*.md'],
  })
  const cliMarkdownContents = {}

  for (const file of markdownFiles) {
    const sourceContent = await readFile(file, 'utf8')
    // There is a missing heading in the source content called "Primary Options"
    // It should be directory under the "Options" heading.
    // It's a quite a bit more complicated to add new nodes in the AST when
    // the node isn't a child of the previous heading. It's pretty easy to
    // just append a second heading here.
    const matchHeading = '## Options\n'
    const primaryHeadingSourceContent = sourceContent.replace(
      matchHeading,
      matchHeading + '\n### Primary Options\n',
    )
    const { data, content } = await convertContentToDocs(primaryHeadingSourceContent)
    await writeFile(file, matter.stringify(content, data))
    const targetFilename = path.join(targetDirectory, path.basename(file))
    const sourceData = { ...data, ...frontmatterDefaults }
    const finalSourceContent = MARKDOWN_PREFIX + content
    cliMarkdownContents[targetFilename] = { data: sourceData, content: finalSourceContent }
  }
  // Begin updating Markdown files in the content directory
  await updateContentDirectory({
    targetDirectory,
    sourceContent: cliMarkdownContents,
    frontmatter: frontmatterDefaults,
  })
}

// Separates out steps that need to be done before the sync can begin
async function setupEnvironment() {
  if (!existsSync(SOURCE_REPO)) {
    const errorMessage = `Source directory ${SOURCE_REPO} does not exist. Please clone the repo.`
    throw new Error(errorMessage)
  }
  const isPandoc = execSync('pandoc --version', { encoding: 'utf8' })
  if (!isPandoc.startsWith('pandoc')) {
    throw new Error(
      'You must install pandoc to run this script. See https://pandoc.org/installing.html.',
    )
  }

  // refresh the temp directory
  rimraf.sync(TEMP_DIRECTORY)
  await mkdirp(TEMP_DIRECTORY)
}

// copy the raw rst files to the temp directory and convert them
// to Markdownusing pandoc
async function rstToMarkdown(sourceDirectory) {
  const sourceFiles = walk(sourceDirectory, {
    includeBasePath: true,
    globs: ['**/*.rst'],
  })

  for (const file of sourceFiles) {
    const tempFilePath = `${TEMP_DIRECTORY}/${path.basename(file)}`
    if (tempFilePath.includes(' ') || tempFilePath.includes('..')) {
      const errorMsg = `The ${tempFilePath} has a space or .. in the path.`
      throw new Error(errorMsg)
    }
    await copyFile(file, tempFilePath)

    // Convert the rst files to Markdown
    const markdownFilename = path.basename(file).replace('.rst', '.md')
    const outputFilepath = `${TEMP_DIRECTORY}/${markdownFilename}`
    if (outputFilepath.includes(' ') || outputFilepath.includes('..')) {
      const errorMsg = `The ${outputFilepath} has a space or .. in the path.`
      throw new Error(errorMsg)
    }

    execFileSync('pandoc', [tempFilePath, '-f', 'rst', '-t', 'commonmark_x', '-o', outputFilepath])
  }
}
