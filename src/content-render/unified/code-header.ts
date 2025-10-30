/**
 * Adds a bar above code blocks that shows the language and a copy button.
 * Optionally, adds a prompt button to Copilot Chat blocks.
 */

import yaml from 'js-yaml'
import fs from 'fs'
import { visit } from 'unist-util-visit'
import { h } from 'hastscript'
// @ts-ignore - no types available for @primer/octicons
import octicons from '@primer/octicons'
import { parse } from 'parse5'
import { fromParse5 } from 'hast-util-from-parse5'
import murmur from 'imurmurhash'
import { getPrompt } from './copilot-prompt'
import type { Element } from 'hast'

interface LanguageConfig {
  name: string
  [key: string]: any
}

type Languages = Record<string, LanguageConfig>

const languages = yaml.load(fs.readFileSync('./data/code-languages.yml', 'utf8')) as Languages

// Using any due to conflicting unist/hast type definitions between dependencies
const matcher = (node: any): boolean =>
  node.type === 'element' &&
  node.tagName === 'pre' &&
  // For now, limit to ones with the copy or prompt meta,
  // but we may enable for all examples later.
  (getPreMeta(node).copy || getPreMeta(node).prompt) &&
  // Don't add this header for annotated examples.
  !getPreMeta(node).annotate

export default function codeHeader() {
  // Using any due to conflicting unist/hast type definitions between dependencies
  return (tree: any) => {
    // Using any due to conflicting unist/hast type definitions between dependencies
    visit(tree, matcher, (node: any, index: number | undefined, parent: any) => {
      if (index !== undefined && parent) {
        parent.children[index] = wrapCodeExample(node, tree)
      }
    })
  }
}

// Using any due to conflicting unist/hast type definitions between dependencies
function wrapCodeExample(node: any, tree: any): Element {
  const lang: string = node.children[0].properties.className?.[0].replace('language-', '')
  const code: string = node.children[0].children[0].value

  const subnav = null // getSubnav() lives in annotate.ts, not needed for normal code blocks
  const prompt = getPrompt(node, tree, code) // returns null if there's no prompt
  const hasCopy: boolean = Boolean(getPreMeta(node).copy) // defaults to true

  const headerHast = header(lang, code, subnav, prompt, hasCopy)

  return h('div', { className: 'code-example' }, [headerHast, node])
}

export function header(
  lang: string,
  code: string,
  subnav: Element | null = null,
  prompt: Element | null = null,
  hasCopy: boolean = true,
): Element {
  const codeId: string = murmur('js-btn-copy').hash(code).result().toString()

  return h(
    'header',
    {
      class: [
        'd-flex',
        'flex-items-center',
        'flex-justify-between',
        'p-2',
        'text-small',
        'rounded-top-1',
        'border-top',
        'border-left',
        'border-right',
      ],
    },
    [
      h('span', { className: 'flex-1' }, languages[lang]?.name),
      subnav,
      prompt,
      hasCopy
        ? h(
            'button',
            {
              class: ['js-btn-copy', 'btn', 'btn-sm', 'tooltipped', 'tooltipped-nw'],
              'aria-label': `Copy ${languages[lang]?.name} code to clipboard`,
              'data-clipboard': codeId,
            },
            btnIcon(),
          )
        : null,
      h('pre', { hidden: true, 'data-clipboard': codeId }, code),
    ],
  )
}

function btnIcon(): Element {
  const btnIconHtml: string = octicons.copy.toSVG()
  const btnIconAst = parse(String(btnIconHtml), { sourceCodeLocationInfo: true })
  // @ts-ignore - fromParse5 file option typing issue
  const btnIconElement = fromParse5(btnIconAst, { file: btnIconHtml })
  return btnIconElement as Element
}

// Using any due to conflicting unist/hast type definitions between dependencies
export function getPreMeta(node: any): Record<string, any> {
  // Here's why this monstrosity works:
  // https://github.com/syntax-tree/mdast-util-to-hast/blob/c87cd606731c88a27dbce4bfeaab913a9589bf83/lib/handlers/code.js#L40-L42
  return node.children[0]?.data?.meta || {}
}
