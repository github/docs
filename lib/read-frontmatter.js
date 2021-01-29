const fs = require('fs')
const fm = require('./frontmatter')

const endLine = '\n---\n'

/**
 * Reads the given filepath, but only up until `endLine`, using streams to
 * read each chunk and close the stream early.
 */
async function readFrontmatter (filepath) {
  const readStream = fs.createReadStream(filepath, { encoding: 'utf8', emitClose: true })
  return new Promise((resolve, reject) => {
    let frontmatter = ''
    readStream
      .on('data', function (chunk) {
        const endOfFrontmatterIndex = chunk.indexOf(endLine)
        if (endOfFrontmatterIndex !== -1) {
          frontmatter += chunk.slice(0, endOfFrontmatterIndex + endLine.length)
          // Stop early!
          readStream.destroy()
        } else {
          frontmatter += chunk
        }
      })
      .on('error', (error) => reject(error))
      // Stream has been destroyed and file has been closed
      .on('close', () => resolve(frontmatter))
  })
}

/**
 * Read only the frontmatter from a file
 */
module.exports = async function fmfromf (filepath, languageCode) {
  let fileContent = filepath.endsWith('index.md')
    // For index files, we need to read the whole file because they contain ToC info
    ? await fs.promises.readFile(filepath, 'utf8')
    // For everything else, only read the frontmatter
    : await readFrontmatter(filepath)

  // TODO remove this when crowdin-support issue 66 has been resolved
  if (languageCode !== 'en' && fileContent.includes(': verdadero')) {
    fileContent = fileContent.replace(': verdadero', ': true')
  }

  return fm(fileContent, { filepath })
}
