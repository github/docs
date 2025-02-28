import { allTools } from '#src/tools/lib/all-tools.js'
import { allPlatforms } from '#src/tools/lib/all-platforms.js'

export const tags = Object.keys(allTools).concat(allPlatforms).concat(['rowheaders'])

// The trailing newline is important. Without it, the line immediately after
// the `</div>` will be considered part of the previous block, which means the Markdown following the `</div>` will not be rendered to HTML correctly. For example:
//
//    <div>Here's some stuff</div>
//    And *here* us also some stuff.
//
//    Another **sentence** here.
//
// Will yield:
//
//    <div>Here's some stuff</div>
//    And *here* us also some stuff.
//
//    <p>Another <b>sentence</b> here.</p>
//
// when rendering this template with unified.
// If you instead inject an extra newline after the `</div>`, you
// go from:
//
//    <div>Here's some stuff</div>
//
//    And *here* us also some stuff.
//
//    Another **sentence** here.
//
// which yields:
//
//    <div>Here's some stuff</div>
//
//    <p>And <i>here</i> us also some stuff.</p>
//
//    <p>Another <b>sentence</b> here.</p>
//
// The Tool Liquid tags are a little bit fragile because we hope and assume
// that the author of the Liquid+Markdown *don't* do this:
//
//    {% vscode %}Bla bla.{% endvscode %}Next stuff here...
//
const template = '<div class="ghd-tool {{ tagName }}">{{ output }}</div>\n'

export const Tool = {
  type: 'block',

  parse(tagToken, remainTokens) {
    this.tagName = tagToken.name
    this.templates = []

    const stream = this.liquid.parser.parseStream(remainTokens)
    stream
      .on(`tag:end${this.tagName}`, () => stream.stop())
      .on('template', (tpl) => this.templates.push(tpl))
      .on('end', () => {
        throw new Error(`tag ${tagToken.getText()} not closed`)
      })
    stream.start()
  },

  render: function* (scope) {
    const output = yield this.liquid.renderer.renderTemplates(this.templates, scope)
    return yield this.liquid.parseAndRender(template, {
      tagName: this.tagName,
      output,
    })
  },
}
