#!/usr/bin/env node

/*

This script does most of the work to convert our *.js files to use ESM
instead of CommonJS.

This is based on https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

This file assumes the two ESLint rules have already been installed and enforced:

- https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/global-require.md
- https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md

(for reference) https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md

*/

import fs from 'fs/promises'
import semver from 'semver'
import walkSync from 'walk-sync'

// https://stackoverflow.com/a/31102605
function orderKeys(unordered) {
  return Object.keys(unordered)
    .sort()
    .reduce((obj, key) => {
      obj[key] =
        unordered[key].constructor === {}.constructor ? orderKeys(unordered[key]) : unordered[key]
      return obj
    }, {})
}

async function readPackageFile() {
  return JSON.parse(await fs.readFile('./package.json', 'utf8'))
}

async function writePackageFile(packageFile) {
  return fs.writeFile('./package.json', JSON.stringify(orderKeys(packageFile), ' ', 2) + '\n')
}

async function readAllJsFiles() {
  const paths = walkSync('./', {
    directories: false,
    includeBasePath: true,
    globs: ['**/*.js'],
    ignore: ['node_modules', 'dist'],
  })
  return await Promise.all(paths.map(async (path) => [path, await fs.readFile(path, 'utf8')]))
}

function listJsonPaths() {
  const paths = walkSync('./', {
    directories: false,
    includeBasePath: true,
    globs: ['**/*.json'],
    ignore: ['node_modules', 'dist'],
  })
  return paths.map((p) => p.replace('.json', ''))
}

function withAllFiles(jsFiles, fn) {
  return jsFiles.map(([path, file]) => [path, fn(path, file)])
}

async function writeAllJsFiles(jsFiles) {
  return await Promise.all(jsFiles.map(async ([path, file]) => await fs.writeFile(path, file)))
}

// Converts a path to an import name
/* Example:
  import xLunrJa from 'lunr-languages/lunr.ja'
  xLunrJa(lunr)
*/
function nameImport(p2) {
  const myString = p2.split('/').pop()
  const string = myString.replace(/[-.]([a-z])/g, (g) => g[1].toUpperCase())
  return `x${string.charAt(0).toUpperCase()}${string.slice(1)}`
}

// Add "type": "module" to your package.json.
async function addTypeModule() {
  const packageFile = await readPackageFile()
  packageFile.type = 'module'
  return writePackageFile(packageFile)
}

// Replace "main": "index.js" with "exports": "./index.js" in your package.json.
async function updateMainExport() {
  const packageFile = await readPackageFile()
  const main = packageFile.main
  if (!main) return
  delete packageFile.main
  packageFile.exports = './' + main
  return writePackageFile(packageFile)
}

// Update the "engines" field in package.json to Node.js 12: "node": "^12.20.0 || ^14.13.1 || >=16.0.0".
// If 12 is already required, we will skip this change.
async function checkEngines() {
  const packageFile = await readPackageFile()
  const nodeVersion = packageFile.engines.node
  if (semver.gt(semver.minVersion(nodeVersion), '12.0.0')) return
  packageFile.engines.node = '^12.20.0 || ^14.13.1 || >=16.0.0'
  await writePackageFile(packageFile)
}

// Remove 'use strict'; from all JavaScript files.
function noStrict(path, file) {
  if (file.includes('use strict')) {
    throw new Error(`Cannot use strict in ${path}. Please remove and run this script again.`)
  }
  return file
}

// Read JSON requires separately
/*
import { promises as fs } from 'fs'

const packageJson = JSON.parse(await fs.readFile('package.json', 'utf8'))
*/
function noJsonReads(jsonPaths) {
  return (path, file) => {
    const found = [...file.matchAll(/require\('[./]+(.*?)'\)/gm)]
    if (!found) return file
    const matchesJsonPath = found
      .map((f) => f[1])
      .filter((f) => jsonPaths.some((p) => p.endsWith(f)))
    if (matchesJsonPath.length) {
      throw new Error(
        `${path} has possible JSON requires: ${matchesJsonPath}. Please fix this manually then run the script again.`
      )
    }
    return file
  }
}

// Replace all require()/module.export with import/export.
// Use only full relative file paths for imports: import x from '.'; → import x from './index.js';.
// Add `.js` if starts with `./`
// Replace `:` to as

// Fix up standard const x = require('x') statements
function updateStandardImport(path, file) {
  return file.replaceAll(/^const\s(.*?)\s*?=\s*?require\('(.*?)'\)$/gm, (_, p1, p2) => {
    // Replace `:` to as
    p1 = p1.replace(/\s*:\s*/g, ' as ')
    // Add `.js` if path starts with `.`
    if (p2.startsWith('.') && !p2.endsWith('.js')) p2 = p2 + '.js'
    return `import ${p1} from '${p2}'`
  })
}

// Fix up inlined requires that are still "top-level"
function updateInlineImport(path, file) {
  return file.replaceAll(/^(.*?)require\('(.*?)'\)(.*)$/gm, (_, p1, p2, p3) => {
    // Generate a new import name based on the path
    const name = nameImport(p2)
    // Add `.js` if starts with `.`
    if (p2.startsWith('.') && !p2.endsWith('.js')) p2 = p2 + '.js'
    // Fix up unused require('x') statements
    if (!p1 && !p3) return `import '${p2}'`
    return `import ${name} from '${p2}'\n${p1}${name}${p3}`
  })
}

// Handle module.exports =
function updateDefaultExport(path, file) {
  return file.replaceAll(/^module.exports\s*?=\s*?(\S.*)/gm, 'export default $1')
}

// Handle exports.x =
function updateNamedExport(path, file) {
  return file.replaceAll(/^exports\.(\S+)\s*?=\s*?(\S.*)/gm, 'export const $1 = $2')
}

// Replace __filename and __dirname
function updateFileAndDir(path, file) {
  if (!file.includes('__filename') && !file.includes('__dirname')) return file

  return [
    "import { fileURLToPath } from 'url'",
    "import path from 'path'",
    file.includes('__filename') && 'const __filename = fileURLToPath(import.meta.url)',
    file.includes('__dirname') && 'const __dirname = path.dirname(fileURLToPath(import.meta.url))',
    file,
  ]
    .filter(Boolean)
    .join('\n')
}

// lodash => lodash-es
function useEsLodash(path, file) {
  return file.replace("'lodash'", "'lodash-es'")
}

// Pull all imports to the top of the file to avoid syntax issues
function moveImportsToTop(path, file) {
  if (!file.includes('import')) return file
  const isTop = (line) => /^import/gm.test(line)
  const lineEnd = /\r?\n|\r/g
  return (
    file.split(lineEnd).filter(isTop).join('\n') +
    '\n' +
    file
      .split(lineEnd)
      .filter((line) => !isTop(line))
      .join('\n')
  )
}

// Make sure script declarations on the top of the file before imports
function updateScriptDeclaration(path, file) {
  if (!path.startsWith('./script')) return file
  file = file.replace('#!/usr/bin/env node\n', '')
  return '#!/usr/bin/env node\n' + file
}

// Check there's no `require(` ... anywhere
function checkRequire(path, file) {
  if (/require\s*\(/.test(file)) {
    throw new Error(`"require(" still in ${path}`)
  }
  return file
}

// Check there's no `exports` ... anywhere
function checkExports(path, file) {
  if (file.includes('exports')) {
    throw new Error(`"exports" still in ${path}`)
  }
  return file
}

async function main() {
  await addTypeModule()
  await updateMainExport()
  await checkEngines()
  const jsonPaths = listJsonPaths()
  let jsFiles = await readAllJsFiles()
  jsFiles = withAllFiles(jsFiles, noStrict)
  jsFiles = withAllFiles(jsFiles, noJsonReads(jsonPaths))
  jsFiles = withAllFiles(jsFiles, updateStandardImport)
  jsFiles = withAllFiles(jsFiles, updateInlineImport)
  jsFiles = withAllFiles(jsFiles, updateDefaultExport)
  jsFiles = withAllFiles(jsFiles, updateNamedExport)
  jsFiles = withAllFiles(jsFiles, updateFileAndDir)
  jsFiles = withAllFiles(jsFiles, useEsLodash)
  jsFiles = withAllFiles(jsFiles, moveImportsToTop)
  jsFiles = withAllFiles(jsFiles, updateScriptDeclaration)
  jsFiles = withAllFiles(jsFiles, checkRequire)
  jsFiles = withAllFiles(jsFiles, checkExports)
  await writeAllJsFiles(jsFiles)
}

main()
