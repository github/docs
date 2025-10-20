import fs from 'fs/promises'

import encodeBracketedParentheses from './encode-bracketed-parentheses'
import fm from './frontmatter'

/**
 * Read only the frontmatter from  file
 */
// Using any type for return value because frontmatter structure is complex and varies
export default async function fmfromf(filepath: string): Promise<any> {
  let fileContent: string = await fs.readFile(filepath, 'utf8')

  fileContent = encodeBracketedParentheses(fileContent)

  return fm(fileContent, { filepath })
}
