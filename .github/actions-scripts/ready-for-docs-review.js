import { graphql } from '@octokit/graphql'

import {
  addItemToProject,
  isDocsTeamMember,
  findFieldID,
  findSingleSelectID,
  generateUpdateProjectNextItemFieldMutation,
} from './projects.js'

async function run() {
  // Get info about the docs-content review board project
  const data = await graphql(
    `
      query ($organization: String!, $projectNumber: Int!) {
        organization(login: $organization) {
          projectNext(number: $projectNumber) {
            id
            fields(first: 20) {
              nodes {
                id
                name
                settings
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
        'GraphQL-Features': 'projects_next_graphql',
      },
    }
  )

  // Get the project ID
  const projectID = data.organization.projectNext.id

  // Get the ID of the fields that we want to populate
  const datePostedID = findFieldID('Date posted', data)
  const reviewDueDateID = findFieldID('Review due date', data)
  const statusID = findFieldID('Status', data)
  const featureID = findFieldID('Feature', data)
  const contributorTypeID = findFieldID('Contributor type', data)
  const authorID = findFieldID('Author', data)

  // Get the ID of the single select values that we want to set
  const readyForReviewID = findSingleSelectID('Ready for review', 'Status', data)
  const hubberTypeID = findSingleSelectID('Hubber or partner', 'Contributor type', data)
  const docsMemberTypeID = findSingleSelectID('Docs team', 'Contributor type', data)
  const osContributorTypeID = findSingleSelectID('OS contributor', 'Contributor type', data)

  // Add the PR to the project
  const newItemID = await addItemToProject(process.env.PR_NODE_ID, projectID)

  // Generate a mutation to populate fields for the new project item
  const updateProjectNextItemMutation = generateUpdateProjectNextItemFieldMutation({
    item: newItemID,
    author: process.env.AUTHOR_LOGIN,
    turnaround: 2,
  })

  // Determine which variable to use for the contributor type
  let contributorType
  if (await isDocsTeamMember(process.env.AUTHOR_LOGIN)) {
    contributorType = docsMemberTypeID
  } else if (process.env.PR_REPO === 'github/docs') {
    contributorType = osContributorTypeID
  } else {
    contributorType = hubberTypeID
  }

  console.log(`Populating fields for item: ${newItemID}`)

  await graphql(updateProjectNextItemMutation, {
    project: projectID,
    statusID: statusID,
    statusValueID: readyForReviewID,
    datePostedID: datePostedID,
    reviewDueDateID: reviewDueDateID,
    contributorTypeID: contributorTypeID,
    contributorType: contributorType,
    featureID: featureID,
    authorID: authorID,
    headers: {
      authorization: `token ${process.env.TOKEN}`,
      'GraphQL-Features': 'projects_next_graphql',
    },
  })
  console.log('Done populating fields for item')

  return newItemID
}

run().catch((error) => {
  console.log(`#ERROR# ${error}`)
  process.exit(1)
})
