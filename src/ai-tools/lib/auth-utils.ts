import { execSync } from 'child_process'

/**
 * Falls back to the gh CLI token, setting process.env.GITHUB_TOKEN.
 * Exits the process if neither is available.
 */
export function ensureGitHubToken(): void {
  if (!process.env.GITHUB_TOKEN) {
    try {
      const token = execSync('gh auth token', { encoding: 'utf8' }).trim()
      if (token) {
        process.env.GITHUB_TOKEN = token
        return
      }
    } catch {
      // gh CLI not available or not authenticated
    }

    console.warn(`🔑 A token is needed to run this script. Please do one of the following and try again:

1. Add a GITHUB_TOKEN to a local .env file.
2. Install https://cli.github.com and authenticate via 'gh auth login'.
    `)
    process.exit(1)
  }
}
