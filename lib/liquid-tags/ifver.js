const { isTruthy, Expression, TokenizationError } = require('liquidjs')
const versionSatisfiesRange = require('../version-satisfies-range')

const SyntaxHelp = "Syntax Error in 'ifver' with range - Valid syntax: ifver [operator] [releaseNumber]"

const supportedOperators = [
  '=',
  '<',
  '>'
]

const supportedOperatorsRegex = new RegExp(`[${supportedOperators.join('')}]`)
const releaseRegex = /\d\d?\.\d\d?/

// This module supports a new tag we can use for docs versioning specifically. It extends the
// native Liquid `if` block tag. It has special handling for statements like {% ifver ghes < 3.0 %},
// using semver to evaluate release numbers instead of doing standard number comparisons, which
// don't work the way we want because they evaluate 3.2 < 3.10 = true.
module.exports = {
  parse (tagToken, remainTokens) {
    this.tagToken = tagToken
    this.branches = []
    this.elseTemplates = []

    let p
    const stream = this.liquid.parser.parseStream(remainTokens)
      .on('start', () => this.branches.push({
        cond: tagToken.args,
        templates: (p = [])
      }))
      .on('tag:elsif', (token) => {
        this.branches.push({
          cond: token.args,
          templates: p = []
        })
      })
      .on('tag:else', () => (p = this.elseTemplates))
      .on('tag:endif', () => stream.stop())
      .on('template', (tpl) => p.push(tpl))
      .on('end', () => {
        throw new Error(`tag ${tagToken.getText()} not closed`)
      })

    stream.start()
  },

  render: function * (ctx, emitter) {
    const r = this.liquid.renderer
    const { operators, operatorsTrie } = this.liquid.options

    for (const branch of this.branches) {
      // Resolve special operators in the conditional, if any.
      // This will replace syntax like `fpt or ghes < 3.0` with `fpt or true` or `fpt or false`.
      const resolvedBranchCond = this.handleOperators(branch.cond, ctx.environments)

      // Use Liquid's native function for the final evaluation.
      const cond = yield new Expression(resolvedBranchCond, operators, operatorsTrie, ctx.opts.lenientIf).value(ctx)

      if (isTruthy(cond, ctx)) {
        yield r.renderTemplates(branch.templates, ctx, emitter)
        return
      }
    }
    yield r.renderTemplates(this.elseTemplates, ctx, emitter)
  },

  handleOperators (resolvedBranchCond, context) {
    if (!supportedOperatorsRegex.test(resolvedBranchCond)) return resolvedBranchCond

    // If this conditional contains multiple parts using `or` or `and`, get only the conditional with operators.
    const condArray = resolvedBranchCond.split(' ')

    // Find the first index in the array that contains an operator.
    const operatorIndex = condArray.findIndex(el => supportedOperators.find(op => el === op))

    // E.g., ['ghae', '<', '3.1']
    const condParts = condArray.slice(operatorIndex - 1, operatorIndex + 2)

    // Assign to vars.
    const [versionShortName, operator, releaseToEvaluate] = condParts

    // Handle syntax errors.
    const error = !supportedOperators.includes(operator) || !releaseRegex.test(releaseToEvaluate)

    if (error) {
      throw new TokenizationError(SyntaxHelp, this.tagToken)
    }

    const currentRelease = context.currentVersion.split('@')[1]
    const currentVersionShortName = context.allVersions[context.currentVersion].shortName

    // Evaluate the operator if this is the current version; otherwise it's always false.
    const resolvedBoolean = versionShortName === currentVersionShortName
      ? versionSatisfiesRange(currentRelease, `${operator}${releaseToEvaluate}`)
      : false

    // Replace syntax like `fpt or ghes < 3.0` with `fpt or true` or `fpt or false`.
    resolvedBranchCond = resolvedBranchCond.replace(condParts.join(' '), resolvedBoolean)

    // Run this function recursively until we've resolved all the special operators.
    if (supportedOperatorsRegex.test(resolvedBranchCond)) {
      return this.handleOperators(resolvedBranchCond, context)
    }

    return resolvedBranchCond
  }
}
