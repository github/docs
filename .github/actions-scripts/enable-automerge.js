import { getOctokit } from '@actions/github'

main()
async function main() {
  const [org, repo] = process.env.GITHUB_REPOSITORY.split('/')
  if (!org || !repo) {
    throw new Error('GITHUB_REPOSITORY environment variable not set')
  }
  const prNumber = process.env.AUTOMERGE_PR_NUMBER
  if (!prNumber) {
    throw new Error(`AUTOMERGE_PR_NUMBER environment variable not set`)
  }
  const token = process.env.GITHUB_TOKEN
  if (!token) {
    throw new Error(`GITHUB_TOKEN environment variable not set`)
  }
  const github = getOctokit(token)
  const pull = await github.rest.pulls.get({
    owner: org,
    repo,
    pull_number: parseInt(prNumber),
  })

  const pullNodeId = pull.data.node_id
  console.log(`Pull request GraphQL Node ID: ${pullNodeId}`)

  const mutation = `mutation ($id: ID!) {
    enablePullRequestAutoMerge(input: {
      pullRequestId: $id,
      mergeMethod: MERGE
    }) {
      clientMutationId
    }
  }`
  const variables = {
    id: pullNodeId,
  }

  const graph = await github.graphql(mutation, variables)
  console.log('GraphQL mutation result:\n' + JSON.stringify(graph))

  if (graph.errors && graph.errors.length > 0) {
    console.error(
      'ERROR! Failed to enable auto-merge:\n - ' +
        graph.errors.map((error) => error.message).join('\n - '),
    )
  } else {
    console.log('Auto-merge enabled!')
  }
}
