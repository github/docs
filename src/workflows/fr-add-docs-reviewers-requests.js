// eslint-disable-next-line import/no-extraneous-dependencies
import { graphql } from '@octokit/graphql'

import {
  addItemsToProject,
  isDocsTeamMember,
  findFieldID,
  findSingleSelectID,
  generateUpdateProjectV2ItemFieldMutation,
} from './projects.js'

async function getAllOpenPRs() {
  let prsRemaining = true
  let cursor
  let prData = []
  while (prsRemaining) {
    const data = await graphql(
      `
        query ($organization: String!, $repo: String!) {
          repository(name: $repo, owner: $organization) {
            pullRequests(last: 100, states: OPEN${cursor ? ` before:"${cursor}"` : ''}) {
              pageInfo{startCursor, hasPreviousPage},
              nodes {
                id
                isDraft
                reviewRequests(first: 10) {
                  nodes {
                    requestedReviewer {
                      ... on Team {
                        name
                      }
                    }
                  }
                }
                labels(first: 5) {
                  nodes {
                    name
                  }
                }
                reviews(first: 10) {
                  nodes {
                    onBehalfOf(first: 1) {
                      nodes {
                        name
                      }
                    }
                  }
                }
                author {
                  login
                }
              }
            }
          }
        }
      `,
      {
        organization: process.env.ORGANIZATION,
        repo: process.env.REPO,
        headers: {
          authorization: `token ${process.env.TOKEN}`,
        },
      },
    )

    prsRemaining = data.repository.pullRequests.pageInfo.hasPreviousPage
    cursor = data.repository.pullRequests.pageInfo.startCursor
    prData = [...prData, ...data.repository.pullRequests.nodes]
  }

  return prData
}

async function run() {
  // Get info about open github/github PRs
  const prData = await getAllOpenPRs()

  // Get the PRs that are:
  // - not draft
  // - not a train
  // - are requesting a review by docs-reviewers
  // - have not already been reviewed on behalf of docs-reviewers
  const prs = prData.filter(
    (pr) =>
      !pr.isDraft &&
      !pr.labels.nodes.find((label) => label.name === 'Deploy train 🚂') &&
      pr.reviewRequests.nodes.find(
        (requestedReviewers) => requestedReviewers.requestedReviewer?.name === process.env.REVIEWER,
      ) &&
      !pr.reviews.nodes
        .flatMap((review) => review.onBehalfOf.nodes)
        .find((behalf) => behalf.name === process.env.REVIEWER),
  )
  if (prs.length === 0) {
    console.log('No PRs found. Exiting.')
    return
  }

  const prIDs = prs.map((pr) => pr.id)
  const prAuthors = prs.map((pr) => pr.author.login)
  console.log(`PRs found: ${prIDs}`)

  // Get info about the docs-content review board project
  const projectData = await graphql(
    `
      query ($organization: String!, $projectNumber: Int!) {
        organization(login: $organization) {
          projectV2(number: $projectNumber) {
            id
            items(last: 100) {
              nodes {
                id
              }
            }
            fields(first: 100) {
              nodes {
                ... on ProjectV2Field {
                  id
                  name
                }
                ... on ProjectV2SingleSelectField {
                  id
                  name
                  options {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      organization: process.env.ORGANIZATION,
      projectNumber: parseInt(process.env.PROJECT_NUMBER),
      headers: {
        authorization: `token ${process.env.TOKEN}`,
      },
    },
  )

  // Get the project ID
  const projectID = projectData.organization.projectV2.id

  // Get the IDs of the last 100 items on the board.
  // Until we have a way to check from a PR whether the PR is in a project,
  // this is how we (roughly) avoid overwriting PRs that are already on the board.
  // If we are overwriting items, query for more items.
  const existingItemIDs = projectData.organization.projectV2.items.nodes.map((node) => node.id)

  // Get the ID of the fields that we want to populate
  const datePostedID = findFieldID('Date posted', projectData)
  const reviewDueDateID = findFieldID('Review due date', projectData)
  const statusID = findFieldID('Status', projectData)
  const featureID = findFieldID('Feature', projectData)
  const contributorTypeID = findFieldID('Contributor type', projectData)
  const sizeTypeID = findFieldID('Size', projectData)
  const authorID = findFieldID('Contributor', projectData)

  // Get the ID of the single select values that we want to set
  const readyForReviewID = findSingleSelectID('Ready for review', 'Status', projectData)
  const hubberTypeID = findSingleSelectID('Hubber or partner', 'Contributor type', projectData)
  const docsMemberTypeID = findSingleSelectID('Docs team', 'Contributor type', projectData)
  const sizeMediumID = findSingleSelectID('M', 'Size', projectData)

  // Add the PRs to the project
  const itemIDs = await addItemsToProject(prIDs, projectID)

  // If an item already existed on the project, the existing ID will be returned.
  // Exclude existing items going forward.
  // Until we have a way to check from a PR whether the PR is in a project,
  // this is how we (roughly) avoid overwriting PRs that are already on the board
  const newItemIDs = []
  const newItemAuthors = []
  itemIDs.forEach((id, index) => {
    if (!existingItemIDs.includes(id)) {
      newItemIDs.push(id)
      newItemAuthors.push(prAuthors[index])
    }
  })

  if (newItemIDs.length === 0) {
    console.log('All found PRs are already on the project. Exiting.')
    return
  }

  // Populate fields for the new project items
  // (Using for...of instead of forEach since the function uses await)
  for (const [index, itemID] of newItemIDs.entries()) {
    const updateProjectV2ItemMutation = generateUpdateProjectV2ItemFieldMutation({
      item: itemID,
      author: newItemAuthors[index],
      turnaround: 2,
      feature: process.env.FEATURE,
    })
    const contributorType = (await isDocsTeamMember(newItemAuthors[index]))
      ? docsMemberTypeID
      : hubberTypeID
    console.log(`Populating fields for item: ${itemID} with author ${newItemAuthors[index]}`)

    await graphql(updateProjectV2ItemMutation, {
      project: projectID,
      statusID,
      statusValueID: readyForReviewID,
      datePostedID,
      reviewDueDateID,
      contributorTypeID,
      contributorType,
      sizeTypeID,
      sizeType: sizeMediumID, // We need to provide something here, defaulting to 'medium' or 'M'
      featureID,
      authorID,
      headers: {
        authorization: `token ${process.env.TOKEN}`,
      },
    })
    console.log('Done populating fields for item')
  }

  return newItemIDs
}

run().catch((error) => {
  console.log(`#ERROR# ${error}`)
  process.exit(1)
})
