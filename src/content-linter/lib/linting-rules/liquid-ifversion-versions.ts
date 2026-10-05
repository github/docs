import { addError } from 'markdownlint-rule-helpers'
import type { TopLevelToken } from 'liquidjs'

import {
  getLiquidIfVersionTokens,
  getPositionData,
  getContentDeleteData,
  getSimplifiedSemverRange,
} from '../helpers/liquid-utils'
import { getFrontmatter, getFrontmatterLines } from '../helpers/utils'
import getApplicableVersions from '@/versions/lib/get-applicable-versions'
import { difference } from 'lodash-es'
import {
  isAllVersions,
  getFeatureVersionsObject,
  isInAllGhes,
  isGhesReleaseDeprecated,
} from '@/ghes-releases/scripts/version-utils'
import { oldestSupported } from '@/versions/lib/enterprise-server-releases'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

// getLiquidIfVersionTokens exposes runtime properties that liquidjs TopLevelToken omits.
type LiquidConditionalToken = TopLevelToken & {
  name: string
  content: string
  begin: number
  end: number
  contentRange: [number, number]
}

// Frontmatter versions can be a wildcard string or a short-name map with semver ranges.
type VersionsObject = Record<string, string>
type FileVersionsFm = string | VersionsObject | undefined

type CondTagAction = {
  type: 'none' | 'delete' | 'all' | 'change'
  name?: string
  cond?: string
  line?: unknown
  lineNumbers?: unknown
  length?: unknown
  column?: unknown
  content?: unknown
}

// CondTagItem carries derived version data between decoration, updates, and error reporting.
// Condition version objects stay empty on else and endif entries; else gets leftover versions.
type CondTagItem = {
  name: string
  cond: string
  begin: number
  end: number
  contentrange: [number, number]
  fileVersionsFm: FileVersionsFm
  fileVersionsFmAll: VersionsObject
  fileVersions: string[]
  parent?: CondTagItem
  versionsObj: VersionsObject
  featureVersionsObj?: VersionsObject
  versionsObjAll: VersionsObject
  versions: string[]
  action: CondTagAction
  // addError accepts this cached range, but this rule never sets it.
  contentRange?: [number, number] | number[] | string | null
}

type DefaultProps = {
  fileVersionsFm: FileVersionsFm
  fileVersions: string[]
  filename: string
  parent: CondTagItem | undefined
}

export const liquidIfversionVersions = {
  names: ['GHD022', 'liquid-ifversion-versions'],
  description:
    'Liquid `ifversion`, `elsif`, and `else` tags should be valid and not contain unsupported versions.',
  tags: ['liquid', 'versioning'],
  asynchronous: true,
  function: async (params: RuleParams, onError: RuleErrorCallback) => {
    // Data files read all product versions instead of page frontmatter versions.
    const fm = getFrontmatter(params.lines)
    const content = fm ? getFrontmatterLines(params.lines).join('\n') : params.lines.join('\n')

    const fileVersionsFm: FileVersionsFm = params.name.startsWith('data')
      ? { ghec: '*', ghes: '*', fpt: '*' }
      : fm
        ? (fm.versions as FileVersionsFm)
        : (getFrontmatter(params.frontMatterLines)?.versions as FileVersionsFm)
    if (!fileVersionsFm) return
    // getApplicableVersions includes supported and upcoming versions, but not deprecated ones.
    const fileVersions = getApplicableVersions(fileVersionsFm, '', {
      doNotThrow: true,
      includeNextVersion: true,
    })

    const tokens = getLiquidIfVersionTokens(content) as LiquidConditionalToken[]
    // Each stack entry holds one ifversion, elsif, else, and endif chain.
    const condStmtStack: CondTagItem[][] = []

    // Build each conditional chain from source order before decorating its actions.
    const defaultProps: DefaultProps = {
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
        const condTagItems = condStmtStack.pop()!
        const condTagItem = await initTagObject(token, defaultProps)
        condTagItems.push(condTagItem)
        condStmtStack.push(condTagItems)
      } else if (token.name === 'else') {
        const condTagItems = condStmtStack.pop()!
        const condTagItem = await initTagObject(token, defaultProps)
        // else covers file versions excluded by previous ifversion and elsif tags.
        const siblingVersions = condTagItems
          .filter((item) => item.name === 'ifversion' || item.name === 'elsif')
          .map((item) => item.versions)
          .flat()
        condTagItem.versions = difference(fileVersions, siblingVersions)
        condTagItems.push(condTagItem)
        condStmtStack.push(condTagItems)
      } else if (token.name === 'endif') {
        defaultProps.parent = undefined
        const condTagItems = condStmtStack.pop()!
        const condTagItem = await initTagObject(token, defaultProps)
        condTagItems.push(condTagItem)
        decorateCondTagItems(condTagItems)
        setLiquidErrors(condTagItems, onError, params.lines)
      }
    }
  },
}

function setLiquidErrors(condTagItems: CondTagItem[], onError: RuleErrorCallback, lines: string[]) {
  for (let i = 0; i < condTagItems.length; i++) {
    const item = condTagItems[i]
    const tagNameNoCond = item.name === 'endif' || item.name === 'else'
    const itemErrorName = tagNameNoCond ? item.name : `${item.name} ${item.cond}`

    if (item.action?.type === 'delete') {
      // endif deletes through its own end because no following stack item exists.
      const nextStackItem = item.name === 'endif' ? condTagItems[i].end : condTagItems[i + 1].begin
      const deleteItems = getContentDeleteData(
        condTagItems[i] as unknown as TopLevelToken,
        nextStackItem,
        lines,
      )
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

    if (item.action?.type === 'all') {
      // The all action removes only the tag.
      const { lineNumber, column, length } = getPositionData(
        {
          begin: item.begin,
          end: item.end,
        } as TopLevelToken,
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

    if (item.action?.type === 'change') {
      // The change action replaces only the tag contents.
      const { lineNumber, column, length } = getPositionData(
        {
          begin: item.contentrange[0],
          end: item.contentrange[1],
        } as TopLevelToken,
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

async function getApplicableVersionFromLiquidTag(conditionStr: string): Promise<VersionsObject> {
  const newConditionObject: VersionsObject = {}
  const notProducts: string[] = []
  const liquidTagVersions = conditionStr.split(' or ').map((item) => item.trim())
  for (const ver of liquidTagVersions) {
    const notMatch = ver.match(/^not (fpt|ghec|ghes)$/)
    if (notMatch) {
      notProducts.push(notMatch[1])
      continue
    }
    // Bare product and feature names, such as fpt or ghec, map directly to frontmatter versions.
    if (ver.split(' ').length === 1) {
      // Frontmatter represents one feature version at a time.
      if (ver !== 'fpt' && ver !== 'ghec' && ver !== 'ghes') {
        newConditionObject['feature'] = ver
      } else {
        newConditionObject[ver] = '*'
      }
    } else if (ver.includes(' and ')) {
      // Compound GHES ranges such as ghes >= 3.1 and ghes < 3.4 collapse into one range string.
      const ands = ver.split(' and ')
      const firstAnd = ands[0].split(' ')[0]
      // This rule only handles and conditions where every clause starts with the same product.
      if (!ands.every((and) => and.startsWith(firstAnd))) {
        return {}
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
      // Single GHES ranges such as ghes >= 3.1 map to the frontmatter range string.
      const [version, ...release] = ver.split(' ')
      const versionFmString = release.join(' ').replaceAll("'", '')
      newConditionObject[version] = versionFmString
    }
  }
  // The ifversion tag negates only the next product, so not fpt means every other product.
  // Apply these after the loop so a range term such as ghes > 3.20 can't narrow them.
  for (const notProduct of notProducts) {
    for (const product of ['fpt', 'ghec', 'ghes']) {
      if (product !== notProduct) newConditionObject[product] = '*'
    }
  }
  return newConditionObject
}

async function initTagObject(
  token: LiquidConditionalToken,
  props: DefaultProps,
): Promise<CondTagItem> {
  const fileVersionsFm = props.fileVersionsFm
  // Normalize wildcard frontmatter so Object.keys, GHES, and feature lookups read one shape.
  const fmObject: VersionsObject =
    typeof fileVersionsFm === 'string'
      ? { ghec: '*', ghes: '*', fpt: '*' }
      : ((fileVersionsFm || {}) as VersionsObject)
  const featureFromFm = fmObject.feature
  const condTagItem: CondTagItem = {
    name: token.name,
    cond: token.content.replace(`${token.name} `, '').trim(),
    begin: token.begin,
    end: token.end,
    contentrange: token.contentRange,
    fileVersionsFm,
    fileVersionsFmAll: featureFromFm
      ? {
          ...((fmObject as unknown as { versions?: VersionsObject }).versions || {}),
          ...getFeatureVersionsObject(featureFromFm),
        }
      : fmObject,
    fileVersions: props.fileVersions,
    parent: props.parent,
    versionsObj: {},
    featureVersionsObj: undefined,
    versionsObjAll: {},
    versions: [],
    action: { type: 'none' },
  }
  if (token.name === 'ifversion' || token.name === 'elsif') {
    condTagItem.versionsObj = await getApplicableVersionFromLiquidTag(condTagItem.cond)
    condTagItem.featureVersionsObj = condTagItem.versionsObj.feature
      ? getFeatureVersionsObject(condTagItem.versionsObj.feature)
      : undefined
    condTagItem.versionsObjAll = {
      ...condTagItem.versionsObj,
      ...condTagItem.featureVersionsObj,
    }
    condTagItem.versions = getApplicableVersions(condTagItem.versionsObj, '', {
      doNotThrow: true,
      includeNextVersion: true,
    })
  }
  return condTagItem
}

// Rather than filtering out items with no versions, give every item a blank
// action and let updateConditionals decide which ones become delete or change.
// setLiquidErrors turns the resulting actions into flaws later on.
function decorateCondTagItems(condTagItems: CondTagItem[]) {
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

function updateConditionals(condTagItems: CondTagItem[]) {
  // Skip endif during action updates because endif has no versions.
  for (let i = 0; i < condTagItems.length - 1; i++) {
    const item = condTagItems[i]

    // Collapse feature conditions that cover all versions.
    if (
      isAllVersions(
        item.featureVersionsObj ||
          ((item as unknown as { versionObj?: VersionsObject }).versionObj as VersionsObject),
      )
    ) {
      processConditionals(item, condTagItems, i)
      break
    }

    // Deprecatable features must be absent from every supported GHES release or present in all.
    if (item.versionsObj?.feature && item.versionsObjAll?.ghes) {
      // A feature available in every supported GHES release can collapse into the parent condition.
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
      // Delete a feature absent from every supported GHES release.
      if (isGhesReleaseDeprecated(oldestSupported, item.versionsObjAll.ghes)) {
        item.action.type = 'delete'
        continue
      }
    }
    const fileVersionsFmObject =
      item.fileVersionsFm && typeof item.fileVersionsFm === 'object' ? item.fileVersionsFm : {}
    if (item.versionsObj?.feature || fileVersionsFmObject.feature) break

    // Skip nested conditions under feature parents because feature versions can change.
    if (
      item.parent &&
      item.parent.versions &&
      item.parent?.versionsObj?.feature &&
      item.parent.versions.length > 0 &&
      difference(item.parent.versions, item.versions).length === 0
    )
      continue

    // A nested condition that covers every parent version can collapse into the parent.
    if (
      item.parent &&
      item.parent.versions &&
      item.parent.versions.length > 0 &&
      difference(item.parent.versions, item.versions).length === 0
    ) {
      processConditionals(item, condTagItems, i)
      break
    }

    // A condition matching page frontmatter applies to every rendered version for this file.
    const noDiffInFileVersions = difference(item.fileVersions, item.versions).length === 0
    if (noDiffInFileVersions) {
      processConditionals(item, condTagItems, i)
      break
    }

    // Delete tags whose version set leaves no rendered versions.
    if (item.versions.length === 0) {
      item.action.type = 'delete'
      continue
    }

    // For unchanged else conditions, no other changes can apply.
    if (item.name === 'else') continue

    // Remove condition products that the page frontmatter does not define.
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

    // Remaining changes only simplify GHES release ranges.
    if (!item.versionsObjAll.ghes || item.versionsObjAll.ghes === '*') continue

    const simplifiedSemver = getSimplifiedSemverRange(item.versionsObjAll.ghes)
    // Drop GHES from the conditional when other products still apply.
    if (simplifiedSemver === '' && Object.keys(item.versionsObj).length > 1) {
      item.action.type = 'change'
      delete item.versionsObj.ghes
      item.action.cond = Object.keys(item.versionsObj).join(' or ')
      continue
    }

    // Replace changed GHES ranges with simplified semver.
    if (item.versionsObjAll.ghes !== simplifiedSemver && !item.versionsObjAll.feature) {
      item.action.type = 'change'
      item.versionsObj.ghes = simplifiedSemver

      // Translate the simplified range back to Liquid condition syntax.
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

  // If the deleted ifversion has a surviving elsif, promote the elsif to ifversion.
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

  // If the deleted ifversion leaves a full-coverage else, remove the else wrapper too.
  if (
    condTagItems.length - 1 === 2 &&
    condTagItems[0].action.type === 'delete' &&
    difference(condTagItems[1].fileVersions, condTagItems[1].versions).length === 0
  ) {
    condTagItems[1].action.type = 'all'
    condTagItems[2].action.type = 'delete'
  }

  // Delete endif when every condition body in the chain is deleted.
  const isAllDelete = condTagItems
    .slice(0, condTagItems.length - 1)
    .every((item) => item.action.type === 'delete')
  if (isAllDelete) {
    condTagItems[condTagItems.length - 1].action.type = 'delete'
  }
}

function processConditionals(
  item: CondTagItem,
  condTagItems: CondTagItem[],
  indexOfAllItem: number,
) {
  item.action.type = 'all'
  // When any tag covers all versions, every other tag in the statement is obsolete.
  for (let i = 0; i < condTagItems.length; i++) {
    const stackItem = condTagItems[i]
    if (indexOfAllItem !== i) {
      stackItem.action = { type: 'delete' }
    }
  }
}
