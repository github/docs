import { TokenizationError } from 'liquidjs'
// @ts-ignore - @primer/octicons doesn't provide TypeScript declarations
import octicons from '@primer/octicons'

// Note: Using 'any' for liquidjs-related types because liquidjs doesn't provide comprehensive TypeScript definitions
interface LiquidTag {
  icon: string
  options: Record<string, string>
  parse(tagToken: any): void
  render(): Promise<string>
}

interface OcticonsMatch {
  groups: {
    icon: string
    options?: string
  }
}

const OptionsSyntax = /([a-zA-Z-]+)="([\w\s-]+)"*/g
const Syntax = new RegExp(`"(?<icon>[a-zA-Z-]+)"(?<options>(?:\\s${OptionsSyntax.source})*)`)
const SyntaxHelp = 'Syntax Error in tag \'octicon\' - Valid syntax: octicon "<name>" <key="value">'

/**
 * Uses the octicons library to render the chosen icon. Also
 * supports passing attributes like `width="64"`.
 *
 * {% octicon "check" %}
 * {% octicon "check" width="64" aria-label="Example label" %}
 */
const Octicon: LiquidTag = {
  icon: '',
  options: {},

  parse(tagToken: any): void {
    const match: OcticonsMatch | null = tagToken.args.match(Syntax)
    if (!match) {
      throw new TokenizationError(SyntaxHelp, tagToken)
    }

    // Memoize the icon
    this.icon = match.groups.icon
    // Breaking change in octicons 12
    // https://github.com/primer/octicons/releases/tag/v12.0.0
    if (this.icon === 'trashcan') this.icon = 'trash'
    // https://github.com/primer/octicons/blob/main/CHANGELOG.md#1500
    if (this.icon === 'duplicate') this.icon = 'copy'
    if (this.icon === 'clippy') this.icon = 'paste'

    this.options = {}

    // Memoize any options passed
    if (match.groups.options) {
      let optionsMatch: RegExpExecArray | null

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

  async render(): Promise<string> {
    // Throw an error if the requested octicon does not exist.
    if (!Object.prototype.hasOwnProperty.call(octicons, this.icon)) {
      throw new Error(`Octicon ${this.icon} does not exist`)
    }

    const result: string = octicons[this.icon].toSVG(this.options)
    return result
  },
}

export default Octicon
