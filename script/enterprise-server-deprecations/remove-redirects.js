#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import program from 'commander'
import readJsonFile from '../../lib/read-json-file.js'
import { deprecated } from '../../lib/enterprise-server-releases.js'
const DEVELOPER_REDIRECTS_FILEPATH = 'lib/redirects/static/developer.json'
const developerRedirects = readJsonFile(`./${DEVELOPER_REDIRECTS_FILEPATH}`)

// [start-readme]
//
// Run this script after an Enterprise deprecation to remove redirects
// for the deprecated version. See the Enterprise deprecation issue template for instructions.
//
// [end-readme]

program
  .description(
    'Remove developer redirects for deprecated versions. The redirects for deprecated versions live in the respective directory in the github/help-docs-archived-enterprise-versions repository.'
  )
  .option(
    '-r, --release <NUMBER>',
    'Enterprise Server release number. Example: 2.19. Default: latest deprecated release number.'
  )
  .parse(process.argv)

// Default to latest deprecated release
const release = program.opts().release || deprecated[0]

const supportedRedirects = {}

Object.keys(developerRedirects).forEach((elem) => {
  const includesVersion =
    elem.includes(`enterprise/${release}`) || elem.includes(`enterprise-server@${release}`)
  if (includesVersion) return

  supportedRedirects[elem] = developerRedirects[elem]
})

fs.writeFileSync(
  path.join(process.cwd(), DEVELOPER_REDIRECTS_FILEPATH),
  JSON.stringify(supportedRedirects, null, 2)
)
