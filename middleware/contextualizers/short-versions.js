// This module creates shortcuts for version comparisons in Liquid conditional strings.
//
// Supported:
// {% if fpt %}
// {% if ghae %}
// {% if ghes %}
//
// For the custom operator handling in statements like {% if ghes > 3.0 %}, see `lib/liquid-tags/if-ver.js`.
module.exports = async function shortVersions (req, res, next) {
  if (!req.context.page) return next()

  const { allVersions, currentVersion } = req.context
  const currentVersionObj = allVersions[currentVersion]
  if (!currentVersionObj) return next()

  // Add the short name to context.
  req.context[currentVersionObj.shortName] = true

  return next()
}
