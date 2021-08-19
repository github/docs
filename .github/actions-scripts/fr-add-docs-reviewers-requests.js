import { graphql } from '@octokit/graphql'

import {
  addItemsToProject,
  isDocsTeamMember,
  findFieldID,
  findSingleSelectID,
  generateUpdateProjectNextItemFieldMutation,
} from './projects.js'

async function run() {
  // Get info about the docs-content review board project
  // and about open github/github PRs
  const data = await graphql(
    `
      query ($organization: String!, $repo: String!, $projectNumber: Int!, $num_prs: Int!) {
        organization(login: $organization) {
          projectNext(number: $projectNumber) {
            id
            items(last: 100) {
              nodes {
                id
              }
            }
            fields(first: 20) {
              nodes {
                id
                name
                settings
              }
            }
          }
        }
        repository(name: $repo, owner: $organization) {
          pullRequests(last: $num_prs, states: OPEN) {
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
      projectNumber: parseInt(process.env.PROJECT_NUMBER),
      num_prs: parseInt(process.env.NUM_PRS),
      headers: {
        authorization: `token ${process.env.TOKEN}`,
        'GraphQL-Features': 'projects_next_graphql',
      },
    }
  )

  // Get the PRs that are:
  // - not draft
  // - not a train
  // - are requesting a review by docs-reviewers
  // - have not already been reviewed on behalf of docs-reviewers
  const prs = data.repository.pullRequests.nodes.filter(
    (pr) =>
      !pr.isDraft &&
      !pr.labels.nodes.find((label) => label.name === 'Deploy train 🚂') &&
      pr.reviewRequests.nodes.find(
        (requestedReviewers) => requestedReviewers.requestedReviewer.name === process.env.REVIEWER
      ) &&
      !pr.reviews.nodes
        .flatMap((review) => review.onBehalfOf.nodes)
        .find((behalf) => behalf.name === process.env.REVIEWER)
  )
  if (prs.length === 0) {
    console.log('No PRs found. Exiting.')
    return
  }

  const prIDs = prs.map((pr) => pr.id)
  const prAuthors = prs.map((pr) => pr.author.login)
  console.log(`PRs found: ${prIDs}`)

  // Get the project ID
  const projectID = data.organization.projectNext.id

  // Get the IDs of the last 100 items on the board.
  // Until we have a way to check from a PR whether the PR is in a project,
  // this is how we (roughly) avoid overwriting PRs that are already on the board.
  // If we are overwriting items, query for more items.
  const existingItemIDs = data.organization.projectNext.items.nodes.map((node) => node.id)

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

  // Add the PRs to the project
  const itemIDs = await addItemsToProject(prIDs, projectID)

  // If an item already existed on the project, the existing ID will be returned.
  // Exclude existing items going forward.
  // Until we have a way to check from a PR whether the PR is in a project,
  // this is how we (roughly) avoid overwriting PRs that are already on the board
  const newItemIDs = itemIDs.filter((id) => !existingItemIDs.includes(id))

  if (newItemIDs.length === 0) {
    console.log('All found PRs are already on the project. Exiting.')
    return
  }

  // Populate fields for the new project items
  // (Using for...of instead of forEach since the function uses await)
  for (const [index, itemID] of newItemIDs.entries()) {
    const updateProjectNextItemMutation = generateUpdateProjectNextItemFieldMutation({
      item: itemID,
      author: prAuthors[index],
      turnaround: 2,
    })
    const contributorType = isDocsTeamMember(prAuthors[index]) ? docsMemberTypeID : hubberTypeID
    console.log(`Populating fields for item: ${itemID}`)

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
  }

  return newItemIDs
}

run().catch((error) => {
  console.log(`#ERROR# ${error}`)
  process.exit(1)
})
