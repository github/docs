// Scripts that call .github/actions code locally use these Actions-platform replacements.

import fs from 'fs'
import path from 'path'
import chalk from 'chalk'

import github from '@/workflows/github'

export type CoreInject = {
  info: (message: string) => void
  debug: (message: string) => void
  warning: (message: string) => void
  error: (message: string) => void
  setOutput: (name: string, value: unknown) => void
  setFailed: (message: string) => void
}
export function getCoreInject(debug: boolean): CoreInject {
  return {
    info: console.log,
    debug: (message: string) => (debug ? console.warn(chalk.blue(message)) : {}),
    warning: (message: string) => console.warn(chalk.yellow(message)),
    error: console.error,
    setOutput: (name: string, value: unknown) => {
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

// Local runs write would-be artifacts to logs/ when debug output is enabled.
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

// Local scripts authenticate with process.env.GITHUB_TOKEN through the shared GitHub client.
export const octokitInject = github()
