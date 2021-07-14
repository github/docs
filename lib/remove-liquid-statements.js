import { drop, dropRight, first, last } from 'lodash-es'

// ----- START LIQUID PATTERNS ----- //
const startTag = /(?:^ *?)?{%-?/
const endTag = /-?%}/
const contentRegex = /[\s\S]*?/gm
const emptyString = /^\s*?$/m
const nonEmptyString = /^.*?\S.*?/m
const ifStatement = new RegExp(startTag.source + ' if .*?' + endTag.source)
const ifRegex = new RegExp(ifStatement.source, 'gm')
const firstIfRegex = new RegExp(ifStatement.source, 'm')
const elseRegex = new RegExp(startTag.source + ' else ?' + endTag.source)
const endRegex = new RegExp(startTag.source + ' endif ?' + endTag.source, 'g')
const captureEndRegex = new RegExp('(' + endRegex.source + ')', 'g')
const dropSecondEndIf = new RegExp(
  '(' + endRegex.source + contentRegex.source + ')' + endRegex.source,
  'm'
)
const inlineEndRegex = new RegExp(nonEmptyString.source + endRegex.source, 'gm')
const inlineIfRegex = new RegExp(nonEmptyString.source + ifStatement.source, 'gm')

// include one level of nesting
const liquidBlockRegex = new RegExp(
  ifRegex.source +
    '((' +
    ifRegex.source +
    contentRegex.source +
    endRegex.source +
    '|[\\s\\S])*?)' +
    endRegex.source,
  'gm'
)
const elseBlockRegex = new RegExp(
  elseRegex.source +
    '(?:' +
    ifRegex.source +
    contentRegex.source +
    endRegex.source +
    '|[\\s\\S])*?' +
    endRegex.source,
  'gm'
)
// ----- END LIQUID PATTERNS ----- //

export default function removeLiquidStatements(content, versionToDeprecate, nextOldestVersion) {
  // see tests/fixtures/remove-liquid-statements for examples
  const regexes = {
    // remove liquid only
    greaterThanVersionToDeprecate: new RegExp(
      startTag.source +
        ` if ?(?: currentVersion == ('|")'?free-pro-team@latest'?('|")  ?or)? currentVersion ver_gt ('|")${versionToDeprecate}('|") ` +
        endTag.source,
      'gm'
    ),
    andGreaterThanVersionToDeprecate1: new RegExp(
      '(' +
        startTag.source +
        ` if .*?) and currentVersion ver_gt (?:'|")${versionToDeprecate}(?:'|")( ` +
        endTag.source +
        ')',
      'gm'
    ),
    andGreaterThanVersionToDeprecate2: new RegExp(
      '(' +
        startTag.source +
        ` if )currentVersion ver_gt (?:'|")${versionToDeprecate}(?:'|") and (.*? ` +
        endTag.source +
        ')',
      'gm'
    ),
    notEqualsVersionToDeprecate: new RegExp(
      '(' +
        startTag.source +
        ` if)(?:( currentVersion .*?) or)? currentVersion != (?:'|")${versionToDeprecate}(?:'|")( ` +
        endTag.source +
        ')',
      'gm'
    ),
    andNotEqualsVersionToDeprecate: new RegExp(
      '(' +
        startTag.source +
        ` if .*?) and currentVersion != (?:'|")${versionToDeprecate}(?:'|")( ` +
        endTag.source +
        ')',
      'gm'
    ),
    // remove liquid and content
    lessThanNextOldestVersion: new RegExp(
      startTag.source + ` if .*?ver_lt ('|")${nextOldestVersion}('|") ?` + endTag.source,
      'm'
    ),
    equalsVersionToDeprecate: new RegExp(
      startTag.source + ` if .*?== ('|")${versionToDeprecate}('|") ?` + endTag.source,
      'm'
    ),
  }

  let allLiquidBlocks = getLiquidBlocks(content)
  if (!allLiquidBlocks) return content

  // remove markup like ver_gt "2.13" and leave content
  content = removeLiquidOnly(content, allLiquidBlocks, regexes)

  // get latest liquidBlocks based on updated content
  allLiquidBlocks = getLiquidBlocks(content)

  if (allLiquidBlocks) {
    // remove content and surrounding markup like ver_lt "2.14" and == "2.13"
    content = removeLiquidAndContent(content, allLiquidBlocks, regexes)
  }

  // clean up
  content = removeExtraNewlines(content)

  return content
}

function getLiquidBlocks(content) {
  const liquidBlocks = content.match(liquidBlockRegex)
  if (!liquidBlocks) return

  // handle up to one level of nesting
  const innerBlocks = getInnerBlocks(liquidBlocks)

  return innerBlocks ? liquidBlocks.concat(innerBlocks) : liquidBlocks
}

function getInnerBlocks(liquidBlocks) {
  const innerBlocks = []

  liquidBlocks.forEach((block) => {
    const ifStatements = block.match(ifRegex)
    if (!ifStatements) return

    // only process blocks that have more than one if statement
    if (!(ifStatements.length > 1)) return

    // drop first character so we don't match outer if statement
    // because it's already included in array of blocks
    const newBlock = block.slice(1)
    const innerIfStatements = newBlock.match(liquidBlockRegex)

    // add each inner if statement to array of blocks
    innerIfStatements.forEach((innerIfStatement) => {
      innerBlocks.push(innerIfStatement)
    })
  })

  return innerBlocks
}

function removeLiquidOnly(content, allLiquidBlocks, regexes) {
  const blocksToUpdate = allLiquidBlocks.filter((block) => {
    // inner blocks are processed separately, so we only care about first if statements
    const firstIf = block.match(firstIfRegex)
    if (block.match(regexes.greaterThanVersionToDeprecate))
      return firstIf[0] === block.match(regexes.greaterThanVersionToDeprecate)[0]
    if (block.match(regexes.andGreaterThanVersionToDeprecate1))
      return firstIf[0] === block.match(regexes.andGreaterThanVersionToDeprecate1)[0]
    if (block.match(regexes.andGreaterThanVersionToDeprecate2))
      return firstIf[0] === block.match(regexes.andGreaterThanVersionToDeprecate2)[0]
    if (block.match(regexes.notEqualsVersionToDeprecate))
      return firstIf[0] === block.match(regexes.notEqualsVersionToDeprecate)[0]
    if (block.match(regexes.andNotEqualsVersionToDeprecate))
      return firstIf[0] === block.match(regexes.andNotEqualsVersionToDeprecate)[0]
    return false
  })

  blocksToUpdate.forEach((block) => {
    let newBlock = block

    if (newBlock.match(regexes.andGreaterThanVersionToDeprecate1)) {
      newBlock = newBlock.replace(regexes.andGreaterThanVersionToDeprecate1, matchAndStatement1)
    }

    if (newBlock.match(regexes.andGreaterThanVersionToDeprecate2)) {
      newBlock = newBlock.replace(regexes.andGreaterThanVersionToDeprecate2, matchAndStatement2)
    }

    if (newBlock.match(regexes.notEqualsVersionToDeprecate)) {
      newBlock = newBlock.replace(regexes.notEqualsVersionToDeprecate, matchNotEqualsStatement)
    }

    if (newBlock.match(regexes.andNotEqualsVersionToDeprecate)) {
      newBlock = newBlock.replace(
        regexes.andNotEqualsVersionToDeprecate,
        matchAndNotEqualsStatement
      )
    }

    // replace else block with endif
    const elseBlock = getElseBlock(newBlock)

    if (elseBlock) {
      newBlock = newBlock.replace(`${elseBlock}`, '{% endif %}')
    }

    if (
      newBlock.match(regexes.greaterThanVersionToDeprecate) ||
      newBlock.match(regexes.notEqualsVersionToDeprecate)
    ) {
      newBlock = newBlock.replace(liquidBlockRegex, matchGreaterThan)
    }

    // we need more context to determine whether an if tag is inline or not
    const startIndex = content.indexOf(block)
    const endIndex = startIndex + block.length
    const leftIndex = startIndex - 10
    const blockWithLeftContext = content.slice(leftIndex, endIndex)

    // only remove newlines around non-inline tags
    if (blockWithLeftContext.match(inlineIfRegex) && block.match(inlineEndRegex)) {
      newBlock = removeLastNewline(newBlock)
    } else if (blockWithLeftContext.match(inlineIfRegex) && !block.match(inlineEndRegex)) {
      newBlock = removeLastNewline(newBlock)
    } else if (!blockWithLeftContext.match(inlineIfRegex) && block.match(inlineEndRegex)) {
      newBlock = removeFirstNewline(newBlock)
    } else {
      newBlock = removeFirstAndLastNewlines(newBlock)
    }

    // final replacement
    content = content.replace(block, newBlock)
  })

  return content
}

function matchGreaterThan(match, p1) {
  return p1
}

function matchAndStatement1(match, p1, p2) {
  return p1 + p2
}

function matchAndStatement2(match, p1, p2) {
  return p1 + p2
}

function matchNotEqualsStatement(match, p1, p2, p3) {
  if (!p2) return match
  return p1 + p2 + p3
}

function matchAndNotEqualsStatement(match, p1, p2) {
  return p1 + p2
}

function removeLiquidAndContent(content, allLiquidBlocks, regexes) {
  const blocksToRemove = allLiquidBlocks.filter((block) => {
    const firstIf = block.match(firstIfRegex)
    if (block.match(regexes.lessThanNextOldestVersion))
      return firstIf[0] === block.match(regexes.lessThanNextOldestVersion)[0]
    if (block.match(regexes.equalsVersionToDeprecate))
      return firstIf[0] === block.match(regexes.equalsVersionToDeprecate)[0]
    return false
  })

  blocksToRemove.forEach((block) => {
    const elseBlock = getElseBlock(block)

    // remove else conditionals but leave content
    if (elseBlock) {
      const numberOfEndTags = elseBlock[0].match(captureEndRegex)

      // remove the endif as part of removing the else block
      // if there are two endifs block, only remove the second one
      // this applies specifically to example8 in less-than-next-oldest fixture
      let newBlock
      if (numberOfEndTags.length > 1) {
        const blockWithFirstElseRemoved = elseBlock[0].replace(elseRegex, '')
        newBlock = blockWithFirstElseRemoved.replace(dropSecondEndIf, '$1')
      } else {
        newBlock = elseBlock[0].replace(elseRegex, '').replace(captureEndRegex, '')
      }
      content = content.replace(block, newBlock.trim())
    } else {
      content = content.replace(block, '')
    }
  })

  return content
}

function removeFirstNewline(block) {
  const lines = block.split(/\r?\n/)
  if (!first(lines).match(emptyString)) return block
  return drop(lines, 1).join('\n')
}

function removeLastNewline(block) {
  const lines = block.split(/\r?\n/)
  if (!last(lines).match(emptyString)) return block
  return dropRight(lines, 1).join('\n')
}

function removeFirstAndLastNewlines(block) {
  block = removeFirstNewline(block)
  return removeLastNewline(block)
}

function getElseBlock(block) {
  const firstIf = block.match(firstIfRegex)
  const elseBlock = block.match(elseBlockRegex)

  // if no else block, return the null result
  if (!elseBlock) return elseBlock

  // if there is an else block, check for an inner block
  const blockWithFirstIfRemoved = block.replace(firstIf[0], '')
  const innerBlock = blockWithFirstIfRemoved.match(liquidBlockRegex)

  // if no inner block, we can safely return the else block as is
  if (!innerBlock) return elseBlock

  // if there is an inner block, check if it is contained by the else block
  // if so, we can safely return the else block as is
  // see example8 in less-than-next-oldest
  if (elseBlock[0].includes(innerBlock[0])) return block.match(elseBlockRegex)

  // if the inner block contains the else block,
  // drop the inner block and return any other else blocks
  // see example7 in greater-than fixtures
  if (innerBlock[0].includes(elseBlock[0])) {
    const newBlock = block.replace(innerBlock[0], '')
    return newBlock.match(elseBlockRegex)
  }

  // otherwise, return any else matches on the original block
  return block.match(elseBlockRegex)
}

function removeExtraNewlines(content) {
  return content.replace(/(\r?\n){3,4}/gm, '\n\n')
}
