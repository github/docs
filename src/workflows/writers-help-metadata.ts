#!/usr/bin/env tsx

import { readFileSync, promises as fsp } from 'fs'
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

// Manual entries cover scripts that do not carry writer-tool metadata.
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
  const tools: WriterToolsCollection = { ...MANUAL_ENTRIES }

  // node:fs has no absolute option, excludes leave bare directories, and ordering is unstable.
  const repoRoot = path.join(__dirname, '..', '..')
  const allFiles = (
    await Array.fromAsync(
      fsp.glob('src/**/*', {
        cwd: repoRoot,
        exclude: [
          '**/node_modules/**',
          '**/node_modules',
          '**/tests/**',
          '**/tests',
          '**/test/**',
          '**/test',
          '**/.*',
        ],
      }),
    )
  )
    .map((file) => path.resolve(repoRoot, file))
    .sort()

  const scriptFiles = allFiles.filter((file) => {
    if (file === __scriptname) return false

    const ext = path.extname(file)
    if (['.ts', '.js', '.sh'].includes(ext)) return true

    // Extensionless executable shell scripts count as writer tools.
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
        const scriptName = findScriptName(packageJson.scripts, relativePath)
        if (scriptName) {
          if (!tools[metadata.category]) tools[metadata.category] = []

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
      // Unreadable files are irrelevant to writer-tool discovery.
      continue
    }
  }

  return tools
}

function extractMetadata(content: string): ScriptMetadata {
  const metadata: ScriptMetadata = {}
  // Writer-tool metadata must appear within the first 20 lines.
  const lines = content.split('\n').slice(0, 20)

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

// src/secret-scanning becomes Secret Scanning.
function getCategory(relativePath: string): string {
  const directory = relativePath.split(path.sep)[1]
  const category = directory
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  return category
    .replace('Content Render', 'Content Tasks')
    .replace('Ghes Releases', 'GHES release notes')
}

function findScriptName(scripts: Record<string, string>, relativePath: string): string | null {
  for (const [scriptName, command] of Object.entries(scripts)) {
    if (command.includes(relativePath)) {
      return scriptName
    }
    const simplifiedPath = relativePath.replace(/^src\//, '')
    if (command.includes(simplifiedPath)) {
      return scriptName
    }
  }
  return null
}

function prioritizeOrder(tools: WriterToolsCollection) {
  const priorities = {
    'move-content': 1,
    'cta-builder': 2,
    'lint-content': 1,
    dev: 1,
  }

  for (const tool of Object.values(tools).flat()) {
    if (priorities[tool.name as keyof typeof priorities]) {
      tool.priority = priorities[tool.name as keyof typeof priorities]
    }
  }

  for (const category of Object.keys(tools)) {
    tools[category].sort((a, b) => {
      if (a.priority !== undefined && b.priority === undefined) return -1
      if (a.priority === undefined && b.priority !== undefined) return 1

      if (a.priority !== undefined && b.priority !== undefined) {
        return a.priority - b.priority
      }

      return a.name.localeCompare(b.name)
    })
  }

  return tools
}

async function main(): Promise<void> {
  console.log('For more info, run a command with "-- --help".\n')

  const tools = prioritizeOrder(await discoverWriterTools())

  for (const [category, scripts] of Object.entries(tools)) {
    console.log(`${category}:`)
    for (const script of scripts) {
      const padding = ' '.repeat(Math.max(0, 34 - script.name.length))
      console.log(`  npm run ${script.name}${padding}# ${script.description}`)
    }
    console.log('')
  }

  console.log('Moved to github/technical-content, in .github/scripts:')
  for (const [name, description] of [
    ['docstat', 'Page metrics for a docs URL'],
    ['docsaudit', 'Metrics for a set of pages'],
  ]) {
    const padding = ' '.repeat(Math.max(0, 34 - name.length))
    console.log(`  npm run ${name}${padding}# ${description}`)
  }
  console.log('Run "npm install" in that directory once before using them.\n')
}

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    await main()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
