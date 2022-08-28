#!/usr/bin/env node

/*

As we update our markdown rendering pipeline,
the package update includes a new markdown rendering engine,
micromark, that is CommonMark compliant. The most obvious change is that
indents within `ul` and `ol` now require 4 spaces or a tab instead of
2 spaces. This script updates our content to that specification.
*/

import walkSync from 'walk-sync'
import fs from 'fs/promises'

/******************************************************************************/

async function readFiles(opts) {
  const paths = walkSync('./', {
    directories: false,
    includeBasePath: true,
    ...opts,
  })
  return await Promise.all(paths.map(async (path) => [path, await fs.readFile(path, 'utf8')]))
}

function withAllFiles(files, fn) {
  return files.map(([path, file]) => [path, fn(path, file)])
}

async function writeFiles(files) {
  return await Promise.all(files.map(async ([path, file]) => await fs.writeFile(path, file)))
}

/******************************************************************************/

function updateIndent(path, file) {
  // We don't want to change the frontmatter
  let [, frontmatter, content] = file.split(/^-{3,}$/gm)

  // If the file doesn't have frontmatter or content, meh
  if (!frontmatter || !content) return file

  // If there no `ul` or `ol`, no change
  if (!/^([-*]\s)|(\d+[.)]\s)/gi.test(content)) return file

  // If this file has a yaml example, skip it; its too hard to update automatically
  if (/^\s*`{3}ya?ml/gim.test(content)) {
    if (/^ {2,3}(\S)/gm.test(content)) {
      console.log('YAML example, will skip', path)
    }
    return file
  }

  // Only within a `ul` or `ol`, update indent level
  content = content
    .split('\n')
    .map((line, index, arr) => {
      // If this isn't an indented line, continue
      if (!/^ {2,3}(\S)/.test(line)) return line

      // Find the previous line that is not whitespace or indented
      let prevLineIndex = index - 1
      while (/^\s*$/.test(arr[prevLineIndex]) || /^\s{2,}/.test(arr[prevLineIndex])) {
        prevLineIndex--
      }

      // Only do it if previous line is ol/ul
      const prevLine = arr[prevLineIndex]
      if (!/^([-*]\s)|(\d+[.)]\s)/i.test(prevLine)) return line

      return line.replace(/^ {2,3}(\S)/, '    $1')
    })
    .join('\n')

  return ['---', frontmatter.trim(), '---', '', content.trim(), ''].join('\n')
}

async function main() {
  let files = await readFiles({
    globs: ['content/**/*.md', 'data/**/*.md'],
    ignore: ['**/README.md'],
  })
  files = withAllFiles(files, updateIndent)
  await writeFiles(files)
}

main()
