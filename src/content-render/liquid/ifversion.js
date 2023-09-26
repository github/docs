import { Tag, isTruthy, Value, TokenizationError } from 'liquidjs'
import versionSatisfiesRange from '#src/versions/lib/version-satisfies-range.js'
import supportedOperators from './ifversion-supported-operators.js'

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
  // The following is verbatim from https://github.com/harttle/liquidjs/blob/v9.22.1/src/builtin/tags/if.ts
  constructor(tagToken, remainTokens, liquid) {
    super(tagToken, remainTokens, liquid)

    this.tagToken = tagToken
    this.branches = []
    this.elseTemplates = []

    let p
    const stream = this.liquid.parser
      .parseStream(remainTokens)
      .on('start', () =>
        this.branches.push({
          cond: tagToken.args,
          templates: (p = []),
        }),
      )
      .on('tag:elsif', (token) => {
        this.branches.push({
          cond: token.args,
          templates: (p = []),
        })
      })
      .on('tag:else', () => (p = this.elseTemplates))
      .on('tag:endif', () => stream.stop())
      .on('template', (tpl) => p.push(tpl))
      .on('end', () => {
        throw new Error(`tag ${tagToken.getText()} not closed`)
      })

    stream.start()
  }

  // The following is _mostly_ verbatim from https://github.com/harttle/liquidjs/blob/v9.22.1/src/builtin/tags/if.ts
  // The additions here are the handleNots() and handleOperators() calls.
  *render(ctx, emitter) {
    const r = this.liquid.renderer

    this.currentVersionObj = ctx.environments.currentVersionObj

    for (const branch of this.branches) {
      let resolvedBranchCond = branch.cond

      // Resolve "not" keywords in the conditional, if any.
      resolvedBranchCond = this.handleNots(resolvedBranchCond)

      // Resolve special operators in the conditional, if any.
      // This will replace syntax like `fpt or ghes < 3.0` with `fpt or true` or `fpt or false`.
      resolvedBranchCond = this.handleOperators(resolvedBranchCond)

      // Use Liquid's native function for the final evaluation.
      const cond = yield new Value(resolvedBranchCond, this.liquid).value(ctx, ctx.opts.lenientIf)

      if (isTruthy(cond, ctx)) {
        yield r.renderTemplates(branch.templates, ctx, emitter)
        return
      }
    }
    yield r.renderTemplates(this.elseTemplates, ctx, emitter)
  }

  handleNots(resolvedBranchCond) {
    if (!notRegex.test(resolvedBranchCond)) return resolvedBranchCond

    const condArray = resolvedBranchCond.split(' ')

    // Find the first index in the array that contains "not".
    const notIndex = condArray.findIndex((el) => el === 'not')

    // E.g., ['not', 'fpt']
    const condParts = condArray.slice(notIndex, notIndex + 2)

    // E.g., 'fpt'
    const versionToEvaluate = condParts[1]

    // If the current version is the version being evaluated in the conditional,
    // that is negated and resolved to false. If it's NOT the version being
    // evaluated, that resolves to true.
    const resolvedBoolean = !(versionToEvaluate === this.currentVersionObj.shortName)

    // Replace syntax like `not fpt` with `true` or `false`.
    resolvedBranchCond = resolvedBranchCond.replace(condParts.join(' '), resolvedBoolean)

    // Run this function recursively until we've resolved all the nots.
    if (notRegex.test(resolvedBranchCond)) {
      return this.handleNots(resolvedBranchCond)
    }

    return resolvedBranchCond
  }

  handleOperators(resolvedBranchCond) {
    if (!supportedOperatorsRegex.test(resolvedBranchCond)) return resolvedBranchCond

    // If this conditional contains multiple parts using `or` or `and`, get only the conditional with operators.
    const condArray = resolvedBranchCond.split(' ')

    // Find the first index in the array that contains an operator.
    const operatorIndex = condArray.findIndex((el) => supportedOperators.find((op) => el === op))

    // E.g., ['ghae', '<', '3.1']
    const condParts = condArray.slice(operatorIndex - 1, operatorIndex + 2)

    // Assign to vars.
    const [versionShortName, operator, releaseToEvaluate] = condParts

    // Make sure the operator is supported and the release number matches `\d\d?\.\d\d?`
    const syntaxError =
      !supportedOperators.includes(operator) || !releaseRegex.test(releaseToEvaluate)

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

    let resolvedBoolean
    if (operator === '!=') {
      // If this is the current plan, compare the release numbers. (Our semver package doesn't handle !=.)
      // If it's not the current version, it's always true.
      resolvedBoolean =
        versionShortName === this.currentVersionObj.shortName
          ? releaseToEvaluate !== currentRelease
          : true
    } else {
      // If this is the current plan, evaluate the operator using semver.
      // If it's not the current plan, it's always false.
      resolvedBoolean =
        versionShortName === this.currentVersionObj.shortName
          ? versionSatisfiesRange(currentRelease, `${operator}${releaseToEvaluate}`)
          : false
    }

    // Replace syntax like `fpt or ghes < 3.0` with `fpt or true` or `fpt or false`.
    resolvedBranchCond = resolvedBranchCond.replace(condParts.join(' '), resolvedBoolean)

    // Run this function recursively until we've resolved all the special operators.
    if (supportedOperatorsRegex.test(resolvedBranchCond)) {
      return this.handleOperators(resolvedBranchCond)
    }

    return resolvedBranchCond
  }
}
