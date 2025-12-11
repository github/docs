/*
 * @purpose Writer tool
 * @description Resolve and unresolve Liquid data references in content files
 */
// Usage: npm run resolve-liquid -- resolve --paths content/pull-requests/about.md
// Usage: npm run resolve-liquid -- restore --paths content/pull-requests/about.md

import { Command } from 'commander'
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import chalk from 'chalk'

// Type definitions
interface ResolveOptions {
  paths: string[]
  verbose?: boolean
  markers?: boolean
  dryRun?: boolean
  reusablesOnly?: boolean
  variablesOnly?: boolean
  recursive?: boolean
}

interface LiquidReference {
  original: string
  type: 'reusable' | 'variable'
  path: string
  startIndex: number
  endIndex: number
}

// Constants
const ROOT = process.env.ROOT || '.'
const DATA_ROOT = path.resolve(path.join(ROOT, 'data'))
const REUSABLES_ROOT = path.join(DATA_ROOT, 'reusables')
const VARIABLES_ROOT = path.join(DATA_ROOT, 'variables')

// Regex pattern to match resolved content blocks
const RESOLVED_PATTERN =
  /<!-- begin resolved (reusable|variable)s\.([^>]+) -->(.+?)<!-- end resolved \1s\.\2 -->/gs

/**
 * Get the file path for a data reference
 */
function getDataFilePath(type: 'reusable' | 'variable', dataPath: string): string {
  if (type === 'reusable') {
    return path.join(REUSABLES_ROOT, `${dataPath.replace(/\./g, '/')}.md`)
  } else {
    const fileName = dataPath.split('.')[0]
    return path.join(VARIABLES_ROOT, `${fileName}.yml`)
  }
}

const program = new Command()

program
  .name('resolve-liquid')
  .description('Tools to resolve and unresolve Liquid data references in content files')

program
  .command('resolve')
  .description('Resolve {% data reusables %} and {% data variables %} statements to their content')
  .option('--paths <paths...>', 'Content file paths to process', [])
  .option('-v, --verbose', 'Verbose output', false)
  .option('--no-markers', 'Skip HTML comment markers (output cannot be restored to Liquid)', true)
  .option('--reusables-only', 'Process only reusables (skip variables)', false)
  .option('--variables-only', 'Process only variables (skip reusables)', false)
  .option('-r, --recursive', 'Keep resolving until no references remain (max 10 iterations)', false)
  .action((options: ResolveOptions) => resolveReferences(options))

program
  .command('restore')
  .description('Restore original Liquid statements from HTML comment markers')
  .option('--paths <paths...>', 'Content file paths to process', [])
  .option('-v, --verbose', 'Verbose output', false)
  .option('--reusables-only', 'Process only reusables (skip variables)', false)
  .option('--variables-only', 'Process only variables (skip reusables)', false)
  .action((options: ResolveOptions) => restoreReferences(options))

program.parse()

/**
 * Get allowed types based on command options
 */
function getAllowedTypes(options: ResolveOptions): Array<'reusable' | 'variable'> {
  if (options.reusablesOnly && options.variablesOnly) {
    console.log(
      chalk.yellow(
        'Warning: Both --reusables-only and --variables-only specified. Processing both types.',
      ),
    )
    return ['reusable', 'variable']
  }

  if (options.reusablesOnly) {
    return ['reusable']
  }

  if (options.variablesOnly) {
    return ['variable']
  }

  // Default: process both types
  return ['reusable', 'variable']
}

/**
 * Resolve Liquid data references in content files
 */
async function resolveReferences(options: ResolveOptions): Promise<void> {
  const { paths, verbose, markers, recursive } = options
  // markers will be true by default, false when --no-markers is used
  const withMarkers = markers !== false
  const allowedTypes = getAllowedTypes(options)
  const maxIterations = 10 // Safety limit for recursive resolution

  if (paths.length === 0) {
    console.error(chalk.red('Error: No paths provided. Use --paths option.'))
    process.exit(1)
  }

  for (const filePath of paths) {
    try {
      let iteration = 0
      let hasRemainingRefs = true

      while (hasRemainingRefs && iteration < maxIterations) {
        iteration++

        if (verbose && recursive && iteration > 1) {
          console.log(chalk.blue(`Processing (iteration ${iteration}): ${filePath}`))
        } else if (verbose) {
          console.log(chalk.blue(`Processing: ${filePath}`))
          if (allowedTypes.length < 2) {
            console.log(chalk.dim(`  Only processing: ${allowedTypes.join(', ')}`))
          }
        }

        if (!fs.existsSync(filePath)) {
          console.error(chalk.red(`Error: File not found: ${filePath}`))
          break
        }

        const content = fs.readFileSync(filePath, 'utf-8')
        const resolvedContent = await resolveFileContent(
          content,
          filePath,
          verbose,
          withMarkers,
          allowedTypes,
        )

        if (resolvedContent !== content) {
          fs.writeFileSync(filePath, resolvedContent, 'utf-8')
          if (iteration === 1 || !recursive) {
            console.log(chalk.green(`✓ Resolved references in: ${filePath}`))
          }
        } else {
          if (verbose && iteration === 1) {
            console.log(chalk.gray(`  No references found in: ${filePath}`))
          }
        }

        // Check for remaining references
        const remainingRefs = findLiquidReferences(resolvedContent, allowedTypes)
        hasRemainingRefs = remainingRefs.length > 0

        if (!recursive) {
          // Non-recursive mode: show remaining references and break
          if (hasRemainingRefs) {
            console.log(
              chalk.yellow(
                `👉  FYI: ${remainingRefs.length} Liquid reference(s) remain in ${filePath}`,
              ),
            )
            console.log(
              chalk.yellow(
                '    These come from reusables/variables that contain references to other reusables/variables',
              ),
            )
            console.log(
              chalk.yellow('    Run the resolve command again to resolve them, or use --recursive'),
            )
            if (verbose) {
              for (const ref of remainingRefs) {
                console.log(chalk.dim(`    ${ref.original}`))
              }
            } else {
              console.log(chalk.dim('    Use --verbose to see the specific references'))
            }
          }
          break
        }

        if (hasRemainingRefs && iteration >= maxIterations) {
          console.log(
            chalk.yellow(`⚠️  Reached maximum iterations (${maxIterations}) for ${filePath}`),
          )
          console.log(
            chalk.yellow(
              `   ${remainingRefs.length} reference(s) still remain - there may be circular references`,
            ),
          )
          if (verbose) {
            for (const ref of remainingRefs) {
              console.log(chalk.dim(`    ${ref.original}`))
            }
          }
        } else if (!hasRemainingRefs && iteration > 1) {
          console.log(
            chalk.green(
              `✓ Fully resolved all references in: ${filePath} (${iteration} iterations)`,
            ),
          )
        }
      }
    } catch (error: any) {
      console.error(chalk.red(`Error processing ${filePath}: ${error.message}`))
    }
  }
}

/**
 * Restore content by restoring original Liquid statements from HTML comments
 */
async function restoreReferences(options: ResolveOptions): Promise<void> {
  const { paths, verbose } = options
  const allowedTypes = getAllowedTypes(options)

  if (paths.length === 0) {
    console.error(chalk.red('Error: No paths provided. Use --paths option.'))
    process.exit(1)
  }

  for (const filePath of paths) {
    try {
      if (verbose) {
        console.log(chalk.blue(`Restoring: ${filePath}`))
        if (allowedTypes.length < 2) {
          console.log(chalk.dim(`  Only processing: ${allowedTypes.join(', ')}`))
        }
      }

      if (!fs.existsSync(filePath)) {
        console.error(chalk.red(`Error: File not found: ${filePath}`))
        continue
      }

      const content = fs.readFileSync(filePath, 'utf-8')

      // Check for content edits before restoring
      const hasEdits = await detectContentEdits(content, verbose, allowedTypes)
      if (hasEdits) {
        console.log(
          chalk.blue(
            `ℹ️  Info: ${filePath} contains resolved references that will be preserved by updating data files`,
          ),
        )
        if (!verbose) {
          console.log(chalk.dim('    Use --verbose to see details of the edits'))
        }

        // Update data files with the edited content before restoring
        const updatedDataFiles = updateDataFiles(filePath, verbose, false, allowedTypes)

        // Automatically restore any updated data files back to liquid tags
        if (updatedDataFiles.length > 0) {
          console.log(chalk.blue('  Restoring updated data files back to liquid tags...'))
          for (const dataFile of updatedDataFiles) {
            try {
              const dataContent = fs.readFileSync(dataFile, 'utf-8')
              const restoredDataContent = restoreFileContent(dataContent, verbose, allowedTypes)
              if (restoredDataContent !== dataContent) {
                fs.writeFileSync(dataFile, restoredDataContent, 'utf-8')
                if (verbose) {
                  console.log(chalk.green(`    Restored: ${dataFile}`))
                }
              }
            } catch (error) {
              if (verbose) {
                console.log(chalk.yellow(`    Could not restore ${dataFile}: ${error}`))
              }
            }
          }
        }
      }

      // Always restore the main file content regardless of edits
      const restoredContent = restoreFileContent(content, verbose, allowedTypes)

      if (restoredContent !== content) {
        fs.writeFileSync(filePath, restoredContent, 'utf-8')
        console.log(chalk.green(`✓ Restored references in: ${filePath}`))
      } else {
        console.log(chalk.gray(`No resolved references found in: ${filePath}`))
      }
    } catch (error: any) {
      console.error(chalk.red(`Error restoring ${filePath}: ${error.message}`))
    }
  }
}

/**
 * Resolve all Liquid data references in file content
 */
async function resolveFileContent(
  content: string,
  filePath: string,
  verbose?: boolean,
  withMarkers?: boolean,
  allowedTypes?: Array<'reusable' | 'variable'>,
): Promise<string> {
  const references = findLiquidReferences(content, allowedTypes)

  if (references.length === 0) {
    return content
  }

  let resolvedContent = content
  let offset = 0

  for (const ref of references) {
    try {
      const resolvedValue = await resolveLiquidReference(ref, verbose)

      if (resolvedValue !== null) {
        const originalText = ref.original
        let replacement: string

        if (withMarkers) {
          const commentStart = `<!-- begin resolved ${ref.type}s.${ref.path} -->`
          const commentEnd = `<!-- end resolved ${ref.type}s.${ref.path} -->`
          replacement = `${commentStart}${resolvedValue}${commentEnd}`
        } else {
          replacement = resolvedValue
        }

        const startPos = ref.startIndex + offset
        const endPos = ref.endIndex + offset

        resolvedContent =
          resolvedContent.substring(0, startPos) + replacement + resolvedContent.substring(endPos)

        offset += replacement.length - originalText.length

        if (verbose) {
          console.log(chalk.green(`  Resolved: ${ref.type}s.${ref.path}`))
        }
      } else {
        if (verbose) {
          console.log(chalk.yellow(`  Warning: Could not resolve ${ref.type}s.${ref.path}`))
        }
      }
    } catch (error: any) {
      if (verbose) {
        console.log(chalk.red(`  Error resolving ${ref.type}s.${ref.path}: ${error.message}`))
      }
    }
  }

  // Note: Remaining reference detection is now handled in resolveReferences function for recursive mode

  return resolvedContent
}

/**
 * Detect if resolved content has been edited by comparing with original data
 */
async function detectContentEdits(
  content: string,
  verbose?: boolean,
  allowedTypes?: Array<'reusable' | 'variable'>,
): Promise<boolean> {
  let hasEdits = false

  let match
  while ((match = RESOLVED_PATTERN.exec(content)) !== null) {
    const [, type, dataPath, resolvedContent] = match
    const refType = type as 'reusable' | 'variable'

    // Only check if this type is allowed
    if (!allowedTypes || allowedTypes.includes(refType)) {
      try {
        // Load the original content from data files
        const originalContent = loadDataValue(refType, dataPath.trim())

        if (originalContent !== null) {
          // Compare against the original content directly, not re-resolved
          // This avoids nested resolution issues that cause false positives
          const currentContent = resolvedContent.trim()

          if (currentContent !== originalContent.trim()) {
            hasEdits = true
            if (verbose) {
              console.log(chalk.yellow(`  Content has been edited: ${type}s.${dataPath}`))
              console.log(
                chalk.dim('    Original:'),
                originalContent.substring(0, 50) + (originalContent.length > 50 ? '...' : ''),
              )
              console.log(
                chalk.dim('    Current: '),
                currentContent.substring(0, 50) + (currentContent.length > 50 ? '...' : ''),
              )
            }
          }
        }
      } catch (error) {
        if (verbose) {
          console.log(chalk.yellow(`  Could not verify content for ${type}s.${dataPath}: ${error}`))
        }
      }
    }
  }

  return hasEdits
}

/**
 * Load data value from file system (helper for edit detection)
 */
function loadDataValue(type: 'reusable' | 'variable', dataPath: string): string | null {
  try {
    const targetPath = getDataFilePath(type, dataPath)

    if (!fs.existsSync(targetPath)) {
      return null
    }

    if (type === 'reusable') {
      const content = fs.readFileSync(targetPath, 'utf8')
      // Remove any frontmatter if present (same as resolveReusable)
      const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\s*/, '')
      return contentWithoutFrontmatter.trim()
    } else {
      const yamlContent = fs.readFileSync(targetPath, 'utf8')
      const data = yaml.load(yamlContent) as any

      // Navigate to the nested property
      const pathParts = dataPath.split('.')
      let current = data
      for (let i = 1; i < pathParts.length; i++) {
        if (current && typeof current === 'object' && pathParts[i] in current) {
          current = current[pathParts[i]]
        } else {
          return null
        }
      }

      return typeof current === 'string' ? current.trim() : String(current).trim()
    }
  } catch {
    // Silently return null for any errors
  }
  return null
}

/**
 * Restore content by restoring original Liquid statements
 */
function restoreFileContent(
  content: string,
  verbose?: boolean,
  allowedTypes?: Array<'reusable' | 'variable'>,
): string {
  return content.replace(RESOLVED_PATTERN, (match, type, dataPath) => {
    const refType = type as 'reusable' | 'variable'

    // Only restore if this type is allowed
    if (!allowedTypes || allowedTypes.includes(refType)) {
      const originalLiquid = `{% data ${type}s.${dataPath} %}`

      if (verbose) {
        console.log(chalk.green(`  Restored: ${type}s.${dataPath}`))
      }

      return originalLiquid
    }

    // Return unchanged if type is not allowed
    return match
  })
}

/**
 * Update data files with content from resolved blocks
 * Returns array of file paths that were updated
 */
function updateDataFiles(
  filePath: string,
  verbose?: boolean,
  dryRun?: boolean,
  allowedTypes?: Array<'reusable' | 'variable'>,
): string[] {
  const content = fs.readFileSync(filePath, 'utf8')
  const updates = extractDataUpdates(content, allowedTypes)

  if (updates.length === 0) {
    if (verbose) {
      console.log(chalk.yellow('  No content changes found'))
    }
    return []
  }

  // Group updates by file path
  const updatesByFile = new Map<string, string[]>()
  for (const update of updates) {
    const key = `${update.type}:${update.path}`
    if (!updatesByFile.has(key)) {
      updatesByFile.set(key, [])
    }
    updatesByFile.get(key)!.push(update.newContent)
  }

  const updatedFiles: string[] = []

  // Apply updates to each data file
  for (const [key, contents] of updatesByFile) {
    const [type, dataPath] = key.split(':')
    const targetFilePath = applyDataUpdates(
      type as 'reusable' | 'variable',
      dataPath,
      contents,
      verbose,
      dryRun,
    )
    if (targetFilePath) {
      updatedFiles.push(targetFilePath)
    }
  }

  return updatedFiles
}

/**
 * Extract data updates from resolved content blocks
 */
function extractDataUpdates(
  content: string,
  allowedTypes?: Array<'reusable' | 'variable'>,
): Array<{ type: 'reusable' | 'variable'; path: string; newContent: string }> {
  const updates: Array<{ type: 'reusable' | 'variable'; path: string; newContent: string }> = []

  let match
  while ((match = RESOLVED_PATTERN.exec(content)) !== null) {
    const [, type, dataPath, resolvedContent] = match
    const refType = type as 'reusable' | 'variable'

    // Only include if this type is allowed
    if (!allowedTypes || allowedTypes.includes(refType)) {
      // Check if this content was actually changed before including it
      try {
        const originalContent = loadDataValue(refType, dataPath.trim())
        if (originalContent !== null && resolvedContent.trim() !== originalContent.trim()) {
          // Only add to updates if content was actually changed
          updates.push({
            type: refType,
            path: dataPath.trim(),
            newContent: resolvedContent.trim(),
          })
        }
      } catch {
        // If we can't verify, assume it was changed to be safe
        updates.push({
          type: refType,
          path: dataPath.trim(),
          newContent: resolvedContent.trim(),
        })
      }
    }
  }

  return updates
}

/**
 * Apply updates to a specific data file
 * Returns the file path if file was updated, null otherwise
 */
function applyDataUpdates(
  type: 'reusable' | 'variable',
  dataPath: string,
  contents: string[],
  verbose?: boolean,
  dryRun?: boolean,
): string | null {
  const targetPath = getDataFilePath(type, dataPath)

  // Check if file exists
  if (!fs.existsSync(targetPath)) {
    if (verbose) {
      console.log(chalk.red(`  Error: Data file not found: ${targetPath}`))
    }
    return null
  }

  if (dryRun) {
    if (verbose) {
      console.log(chalk.blue(`  Would update: ${targetPath}`))
      if (contents.length > 1) {
        console.log(
          chalk.yellow(
            `    Warning: Multiple content blocks found for ${dataPath}, would use first one`,
          ),
        )
      }
      console.log(
        chalk.dim(
          `    New content: ${contents[0].substring(0, 100)}${contents[0].length > 100 ? '...' : ''}`,
        ),
      )
    } else {
      console.log(chalk.green(`  Updated: ${targetPath}`))
    }
    return targetPath // Return path even in dry run
  }

  try {
    if (type === 'reusable') {
      // For reusables, replace entire file content
      if (contents.length > 1) {
        console.log(
          chalk.yellow(`  Warning: Multiple content blocks found for ${dataPath}, using first one`),
        )
      }

      // Preserve original file's newline behavior
      const originalContent = fs.readFileSync(targetPath, 'utf8')
      const hasTrailingNewline = originalContent.endsWith('\n')
      const newContent =
        hasTrailingNewline && !contents[0].endsWith('\n') ? `${contents[0]}\n` : contents[0]

      fs.writeFileSync(targetPath, newContent)
      if (verbose) {
        console.log(chalk.green(`  Updated: ${targetPath}`))
      }
    } else {
      // For variables, update YAML structure
      const yamlContent = fs.readFileSync(targetPath, 'utf8')
      const data = yaml.load(yamlContent) as any

      // Navigate to the nested property
      const pathParts = dataPath.split('.')
      const propertyPath = pathParts.slice(1) // Skip the file name

      let current = data
      for (let i = 0; i < propertyPath.length - 1; i++) {
        if (!current[propertyPath[i]]) {
          current[propertyPath[i]] = {}
        }
        current = current[propertyPath[i]]
      }

      // Update the final property
      const finalKey = propertyPath[propertyPath.length - 1]
      if (contents.length > 1) {
        console.log(
          chalk.yellow(`  Warning: Multiple content blocks found for ${dataPath}, using first one`),
        )
      }
      current[finalKey] = contents[0]

      // Preserve original file's newline behavior for YAML
      const hasTrailingNewline = yamlContent.endsWith('\n')
      const yamlOutput = yaml.dump(data)
      const finalYaml =
        hasTrailingNewline && !yamlOutput.endsWith('\n') ? `${yamlOutput}\n` : yamlOutput

      // Write back to file
      fs.writeFileSync(targetPath, finalYaml)
      if (verbose) {
        console.log(chalk.green(`  Updated: ${targetPath}`))
      }
    }
    return targetPath
  } catch (error: any) {
    if (verbose) {
      console.log(chalk.red(`  Error updating ${targetPath}: ${error.message}`))
    }
    return null
  }
}

/**
 * Find all Liquid data references in content
 */
function findLiquidReferences(
  content: string,
  allowedTypes?: Array<'reusable' | 'variable'>,
): LiquidReference[] {
  const references: LiquidReference[] = []
  const types = allowedTypes || ['reusable', 'variable']

  // Pattern to match {% data reusables.path %} and {% data variables.path %}
  const liquidPattern = /{%\s*data\s+(reusables|variables)\.([^%]+)\s*%}/g

  let match
  while ((match = liquidPattern.exec(content)) !== null) {
    const [original, type, dataPath] = match
    const refType = type.slice(0, -1) as 'reusable' | 'variable' // Remove 's' from end

    // Only include if this type is allowed
    if (types.includes(refType)) {
      references.push({
        original,
        type: refType,
        path: dataPath.trim(),
        startIndex: match.index,
        endIndex: match.index + original.length,
      })
    }
  }

  return references
}

/**
 * Resolve a single Liquid data reference to its content
 */
async function resolveLiquidReference(
  ref: LiquidReference,
  verbose?: boolean,
): Promise<string | null> {
  try {
    if (ref.type === 'reusable') {
      return await resolveReusable(ref.path, verbose)
    } else if (ref.type === 'variable') {
      return await resolveVariable(ref.path, verbose)
    }
  } catch (error: any) {
    if (verbose) {
      console.log(chalk.red(`  Error resolving ${ref.type}: ${error.message}`))
    }
  }

  return null
}

/**
 * Resolve a reusable reference by reading the markdown file
 */
async function resolveReusable(reusablePath: string, verbose?: boolean): Promise<string | null> {
  const filePath = getDataFilePath('reusable', reusablePath)

  if (!fs.existsSync(filePath)) {
    if (verbose) {
      console.log(chalk.yellow(`  Reusable not found: ${reusablePath}`))
    }
    return null
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    // Remove any frontmatter if present
    const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\s*/, '')
    return contentWithoutFrontmatter.trim()
  } catch (error: any) {
    if (verbose) {
      console.log(chalk.yellow(`  Error reading reusable ${reusablePath}: ${error.message}`))
    }
    return null
  }
}

/**
 * Resolve a variable reference by reading from YAML files
 */
async function resolveVariable(variablePath: string, verbose?: boolean): Promise<string | null> {
  const pathParts = variablePath.split('.')

  if (pathParts.length < 2) {
    if (verbose) {
      console.log(chalk.yellow(`  Invalid variable path: ${variablePath}`))
    }
    return null
  }

  const filePath = getDataFilePath('variable', variablePath)

  if (!fs.existsSync(filePath)) {
    if (verbose) {
      console.log(chalk.yellow(`  Variable file not found: ${filePath}`))
    }
    return null
  }

  try {
    const yamlContent = fs.readFileSync(filePath, 'utf-8')
    const data = yaml.load(yamlContent) as Record<string, any>

    // Navigate through the key path to find the value
    const [, ...keyPath] = pathParts // Skip filename, get remaining path
    let value: any = data
    for (const key of keyPath) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key]
      } else {
        if (verbose) {
          console.log(chalk.yellow(`  Variable key not found: ${variablePath}`))
        }
        return null
      }
    }

    // Convert value to string
    if (typeof value === 'string') {
      return value
    } else if (value !== null && value !== undefined) {
      return String(value)
    } else {
      if (verbose) {
        console.log(chalk.yellow(`  Variable value is null/undefined: ${variablePath}`))
      }
      return null
    }
  } catch (error: any) {
    if (verbose) {
      console.log(chalk.yellow(`  Error parsing variable ${variablePath}: ${error.message}`))
    }
    return null
  }
}
