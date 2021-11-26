import readFileAsync from './readfile-async.js'
import encodeBracketedParentheses from './encode-bracketed-parentheses.js'
import fm from './frontmatter.js'

/**
 * Read only the frontmatter from  file
 */
export default async function fmfromf(filepath, languageCode) {
  let fileContent = await readFileAsync(filepath, 'utf8')

  fileContent = encodeBracketedParentheses(fileContent)

  // TODO remove this when crowdin-support issue 66 has been resolved
  if (languageCode !== 'en' && fileContent.includes(': verdadero')) {
    fileContent = fileContent.replace(': verdadero', ': true')
  }

  return fm(fileContent, { filepath })
}
