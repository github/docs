/**
 * Development tool that generates a local Table of Contents (TOC) for the GitHub Docs website.
 *
 * This script creates static HTML files for each documentation version, renders page titles
 * using Liquid templating, and opens the generated TOC in your browser for easy navigation
 * during development. Supports command-line options to specify which sections should be
 * open by default.
 *
 * Usage: tsx src/dev-toc/generate.ts [-o product-ids...]
 */

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { program } from 'commander'
import type { NextFunction, Response } from 'express'
import type { ExtendedRequest } from '@/types'
import fpt from '@/versions/lib/non-enterprise-default-version'
import { allVersionKeys } from '@/versions/lib/all-versions'
import { liquid } from '@/content-render/index'
import contextualize from '@/frame/middleware/context/context'

interface CommandOptions {
  openSections?: string | string[]
}

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

const options = program.opts<CommandOptions>()

const openSections = options.openSections || ''
const defaultOpenSections = Array.isArray(openSections) ? openSections : [openSections]

main()

async function main(): Promise<void> {
  const next = (() => {}) as NextFunction
  const res = {} as Response
  const req = {
    language: 'en',
    cookies: {},
    headers: {},
    query: {},
    path: '',
    method: 'GET',
    get: () => '',
    header: () => '',
    accepts: () => false,
    context: {} as any,
  } as unknown as ExtendedRequest

  async function recurse(tree: any): Promise<void> {
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
    if (req.context && req.context.siteTree && req.context.currentVersion) {
      req.context.currentEnglishTree = req.context.siteTree.en[req.context.currentVersion]
    }

    if (req.context && req.context.currentEnglishTree) {
      await recurse(req.context.currentEnglishTree)
    }

    // Add any defaultOpenSections to the context.
    if (req.context) {
      req.context.defaultOpenSections = defaultOpenSections
    }

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
