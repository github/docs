#!/usr/bin/env node

const path = require('path')
const assert = require('assert')
const patterns = require('../lib/patterns')
const { deprecated } = require('../lib/enterprise-server-releases')
const { getNewVersionedPath, getOldVersionFromOldPath } = require('../lib/old-versions-utils')
const usage = 'must provide a path like "/github/getting-started" or "/enterprise/2.20/user/github/getting-started", with or without language code'

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
