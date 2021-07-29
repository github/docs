import { visit } from 'unist-util-visit'
import { selectAll } from 'hast-util-select'
import { parseSelector } from 'hast-util-parse-selector'

/*
 * Attacher
 */
export default (options) => {
  options = options || {}
  const selector = options.selector || options.select || 'body'
  const wrapper = options.wrapper || options.wrap

  /*
   * Transformer
   */
  return (tree) => {
    if (typeof wrapper !== 'string') {
      throw new TypeError('Expected a `string` as wrapper')
    }

    if (typeof selector !== 'string') {
      throw new TypeError('Expected a `string` as selector')
    }

    for (const match of selectAll(selector, tree)) {
      visit(tree, match, (node, i, parent) => {
        const parsedWrapper = parseSelector(wrapper)
        parsedWrapper.children = [node]
        parent.children[i] = parsedWrapper
      })
    }
  }
}
