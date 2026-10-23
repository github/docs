export interface FrontmatterError {
  file: string
  message: string
}

// The structured logger prints warnings through console.log, so capture it too.
// Nothing reaches stdout, which keeps the JSON report clean.
export function captureConsole() {
  const originalError = console.error
  const originalWarn = console.warn
  const originalLog = console.log
  const output: string[] = []
  const collect = (...args: unknown[]) => {
    output.push(args.map(String).join(' '))
  }
  console.error = collect
  console.warn = collect
  console.log = collect
  return {
    output,
    restore() {
      console.error = originalError
      console.warn = originalWarn
      console.log = originalLog
    },
  }
}

// Match only the page-data.ts YAML fallback message so other logs with translation paths do not count.
const YAML_FALLBACK_PATTERN =
  /Unable to parse YAML frontmatter in (.+?\.md), falling back to English/

export function parseFrontmatterErrors(capturedOutput: string[]): FrontmatterError[] {
  const errors: FrontmatterError[] = []
  const seen = new Set<string>()
  for (const line of capturedOutput) {
    const fullPath = line.match(YAML_FALLBACK_PATTERN)?.[1]
    // Windows paths and logfmt escaping both add backslashes, so fold any run of them into one slash.
    const file = fullPath?.replace(/\\+/g, '/').match(/translations\/.+$/)?.[0]
    if (file && !seen.has(file)) {
      seen.add(file)
      errors.push({ file, message: 'YML parsing error' })
    }
  }
  return errors
}
