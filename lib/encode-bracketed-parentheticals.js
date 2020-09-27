// prevent `[foo] (bar)` strings with a space between from being interpreted as markdown links
// by encoding the space character

module.exports = function encodeBracketedParentheticals (input) {
  return input.replace(/] \(/g, ']&nbsp;(')
}
