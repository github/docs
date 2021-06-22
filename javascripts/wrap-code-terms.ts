import escape from 'lodash/escape'
const wordsLongerThan18Chars = /[\S]{18,}/g
const camelCaseChars = /([a-z])([A-Z])/g
const underscoresAfter12thChar = /([\w:]{12}[^_]*?)_/g
const slashChars = /([/\\])/g

// This module improves table rendering on reference pages by inserting a <wbr>
// tag in code terms that use camelcase, slashes, or underscores, inspired by
// http://heap.ch/blog/2016/01/19/camelwrap/
export default function () {
  const codeTerms = document.querySelectorAll('#article-contents table code')
  if (!codeTerms) return

  codeTerms.forEach(node => {
    // Return early if a child node is an anchor element
    const hasChildAnchor = Array.from(node.childNodes).some(child => child.nodeName === 'A')
    if (hasChildAnchor) return

    // Do the wrapping on the inner text only
    const oldText = escape(node.textContent || '')

    const newText = oldText.replace(wordsLongerThan18Chars, (str) => {
      return (
        str
          // GraphQL code terms use camelcase
          .replace(camelCaseChars, '$1<wbr>$2')
          // REST code terms use underscores
          // to keep word breaks looking nice, only break on underscores after the 12th char
          // so `has_organization_projects` will break after `has_organization` instead of after `has_`
          .replace(underscoresAfter12thChar, '$1_<wbr>')
          // Some Actions reference pages have tables with code terms separated by slashes
          .replace(slashChars, '$1<wbr>')
      )
    })

    node.innerHTML = node.innerHTML.replace(oldText, newText)
  })
}
