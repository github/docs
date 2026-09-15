import fs from 'fs'

// Writes a string to a file for the workflow to upload as an artifact.
// Useful for debugging, or for passing results to a downstream action.
export async function uploadArtifact(name: string, contents: string) {
  if (!fs.existsSync('./artifacts')) {
    fs.mkdirSync('./artifacts/')
  }
  const filePath = `./artifacts/${name}`
  fs.writeFileSync(filePath, contents)
}
