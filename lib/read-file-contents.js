const fs = require('fs')
const encodeBracketedParentheses = require('./encode-bracketed-parentheses')
const fm = require('./frontmatter')

/**
 * Read only the frontmatter from  file
 */
module.exports = async function fmfromf (filepath, languageCode) {
  let fileContent = await fs.promises.readFile(filepath, 'utf8')

  fileContent = encodeBracketedParentheses(fileContent)

  // TODO remove this when crowdin-support issue 66 has been resolved
  if (languageCode !== 'en' && fileContent.includes(': verdadero')) {
    fileContent = fileContent.replace(': verdadero', ': true')
  }

  return fm(fileContent, { filepath })
}
