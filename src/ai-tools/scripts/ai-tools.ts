import { fileURLToPath } from 'url'
import { Command } from 'commander'
import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'
import ora from 'ora'
import { execSync } from 'child_process'
import { callModelsApi } from '@/ai-tools/lib/call-models-api'
import dotenv from 'dotenv'
import readFrontmatter from '@/frame/lib/read-frontmatter'
import { schema } from '@/frame/lib/frontmatter'
dotenv.config({ quiet: true })

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const promptDir = path.join(__dirname, '../prompts')
const promptTemplatePath = path.join(promptDir, 'prompt-template.yml')

if (!process.env.GITHUB_TOKEN) {
  // Try to find a token via the CLI before throwing an error
  const token = execSync('gh auth token').toString()
  if (token.startsWith('gh')) {
    process.env.GITHUB_TOKEN = token
  } else {
    console.warn(`🔑 A token is needed to run this script. Please do one of the following and try again:

1. Add a GITHUB_TOKEN to a local .env file.
2. Install https://cli.github.com and authenticate via 'gh auth login'.
    `)
    process.exit(1)
  }
}

// Dynamically discover available editor types from prompt files
const getAvailableEditorTypes = (): string[] => {
  const editorTypes: string[] = []

  try {
    const promptFiles = fs.readdirSync(promptDir)
    for (const file of promptFiles) {
      if (file.endsWith('.md')) {
        const editorName = path.basename(file, '.md')
        editorTypes.push(editorName)
      }
    }
  } catch {
    console.warn('Could not read prompts directory, using empty editor types')
  }

  return editorTypes
}

const editorTypes = getAvailableEditorTypes()

// Enhanced recursive markdown file finder with symlink, depth, and root path checks
const findMarkdownFiles = (
  dir: string,
  rootDir: string,
  depth: number = 0,
  maxDepth: number = 20,
  visited: Set<string> = new Set(),
): string[] => {
  const markdownFiles: string[] = []
  let realDir: string
  try {
    realDir = fs.realpathSync(dir)
  } catch {
    // If we can't resolve real path, skip this directory
    return []
  }
  // Prevent escaping root directory
  if (!realDir.startsWith(rootDir)) {
    return []
  }
  // Prevent symlink loops
  if (visited.has(realDir)) {
    return []
  }
  visited.add(realDir)
  // Prevent excessive depth
  if (depth > maxDepth) {
    return []
  }
  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(realDir, { withFileTypes: true })
  } catch {
    // If we can't read directory, skip
    return []
  }
  for (const entry of entries) {
    const fullPath = path.join(realDir, entry.name)
    let realFullPath: string
    try {
      realFullPath = fs.realpathSync(fullPath)
    } catch {
      continue
    }
    // Prevent escaping root directory for files
    if (!realFullPath.startsWith(rootDir)) {
      continue
    }
    if (entry.isDirectory()) {
      markdownFiles.push(...findMarkdownFiles(realFullPath, rootDir, depth + 1, maxDepth, visited))
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      markdownFiles.push(realFullPath)
    }
  }
  return markdownFiles
}

const refinementDescriptions = (): string => {
  return editorTypes.join(', ')
}

interface CliOptions {
  verbose?: boolean
  prompt?: string[]
  refine?: string[]
  files: string[]
  write?: boolean
}

const program = new Command()

program
  .name('ai-tools')
  .description('AI-powered content tools for editing and analysis')
  .option('-v, --verbose', 'Enable verbose output')
  .option(
    '-w, --write',
    'Write changes back to the original files (default: output to console only)',
  )
  .option('-p, --prompt <type...>', `Specify one or more prompt type: ${refinementDescriptions()}`)
  .option(
    '-r, --refine <type...>',
    `(Deprecated: use --prompt) Specify one or more prompt type: ${refinementDescriptions()}`,
  )
  .requiredOption(
    '-f, --files <files...>',
    'One or more content file paths in the content directory',
  )
  .action((options: CliOptions) => {
    ;(async () => {
      const spinner = ora('Starting AI review...').start()

      const files = options.files
      // Handle both --prompt and --refine options for backwards compatibility
      const prompts = options.prompt || options.refine

      if (!prompts || prompts.length === 0) {
        spinner.fail('No prompt type specified. Use --prompt or --refine with one or more types.')
        process.exitCode = 1
        return
      }

      // Validate that all requested editor types exist
      const availableEditors = editorTypes
      for (const editor of prompts) {
        if (!availableEditors.includes(editor)) {
          spinner.fail(
            `Unknown prompt type: ${editor}. Available types: ${availableEditors.join(', ')}`,
          )
          process.exitCode = 1
          return
        }
      }

      if (options.verbose) {
        console.log(`Processing ${files.length} files with prompts: ${prompts.join(', ')}`)
      }

      for (const file of files) {
        const filePath = path.resolve(process.cwd(), file)
        spinner.text = `Checking file: ${file}`

        if (!fs.existsSync(filePath)) {
          spinner.fail(`File not found: ${filePath}`)
          process.exitCode = 1
          continue
        }

        // Check if it's a directory
        const isDirectory = fs.statSync(filePath).isDirectory()

        for (const editorType of prompts) {
          try {
            // For other editor types, process individual files
            const filesToProcess: string[] = []

            if (isDirectory) {
              // Find all markdown files in the directory recursively
              // Use process.cwd() as the root directory for safety
              const rootDir = fs.realpathSync(process.cwd())
              filesToProcess.push(...findMarkdownFiles(filePath, rootDir))

              if (filesToProcess.length === 0) {
                spinner.warn(`No markdown files found in directory: ${file}`)
                continue
              }

              spinner.text = `Found ${filesToProcess.length} markdown files in ${file}`
            } else {
              filesToProcess.push(filePath)
            }

            spinner.start()
            for (const fileToProcess of filesToProcess) {
              const relativePath = path.relative(process.cwd(), fileToProcess)
              spinner.text = `Processing: ${relativePath}`
              try {
                const content = fs.readFileSync(fileToProcess, 'utf8')
                const answer = await callEditor(
                  editorType,
                  content,
                  options.write || false,
                  options.verbose || false,
                )
                spinner.stop()

                if (options.write) {
                  if (editorType === 'intro') {
                    // For frontmatter addition/modification, merge properties instead of overwriting entire file
                    const updatedContent = mergeFrontmatterProperties(fileToProcess, answer)
                    fs.writeFileSync(fileToProcess, updatedContent, 'utf8')
                    console.log(`✅ Added frontmatter properties to: ${relativePath}`)
                  } else {
                    // For other editor types, write the full result back to the original file
                    fs.writeFileSync(fileToProcess, answer, 'utf8')
                    console.log(`✅ Updated: ${relativePath}`)
                  }
                } else {
                  // Just output to console (current behavior)
                  if (filesToProcess.length > 1) {
                    console.log(`\n=== ${relativePath} ===`)
                  }
                  console.log(answer)
                }
              } catch (err) {
                const error = err as Error
                spinner.fail(`Error processing ${relativePath}: ${error.message}`)
                process.exitCode = 1
              } finally {
                spinner.stop()
              }
            }
          } catch (err) {
            const error = err as Error
            const targetName = path.relative(process.cwd(), filePath)
            spinner.fail(`Error processing ${targetName}: ${error.message}`)
            process.exitCode = 1
          }
        }
      }

      spinner.stop()

      // Exit with appropriate code based on whether any errors occurred
      if (process.exitCode) {
        process.exit(process.exitCode)
      }
    })()
  })

program.parse(process.argv)

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n🛑 Process interrupted by user')
  process.exit(0)
})

process.on('SIGTERM', () => {
  console.log('\n\n🛑 Process terminated')
  process.exit(0)
})

interface PromptMessage {
  content: string
  role: string
}

interface PromptData {
  messages: PromptMessage[]
  model?: string
  temperature?: number
  max_tokens?: number
}

// Function to merge new frontmatter properties into existing file while preserving formatting
function mergeFrontmatterProperties(filePath: string, newPropertiesYaml: string): string {
  const content = fs.readFileSync(filePath, 'utf8')
  const parsed = readFrontmatter(content)

  if (parsed.errors && parsed.errors.length > 0) {
    throw new Error(
      `Failed to parse frontmatter: ${parsed.errors.map((e) => e.message).join(', ')}`,
    )
  }

  if (!parsed.content) {
    throw new Error('Failed to parse content from file')
  }

  try {
    // Clean up the AI response - remove markdown code blocks if present
    let cleanedYaml = newPropertiesYaml.trim()
    cleanedYaml = cleanedYaml.replace(/^```ya?ml\s*\n/i, '')
    cleanedYaml = cleanedYaml.replace(/\n```\s*$/i, '')
    cleanedYaml = cleanedYaml.trim()

    interface FrontmatterProperties {
      intro?: string
      [key: string]: unknown
    }
    const newProperties = yaml.load(cleanedYaml) as FrontmatterProperties

    // Security: Validate against prototype pollution using the official frontmatter schema
    const allowedKeys = Object.keys(schema.properties)

    const sanitizedProperties = Object.fromEntries(
      Object.entries(newProperties).filter(([key]) => {
        if (allowedKeys.includes(key)) {
          return true
        }
        console.warn(`Filtered out potentially unsafe frontmatter key: ${key}`)
        return false
      }),
    )

    // Merge new properties with existing frontmatter
    const mergedData: FrontmatterProperties = { ...parsed.data, ...sanitizedProperties }

    // Manually ensure intro is wrapped in single quotes in the final output
    let result = readFrontmatter.stringify(parsed.content, mergedData)

    // Post-process to ensure intro field has single quotes
    if (newProperties.intro) {
      const introValue = newProperties.intro.toString()
      // Replace any quote style on intro with single quotes
      result = result.replace(
        /^intro:\s*(['"`]?)([^'"`\n\r]+)\1?\s*$/m,
        `intro: '${introValue.replace(/'/g, "''")}'`, // Escape single quotes by doubling them
      )
    }
    return result
  } catch (error) {
    console.error('Failed to parse AI response as YAML:')
    console.error('Raw AI response:', JSON.stringify(newPropertiesYaml))
    throw new Error(`Failed to parse new frontmatter properties: ${error}`)
  }
}

async function callEditor(
  editorType: string,
  content: string,
  writeMode: boolean,
  verbose = false,
): Promise<string> {
  const markdownPromptPath = path.join(promptDir, `${String(editorType)}.md`)

  if (!fs.existsSync(markdownPromptPath)) {
    throw new Error(`Prompt file not found: ${markdownPromptPath}`)
  }

  const markdownPrompt = fs.readFileSync(markdownPromptPath, 'utf8')

  const prompt = yaml.load(fs.readFileSync(promptTemplatePath, 'utf8')) as PromptData

  // Validate the prompt template has required properties
  if (!prompt.messages || !Array.isArray(prompt.messages)) {
    throw new Error('Invalid prompt template: missing or invalid messages array')
  }

  for (const msg of prompt.messages) {
    msg.content = msg.content.replace('{{markdownPrompt}}', markdownPrompt)
    msg.content = msg.content.replace('{{input}}', content)
    // Replace writeMode template variable with simple string replacement
    msg.content = msg.content.replace(
      /<!-- IF_WRITE_MODE -->/g,
      writeMode ? '' : '<!-- REMOVE_START -->',
    )
    msg.content = msg.content.replace(
      /<!-- ELSE_WRITE_MODE -->/g,
      writeMode ? '<!-- REMOVE_START -->' : '',
    )
    msg.content = msg.content.replace(
      /<!-- END_WRITE_MODE -->/g,
      writeMode ? '' : '<!-- REMOVE_END -->',
    )

    // Remove sections marked for removal
    msg.content = msg.content.replace(/<!-- REMOVE_START -->[\s\S]*?<!-- REMOVE_END -->/g, '')
  }

  return callModelsApi(prompt, verbose)
}
