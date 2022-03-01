import assert from 'assert'

// If 'THROW_ON_EMPTY' is set and it's value is '0' or 'false' it becomes
// false. Or true if it's 'true' or '1'.
const THROW_ON_EMPTY = Boolean(
  process.env.THROW_ON_EMPTY
    ? JSON.parse(process.env.THROW_ON_EMPTY)
    : JSON.parse(process.env.CI || process.env.NODE_ENV !== 'production')
)

class IndentedDataReferenceError extends Error {}

// This class supports a tag that expects two parameters, a data reference and `spaces=NUMBER`:
//
// {% indented_data_reference foo.bar spaces=NUMBER %}
// Example: {% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %}
//
// This tag renders the given data reference with the specified number of spaces
// prepended to each line. This results in correct formatting when the data
// reference is used inside a block element (like a list or nested list) without
// affecting the formatting when the reference is used elsewhere via {{ site.data.foo.bar }}.

export default {
  parse(tagToken) {
    this.markup = tagToken.args.trim()
  },

  async render(scope) {
    // obfuscate first legit space, remove all other spaces, then restore legit space
    // this way we can support spaces=NUMBER as well as spaces = NUMBER
    const input = this.markup
      .replace(/\s/, 'REALSPACE')
      .replace(/\s/g, '')
      .replace('REALSPACE', ' ')

    const [dataReference, spaces] = input.split(' ')

    // if no spaces are specified, default to 2
    const numSpaces = spaces ? spaces.replace(/spaces=/, '') : '2'

    assert(parseInt(numSpaces) || numSpaces === '0', '"spaces=NUMBER" must include a number')

    // Get the referenced value from the context
    const value = await this.liquid.evalValue(`site.data.${dataReference}`, scope)

    // If value is falsy it can be because we completely failed to look
    // it up. But it can also be literally an empty string.
    // For example, the reusable could be entirely something like this:
    //
    //   {% if some condition %}The meat{% endif %}
    //
    // Then it's working as expected. But if the reference is wrong, e.g.
    //
    //   {% indented_data_reference reusables.foo.tyypu spaces=3 %}
    //
    // Or if the file simple doesn't exist, you get an undefined for the value.
    if (typeof value !== 'string' && !value) {
      const message = `Can't find the key 'site.data.${dataReference}' in the scope.`
      if (THROW_ON_EMPTY) {
        throw new IndentedDataReferenceError(message)
      }
      console.warn(message)
      return
    }

    // add spaces to each line
    const renderedReferenceWithIndent = value.replace(/^/gm, ' '.repeat(numSpaces))

    return this.liquid.parseAndRender(renderedReferenceWithIndent, scope.environments)
  },
}
