import stripHtmlComments from 'strip-html-comments'

export function processLiquidPre(template) {
  template = removeHtmlComments(template)
  return template
}

function removeHtmlComments(template) {
  // remove any newlines that precede html comments, then remove the comments
  template = template.replace(/\n<!--/g, '<!--')
  template = stripHtmlComments(template)
  return template
}
