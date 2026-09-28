// @purpose Writer tool
// @description Auto-populate the `contentType` frontmatter property based on the directory location of the content file

import fs from 'fs'
import path from 'path'
import { program } from 'commander'
import frontmatter from '@/frame/lib/read-frontmatter'
import walkFiles from '@/workflows/walk-files'
import { contentTypesEnum } from '@/frame/lib/frontmatter'
import type { MarkdownFrontmatter } from '@/types'

const RESPONSIBLE_USE_STRING = 'responsible-use'
const LANDING_TYPE = 'landing'
const RAI_TYPE = 'rai'
const OTHER_TYPE = 'other'

interface ScriptOptions {
  dryRun?: boolean
  paths?: string[]
  verbose?: boolean
}

program
  .description('Auto-populate the contentType frontmatter property based on file location')
  .option(
    '-p, --paths [paths...]',
    'One or more specific paths to process (e.g., copilot or content/copilot/how-tos/file.md)',
  )
  .option('-d, --dry-run', 'Preview changes without modifying files')
  .option('-v, --verbose', 'Show detailed output of changes made')
  .addHelpText(
    'after',
    `
Possible contentType values:
  ${contentTypesEnum.join(', ')}

Examples:
  npm run add-content-type // runs on all content files
  npm run add-content-type -- --paths copilot actions --dry-run
  npm run add-content-type -- --paths content/copilot/how-tos
  npm run add-content-type -- --verbose`,
  )
  .parse(process.argv)

const options: ScriptOptions = program.opts()

const contentDir = path.join(process.cwd(), 'content')

async function main() {
  const filesToProcess: string[] = walkFiles(contentDir, ['.md']).filter((file: string) => {
    if (file.endsWith('README.md')) return false
    if (file.includes('early-access')) return false
    if (!options.paths) return true
    return options.paths.some((p: string) => {
      // Accept full content paths like content/foo/bar.md or top-level dirs like copilot.
      if (!p.startsWith('content')) {
        p = path.join('content', p)
      }
      if (!fs.existsSync(p)) {
        console.error(`${p} not found`)
        process.exit(1)
      }
      if (path.relative(process.cwd(), file).startsWith(p)) return true
    })
  })

  let processedCount = 0
  let updatedCount = 0

  for (const filePath of filesToProcess) {
    try {
      const result = processFile(filePath, options)
      if (result.processed) processedCount++
      if (result.updated) updatedCount++
    } catch (error) {
      console.error(
        `Error processing ${filePath}:`,
        error instanceof Error ? error.message : String(error),
      )
    }
  }

  console.log(`\nUpdated ${updatedCount} files out of ${processedCount}`)
}

function processFile(filePath: string, scriptOptions: ScriptOptions) {
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const relativePath = path.relative(contentDir, filePath)

  const { data, content } = frontmatter(fileContent) as unknown as {
    data: MarkdownFrontmatter & { contentType?: string }
    content: string
  }

  if (!data) return { processed: false, updated: false }

  const newContentType = determineContentType(relativePath)

  if (scriptOptions.dryRun) {
    console.log(`\n${relativePath}`)
    if (!data.contentType) {
      console.log(`   ✅  Would set contentType: "${newContentType}"`)
    }
    return { processed: true, updated: false }
  }

  const isChangingContentType = data.contentType && data.contentType !== newContentType
  const isAddingContentType = !data.contentType

  if (isChangingContentType) {
    console.log(
      `Changing contentType from '${data.contentType}' to '${newContentType}' on ${relativePath}`,
    )
  } else if (isAddingContentType) {
    console.log(`Adding contentType '${newContentType}' on ${relativePath}`)
  }

  if (isChangingContentType || isAddingContentType) {
    data.contentType = newContentType
  } else {
    console.log(`contentType is already set to '${data.contentType}' on ${relativePath}`)
    return { processed: true, updated: false }
  }

  fs.writeFileSync(
    filePath,
    frontmatter.stringify(
      content,
      data,
      // gray-matter passes lineWidth to js-yaml, but its types omit it.
      { lineWidth: -1 } as unknown as Parameters<typeof frontmatter.stringify>[2],
    ),
  )

  if (scriptOptions.verbose) {
    console.log(`\n${relativePath}`)
    console.log(`   ✅  Set contentType: "${newContentType}"`)
  }

  return { processed: true, updated: true }
}

function determineContentType(relativePath: string): string {
  // For copilot/how-tos/troubleshoot/index.md, pathSegments[1] is the content type.
  const pathSegments = relativePath.split(path.sep)

  const topLevelDirectory = pathSegments[0]
  const derivedContentType = pathSegments[1]

  // content/index.md is the only homepage.
  if (topLevelDirectory === 'index.md') return 'homepage'

  // Responsible-use directories map to the rai content type.
  if (derivedContentType.includes(RESPONSIBLE_USE_STRING)) {
    return RAI_TYPE
  }

  // getting-started directories map to get-started.
  if (derivedContentType === 'getting-started') {
    return 'get-started'
  }

  // Directories matching contentTypesEnum map to their content type.
  if (contentTypesEnum.includes(derivedContentType)) {
    return derivedContentType
  }

  // Product index.md files are landing pages.
  if (derivedContentType === 'index.md') {
    return LANDING_TYPE
  }

  return OTHER_TYPE
}

try {
  await main()
} catch (error) {
  console.error(error)
}
