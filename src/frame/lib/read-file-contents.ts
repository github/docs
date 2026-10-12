import fs from 'fs/promises'

import encodeBracketedParentheses from './encode-bracketed-parentheses'
import fm from './frontmatter'

// Local development skips caching so content changes appear immediately.
const fmCache =
  process.env.NODE_ENV === 'production' ? new Map<string, ReturnType<typeof fm>>() : null

export default async function fmfromf(filepath: string): Promise<ReturnType<typeof fm>> {
  const cached = fmCache?.get(filepath)
  if (cached) return cached

  let fileContent: string = await fs.readFile(filepath, 'utf8')
  fileContent = encodeBracketedParentheses(fileContent)
  const result = fm(fileContent, { filepath })
  fmCache?.set(filepath, result)
  return result
}
