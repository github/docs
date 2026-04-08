// used below to remove extra newlines in TOC lists
const endLine: string = '</a>\r?\n'
const blankLine: string = '\\s*?[\r\n]*'
const startNextLine: string = '[^\\S\r\n]*?[-\\*] <a'
const blankLineInList: RegExp = new RegExp(`(${endLine})${blankLine}(${startNextLine})`, 'mg')

export function processLiquidPost(template: string): string {
  template = cleanUpListEmptyLines(template)
  template = cleanUpExtraEmptyLines(template)
  return template
}

function cleanUpListEmptyLines(template: string): string {
  // clean up empty lines in TOC lists left by unrendered list items (due to productVersions)
  // for example, remove the blank line here:
  //    - <a>foo</a>
  //
  //    - <a>bar</a>
  if (template.includes('</a>')) {
    template = template.replace(blankLineInList, '$1$2')
  }
  return template
}

function cleanUpExtraEmptyLines(template: string): string {
  // this removes any extra newlines left by (now resolved) liquid
  // statements so that extra space doesn't mess with list numbering
  template = template.replace(/(\r?\n){3}/g, '\n\n')
  return template
}
