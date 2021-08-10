#!/usr/bin/env node

import fs from 'fs/promises'
import path from 'path'
import { getOctokit } from '@actions/github'
import enterpriseDates from '../../lib/enterprise-dates.js'
import { latest, oldestSupported } from '../../lib/enterprise-server-releases.js'

const acceptedMilestones = ['release', 'deprecation']
const teamsToCC = '/cc @github/docs-content @github/docs-engineering'

// Adjust these values as needed.
const numberOfdaysBeforeReleaseToOpenIssue = 30
const numberOfdaysBeforeDeprecationToOpenIssue = 15

// [start-readme]
//
// This script runs once per day via a scheduled GitHub Action to check whether
// an Enterprise release or deprecation milestone is within the specified
// number of days.
//
// When a milestone is within the specified number of days, a new issue is
// created using the templates in
// .github/actions-scripts/enterprise-server-issue-templates.
//
// Release issues are then added to the docs content squad board for triage.
// Deprecations issues are owned by docs engineering and are added to the
// docs engineering squad board automatically when the engineering label is added.
//
// [end-readme]

run()

async function run() {
  const milestone = process.argv[2]
  if (!acceptedMilestones.includes(milestone)) {
    console.log("Please specify either 'release' or 'deprecation'\n")
    console.log('Example: script/open-enterprise-issue.js release')
    process.exit(1)
  }

  // Milestone-dependent values.
  const numberOfdaysBeforeMilestoneToOpenIssue =
    milestone === 'release'
      ? numberOfdaysBeforeReleaseToOpenIssue
      : numberOfdaysBeforeDeprecationToOpenIssue

  const versionNumber = milestone === 'release' ? getNextVersionNumber() : oldestSupported

  if (!versionNumber) {
    console.log(
      `Could not find the next version number after ${latest} in enterprise-dates.json. Try running script/udpate-enterprise-dates.js, then rerun this script.`
    )
    process.exit(0)
  }

  const datesForVersion = enterpriseDates[versionNumber]

  if (!datesForVersion) {
    console.log(
      `Could not find ${versionNumber} in enterprise-dates.json. Try running script/udpate-enterprise-dates.js, then rerun this script.`
    )
    process.exit(0)
  }

  const nextMilestoneDate = datesForVersion[`${milestone}Date`]
  const daysUntilMilestone = calculateDaysUntilMilestone(nextMilestoneDate)

  // If the milestone is more than the specific days away, exit now.
  if (daysUntilMilestone > numberOfdaysBeforeMilestoneToOpenIssue) {
    console.log(
      `The ${versionNumber} ${milestone} is not until ${nextMilestoneDate}! An issue will be opened when it is ${numberOfdaysBeforeMilestoneToOpenIssue} days away.`
    )
    process.exit(0)
  }

  const milestoneSteps = await fs.readFile(
    path.join(
      process.cwd(),
      `.github/actions-scripts/enterprise-server-issue-templates/${milestone}-issue.md`
    ),
    'utf8'
  )
  const issueLabels = [`enterprise ${milestone}`, `engineering`]
  const issueTitle = `[${nextMilestoneDate}] Enterprise Server ${versionNumber} ${milestone} (technical steps)`

  const issueBody = `GHES ${versionNumber} ${milestone} occurs on ${nextMilestoneDate}.
  \n${milestoneSteps}
  ${teamsToCC}`

  const token = process.env.GITHUB_TOKEN

  // Create the milestone issue
  const octokit = getOctokit(token)
  try {
    issue = await octokit.request('POST /repos/{owner}/{repo}/issues', {
      owner: 'github',
      repo: 'docs-internal',
      title: issueTitle,
      body: issueBody,
      labels: issueLabels,
    })
    if (issue.status === 201) {
      // Write the values to disk for use in the workflow.
      console.log(
        `Issue #${issue.data.number} for the ${versionNumber} ${milestone} was opened: ${issue.data.html_url}`
      )
    }
  } catch (error) {
    console.error(`#ERROR# ${error}`)
    console.log(`🛑 There was an error creating the issue.`)
    process.exit(1)
  }

  // Add the release issue to the 'Needs triage' column on the
  // docs content squad project board:
  // https://github.com/orgs/github/projects/1773#column-12198119
  // Deprecation issues are owned by docs engineering only and will
  // be triaged by adding the engineering label to the issue.
  if (milestone === 'release') {
    try {
      const addCard = await octokit.request('POST /projects/columns/{column_id}/cards', {
        column_id: 12198119,
        content_id: issue.data.id,
        content_type: 'Issue',
        mediaType: {
          previews: ['inertia'],
        },
      })

      if (addCard.status === 201) {
        // Write the values to disk for use in the workflow.
        console.log(
          `The issue #${issue.data.number} was added to https://github.com/orgs/github/projects/1773#column-12198119.`
        )
      }
    } catch (error) {
      console.error(`#ERROR# ${error}`)
      console.log(`🛑 There was an error adding the issue to the project board.`)
      process.exit(1)
    }
  }
}

function getNextVersionNumber() {
  const indexOfLatest = Object.keys(enterpriseDates).indexOf(latest)
  const indexOfNext = indexOfLatest + 1
  return Object.keys(enterpriseDates)[indexOfNext]
}

function calculateDaysUntilMilestone(nextMilestoneDate) {
  const today = new Date().toISOString().slice(0, 10)
  const differenceInMilliseconds = getTime(nextMilestoneDate) - getTime(today)
  // Return the difference in days
  return Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24))
}

function getTime(date) {
  return new Date(date).getTime()
}
