#!/usr/bin/env node
import { diff, ChangeType } from '@graphql-inspector/core'
import { loadSchema } from '@graphql-tools/load'
import fs from 'fs'
import { renderContent } from '#src/content-render/index.js'

/**
 * Tag `changelogEntry` with `date: YYYY-mm-dd`, then prepend it to the JSON
 * structure written to `targetPath`. (`changelogEntry` and that file are modified in place.)
 * @param {object} changelogEntry
 * @param {string} targetPath
 * @return {void}
 */
export function prependDatedEntry(changelogEntry, targetPath) {
  // Build a `yyyy-mm-dd`-formatted date string
  // and tag the changelog entry with it
  const todayString = new Date().toISOString().slice(0, 10)
  changelogEntry.date = todayString

  const previousChangelogString = fs.readFileSync(targetPath)
  const previousChangelog = JSON.parse(previousChangelogString)
  // add a new entry to the changelog data
  previousChangelog.unshift(changelogEntry)
  // rewrite the updated changelog
  fs.writeFileSync(targetPath, JSON.stringify(previousChangelog, null, 2))
}

/**
 * Compare `oldSchemaString` to `newSchemaString`, and if there are any
 * changes that warrant a changelog entry, return a changelog entry.
 * Based on the parsed `previews`, identify changes that are under a preview.
 * Otherwise, return null.
 * @param {string} [oldSchemaString]
 * @param {string} [newSchemaString]
 * @param {Array<object>} [previews]
 * @param {Array<object>} [oldUpcomingChanges]
 * @param {Array<object>} [newUpcomingChanges]
 * @return {object?}
 */
export async function createChangelogEntry(
  oldSchemaString,
  newSchemaString,
  previews,
  oldUpcomingChanges,
  newUpcomingChanges,
) {
  // Create schema objects out of the strings
  const oldSchema = await loadSchema(oldSchemaString, {})
  const newSchema = await loadSchema(newSchemaString, {})

  // Generate changes between the two schemas
  const changes = await diff(oldSchema, newSchema)
  const changesToReport = []
  changes.forEach(function (change) {
    if (CHANGES_TO_REPORT.includes(change.type)) {
      changesToReport.push(change)
    } else if (CHANGES_TO_IGNORE.includes(change.type)) {
      // Do nothing
    } else {
      throw new Error(
        'This change type should be added to CHANGES_TO_REPORT or CHANGES_TO_IGNORE: ' +
          change.type,
      )
    }
  })

  const { schemaChangesToReport, previewChangesToReport } = segmentPreviewChanges(
    changesToReport,
    previews,
  )

  const addedUpcomingChanges = newUpcomingChanges.filter(function (change) {
    // Manually check each of `newUpcomingChanges` for an equivalent entry
    // in `oldUpcomingChanges`.
    return !oldUpcomingChanges.find(function (oldChange) {
      return (
        oldChange.location === change.location &&
        oldChange.date === change.date &&
        oldChange.description === change.description
      )
    })
  })

  // If there were any changes, create a changelog entry
  if (
    schemaChangesToReport.length > 0 ||
    previewChangesToReport.length > 0 ||
    addedUpcomingChanges.length > 0
  ) {
    const changelogEntry = {
      schemaChanges: [],
      previewChanges: [],
      upcomingChanges: [],
    }

    const cleanedSchemaChanges = cleanMessagesFromChanges(schemaChangesToReport)
    const renderedScheamChanges = await Promise.all(
      cleanedSchemaChanges.map(async (change) => {
        return await renderContent(change)
      }),
    )
    const schemaChange = {
      title: 'The GraphQL schema includes these changes:',
      // Replace single quotes which wrap field/argument/type names with backticks
      changes: renderedScheamChanges,
    }
    changelogEntry.schemaChanges.push(schemaChange)

    for (const previewTitle in previewChangesToReport) {
      const previewChanges = previewChangesToReport[previewTitle]
      const cleanedPreviewChanges = cleanMessagesFromChanges(previewChanges.changes)
      const renderedPreviewChanges = await Promise.all(
        cleanedPreviewChanges.map(async (change) => {
          return renderContent(change)
        }),
      )
      const cleanTitle = cleanPreviewTitle(previewTitle)
      const entryTitle =
        'The [' +
        cleanTitle +
        '](/graphql/overview/schema-previews#' +
        previewAnchor(cleanTitle) +
        ') includes these changes:'
      changelogEntry.previewChanges.push({
        title: entryTitle,
        changes: renderedPreviewChanges,
      })
    }

    if (addedUpcomingChanges.length > 0) {
      const cleanedUpcomingChanges = addedUpcomingChanges.map((change) => {
        const location = change.location
        const description = change.description
        const date = change.date.split('T')[0]
        return 'On member `' + location + '`:' + description + ' **Effective ' + date + '**.'
      })
      const renderedUpcomingChanges = await Promise.all(
        cleanedUpcomingChanges.map(async (change) => {
          return await renderContent(change)
        }),
      )
      changelogEntry.upcomingChanges.push({
        title: 'The following changes will be made to the schema:',
        changes: renderedUpcomingChanges,
      })
    }

    return changelogEntry
  } else {
    return null
  }
}

/**
 * Prepare the preview title from github/github source for the docs.
 * @param {string} title
 * @return {string}
 */
export function cleanPreviewTitle(title) {
  if (title === 'UpdateRefsPreview') {
    title = 'Update refs preview'
  } else if (title === 'MergeInfoPreview') {
    title = 'Merge info preview'
  } else if (!title.endsWith('preview')) {
    title = title + ' preview'
  }
  return title
}

/**
 * Turn the given title into an HTML-ready anchor.
 * (ported from graphql-docs/lib/graphql_docs/update_internal_developer/change_log.rb#L281)
 * @param {string} [previewTitle]
 * @return {string}
 */
export function previewAnchor(previewTitle) {
  return previewTitle
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]/g, '')
}

/**
 * Turn changes from graphql-inspector into messages for the HTML changelog.
 * @param {Array<object>} changes
 * @return {Array<string>}
 */
export function cleanMessagesFromChanges(changes) {
  return changes.map(function (change) {
    // replace single quotes around graphql names with backticks,
    // to match previous behavior from graphql-schema-comparator
    return change.message.replace(/'([a-zA-Z. :!]+)'/g, '`$1`')
  })
}

/**
 * Split `changesToReport` into two parts,
 * one for changes in the main schema,
 * and another for changes that are under preview.
 * (Ported from /graphql-docs/lib/graphql_docs/update_internal_developer/change_log.rb#L230)
 * @param {Array<object>} changesToReport
 * @param {object} previews
 * @return {object}
 */
export function segmentPreviewChanges(changesToReport, previews) {
  // Build a map of `{ path => previewTitle` }
  // for easier lookup of change to preview
  const pathToPreview = {}
  previews.forEach(function (preview) {
    preview.toggled_on.forEach(function (path) {
      pathToPreview[path] = preview.title
    })
  })
  const schemaChanges = []
  const changesByPreview = {}

  changesToReport.forEach(function (change) {
    // For each change, see if its path _or_ one of its ancestors
    // is covered by a preview. If it is, mark this change as belonging to a preview
    const pathParts = change.path.split('.')
    let testPath = null
    let previewTitle = null
    let previewChanges = null
    while (pathParts.length > 0 && !previewTitle) {
      testPath = pathParts.join('.')
      previewTitle = pathToPreview[testPath]
      // If that path didn't find a match, then we'll
      // check the next ancestor.
      pathParts.pop()
    }
    if (previewTitle) {
      previewChanges =
        changesByPreview[previewTitle] ||
        (changesByPreview[previewTitle] = {
          title: previewTitle,
          changes: [],
        })
      previewChanges.changes.push(change)
    } else {
      schemaChanges.push(change)
    }
  })
  return { schemaChangesToReport: schemaChanges, previewChangesToReport: changesByPreview }
}

// We only want to report changes to schema structure.
// Deprecations are covered by "upcoming changes."
// By listing the changes explicitly here, we can make sure that,
// if the library changes, we don't miss publishing anything that we mean to.
// This was originally ported from graphql-docs/lib/graphql_docs/update_internal_developer/change_log.rb#L35-L103
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

export default { createChangelogEntry, cleanPreviewTitle, previewAnchor, prependDatedEntry }
