import { Tokenizer } from 'liquidjs'

import { getLiquidConditionalsWithContent } from '../../../script/helpers/get-liquid-conditionals.js'
import getVersionBlocks from './get-version-blocks.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import supportedOperators from '#src/content-render/liquid/ifversion-supported-operators.js'

const supportedShortVersions = Object.values(allVersions).map((v) => v.shortName)
const ghaeRangeRegex = new RegExp(`ghae (${supportedOperators.join('|')})`)
const updateRangeKeepGhes = 'updateRangeKeepGhes'
const updateRangeRemoveGhes = 'updateRangeRemoveGhes'
const removeRangeAndContent = 'removeRangeAndContent'
const removeConditionals = 'removeConditionals'

const tokenize = (str) => {
  const tokenizer = new Tokenizer(str)
  return tokenizer.readTopLevelTokens()
}
// This module is used by
// src/ghes-releases/scripts/remove-version-markup.js to remove
// and update Liquid conditionals when a GHES release is being deprecated. It is also used by
// src/ghes-releases/tests/remove-liquid-statements.js.
export default function removeLiquidStatements(content, release, nextOldestRelease, file) {
  let newContent = content
  let contentChanged = false

  // Get an array of ifversion blocks with their content included.
  const blocks = getLiquidConditionalsWithContent(newContent, 'ifversion')
  if (!blocks.length) return { newContent, contentChanged }

  // Decorate those blocks with more GHES versioning information.
  const versionBlocks = getVersionBlocks(blocks)

  // Determine whether we should remove the GHES range only or the GHES range and the content.
  for (const versionBlock of versionBlocks) {
    const actionMap = {}

    versionBlock.isGhesOnly = versionBlock.condArgs.every((arg) => arg.includes('ghes'))
    versionBlock.hasSingleRange = versionBlock.ranges.length === 1
    versionBlock.andGhesRanges = versionBlock.condArgs.filter((arg) => arg.includes('and ghes'))
    const isSafeToRemoveContent =
      versionBlock.isGhesOnly && (versionBlock.hasSingleRange || versionBlock.andGhesRanges.length)

    if (canConditionalBeRemoved(supportedShortVersions, versionBlock.condOnly)) {
      actionMap[removeConditionals] = true
    }

    for (const rangeArgs of versionBlock.ranges) {
      const rangeOperator = rangeArgs[1]
      const releaseNumber = rangeArgs[2]
      // We are only concerned with the release we are deprecating and the next oldest release..
      if (!(releaseNumber === release || releaseNumber === nextOldestRelease)) continue
      // But are not concerned with conditionals _equal_ to the next oldest release, as those are still valid.
      if (rangeOperator === '=' && releaseNumber === nextOldestRelease) continue

      // Remove Liquid in these scenarios.
      const greaterThanVersionToDeprecate = rangeOperator === '>' && releaseNumber === release
      const notEqualsVersionToDeprecate = rangeOperator === '!=' && releaseNumber === release

      // Remove Liquid and content in these scenarios, IF AND ONLY IF it's safe to remove content.
      // For example, when there is no other versioning in the conditional.
      const lessThanNextOldestVersion =
        rangeOperator === '<' && (releaseNumber === nextOldestRelease || releaseNumber === release)
      const equalsVersionToDeprecate = rangeOperator === '=' && releaseNumber === release

      let action

      // Determine which action to take: removeRangeAndContent, updateRangeRemoveGhes, updateRangeKeepGhes.
      if (greaterThanVersionToDeprecate || notEqualsVersionToDeprecate) {
        // If the original is `ghes > 2.21` or `fpt or ghes > 2.21`, we want to replace it with `ghes`;
        // If the original is `ghes > 2.21 and ghes < 3.0`, we want to remove the range and leave just `ghes < 3.0`.
        action = versionBlock.hasSingleRange ? updateRangeKeepGhes : updateRangeRemoveGhes
      }

      if (lessThanNextOldestVersion || equalsVersionToDeprecate) {
        // If it's not safe to remove content, we want to at least remove `ghes` from the range.
        action = isSafeToRemoveContent ? removeRangeAndContent : updateRangeRemoveGhes
      }

      if (action) {
        actionMap[action] = versionBlock.condArgs.find((arg) => arg.endsWith(rangeArgs.join(' ')))
      }
    }

    versionBlock.action = Object.keys(actionMap).length ? actionMap : 'none'
  }

  // Create the new content and add it to each block.
  versionBlocks
    .filter((versionBlock) => versionBlock.action !== 'none')
    .forEach((versionBlock) => {
      const indexOfLastEndif = lastIndexOfRegex(versionBlock.content, /{%-? endif -?%}/g)

      // ----- REMOVE RANGE AND CONTENT -----
      if (versionBlock.action.removeRangeAndContent) {
        // If the block has an else, remove the content up to the else, plus the final endif, leaving
        // the content inside the else block as is.
        if (versionBlock.hasElse) {
          // If the ifversion conditional starts at the beginning of a line
          // we can remove the newline after the else. If the if condition
          // doesn't start at the beginning of a new line, the content before
          // the ifversion tag will be concatenated to the content after the
          // else condition on a single line.
          const replaceRegex = versionBlock.startTagColumn1
            ? new RegExp(`${versionBlock.condWithLiquid}[\\S\\s]+?{%-? else -?%}\n?`)
            : new RegExp(`${versionBlock.condWithLiquid}[\\S\\s]+?{%-? else -?%}`)

          versionBlock.newContent = versionBlock.content
            .slice(0, indexOfLastEndif)
            .replace(replaceRegex, '')

          if (versionBlock.endTagColumn1 && versionBlock.newContent.endsWith('\n'))
            versionBlock.newContent = versionBlock.newContent.slice(0, -1)
        }

        // If the block has an elsif, remove the content up to the elsif, and change the elsif to an if (or leave it
        // an elsif this this block is itself an elsif), leaving the content inside the elsif block as is. The elsif
        // condition is evaluated separately so we don't need to worry about evaluating it here.
        if (versionBlock.hasElsif) {
          const replaceRegex = new RegExp(`${versionBlock.condWithLiquid}[\\S\\s]+?({%-?) elsif`)

          versionBlock.newContent = versionBlock.content.replace(
            replaceRegex,
            `$1 ${versionBlock.condKeyword}`,
          )
        }

        // For all other scenarios, remove the Liquid and the content.
        if (!(versionBlock.hasElse || versionBlock.hasElsif)) {
          versionBlock.newContent = ''
        }
      }

      // ----- UPDATE RANGE AND REMOVE `GHES` -----
      if (versionBlock.action.updateRangeRemoveGhes) {
        // Make the replacement and get the new conditional.
        const newCondWithLiquid = versionBlock.condWithLiquid
          .replace(versionBlock.action.updateRangeRemoveGhes, '')
          .replace(/\s\s+/, ' ')

        // Update the conditional.
        versionBlock.newContent = versionBlock.content.replace(
          versionBlock.condWithLiquid,
          newCondWithLiquid,
        )
      }

      // ----- UPDATE RANGE AND KEEP `GHES` -----
      let canBeRemoved
      if (versionBlock.action.updateRangeKeepGhes) {
        const replacement = versionBlock.action.updateRangeKeepGhes.replace(/ghes.+$/, 'ghes')

        // Make the replacement and get the new conditional.
        const newCondWithLiquid = versionBlock.condWithLiquid
          .replace(versionBlock.action.updateRangeKeepGhes, replacement)
          .replace(/\s\s+/, ' ')

        // If the new conditional contains all the currently supported versions, no conditional
        // is actually needed, and it can be removed. Any `else` statements and their content should
        // also be removed.
        canBeRemoved = canConditionalBeRemoved(supportedShortVersions, newCondWithLiquid)

        if (!canBeRemoved) {
          versionBlock.newContent = versionBlock.content.replace(
            versionBlock.condWithLiquid,
            newCondWithLiquid,
          )
        }
      }

      // ----- REMOVE CONDITIONALS -----
      // this happens if either:
      // (a) the the conditional was updated in a previous step to contain all the currently supported versions, or
      // (b) the conditional was not touched but its arguments already contained all supported versions, making it unnecessary
      if (canBeRemoved || versionBlock.action.removeConditionals) {
        versionBlock.newContent = versionBlock.content

        // If this block does not contain else/elsifs, start by removing the final endif.
        // (We'll handle the endif separately in those scenarios.)
        if (!versionBlock.hasElse && !versionBlock.hasElsif) {
          const indexOfLastEndif = lastIndexOfRegex(versionBlock.content, /{%-? endif -?%}/g)

          versionBlock.newContent = versionBlock.newContent.slice(0, indexOfLastEndif)

          if (versionBlock.endTagColumn1 && versionBlock.newContent.endsWith('\n'))
            versionBlock.newContent = versionBlock.newContent.slice(0, -1)
        }

        // If start tag is on it's own line, remove line ending (\\n?)
        // and remove white space (//s*) after line ending to
        // preserve indentation of next line
        const removeStartTagRegex = versionBlock.startTagColumn1
          ? new RegExp(`${versionBlock.condWithLiquid}\\n?\\s*`)
          : new RegExp(`${versionBlock.condWithLiquid}`)

        // For ALL scenarios, remove the start tag.
        versionBlock.newContent = versionBlock.newContent.replace(removeStartTagRegex, '')

        // If the block has an elsif, change the elsif to an if (or leave it an elsif this this block is itself an elsif),
        // leaving the content inside the elsif block as is. Also leave the endif in this scenario.
        if (versionBlock.hasElsif) {
          versionBlock.newContent = versionBlock.newContent.replace(
            /({%-?) elsif/,
            `$1 ${versionBlock.condKeyword}`,
          )
        }

        // If the block has an else, remove the else, its content, and the endif.
        if (versionBlock.hasElse) {
          let elseStartIndex
          let ifCondFlag = false
          // tokenize the content including the nested conditionals to find
          // the unmatched else tag. Remove content from the start of the
          // else tag to the end of the content. The tokens return have different
          // `kind`s and can be liquid tags, HTML, and a variety of things.
          // A value of 4 is a liquid tag. See https://liquidjs.com/api/enums/parser_token_kind_.tokenkind.html.
          tokenize(versionBlock.newContent)
            .filter((elem) => elem.kind === 4)
            .forEach((tag) => {
              if (tag.name === 'ifversion' || tag.name === 'if') {
                ifCondFlag = true
              } else if (tag.name === 'endif' && ifCondFlag === true) {
                ifCondFlag = false
              } else if (tag.name === 'else' && ifCondFlag === false) {
                elseStartIndex = tag.begin
              }
            })
          versionBlock.newContent = versionBlock.newContent.slice(0, elseStartIndex)
        }
      }
    })

  // Now that we have the old and new content attached to each block, make the replacement
  // in the general content and return the updated general content.
  versionBlocks.forEach((versionBlock) => {
    if (versionBlock.action !== 'none') {
      contentChanged = true
      const newBlockContent = versionBlock.newContent.replaceAll(/\n\n\n+?/g, '\n\n')

      newContent = newContent
        .replaceAll(versionBlock.content, newBlockContent)
        .replaceAll(/({%-? ifversion |{%-? elsif )(and|or) /g, '$1') // clean up stray and/ors :/
        .replaceAll(/\n\n\n+?/g, '\n\n')

      if (file && file.includes('/data/')) {
        newContent = newContent.trim()
      }
    }
  })

  return { newContent, contentChanged }
}

// Hack to use a regex with lastIndexOf.
// Inspired by https://stackoverflow.com/a/21420210
function lastIndexOfRegex(str, regex, fromIndex) {
  const myStr = fromIndex ? str.substring(0, fromIndex) : str
  const match = myStr.match(regex)

  return match ? myStr.lastIndexOf(match[match.length - 1]) : -1
}

// Checks if a conditional is necessary given all the supported versions and the arguments in a conditional
// If all supported versions show up in the arguments, it's not necessary! Additionally, builds in support
// for when feature-based versioning is used, which looks like "issue" versions for upcoming GHAE releases
function canConditionalBeRemoved(supportedVersions, conditional) {
  if (typeof conditional !== 'string') throw new Error('Expecting a string.')

  const containsAllVersions = supportedVersions.every((arg) => conditional.includes(arg))
  const hasGhaeRange = ghaeRangeRegex.test(conditional)
  return containsAllVersions && !hasGhaeRange
}
