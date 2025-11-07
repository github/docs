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

`parse-info-string.ts` plugin is required for this to work, and must come before `remark-rehype`.
`annotate` must come before the `highlight` plugin.
*/

import yaml from 'js-yaml'
import fs from 'fs'
import { chunk, last } from 'lodash-es'
import { visit } from 'unist-util-visit'
import { h } from 'hastscript'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toHast } from 'mdast-util-to-hast'
import type { Root } from 'mdast'
import { header } from './code-header'
import findPage from '@/frame/lib/find-page'

interface LanguageConfig {
  comment: 'number' | 'slash' | 'xml' | 'percent' | 'hyphen'
  [key: string]: any
}

interface ElementNode {
  type: 'element'
  tagName: string
  properties: {
    className?: string[]
    [key: string]: any
  }
  children: any[]
  data?: {
    meta?: {
      annotate?: boolean
      [key: string]: any
    }
  }
}

const languages = yaml.load(fs.readFileSync('./data/code-languages.yml', 'utf8')) as Record<
  string,
  LanguageConfig
>

const commentRegexes = {
  // Also known has hash or sharp; but the unicode name is "number sign".
  // The reason this has 2 variants is because the hash is used, in bash
  // for both hash-hang and for comments.
  // For example:
  //
  //     #!/bin/bash
  //
  // ...is not a comment.
  // But if you only look for `#` followed by anything-but `!` it will not
  // match if the line is just `#`.
  //
  //    > /^\s*#[^!]\s*/.test('#')
  //    false
  //
  // Which makes sense, because the `#` is not followed by anything.
  // That's why we use the | operator to make an "exception" for that case.
  number: /^\s*#[^!]\s*|^\s*#$/,
  slash: /^\s*\/\/\s*/,
  xml: /^\s*<!--\s*/,
  percent: /^\s*%%?\s*/,
  hyphen: /^\s*--\s*/,
}

// Using 'any' for node because unist-util-visit requires broad type compatibility
const matcher = (node: any): node is ElementNode =>
  node.type === 'element' && node.tagName === 'pre' && Boolean(getPreMeta(node).annotate)

// Using 'any' for context because unified plugins receive different context types depending on processor configuration
export default function annotate(context: any) {
  // Using 'any' for tree because unified's AST types are complex and vary between processors
  return (tree: any) => {
    // Using 'any' for parent because unist-util-visit's callback typing doesn't provide specific parent types
    visit(tree, matcher, (node: ElementNode, index: number | undefined, parent: any) => {
      if (index !== undefined && parent) {
        parent.children[index] = createAnnotatedNode(node, context)
      }
    })
  }
}

// Using 'any' for context to match the plugin signature, and return type because hastscript returns complex hast types
function createAnnotatedNode(node: ElementNode, context: any): any {
  const lang = node.children[0].properties.className[0].replace('language-', '')
  const code = node.children[0].children[0].value

  // Check the code is parse-able
  validate(lang, code)

  // Group into code and notes
  const lines = code.split('\n').filter(hasChar)
  const groups = chunkBy(lines, matchComment(lang))

  // Group groups into rows
  const rows = chunk(groups, 2)

  // Check the rows are formatted correctly
  for (const [note, codeBlock] of rows) {
    if (note === undefined || codeBlock === undefined) {
      throw new Error(
        "Each annotation must have a note and a code block. If you're trying to create a blank annotation, you can use a single line comment with a space after it.",
      )
    }
  }

  // Render the HTML
  return template({ lang, code, rows, context })
}

function validate(lang: string, code: string): void {
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

function getRegexp(lang: string): RegExp {
  return commentRegexes[languages[lang].comment]
}

function hasChar(line: string): boolean {
  return Boolean(line.trim())
}

function chunkBy(arr: string[], predicate: (item: string) => boolean): string[][] {
  const groups: string[][] = [[]]
  let on = predicate(arr[0])
  for (const item of arr) {
    if ((!on && predicate(item)) || (on && !predicate(item))) {
      on = !on
      groups.push([])
    }
    last(groups)!.push(item)
  }
  return groups
}

function matchComment(lang: string): (line: string) => boolean {
  const regex = getRegexp(lang)
  return (line) => regex.test(line)
}

// Using 'any' return type because hastscript's h() function returns complex hast element types
function getSubnav(): any {
  const besideBtn = h(
    'button',
    {
      name: 'annotate-display',
      value: 'beside',
      type: 'button',
      className: 'annotate-option',
    },
    ['Beside'],
  )
  const inlineBtn = h(
    'button',
    {
      name: 'annotate-display',
      value: 'inline',
      type: 'button',
      className: 'annotate-option',
    },
    ['Inline'],
  )

  return h('div', { className: 'annotate-toggle' }, [besideBtn, inlineBtn])
}

// Using 'any' for context and return type due to hastscript's complex type definitions
function template({
  lang,
  code,
  rows,
  context,
}: {
  lang: string
  code: string
  rows: string[][][]
  context: any
}): any {
  return h(
    'div',
    { class: 'annotate beside' },
    h('div', { className: 'annotate-header' }, header(lang, code, getSubnav())),
    h(
      'div',
      { className: 'annotate-beside' },
      rows.map(([note, codeBlock]) =>
        h('div', { className: 'annotate-row' }, [
          h(
            'div',
            { className: 'annotate-code' },
            // pre > code matches the mdast -> hast tree of a regular fenced code block.
            h('pre', h('code', { className: `language-${lang}` }, codeBlock.join('\n'))),
          ),
          h(
            'div',
            { className: 'annotate-note' },
            mdToHast(note.map(removeComment(lang)).join('\n'), context),
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

// Using 'any' for context and return type to maintain compatibility with mdast-util-to-hast complex types
function mdToHast(text: string, context: any): any {
  const mdast: Root = fromMarkdown(text)

  // Process AUTOTITLE links
  processAutotitleInMdast(mdast, context)

  return toHast(mdast)
}

// Helper method to process AUTOTITLE links in MDAST
// This can be reused for other MDAST processing that needs AUTOTITLE support
// Using 'any' for context because it may or may not have pages/redirects properties depending on usage
function processAutotitleInMdast(mdast: Root, context: any): void {
  visit(mdast, 'link', (node) => {
    if (node.url && node.url.startsWith('/')) {
      for (const child of node.children) {
        if (child.type === 'text' && /^\s*AUTOTITLE\s*$/.test(child.value)) {
          // Find the page and get its title
          const page = findPage(node.url, context.pages, context.redirects)
          if (page) {
            try {
              // Use rawTitle for synchronous processing in annotations
              child.value = page.rawTitle || 'AUTOTITLE'
            } catch (error) {
              // Keep AUTOTITLE if we can't get the title
              console.warn(
                `Could not resolve AUTOTITLE for ${node.url}:`,
                error instanceof Error ? error.message : String(error),
              )
            }
          }
        }
      }
    }
  })
}

function removeComment(lang: string): (line: string) => string {
  const regex = getRegexp(lang)
  return (line) => line.replace(regex, '')
}

function getPreMeta(node: ElementNode): { annotate?: boolean; [key: string]: any } {
  // Here's why this monstrosity works:
  // https://github.com/syntax-tree/mdast-util-to-hast/blob/c87cd606731c88a27dbce4bfeaab913a9589bf83/lib/handlers/code.js#L40-L42
  return node.children[0]?.data?.meta || {}
}
