// This script auto-populates the `contentType` frontmatter property based on
// the directory location of the content file.
// Run with:
// npm run-script -- add-content-type --help

import fs from 'fs'
import path from 'path'
import { program } from 'commander'
import frontmatter from '@/frame/lib/read-frontmatter'
import walkFiles from '@/workflows/walk-files'
import { contentTypesEnum } from '#src/frame/lib/frontmatter.js'
import type { MarkdownFrontmatter } from '@/types'

const RESPONSIBLE_USE_STRING = 'responsible-use'
const LANDING_TYPE = 'landing'
const RAI_TYPE = 'rai'
const OTHER_TYPE = 'other'

interface ScriptOptions {
  dryRun?: boolean
  paths?: string[]
  removeType?: boolean
  verbose?: boolean
}

program
  .description('Auto-populate the contentType frontmatter property based on file location')
  .option(
    '-p, --paths [paths...]',
    'One or more specific paths to process (e.g., copilot or content/copilot/how-tos/file.md)',
  )
  .option('-r, --remove-type', `Remove the legacy 'type' frontmatter property if present`)
  .option('-d, --dry-run', 'Preview changes without modifying files')
  .option('-v, --verbose', 'Show detailed output of changes made')
  .addHelpText(
    'after',
    `
Possible contentType values:
  ${contentTypesEnum.join(', ')}

Examples:
  npm run-script -- add-content-type // runs on all content files, does not remove legacy 'type' prop
  npm run-script -- add-content-type --paths copilot actions --remove-type --dry-run
  npm run-script -- add-content-type --paths content/copilot/how-tos
  npm run-script -- add-content-type --verbose`,
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

function processFile(filePath: string, options: ScriptOptions) {
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const relativePath = path.relative(contentDir, filePath)

  const { data, content } = frontmatter(fileContent) as unknown as {
    data: MarkdownFrontmatter & { contentType?: string }
    content: string
  }

  if (!data) return { processed: false, updated: false }

  // Remove the legacy type property if option is passed
  const removeLegacyType = Boolean(options.removeType && data.type)

  const newContentType = determineContentType(relativePath, data.type || '')

  if (options.dryRun) {
    console.log(`\n${relativePath}`)
    if (!data.contentType) {
      console.log(`   ✅  Would set contentType: "${newContentType}"`)
    }
    if (removeLegacyType) {
      console.log(`   ✂️  Would remove legacy type: "${data.type}"`)
    }
    return { processed: true, updated: false }
  }

  // Check if we're actually changing an existing contentType
  const isChangingContentType = data.contentType && data.contentType !== newContentType
  const isAddingContentType = !data.contentType

  if (isChangingContentType) {
    console.log(
      `Changing contentType from '${data.contentType}' to '${newContentType}' on ${relativePath}`,
    )
  } else if (isAddingContentType) {
    console.log(`Adding contentType '${newContentType}' on ${relativePath}`)
  }

  // Only update if there's actually a change needed
  if (isChangingContentType || isAddingContentType) {
    data.contentType = newContentType
  } else {
    console.log(`contentType is already set to '${data.contentType}' on ${relativePath}`)
    return { processed: true, updated: false }
  }

  let legacyTypeValue
  if (removeLegacyType) {
    legacyTypeValue = data.type
    delete data.type
  }

  // Write the file back
  fs.writeFileSync(filePath, frontmatter.stringify(content, data, { lineWidth: -1 } as any))

  if (options.verbose) {
    console.log(`\n${relativePath}`)
    console.log(`   ✅  Set contentType: "${newContentType}"`)
    if (removeLegacyType) {
      console.log(`   ✂️  Removed legacy type: "${legacyTypeValue}"`)
    }
  }

  return { processed: true, updated: true }
}

function determineContentType(relativePath: string, legacyType: string): string {
  // The split path array will be structured like:
  // [ 'copilot', 'how-tos', 'troubleshoot', 'index.md' ]
  // where the content type we want is in slot 1.
  const pathSegments = relativePath.split(path.sep)

  const topLevelDirectory = pathSegments[0]
  const derivedContentType = pathSegments[1]

  // There is only one content/index.md, and it's the homepage.
  if (topLevelDirectory === 'index.md') return 'homepage'

  // SPECIAL HANDLING FOR RAI
  // If a legacy type includes 'rai', use it for the contentType.
  // If a directory name includes a responsible-use string, assume the 'rai' type.
  if (legacyType === 'rai' || derivedContentType.includes(RESPONSIBLE_USE_STRING)) {
    return RAI_TYPE
  }

  // When the content directory matches any of the allowed
  // content type values (such as 'get-started',
  // 'concepts', 'how-tos', 'reference', and 'tutorials'),
  // immediately return it. We're satisfied.
  if (contentTypesEnum.includes(derivedContentType)) {
    return derivedContentType
  }

  // There is only one content/<product>/index.md file per doc set.
  // This index.md is always a landing page.
  if (derivedContentType === 'index.md') {
    return LANDING_TYPE
  }

  // Classify anything else as 'other'.
  return OTHER_TYPE
}

main().catch(console.error)
