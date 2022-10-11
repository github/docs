import semver from 'semver'
import fs from 'fs'
import path from 'path'

const packageFile = JSON.parse(fs.readFileSync(path.join(process.cwd(), './package.json')))
const { engines } = packageFile

/* istanbul ignore next */
if (!semver.satisfies(process.version, engines.node)) {
  console.error(`\n\nYou're using Node.js ${process.version}, but ${engines.node} is required`)
  console.error('Visit nodejs.org to download an installer for the latest LTS version.\n\n')
  process.exit(1)
}
