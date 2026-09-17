import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Loads a Liquid template file from src/article-api/templates, for use by
// transformers.
export function loadTemplate(templateName: string): string {
  const templatePath = join(__dirname, '../templates', templateName)
  return readFileSync(templatePath, 'utf8')
}
