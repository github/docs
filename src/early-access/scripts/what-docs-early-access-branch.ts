import { getOctokit } from '@actions/github'
import { setOutput } from '@actions/core'

const MAX_RETRIES = 3
const RETRY_DELAY_MS = 5000
const RETRY_DELAY_SECONDS = RETRY_DELAY_MS / 1000

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function main(): Promise<void> {
  const { BRANCH_NAME, GITHUB_TOKEN } = process.env
  if (!BRANCH_NAME) throw new Error("'BRANCH_NAME' env var not set")
  if (!GITHUB_TOKEN) throw new Error("'GITHUB_TOKEN' env var not set")

  const OUTPUT_KEY = 'branch'

  // If being run from a PR, this becomes 'my-cool-branch'.
  // If run on main, with the `workflow_dispatch` action for
  // example, the value becomes 'main'.
  const github = getOctokit(GITHUB_TOKEN)

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      await github.rest.repos.getBranch({
        owner: 'github',
        repo: 'docs-early-access',
        branch: BRANCH_NAME,
      })
      console.log(`Using docs-early-access branch called '${BRANCH_NAME}'.`)
      setOutput(OUTPUT_KEY, BRANCH_NAME)
      return
    } catch (err) {
      if (err instanceof Error && 'status' in err && (err as { status: number }).status === 404) {
        console.log(
          `There is no docs-early-access branch called '${BRANCH_NAME}' so checking out 'main' instead.`,
        )
        setOutput(OUTPUT_KEY, 'main')
        return
      }
      // Retry on network/server errors (5xx, timeouts, etc.)
      if (attempt < MAX_RETRIES) {
        console.warn(
          `Attempt ${attempt}/${MAX_RETRIES} failed with error: ${err instanceof Error ? err.message : String(err)}. Retrying in ${RETRY_DELAY_SECONDS}s...`,
        )
        await sleep(RETRY_DELAY_MS)
      } else {
        throw err
      }
    }
  }
}

main()
