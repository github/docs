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
} from 'liquidjs'
import versionSatisfiesRange from '@/versions/lib/version-satisfies-range'
import supportedOperators, {
  type IfversionSupportedOperator,
} from './ifversion-supported-operators'

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

const SyntaxHelp =
  "Syntax Error in 'ifversion' with range - Valid syntax: ifversion [plan] [operator] [releaseNumber]"

const supportedOperatorsRegex = new RegExp(`[${supportedOperators.join('')}]`)
const releaseRegex = /\d\d?\.\d\d?/
const notRegex = /(?:^|\s)not\s/

// This module supports a new tag we can use for docs versioning specifically. It extends the
// native Liquid `if` block tag. It has special handling for statements like {% ifversion ghes < 3.0 %},
// using semver to evaluate release numbers instead of doing standard number comparisons, which
// don't work the way we want because they evaluate 3.2 > 3.10 = true.
export default class extends Tag {
  tagToken: TagToken
  branches: Branch[]
  elseTemplates: Template[]
  currentVersionObj: VersionObj | null = null

  // The following is verbatim from https://github.com/harttle/liquidjs/blob/v9.22.1/src/builtin/tags/if.ts
  constructor(tagToken: TagToken, remainTokens: TopLevelToken[], liquid: any) {
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
      .on('tag:elsif', (token: any) => {
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

  // The following is _mostly_ verbatim from https://github.com/harttle/liquidjs/blob/v9.22.1/src/builtin/tags/if.ts
  // The additions here are the handleNots(), handleOperators(), and handleVersionNames() calls.
  *render(ctx: Context, emitter: Emitter): Generator<any, void, unknown> {
    const r = this.liquid.renderer

    this.currentVersionObj = (ctx.environments as any).currentVersionObj

    for (const branch of this.branches) {
      let resolvedBranchCond = branch.cond

      // Resolve "not" keywords in the conditional, if any.
      resolvedBranchCond = this.handleNots(resolvedBranchCond)

      // Resolve special operators in the conditional, if any.
      // This will replace syntax like `fpt or ghes < 3.0` with `fpt or true` or `fpt or false`.
      resolvedBranchCond = this.handleOperators(resolvedBranchCond)

      // Resolve version names to boolean values for Markdown API context.
      // This will replace syntax like `fpt or ghec` with `true or false` based on current version.
      // Only apply this transformation in Markdown API context to avoid breaking existing functionality.
      if ((ctx.environments as any).markdownRequested) {
        resolvedBranchCond = this.handleVersionNames(resolvedBranchCond)
      }

      // Use Liquid's native function for the final evaluation.
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

    // Find the first index in the array that contains "not".
    const notIndex = condArray.findIndex((el: string) => el === 'not')

    // E.g., ['not', 'fpt']
    const condParts = condArray.slice(notIndex, notIndex + 2)

    // E.g., 'fpt'
    const versionToEvaluate = condParts[1]

    // If the current version is the version being evaluated in the conditional,
    // that is negated and resolved to false. If it's NOT the version being
    // evaluated, that resolves to true.
    const resolvedBoolean = !(versionToEvaluate === this.currentVersionObj!.shortName)

    // Replace syntax like `not fpt` with `true` or `false`.
    resolvedBranchCond = resolvedBranchCond.replace(condParts.join(' '), String(resolvedBoolean))

    // Run this function recursively until we've resolved all the nots.
    if (notRegex.test(resolvedBranchCond)) {
      return this.handleNots(resolvedBranchCond)
    }

    return resolvedBranchCond
  }

  handleOperators(resolvedBranchCond: string): string {
    if (!supportedOperatorsRegex.test(resolvedBranchCond)) return resolvedBranchCond

    // If this conditional contains multiple parts using `or` or `and`, get only the conditional with operators.
    const condArray = resolvedBranchCond.split(' ')

    // Find the first index in the array that contains an operator.
    const operatorIndex = condArray.findIndex((el: string) =>
      supportedOperators.find((op: string) => el === op),
    )

    // E.g., ['ghes', '<', '3.1']
    const condParts = condArray.slice(operatorIndex - 1, operatorIndex + 2)

    // Assign to vars.
    const [versionShortName, operator, releaseToEvaluate] = condParts

    // Make sure the operator is supported and the release number matches `\d\d?\.\d\d?`
    const syntaxError =
      !supportedOperators.includes(operator as IfversionSupportedOperator) ||
      !releaseRegex.test(releaseToEvaluate)

    if (syntaxError) {
      throw new TokenizationError(SyntaxHelp, this.tagToken)
    }

    if (!this.currentVersionObj) {
      console.warn(
        `
        If this happens, it means the context prepared for rendering Liquid
        did not supply an object called 'currentVersionObj'.
        To fix the error, find the code that prepares the context before
        calling 'liquid.parseAndRender' and make sure there's an object
        called 'currentVersionObj' included there.
      `
          .replace(/\n\s+/g, ' ')
          .trim(),
      )
      throw new Error('currentVersionObj not found in environment context.')
    }

    const currentRelease = this.currentVersionObj.hasNumberedReleases
      ? this.currentVersionObj.currentRelease
      : this.currentVersionObj.internalLatestRelease

    let resolvedBoolean: boolean
    if (operator === '!=') {
      // If this is the current plan, compare the release numbers. (Our semver package doesn't handle !=.)
      // If it's not the current version, it's always true.
      resolvedBoolean =
        versionShortName === this.currentVersionObj!.shortName
          ? releaseToEvaluate !== currentRelease
          : true
    } else {
      // If this is the current plan, evaluate the operator using semver.
      // If it's not the current plan, it's always false.
      resolvedBoolean =
        versionShortName === this.currentVersionObj!.shortName
          ? versionSatisfiesRange(currentRelease!, `${operator}${releaseToEvaluate}`)
          : false
    }

    // Replace syntax like `fpt or ghes < 3.0` with `fpt or true` or `fpt or false`.
    resolvedBranchCond = resolvedBranchCond.replace(condParts.join(' '), String(resolvedBoolean))

    // Run this function recursively until we've resolved all the special operators.
    if (supportedOperatorsRegex.test(resolvedBranchCond)) {
      return this.handleOperators(resolvedBranchCond)
    }

    return resolvedBranchCond
  }

  handleVersionNames(resolvedBranchCond: string): string {
    if (!this.currentVersionObj) {
      console.warn('currentVersionObj not found in ifversion context.')
      return resolvedBranchCond
    }

    // Split the condition into tokens for processing
    const tokens = resolvedBranchCond.split(/\s+/)
    const processedTokens = tokens.map((token: string) => {
      // Check if the token is a version short name (fpt, ghec, ghes, ghae)
      const versionShortNames = ['fpt', 'ghec', 'ghes', 'ghae']
      if (versionShortNames.includes(token)) {
        // Transform version names to boolean values for Markdown API
        // This fixes the original issue where version names were undefined in API context
        return token === this.currentVersionObj!.shortName ? 'true' : 'false'
      }
      // Return the token unchanged if it's not a version name
      return token
    })

    return processedTokens.join(' ')
  }
}
