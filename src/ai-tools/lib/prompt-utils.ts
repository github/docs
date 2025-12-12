import { fileURLToPath } from 'url'
import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'
import { callModelsApi } from '@/ai-tools/lib/call-models-api'

export interface PromptMessage {
  content: string
  role: string
}

export interface PromptData {
  messages: PromptMessage[]
  model?: string
  temperature?: number
  max_tokens?: number
}

/**
 * Get the prompts directory path
 */
export function getPromptsDir(): string {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  return path.join(__dirname, '../prompts')
}

/**
 * Dynamically discover available editor types from prompt files
 */
export function getAvailableEditorTypes(promptDir: string): string[] {
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

/**
 * Get formatted description of available refinement types
 */
export function getRefinementDescriptions(editorTypes: string[]): string {
  return editorTypes.join(', ')
}

/**
 * Call an editor with the given content and options
 */
export async function callEditor(
  editorType: string,
  content: string,
  promptDir: string,
  writeMode: boolean,
  verbose = false,
  promptContent?: string, // Optional: use this instead of reading from file
): Promise<string> {
  let markdownPrompt: string

  if (promptContent) {
    // Use provided prompt content (e.g., from Copilot Space)
    markdownPrompt = promptContent
  } else {
    // Read from file
    const markdownPromptPath = path.join(promptDir, `${editorType}.md`)

    if (!fs.existsSync(markdownPromptPath)) {
      throw new Error(`Prompt file not found: ${markdownPromptPath}`)
    }

    markdownPrompt = fs.readFileSync(markdownPromptPath, 'utf8')
  }
  const promptTemplatePath = path.join(promptDir, 'prompt-template.yml')

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
