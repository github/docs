/*
Parses code blocks inside {% annotate %} ... {% endannotate %}
Results in single line comments split out, output format is:

.annotate
  .annotate-row (n)
    .annotate-code
    .annotate-note

Contributing rules:
- You must wrap the entire code block in `{% annotate %}` and `{% endannotate %}`.
- You must include a language on the starting ` ``` ` tag.
- You can only include one code fence in the Liquid tags.
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
- We have not tested if this feature is compatible with other Liquid tags, but it probably is.
- For HTML style, you can include a line after your annotations such as `<!-- -->` to maintain syntax highlighting; this will not impact what renders.
*/

import { chunk, last } from 'lodash-es'

const codeFenceRegex = /^```\w*.*$/gm
const codeFenceLangRegex = /```(\w+)/
const commentRegexNumber = /^\s*#\s*/ // also known has hash or sharp; but the unicode name is "number sign"
const commentRegexSlash = /^\s*\/\/\s*/
const commentRegexXml = /^\s*<!--\s*/
const commentRegexPercent = /^\s*%%?\s*/

const languageToCommentRegex = {
  bash: commentRegexNumber,
  dockerfile: commentRegexNumber,
  graphql: commentRegexNumber,
  powershell: commentRegexNumber,
  python: commentRegexNumber,
  ruby: commentRegexNumber,
  shell: commentRegexNumber,
  text: commentRegexNumber,
  yaml: commentRegexNumber,
  csharp: commentRegexSlash,
  golang: commentRegexSlash,
  groovy: commentRegexSlash,
  java: commentRegexSlash,
  javascript: commentRegexSlash,
  jsonc: commentRegexSlash,
  scss: commentRegexSlash,
  html: commentRegexXml,
  markdown: commentRegexXml,
  tasklist: commentRegexXml,
  xml: commentRegexXml,
  math: commentRegexPercent,
  mermaid: commentRegexPercent,
}

export default {
  parse(_, remainTokens) {
    this.templates = []
    this.liquid.parser
      .parseStream(remainTokens)
      .on('template', (tpl) => this.templates.push(tpl))
      .on('tag:endannotate', function () {
        this.stop()
      })
      .on('end', () => {
        throw new Error(`tag {% annotate %} not closed`)
      })
      .start()
  },

  *render(context, emitter) {
    const md = yield this.liquid.renderer.renderTemplates(this.templates, context)
    emitter.write(parseAnnotatedCode(md))
  },
}

function parseAnnotatedCode(md) {
  // Determine the language for highlighting
  const lang = md.match(codeFenceLangRegex)?.[1]

  // Check the code example is parse-able
  validate(md, lang)

  // Remove ```lang and ``` from the example
  const allCode = md.replace(codeFenceRegex, '')

  // Group into code and notes
  const lines = allCode.split('\n').filter(hasChar)
  const groups = chunkBy(lines, matchComment(lang))

  // Group groups into rows
  const rows = chunk(groups, 2)

  // Render the HTML
  return template({ rows, lang })
}

function validate(md, lang) {
  if (!lang) {
    throw new Error('No language specified for {% annotate %} tag')
  }
  if (!languageToCommentRegex[lang]) {
    throw new Error(
      `Unsupported language for {% annotate %} tag. Please use one of: ${Object.keys(
        languageToCommentRegex
      )}`
    )
  }
  if (!new RegExp(languageToCommentRegex[lang], 'm').test(md)) {
    throw new Error(
      'Make sure the comment syntax matches the language. Use single-line comments only.'
    )
  }
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
  const regex = languageToCommentRegex[lang]
  return (line) => regex.test(line)
}

function template({ rows, lang }) {
  return div(
    { class: 'annotate' },
    rows.map(([note, code]) =>
      div({ class: 'annotate-row' }, [
        div({ class: 'annotate-code' }, ['', '```' + lang, ...code, '```', '']),
        div({ class: 'annotate-note' }, ['', ...note.map(removeComment(lang)), '']),
      ])
    )
  )
}

function removeComment(lang) {
  const regex = languageToCommentRegex[lang]
  return (line) => line.replace(regex, '')
}

const div = (...args) => h('div', ...args)

function h(element, properties, children) {
  const props = Object.entries(properties)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ')
  return [`<${element} ${props}>`, ...children, `</${element}>`].join('\n')
}
