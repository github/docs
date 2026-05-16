import { fileURLToPath } from 'url'
import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'
import readFrontmatter from '@/frame/lib/read-frontmatter'
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
 * Enrich context for intro prompt on index.md files
 */
export function enrichIndexContext(filePath: string, content: string): string {
  if (!filePath.endsWith('index.md')) return content

  try {
    const { data } = readFrontmatter(content)
    if (!data) return content

    // Extract product name from file path (e.g., content/github-models/ -> "GitHub Models")
    const productMatch = filePath.replace(/\\/g, '/').match(/content\/([^/]+)/)
    const productName = productMatch
      ? productMatch[1]
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ')
      : ''

    // Get child article titles
    const titles: string[] = []
    if (data.children && Array.isArray(data.children)) {
      const dir = path.dirname(filePath)
      for (const childPath of data.children.slice(0, 20)) {
        try {
          const childFile = path.join(dir, `${childPath.replace(/^\//, '')}.md`)
          const childContent = fs.readFileSync(childFile, 'utf8')
          const { data: childData } = readFrontmatter(childContent)
          if (childData?.title) titles.push(childData.title)
        } catch (error) {
          if (process.env.AI_TOOLS_VERBOSE === 'true') {
            console.warn('Failed to read or parse child article for intro context:', {
              filePath,
              childPath,
              error,
            })
          }
        }
      }
    }

    // Build context note
    const parts: string[] = []
    if (productName) parts.push(`Product: ${productName}`)
    if (titles.length > 0) parts.push(`Child articles: ${titles.join(', ')}`)

    if (parts.length > 0) {
      return `\n\n---\nContext for intro generation:\n${parts.join('\n')}\n---\n\n${content}`
    }
  } catch (error) {
    if (process.env.AI_TOOLS_VERBOSE === 'true') {
      console.warn('Failed to enrich index context for intro generation:', {
        filePath,
        error,
      })
    }
  }

  return content
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
