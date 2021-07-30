import semver from 'semver'
import path from 'path'
import readFileAsync from './readfile-async.js'

const packageFile = JSON.parse(await readFileAsync(path.join(process.cwd(), './package.json')))
const { engines } = packageFile

/* istanbul ignore next */
if (!semver.satisfies(process.version, engines.node)) {
  console.error(`\n\nYou're using Node.js ${process.version}, but ${engines.node} is required`)
  console.error('Visit nodejs.org to download an installer for the latest LTS version.\n\n')
  process.exit(1)
}
