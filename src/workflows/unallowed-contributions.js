#!/usr/bin/env node

import coreLib from '@actions/core'
import { readFileSync } from 'fs'
import yaml from 'js-yaml'
import { difference } from 'lodash-es'

import { checkContentType } from '#src/workflows/fm-utils.js'
import github from '#src/workflows/github.js'

const core = coreLib
const octokit = github()

const {
  PR_NUMBER,
  REPO_OWNER_AND_NAME,
  FILE_PATHS_NOT_ALLOWED,
  CHANGED_FILE_PATHS,
  ADDED_CONTENT_FILES,
} = process.env
const [owner, repo] = REPO_OWNER_AND_NAME.split('/')
const filters = yaml.load(readFileSync('src/workflows/unallowed-contribution-filters.yml', 'utf8'))

main()

async function main() {
  // Files in the diff that match specific paths we don't allow
  const unallowedChangedFiles = [...JSON.parse(FILE_PATHS_NOT_ALLOWED)]

  // Content files that are added in a forked repo won't be in the
  // `github/docs` repo, so we don't need to check them. They will be
  // reviewed manually by a content writer.
  const contentFilesToCheck = difference(
    JSON.parse(CHANGED_FILE_PATHS),
    JSON.parse(ADDED_CONTENT_FILES),
  )

  // Any modifications or deletions to a file in the content directory
  // could potentially have `type: rai` so each changed content file's
  // frontmatter needs to be checked.
  unallowedChangedFiles.push(...(await checkContentType(contentFilesToCheck, 'rai')))

  if (unallowedChangedFiles.length === 0) return

  // Format into Markdown bulleted list to use in the PR comment
  const listUnallowedChangedFiles = unallowedChangedFiles.map((file) => `\n - ${file}`).join('')
  const listUnallowedFiles = filters.notAllowed.map((file) => `\n - ${file}`).join('')

  const reviewMessage = `👋 Hey there spelunker. It looks like you've modified some files that we can't accept as contributions:${listUnallowedChangedFiles}\n\nYou'll need to revert all of the files you changed that match that list using [GitHub Desktop](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/reverting-a-commit-in-github-desktop) or \`git checkout origin/main <file name>\`. Once you get those files reverted, we can continue with the review process. :octocat:\n\nThe complete list of files we can't accept are:${listUnallowedFiles}\n\nWe also can't accept contributions to files in the content directory with frontmatter \`type: rai\`.`

  let workflowFailMessage =
    "It looks like you've modified some files that we can't accept as contributions."
  let createdComment

  try {
    createdComment = await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: PR_NUMBER,
      body: reviewMessage,
    })

    workflowFailMessage = `${workflowFailMessage} Please see ${createdComment.data.html_url} for details.`
  } catch (err) {
    console.log('Error creating comment.', err)
  }

  core.setFailed(workflowFailMessage)
}
