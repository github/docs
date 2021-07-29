#!/usr/bin/env node

// See https://github.com/harttle/liquidjs/discussions/294#discussioncomment-305068
import { Tokenizer } from 'liquidjs'

const tokenize = (str) => {
  const tokenizer = new Tokenizer(str)
  return tokenizer.readTopLevelTokens()
}

// Return an array of just the conditional strings.
function getLiquidConditionals(str, tagNames) {
  if (!tagNames) throw new Error(`Must provide a tag name!`)
  tagNames = Array.isArray(tagNames) ? tagNames : [tagNames]

  return tokenize(str)
    .filter((token) => tagNames.includes(token.name))
    .map((token) => token.args)
}

// Return an array of objects, where the `conditional` prop contains the conditional string,
// and the `text` prop contains the contents between the start tag and the end tag.
function getLiquidConditionalsWithContent(str, tagName) {
  if (!tagName) throw new Error(`Must provide a tag name!`)
  if (typeof tagName !== 'string') throw new Error(`Must provide a single tag name as a string!`)

  const numberOfTags = (str.match(new RegExp(`{%-? ${tagName}`, 'g')) || []).length
  if (!numberOfTags) return []

  const endTagName = tagName === 'ifversion' || tagName === 'elsif' ? 'endif' : `end${tagName}`

  // Get the raw tokens, which includes versions, data tags, etc.,
  // Also this captures start tags, content, and end tags as _individual_ tokens, but we want to group them.
  const tokens = tokenize(str).map((token) => {
    return {
      conditional: token.name,
      text: token.getText(),
      position: token.getPosition(),
    }
  })

  // Parse the raw tokens and group them, so that start tags, content, and end tags are
  // all considered to be part of the same block, and return that block.
  const grouped = groupTokens(tokens, tagName, endTagName)

  // Run recursively so we can also capture nested conditionals.
  const nestedConditionals = grouped.flatMap((group) => {
    // Remove the start tag and the end tag so we are left with nested tags, if any.
    const nested = group.text
      .replace(group.conditional, '')
      .split('')
      .reverse()
      .join('')
      .replace(new RegExp(`{%-? ${endTagName} -?%}`), '')
      .split('')
      .reverse()
      .join('')

    const nestedGroups = getLiquidConditionalsWithContent(nested, tagName)

    // Remove the start tag but NOT the end tag, so we are left with elsif tags and their endifs, if any.
    const elsifs = group.text.replace(group.conditional, '')

    const elsifGroups = getLiquidConditionalsWithContent(elsifs, 'elsif')

    return [group].concat(nestedGroups, elsifGroups)
  })

  return nestedConditionals
}

function groupTokens(tokens, tagName, endTagName, newArray = []) {
  const startIndex = tokens.findIndex((token) => token.conditional === tagName)
  // The end tag name is currently in a separate token, but we want to group it with the start tag and content.
  const endIndex = tokens.findIndex((token) => token.conditional === endTagName)
  // Once all tags are grouped and removed from `tokens`, this findIndex will not find anything,
  // so we can return the grouped result at this point.
  if (startIndex === -1) return newArray

  const condBlockArr = tokens.slice(startIndex, endIndex + 1)
  if (!condBlockArr.length) return newArray

  const [newBlockArr, newEndIndex] = handleNestedTags(
    condBlockArr,
    endIndex,
    tagName,
    endTagName,
    tokens
  )

  // Combine the text of the groups so it's all together.
  const condBlock = newBlockArr.map((t) => t.text).join('')

  const startToken = tokens[startIndex]
  const endToken = tokens[endIndex]
  newArray.push({
    conditional: startToken.text,
    text: condBlock,
    endIfText: endToken.text,
    positionStart: startToken.position,
    positionEnd: endToken.position,
  })

  // Remove the already-processed tokens.
  const numberOfItemsToRemove = newEndIndex + 1 - startIndex
  tokens.splice(startIndex, numberOfItemsToRemove)

  // Run recursively until we reach the end of the tokens.
  return groupTokens(tokens, tagName, endTagName, newArray)
}

function handleNestedTags(condBlockArr, endIndex, tagName, endTagName, tokens) {
  // Return early if there are no nested tags to be handled.
  if (!hasUnhandledNestedTags(condBlockArr, tagName, endTagName)) {
    return [condBlockArr, endIndex]
  }

  // If a nested conditional is found, we have to peek forward to the next endif tag after the one we found.
  const tempEndIndex = tokens
    .slice(endIndex + 1)
    .findIndex((token) => token.conditional === endTagName)

  // Include the content up to the next endif tag.
  const additionalTokens = tokens.slice(endIndex + 1, endIndex + tempEndIndex + 2)
  const newBlockArray = condBlockArr.concat(...additionalTokens)
  const newEndIndex = endIndex + tempEndIndex + 1

  // Run this function recursively in case there are more nested tags to be handled.
  return handleNestedTags(newBlockArray, newEndIndex, tagName, endTagName, tokens)
}

function hasUnhandledNestedTags(condBlockArr, tagName, endTagName) {
  const startTags = condBlockArr.filter((t) => {
    // some blocks that start with ifversion still have if tags nested inside
    return tagName === 'ifversion'
      ? t.conditional === tagName || t.conditional === 'if'
      : t.conditional === tagName
  })
  const endTags = condBlockArr.filter((t) => t.conditional === endTagName)
  const hasMoreStartTagsThanEndTags = startTags.length > endTags.length

  // Do not consider multiple elsifs an unhandled nesting. We only care about nested ifs.
  const startTagsAreElsifs = startTags.every((t) => t.conditional === 'elsif')

  const hasUnhandledNestedTags = hasMoreStartTagsThanEndTags && !startTagsAreElsifs

  return hasUnhandledNestedTags
}

export { getLiquidConditionals, getLiquidConditionalsWithContent }
