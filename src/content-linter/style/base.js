export const baseConfig = {
  // Don't run all rules by default. This must be done first to
  // enable a specific set of rules.
  default: false,
  'heading-increment': {
    // MD001
    severity: 'warning',
  },
  'first-heading-h1': {
    // MD002
    severity: 'warning',
    level: 2,
    noPartialFileChecks: true,
  },
  'ul-style': {
    // MD004
    severity: 'error',
    style: 'dash',
  },
  'no-trailing-spaces': {
    // MD009
    severity: 'warning',
  },
  'no-reversed-links': {
    // MD011
    severity: 'error',
  },
  'no-multiple-blanks': {
    // MD012
    severity: 'error',
  },
  'commands-show-output': {
    // MD014
    severity: 'error',
  },
  'no-missing-space-atx': {
    // MD018
    severity: 'error',
  },
  'no-multiple-space-atx': {
    // MD019
    severity: 'error',
  },
  'blanks-around-headings': {
    // MD022
    severity: 'error',
  },
  'heading-start-left': {
    // MD023
    severity: 'error',
  },
  'no-multiple-space-blockquote': {
    // MD027
    severity: 'error',
  },
  'ol-prefix': {
    // MD029
    severity: 'error',
    style: 'one',
  },
  'list-marker-space': {
    // MD030
    severity: 'error',
  },
  'blanks-around-fences': {
    // MD031
    severity: 'warning',
  },
  'no-space-in-emphasis': {
    // MD037
    severity: 'error',
  },
  'no-space-in-links': {
    // MD039
    severity: 'error',
  },
  'fenced-code-language': {
    // MD040
    severity: 'warning',
    allowed_languages: [
      'bash',
      'csharp',
      'geojson',
      'go',
      'golang',
      'graphql',
      'groovy',
      'html',
      'http',
      'java',
      'javascript',
      'json',
      'markdown',
      'math',
      'md',
      'mermaid',
      'powershell',
      'python',
      'ruby',
      'scss',
      'shell',
      'sh',
      'stl',
      'tasklist',
      'text',
      'topojson',
      'xml',
      'yaml',
      'yml',
    ],
  },
  'single-trailing-newline': {
    // MD047
    severity: 'warning',
  },
  'emphasis-style': {
    // MD049
    severity: 'warning',
    style: 'underscore',
  },
  'strong-style': {
    // MD050
    severity: 'error',
    style: 'asterisk',
  },
}
