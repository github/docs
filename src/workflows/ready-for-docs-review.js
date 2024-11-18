// eslint-disable-next-line import/no-extraneous-dependencies
import { graphql } from '@octokit/graphql'

import {
  addItemToProject,
  isDocsTeamMember,
  isGitHubOrgMember,
  findFieldID,
  findSingleSelectID,
  generateUpdateProjectV2ItemFieldMutation,
  getFeature,
  getSize,
} from './projects.js'

async function run() {
  // Get info about the docs-content review board project
  const data = await graphql(
    `
      query ($organization: String!, $projectNumber: Int!, $id: ID!) {
        organization(login: $organization) {
          projectV2(number: $projectNumber) {
            id
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
        item: node(id: $id) {
          __typename
          ... on PullRequest {
            files(first: 100) {
              nodes {
                additions
                deletions
                path
              }
            }
          }
        }
      }
    `,
    {
      id: process.env.ITEM_NODE_ID,
      organization: process.env.ORGANIZATION,
      projectNumber: parseInt(process.env.PROJECT_NUMBER),
      headers: {
        authorization: `token ${process.env.TOKEN}`,
      },
    },
  )

  // Get the project ID
  const projectID = data.organization.projectV2.id

  // Get the ID of the fields that we want to populate
  const datePostedID = findFieldID('Date posted', data)
  const reviewDueDateID = findFieldID('Review due date', data)
  const statusID = findFieldID('Status', data)
  const featureID = findFieldID('Feature', data)
  const contributorTypeID = findFieldID('Contributor type', data)
  const sizeTypeID = findFieldID('Size', data)
  const authorID = findFieldID('Contributor', data)

  // Get the ID of the single select values that we want to set
  const readyForReviewID = findSingleSelectID('Ready for review', 'Status', data)
  const hubberTypeID = findSingleSelectID('Hubber or partner', 'Contributor type', data)
  const docsMemberTypeID = findSingleSelectID('Docs team', 'Contributor type', data)
  const osContributorTypeID = findSingleSelectID('OS contributor', 'Contributor type', data)

  // Add the PR to the project
  const newItemID = await addItemToProject(process.env.ITEM_NODE_ID, projectID)

  // Determine the feature and size
  const feature = getFeature(data)
  const size = getSize(data)
  const sizeType = findSingleSelectID(size, 'Size', data)

  // If this is the OS repo, determine if this is a first time contributor
  // If yes, set the author to 'first time contributor' instead of to the author login
  let firstTimeContributor
  if (process.env.REPO === 'github/docs') {
    const contributorData = await graphql(
      `
        query ($author: String!) {
          user(login: $author) {
            contributionsCollection {
              pullRequestContributionsByRepository {
                contributions {
                  totalCount
                }
                repository {
                  nameWithOwner
                }
              }
              issueContributionsByRepository {
                contributions {
                  totalCount
                }
                repository {
                  nameWithOwner
                }
              }
            }
          }
        }
      `,
      {
        author: process.env.AUTHOR_LOGIN,
        headers: {
          authorization: `token ${process.env.TOKEN}`,
        },
      },
    )
    const docsPRData =
      contributorData.user.contributionsCollection.pullRequestContributionsByRepository.filter(
        (item) => item.repository.nameWithOwner === 'github/docs',
      )[0]
    const prCount = docsPRData ? docsPRData.contributions.totalCount : 0

    const docsIssueData =
      contributorData.user.contributionsCollection.issueContributionsByRepository.filter(
        (item) => item.repository.nameWithOwner === 'github/docs',
      )[0]
    const issueCount = docsIssueData ? docsIssueData.contributions.totalCount : 0

    if (prCount + issueCount <= 1) {
      firstTimeContributor = true
    }
  }
  const turnaround = process.env.REPO === 'github/docs' ? 3 : 2
  // Generate a mutation to populate fields for the new project item
  const updateProjectV2ItemMutation = generateUpdateProjectV2ItemFieldMutation({
    item: newItemID,
    author: firstTimeContributor ? ':star: first time contributor' : process.env.AUTHOR_LOGIN,
    turnaround,
    feature,
  })

  // Determine which variable to use for the contributor type
  let contributorType
  if (await isDocsTeamMember(process.env.AUTHOR_LOGIN)) {
    contributorType = docsMemberTypeID
  } else if (await isGitHubOrgMember(process.env.AUTHOR_LOGIN)) {
    contributorType = hubberTypeID
  } else if (process.env.REPO === 'github/docs') {
    contributorType = osContributorTypeID
  } else {
    // use hubber as the fallback so that the PR doesn't get lost on the board
    contributorType = hubberTypeID
  }

  console.log(`Populating fields for item: ${newItemID}`)

  await graphql(updateProjectV2ItemMutation, {
    project: projectID,
    statusID,
    statusValueID: readyForReviewID,
    datePostedID,
    reviewDueDateID,
    contributorTypeID,
    contributorType,
    sizeTypeID,
    sizeType,
    featureID,
    authorID,
    headers: {
      authorization: `token ${process.env.TOKEN}`,
    },
  })
  console.log('Done populating fields for item')

  return newItemID
}

run().catch((error) => {
  console.log(`#ERROR# ${error}`)
  process.exit(1)
})
