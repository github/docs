#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { program } from 'commander'
import fpt from '#src/versions/lib/non-enterprise-default-version.js'
import { allVersionKeys } from '#src/versions/lib/all-versions.js'
import { liquid } from '#src/content-render/index.js'
import contextualize from '#src/frame/middleware/context/context'

const layoutFilename = path.posix.join(process.cwd(), 'src/dev-toc/layout.html')
const layout = fs.readFileSync(layoutFilename, 'utf8')

const staticDirName = 'src/dev-toc/static'
const staticDir = path.posix.join(process.cwd(), staticDirName)
if (!fs.existsSync(staticDir)) fs.mkdirSync(staticDir)

program
  .description('Generate a local TOC of the docs website and open it in your browser')
  .option(
    '-o, --openSections [product-ids...]',
    'open sections for one or more product IDs by default (e.g., "-o codespaces pull-requests")',
  )
  .parse(process.argv)

const options = program.opts()

const openSections = options.openSections || ''
const defaultOpenSections = Array.isArray(openSections) ? openSections : [openSections]

main()

async function main() {
  const next = () => {}
  const res = {}
  const req = { language: 'en', cookies: {} }

  async function recurse(tree) {
    const { page } = tree
    tree.renderedFullTitle = page.rawTitle.includes('{')
      ? await liquid.parseAndRender(page.rawTitle, req.context)
      : page.rawTitle
    for (const node of tree.childPages || []) {
      await recurse(node)
    }
  }

  for (const version of allVersionKeys) {
    req.pagePath = version === fpt ? '/' : `/${version}`

    // Create a subdir for the version if one doesn't exist yet.
    const versionStaticDir = path.posix.join(staticDir, version)
    if (!fs.existsSync(versionStaticDir)) fs.mkdirSync(versionStaticDir)

    // Create a versioned filename.
    const filename = path.posix.join(versionStaticDir, 'index.html')

    // Create a minimal context object.
    await contextualize(req, res, next)

    // Add the tree to the req.context.
    req.context.currentEnglishTree = req.context.siteTree.en[req.context.currentVersion]

    await recurse(req.context.currentEnglishTree)

    // Add any defaultOpenSections to the context.
    req.context.defaultOpenSections = defaultOpenSections

    // Parse the layout in src/dev-toc/layout.html with the context we created above.
    const outputHtml = await liquid.parseAndRender(layout, Object.assign({}, req.context))

    // Write a static file for each version.
    fs.writeFileSync(filename, outputHtml)
  }

  // Default to FPT for the file to open.
  const fptFile = path.posix.join(staticDirName, fpt, 'index.html')

  execSync(`open ${fptFile}`)

  console.log(`\nCreated the TOC! If it doesn't open automatically, open the following file in your browser to view it:\n
${fptFile}`)
}
