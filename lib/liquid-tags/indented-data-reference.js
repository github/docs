const Liquid = require('liquid')
const liquid = new Liquid.Engine()
const LiquidTag = require('./liquid-tag')
const assert = require('assert')

// This class supports a tag that expects two parameters, a data reference and `spaces=NUMBER`:
//
// {% indented_data_reference site.data.foo.bar spaces=NUMBER %}
//
// This tag renders the given data reference with the specified number of spaces
// prepended to each line. This results in correct formatting when the data
// reference is used inside a block element (like a list or nested list) without
// affecting the formatting when the reference is used elsewhere via {{ site.data.foo.bar }}.

module.exports = class IndentedDataReference extends LiquidTag {
  constructor (template, tagName, dataReferenceAndNumberOfSpaces) {
    super(template, tagName, dataReferenceAndNumberOfSpaces.trim())
  }

  async parseTemplate (context) {
    const template = await this.getTemplate()

    // obfuscate first legit space, remove all other spaces, then restore legit space
    // this way we can support spaces=NUMBER as well as spaces = NUMBER
    const input = this.param.replace(/\s/, 'REALSPACE').replace(/\s/g, '').replace('REALSPACE', ' ')

    const [dataReference, spaces] = input.split(' ')

    // if no spaces are specified, default to 2
    const numSpaces = spaces ? spaces.replace(/spaces=/, '') : '2'

    assert(parseInt(numSpaces) || numSpaces === '0', '"spaces=NUMBER" must include a number')

    const renderedReference = await require('../render-content')(`{{ ${dataReference} }}`, context.environments[0])

    // add spaces to each line
    const renderedReferenceWithIndent = renderedReference.replace(/^/mg, ' '.repeat(numSpaces))

    return liquid.parseAndRender(template, { renderedReferenceWithIndent })
  }
}
