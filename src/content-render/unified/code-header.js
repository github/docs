/**
 * Adds a bar above code blocks that shows the language and a copy button
 */

import yaml from 'js-yaml'
import fs from 'fs'
import { visit } from 'unist-util-visit'
import { h } from 'hastscript'
import octicons from '@primer/octicons'
import { parse } from 'parse5'
import { fromParse5 } from 'hast-util-from-parse5'
import murmur from 'imurmurhash'

const languages = yaml.load(fs.readFileSync('./data/code-languages.yml', 'utf8'))

const matcher = (node) =>
  node.type === 'element' &&
  node.tagName === 'pre' &&
  // For now, limit to ones with the copy meta,
  // but we may enable for all examples later.
  getPreMeta(node).copy &&
  // Don't add this header for annotated examples.
  !getPreMeta(node).annotate

export default function codeHeader() {
  return (tree) => {
    visit(tree, matcher, (node, index, parent) => {
      parent.children[index] = wrapCodeExample(node)
    })
  }
}

function wrapCodeExample(node) {
  const lang = node.children[0].properties.className?.[0].replace('language-', '')
  const code = node.children[0].children[0].value
  return h('div', { className: 'code-example' }, [header(lang, code), node])
}

export function header(lang, code, subnav) {
  const codeId = murmur('js-btn-copy').hash(code).result()
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
      h(
        'button',
        {
          class: ['js-btn-copy', 'btn', 'btn-sm', 'tooltipped', 'tooltipped-nw'],
          'aria-label': `Copy ${languages[lang]?.name} code to clipboard`,
          'data-clipboard': codeId,
        },
        btnIcon(),
      ),
      h('pre', { hidden: true, 'data-clipboard': codeId }, code),
    ],
  )
}

function btnIcon() {
  const btnIconHtml = octicons.copy.toSVG()
  const btnIconAst = parse(String(btnIconHtml), { sourceCodeLocationInfo: true })
  const btnIcon = fromParse5(btnIconAst, { file: btnIconHtml })
  return btnIcon
}

function getPreMeta(node) {
  // Here's why this monstrosity works:
  // https://github.com/syntax-tree/mdast-util-to-hast/blob/c87cd606731c88a27dbce4bfeaab913a9589bf83/lib/handlers/code.js#L40-L42
  return node.children[0]?.data?.meta || {}
}
