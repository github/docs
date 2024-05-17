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

import frontmatter from '#src/frame/lib/read-frontmatter.js'
import { renderContent } from '#src/content-render/index.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { ROOT } from '#src/frame/lib/constants.js'

const slugger = new GithubSlugger()

const contentDir = path.join(ROOT, 'content')

const INCLUDE_MAP_TOPICS = Boolean(JSON.parse(process.env.INCLUDE_MAP_TOPICS || 'false'))

main()

async function main() {
  const englishCategoryIndices = getEnglishCategoryIndices().filter((name) => {
    return INCLUDE_MAP_TOPICS || name.split(path.sep).length < 5
  })

  const shouldRename = []

  for (const categoryIndex of englishCategoryIndices) {
    const contents = fs.readFileSync(categoryIndex, 'utf8')
    const { data } = frontmatter(contents)

    if (data.allowTitleToDifferFromFilename) {
      continue
    }

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
    const expectedSlugs = [slugger.slug(decode(title))]
    const shortTitle = data.shortTitle
      ? await renderContent(data.shortTitle, context, { textOnly: true })
      : ''
    if (shortTitle && shortTitle !== title) {
      expectedSlugs.push(slugger.slug(decode(shortTitle)))
    }

    // If the directory name already matches the expected slug, bail out now
    if (expectedSlugs.includes(categoryDirName)) continue

    // Figure out the new path for the category
    const categoryDirParentDir = path.dirname(categoryDirPath)
    const newPath = path.join(categoryDirParentDir, expectedSlugs.at(-1))

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
      console.log(
        `./src/content-render/scripts/move-content.js ${oldRelativePath} ${newRelativePath}`,
      )
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
