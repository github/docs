// src/content-render/liquid/prompt.ts
// Defines {% prompt %}…{% endprompt %} to wrap its content in <code> and append the Copilot icon.

import octicons from '@primer/octicons'
import type { TagToken, TopLevelToken } from 'liquidjs'
import { generatePromptId } from '../lib/prompt-id'

interface LiquidTag {
  type: 'block'
  templates?: unknown[]
  parse(tagToken: TagToken, remainTokens: TopLevelToken[]): void
  render(scope: unknown): Generator<unknown, string, unknown>
}

export const Prompt: LiquidTag = {
  type: 'block',

  // Collect everything until {% endprompt %}
  parse(tagToken: TagToken, remainTokens: TopLevelToken[]): void {
    this.templates = []
    const stream = this.liquid.parser.parseStream(remainTokens)
    stream
      .on('template', (tpl: unknown) => this.templates.push(tpl))
      .on('tag:endprompt', () => stream.stop())
      .on('end', () => {
        throw new Error(`{% prompt %} tag not closed`)
      })
    stream.start()
  },

  // Render the inner Markdown, wrap in <code>, then append the SVG
  *render(scope: unknown): Generator<unknown, string, unknown> {
    const content = yield this.liquid.renderer.renderTemplates(this.templates, scope)
    const contentString = String(content)

    // build a URL with the prompt text encoded as query parameter
    const promptParam: string = encodeURIComponent(contentString)
    const href: string = `https://github.com/copilot?prompt=${promptParam}`
    // Use murmur hash for deterministic ID (avoids hydration mismatch)
    const promptId: string = generatePromptId(contentString)
    // Show long text on larger screens and short text on smaller screens (set via accessibility.scss)
    const promptLabelLong: string = 'Run this prompt in Copilot Chat'
    const promptLabelShort: string = 'Run prompt'
    return [
      `<code id="${promptId}">${content}</code>`,
      `<a href="${href}" target="_blank" class="tooltipped tooltipped-n ml-1 copilot-prompt-long" aria-label="${promptLabelLong}" aria-describedby="${promptId}" style="text-decoration:none;">${octicons.copilot.toSVG()}</a>`,
      `<a href="${href}" target="_blank" class="tooltipped tooltipped-n ml-1 copilot-prompt-short" aria-label="${promptLabelShort}" aria-describedby="${promptId}" style="text-decoration:none;">${octicons.copilot.toSVG()}</a>`,
    ].join('')
  },
}
