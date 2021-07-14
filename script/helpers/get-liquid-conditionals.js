const { Tokenizer } = require('liquidjs')

module.exports = function getLiquidConditionals (str, tagNames) {
  const tokenizer = new Tokenizer(str)

  tagNames = Array.isArray(tagNames) ? tagNames : [tagNames]

  return tokenizer.readTopLevelTokens()
    .filter(token => tagNames.includes(token.name))
    .map(token => token.args)
}
