// This module creates shortcuts for version comparisons in Liquid conditional strings.
//
// Supported:
// {% if fpt %}
// {% if ghae %}
// {% if ghes %}
//
// For the custom operator handling in statements like {% if ghes > 3.0 %}, see `lib/liquid-tags/if-ver.js`.
export default function shortVersions(req, res, next) {
  const { currentVersion, currentVersionObj } = req.context
  if (!currentVersionObj) {
    return next()
  }

  // Add the short name to context.
  req.context[currentVersionObj.shortName] = true

  // Add convenience props.
  req.context.currentRelease = currentVersion.split('@')[1]
  req.context.currentVersionShortName = currentVersionObj.shortName

  return next()
}
