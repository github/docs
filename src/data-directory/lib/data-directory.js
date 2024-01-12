import assert from 'assert'
import fs from 'fs'
import path from 'path'
import walk from 'walk-sync'
import yaml from 'js-yaml'
import { isRegExp, setWith } from 'lodash-es'
import filenameToKey from './filename-to-key.js'
import matter from 'gray-matter'

export default function dataDirectory(dir, opts = {}) {
  const defaultOpts = {
    preprocess: (content) => {
      return content
    },
    ignorePatterns: [/README\.md$/i],
    extensions: ['.json', '.md', '.markdown', '.yml'],
  }

  opts = Object.assign({}, defaultOpts, opts)

  // validate input
  assert(Array.isArray(opts.ignorePatterns))
  assert(opts.ignorePatterns.every(isRegExp))
  assert(Array.isArray(opts.extensions))
  assert(opts.extensions.length)

  // start with an empty data object
  const data = {}

  // find YAML and Markdown files in the given directory, recursively
  const filenames = walk(dir, { includeBasePath: true }).filter((filename) => {
    // ignore files that match any of ignorePatterns regexes
    if (opts.ignorePatterns.some((pattern) => pattern.test(filename))) return false

    // ignore files that don't have a whitelisted file extension
    return opts.extensions.includes(path.extname(filename).toLowerCase())
  })

  const files = filenames.map((filename) => [filename, fs.readFileSync(filename, 'utf8')])
  files.forEach(([filename, fileContent]) => {
    // derive `foo.bar.baz` object key from `foo/bar/baz.yml` filename
    const key = filenameToKey(path.relative(dir, filename))
    const extension = path.extname(filename).toLowerCase()

    if (opts.preprocess) fileContent = opts.preprocess(fileContent)

    // Add this file's data to the global data object.
    // Note we want to use `setWith` instead of `set` so we can customize the type during path creation.
    // If we just use `set`, then e.g. `release-notes.enterprise-server.2-20.0` will be an Array but
    // `release-notes.enterprise-server.3-0.0` will be an Object.
    // See https://lodash.com/docs#set for an explanation.
    switch (extension) {
      case '.json':
        setWith(data, key, JSON.parse(fileContent), Object)
        break
      case '.yml':
        setWith(data, key, yaml.load(fileContent, { filename }), Object)
        break
      case '.md':
      case '.markdown':
        // Use `matter` to drop frontmatter, since localized reusable Markdown files
        // can potentially have frontmatter, but we want to prevent the frontmatter
        // from being rendered.
        setWith(data, key, matter(fileContent).content, Object)
        break
    }
  })

  return data
}
