// @purpose Writer tool
// @description Update enterprise release dates from github/enterprise-releases
//
// Fetches https://github.com/github/enterprise-releases/blob/master/releases.json
// and updates src/ghes-releases/lib/enterprise-dates.json.
// enterprise-dates.json supplies site release date behavior.

import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'

import { getContents } from '@/workflows/git-utils'

interface EnterpriseDates {
  [releaseNumber: string]: {
    // Keep releaseDate as the RC date until a GA date exists for backward compatibility.
    releaseDate: string
    deprecationDate: string
    releaseCandidateDate?: string
    generalAvailabilityDate?: string
  }
}

interface RawReleaseData {
  [releaseNumber: string]: {
    release_candidate?: string
    start: string
    end: string
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const enterpriseDatesFile = path.join(__dirname, '../lib/enterprise-dates.json')
const enterpriseDatesString = await fs.readFile(enterpriseDatesFile, 'utf8')

// getContents requires GITHUB_TOKEN.
if (!process.env.GITHUB_TOKEN) {
  throw new Error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
}

main()

async function main(): Promise<void> {
  let rawDates: RawReleaseData = {}
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

  const formattedDates: EnterpriseDates = {}
  for (const [releaseNumber, releaseObject] of Object.entries(rawDates)) {
    formattedDates[releaseNumber] = {
      // Keep releaseDate as the RC date until a GA date exists for backward compatibility.
      releaseDate: releaseObject.release_candidate || releaseObject.start,
      deprecationDate: releaseObject.end,
      releaseCandidateDate: releaseObject.release_candidate,
      generalAvailabilityDate: releaseObject.start,
    }
  }

  const formattedDatesString = JSON.stringify(formattedDates, null, 2)

  if (formattedDatesString === enterpriseDatesString) {
    console.log('This repo is already in sync with enterprise-releases!')
  } else {
    await fs.writeFile(enterpriseDatesFile, formattedDatesString)
    console.log(`${enterpriseDatesFile} has been updated!`)
  }
}
