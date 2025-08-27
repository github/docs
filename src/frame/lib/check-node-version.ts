import fs from 'fs'
import semver from 'semver'

export function checkNodeVersion() {
  const packageFile = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
  const { engines } = packageFile

  if (!semver.satisfies(process.version, engines.node)) {
    console.error(
      `\n\nYou're using Node.js ${process.version.replace(/^v/, '')} but this project requires ${
        engines.node
      }`,
    )
    console.error('Visit nodejs.org to download an installer that meets these requirements.\n\n')
    process.exit(1)
  }
}
