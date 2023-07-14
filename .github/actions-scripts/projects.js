// eslint-disable-next-line import/no-extraneous-dependencies
import { graphql } from '@octokit/graphql'

// Shared functions for managing projects (memex)

// Pull out the node ID of a project field
export function findFieldID(fieldName, data) {
  const field = data.organization.projectV2.fields.nodes.find((field) => field.name === fieldName)

  if (field && field.id) {
    return field.id
  } else {
    throw new Error(`A field called "${fieldName}" was not found. Check if the field was renamed.`)
  }
}

// Pull out the node ID of a single select field value
export function findSingleSelectID(singleSelectName, fieldName, data) {
  const field = data.organization.projectV2.fields.nodes.find((field) => field.name === fieldName)
  if (!field) {
    throw new Error(`A field called "${fieldName}" was not found. Check if the field was renamed.`)
  }

  const singleSelect = field.options.find((field) => field.name === singleSelectName)

  if (singleSelect && singleSelect.id) {
    return singleSelect.id
  } else {
    throw new Error(
      `A single select called "${singleSelectName}" for the field "${fieldName}" was not found. Check if the single select was renamed.`,
    )
  }
}

// Given a list of PR/issue node IDs and a project node ID,
// adds the PRs/issues to the project
// and returns the node IDs of the project items
export async function addItemsToProject(items, project) {
  console.log(`Adding ${items} to project ${project}`)

  const mutations = items.map(
    (item, index) => `
    item_${index}: addProjectV2ItemById(input: {
      projectId: $project
      contentId: "${item}"
    }) {
      item {
        id
      }
    }
    `,
  )

  const mutation = `
  mutation($project:ID!) {
    ${mutations.join(' ')}
  }
  `

  const newItems = await graphql(mutation, {
    project,
    headers: {
      authorization: `token ${process.env.TOKEN}`,
    },
  })

  // The output of the mutation is
  // {"item_0":{"projectNextItem":{"id":ID!}},...}
  // Pull out the ID for each new item

  const newItemIDs = Object.entries(newItems).map((item) => item[1].item.id)

  return newItemIDs
}

export async function addItemToProject(item, project) {
  const newItemIDs = await addItemsToProject([item], project)

  const newItemID = newItemIDs[0]

  return newItemID
}

// Given a GitHub login, returns a bool indicating
// whether the login is part of the docs team
export async function isDocsTeamMember(login) {
  // Get all members of the docs team
  const data = await graphql(
    `
      query {
        organization(login: "github") {
          team(slug: "docs") {
            members {
              nodes {
                login
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `token ${process.env.TOKEN}`,
      },
    },
  )

  const teamMembers = data.organization.team.members.nodes.map((entry) => entry.login)

  return teamMembers.includes(login)
}

// Given a GitHub login, returns a bool indicating
// whether the login is part of the GitHub org
export async function isGitHubOrgMember(login) {
  const data = await graphql(
    `
      query {
        user(login: "${login}") {
          organization(login: "github"){
            name
          }
        }
      }
    `,
    {
      headers: {
        authorization: `token ${process.env.TOKEN}`,
      },
    },
  )

  return Boolean(data.user.organization)
}

// Formats a date object into the required format for projects
export function formatDateForProject(date) {
  return date.toISOString()
}

// Given a date object and optional turnaround time
// Calculate the date {turnaround} business days from now
// (excluding weekends; not considering holidays)
export function calculateDueDate(datePosted, turnaround = 2) {
  let daysUntilDue
  switch (datePosted.getDay()) {
    case 4: // Thursday
      daysUntilDue = turnaround + 2
      break
    case 5: // Friday
      daysUntilDue = turnaround + 2
      break
    case 6: // Saturday
      daysUntilDue = turnaround + 1
      break
    default:
      daysUntilDue = turnaround
  }
  const millisecPerDay = 24 * 60 * 60 * 1000
  const dueDate = new Date(datePosted.getTime() + millisecPerDay * daysUntilDue)
  return dueDate
}

// Given a project item node ID and author login
// generates a GraphQL mutation to populate:
//   - "Status" (as variable passed with the request)
//   - "Date posted" (as today)
//   - "Review due date" (as today + {turnaround} weekdays)
//   - "Contributor type" (as variable passed with the request)
//   - "Feature" (as {feature})
//   - "Author" (as {author})"
export function generateUpdateProjectV2ItemFieldMutation({
  item,
  author,
  turnaround = 2,
  feature = '',
}) {
  const datePosted = new Date()
  const dueDate = calculateDueDate(datePosted, turnaround)

  // Build the mutation to update a single project field
  // Specify literal=true to indicate that the value should be used as a string, not a variable
  function generateMutationToUpdateField({ item, fieldID, value, fieldType, literal = false }) {
    const parsedValue = literal ? `${fieldType}: "${value}"` : `${fieldType}: ${value}`

    // Strip all non-alphanumeric out of the item ID when creating the mutation ID to avoid a GraphQL parsing error
    // (statistically, this should still give us a unique mutation ID)
    return `
      set_${fieldID.slice(1)}_item_${item.replaceAll(
        /[^a-z0-9]/g,
        '',
      )}: updateProjectV2ItemFieldValue(input: {
        projectId: $project
        itemId: "${item}"
        fieldId: ${fieldID}
        value: { ${parsedValue} }
      }) {
      projectV2Item {
        id
      }
    }
    `
  }

  const mutation = `
    mutation(
      $project: ID!
      $statusID: ID!
      $statusValueID: String!
      $datePostedID: ID!
      $reviewDueDateID: ID!
      $contributorTypeID: ID!
      $contributorType: String!
      $sizeTypeID: ID!
      $sizeType: String!
      $featureID: ID!
      $authorID: ID!
    ) {
      ${generateMutationToUpdateField({
        item,
        fieldID: '$statusID',
        value: '$statusValueID',
        fieldType: 'singleSelectOptionId',
      })}
      ${generateMutationToUpdateField({
        item,
        fieldID: '$datePostedID',
        value: formatDateForProject(datePosted),
        fieldType: 'date',
        literal: true,
      })}
      ${generateMutationToUpdateField({
        item,
        fieldID: '$reviewDueDateID',
        value: formatDateForProject(dueDate),
        fieldType: 'date',
        literal: true,
      })}
      ${generateMutationToUpdateField({
        item,
        fieldID: '$contributorTypeID',
        value: '$contributorType',
        fieldType: 'singleSelectOptionId',
      })}
      ${generateMutationToUpdateField({
        item,
        fieldID: '$sizeTypeID',
        value: '$sizeType',
        fieldType: 'singleSelectOptionId',
      })}
      ${generateMutationToUpdateField({
        item,
        fieldID: '$featureID',
        value: feature,
        fieldType: 'text',
        literal: true,
      })}
      ${generateMutationToUpdateField({
        item,
        fieldID: '$authorID',
        value: author,
        fieldType: 'text',
        literal: true,
      })}
      }
    `

  return mutation
}

export default {
  addItemsToProject,
  addItemToProject,
  isDocsTeamMember,
  isGitHubOrgMember,
  findFieldID,
  findSingleSelectID,
  formatDateForProject,
  calculateDueDate,
  generateUpdateProjectV2ItemFieldMutation,
}
