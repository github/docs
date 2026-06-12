interface LiquidToken {
  name: string
  getText(): string
}

interface LiquidTemplate {
  [key: string]: unknown
}

interface LiquidStream {
  on(event: string, callback: () => void): LiquidStream
  stop(): void
  start(): void
}

interface LiquidEngine {
  parser: {
    parseStream(tokens: LiquidToken[]): LiquidStream
  }
  renderer: {
    renderTemplates(templates: LiquidTemplate[], scope: Record<string, unknown>): string
  }
  parseAndRender(template: string, context: Record<string, string>): string
}

export const tags: Record<string, string> = {
  note: 'accent',
  tip: 'success',
  warning: 'attention',
  danger: 'danger',
}

const template: string =
  '<div class="ghd-alert ghd-alert-{{ color }} ghd-spotlight-{{ color }}">{{ output }}</div>'

export const Spotlight = {
  type: 'block' as const,
  tagName: '' as string,
  templates: [] as LiquidTemplate[],
  liquid: null as LiquidEngine | null,

  parse(tagToken: LiquidToken, remainTokens: LiquidToken[]): void {
    this.tagName = tagToken.name
    this.templates = []

    const stream = this.liquid!.parser.parseStream(remainTokens)
    stream
      .on(`tag:end${this.tagName}`, () => stream.stop())
      .on('template', (tpl: LiquidTemplate) => this.templates.push(tpl))
      .on('end', () => {
        throw new Error(`tag ${tagToken.getText()} not closed`)
      })
    stream.start()
  },

  *render(scope: Record<string, unknown>): Generator<unknown, unknown, unknown> {
    const output = yield this.liquid!.renderer.renderTemplates(this.templates, scope)

    return yield this.liquid!.parseAndRender(template, {
      color: tags[this.tagName],
      output,
    })
  },
}
