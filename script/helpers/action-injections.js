/*
 * Dependency injection for scripts that call .github/actions/ code
 * Replaces action platform specific functionality with local machine functionality
 */

import fs from 'fs'
import path from 'path'
import chalk from 'chalk'

import github from './github.js'

// Directs core logging to console
export function getCoreInject(debug) {
  return {
    info: console.log,
    debug: (message) => (debug ? console.warn(chalk.blue(message)) : {}),
    warning: (message) => console.warn(chalk.yellow(message)),
    error: console.error,
    setOutput: (name, value) => {
      if (debug) {
        console.log(`Output "${name}" set to: "${value}"`)
      }
    },
    setFailed: (message) => {
      if (debug) {
        console.log('setFailed called.')
      }
      throw new Error(message)
    },
  }
}

// Writes strings that would be uploaded as artifacts to a local logs/ directory
const cwd = new URL('', import.meta.url).pathname
const logsPath = path.join(cwd, '..', '..', 'logs')
if (!fs.existsSync(logsPath)) {
  fs.mkdirSync(logsPath)
}
export function getUploadArtifactInject(debug) {
  return (name, contents) => {
    const logFilename = path.join(logsPath, `${new Date().toISOString().substr(0, 16)}-${name}`)
    if (debug) {
      fs.writeFileSync(logFilename, contents)
      console.log(`${name} artifact upload written to ${logFilename}`)
    } else {
      console.log(`Debug not enabled. ${name} artifact NOT written to ${logFilename}`)
    }
  }
}

// Uses local process.env GITHUB_TOKEN to create an octokit instance
export const octokitInject = github()
