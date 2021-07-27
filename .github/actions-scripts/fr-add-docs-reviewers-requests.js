import { graphql } from '@octokit/graphql'

// Given a list of PR/issue node IDs and a project node ID,
// adds the PRs/issues to the project
// and returns the node IDs of the project items
async function addItemsToProject(items, project) {
  console.log(`Adding ${items} to project ${project}`)

  const mutations = items.map(
    (pr, index) => `
    pr_${index}: addProjectNextItem(input: {
      projectId: $project
      contentId: "${pr}"
    }) {
      projectNextItem {
        id
      }
    }
    `
  )

  const mutation = `
  mutation($project:ID!) {
    ${mutations.join(' ')}
  }
  `

  const newItems = await graphql(mutation, {
    project: project,
    headers: {
      authorization: `token ${process.env.TOKEN}`,
      'GraphQL-Features': 'projects_next_graphql',
    },
  })

  // The output of the mutation is
  // {"pr_0":{"projectNextItem":{"id":ID!}},...}
  // Pull out the ID for each new item
  const newItemIDs = Object.entries(newItems).map((item) => item[1].projectNextItem.id)

  console.log(`New item IDs: ${newItemIDs}`)

  return newItemIDs
}

// Given a list of project item node IDs and a list of corresponding authors
// generates a GraphQL mutation to populate:
//   - "Status" (as "Ready for review" option)
//   - "Date posted" (as today)
//   - "Review due date" (as today + 2 weekdays)
//   - "Feature" (as "OpenAPI schema update")
//   - "Contributor type" (as "Hubber or partner" option)
// Does not populate "Review needs" or "Size"
function generateUpdateProjectNextItemFieldMutation(items, authors) {
  // Formats a date object into the required format for projects
  function formatDate(date) {
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
  }

  // Calculate 2 weekdays from now (excluding weekends; not considering holidays)
  const datePosted = new Date()
  let daysUntilDue
  switch (datePosted.getDay()) {
    case 0: // Sunday
      daysUntilDue = 3
      break
    case 6: // Saturday
      daysUntilDue = 4
      break
    default:
      daysUntilDue = 2
  }
  const millisecPerDay = 24 * 60 * 60 * 1000
  const dueDate = new Date(datePosted.getTime() + millisecPerDay * daysUntilDue)

  // Build the mutation for a single field
  function generateMutation({ index, item, fieldID, value, literal = false }) {
    let parsedValue
    if (literal) {
      parsedValue = `value: "${value}"`
    } else {
      parsedValue = `value: ${value}`
    }

    return `
      set_${fieldID.substr(1)}_item_${index}: updateProjectNextItemField(input: {
        projectId: $project
        itemId: "${item}"
        fieldId: ${fieldID}
        ${parsedValue}
      }) {
      projectNextItem {
        id
      }
    }
    `
  }

  // Build the mutation for all fields for all items
  const mutations = items.map(
    (item, index) => `
    ${generateMutation({
      index: index,
      item: item,
      fieldID: '$statusID',
      value: '$readyForReviewID',
    })}
    ${generateMutation({
      index: index,
      item: item,
      fieldID: '$datePostedID',
      value: formatDate(datePosted),
      literal: true,
    })}
    ${generateMutation({
      index: index,
      item: item,
      fieldID: '$reviewDueDateID',
      value: formatDate(dueDate),
      literal: true,
    })}
    ${generateMutation({
      index: index,
      item: item,
      fieldID: '$contributorTypeID',
      value: '$hubberTypeID',
    })}
    ${generateMutation({
      index: index,
      item: item,
      fieldID: '$featureID',
      value: 'OpenAPI schema update',
      literal: true,
    })}
    ${generateMutation({
      index: index,
      item: item,
      fieldID: '$authorID',
      value: authors[index],
      literal: true,
    })}
  `
  )

  // Build the full mutation
  const mutation = `
    mutation(
      $project: ID!
      $statusID: ID!
      $readyForReviewID: String!
      $datePostedID: ID!
      $reviewDueDateID: ID!
      $contributorTypeID: ID!
      $hubberTypeID: String!
      $featureID: ID!
      $authorID: ID!

    ) {
      ${mutations.join(' ')}
    }
    `

  return mutation
}

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

  function findFieldID(fieldName, data) {
    const field = data.organization.projectNext.fields.nodes.find(
      (field) => field.name === fieldName
    )

    if (field && field.id) {
      return field.id
    } else {
      throw new Error(
        `A field called "${fieldName}" was not found. Check if the field was renamed.`
      )
    }
  }

  function findSingleSelectID(singleSelectName, fieldName, data) {
    const field = data.organization.projectNext.fields.nodes.find(
      (field) => field.name === fieldName
    )
    if (!field) {
      throw new Error(
        `A field called "${fieldName}" was not found. Check if the field was renamed.`
      )
    }

    const singleSelect = JSON.parse(field.settings).options.find(
      (field) => field.name === singleSelectName
    )

    if (singleSelect && singleSelect.id) {
      return singleSelect.id
    } else {
      throw new Error(
        `A single select called "${singleSelectName}" for the field "${fieldName}" was not found. Check if the single select was renamed.`
      )
    }
  }

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
  // Note: Since there is not a way to check if a PR is already on the board,
  // this will overwrite the values of PRs that are on the board
  const updateProjectNextItemMutation = generateUpdateProjectNextItemFieldMutation(
    newItemIDs,
    prAuthors
  )
  console.log(`Populating fields for these items: ${newItemIDs}`)

  await graphql(updateProjectNextItemMutation, {
    project: projectID,
    statusID: statusID,
    readyForReviewID: readyForReviewID,
    datePostedID: datePostedID,
    reviewDueDateID: reviewDueDateID,
    contributorTypeID: contributorTypeID,
    hubberTypeID: hubberTypeID,
    featureID: featureID,
    authorID: authorID,
    headers: {
      authorization: `token ${process.env.TOKEN}`,
      'GraphQL-Features': 'projects_next_graphql',
    },
  })
  console.log('Done populating fields')

  return newItemIDs
}

run().catch((error) => {
  console.log(`#ERROR# ${error}`)
  process.exit(1)
})
