import { diff, ChangeType, Change } from '@graphql-inspector/core'
import { loadSchema } from '@graphql-tools/load'
import fs from 'fs'
import { renderContent } from '@/content-render/index'

interface UpcomingChange {
  location: string
  date: string
  description: string
}

interface Preview {
  title: string
  toggled_on: string[]
}

interface ChangelogSchemaChange {
  title: string
  changes: string[]
}

interface ChangelogPreviewChange {
  title: string
  changes: string[]
}

interface ChangelogUpcomingChange {
  title: string
  changes: string[]
}

export interface ChangelogEntry {
  date?: string
  schemaChanges: ChangelogSchemaChange[]
  previewChanges: ChangelogPreviewChange[]
  upcomingChanges: ChangelogUpcomingChange[]
}

interface PreviewChanges {
  title: string
  changes: Change[]
}

interface SegmentedChanges {
  schemaChangesToReport: Change[]
  previewChangesToReport: Record<string, PreviewChanges>
}

interface IgnoredChangeType {
  type: string
  count: number
}

interface IgnoredChangesSummary {
  totalCount: number
  typeCount: number
  types: IgnoredChangeType[]
}

/**
 * Tag `changelogEntry` with `date: YYYY-mm-dd`, then prepend it to the JSON
 * structure written to `targetPath`. (`changelogEntry` and that file are modified in place.)
 */
export function prependDatedEntry(changelogEntry: ChangelogEntry, targetPath: string): void {
  // Build a `yyyy-mm-dd`-formatted date string
  // and tag the changelog entry with it
  const todayString = new Date().toISOString().slice(0, 10)
  changelogEntry.date = todayString

  const previousChangelogString = fs.readFileSync(targetPath, 'utf8')
  const previousChangelog = JSON.parse(previousChangelogString) as ChangelogEntry[]
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
 */
export async function createChangelogEntry(
  oldSchemaString: string,
  newSchemaString: string,
  previews: Preview[],
  oldUpcomingChanges: UpcomingChange[],
  newUpcomingChanges: UpcomingChange[],
): Promise<ChangelogEntry | null> {
  // Create schema objects out of the strings
  // Using 'as any' because loadSchema accepts string schema directly without requiring loaders
  const oldSchema = await loadSchema(oldSchemaString, {} as any)
  const newSchema = await loadSchema(newSchemaString, {} as any)

  // Generate changes between the two schemas
  const changes = await diff(oldSchema, newSchema)
  const changesToReport: Change[] = []
  const ignoredChanges: Change[] = []
  changes.forEach((change) => {
    if (CHANGES_TO_REPORT.includes(change.type)) {
      changesToReport.push(change)
    } else {
      // Track ignored changes for visibility
      ignoredChanges.push(change)
    }
  })

  // Log warnings for ignored change types to provide visibility
  if (ignoredChanges.length > 0) {
    const ignoredTypes = [...new Set(ignoredChanges.map((change) => change.type))]
    console.warn(
      `⚠️  GraphQL changelog: Ignoring ${ignoredChanges.length} changes of ${ignoredTypes.length} type(s):`,
    )
    ignoredTypes.forEach((type) => {
      const count = ignoredChanges.filter((change) => change.type === type).length
      console.warn(`   - ${type} (${count} change${count > 1 ? 's' : ''})`)
    })
    console.warn(
      '   These change types are not in CHANGES_TO_REPORT and will not appear in the changelog.',
    )
  }

  // Store ignored changes for potential workflow outputs
  ;(createChangelogEntry as any).lastIgnoredChanges = ignoredChanges

  const { schemaChangesToReport, previewChangesToReport } = segmentPreviewChanges(
    changesToReport,
    previews,
  )

  const addedUpcomingChanges = newUpcomingChanges.filter(function (change): boolean {
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
    Object.keys(previewChangesToReport).length > 0 ||
    addedUpcomingChanges.length > 0
  ) {
    const changelogEntry: ChangelogEntry = {
      schemaChanges: [],
      previewChanges: [],
      upcomingChanges: [],
    }

    const cleanedSchemaChanges = cleanMessagesFromChanges(schemaChangesToReport)
    const renderedScheamChanges = await Promise.all(
      cleanedSchemaChanges.map(async (change): Promise<string> => {
        return await renderContent(change)
      }),
    )
    const schemaChange: ChangelogSchemaChange = {
      title: 'The GraphQL schema includes these changes:',
      // Replace single quotes which wrap field/argument/type names with backticks
      changes: renderedScheamChanges,
    }
    changelogEntry.schemaChanges.push(schemaChange)

    for (const previewTitle in previewChangesToReport) {
      const previewChanges = previewChangesToReport[previewTitle]
      const cleanedPreviewChanges = cleanMessagesFromChanges(previewChanges.changes)
      const renderedPreviewChanges = await Promise.all(
        cleanedPreviewChanges.map(async (change): Promise<string> => {
          return renderContent(change)
        }),
      )
      const cleanTitle = cleanPreviewTitle(previewTitle)
      const entryTitle = `The [${cleanTitle}](/graphql/overview/schema-previews#${previewAnchor(
        cleanTitle,
      )}) includes these changes:`
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
        return `On member \`${location}\`:${description} **Effective ${date}**.`
      })
      const renderedUpcomingChanges = await Promise.all(
        cleanedUpcomingChanges.map(async (change): Promise<string> => {
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
 */
export function cleanPreviewTitle(title: string): string {
  if (title === 'UpdateRefsPreview') {
    title = 'Update refs preview'
  } else if (title === 'MergeInfoPreview') {
    title = 'Merge info preview'
  } else if (!title.endsWith('preview')) {
    title = `${title} preview`
  }
  return title
}

/**
 * Turn the given title into an HTML-ready anchor.
 * (ported from graphql-docs/lib/graphql_docs/update_internal_developer/change_log.rb#L281)
 */
export function previewAnchor(previewTitle: string): string {
  return previewTitle
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]/g, '')
}

/**
 * Turn changes from graphql-inspector into messages for the HTML changelog.
 */
export function cleanMessagesFromChanges(changes: Change[]): string[] {
  return changes.map(function (change): string {
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
 */
export function segmentPreviewChanges(
  changesToReport: Change[],
  previews: Preview[],
): SegmentedChanges {
  // Build a map of `{ path => previewTitle` }
  // for easier lookup of change to preview
  const pathToPreview: Record<string, string> = {}
  previews.forEach(function (preview): void {
    preview.toggled_on.forEach(function (path) {
      pathToPreview[path] = preview.title
    })
  })
  const schemaChanges: Change[] = []
  const changesByPreview: Record<string, PreviewChanges> = {}

  changesToReport.forEach(function (change): void {
    // For each change, see if its path _or_ one of its ancestors
    // is covered by a preview. If it is, mark this change as belonging to a preview
    const pathParts = change.path?.split('.') || []
    let testPath: string | null = null
    let previewTitle: string | null = null
    let previewChanges: PreviewChanges | null = null
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
  ChangeType.DirectiveUsageFieldDefinitionRemoved,
]

// CHANGES_TO_IGNORE list removed - now we only process changes explicitly listed
// in CHANGES_TO_REPORT and silently ignore all others for future compatibility

/**
 * Get the ignored change types from the last changelog entry creation
 */
export function getLastIgnoredChanges(): Change[] {
  return (createChangelogEntry as any).lastIgnoredChanges || []
}

/**
 * Get summary of ignored change types for workflow outputs
 */
export function getIgnoredChangesSummary(): IgnoredChangesSummary | null {
  const ignored = getLastIgnoredChanges()
  if (ignored.length === 0) return null

  const types = [...new Set(ignored.map((change) => change.type))]
  const summary: IgnoredChangesSummary = {
    totalCount: ignored.length,
    typeCount: types.length,
    types: types.map(
      (type): IgnoredChangeType => ({
        type,
        count: ignored.filter((change) => change.type === type).length,
      }),
    ),
  }

  return summary
}

export default { createChangelogEntry, cleanPreviewTitle, previewAnchor, prependDatedEntry }
