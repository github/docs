// src/content-render/liquid/prompt.js
// Defines {% prompt %}…{% endprompt %} to wrap its content in <code> and append the Copilot icon.

import octicons from '@primer/octicons'

export const Prompt = {
  type: 'block',

  // Collect everything until {% endprompt %}
  parse(tagToken, remainTokens) {
    this.templates = []
    const stream = this.liquid.parser.parseStream(remainTokens)
    stream
      .on('template', (tpl) => this.templates.push(tpl))
      .on('tag:endprompt', () => stream.stop())
      .on('end', () => {
        throw new Error(`{% prompt %} tag not closed`)
      })
    stream.start()
  },

  // Render the inner Markdown, wrap in <code>, then append the SVG
  render: function* (scope) {
    const content = yield this.liquid.renderer.renderTemplates(this.templates, scope)

    // build a URL with the prompt text encoded as query parameter
    const promptParam = encodeURIComponent(content)
    const href = `https://github.com/copilot?prompt=${promptParam}`
    return `<code>${content}</code><a href="${href}" target="_blank" class="tooltipped tooltipped-nw ml-1" aria-label="Run this prompt in Copilot Chat" style="text-decoration:none;">${octicons.copilot.toSVG()}</a>`
  },
}
