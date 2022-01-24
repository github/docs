import h from 'hastscript'
import octicons from '@primer/octicons'
import parse5 from 'parse5'
import fromParse5 from 'hast-util-from-parse5'

const LANGUAGE_MAP = {
  asp: 'ASP',
  aspx: 'ASP',
  'aspx-vb': 'ASP',
  as3: 'ActionScript',
  apache: 'ApacheConf',
  nasm: 'Assembly',
  bat: 'Batchfile',
  'c#': 'C#',
  csharp: 'C#',
  c: 'C',
  'c++': 'C++',
  cpp: 'C++',
  chpl: 'Chapel',
  coffee: 'CoffeeScript',
  'coffee-script': 'CoffeeScript',
  cfm: 'ColdFusion',
  'common-lisp': 'Common Lisp',
  lisp: 'Common Lisp',
  dpatch: 'Darcs Patch',
  dart: 'Dart',
  elisp: 'Emacs Lisp',
  emacs: 'Emacs Lisp',
  'emacs-lisp': 'Emacs Lisp',
  pot: 'Gettext Catalog',
  html: 'HTML',
  xhtml: 'HTML',
  'html+erb': 'HTML+ERB',
  erb: 'HTML+ERB',
  irc: 'IRC log',
  json: 'JSON',
  jsp: 'Java Server Pages',
  java: 'Java',
  javascript: 'JavaScript',
  js: 'JavaScript',
  lhs: 'Literate Haskell',
  'literate-haskell': 'Literate Haskell',
  objc: 'Objective-C',
  openedge: 'OpenEdge ABL',
  progress: 'OpenEdge ABL',
  abl: 'OpenEdge ABL',
  pir: 'Parrot Internal Representation',
  posh: 'PowerShell',
  puppet: 'Puppet',
  'pure-data': 'Pure Data',
  raw: 'Raw token data',
  rb: 'Ruby',
  ruby: 'Ruby',
  r: 'R',
  scheme: 'Scheme',
  bash: 'Shell',
  sh: 'Shell',
  shell: 'Shell',
  zsh: 'Shell',
  supercollider: 'SuperCollider',
  tex: 'TeX',
  ts: 'TypeScript',
  vim: 'Vim script',
  viml: 'Vim script',
  rst: 'reStructuredText',
  xbm: 'X BitMap',
  xpm: 'X PixMap',
  yaml: 'YAML',
  yml: 'YAML',

  // Unofficial languages
  shellsession: 'Shell',
  jsx: 'JSX',
}

const COPY_REGEX = /\{:copy\}$/

/**
 * Adds a bar above code blocks that shows the language and a copy button
 */
export default function addCodeHeader(node) {
  // Check if the language matches `lang{:copy}`
  const hasCopy = node.lang && COPY_REGEX.test(node.lang)

  if (hasCopy) {
    // js{:copy} => js
    node.lang = node.lang.replace(COPY_REGEX, '')
  } else {
    // It doesn't have the copy annotation, so don't add the header
    return
  }

  // Display the language using the above map of `{ [shortCode]: language }`
  const language = LANGUAGE_MAP[node.lang] || node.lang || 'Code'

  const btnIconHtml = octicons.clippy.toSVG()
  const btnIconAst = parse5.parse(String(btnIconHtml))
  const btnIcon = fromParse5(btnIconAst, btnIconHtml)

  // Need to create the header using Markdown AST utilities, to fit
  // into the Unified processor ecosystem.
  const header = h(
    'header',
    {
      class: [
        'd-flex',
        'flex-items-center',
        'flex-justify-between',
        'p-2',
        'text-small',
        'rounded-top-1',
        'border',
      ],
    },
    [
      h('span', language),
      h(
        'button',
        {
          class: ['js-btn-copy', 'btn', 'btn-sm', 'tooltipped', 'tooltipped-nw'],
          'data-clipboard-text': node.value,
          'aria-label': 'Copy code to clipboard',
        },
        btnIcon
      ),
    ]
  )

  return {
    before: [header],
  }
}
