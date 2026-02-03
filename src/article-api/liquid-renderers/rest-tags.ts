import type { TagToken, Context as LiquidContext } from 'liquidjs'
import { fastTextOnly } from '@/content-render/unified/text-only'
import { renderContent } from '@/content-render/index'
import type { Context } from '@/types'
import type { Parameter, BodyParameter, ChildParameter, StatusCode } from '@/rest/components/types'
import { createLogger } from '@/observability/logger'

const logger = createLogger('article-api/liquid-renderers/rest-tags')

/**
 * Custom Liquid tag for rendering REST API parameters
 * Usage: {% rest_parameter param %}
 */
export class RestParameter {
  private paramName: string

  constructor(
    token: TagToken,
    remainTokens: TagToken[],
    liquid: { options: any; parser: any },
    private liquidContext?: LiquidContext,
  ) {
    // The tag receives the parameter object from the template context
    this.paramName = token.args.trim()
  }

  async render(ctx: LiquidContext, emitter: any): Promise<void> {
    const param = ctx.get([this.paramName]) as Parameter
    const context = ctx.get(['context']) as Context

    if (!param) {
      emitter.write('')
      return
    }

    const lines: string[] = []
    const required = param.required ? ' (required)' : ''
    const type = param.schema?.type || 'string'

    lines.push(`- **\`${param.name}\`** (${type})${required}`)

    if (param.description) {
      const description = await htmlToMarkdown(param.description, context)
      lines.push(`  ${description}`)
    }

    if (param.schema?.default !== undefined) {
      lines.push(`  Default: \`${param.schema.default}\``)
    }

    if (param.schema?.enum && param.schema.enum.length > 0) {
      lines.push(`  Can be one of: ${param.schema.enum.map((v) => `\`${v}\``).join(', ')}`)
    }

    emitter.write(lines.join('\n'))
  }
}

/**
 * Custom Liquid tag for rendering REST API body parameters
 * Usage: {% rest_body_parameter param indent %}
 */
export class RestBodyParameter {
  constructor(
    token: TagToken,
    remainTokens: TagToken[],
    liquid: { options: any; parser: any },
    private liquidContext?: LiquidContext,
  ) {
    // Parse arguments - param name and optional indent level
    const args = token.args.trim().split(/\s+/)
    this.param = args[0]
    this.indent = args[1] ? parseInt(args[1]) : 0
  }

  private param: string
  private indent: number

  async render(ctx: LiquidContext, emitter: any): Promise<void> {
    const param = ctx.get([this.param]) as BodyParameter
    const context = ctx.get(['context']) as Context
    const indent = this.indent

    if (!param) {
      emitter.write('')
      return
    }

    const lines: string[] = []
    const prefix = '  '.repeat(indent)
    const required = param.isRequired ? ' (required)' : ''
    const type = param.type || 'string'

    lines.push(`${prefix}- **\`${param.name}\`** (${type})${required}`)

    if (param.description) {
      const description = await htmlToMarkdown(param.description, context)
      lines.push(`${prefix}  ${description}`)
    }

    if (param.default !== undefined) {
      lines.push(`${prefix}  Default: \`${param.default}\``)
    }

    if (param.enum && param.enum.length > 0) {
      lines.push(`${prefix}  Can be one of: ${param.enum.map((v) => `\`${v}\``).join(', ')}`)
    }

    // Handle nested parameters
    if (param.childParamsGroups && param.childParamsGroups.length > 0) {
      for (const childGroup of param.childParamsGroups) {
        lines.push(await renderChildParameter(childGroup, context, indent + 1))
      }
    }

    emitter.write(lines.join('\n'))
  }
}

/**
 * Custom Liquid tag for rendering REST API status codes
 * Usage: {% rest_status_code statusCode %}
 */
export class RestStatusCode {
  private statusCodeName: string

  constructor(
    token: TagToken,
    remainTokens: TagToken[],
    liquid: { options: any; parser: any },
    private liquidContext?: LiquidContext,
  ) {
    this.statusCodeName = token.args.trim()
  }

  async render(ctx: LiquidContext, emitter: any): Promise<void> {
    const statusCode = ctx.get([this.statusCodeName]) as StatusCode
    const context = ctx.get(['context']) as Context

    if (!statusCode) {
      emitter.write('')
      return
    }

    const lines: string[] = []

    if (statusCode.description) {
      const description = await htmlToMarkdown(statusCode.description, context)
      lines.push(`- **${statusCode.httpStatusCode}**`)
      if (description.trim()) {
        lines.push(`  ${description.trim()}`)
      }
    } else if (statusCode.httpStatusMessage) {
      lines.push(`- **${statusCode.httpStatusCode}** - ${statusCode.httpStatusMessage}`)
    } else {
      lines.push(`- **${statusCode.httpStatusCode}**`)
    }

    emitter.write(lines.join('\n'))
  }
}

/**
 * Helper function to render child parameters recursively
 */
async function renderChildParameter(
  param: ChildParameter,
  context: Context,
  indent: number,
): Promise<string> {
  const lines: string[] = []
  const prefix = '  '.repeat(indent)
  const required = param.isRequired ? ' (required)' : ''
  const type = param.type || 'string'

  lines.push(`${prefix}- **\`${param.name}\`** (${type})${required}`)

  if (param.description) {
    const description = await htmlToMarkdown(param.description, context)
    lines.push(`${prefix}  ${description}`)
  }

  if (param.default !== undefined) {
    lines.push(`${prefix}  Default: \`${param.default}\``)
  }

  if (param.enum && param.enum.length > 0) {
    lines.push(`${prefix}  Can be one of: ${param.enum.map((v: string) => `\`${v}\``).join(', ')}`)
  }

  // Recursively handle nested parameters
  if (param.childParamsGroups && param.childParamsGroups.length > 0) {
    for (const child of param.childParamsGroups) {
      lines.push(await renderChildParameter(child, context, indent + 1))
    }
  }

  return lines.join('\n')
}

/**
 * Helper function to convert HTML to markdown
 */
async function htmlToMarkdown(html: string, context: Context): Promise<string> {
  if (!html) return ''

  try {
    const rendered = await renderContent(html, context, { textOnly: false })
    return fastTextOnly(rendered)
  } catch (error) {
    logger.error('Failed to render HTML content to markdown in REST tag', {
      error,
      html: html.substring(0, 100), // First 100 chars for context
      contextInfo: context && context.page ? { page: context.page.relativePath } : undefined,
    })
    // In non-production, re-throw to aid debugging
    if (process.env.NODE_ENV !== 'production') {
      throw error
    }
    // Fallback to simple text extraction
    return fastTextOnly(html)
  }
}

// Export tag names for registration
export const restTags = {
  rest_parameter: RestParameter,
  rest_body_parameter: RestBodyParameter,
  rest_status_code: RestStatusCode,
}
