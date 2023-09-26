#!/usr/bin/env node

// [start-readme]
//
// This script will say which category pages needs to be renamed
// so they match their respective titles (from the front matter)
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import assert from 'node:assert/strict'

import walk from 'walk-sync'
import chalk from 'chalk'
import GithubSlugger from 'github-slugger'
import { decode } from 'html-entities'

import frontmatter from '../lib/read-frontmatter.js'
import { renderContent } from '#src/content-render/index.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { ROOT } from '../lib/constants.js'

const slugger = new GithubSlugger()

const contentDir = path.join(ROOT, 'content')

main()

async function main() {
  const englishCategoryIndices = getEnglishCategoryIndices()

  const shouldRename = []

  for (const categoryIndex of englishCategoryIndices) {
    const contents = fs.readFileSync(categoryIndex, 'utf8')
    const { data } = frontmatter(contents)

    const categoryDirPath = path.dirname(categoryIndex)
    const categoryDirName = path.basename(categoryDirPath)

    const currentVersionObj = allVersions['free-pro-team@latest']
    assert(currentVersionObj, "No current version found for 'free-pro-team@latest'")
    const context = {
      currentLanguage: 'en',
      currentVersionObj,
    }
    const title = await renderContent(data.title, context, { textOnly: true })
    slugger.reset()
    const expectedSlug = slugger.slug(decode(title))

    // If the directory name already matches the expected slug, bail out now
    if (categoryDirName === expectedSlug) continue

    if (data.allowTitleToDifferFromFilename) {
      continue
    }

    // Figure out the new path for the category
    const categoryDirParentDir = path.dirname(categoryDirPath)
    const newPath = path.join(categoryDirParentDir, expectedSlug)

    const oldRelativePath = path.relative(ROOT, categoryDirPath)
    const newRelativePath = path.relative(ROOT, newPath)
    shouldRename.push({ oldRelativePath, newRelativePath })
  }

  if (shouldRename.length > 0) {
    console.log(
      chalk.yellow(
        `${shouldRename.length} ${
          shouldRename.length === 1 ? 'category' : 'categories'
        } need to be renamed because their title doesn't match their directory name.`,
      ),
    )
    console.log(chalk.dim('Run the following commands to rename them:'))

    for (const { oldRelativePath, newRelativePath } of shouldRename) {
      console.log(`./script/move-content.js ${oldRelativePath} ${newRelativePath}`)
    }
  } else {
    console.log(chalk.green('No categories need to be renamed! 🎉'))
  }
}

function getEnglishCategoryIndices() {
  const walkOptions = {
    globs: ['*/*/**/index.md'],
    ignore: [
      '{rest,graphql,developers}/**',
      'enterprise/admin/index.md',
      '**/articles/**',
      '**/early-access/**',
    ],
    directories: false,
    includeBasePath: true,
  }

  return walk(contentDir, walkOptions)
}
