const semver = require('semver')
const { engines } = require('../package.json')

/* istanbul ignore next */
if (!semver.satisfies(process.version, engines.node)) {
  console.error(`\n\nYou're using Node.js ${process.version}, but ${engines.node} is required`)
  console.error('Visit nodejs.org to download an installer for the latest LTS version.\n\n')
  process.exit()
}
