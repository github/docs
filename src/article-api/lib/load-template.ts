import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

// Get the directory path for the transformers directory
// This will be used to resolve template paths relative to transformers
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * Load a template file from the templates directory
 *
 * This helper loads Liquid template files used by transformers.
 * Templates are located in src/article-api/templates/
 *
 * @param templateName - The name of the template file (e.g., 'landing-page.template.md')
 * @returns The template content as a string
 *
 * @example
 * ```typescript
 * const template = loadTemplate('landing-page.template.md')
 * const rendered = await renderContent(template, context)
 * ```
 */
export function loadTemplate(templateName: string): string {
  // Templates are in ../templates relative to the lib directory
  // lib is at src/article-api/lib
  // templates is at src/article-api/templates
  const templatePath = join(__dirname, '../templates', templateName)
  return readFileSync(templatePath, 'utf8')
}
