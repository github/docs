import { readFile, writeFile, copyFile } from 'fs/promises'
import { existsSync } from 'fs'
import walk from 'walk-sync'
import { mkdirp } from 'mkdirp'
import { execFileSync, execSync } from 'child_process'
import path from 'path'
import matter from '@gr2m/gray-matter'
import { rimraf } from 'rimraf'

import { updateContentDirectory } from '../../automated-pipelines/lib/update-markdown'
import { convertContentToDocs } from './convert-markdown-for-docs'

const { targetDirectory, sourceDirectory, frontmatterDefaults, markdownPrefix } = JSON.parse(
  await readFile(path.join('src/codeql-cli/lib/config.json'), 'utf-8'),
)
const SOURCE_REPO = sourceDirectory.split('/')[0]
const TEMP_DIRECTORY = path.join(SOURCE_REPO, 'tempCliDocs')
const MARKDOWN_PREFIX = `\n${markdownPrefix}\n\n`

main()

async function main() {
  await setupEnvironment()

  await rstToMarkdown(sourceDirectory)

  const markdownFiles = walk(TEMP_DIRECTORY, {
    includeBasePath: true,
    globs: ['**/*.md'],
  })
  const cliMarkdownContents: Record<string, { data: Record<string, unknown>; content: string }> = {}

  for (const file of markdownFiles) {
    const sourceContent = await readFile(file, 'utf8')
    // The source content is missing a "Primary Options" heading directly
    // under "Options".
    // Adding a node to the AST is fiddly when it is not a child of the
    // previous heading, so append the heading to the raw Markdown instead.
    const matchHeading = '## Options\n'
    const primaryHeadingSourceContent = sourceContent.replace(
      matchHeading,
      `${matchHeading}\n### Primary Options\n`,
    )
    const currentFileName = path.basename(file)
    const { data, content } = await convertContentToDocs(
      primaryHeadingSourceContent,
      {},
      currentFileName,
    )
    await writeFile(file, matter.stringify(content, data))
    const targetFilename = path.join(targetDirectory, path.basename(file))
    const sourceData = { ...data, ...frontmatterDefaults }
    const finalSourceContent = MARKDOWN_PREFIX + content
    cliMarkdownContents[targetFilename] = { data: sourceData, content: finalSourceContent }
  }
  await updateContentDirectory({
    targetDirectory,
    sourceContent: cliMarkdownContents,
    frontmatter: frontmatterDefaults,
  })
}

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

  await rimraf(TEMP_DIRECTORY)
  await mkdirp(TEMP_DIRECTORY)
}

async function rstToMarkdown(rstSourceDirectory: string) {
  const sourceFiles = walk(rstSourceDirectory, {
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

    const markdownFilename = path.basename(file).replace('.rst', '.md')
    const outputFilepath = `${TEMP_DIRECTORY}/${markdownFilename}`
    if (outputFilepath.includes(' ') || outputFilepath.includes('..')) {
      const errorMsg = `The ${outputFilepath} has a space or .. in the path.`
      throw new Error(errorMsg)
    }

    execFileSync('pandoc', [tempFilePath, '-f', 'rst', '-t', 'commonmark_x', '-o', outputFilepath])
  }
}
