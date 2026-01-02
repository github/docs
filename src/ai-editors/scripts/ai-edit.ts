#!/usr/bin/env node

import { fileURLToPath } from 'url'
import { Command } from 'commander'
import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'
import ora from 'ora'
import { callModelsApi } from '@/ai-editors/lib/call-models-api'
import dotenv from 'dotenv'
dotenv.config({ quiet: true })

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const promptDir = path.join(__dirname, '../prompts')

if (!process.env.GITHUB_TOKEN) {
  throw new Error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
}

interface ResponseTypes {
  rewrite: string
  list: string
  json: string
}

const responseTypes: ResponseTypes = {
  rewrite: 'Edit the versioning only. Return the edited content.',
  list: `Do NOT rewrite the content. Report your edits in numbered list format.`,
  json: `Do NOT rewrite the content. Report your edits as a JSON list, with the format { lineNumber, currentText, suggestion }.`,
}

const validResponseTypes = Object.keys(responseTypes) as Array<keyof ResponseTypes>

interface EditorType {
  promptFile: string
  description: string
}

interface EditorTypes {
  versioning: EditorType
  // TODO
  // scannability: EditorType
  // readability: EditorType
  // technical: EditorType
  // styleguide: EditorType
  // contentModels: EditorType
}

const editorTypes: EditorTypes = {
  versioning: {
    promptFile: 'versioning-editor.prompt.yml',
    description: 'Review against simplifying versioning guidelines.',
  },
  // TODO
  // scannability: {
  //   promptFile: 'scannability-editor.prompt.yml',
  //   description: 'Review against scannability guidelines.',
  // },
  // readability: {
  //   promptFile: 'readability-editor.prompt.yml',
  //   description:
  //     'Review against readability criteria like Gunning Fog index, Hemingway, word count, sentence length, etc.',
  // },
  // technical: {
  //   promptFile: 'technical-editor.prompt.yml',
  //   description: 'Review against provided product information for technical accuracy.',
  // },
  // styleguide: {
  //   promptFile: 'styleguide-editor.prompt.yml',
  //   description: 'Review against the GitHub Docs style guide.',
  // },
  // contentModels: {
  //   promptFile: 'content-models-editor.prompt.yml',
  //   description: 'Review against the GitHub Docs content models.',
  // },
  // Add more here...
}

const editorDescriptions = (): string => {
  let str = '\n\n'
  Object.entries(editorTypes).forEach(([ed, edObj]) => {
    str += `\t${ed}\n\t\t\t${edObj.description}\n\n`
  })
  return str
}

interface CliOptions {
  verbose?: boolean
  editor?: Array<keyof EditorTypes>
  response?: keyof ResponseTypes
  files: string[]
}

const program = new Command()

program
  .name('ai-edit')
  .description('Edit content files using AI')
  .option('-v, --verbose', 'Enable verbose output')
  .option(
    '-e, --editor <type...>',
    `Specify one or more editor type: ${editorDescriptions().trimEnd()}\n`,
  )
  .option(
    '-r, --response <type>',
    `Specify response type: ${validResponseTypes.join(', ')} (default: rewrite)`,
  )
  .requiredOption(
    '-f, --files <files...>',
    'One or more content file paths in the content directory',
  )
  .action((options: CliOptions) => {
    ;(async () => {
      const spinner = ora('Starting AI review...').start()

      const files = options.files
      const editors = options.editor || ['versioning']
      const response = options.response || 'rewrite'

      let responseTypeInstruction: string
      if (validResponseTypes.includes(response)) {
        responseTypeInstruction = responseTypes[response]
      } else {
        console.error(
          `Invalid response type: ${response}. Must be one of: ${validResponseTypes.join(', ')}`,
        )
        process.exit(1)
      }

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
            spinner.text = `Running the AI-powered ${editorType} editor...`
            const answer = await callEditor(editorType, responseTypeInstruction, content)

            if (response === 'rewrite') {
              fs.writeFileSync(file, answer, 'utf-8')
              spinner.succeed(`Processed file: ${file}`)
              console.log(`To see changes, run "git diff" on the file.`)
            } else {
              spinner.succeed(`Processed file: ${file}`)
              console.log(answer)
            }
          }
        } catch (err) {
          const error = err as Error
          spinner.fail(`Error processing file ${file}: ${error.message}`)
          process.exitCode = 1
        }
      }
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
  responseTypeInstruction: string,
  content: string,
): Promise<string> {
  const promptName = editorTypes[editorType].promptFile
  const promptPath = path.join(promptDir, promptName)
  const prompt = yaml.load(fs.readFileSync(promptPath, 'utf8')) as PromptData

  prompt.messages.forEach((msg) => {
    msg.content = msg.content.replace('{{responseTypeInstruction}}', responseTypeInstruction)
    msg.content = msg.content.replace('{{input}}', content)
  })

  return callModelsApi(prompt)
}
