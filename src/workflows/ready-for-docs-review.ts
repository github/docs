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
} from './projects'

/**
 * Determines if a PR is authored by Copilot and extracts the human assignee
 * @param data GraphQL response data containing PR information
 * @returns Object with isCopilotAuthor boolean and copilotAssignee string
 */
function getCopilotAuthorInfo(data: Record<string, unknown>): {
  isCopilotAuthor: boolean
  copilotAssignee: string
} {
  const item = data.item as Record<string, unknown>
  const author = item.author as Record<string, unknown> | undefined
  const assigneesObj = item.assignees as Record<string, unknown> | undefined

  // Check if this is a Copilot-authored PR
  const isCopilotAuthor = !!(
    item.__typename === 'PullRequest' &&
    author &&
    author.login === 'copilot-swe-agent'
  )

  // For Copilot PRs, find the appropriate assignee (excluding Copilot itself)
  let copilotAssignee = ''
  if (isCopilotAuthor && assigneesObj && assigneesObj.nodes) {
    const nodes = assigneesObj.nodes as Array<Record<string, unknown>>
    const assigneeLogins = nodes
      .map((assignee: Record<string, unknown>) => assignee.login as string)
      .filter((login: string) => login !== 'copilot-swe-agent')

    // Use the first non-Copilot assignee
    copilotAssignee = assigneeLogins.length > 0 ? assigneeLogins[0] : ''
  }

  return { isCopilotAuthor, copilotAssignee: copilotAssignee || '' }
}

/**
 * Determines the appropriate author field value based on contributor type
 * @param isCopilotAuthor Whether the PR is authored by Copilot
 * @param copilotAssignee The human assignee for Copilot PRs (empty string if none)
 * @param firstTimeContributor Whether this is a first-time contributor
 * @returns The formatted author field value
 */
function getAuthorFieldValue(
  isCopilotAuthor: boolean,
  copilotAssignee: string,
  firstTimeContributor: boolean | undefined,
): string {
  if (isCopilotAuthor) {
    return copilotAssignee ? `Copilot + ${copilotAssignee}` : 'Copilot'
  }

  if (firstTimeContributor) {
    return ':star: first time contributor'
  }

  return process.env.AUTHOR_LOGIN || ''
}

async function run() {
  // Get info about the docs-content review board project
  const data: Record<string, unknown> = await graphql(
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
            author {
              login
            }
            assignees(first: 10) {
              nodes {
                login
              }
            }
          }
        }
      }
    `,
    {
      id: process.env.ITEM_NODE_ID,
      organization: process.env.ORGANIZATION,
      projectNumber: parseInt(process.env.PROJECT_NUMBER || ''),
      headers: {
        authorization: `token ${process.env.TOKEN}`,
      },
    },
  )

  // Get the project ID
  const organization = data.organization as Record<string, unknown>
  const projectV2 = organization.projectV2 as Record<string, unknown>
  const projectID = projectV2.id as string

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
  const newItemID = await addItemToProject(process.env.ITEM_NODE_ID || '', projectID)

  // Determine the feature and size
  const feature = getFeature(data)
  const size = getSize(data)
  const sizeType = findSingleSelectID(size, 'Size', data)

  // If this is the OS repo, determine if this is a first time contributor
  // If yes, set the author to 'first time contributor' instead of to the author login
  let firstTimeContributor
  if (process.env.REPO === 'github/docs') {
    const contributorData: Record<string, unknown> = await graphql(
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
    const user = contributorData.user as Record<string, unknown>
    const contributionsCollection = user.contributionsCollection as Record<string, unknown>
    const pullRequestContributions =
      contributionsCollection.pullRequestContributionsByRepository as Array<Record<string, unknown>>
    const docsPRData = pullRequestContributions.filter((item: Record<string, unknown>) => {
      const repository = item.repository as Record<string, unknown>
      return repository.nameWithOwner === 'github/docs'
    })[0]
    const prContributions = docsPRData
      ? (docsPRData.contributions as Record<string, unknown>)
      : undefined
    const prCount = prContributions ? (prContributions.totalCount as number) : 0

    const issueContributions = contributionsCollection.issueContributionsByRepository as Array<
      Record<string, unknown>
    >
    const docsIssueData = issueContributions.filter((item: Record<string, unknown>) => {
      const repository = item.repository as Record<string, unknown>
      return repository.nameWithOwner === 'github/docs'
    })[0]
    const issueContributionsObj = docsIssueData
      ? (docsIssueData.contributions as Record<string, unknown>)
      : undefined
    const issueCount = issueContributionsObj ? (issueContributionsObj.totalCount as number) : 0

    if (prCount + issueCount <= 1) {
      firstTimeContributor = true
    }
  }
  const turnaround = process.env.REPO === 'github/docs' ? 3 : 2

  // Check if this is a Copilot-authored PR and get the human assignee
  const { isCopilotAuthor, copilotAssignee } = getCopilotAuthorInfo(data)

  // Determine the author field value
  const authorFieldValue = getAuthorFieldValue(
    isCopilotAuthor,
    copilotAssignee,
    firstTimeContributor,
  )

  // Generate a mutation to populate fields for the new project item
  const updateProjectV2ItemMutation = generateUpdateProjectV2ItemFieldMutation({
    item: newItemID,
    author: authorFieldValue,
    turnaround,
    feature,
  })

  // Determine which variable to use for the contributor type
  let contributorType
  if (isCopilotAuthor) {
    // Treat Copilot PRs as Docs team
    contributorType = docsMemberTypeID
  } else if (await isDocsTeamMember(process.env.AUTHOR_LOGIN || '')) {
    contributorType = docsMemberTypeID
  } else if (await isGitHubOrgMember(process.env.AUTHOR_LOGIN || '')) {
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

export { run }

try {
  await run()
} catch (error) {
  console.log(`#ERROR# ${error}`)
  process.exit(1)
}
