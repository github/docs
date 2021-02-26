const visit = require('unist-util-visit')
const { selectAll } = require('hast-util-select')
const parseSelector = require('hast-util-parse-selector')

/*
 * Attacher
 */
module.exports = options => {
  options = options || {}
  const selector = options.selector || options.select || 'body'
  const wrapper = options.wrapper || options.wrap

  /*
   * Transformer
   */
  return tree => {
    if (typeof wrapper !== 'string') {
      throw new TypeError('Expected a `string` as wrapper')
    }

    if (typeof selector !== 'string') {
      throw new TypeError('Expected a `string` as selector')
    }

    for (const match of selectAll(options.selector, tree)) {
      visit(tree, match, (node, i, parent) => {
        const wrapper = parseSelector('div')
        wrapper.children = [node]
        parent.children[i] = wrapper
      })
    }
  }
}
