import supportedOperators from '../../lib/liquid-tags/ifversion-supported-operators.js'

// Turn an array of Liquid conditional objects that results from ./get-liquid-conditionals.js into a more
// detailed array of objects that includes GHES versioning information.
export default function getVersionBlocks (rawBlocks) {
  const versionBlocks = []

  rawBlocks.forEach(block => {
    const condKeyword = block.conditional.includes('ifversion') ? 'ifversion' : 'elsif'
    const condOnly = block.conditional.replace(/{%-? /, '').replace(/ -?%}/, '')
    const condWithLiquid = block.conditional

    // E.g., [ 'ghes', 'ghes < 2.21', 'ghae' ]
    const condArgs = condOnly
      .replace('ifversion ', '')
      .replace('elsif ', '')
       // Obfuscate with an arbitrary character we don't want to preserve, so we can split on that character.
       // TODO: If preserving `or` and `and` turns out NOT to be important, we can split on those words instead.
      .replaceAll(/ (or|and) /g, ' ~$1 ')
      .split('~')
      .map(arg => arg.trim())

    // E.g., [ 'ghes', '<', '2.21' ]
    const ranges = condArgs
      .map(arg => arg.split(' '))
      .filter(args => args.some(arg => supportedOperators.includes(arg)))
      .map(args => args.filter(arg => !(arg === 'or' || arg === 'and' | arg === '')))

    // Remove the start tag and the end tag so we are left with the inner text.
    // We don't need to do anything with this inner text other than check for nested conds.
    let innerText = block.text.replace(condWithLiquid, '')
    const indexOfLastEndif = innerText.lastIndexOf(' endif ')
    innerText = innerText.slice(0, indexOfLastEndif)

    // Remove any nested conditional content so we can check the top-level only.
    const topLevelContent = innerText
      .replace(/{%-? ifversion[\S\s]+?{%-? endif -?%}/g, '')

    versionBlocks.push({
      condKeyword,
      condOnly,
      condWithLiquid,
      condArgs,
      ranges,
      content: block.text,
      hasElsif: /{%-? elsif /.test(topLevelContent), // see if there is a nested elsif
      hasElse: /{%-? else -?%}/.test(topLevelContent),
      endIfText: block.endIfText,
      startTagColumn1: block.positionStart[1] === 1,
      endTagColumn1: block.positionEnd[1] === 1
    })
  })
  
  return versionBlocks
}
