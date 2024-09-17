import { readFileSync } from 'fs'

// Parses the action event payload sets repo and owner to an object from runner environment
export function getActionContext() {
  if (!process.env.GITHUB_EVENT_PATH) {
    if (!process.env.CI) {
      console.warn(
        `
      If you're trying to run this locally, to simulate this create a file like this:

      echo '{"repository": {"owner": {"login": "github"}, "name": "docs-internal"}}' > /tmp/event-path.json
      export GITHUB_EVENT_PATH=/tmp/event-path.json

      `.trim(),
      )
    }
    throw new Error('process.env.GITHUB_EVENT_PATH is not set')
  }
  const context = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'))
  if (context.repository) {
    context.owner = context.repository.owner.login
    context.repo = context.repository.name
  } else {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
    context.owner = owner
    context.repo = repo
  }
  return context
}
