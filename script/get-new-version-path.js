#!/usr/bin/env node
import path from 'path'
import assert from 'assert'
import patterns from '../lib/patterns.js'
import { deprecated } from '../lib/enterprise-server-releases.js'
import { getNewVersionedPath, getOldVersionFromOldPath } from '../lib/old-versions-utils.js'

const usage =
  'must provide a path like "/github/getting-started" or "/enterprise/2.20/user/github/getting-started", with or without language code'

// [start-readme]
//
// Helper script that returns a "new" versioned path given an "old" versioned path.
//
// Examples:
//
// Given: /github/getting-started-with-github/using-github
// Returns: /free-pro-team@latest/github/getting-started-with-github/using-github
//
// Given: /enterprise/admin/installation/upgrading-github-enterprise
// Returns: /enterprise-server@2.22/admin/installation/upgrading-github-enterprise
//
//
// [end-readme]

let oldPath = process.argv.slice(2)[0]
assert(oldPath, usage)

// add '/' to the original string if not included
if (!oldPath.startsWith('/')) {
  oldPath = path.join('/', oldPath)
}

// do not transform deprecated versions
const oldVersion = getOldVersionFromOldPath(oldPath)

if (deprecated.includes(oldVersion)) {
  console.log('This is a deprecated Enterprise path! It does not redirect.\n')
  process.exit()
}

// get the new path
const newPath = patterns.hasLanguageCode.test(oldPath)
  ? getNewVersionedPath(oldPath, oldPath.match(patterns.getLanguageCode)[1])
  : getNewVersionedPath(oldPath)

// print the result
console.log(`New versioned path:\n\n${newPath}\n`)
