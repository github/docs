import fs from 'fs'

// Writes workflow artifacts to disk so later steps can upload or inspect them.
export async function uploadArtifact(name: string, contents: string) {
  if (!fs.existsSync('./artifacts')) {
    fs.mkdirSync('./artifacts/')
  }
  const filePath = `./artifacts/${name}`
  fs.writeFileSync(filePath, contents)
}
