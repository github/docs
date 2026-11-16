import dotenv from 'dotenv'
import { Octokit } from '@octokit/rest'
import { retry } from '@octokit/plugin-retry'

if (!process.env.GITHUB_TOKEN) {
  dotenv.config({ quiet: true })
}

const RetryingOctokit = Octokit.plugin(retry)

// GITHUB_TOKEN can come from .env, a Heroku config var, or a GitHub Actions
// installation token, because this module runs in every environment.
const apiToken = process.env.GITHUB_TOKEN

// token overrides GITHUB_TOKEN for workflows that need a different installation token.
export default function github(token?: string) {
  return new Octokit({
    auth: `token ${token || apiToken}`,
  })
}

export function retryingGithub(token?: string) {
  return new RetryingOctokit({
    auth: `token ${token || apiToken}`,
  })
}

// Duck-type instead of using instanceof because nested Octokit dependencies can
// construct RequestError classes from different module instances.
export function isRequestError(
  error: unknown,
  status?: number,
): error is Error & { status: number } {
  if (!(error instanceof Error) || !('status' in error)) return false
  const errorStatus = (error as { status: unknown }).status
  if (typeof errorStatus !== 'number') return false
  return status === undefined || errorStatus === status
}
