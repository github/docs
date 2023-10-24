/*
Parses fenced code blocks with `annotate` in info string.
Results in single line comments split out, output format is:

.annotate
  .annotate-row (n)
    .annotate-code
    .annotate-note

Contributing rules:
- You must include `annotate` in the info string
- You must include a language on the starting ` ``` ` tag.
- Notes must start with one of: `#`, `//`, `<!--`, `%%`. (comment tag)
- The comment tag style must match the language on the code fence.
- Multiline-style comments, such as `/*` are not supported.
- You can include any number of spaces before the comment tag starts.
- You can include any number of spaces after the comment tag ends.
- You can leave after the comment tag blank to create a blank annotation.
- You cannot create a blank code block however.
- Anything after the comment tag will be parsed with Markdown.
- You can use any inline Markdown tag in the comment; recommend against using block tags such as headings, blockquote, horizontal rules, tables, lists, or code fences.
- Multiple lines in row with the comment tag will result in a single annotation.
- Empty lines, or lines that contain only space characters, will be discarded.
- You must start the code section with a single line comment, otherwise the two will be flipped.
- For HTML style, you can include a line after your annotations such as `<!-- -->` to maintain syntax highlighting; this will not impact what renders.

`parse-info-string.js` plugin is required for this to work, and must come before `remark-rehype`.
`annotate` must come before the `highlight` plugin.
*/

import yaml from 'js-yaml'
import fs from 'fs'
import { chunk, last } from 'lodash-es'
import { visit } from 'unist-util-visit'
import { h } from 'hastscript'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toHast } from 'mdast-util-to-hast'
import { header } from './code-header.js'

const languages = yaml.load(fs.readFileSync('./data/variables/code-languages.yml', 'utf8'))

const commentRegexes = {
  number: /^\s*#\s*/, // also known has hash or sharp; but the unicode name is "number sign"
  slash: /^\s*\/\/\s*/,
  xml: /^\s*<!--\s*/,
  percent: /^\s*%%?\s*/,
  hyphen: /^\s*--\s*/,
}

const matcher = (node) =>
  node.type === 'element' && node.tagName === 'pre' && getPreMeta(node).annotate

export default function annotate() {
  return (tree) => {
    visit(tree, matcher, (node, index, parent) => {
      parent.children[index] = createAnnotatedNode(node)
    })
  }
}

function createAnnotatedNode(node) {
  const lang = node.children[0].properties.className[0].replace('language-', '')
  const code = node.children[0].children[0].value

  // Check the code is parse-able
  validate(lang, code)

  // Group into code and notes
  const lines = code.split('\n').filter(hasChar)
  const groups = chunkBy(lines, matchComment(lang))

  // Group groups into rows
  const rows = chunk(groups, 2)

  // Render the HTML
  return template({ lang, code, rows })
}

function validate(lang, code) {
  if (!lang) {
    throw new Error('No language specific for annotate info string.')
  }
  if (!languages[lang]) {
    throw new Error(
      `Unsupported language for annotate info string. Please use one of: ${Object.keys(
        languages,
      )}.`,
    )
  }

  const firstLine = code.split('\n')[0]
  if (!getRegexp(lang).test(firstLine)) {
    throw new Error(
      `Make sure the annotated code example starts with a single line annotation. It's currently starting with: ${firstLine}`,
    )
  }

  if (!new RegExp(getRegexp(lang), 'm').test(code)) {
    throw new Error(
      'Make sure the comment syntax matches the language. Use single-line comments only.',
    )
  }
}

function getRegexp(lang) {
  return commentRegexes[languages[lang].comment]
}

function hasChar(line) {
  return Boolean(line.trim())
}

function chunkBy(arr, predicate) {
  const groups = [[]]
  let on = predicate(arr[0])
  for (const item of arr) {
    if ((!on && predicate(item)) || (on && !predicate(item))) {
      on = !on
      groups.push([])
    }
    last(groups).push(item)
  }
  return groups
}

function matchComment(lang) {
  const regex = getRegexp(lang)
  return (line) => regex.test(line)
}

function getSubnav() {
  const besideBtn = h(
    'button',
    {
      name: 'annotate-display',
      value: 'beside',
      type: 'button',
      className: 'BtnGroup-item btn btn-sm',
    },
    ['Beside'],
  )
  const inlineBtn = h(
    'button',
    {
      name: 'annotate-display',
      value: 'inline',
      type: 'button',
      className: 'BtnGroup-item btn btn-sm',
    },
    ['Inline'],
  )

  return h('div', { className: 'BtnGroup' }, [besideBtn, inlineBtn])
}

function template({ lang, code, rows }) {
  return h(
    'div',
    { class: 'annotate beside' },
    h('div', { className: 'annotate-header' }, header(lang, code, getSubnav())),
    h(
      'div',
      { className: 'annotate-beside' },
      rows.map(([note, code]) =>
        h('div', { className: 'annotate-row' }, [
          h(
            'div',
            { className: 'annotate-code' },
            // pre > code matches the mdast -> hast tree of a regular fenced code block.
            h('pre', h('code', { className: `language-${lang}` }, code.join('\n'))),
          ),
          h(
            'div',
            { className: 'annotate-note' },
            mdToHast(note.map(removeComment(lang)).join('\n')),
          ),
        ]),
      ),
    ),
    h('div', { className: 'annotate-inline' }, [
      // pre > code matches the mdast -> hast tree of a regular fenced code block.
      h('pre', h('code', { className: `language-${lang}` }, code)),
    ]),
  )
}

function mdToHast(text) {
  return toHast(fromMarkdown(text))
}

function removeComment(lang) {
  const regex = getRegexp(lang)
  return (line) => line.replace(regex, '')
}

function getPreMeta(node) {
  // Here's why this monstrosity works:
  // https://github.com/syntax-tree/mdast-util-to-hast/blob/c87cd606731c88a27dbce4bfeaab913a9589bf83/lib/handlers/code.js#L40-L42
  return node.children[0]?.data?.meta || {}
}
