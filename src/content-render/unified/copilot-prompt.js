/**
 * Adds a runnable prompt button in the header of Copilot Chat blocks.
 */

import { find } from 'unist-util-find'
import { h } from 'hastscript'
import octicons from '@primer/octicons'
import { parse } from 'parse5'
import { fromParse5 } from 'hast-util-from-parse5'
import { getPreMeta } from './code-header'

export function getPrompt(node, tree, code) {
  const hasPrompt = Boolean(getPreMeta(node).prompt)
  if (!hasPrompt) return null

  const { promptContent, ariaLabel } = buildPromptData(node, tree, code)
  const promptLink = `https://github.com/copilot?prompt=${encodeURIComponent(promptContent.trim())}`

  return h(
    'a',
    {
      href: promptLink,
      target: '_blank',
      class: ['btn', 'btn-sm', 'mr-1', 'tooltipped', 'tooltipped-nw', 'no-underline'],
      'aria-label': ariaLabel,
    },
    copilotIcon(),
  )
}

function buildPromptData(node, tree, code) {
  // Find a ref meta in the format 'ref=<id>'
  const ref = getPreMeta(node).ref

  if (!ref) {
    // If no 'ref=<id>' meta is found, use just the current code for the prompt link.
    return promptOnly(code)
  }

  // If the 'ref=<id>' meta is found, find a matching code block to include as context in the prompt link.
  const matchingCodeEl = findMatchingCode(ref, tree)
  if (!matchingCodeEl) {
    console.warn(`Can't find referenced code block with id=${ref}`)
    return promptOnly(code)
  }
  const matchingCode = matchingCodeEl?.children[0].children[0].value || null
  return promptAndContext(code, matchingCode)
}

function promptOnly(code) {
  return {
    promptContent: code,
    ariaLabel: 'Run this prompt in Copilot Chat',
  }
}

function promptAndContext(code, matchingCode) {
  return {
    promptContent: `${matchingCode}\n${code}`,
    ariaLabel: 'Run this prompt with context in Copilot Chat',
  }
}

function findMatchingCode(ref, tree) {
  return find(tree, (node) => {
    return node.type === 'element' && node.tagName === 'pre' && getPreMeta(node).id === ref
  })
}

function copilotIcon() {
  const copilotIconHtml = octicons.copilot.toSVG()
  const copilotIconAst = parse(String(copilotIconHtml), { sourceCodeLocationInfo: true })
  const copilotIcon = fromParse5(copilotIconAst, { file: copilotIconHtml })
  return copilotIcon
}
