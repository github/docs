#!/usr/bin/env node

// [start-readme]
//
// This script fetches data from https://github.com/github/enterprise-releases/blob/master/releases.json
// and updates `src/ghes-releases/lib/enterprise-dates.json`, which the site uses for various functionality.
//
// [end-readme]

import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'

import { getContents } from '#src/workflows/git-utils.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const enterpriseDatesFile = path.join(__dirname, '../lib/enterprise-dates.json')
const enterpriseDatesString = await fs.readFile(enterpriseDatesFile, 'utf8')

// check for required PAT
if (!process.env.GITHUB_TOKEN) {
  throw new Error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
}

main()

async function main() {
  // send owner, repo, ref, path
  let rawDates = []
  try {
    rawDates = JSON.parse(
      await getContents('github', 'enterprise-releases', 'master', 'releases.json'),
    )
  } catch (error) {
    console.log(
      'Failed to get the https://github.com/github/enterprise-releases/blob/master/releases.json content. Check that your token has the correct permissions.',
    )
    throw error
  }

  const formattedDates = {}
  Object.entries(rawDates).forEach(([releaseNumber, releaseObject]) => {
    formattedDates[releaseNumber] = {
      releaseDate: releaseObject.release_candidate || releaseObject.start,
      deprecationDate: releaseObject.end,
    }
  })

  const formattedDatesString = JSON.stringify(formattedDates, null, 2)

  if (formattedDatesString === enterpriseDatesString) {
    console.log('This repo is already in sync with enterprise-releases!')
  } else {
    await fs.writeFile(enterpriseDatesFile, formattedDatesString)
    console.log(`${enterpriseDatesFile} has been updated!`)
  }
}
