import { TokenizationError } from 'liquidjs'
import octicons from '@primer/octicons'

const OptionsSyntax = /([a-zA-Z-]+)="([a-zA-Z0-9\d-_\s]+)"*/g
const Syntax = new RegExp('"(?<icon>[a-zA-Z-]+)"(?<options>(?:\\s' + OptionsSyntax.source + ')*)')
const SyntaxHelp = 'Syntax Error in tag \'octicon\' - Valid syntax: octicon "<name>" <key="value">'

/**
 * Uses the octicons library to render the chosen icon. Also
 * supports passing attributes like `width="64"`.
 *
 * {% octicon "check" %}
 * {% octicon "check" width="64" aria-label="Example label" %}
 */
export default {
  parse(tagToken) {
    const match = tagToken.args.match(Syntax)
    if (!match) {
      throw new TokenizationError(SyntaxHelp, tagToken)
    }

    // Memoize the icon
    this.icon = match.groups.icon
    // Breaking change in octicons 12
    // https://github.com/primer/octicons/releases/tag/v12.0.0
    if (this.icon === 'trashcan') this.icon = 'trash'
    this.options = {}

    // Memoize any options passed
    if (match.groups.options) {
      let optionsMatch

      // Loop through each option matching the OptionsSyntax regex
      while ((optionsMatch = OptionsSyntax.exec(match.groups.options))) {
        // Pull out the key/value ([0] is the whole input)
        const [, key, value] = optionsMatch
        this.options[key] = value

        // Alias label to aria-label
        if (key === 'label') this.options['aria-label'] = value
      }
    }
  },

  async render(scope) {
    // Throw an error if the requested octicon does not exist.
    if (!Object.prototype.hasOwnProperty.call(octicons, this.icon)) {
      throw new Error(`Octicon ${this.icon} does not exist`)
    }

    const result = octicons[this.icon].toSVG(this.options)
    return result
  },
}
