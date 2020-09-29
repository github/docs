// This module searches a string for references to data objects
// It finds all references matching {{site.data.*}} and return an array of them
const patterns = require('./patterns')

module.exports = function getLiquidDataReferences (text) {
  return (text.match(patterns.dataReference) || [])
    .map(ref => {
      const cleaned = ref.replace(/\.\.\//g, '')
        .replace('{% data', '')
        .replace('%}', '')
        .trim()

      return `site.data.${cleaned}`
    })
}
