import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export function loadTemplate(templateName: string): string {
  const templatePath = join(__dirname, '../templates', templateName)
  return readFileSync(templatePath, 'utf8')
}
