// used below to remove extra newlines in TOC lists
const endLine = '</a>\r?\n'
const blankLine = '\\s*?[\r\n]*'
const startNextLine = '[^\\S\r\n]*?[-\\*] <a'
const blankLineInList = new RegExp(`(${endLine})${blankLine}(${startNextLine})`, 'mg')

export function processLiquidPost(template) {
  template = cleanUpListEmptyLines(template)
  template = cleanUpExtraEmptyLines(template)
  return template
}

function cleanUpListEmptyLines(template) {
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

function cleanUpExtraEmptyLines(template) {
  // this removes any extra newlines left by (now resolved) liquid
  // statements so that extra space doesn't mess with list numbering
  template = template.replace(/(\r?\n){3}/g, '\n\n')
  return template
}
