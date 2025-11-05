/**
 * Adds a runnable prompt button in the header of Copilot Chat blocks.
 */

import { find } from 'unist-util-find'
import { h } from 'hastscript'
import octicons from '@primer/octicons'
import { parse } from 'parse5'
import { fromParse5 } from 'hast-util-from-parse5'
import { getPreMeta } from './code-header'

// Using any because node and tree are hast/unist AST nodes without proper TypeScript definitions
// node is a pre element from the AST, tree is the full document AST
// Returns a hast element node for the prompt button, or null if no prompt meta exists
export function getPrompt(node: any, tree: any, code: string): any {
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

// Using any because node and tree are hast/unist AST nodes without proper TypeScript definitions
// node is the current code block element, tree is used to find referenced code blocks
function buildPromptData(
  node: any,
  tree: any,
  code: string,
): { promptContent: string; ariaLabel: string } {
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
  // Using any to access children property on untyped hast element node
  // AST structure: element -> code -> text node with value property
  const matchingCode = (matchingCodeEl as any)?.children[0].children[0].value || null
  return promptAndContext(code, matchingCode)
}

function promptOnly(code: string): { promptContent: string; ariaLabel: string } {
  return {
    promptContent: code,
    ariaLabel: 'Run this prompt in Copilot Chat',
  }
}

function promptAndContext(
  code: string,
  matchingCode: string,
): { promptContent: string; ariaLabel: string } {
  return {
    promptContent: `${matchingCode}\n${code}`,
    ariaLabel: 'Run this prompt with context in Copilot Chat',
  }
}

// Using any because tree and node are hast/unist AST nodes without proper TypeScript definitions
// Searches the AST tree for a code block with matching id in meta
function findMatchingCode(ref: string, tree: any): any {
  return find(tree, (node: any) => {
    // Using any to access tagName property on untyped hast element node
    return node.type === 'element' && (node as any).tagName === 'pre' && getPreMeta(node).id === ref
  })
}

// Returns a hast element node for the Copilot icon
// Using any return type because fromParse5 returns untyped hast nodes
function copilotIcon(): any {
  const copilotIconHtml = octicons.copilot.toSVG()
  const copilotIconAst = parse(String(copilotIconHtml), { sourceCodeLocationInfo: true })
  // Using any because fromParse5 expects VFile but we only have a string
  const copilotIconElement = fromParse5(copilotIconAst, { file: copilotIconHtml as any })
  return copilotIconElement
}
