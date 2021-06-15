const renderContent = require('../../lib/render-content')

module.exports = function getIfversionConditionals (str) {
  const conditionals = []

  renderContent.liquid.parse(str)
    .filter(block => block.name === 'ifversion')
    // block.impl.branches is the only way to get an array of ifs and elsifs.
    .map(block => block.impl.branches.map(branch => branch.cond))
    .forEach(block => {
      block.forEach(branch => {
        conditionals.push(branch)
      })
    })
  
  return conditionals
}
