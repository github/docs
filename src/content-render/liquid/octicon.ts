import { TokenizationError, type TagToken } from 'liquidjs'
import octicons from '@primer/octicons'

const OptionsSyntax = /([a-zA-Z-]+)="([\w\s-]+)"*/g
const Syntax = new RegExp(`"(?<icon>[a-zA-Z-]+)"(?<options>(?:\\s${OptionsSyntax.source})*)`)
const SyntaxHelp = 'Syntax Error in tag \'octicon\' - Valid syntax: octicon "<name>" <key="value">'

// The octicon tag renders a Primer Octicon and forwards attributes such as width="64".
// Without aria-label, the tag derives one from the icon name, such as check icon.
// Example: {% octicon "check" %}
// Example: {% octicon "check" width="64" aria-label="Example label" %}
// trashcan, duplicate, and clippy stay compatible with Primer's renamed icons.
// https://github.com/primer/octicons/releases/tag/v12.0.0
// https://github.com/primer/octicons/blob/main/CHANGELOG.md#1500
const Octicon = {
  icon: '',
  options: {} as Record<string, string>,

  parse(tagToken: TagToken): void {
    const match = tagToken.args.match(Syntax)
    if (!match || !match.groups) {
      throw new TokenizationError(SyntaxHelp, tagToken)
    }

    this.icon = match.groups.icon
    if (this.icon === 'trashcan') this.icon = 'trash'
    if (this.icon === 'duplicate') this.icon = 'copy'
    if (this.icon === 'clippy') this.icon = 'paste'

    this.options = {}

    if (match.groups.options) {
      let optionsMatch: RegExpExecArray | null

      while ((optionsMatch = OptionsSyntax.exec(match.groups.options))) {
        const [, key, value] = optionsMatch
        this.options[key] = value

        if (key === 'label') this.options['aria-label'] = value
      }
    }
  },

  async render(): Promise<string> {
    if (!Object.prototype.hasOwnProperty.call(octicons, this.icon)) {
      throw new Error(`Octicon ${this.icon} does not exist`)
    }

    // The default aria-label keeps icon-only output accessible.
    if (!this.options['aria-label']) {
      const defaultLabel = `${this.icon.toLowerCase().replace(/[^a-z0-9]+/gi, ' ')} icon`
      this.options['aria-label'] = defaultLabel
    }

    const result: string = octicons[this.icon].toSVG(this.options)
    return result
  },
}

export default Octicon
