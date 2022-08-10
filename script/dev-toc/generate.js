#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import fpt from '../../lib/non-enterprise-default-version.js'
import { allVersionKeys } from '../../lib/all-versions.js'
import { liquid } from '../../lib/render-content/index.js'
import contextualize from '../../middleware/context.js'

const layoutFilename = path.posix.join(process.cwd(), 'script/dev-toc/layout.html')
const layout = fs.readFileSync(layoutFilename, 'utf8')

const staticDirName = 'script/dev-toc/static'
const staticDir = path.posix.join(process.cwd(), staticDirName)
if (!fs.existsSync(staticDir)) fs.mkdirSync(staticDir)

main()

async function main() {
  const next = () => {}
  const res = {}
  const req = { language: 'en', cookies: {} }

  for (const version of allVersionKeys) {
    req.pagePath = version === fpt ? '/' : `/${version}`

    // Create a subdir for the version if one doesn't exist yet.
    const versionStaticDir = path.posix.join(staticDir, version)
    if (!fs.existsSync(versionStaticDir)) fs.mkdirSync(versionStaticDir)

    // Create a versioned filename.
    const filename = path.posix.join(versionStaticDir, 'dev-toc.html')

    // Create a minimal context object.
    await contextualize(req, res, next)

    // Add the tree to the req.context.
    req.context.currentEnglishTree = req.context.siteTree.en[req.context.currentVersion]

    // Parse the layout in script/dev-toc/layout.html with the context we created above.
    const outputHtml = await liquid.parseAndRender(layout, Object.assign({}, req.context))

    // Write a static file for each version.
    fs.writeFileSync(filename, outputHtml)
  }

  // Default to FPT for the file to open.
  const fptFile = path.posix.join(staticDirName, fpt, 'dev-toc.html')

  execSync(`open ${fptFile}`)

  console.log(`\nCreated the TOC! If it doesn't open automatically, open the following file in your browser to view it:\n
${fptFile}`)
}
