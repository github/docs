import fs from 'fs/promises'

import encodeBracketedParentheses from './encode-bracketed-parentheses'
import fm from './frontmatter'

// Only cache on production so content folks still see changes faster on local dev
const fmCache =
  process.env.NODE_ENV === 'production' ? new Map<string, ReturnType<typeof fm>>() : null

/**
 * Read only the frontmatter from  file
 */
export default async function fmfromf(filepath: string): Promise<ReturnType<typeof fm>> {
  const cached = fmCache?.get(filepath)
  if (cached) return cached

  let fileContent: string = await fs.readFile(filepath, 'utf8')
  fileContent = encodeBracketedParentheses(fileContent)
  const result = fm(fileContent, { filepath })
  fmCache?.set(filepath, result)
  return result
}
