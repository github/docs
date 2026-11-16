import assert from 'assert'
import fs from 'fs'
import path from 'path'
import walk from 'walk-sync'
import { loadYaml } from '@/frame/lib/load-yaml'
import { isRegExp, setWith } from 'lodash-es'
import filenameToKey from './filename-to-key'
import matter from '@gr2m/gray-matter'

interface DataDirectoryOptions {
  preprocess?: (content: string) => string
  ignorePatterns?: RegExp[]
  extensions?: string[]
}

interface DataDirectoryResult {
  [key: string]: unknown
}

// dataDirectory uses setWith because lodash set creates arrays for numeric release-note paths.
// Example: release-notes.enterprise-server.2-20.0 must stay an object path.
// See https://lodash.com/docs#set.
export default function dataDirectory(
  dir: string,
  opts: DataDirectoryOptions = {},
): DataDirectoryResult {
  const defaultOpts: Required<DataDirectoryOptions> = {
    preprocess: (content: string) => {
      return content
    },
    ignorePatterns: [/README\.md$/i],
    extensions: ['.json', '.md', '.markdown', '.yml'],
  }

  const mergedOpts = Object.assign({}, defaultOpts, opts)

  assert(Array.isArray(mergedOpts.ignorePatterns))
  assert(mergedOpts.ignorePatterns.every(isRegExp))
  assert(Array.isArray(mergedOpts.extensions))
  assert(mergedOpts.extensions.length)

  const data: DataDirectoryResult = {}

  const filenames = walk(dir, { includeBasePath: true }).filter((filename: string) => {
    if (mergedOpts.ignorePatterns.some((pattern) => pattern.test(filename))) return false

    return mergedOpts.extensions.includes(path.extname(filename).toLowerCase())
  })

  const files: [string, string][] = filenames.map((filename: string) => [
    filename,
    fs.readFileSync(filename, 'utf8'),
  ])

  for (const [filename, fileContent] of files) {
    const key = filenameToKey(path.relative(dir, filename))
    const extension = path.extname(filename).toLowerCase()

    let processedContent = fileContent
    if (mergedOpts.preprocess) {
      processedContent = mergedOpts.preprocess(fileContent)
    }

    switch (extension) {
      case '.json':
        setWith(data, key, JSON.parse(processedContent), Object)
        break
      case '.yml':
        setWith(data, key, loadYaml(processedContent, { filename }), Object)
        break
      case '.md':
      case '.markdown':
        // Localized reusable Markdown can have frontmatter; strip it so content rendering hides it.
        setWith(data, key, matter(processedContent).content, Object)
        break
    }
  }

  return data
}
