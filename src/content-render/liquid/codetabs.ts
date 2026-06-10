import { encode } from 'html-entities'
import { TokenizationError, type TagToken, type TopLevelToken } from 'liquidjs'

import { codeLanguages } from '@/code-tabs/lib/languages'

interface LiquidTemplate {
  [key: string]: unknown
}

interface LiquidStream {
  on(event: string, callback: (template?: LiquidTemplate) => void): LiquidStream
  stop(): void
  start(): void
}

interface LiquidEngine {
  parser: {
    parseStream(tokens: TopLevelToken[]): LiquidStream
  }
  renderer: {
    renderTemplates(templates: LiquidTemplate[], scope: Record<string, unknown>): string
  }
  parseAndRender(template: string, context: Record<string, string>): string
}

interface LiquidBlockTag {
  type: 'block'
  templates: LiquidTemplate[]
  liquid: LiquidEngine | null
  parse(tagToken: TagToken, remainTokens: TopLevelToken[]): void
  render(scope: Record<string, unknown>): Generator<unknown, unknown, unknown>
}

const codeTabsTemplate = '<div class="ghd-codetabs">{{ output }}</div>\n'
const codeTabTemplate =
  '<div class="ghd-codetab" data-lang="{{ languageKey }}" data-label="{{ label }}"><div class="ghd-codetab-fallback-label" role="heading" aria-level="3">{{ label }}</div>{{ output }}</div>\n'
const codeTabSyntax = /^(?<key>[a-z0-9-]+)(?:\s+"(?<label>[^"]+)")?$/
const codeTabSyntaxHelp =
  'Syntax Error in tag \'codetab\' - Valid syntax: codetab <language-key> ["Label"]'

export const tags = ['codetabs', 'codetab']

function parseBlockTemplates(
  context: LiquidBlockTag,
  tagToken: TagToken,
  remainTokens: TopLevelToken[],
  endTagName: string,
): void {
  context.templates = []

  const stream = context.liquid!.parser.parseStream(remainTokens)
  stream
    .on(`tag:${endTagName}`, () => stream.stop())
    .on('template', (template?: LiquidTemplate) => {
      if (template) context.templates.push(template)
    })
    .on('end', () => {
      throw new Error(`tag ${tagToken.getText()} not closed`)
    })
  stream.start()
}

export const CodeTabs: LiquidBlockTag = {
  type: 'block',
  templates: [],
  liquid: null,

  parse(tagToken: TagToken, remainTokens: TopLevelToken[]): void {
    if (tagToken.args.trim()) {
      throw new TokenizationError(
        "Syntax Error in tag 'codetabs' - This tag does not accept arguments",
        tagToken,
      )
    }

    parseBlockTemplates(this, tagToken, remainTokens, 'endcodetabs')
  },

  *render(scope: Record<string, unknown>): Generator<unknown, unknown, unknown> {
    const output = yield this.liquid!.renderer.renderTemplates(this.templates, scope)
    return yield this.liquid!.parseAndRender(codeTabsTemplate, { output })
  },
}

interface CodeTabTag extends LiquidBlockTag {
  languageKey: string
  label: string
}

export const CodeTab: CodeTabTag = {
  type: 'block',
  templates: [],
  liquid: null,
  languageKey: '',
  label: '',

  parse(tagToken: TagToken, remainTokens: TopLevelToken[]): void {
    const args = tagToken.args.trim()
    const match = args.match(codeTabSyntax)

    if (!match?.groups) {
      throw new TokenizationError(codeTabSyntaxHelp, tagToken)
    }

    const { key, label } = match.groups
    if (!Object.prototype.hasOwnProperty.call(codeLanguages, key)) {
      throw new TokenizationError(
        `Unknown codetab language '${key}'. Valid values: ${Object.keys(codeLanguages).join(', ')}`,
        tagToken,
      )
    }

    this.languageKey = encode(key)
    this.label = encode(label || codeLanguages[key])

    parseBlockTemplates(this, tagToken, remainTokens, 'endcodetab')
  },

  *render(scope: Record<string, unknown>): Generator<unknown, unknown, unknown> {
    const output = yield this.liquid!.renderer.renderTemplates(this.templates, scope)
    return yield this.liquid!.parseAndRender(codeTabTemplate, {
      languageKey: this.languageKey,
      label: this.label,
      output,
    })
  },
}
