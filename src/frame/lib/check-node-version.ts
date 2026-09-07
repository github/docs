import fs from 'fs'
import semver from 'semver'

import { createLogger } from '@/observability/logger'
const logger = createLogger(import.meta.url)

export function checkNodeVersion() {
  const packageFile = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
  const { engines } = packageFile

  if (!semver.satisfies(process.version, engines.node)) {
    logger.error(
      `You're using Node.js ${process.version.replace(/^v/, '')} but this project requires ${
        engines.node
      }`,
      { currentVersion: process.version, requiredVersion: engines.node },
    )
    logger.error('Visit nodejs.org to download an installer that meets these requirements.')
    process.exit(1)
  }
}
