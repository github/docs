import { visit } from 'unist-util-visit'
import { selectAll } from 'hast-util-select'
import { parseSelector } from 'hast-util-parse-selector'

/*
 * Attacher
 */
export default (options) => {
  const selector = options.selector || options.select || 'body'
  const wrapper = options.wrapper || options.wrap
  const rewrite = options.rewrite
  const additionalAttributes = options.wrapperAdditionalAttributes

  /*
   * Transformer
   */
  return (tree) => {
    if (wrapper && typeof wrapper !== 'string') {
      throw new TypeError('Expected a `string` as wrapper')
    }

    if (typeof selector !== 'string') {
      throw new TypeError('Expected a `string` as selector')
    }

    for (const match of selectAll(selector, tree)) {
      visit(tree, match, (node, i, parent) => {
        const parsedWrapper = parseSelector(wrapper)
        if (additionalAttributes) {
          parsedWrapper.properties = Object.assign(
            {},
            parsedWrapper.properties || {},
            additionalAttributes
          )
        }
        if (rewrite) {
          parsedWrapper.children = node.children
        } else {
          parsedWrapper.children = [node]
        }
        parent.children[i] = parsedWrapper
      })
    }
  }
}
