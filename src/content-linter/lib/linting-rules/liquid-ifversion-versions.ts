// @ts-ignore - markdownlint-rule-helpers doesn't provide TypeScript declarations
import { addError } from 'markdownlint-rule-helpers'

import {
  getLiquidIfVersionTokens,
  getPositionData,
  getContentDeleteData,
  getSimplifiedSemverRange,
} from '../helpers/liquid-utils'
import { getFrontmatter, getFrontmatterLines } from '../helpers/utils'
import getApplicableVersions from '@/versions/lib/get-applicable-versions'
import { allVersions } from '@/versions/lib/all-versions'
import { difference } from 'lodash-es'
import { convertVersionsToFrontmatter } from '@/automated-pipelines/lib/update-markdown'
import {
  isAllVersions,
  getFeatureVersionsObject,
  isInAllGhes,
} from '@/ghes-releases/scripts/version-utils'
import { deprecated, oldestSupported } from '@/versions/lib/enterprise-server-releases'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

export const liquidIfversionVersions = {
  names: ['GHD022', 'liquid-ifversion-versions'],
  description:
    'Liquid `ifversion`, `elsif`, and `else` tags should be valid and not contain unsupported versions.',
  tags: ['liquid', 'versioning'],
  asynchronous: true,
  function: async (params: RuleParams, onError: RuleErrorCallback) => {
    // The versions frontmatter object or all versions if the file
    // being processed is a data file.
    const fm = getFrontmatter(params.lines)
    const content = fm ? getFrontmatterLines(params.lines).join('\n') : params.lines.join('\n')

    const fileVersionsFm = params.name.startsWith('data')
      ? { ghec: '*', ghes: '*', fpt: '*' }
      : fm
        ? fm.versions
        : getFrontmatter(params.frontMatterLines)?.versions
    // This will only contain valid (non-deprecated) and future versions
    const fileVersions = getApplicableVersions(fileVersionsFm, '', {
      doNotThrow: true,
      includeNextVersion: true,
    })

    const tokens = getLiquidIfVersionTokens(content)
    // Array of arrays - each array entry is an array of items that
    // make up a full if/elsif/else/endif statement.
    // [ [ifversion, elsif, else, endif], [nested ifversion, elsif, else, endif] ]
    // Using any[] because these are complex dynamic objects with properties added at runtime
    const condStmtStack: any[] = []

    // Tokens are in the order they are read in file, so we need to iterate
    // through and group full if/elsif/else/endif statements together.
    const defaultProps = {
      fileVersionsFm,
      fileVersions,
      filename: params.name,
      parent: undefined,
    }
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]

      if (token.name === 'ifversion') {
        if (condStmtStack.length > 0) {
          const lastStackItem = condStmtStack[condStmtStack.length - 1]
          defaultProps.parent = lastStackItem[lastStackItem.length - 1]
        }
        const condTagItem = await initTagObject(token, defaultProps)
        condStmtStack.push([condTagItem])
      } else if (token.name === 'elsif') {
        const condTagItems = condStmtStack.pop()
        const condTagItem = await initTagObject(token, defaultProps)
        condTagItems.push(condTagItem)
        condStmtStack.push(condTagItems)
      } else if (token.name === 'else') {
        const condTagItems = condStmtStack.pop()
        const condTagItem = await initTagObject(token, defaultProps)
        // The versions of an else tag are the set of file versions that are
        // not supported by the previous ifversion or elsif tags.
        const siblingVersions = condTagItems
          // Using any because condTagItems contains dynamic objects from initTagObject
          .filter((item: any) => item.name === 'ifversion' || item.name === 'elsif')
          .map((item: any) => item.versions)
          .flat()
        // Using any because versions property is added dynamically to condTagItem
        ;(condTagItem as any).versions = difference(fileVersions, siblingVersions)
        condTagItems.push(condTagItem)
        condStmtStack.push(condTagItems)
      } else if (token.name === 'endif') {
        defaultProps.parent = undefined
        const condTagItems = condStmtStack.pop()
        const condTagItem = await initTagObject(token, defaultProps)
        condTagItems.push(condTagItem)
        decorateCondTagItems(condTagItems)
        setLiquidErrors(condTagItems, onError, params.lines)
      }
    }
  },
}

// Using any[] because condTagItems contains dynamic objects with properties added at runtime
function setLiquidErrors(condTagItems: any[], onError: RuleErrorCallback, lines: string[]) {
  for (let i = 0; i < condTagItems.length; i++) {
    const item = condTagItems[i]
    const tagNameNoCond = item.name === 'endif' || item.name === 'else'
    const itemErrorName = tagNameNoCond ? item.name : `${item.name} ${item.cond}`

    if (item.action.type === 'delete') {
      // There is no next stack item, the endif tag is alway the
      // last in a conditional
      const nextStackItem = item.name === 'endif' ? condTagItems[i].end : condTagItems[i + 1].begin
      const deleteItems = getContentDeleteData(condTagItems[i], nextStackItem, lines)
      for (const deleteItem of deleteItems) {
        addError(
          onError,
          deleteItem.lineNumber,
          `Liquid tag applies to no versions: \`${itemErrorName}\`. Delete conditional tag and its content`,
          '',
          item.contentRange,
          {
            lineNumber: deleteItem.lineNumber,
            editColumn: deleteItem.column,
            deleteCount: deleteItem.deleteCount,
            insertText: '',
          },
        )
      }
    }

    if (item.action.type === 'all') {
      // position is just the tag
      const { lineNumber, column, length } = getPositionData(
        {
          begin: item.begin,
          end: item.end,
        },
        lines,
      )
      const deleteCount = length - column + 1 === lines[lineNumber - 1].length ? -1 : length
      addError(
        onError,
        lineNumber,
        `Liquid tag applies to all versions: \`${itemErrorName}\`. Remove all other liquid conditionals in the statement.`,
        '',
        item.contentRange,
        {
          lineNumber,
          editColumn: column,
          deleteCount,
          insertText: '',
        },
      )
    }

    if (item.action.type === 'change') {
      // position is just the inside of tag
      const { lineNumber, column, length } = getPositionData(
        {
          begin: item.contentrange[0],
          end: item.contentrange[1],
        },
        lines,
      )
      const insertText = `${item.action.name || item.name} ${item.action.cond || item.cond}`

      addError(
        onError,
        lineNumber,
        `Update the conditional tag \`${itemErrorName}\` to ${insertText}`,
        '',
        item.contentRange,
        {
          lineNumber,
          editColumn: column,
          deleteCount: length,
          insertText,
        },
      )
    }
  }
}

async function getApplicableVersionFromLiquidTag(conditionStr: string) {
  // Using Record<string, any> because version object keys are dynamic (fpt, ghec, ghes, feature, etc.)
  const newConditionObject: Record<string, any> = {}
  const condition = conditionStr.replace('not ', '')
  const liquidTagVersions = condition.split(' or ').map((item) => item.trim())
  for (const ver of liquidTagVersions) {
    // When the version is not a release e.g. fpt or ghec or
    // or a feature version
    if (ver.split(' ').length === 1) {
      // handle feature versions (only supports a single feature version)
      if (ver !== 'fpt' && ver !== 'ghec' && ver !== 'ghes') {
        newConditionObject['feature'] = ver
      } else {
        newConditionObject[ver] = '*'
      }
    } else if (ver.includes(' and ')) {
      // When the version is a release e.g. ghes and the version is a range
      // e.g. ghes >= 3.1 and ghes < 3.4
      const ands = ver.split(' and ')
      const firstAnd = ands[0].split(' ')[0]
      // if all ands don't start with the same version it's invalid
      if (!ands.every((and) => and.startsWith(firstAnd))) {
        // noop - we don't handle this case
        // TODO - handle this case in the future
        return []
      }
      const andValues = []
      let andVersion = ''
      for (const and of ands) {
        const [version, ...release] = and.split(' ')
        andVersion = version
        andValues.push(release.join(' ').replaceAll("'", ''))
      }
      const andVersionFmString = andValues.join(' ')
      newConditionObject[andVersion] = andVersionFmString
    } else {
      // When the version is a release e.g. ghes >= 3.1
      const [version, ...release] = ver.split(' ')
      const versionFmString = release.join(' ').replaceAll("'", '')
      newConditionObject[version] = versionFmString
    }
  }
  if (conditionStr.includes('not ')) {
    const all = Object.keys(allVersions)
    const allApplicable = getApplicableVersions(newConditionObject, '', {
      doNotThrow: true,
      includeNextVersion: true,
    })
    return await convertVersionsToFrontmatter(difference(all, allApplicable))
  }
  return newConditionObject
}

// Using any for token and props because they come from markdownlint library without full type definitions
async function initTagObject(token: any, props: any) {
  const condTagItem = {
    name: token.name,
    cond: token.content.replace(`${token.name} `, '').trim(),
    begin: token.begin,
    end: token.end,
    contentrange: token.contentRange,
    fileVersionsFm: props.fileVersionsFm,
    fileVersionsFmAll: props.fileVersionsFm?.feature
      ? {
          ...props.fileVersionsFm.versions,
          ...getFeatureVersionsObject(props.fileVersionsFm.feature),
        }
      : props.fileVersionsFm,
    fileVersions: props.fileVersions,
    parent: props.parent,
  }
  if (token.name === 'ifversion' || token.name === 'elsif') {
    // Using any because these properties (versionsObj, featureVersionsObj, versionsObjAll, versions)
    // are added dynamically to condTagItem and not part of its initial type definition
    ;(condTagItem as any).versionsObj = await getApplicableVersionFromLiquidTag(condTagItem.cond)
    ;(condTagItem as any).featureVersionsObj = (condTagItem as any).versionsObj.feature
      ? getFeatureVersionsObject((condTagItem as any).versionsObj.feature)
      : undefined
    ;(condTagItem as any).versionsObjAll = {
      ...(condTagItem as any).versionsObj,
      ...(condTagItem as any).featureVersionsObj,
    }
    ;(condTagItem as any).versions = getApplicableVersions((condTagItem as any).versionsObj, '', {
      doNotThrow: true,
      includeNextVersion: true,
    })
  }
  return condTagItem
}

/*
  Rather than filtering out noVersion items, populate
  each item with content, newContent, action (delete, update, etc)
  cond would be empty if the conditional is removed.
  content would be empty if the content is to be deleted.
  decorate with line number, length, and column.
  Then create flaws per stack item.
  newCond
  */
// Using any[] because condTagItems contains dynamic objects with action property added at runtime
function decorateCondTagItems(condTagItems: any[]) {
  for (const item of condTagItems) {
    item.action = {
      type: 'none',
      name: undefined,
      cond: undefined,
      line: undefined,
      lineNumbers: undefined,
      length: undefined,
      column: undefined,
      content: undefined,
    }
  }
  updateConditionals(condTagItems)
  return
}

// Using any[] because condTagItems contains dynamic objects with various properties added at runtime
function updateConditionals(condTagItems: any[]) {
  // iterate through the ifversion, elsif, and else
  // tags but NOT the endif tag. endif tags have
  // no versions associated with them and are handled
  // after the loop.
  for (let i = 0; i < condTagItems.length - 1; i++) {
    const item = condTagItems[i]

    // check if the condition is all versions, if so
    // the liquid should always be removed regardless
    // of whether it's a feature version or a nested
    // condition.
    if (isAllVersions(item.featureVersionsObj || item.versionObj)) {
      processConditionals(item, condTagItems, i)
      break
    }

    /** START check feature versions **/

    // Feature versions that have all versions were removed above
    // Deprecatable features are those that are either available
    // in NO supported GHES releases or are available in ALL
    // supported GHES releases.
    if (item.versionsObj?.feature && item.versionsObjAll?.ghes) {
      // Checks for features that are only available in all
      // supported GHES releases
      if (
        Object.keys(item.fileVersionsFmAll).length === 1 &&
        item.fileVersionsFmAll.ghes === '*' &&
        !!item.versionsObjAll.ghes &&
        !item.versionsObjAll.fpt &&
        !item.versionsObjAll.ghec &&
        isInAllGhes(item.versionsObjAll.ghes)
      ) {
        processConditionals(item, condTagItems, i)
        break
      }
      // Checks for features that are only available in no
      // supported GHES releases
      // TODO use isGhesReleaseDeprecated
      if (item.versionsObjAll.ghes.startsWith('<=')) {
        const releaseNumber = item.versionsObjAll.ghes.replace('<=', '').trim()
        if (deprecated.includes(releaseNumber)) {
          item.action.type = 'delete'
          continue
        }
      } else if (item.versionsObjAll.ghes.startsWith('<')) {
        const releaseNumber = item.versionsObjAll.ghes.replace('<', '').trim()
        if (deprecated.includes(releaseNumber) || releaseNumber === oldestSupported) {
          item.action.type = 'delete'
          continue
        }
      }
    }
    if (item.versionsObj?.feature || item.fileVersionsFm?.feature) break

    // When the parent of a nested condition is a feature
    // we don't want to assume that the feature versions
    // won't change in the future. So we ignore checking
    // nested conditions against their feature parent.
    if (
      item.parent &&
      item.parent.versions &&
      item.parent?.versionsObj?.feature &&
      item.parent.versions.length > 0 &&
      difference(item.parent.versions, item.versions).length === 0
    )
      continue

    /** END Feature versions we DON'T want to remove **/

    // Check if a nested condition has all versions
    // compared to it's parent.
    if (
      item.parent &&
      item.parent.versions &&
      item.parent.versions.length > 0 &&
      difference(item.parent.versions, item.versions).length === 0
    ) {
      processConditionals(item, condTagItems, i)
      break
    }

    // Check if the condition matches the page frontmatter
    const noDiffInFileVersions = difference(item.fileVersions, item.versions).length === 0
    if (noDiffInFileVersions) {
      processConditionals(item, condTagItems, i)
      break
    }

    // Only an item with ghes versioning only can be deleted
    if (item.versions.length === 0) {
      item.action.type = 'delete'
      continue
    }

    // If the else condition hasn't already been marked as available
    //  in all veresions or delete, then there are no other changes possible.
    if (item.name === 'else') continue

    // Does the condition contain any versions not defined in the frontmatter
    const versionsNotInFrontmatter = difference(
      Object.keys(item.versionsObjAll),
      Object.keys(item.fileVersionsFmAll),
    )
    if (versionsNotInFrontmatter.length !== 0) {
      for (const key of versionsNotInFrontmatter) {
        delete item.versionsObj[key]
      }
      item.action.cond = Object.keys(item.versionsObj).join(' or ')
      item.action.type = 'change'
      continue
    }

    // All remaining changes only apply if the ghes release number
    // must be updated
    if (!item.versionsObjAll.ghes || item.versionsObjAll.ghes === '*') continue

    const simplifiedSemver = getSimplifiedSemverRange(item.versionsObjAll.ghes)
    // Change - Remove the GHES version but keep the other versions in
    // the conditional
    if (simplifiedSemver === '' && Object.keys(item.versionsObj).length > 1) {
      item.action.type = 'change'
      delete item.versionsObj.ghes
      item.action.cond = Object.keys(item.versionsObj).join(' or ')
      continue
    }

    // Change - Update the GHES semver range
    if (item.versionsObjAll.ghes !== simplifiedSemver && !item.versionsObjAll.feature) {
      item.action.type = 'change'
      item.versionsObj.ghes = simplifiedSemver

      // Create the new cond by translating the semver to the format
      // used in frontmatter
      if (simplifiedSemver !== '*') {
        const newVersions = Object.entries(item.versionsObj).map(([key, value]) => {
          if (key === 'ghes') {
            if (value === '*') return key
            return `${key} ${value}`
          } else return key
        })
        item.action.cond = newVersions.join(' or ')
      } else {
        item.action.cond = Object.keys(item.versionsObj).join(' or ')
      }
    }
  }

  // Delete - When the ifversion tag is deleted and an elsif tag exists,
  // the elsif tag name must be changed to ifversion.
  if (condTagItems[0].action.type === 'delete') {
    const elsifVersionIndex = condTagItems.findIndex(
      (item) => item.name === 'elsif' && item.action.type !== 'delete',
    )
    if (elsifVersionIndex > -1) {
      condTagItems[elsifVersionIndex].action.name = 'ifversion'
      if (condTagItems[elsifVersionIndex].action.type === 'none') {
        condTagItems[elsifVersionIndex].action.type = 'change'
      }
    }
  }

  // Delete - If an ifversion/else and the ifversion is deleted, change
  // the else tag to all.
  if (
    condTagItems.length - 1 === 2 &&
    condTagItems[0].action.type === 'delete' &&
    difference(condTagItems[1].fileVersions, condTagItems[1].versions).length === 0
  ) {
    condTagItems[1].action.type = 'all'
    condTagItems[2].action.type = 'delete'
  }

  // Delete - If all items except endif are marked for delete, delete the endif
  const isAllDelete = condTagItems
    .slice(0, condTagItems.length - 1)
    .every((item) => item.action.type === 'delete')
  if (isAllDelete) {
    condTagItems[condTagItems.length - 1].action.type = 'delete'
  }
}

// Using any for item and any[] for condTagItems because they contain dynamic objects with action property
function processConditionals(item: any, condTagItems: any[], indexOfAllItem: number) {
  item.action.type = 'all'
  // if any tag in a statement is 'all', the
  // remaining tags are obsolete.
  for (let i = 0; i < condTagItems.length; i++) {
    const stackItem = condTagItems[i]
    if (indexOfAllItem !== i) {
      stackItem.action = { type: 'delete' }
    }
  }
}
