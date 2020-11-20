const { diff, ChangeType } = require('@graphql-inspector/core')
const { loadSchema } = require('@graphql-tools/load')
const git = require('../../lib/git-utils')
const fs = require('fs')
// check for required PAT
if (!process.env.GITHUB_TOKEN) {
  console.error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
  process.exit(1)
}

// main()

async function main() {
  // Load the previous schema from this repo
  // TODO -- how to make sure that this script runs _before_ this artifact is updated?
  // Maybe hook into the existing `update-files` script instead of being a stand-alone script.
  const oldSchemaString = fs.readFileSync('data/graphql/schema.docs.graphql').toString()

  // Load the latest schema from github/github
  const tree = await git.getTree('github', 'github', 'heads/master')
  const schemaFileBlob = tree.find(entry => entry.path.includes('config/schema.docs.graphql') && entry.type === 'blob')
  const newSchemaBuffer = await git.getContentsForBlob('github', 'github', schemaFileBlob)
  const changelogEntry = createChangelogEntry(oldSchemaString, newSchemaBuffer.toString())
  if (changelogEntry) {
    const previousChangelogString = fs.readFileSync('lib/graphql/static/changelog.json')
    const previousChangelog = JSON.parse(previousChangelogString)
    // add a new entry to the changelog data
    previousChangelog.unshift(changelogEntry)
    // rewrite the updated changelog
    fs.writeFileSync('lib/graphql/static/changelog.json', JSON.stringify(previousChangelog, null, 2))
  }
}


// Compare `oldSchemaString` to `newSchemaString`, and if there are any
// changes that warrant a changelog entry, return a changelog entry.
// Otherwise, return null.
async function createChangelogEntry(oldSchemaString, newSchemaString) {
  // Create schema objects out of the strings
  const oldSchema = await loadSchema(oldSchemaString)
  const newSchema = await loadSchema(newSchemaString)

  // Generate changes between the two schemas
  const changes = diff(oldSchema, newSchema)
  const changesToReport = []
  changes.forEach(function (change) {
    if (CHANGES_TO_REPORT.includes(change.type)) {
      changesToReport.push(change)
    } else if (CHANGES_TO_IGNORE.includes(change.type)) {
      // Do nothing
    } else {
      throw "This change type should be added to CHANGES_TO_REPORT or CHANGES_TO_IGNORE: " + change.type
    }
  })

  const { schemaChangesToReport, previewChangesToReport } = segmentPreviewChanges(changesToReport)
  // If there were any changes, create a changelog entry
  if (schemaChangesToReport.length > 0 || previewChangesToReport.length > 0) {
    // Build a `yyyy-mm-dd`-formatted date string
    const today = new Date()
    const todayString = String(today.getFullYear()) + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0')

    const changelogEntry = {
      date: todayString,
      schemaChanges: [],
      previewChanges: [],
      upcomingChanges: [],
    }

    const schemaChange = {
      title: 'The GraphQL schema includes these changes:',
      // Replace single quotes which wrap field/argument/type names with backticks
      changes: changesToReport.map(function (change) { return change.message.replace(/'([a-zA-Z\. :!]+)'/g, '`$1`') })
    }
    changelogEntry.schemaChanges.push(schemaChange)

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
    return changelogEntry
  } else {
    return null
  }
}

function segmentPreviewChanges(changesToReport) {
  // TODO: read the previews yaml file and
  // split the list of changes based on whether the change's path
  // (or any "parents" in the change's path) are in a preview.
  // See: https://github.com/github/graphql-docs/blob/master/lib/graphql_docs/update_internal_developer/change_log.rb#L230
  return { schemaChangesToReport: changesToReport, previewChangesToReport: [] }
}

const CHANGES_TO_REPORT = [
  ChangeType.FieldArgumentDefaultChanged,
  ChangeType.FieldArgumentTypeChanged,
  ChangeType.EnumValueRemoved,
  ChangeType.EnumValueAdded,
  ChangeType.FieldRemoved,
  ChangeType.FieldAdded,
  ChangeType.FieldTypeChanged,
  ChangeType.FieldArgumentAdded,
  ChangeType.FieldArgumentRemoved,
  ChangeType.ObjectTypeInterfaceAdded,
  ChangeType.ObjectTypeInterfaceRemoved,
  ChangeType.InputFieldRemoved,
  ChangeType.InputFieldAdded,
  ChangeType.InputFieldDefaultValueChanged,
  ChangeType.InputFieldTypeChanged,
  ChangeType.TypeRemoved,
  ChangeType.TypeAdded,
  ChangeType.TypeKindChanged,
  ChangeType.UnionMemberRemoved,
  ChangeType.UnionMemberAdded,
  ChangeType.SchemaQueryTypeChanged,
  ChangeType.SchemaMutationTypeChanged,
  ChangeType.SchemaSubscriptionTypeChanged,
]

const CHANGES_TO_IGNORE = [
  ChangeType.FieldArgumentDescriptionChanged,
  ChangeType.DirectiveRemoved,
  ChangeType.DirectiveAdded,
  ChangeType.DirectiveDescriptionChanged,
  ChangeType.DirectiveLocationAdded,
  ChangeType.DirectiveLocationRemoved,
  ChangeType.DirectiveArgumentAdded,
  ChangeType.DirectiveArgumentRemoved,
  ChangeType.DirectiveArgumentDescriptionChanged,
  ChangeType.DirectiveArgumentDefaultValueChanged,
  ChangeType.DirectiveArgumentTypeChanged,
  ChangeType.EnumValueDescriptionChanged,
  ChangeType.EnumValueDeprecationReasonChanged,
  ChangeType.EnumValueDeprecationReasonAdded,
  ChangeType.EnumValueDeprecationReasonRemoved,
  ChangeType.FieldDescriptionChanged,
  ChangeType.FieldDescriptionAdded,
  ChangeType.FieldDescriptionRemoved,
  ChangeType.FieldDeprecationAdded,
  ChangeType.FieldDeprecationRemoved,
  ChangeType.FieldDeprecationReasonChanged,
  ChangeType.FieldDeprecationReasonAdded,
  ChangeType.FieldDeprecationReasonRemoved,
  ChangeType.InputFieldDescriptionAdded,
  ChangeType.InputFieldDescriptionRemoved,
  ChangeType.InputFieldDescriptionChanged,
  ChangeType.TypeDescriptionChanged,
  ChangeType.TypeDescriptionRemoved,
  ChangeType.TypeDescriptionAdded,
]



module.exports = { createChangelogEntry }
