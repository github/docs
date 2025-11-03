#!/usr/bin/env tsx

import { readFileSync } from 'fs'
import { glob } from 'glob'
import path from 'path'
import { fileURLToPath } from 'url'

const __scriptname = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__scriptname)

const PURPOSE_STRING = '@purpose Writer tool'
const DESCRIPTION_STRING = '@description'
const DESCRIPTION_REGEX = new RegExp(`${DESCRIPTION_STRING}\\s+(.+)`)

interface WriterTool {
  name: string
  description: string
  priority?: number // Lower numbers = higher priority
}

interface WriterToolsCollection {
  [category: string]: WriterTool[]
}

interface ScriptMetadata {
  isWriterTool?: boolean
  category?: string
  description?: string
}

// Manual entries for scripts that aren't TypeScript files with metadata
const MANUAL_ENTRIES: WriterToolsCollection = {
  'Validation and formatting': [
    { name: 'prettier', description: 'Format markdown, YAML, and other files' },
  ],
  Development: [
    { name: 'dev', description: 'Start local development server' },
    { name: 'build', description: 'Build the application' },
  ],
}

async function discoverWriterTools(): Promise<WriterToolsCollection> {
  const packageJsonPath = path.join(__dirname, '..', '..', 'package.json')
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'))
  const tools: WriterToolsCollection = { ...MANUAL_ENTRIES } // Start with manual entries

  // First get all files
  const allFiles = await glob('src/**/*', {
    cwd: path.join(__dirname, '..', '..'),
    absolute: true,
    ignore: ['**/node_modules/**', '**/tests/**', '**/test/**', '**/.*'],
  })

  // Then filter for .ts, .js, .sh scripts
  const scriptFiles = allFiles.filter((file) => {
    if (file === __scriptname) return false // skip the current file

    const ext = path.extname(file)
    if (['.ts', '.js', '.sh'].includes(ext)) return true

    // For extensionless files, check if they're executable or have shebang
    if (ext === '') {
      try {
        const content = readFileSync(file, 'utf8')
        return content.startsWith('#!/bin/bash') || content.startsWith('#!/usr/bin/env bash')
      } catch {
        return false
      }
    }
    return false
  })

  for (const filePath of scriptFiles) {
    try {
      const relativePath = path.relative(process.cwd(), filePath)
      const content = readFileSync(filePath, 'utf8')
      const metadata = extractMetadata(content)

      if (metadata.isWriterTool) {
        metadata.category = getCategory(relativePath)
        // Find corresponding npm script
        const scriptName = findScriptName(packageJson.scripts, relativePath)
        if (scriptName) {
          if (!tools[metadata.category]) tools[metadata.category] = []

          // Check if not already added manually
          const exists = tools[metadata.category].some((tool) => tool.name === scriptName)
          if (!exists) {
            tools[metadata.category].push({
              name: scriptName,
              description: metadata.description || `${scriptName} tool`,
            })
          }
        }
      }
    } catch {
      // Skip files that can't be read
      continue
    }
  }

  return tools
}

function extractMetadata(content: string): ScriptMetadata {
  const metadata: ScriptMetadata = {}
  const lines = content.split('\n').slice(0, 20) // Only check first 20 lines

  for (const line of lines) {
    if (line.includes(PURPOSE_STRING)) {
      metadata.isWriterTool = true
    }

    if (line.includes(DESCRIPTION_STRING)) {
      // Extract description from line like "@description Add content type frontmatter to articles"
      const match = line.match(DESCRIPTION_REGEX)
      if (match) {
        metadata.description = match[1].trim()
      }
    }
  }

  return metadata
}

// Convert the DIR in src/DIR/ to a title-cased category name
// E.g. src/secret-scanning becomes Secret Scanning
function getCategory(relativePath: string): string {
  const directory = relativePath.split(path.sep)[1]
  const category = directory
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  // Clarify this one category
  return category.replace('Content Render', 'Content Tasks')
}

function findScriptName(scripts: Record<string, string>, relativePath: string): string | null {
  for (const [scriptName, command] of Object.entries(scripts)) {
    // Check if the command includes this file path
    if (command.includes(relativePath)) {
      return scriptName
    }
    // Also check for simplified paths without the src/ prefix
    const simplifiedPath = relativePath.replace(/^src\//, '')
    if (command.includes(simplifiedPath)) {
      return scriptName
    }
  }
  return null
}

function prioritizeOrder(tools: WriterToolsCollection) {
  // Define priorities for specific tools
  const priorities = {
    'move-content': 1,
    'cta-builder': 2,
    'lint-content': 1,
    docstat: 1,
    dev: 1,
  }

  // Assign priorities to discovered tools
  Object.values(tools)
    .flat()
    .forEach((tool) => {
      if (priorities[tool.name as keyof typeof priorities]) {
        tool.priority = priorities[tool.name as keyof typeof priorities]
      }
    })

  // Sort each category by priority, then alphabetically
  Object.keys(tools).forEach((category) => {
    tools[category].sort((a, b) => {
      // Items with priority come first
      if (a.priority !== undefined && b.priority === undefined) return -1
      if (a.priority === undefined && b.priority !== undefined) return 1

      // Both have priority: sort by priority value
      if (a.priority !== undefined && b.priority !== undefined) {
        return a.priority - b.priority
      }

      // Neither has priority: sort alphabetically
      return a.name.localeCompare(b.name)
    })
  })

  return tools
}

async function main(): Promise<void> {
  console.log('For more info, run a command with "-- --help".\n')

  const tools = prioritizeOrder(await discoverWriterTools())

  Object.entries(tools).forEach(([category, scripts]) => {
    console.log(`${category}:`)
    scripts.forEach((script) => {
      const padding = ' '.repeat(Math.max(0, 34 - script.name.length))
      console.log(`  npm run ${script.name}${padding}# ${script.description}`)
    })
    console.log('')
  })
}

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    await main()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
