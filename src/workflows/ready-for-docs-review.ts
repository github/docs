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
  type ProjectV2Data,
  type ItemData,
} from './projects'

// Whether copilot-swe-agent authored the PR, and its first other assignee.
function getCopilotAuthorInfo(data: ItemData): {
  isCopilotAuthor: boolean
  copilotAssignee: string
} {
  const item = data.item

  const isCopilotAuthor = !!(
    item.__typename === 'PullRequest' &&
    item.author &&
    item.author.login === 'copilot-swe-agent'
  )

  // copilot-swe-agent is usually an assignee too, so skip it.
  let copilotAssignee = ''
  if (isCopilotAuthor && item.assignees && item.assignees.nodes) {
    const assigneeLogins = item.assignees.nodes
      .map((assignee) => assignee.login)
      .filter((login) => login !== 'copilot-swe-agent')

    copilotAssignee = assigneeLogins.length > 0 ? assigneeLogins[0] : ''
  }

  return { isCopilotAuthor, copilotAssignee: copilotAssignee || '' }
}

// The value for the board's "Contributor" field, which depends on whether
// Copilot authored the PR and whether the author is a first-time contributor.
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
  const data = (await graphql(
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
  )) as ProjectV2Data & ItemData

  const projectID = data.organization.projectV2.id

  const datePostedID = findFieldID('Date posted', data)
  const reviewDueDateID = findFieldID('Review due date', data)
  const statusID = findFieldID('Status', data)
  const featureID = findFieldID('Feature', data)
  const contributorTypeID = findFieldID('Contributor type', data)
  const sizeTypeID = findFieldID('Size', data)
  const authorID = findFieldID('Contributor', data)

  const readyForReviewID = findSingleSelectID('Ready for review', 'Status', data)
  const hubberTypeID = findSingleSelectID('Hubber or partner', 'Contributor type', data)
  const docsMemberTypeID = findSingleSelectID('Docs team', 'Contributor type', data)
  const osContributorTypeID = findSingleSelectID('OS contributor', 'Contributor type', data)

  const newItemID = await addItemToProject(process.env.ITEM_NODE_ID || '', projectID)

  const feature = getFeature(data)
  const size = getSize(data)
  const sizeType = findSingleSelectID(size, 'Size', data)

  // Check if the author is a bot account (e.g. dependabot[bot], github-actions[bot]).
  // GitHub bot logins end with '[bot]' and cannot be resolved as regular GitHub users,
  // so we skip any user-specific GraphQL queries for them.
  const isBotAuthor = (process.env.AUTHOR_LOGIN || '').endsWith('[bot]')

  // If this is the OS repo, determine if this is a first time contributor
  // If yes, set the author to 'first time contributor' instead of to the author login
  // Bot accounts (e.g. dependabot[bot]) are not resolvable as GitHub users, so skip this check.
  let firstTimeContributor
  if (!isBotAuthor && process.env.REPO === 'github/docs') {
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

  const { isCopilotAuthor, copilotAssignee } = getCopilotAuthorInfo(data)

  const authorFieldValue = getAuthorFieldValue(
    isCopilotAuthor,
    copilotAssignee,
    firstTimeContributor,
  )

  const updateProjectV2ItemMutation = generateUpdateProjectV2ItemFieldMutation({
    item: newItemID,
    author: authorFieldValue,
    turnaround,
    feature,
  })

  let contributorType
  if (isCopilotAuthor || isBotAuthor) {
    // Treat Copilot and bot-authored PRs (e.g. dependabot[bot]) as Docs team
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
