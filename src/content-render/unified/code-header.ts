import { load } from 'js-yaml'
import fs from 'fs'
import { visit } from 'unist-util-visit'
import { h } from 'hastscript'
import octicons from '@primer/octicons'
import { parse } from 'parse5'
import { fromParse5 } from 'hast-util-from-parse5'
import murmur from 'imurmurhash'
import { getPrompt } from './copilot-prompt'
import { generatePromptId } from '../lib/prompt-id'
import type { Element, Root } from 'hast'

interface LanguageConfig {
  name: string
  [key: string]: string | string[] | boolean | undefined
}

type Languages = Record<string, LanguageConfig>

const languages = load(fs.readFileSync('./data/code-languages.yml', 'utf8')) as Languages

export default function codeHeader() {
  return (tree: Root) => {
    visit(tree, 'element', (node, index, parent) => {
      const el = node as Element
      if (
        el.tagName !== 'pre' ||
        !(getPreMeta(el).copy || getPreMeta(el).prompt) ||
        getPreMeta(el).annotate
      )
        return
      if (index !== undefined && parent && 'children' in parent) {
        ;(parent as Element).children[index] = wrapCodeExample(el, tree)
      }
    })
  }
}

function wrapCodeExample(node: Element, tree: Root): Element {
  const codeChild = node.children[0] as Element
  const classNames = codeChild.properties.className as string[] | undefined
  const lang: string = classNames?.[0]?.replace('language-', '') ?? ''
  const textNode = codeChild.children[0] as { value: string }
  const code: string = textNode.value

  const subnav = null // getSubnav() lives in annotate.ts, not needed for normal code blocks
  const hasPrompt: boolean = Boolean(getPreMeta(node).prompt)
  const promptResult = hasPrompt ? getPrompt(node, tree, code) : null
  const hasCopy: boolean = Boolean(getPreMeta(node).copy)

  const headerHast = header(
    lang,
    code,
    subnav,
    promptResult?.element ?? null,
    hasCopy,
    promptResult?.promptContent,
  )

  return h('div', { className: 'code-example' }, [headerHast, node])
}

export function header(
  lang: string,
  code: string,
  subnav: Element | null = null,
  prompt: Element | null = null,
  hasCopy: boolean = true,
  promptContent?: string,
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
      promptContent
        ? h('pre', { hidden: true, id: generatePromptId(promptContent) }, promptContent)
        : null,
    ],
  )
}

function btnIcon(): Element {
  const btnIconHtml: string = octicons.copy.toSVG()
  const btnIconAst = parse(String(btnIconHtml), { sourceCodeLocationInfo: true })
  const btnIconElement = fromParse5(btnIconAst)
  return btnIconElement as Element
}

// mdast-util-to-hast stores code-fence metadata on the first child.
export function getPreMeta(node: Element): Record<string, unknown> {
  // Code block callers pass pre elements whose code child owns the metadata.
  const firstChild = node.children[0] as Element | undefined
  return (firstChild?.data as Record<string, Record<string, unknown>> | undefined)?.meta || {}
}
