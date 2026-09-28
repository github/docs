import fs from 'fs'

type Redirects = Record<string, string>

// Exception redirect files use bare destinations followed by - source lines.
// Lines starting with # are comments.
export default function getExceptionRedirects(exceptionsTxtFile: string): Redirects {
  const exceptions: Redirects = {}
  const exceptionRedirectsLines = fs
    .readFileSync(exceptionsTxtFile, 'utf-8')
    .split('\n')
    .filter(Boolean)
    .map((line) => line.trim())
    .filter((line) => !line.startsWith('#'))

  let parent: string | null = null
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
