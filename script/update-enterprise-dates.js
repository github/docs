#!/usr/bin/env node
import { fileURLToPath } from 'url'
import path from 'path'
import { getContents } from './helpers/git-utils.js'
import fs from 'fs'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const enterpriseDatesFile = path.join(__dirname, '../lib/enterprise-dates.json')
const enterpriseDatesString = fs.readFileSync(enterpriseDatesFile, 'utf8')

// [start-readme]
//
// This script fetches data from https://github.com/github/enterprise-releases/blob/master/releases.json
// and updates `lib/enterprise-dates.json`, which the site uses for various functionality.
//
// [end-readme]

// check for required PAT
if (!process.env.GITHUB_TOKEN) {
  console.error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
  process.exit(1)
}

main()

async function main() {
  // send owner, repo, ref, path
  let rawDates = []
  try {
    rawDates = JSON.parse(
      await getContents('github', 'enterprise-releases', 'master', 'releases.json')
    )
  } catch {
    console.log(
      'Failed to get the https://github.com/github/enterprise-releases/blob/master/releases.json content. Check that your token has the correct permissions.'
    )
    process.exit(1)
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
    fs.writeFileSync(enterpriseDatesFile, formattedDatesString)
    console.log(`${enterpriseDatesFile} has been updated!`)
  }
}
