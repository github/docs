const { diff } = require('@graphql-inspector/core')
const { loadSchema } = require('@graphql-tools/load')
const git = require('../../lib/git-utils')
const fs = require('fs')
// check for required PAT
if (!process.env.GITHUB_TOKEN) {
  console.error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
  process.exit(1)
}

main()

async function main () {
  // Load the previous schema from this repo
  // TODO -- how to make sure that this script runs _before_ this artifact is updated?
  // Maybe hook into the existing `update-files` script instead of being a stand-alone script.
  const oldSchemaString = fs.readFileSync('data/graphql/schema.docs.graphql').toString()

  // Load the latest schema from github/github
  const tree = await git.getTree('github', 'github', 'heads/master')
  const schemaFileBlob = tree.find(entry => entry.path.includes('config/schema.docs.graphql') && entry.type === 'blob')
  const newSchemaBuffer = await git.getContentsForBlob('github', 'github', schemaFileBlob)

  // Create schema objects out of the strings
  const oldSchema = await loadSchema(oldSchemaString)
  const newSchema = await loadSchema(newSchemaBuffer.toString())

  // Generate changes between the two schemas
  const changes = diff(oldSchema, newSchema)
  console.log(changes)

  // If there were any changes, create a changelog entry
  if (changes.length > 0) {
    const previousChangelogString = fs.readFileSync('lib/graphql/static/changelog.json')
    const previousChangelog = JSON.parse(previousChangelogString)

    // Build a `yyyy-mm-dd`-formatted date string
    const today = new Date()
    const todayString = String(today.getFullYear()) + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0')

    // TODO format `changes` into strings
    const formattedChanges = []

    // TODO how are these populated?
    // {
    //   "title": "The [Checks preview](/graphql/overview/schema-previews#checks-preview) includes these changes:",
    //   "changes": [
    //     "Enum value `STALE` was added to enum `CheckConclusionState`",
    //     "Enum value `SKIPPED` was added to enum `CheckConclusionState`"
    //   ]
    // }
    const previewChanges = []

    // TODO how are these populated?
    // "upcomingChanges": [
    //   {
    //     "title": "The following changes will be made to the schema:",
    //     "changes": [
    //       "On member `Issue.timeline`: `timeline` will be removed. Use Issue.timelineItems instead. **Effective 2020-10-01**.",
    //       "On member `PullRequest.timeline`: `timeline` will be removed. Use PullRequest.timelineItems instead. **Effective 2020-10-01**."
    //     ]
    //   }
    // ]
    const upcomingChanges = []

    // add a new entry to the changelog data
    previousChangelog.unshift(
      {
        date: todayString,
        schemaChanges: [
          {
            title: 'The GraphQL schema includes these changes:',
            changes: formattedChanges
          }
        ],
        previewChanges: previewChanges,
        upcomingChanges: upcomingChanges
      }
    )

    // rewrite the updated changelog
    fs.writeFileSync('lib/graphql/static/changelog.json', JSON.stringify(previousChangelog, null, 2))
  }
}
