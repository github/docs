/**
 * Adds a runnable prompt button in the header of Copilot Chat blocks.
 */

import { find } from 'unist-util-find'
import { h } from 'hastscript'
import octicons from '@primer/octicons'
import { parse } from 'parse5'
import { fromParse5 } from 'hast-util-from-parse5'
import { getPreMeta } from './code-header'
import { generatePromptId } from '../lib/prompt-id'
import type { Element, Root } from 'hast'

export function getPrompt(
  node: Element,
  tree: Root,
  code: string,
): { element: Element; promptContent: string } | null {
  const hasPrompt = Boolean(getPreMeta(node).prompt)
  if (!hasPrompt) return null

  const { promptContent, ariaLabel } = buildPromptData(node, tree, code)
  const promptLink = `https://github.com/copilot?prompt=${encodeURIComponent(promptContent.trim())}`
  // Use murmur hash for deterministic ID (avoids hydration mismatch)
  const promptId: string = generatePromptId(promptContent)

  const element = h(
    'a',
    {
      href: promptLink,
      target: '_blank',
      class: ['btn', 'btn-sm', 'mr-1', 'tooltipped', 'tooltipped-nw', 'no-underline'],
      'aria-label': ariaLabel,
      'aria-describedby': promptId,
    },
    copilotIcon(),
  )

  return { element, promptContent }
}

function buildPromptData(
  node: Element,
  tree: Root,
  code: string,
): { promptContent: string; ariaLabel: string } {
  // Find a ref meta in the format 'ref=<id>'
  const ref = getPreMeta(node).ref

  if (!ref) {
    // If no 'ref=<id>' meta is found, use just the current code for the prompt link.
    return promptOnly(code)
  }

  // If the 'ref=<id>' meta is found, find a matching code block to include as context in the prompt link.
  const matchingCodeEl = findMatchingCode(ref as string, tree)
  if (!matchingCodeEl) {
    console.warn(`Can't find referenced code block with id=${ref}`)
    return promptOnly(code)
  }
  // AST structure: element -> code -> text node with value property
  const codeChild = matchingCodeEl.children[0] as Element | undefined
  const textNode = codeChild?.children[0] as { value?: string } | undefined
  const matchingCode = textNode?.value || null
  if (!matchingCode) {
    return promptOnly(code)
  }
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

function findMatchingCode(ref: string, tree: Root): Element | undefined {
  return find<Element>(tree, ((node: { type: string; tagName?: string }) => {
    return (
      node.type === 'element' && node.tagName === 'pre' && getPreMeta(node as Element).id === ref
    )
  }) as Parameters<typeof find>[1])
}

function copilotIcon(): Element {
  const copilotIconHtml = octicons.copilot.toSVG()
  const copilotIconAst = parse(String(copilotIconHtml), { sourceCodeLocationInfo: true })
  const copilotIconElement = fromParse5(copilotIconAst)
  return copilotIconElement as Element
}
