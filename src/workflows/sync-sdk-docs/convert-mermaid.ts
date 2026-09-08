#!/usr/bin/env node

/**
 * Converts Mermaid code blocks in SDK docs to PNG images.
 *
 * For each ```mermaid block found in markdown files:
 *   - Extracts the Mermaid source
 *   - Renders it to PNG using @mermaid-js/mermaid-cli (mmdc)
 *   - Saves the PNG to the assets directory
 *   - Replaces the code block with an image reference
 *
 * Filenames are deterministic based on source file path and block index,
 * so re-running produces stable results.
 *
 * Usage:
 *   node convert-mermaid.mjs --sdk-docs-dir <path> --assets-dir <path>
 */

import fs from 'node:fs'
import path from 'node:path'
import { parseArgs } from 'node:util'
import { execFileSync, execSync } from 'node:child_process'

const { values: args } = parseArgs({
  options: {
    'sdk-docs-dir': { type: 'string' },
    'assets-dir': { type: 'string' },
    'repo-root': { type: 'string' },
    'puppeteer-config': { type: 'string' },
  },
})

const SDK_DOCS_DIR = path.resolve(args['sdk-docs-dir'] as string)
const ASSETS_DIR = path.resolve(args['assets-dir'] as string)
const REPO_ROOT = path.resolve(args['repo-root'] || '.')
const PUPPETEER_CONFIG = args['puppeteer-config'] ? path.resolve(args['puppeteer-config']) : null

if (!fs.existsSync(SDK_DOCS_DIR)) {
  console.error(`SDK docs directory not found: ${SDK_DOCS_DIR}`)
  process.exit(1)
}

// Find mmdc binary — check global PATH first, then local node_modules
let MMDC_BIN: string
try {
  MMDC_BIN = execSync('which mmdc', { encoding: 'utf8' }).trim()
} catch {
  const localPath = path.resolve(import.meta.dirname, '../../../node_modules/.bin/mmdc')
  if (fs.existsSync(localPath)) {
    MMDC_BIN = localPath
  } else {
    console.error('mmdc not found. Install @mermaid-js/mermaid-cli first.')
    process.exit(1)
  }
}

/** Recursively collect all .md files. */
function getAllMarkdownFiles(dir: string): string[] {
  const results: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...getAllMarkdownFiles(fullPath))
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(fullPath)
    }
  }
  return results
}

/**
 * Generate a deterministic filename for a mermaid diagram.
 * Based on the source file's relative path and the block index.
 */
function generateImageName(filePath: string, blockIndex: number): string {
  const rel = path.relative(SDK_DOCS_DIR, filePath).replace(/\.md$/, '').replace(/\//g, '-')
  return `${rel}-diagram-${blockIndex}.png`
}

/**
 * Generate alt text from a mermaid diagram source.
 * Uses the diagram type and first meaningful line.
 */
function generateAltText(mermaidSource: string): string {
  const lines = mermaidSource.trim().split('\n')
  const firstLine = lines[0].trim()

  // Extract the diagram type
  const typeMatch = firstLine.match(
    /^(flowchart|sequenceDiagram|classDiagram|stateDiagram|erDiagram|gantt|pie|graph|gitGraph|journey|mindmap|timeline|quadrantChart|sankey|xychart)/i,
  )

  if (typeMatch) {
    const type = typeMatch[1].toLowerCase()
    const typeNames: Record<string, string> = {
      flowchart: 'Flowchart',
      sequencediagram: 'Sequence diagram',
      classdiagram: 'Class diagram',
      statediagram: 'State diagram',
      erdiagram: 'Entity relationship diagram',
      gantt: 'Gantt chart',
      pie: 'Pie chart',
      graph: 'Graph diagram',
      gitgraph: 'Git graph',
      journey: 'User journey diagram',
      mindmap: 'Mind map',
      timeline: 'Timeline',
      quadrantchart: 'Quadrant chart',
      sankey: 'Sankey diagram',
      xychart: 'XY chart',
    }
    return `Diagram: ${typeNames[type] || type} showing the described process.`
  }

  return 'Diagram illustrating the described process.'
}

/**
 * Process a single markdown file, converting all mermaid blocks to PNG.
 * Returns the number of conversions performed.
 */
function processFile(filePath: string, assetsUrlPath: string): number {
  const raw = fs.readFileSync(filePath, 'utf8')

  // Match ```mermaid ... ``` blocks
  const mermaidRegex = /```mermaid\n([\s\S]*?)```/g
  const matches = [...raw.matchAll(mermaidRegex)]

  if (matches.length === 0) return 0

  let converted = 0
  let result = raw

  // Process matches in reverse order to preserve string indices
  for (let i = matches.length - 1; i >= 0; i--) {
    const match = matches[i]
    const mermaidSource = match[1]
    const imageName = generateImageName(filePath, i)
    const altText = generateAltText(mermaidSource)
    const imagePath = path.join(ASSETS_DIR, imageName)

    // Write mermaid source to temp file
    const tmpFile = path.join(ASSETS_DIR, `_tmp_${imageName}.mmd`)
    fs.writeFileSync(tmpFile, mermaidSource, 'utf8')

    try {
      const mmdcArgs = ['-i', tmpFile, '-o', imagePath, '-b', 'transparent', '--scale', '2']
      if (PUPPETEER_CONFIG) {
        mmdcArgs.push('-p', PUPPETEER_CONFIG)
      }
      execFileSync(MMDC_BIN, mmdcArgs, {
        timeout: 30_000,
        stdio: 'pipe',
      })

      if (fs.existsSync(imagePath)) {
        const imageUrl = `${assetsUrlPath}/${imageName}`
        const replacement = `![${altText}](${imageUrl})`
        result =
          result.slice(0, match.index) + replacement + result.slice(match.index + match[0].length)
        converted++
        console.log(`  MERMAID: ${path.relative(SDK_DOCS_DIR, filePath)} → ${imageName}`)
      } else {
        console.log(`  WARN (no output): ${path.relative(SDK_DOCS_DIR, filePath)} block ${i}`)
      }
    } catch (err: unknown) {
      console.log(
        `  WARN (render failed): ${path.relative(SDK_DOCS_DIR, filePath)} block ${i}: ${(err as Error).message}`,
      )
    } finally {
      // Clean up temp file
      if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile)
    }
  }

  if (converted > 0) {
    fs.writeFileSync(filePath, result, 'utf8')
  }

  return converted
}

// --- Main ---

console.log('--- Converting Mermaid diagrams to PNG ---\n')

// Ensure assets directory exists
fs.mkdirSync(ASSETS_DIR, { recursive: true })

// Compute the URL path for image references
// The assets dir relative to the docs-internal root gives us the URL path
// e.g. assets/images/help/copilot/sdk-docs → /assets/images/help/copilot/sdk-docs
const assetsUrlPath = `/${path.relative(REPO_ROOT, ASSETS_DIR)}`

const files = getAllMarkdownFiles(SDK_DOCS_DIR)
let totalConverted = 0

for (const file of files) {
  totalConverted += processFile(file, assetsUrlPath)
}

if (totalConverted === 0) {
  console.log('No Mermaid diagrams found.')
} else {
  console.log(`\n✅ Converted ${totalConverted} Mermaid diagram(s) to PNG.`)
}
