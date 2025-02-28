import fs from 'fs'
import yaml from 'js-yaml'

const allowedCodeFenceLanguages = Object.keys(
  yaml.load(fs.readFileSync('data/code-languages.yml', 'utf8')),
)

export const baseConfig = {
  // Don't run all rules by default. This must be done first to
  // enable a specific set of rules.
  default: false,
  'heading-increment': {
    // MD001
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'first-heading-h1': {
    // MD002
    severity: 'error',
    level: 2,
    'partial-markdown-files': false,
    'yml-files': false,
  },
  'ul-style': {
    // MD004
    severity: 'error',
    style: 'asterisk',
    'partial-markdown-files': true,
    'yml-files': false,
  },
  'no-trailing-spaces': {
    // MD009
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'no-reversed-links': {
    // MD011
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'no-multiple-blanks': {
    // MD012
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'commands-show-output': {
    // MD014
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'no-missing-space-atx': {
    // MD018
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'no-multiple-space-atx': {
    // MD019
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'blanks-around-headings': {
    // MD022
    severity: 'error',
    'partial-markdown-files': false,
    'yml-files': false,
  },
  'heading-start-left': {
    // MD023
    severity: 'error',
    'partial-markdown-files': false,
    'yml-files': false,
  },
  'no-multiple-space-blockquote': {
    // MD027
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'ol-prefix': {
    // MD029
    severity: 'error',
    style: 'one',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'list-marker-space': {
    // MD030
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'blanks-around-fences': {
    // MD031
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'no-space-in-emphasis': {
    // MD037
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'no-space-in-links': {
    // MD039
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'fenced-code-language': {
    // MD040
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
    allowed_languages: allowedCodeFenceLanguages,
    context: `When you add a fenced code block, you must specify the code language. Allowed languages are: ${allowedCodeFenceLanguages.join(', ')}. You can add allowed languages by updating data/code-languages.yml.`,
  },
  'no-empty-links': {
    // MD042
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'single-trailing-newline': {
    // MD047
    severity: 'error',
    'partial-markdown-files': true,
    'yml-files': false,
  },
  'emphasis-style': {
    // MD049
    severity: 'error',
    style: 'underscore',
    'partial-markdown-files': true,
    'yml-files': true,
  },
  'strong-style': {
    // MD050
    severity: 'error',
    style: 'asterisk',
    'partial-markdown-files': true,
    'yml-files': true,
  },
}
