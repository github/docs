import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default function getExceptionRedirects() {
  const exceptions = {}
  const exceptionRedirectsLines = fs
    .readFileSync(path.join(__dirname, './static/redirect-exceptions.txt'), 'utf-8')
    .split('\n')
    .filter(Boolean)
    .map((line) => line.trim())
    .filter((line) => !line.startsWith('#'))

  let parent = null
  for (const line of exceptionRedirectsLines) {
    if (line.startsWith('-')) {
      if (!parent) {
        throw new Error("first line can't start with a `-`")
      }
      exceptions[line.slice(1).trim()] = parent
    } else {
      parent = line
    }
  }

  return exceptions
}
