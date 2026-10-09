const endLine: string = '</a>\r?\n'
const blankLine: string = '\\s*?[\r\n]*'
const startNextLine: string = '[^\\S\r\n]*?[-\\*] <a'
const blankLineInList: RegExp = new RegExp(`(${endLine})${blankLine}(${startNextLine})`, 'mg')

export function processLiquidPost(template: string): string {
  template = cleanUpListEmptyLines(template)
  template = cleanUpExtraEmptyLines(template)
  return template
}

// Remove blank lines left by product-versioned TOC items so one list does not split in two.
function cleanUpListEmptyLines(template: string): string {
  if (template.includes('</a>')) {
    template = template.replace(blankLineInList, '$1$2')
  }
  return template
}

// Liquid statements can leave triple newlines that break Markdown list numbering.
function cleanUpExtraEmptyLines(template: string): string {
  template = template.replace(/(\r?\n){3}/g, '\n\n')
  return template
}
