// src/content-render/liquid/prompt.ts
// Defines {% prompt %}…{% endprompt %} to wrap its content in <code> and append the Copilot icon.

// @ts-ignore - @primer/octicons doesn't provide TypeScript declarations
import octicons from '@primer/octicons'

interface LiquidTag {
  type: 'block'
  templates?: any[] // Note: Using 'any' because liquidjs doesn't provide proper types for template objects
  // Note: Using 'any' for liquid-related parameters because liquidjs doesn't provide comprehensive TypeScript definitions
  parse(tagToken: any, remainTokens: any): void
  render(scope: any): Generator<any, string, unknown>
}

export const Prompt: LiquidTag = {
  type: 'block',

  // Collect everything until {% endprompt %}
  parse(tagToken: any, remainTokens: any): void {
    this.templates = []
    const stream = this.liquid.parser.parseStream(remainTokens)
    stream
      .on('template', (tpl: any) => this.templates.push(tpl))
      .on('tag:endprompt', () => stream.stop())
      .on('end', () => {
        throw new Error(`{% prompt %} tag not closed`)
      })
    stream.start()
  },

  // Render the inner Markdown, wrap in <code>, then append the SVG
  *render(scope: any): Generator<any, string, unknown> {
    const content = yield this.liquid.renderer.renderTemplates(this.templates, scope)

    // build a URL with the prompt text encoded as query parameter
    const promptParam: string = encodeURIComponent(content as string)
    const href: string = `https://github.com/copilot?prompt=${promptParam}`
    return `<code>${content}</code><a href="${href}" target="_blank" class="tooltipped tooltipped-nw ml-1" aria-label="Run this prompt in Copilot Chat" style="text-decoration:none;">${octicons.copilot.toSVG()}</a>`
  },
}
