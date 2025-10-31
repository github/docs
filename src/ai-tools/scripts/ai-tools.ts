import { fileURLToPath } from 'url'
import { Command } from 'commander'
import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'
import ora from 'ora'
import { execSync } from 'child_process'
import { callModelsApi } from '@/ai-tools/lib/call-models-api'
import dotenv from 'dotenv'
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

interface EditorType {
  description: string
}

interface EditorTypes {
  versioning: EditorType
  intro: EditorType
}

const editorTypes: EditorTypes = {
  versioning: {
    description: 'Refine versioning according to simplification guidance.',
  },
  intro: {
    description: 'Refine intro frontmatter based on SEO and content guidelines.',
  },
}

const refinementDescriptions = (): string => {
  let str = '\n\n'
  Object.entries(editorTypes).forEach(([ed, edObj]) => {
    str += `  ${ed.padEnd(12)} ${edObj.description}\n`
  })
  return str
}

interface CliOptions {
  verbose?: boolean
  refine: Array<keyof EditorTypes>
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
  .requiredOption(
    '-r, --refine <type...>',
    `Specify one or more refinement type: ${refinementDescriptions().trimEnd()}\n`,
  )
  .requiredOption(
    '-f, --files <files...>',
    'One or more content file paths in the content directory',
  )
  .action((options: CliOptions) => {
    ;(async () => {
      const spinner = ora('Starting AI review...').start()

      const files = options.files
      const editors = options.refine

      for (const file of files) {
        const filePath = path.resolve(process.cwd(), file)
        spinner.text = `Checking file: ${file}`

        if (!fs.existsSync(filePath)) {
          spinner.fail(`File not found: ${filePath}`)
          process.exitCode = 1
          continue
        }

        try {
          spinner.text = `Reading file: ${file}`
          const content = fs.readFileSync(filePath, 'utf8')

          for (const editorType of editors) {
            spinner.text = `Running the AI-powered ${editorType} refinement...`
            const answer = await callEditor(editorType, content, options.write || false)
            spinner.stop()

            if (options.write) {
              // Write the result back to the original file
              fs.writeFileSync(filePath, answer, 'utf8')
              console.log(`✅ Updated: ${file}`)
            } else {
              // Just output to console (current behavior)
              console.log(answer)
            }
          }
        } catch (err) {
          const error = err as Error
          spinner.fail(`Error processing file ${file}: ${error.message}`)
          process.exitCode = 1
        }
      }

      spinner.stop()
    })()
  })

program.parse(process.argv)

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

async function callEditor(
  editorType: keyof EditorTypes,
  content: string,
  writeMode: boolean,
): Promise<string> {
  const markdownPromptPath = path.join(promptDir, `${editorType}.md`)
  let markdownPrompt = fs.readFileSync(markdownPromptPath, 'utf8')

  // For intro type in write mode, append special instructions
  if (editorType === 'intro' && writeMode) {
    markdownPrompt +=
      '\n\n**WRITE MODE**: Output only the complete updated file content with the new intro in the frontmatter. Do not include analysis or explanations - just return the file ready to write.'
  }

  const prompt = yaml.load(fs.readFileSync(promptTemplatePath, 'utf8')) as PromptData

  prompt.messages.forEach((msg) => {
    msg.content = msg.content.replace('{{markdownPrompt}}', markdownPrompt)
    msg.content = msg.content.replace('{{input}}', content)
  })

  return callModelsApi(prompt)
}
