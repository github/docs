import {
  Tag,
  isTruthy,
  Value,
  TokenizationError,
  type TagToken,
  type Context,
  type Emitter,
  type Template,
  type TopLevelToken,
  type Liquid,
} from 'liquidjs'
import versionSatisfiesRange from '@/versions/lib/version-satisfies-range'
import supportedOperators, {
  type IfversionSupportedOperator,
} from './ifversion-supported-operators'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

interface Branch {
  cond: string
  templates: Template[]
}

interface VersionObj {
  shortName: string
  hasNumberedReleases?: boolean
  currentRelease?: string
  internalLatestRelease?: string
}

interface IfversionEnvironments {
  currentVersionObj?: VersionObj
  markdownRequested?: boolean
}

const SyntaxHelp =
  "Syntax Error in 'ifversion' with range - Valid syntax: ifversion [plan] [operator] [releaseNumber]"

const supportedOperatorsRegex = new RegExp(`[${supportedOperators.join('')}]`)
const releaseRegex = /\d\d?\.\d\d?/
const notRegex = /(?:^|\s)not\s/

// This tag extends Liquid's if block for docs versions.
// Semver compares GHES releases so 3.10 sorts after 3.2.
export default class Ifversion extends Tag {
  tagToken: TagToken
  branches: Branch[]
  elseTemplates: Template[]
  currentVersionObj: VersionObj | null = null

  // This constructor copies LiquidJS if.ts verbatim to keep if, elsif, and else behavior.
  // https://github.com/harttle/liquidjs/blob/v9.22.1/src/builtin/tags/if.ts
  constructor(tagToken: TagToken, remainTokens: TopLevelToken[], liquid: Liquid) {
    super(tagToken, remainTokens, liquid)

    this.tagToken = tagToken
    this.branches = []
    this.elseTemplates = []

    let p: Template[]
    const stream = this.liquid.parser
      .parseStream(remainTokens)
      .on('start', () =>
        this.branches.push({
          cond: tagToken.args,
          templates: (p = []),
        }),
      )
      .on('tag:elsif', (token: TagToken) => {
        this.branches.push({
          cond: token.args,
          templates: (p = []),
        })
      })
      .on('tag:else', () => (p = this.elseTemplates))
      .on('tag:endif', () => stream.stop())
      .on('template', (tpl: Template) => p.push(tpl))
      .on('end', () => {
        throw new Error(`tag ${tagToken.getText()} not closed`)
      })

    stream.start()
  }

  // Render mostly mirrors LiquidJS if.ts.
  // Docs-specific additions are handleNots, handleOperators, and handleVersionNames.
  // https://github.com/harttle/liquidjs/blob/v9.22.1/src/builtin/tags/if.ts
  *render(ctx: Context, emitter: Emitter): Generator<unknown, void, unknown> {
    const r = this.liquid.renderer

    this.currentVersionObj = (ctx.environments as IfversionEnvironments).currentVersionObj ?? null

    for (const branch of this.branches) {
      let resolvedBranchCond = branch.cond

      resolvedBranchCond = this.handleNots(resolvedBranchCond)

      // Version operators resolve before Liquid evaluates the rest of the condition.
      resolvedBranchCond = this.handleOperators(resolvedBranchCond)

      // Markdown API requests resolve version names here because Liquid has no version variables.
      if ((ctx.environments as IfversionEnvironments).markdownRequested) {
        resolvedBranchCond = this.handleVersionNames(resolvedBranchCond)
      }

      const cond = yield new Value(resolvedBranchCond, this.liquid).value(ctx, ctx.opts.lenientIf)

      if (isTruthy(cond, ctx)) {
        yield r.renderTemplates(branch.templates, ctx, emitter)
        return
      }
    }
    yield r.renderTemplates(this.elseTemplates, ctx, emitter)
  }

  handleNots(resolvedBranchCond: string): string {
    if (!notRegex.test(resolvedBranchCond)) return resolvedBranchCond

    const condArray = resolvedBranchCond.split(' ')

    const notIndex = condArray.findIndex((el: string) => el === 'not')

    // Example: ['not', 'fpt']
    const condParts = condArray.slice(notIndex, notIndex + 2)

    const versionToEvaluate = condParts[1]

    // not fpt resolves to false for FPT and true for every other version.
    const resolvedBoolean = !(versionToEvaluate === this.currentVersionObj!.shortName)

    resolvedBranchCond = resolvedBranchCond.replace(condParts.join(' '), String(resolvedBoolean))

    // Recursion resolves every not operator in the condition.
    if (notRegex.test(resolvedBranchCond)) {
      return this.handleNots(resolvedBranchCond)
    }

    return resolvedBranchCond
  }

  handleOperators(resolvedBranchCond: string): string {
    if (!supportedOperatorsRegex.test(resolvedBranchCond)) return resolvedBranchCond

    // Only the version comparison segment gets replaced; Liquid evaluates and/or around it.
    const condArray = resolvedBranchCond.split(' ')

    const operatorIndex = condArray.findIndex((el: string) =>
      supportedOperators.find((op: string) => el === op),
    )

    // Example: ['ghes', '<', '3.1']
    const condParts = condArray.slice(operatorIndex - 1, operatorIndex + 2)

    const [versionShortName, operator, releaseToEvaluate] = condParts

    // ifversion accepts supported operators and one- or two-digit release parts.
    const syntaxError =
      !supportedOperators.includes(operator as IfversionSupportedOperator) ||
      !releaseRegex.test(releaseToEvaluate)

    if (syntaxError) {
      throw new TokenizationError(SyntaxHelp, this.tagToken)
    }

    if (!this.currentVersionObj) {
      logger.warn('Context missing currentVersionObj for Liquid rendering')
      throw new Error('currentVersionObj not found in environment context.')
    }

    const currentRelease = this.currentVersionObj.hasNumberedReleases
      ? this.currentVersionObj.currentRelease
      : this.currentVersionObj.internalLatestRelease

    let resolvedBoolean: boolean
    if (operator === '!=') {
      // The semver helper lacks !=, so current plans compare releases and others stay true.
      resolvedBoolean =
        versionShortName === this.currentVersionObj!.shortName
          ? releaseToEvaluate !== currentRelease
          : true
    } else {
      // Non-current plans resolve false because their release comparisons cannot match.
      resolvedBoolean =
        versionShortName === this.currentVersionObj!.shortName
          ? versionSatisfiesRange(currentRelease!, `${operator}${releaseToEvaluate}`)
          : false
    }

    resolvedBranchCond = resolvedBranchCond.replace(condParts.join(' '), String(resolvedBoolean))

    // Recursion resolves every version comparison in the condition.
    if (supportedOperatorsRegex.test(resolvedBranchCond)) {
      return this.handleOperators(resolvedBranchCond)
    }

    return resolvedBranchCond
  }

  handleVersionNames(resolvedBranchCond: string): string {
    if (!this.currentVersionObj) {
      logger.warn('currentVersionObj not found in ifversion context')
      return resolvedBranchCond
    }

    const tokens = resolvedBranchCond.split(/\s+/)
    const processedTokens = tokens.map((token: string) => {
      const versionShortNames = ['fpt', 'ghec', 'ghes', 'ghae']
      if (versionShortNames.includes(token)) {
        return token === this.currentVersionObj!.shortName ? 'true' : 'false'
      }
      return token
    })

    return processedTokens.join(' ')
  }
}
