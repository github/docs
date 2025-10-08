import assert from 'assert'
import fs from 'fs'
import path from 'path'
import walk from 'walk-sync'
import yaml from 'js-yaml'
import { isRegExp, setWith } from 'lodash-es'
import filenameToKey from './filename-to-key'
import matter from '@gr2m/gray-matter'

interface DataDirectoryOptions {
  preprocess?: (content: string) => string
  ignorePatterns?: RegExp[]
  extensions?: string[]
}

interface DataDirectoryResult {
  [key: string]: any
}

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

  // validate input
  assert(Array.isArray(mergedOpts.ignorePatterns))
  assert(mergedOpts.ignorePatterns.every(isRegExp))
  assert(Array.isArray(mergedOpts.extensions))
  assert(mergedOpts.extensions.length)

  // start with an empty data object
  const data: DataDirectoryResult = {}

  // find YAML and Markdown files in the given directory, recursively
  const filenames = walk(dir, { includeBasePath: true }).filter((filename: string) => {
    // ignore files that match any of ignorePatterns regexes
    if (mergedOpts.ignorePatterns.some((pattern) => pattern.test(filename))) return false

    // ignore files that don't have a whitelisted file extension
    return mergedOpts.extensions.includes(path.extname(filename).toLowerCase())
  })

  const files: [string, string][] = filenames.map((filename: string) => [
    filename,
    fs.readFileSync(filename, 'utf8'),
  ])

  files.forEach(([filename, fileContent]) => {
    // derive `foo.bar.baz` object key from `foo/bar/baz.yml` filename
    const key = filenameToKey(path.relative(dir, filename))
    const extension = path.extname(filename).toLowerCase()

    let processedContent = fileContent
    if (mergedOpts.preprocess) {
      processedContent = mergedOpts.preprocess(fileContent)
    }

    // Add this file's data to the global data object.
    // Note we want to use `setWith` instead of `set` so we can customize the type during path creation.
    // If we just use `set`, then e.g. `release-notes.enterprise-server.2-20.0` will be an Array but
    // `release-notes.enterprise-server.3-0.0` will be an Object.
    // See https://lodash.com/docs#set for an explanation.
    switch (extension) {
      case '.json':
        setWith(data, key, JSON.parse(processedContent), Object)
        break
      case '.yml':
        setWith(data, key, yaml.load(processedContent, { filename }), Object)
        break
      case '.md':
      case '.markdown':
        // Use `matter` to drop frontmatter, since localized reusable Markdown files
        // can potentially have frontmatter, but we want to prevent the frontmatter
        // from being rendered.
        setWith(data, key, matter(processedContent).content, Object)
        break
    }
  })

  return data
}
