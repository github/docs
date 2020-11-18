#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { sortBy, reverse } = require('lodash')
const frontmatter = require('../../lib/frontmatter')
const git = require('../../lib/git-utils')
const staticChangelog = path.join(process.cwd(), 'lib/graphql/static/changelog.json')

// values for api
const owner = 'github'
const repo = 'internal-developer.github.com'
const ref = 'heads/master'

const previewsBaseLink = '/graphql/overview/schema-previews'

const changesList = /(\n*[\s\S]*?\n)$/m

// until 2018-02-14, all changelogs used the phrase 'The following changes were made to the GraphQL schema'
const schemaRegexGlobal = new RegExp('(The GraphQL schema includes these changes:|The following changes were made to the GraphQL schema:)' + changesList.source, 'mg')
const previewRegexGlobal = new RegExp('(The .*?preview.*? includes these changes:)' + changesList.source, 'mg')
const upcomingRegexGlobal = new RegExp('(The following changes will be made to the schema:)' + changesList.source, 'mg')

const schemaRegexSingle = new RegExp(schemaRegexGlobal.source, 'm')
const previewRegexSingle = new RegExp(previewRegexGlobal.source, 'm')
const upcomingRegexSingle = new RegExp(upcomingRegexGlobal.source, 'm')

main()

async function main () {
  const tree = await git.getTree(owner, repo, ref)
  const changelogFiles = tree.filter(entry => entry.path.includes('v4/changelog') && entry.type === 'blob')

  const changelog = []

  await Promise.all(changelogFiles.map(async (blob) => {
    // get the contents of `content/v4/changelog/*` files from internal-developer.github.com
    const contents = await git.getContentsForBlob(owner, repo, blob)
    const file = blob.path

    if (file.endsWith('index.html')) return
    process.stdout.write('.')

    const date = path.basename(file).replace('-schema-changes.md', '')
    const { content } = frontmatter(contents)

    // match each section title and list of changes
    const schemaChangesMatches = content.match(schemaRegexGlobal)
    const previewChangesMatches = content.match(previewRegexGlobal)
    const upcomingChangesMatches = content.match(upcomingRegexGlobal)

    const entry = {}

    // do a little formatting cleanup
    entry.date = date
    entry.schemaChanges = getEntry(schemaChangesMatches, schemaRegexSingle)
    entry.previewChanges = getEntry(previewChangesMatches, previewRegexSingle)
    entry.upcomingChanges = getEntry(upcomingChangesMatches, upcomingRegexSingle)

    // very first changelog has custom content
    if (date === '2017-05-22') {
      entry.schemaChanges[0].changes.push('Nothing! The schema was made public!')
    }

    changelog.push(entry)
  }))

  // sort by newest entries first
  const sortedChangelog = reverse(sortBy(changelog, ['date']))

  // write json file
  fs.writeFileSync(staticChangelog, JSON.stringify(sortedChangelog, null, 2))
  console.log(`\n\nupdated ${staticChangelog}`)
}

function getEntry (matches, regex) {
  return matches
    ? matches.map(match => {
        const entry = {}
        entry.title = cleanPreviewLinks(match.match(regex)[1])
        entry.changes = getChangedItems(match.match(regex)[2])
        return entry
      })
    : []
}

function getChangedItems (string) {
  return string
    .split('\n*')
    .slice(1)
    .map(i => i.trim())
}

// do some cleanup of preview links
function cleanPreviewLinks (title) {
  const previewMarkup = title.match(/\[(.*?)\]\((.*?)\)/)
  if (!previewMarkup) return title

  const rawName = previewMarkup[1]
  const rawLink = previewMarkup[2]

  let cleanName = rawName
  let cleanLink = rawLink

  // fix two malformed links
  if (cleanName.includes('MergeInfoPreview')) {
    cleanName = 'Merge info preview'
    cleanLink = `${previewsBaseLink}#merge-info-preview`
  }

  if (cleanName.includes('UpdateRefsPreview')) {
    cleanName = 'Update refs preview'
    cleanLink = `${previewsBaseLink}#update-refs-preview`
  }

  cleanName = !cleanName.endsWith('preview')
    ? `${cleanName} preview`
    : cleanName

  cleanLink = !cleanLink.endsWith('-preview')
    ? `${cleanLink}-preview`
    : cleanLink

  cleanLink = cleanLink
    .replace('/v4/previews/', previewsBaseLink)

  return title
    .replace(rawName, cleanName)
    .replace(rawLink, cleanLink)
}
