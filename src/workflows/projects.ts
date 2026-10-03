import { graphql } from '@octokit/graphql'

// GraphQL resolves teams by slug, not numeric ID. A rename returns null, so
// update this by hand if the Docs team is renamed.
const DOCS_TEAM_SLUG = 'technical-content'

export interface ProjectV2FieldNode {
  name: string
  id: string
  options?: Array<{ name: string; id: string }>
}

export interface ProjectV2Data {
  organization: {
    projectV2: {
      id: string
      fields: {
        nodes: ProjectV2FieldNode[]
      }
    }
  }
}

interface TeamMemberData {
  organization: {
    team: {
      members: {
        nodes: Array<{ login: string }>
      }
    } | null
  }
}

interface OrgMemberData {
  user: {
    organization: { name: string } | null
  }
}

interface MutationResult {
  [key: string]: { item: { id: string } }
}

export interface FileNode {
  path: string
  additions: number
  deletions: number
}

export interface ItemData {
  item: {
    __typename: string
    files: {
      nodes: FileNode[]
    }
    author?: {
      login: string
    }
    assignees?: {
      nodes: Array<{ login: string }>
    }
  }
}

export function findFieldID(fieldName: string, data: ProjectV2Data) {
  const field = data.organization.projectV2.fields.nodes.find(
    (fieldNode) => fieldNode.name === fieldName,
  )

  if (field && field.id) {
    return field.id
  } else {
    throw new Error(`A field called "${fieldName}" was not found. Check if the field was renamed.`)
  }
}

export function findSingleSelectID(
  singleSelectName: string,
  fieldName: string,
  data: ProjectV2Data,
) {
  const field = data.organization.projectV2.fields.nodes.find(
    (fieldData) => fieldData.name === fieldName,
  )
  if (!field) {
    throw new Error(`A field called "${fieldName}" was not found. Check if the field was renamed.`)
  }

  const singleSelect = field.options?.find((option) => option.name === singleSelectName)

  if (singleSelect && singleSelect.id) {
    return singleSelect.id
  } else {
    throw new Error(
      `A single select called "${singleSelectName}" for the field "${fieldName}" was not found. Check if the single select was renamed.`,
    )
  }
}

// Existing project items keep their item IDs instead of creating duplicates.
export async function addItemsToProject(items: string[], project: string) {
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

  const newItems: MutationResult = await graphql(mutation, {
    project,
    headers: {
      authorization: `token ${process.env.TOKEN}`,
    },
  })

  const newItemIDs = Object.entries(newItems).map((item) => item[1].item.id)

  return newItemIDs
}

export async function addItemToProject(item: string, project: string) {
  const newItemIDs = await addItemsToProject([item], project)

  const newItemID = newItemIDs[0]

  return newItemID
}

export async function isDocsTeamMember(login: string) {
  // docs-bot and copilot count as Docs team members without GraphQL lookup.
  if (login === 'docs-bot' || login === 'copilot') {
    return true
  }
  const data: TeamMemberData = await graphql(
    `
      query ($slug: String!) {
        organization(login: "github") {
          team(slug: $slug) {
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
      slug: DOCS_TEAM_SLUG,
      headers: {
        authorization: `token ${process.env.TOKEN}`,
      },
    },
  )

  // A renamed team returns null, so fall back instead of leaving the project item unpopulated.
  const team = data.organization.team
  if (!team) {
    console.warn(
      `Team "${DOCS_TEAM_SLUG}" did not resolve in the github org, so no author can be ` +
        `identified as a docs team member. The team was probably renamed: update ` +
        `DOCS_TEAM_SLUG in src/workflows/projects.ts.`,
    )
    return false
  }

  const teamMembers = team.members.nodes.map((entry) => entry.login)

  return teamMembers.includes(login)
}

export async function isGitHubOrgMember(login: string) {
  const data: OrgMemberData = await graphql(
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

export function formatDateForProject(date: Date) {
  return date.toISOString()
}

// Due dates add turnaround days, plus two days from Thursday or Friday and one
// from Saturday. With the default turnaround of 2, that lands on a weekday.
// Larger turnaround values can still land on a weekend.
// Holidays are not considered.
export function calculateDueDate(datePosted: Date, turnaround = 2) {
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

// This mutation populates status, contributor type, size, date posted, review
// due date, feature, and contributor on one project item.
export function generateUpdateProjectV2ItemFieldMutation({
  item,
  author,
  turnaround = 2,
  feature = '',
}: {
  item: string
  author: string
  turnaround?: number
  feature?: string
}) {
  const datePosted = new Date()
  const dueDate = calculateDueDate(datePosted, turnaround)

  // Literal values write strings directly instead of variable references.
  function generateMutationToUpdateField({
    item: itemId,
    fieldID,
    value,
    fieldType,
    literal = false,
  }: {
    item: string
    fieldID: string
    value: string
    fieldType: string
    literal?: boolean
  }) {
    const parsedValue = literal ? `${fieldType}: "${value}"` : `${fieldType}: ${value}`

    // GraphQL mutation IDs reject characters outside a-z0-9, so strip them.
    return `
      set_${fieldID.slice(1)}_item_${itemId.replaceAll(
        /[^a-z0-9]/g,
        '',
      )}: updateProjectV2ItemFieldValue(input: {
        projectId: $project
        itemId: "${itemId}"
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

export function getFeature(data: ItemData) {
  if (data.item.__typename !== 'PullRequest') {
    return ''
  }

  const paths = data.item.files.nodes.map((node) => node.path)

  // Docs repos derive docs sets from changed content directories and ignore data files.
  if (
    process.env.REPO === 'github/docs-internal' ||
    process.env.REPO === 'github/docs' ||
    process.env.REPO === 'github/docs-early-access'
  ) {
    const features: Set<string> = new Set([])
    for (const path of paths as string[]) {
      const pathComponents = path.split('/')
      if (pathComponents[0] === 'content') {
        features.add(pathComponents[1])
      }
    }
    const feature = Array.from(features).join()

    return feature
  }

  // For github/github, classify by the OpenAPI files instead.
  if (process.env.REPO === 'github/github') {
    const features: Set<string> = new Set([])
    if (paths.some((path: string) => path.startsWith('app/api/description'))) {
      features.add('OpenAPI')
      for (const path of paths as string[]) {
        if (path.startsWith('app/api/description/operations')) {
          features.add(path.split('/')[4])
          features.add('rest')
        }
        if (path.startsWith('app/api/description/webhooks')) {
          features.add(path.split('/')[4])
          features.add('webhooks')
        }
        if (path.startsWith('app/api/description/components/schemas/webhooks')) {
          features.add('webhooks')
        }
      }
    }

    const feature = Array.from(features).join()

    return feature
  }

  if (process.env.REPO === 'github/docs-strategy') {
    return 'CD plan'
  }

  return ''
}

export function getSize(data: ItemData) {
  // An issue has no files to measure, so guess small.
  if (data.item.__typename !== 'PullRequest') {
    return 'S'
  }

  // For github/github, size by the count and line changes of OpenAPI files.
  if (process.env.REPO === 'github/github') {
    let numFiles = 0
    let numChanges = 0
    for (const node of data.item.files.nodes) {
      if (node.path.startsWith('app/api/description')) {
        numFiles += 1
        numChanges += node.additions
        numChanges += node.deletions
      }
    }
    if (numFiles < 5 && numChanges < 10) {
      return 'XS'
    } else if (numFiles < 10 && numChanges < 50) {
      return 'S'
    } else if (numFiles < 10 && numChanges < 250) {
      return 'M'
    } else {
      return 'L'
    }
  } else {
    // Otherwise size by the count and line changes of all changed files.
    let numFiles = 0
    let numChanges = 0
    for (const node of data.item.files.nodes) {
      numFiles += 1
      numChanges += node.additions
      numChanges += node.deletions
    }
    if (numFiles < 5 && numChanges < 10) {
      return 'XS'
    } else if (numFiles < 10 && numChanges < 50) {
      return 'S'
    } else if (numFiles < 10 && numChanges < 250) {
      return 'M'
    } else {
      return 'L'
    }
  }
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
  getFeature,
  getSize,
}
