/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs'

/* Writes string to file to be uploaded as an action artifact.
 * Useful for debugging or passing results to downstream action
 *
 * @param {string} name - name of artifact
 * @param {string} contents - string contents of artifact
 */
export async function uploadArtifact(name, contents) {
  if (!fs.existsSync('./artifacts')) {
    fs.mkdirSync('./artifacts/')
  }
  const filePath = `./artifacts/${name}`
  fs.writeFileSync(filePath, contents)
}
