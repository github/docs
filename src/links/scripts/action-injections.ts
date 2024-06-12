/*
 * Dependency injection for scripts that call .github/actions/ code
 * Replaces action platform specific functionality with local machine functionality
 */

import fs from 'fs'
import path from 'path'
import chalk from 'chalk'

import github from '@/workflows/github.js'

export type CoreInject = {
  info: (message: string) => void
  debug: (message: string) => void
  warning: (message: string) => void
  error: (message: string) => void
  setOutput: (name: string, value: any) => void
  setFailed: (message: string) => void
}
// Directs core logging to console
export function getCoreInject(debug: boolean): CoreInject {
  return {
    info: console.log,
    debug: (message: string) => (debug ? console.warn(chalk.blue(message)) : {}),
    warning: (message: string) => console.warn(chalk.yellow(message)),
    error: console.error,
    setOutput: (name: string, value: any) => {
      if (debug) {
        console.log(`Output "${name}" set to: "${value}"`)
      }
    },
    setFailed: (message: string) => {
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
export function getUploadArtifactInject(debug: boolean) {
  return (name: string, contents: string) => {
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
