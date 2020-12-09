const assert = require('assert')
const fs = require('fs').promises
const path = require('path')
const walk = require('walk-sync')
const yaml = require('js-yaml')
const { isRegExp, set } = require('lodash')
const filenameToKey = require('./filename-to-key')

module.exports = async function dataDirectory (dir, opts = {}) {
  const defaultOpts = {
    preprocess: (content) => { return content },
    ignorePatterns: [/README\.md$/i],
    extensions: [
      '.json',
      '.md',
      '.markdown',
      '.yaml',
      '.yml'
    ]
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
  await Promise.all(walk(dir, { includeBasePath: true })
    .filter(filename => {
      // ignore files that match any of ignorePatterns regexes
      if (opts.ignorePatterns.some(pattern => pattern.test(filename))) return false

      // ignore files that don't have a whitelisted file extension
      return opts.extensions.includes(path.extname(filename).toLowerCase())
    })
    .map(async filename => {
      // derive `foo.bar.baz` object key from `foo/bar/baz.yml` filename
      const key = filenameToKey(path.relative(dir, filename))
      const extension = path.extname(filename).toLowerCase()

      let fileContent = await fs.readFile(filename, 'utf8')

      if (opts.preprocess) fileContent = opts.preprocess(fileContent)

      // add this file's data to the global data object
      switch (extension) {
        case '.json':
          set(data, key, JSON.parse(fileContent))
          break
        case '.yaml':
        case '.yml':
          set(data, key, yaml.safeLoad(fileContent, { filename }))
          break
        case '.md':
        case '.markdown':
          set(data, key, fileContent)
          break
      }
    }))

  return data
}
