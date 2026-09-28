import dotenv from 'dotenv'
import { Octokit } from '@octokit/rest'
import { retry } from '@octokit/plugin-retry'

if (!process.env.GITHUB_TOKEN) {
  dotenv.config({ quiet: true })
}

const RetryingOctokit = Octokit.plugin(retry)

// this module needs to work in development, production, and GitHub Actions
//
// GITHUB_TOKEN comes from one of the following sources:
// 1. set in the .env file (development)
// 2. set as a Heroku config var (staging and production)
// 3. an installation token granted via GitHub Actions
const apiToken = process.env.GITHUB_TOKEN

// See https://github.com/octokit/rest.js/issues/1207
// Pass `token` to authenticate as something other than GITHUB_TOKEN.
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

// Duck-typing instead of `instanceof RequestError` on purpose.
// `@octokit/request` throws a RequestError built from its own nested copy of
// `@octokit/request-error`, which is a different module instance than the
// top-level one. The two classes are not identical, so `instanceof` always
// returns false across that boundary.
export function isRequestError(
  error: unknown,
  status?: number,
): error is Error & { status: number } {
  if (!(error instanceof Error) || !('status' in error)) return false
  const errorStatus = (error as { status: unknown }).status
  if (typeof errorStatus !== 'number') return false
  return status === undefined || errorStatus === status
}
