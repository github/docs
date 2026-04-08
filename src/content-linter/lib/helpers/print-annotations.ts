/**
 * This function is meant to be used by the code that runs the linter,
 * but only within Actions workflows. That means, if it works, it
 * posts all the annotations as inline comments on the PR.
 *
 */

interface LintFlaw {
  ruleNames: string[]
  severity: string
  lineNumber?: number
  ruleDescription?: string
  errorDetail?: string
  context?: string
  [key: string]: unknown
}

export function printAnnotationResults(
  results: Record<string, LintFlaw[]>,
  {
    skippableRules = [],
    skippableFlawProperties = [],
  }: { skippableRules?: string[]; skippableFlawProperties?: string[] } = {},
) {
  for (const [file, flaws] of Object.entries(results)) {
    for (const flaw of flaws) {
      if (intersection(flaw.ruleNames, skippableRules)) {
        continue
      }
      if (skippableFlawProperties.some((prop) => flaw[prop])) {
        continue
      }

      let annotation = `::${flaw.severity === 'error' ? 'error' : 'warning'} `
      const bits = [`file=${file}`]
      if (flaw.lineNumber) {
        bits.push(`line=${flaw.lineNumber}`)
        // Note: it's possible to use a endLine property
        // if you can "lump" together the same error description on
        // consecutive lines.
        // See https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-error-message
      }

      if (flaw.ruleDescription) {
        bits.push(`title=${flaw.ruleDescription}`)
      }

      annotation += `${bits.join(',')}`

      if (flaw.errorDetail) {
        annotation += flaw.errorDetail.endsWith('.')
          ? `::${flaw.errorDetail}`
          : `::${flaw.errorDetail}.`
      }

      if (flaw.context) {
        annotation += ` ${flaw.context}`
      }

      // Why console.log and not `core.error()` (from @actions/core)?
      // Because, this way you can debug this more easily on you own
      // terminal.
      console.log(annotation)
    }
  }
}

function intersection(arr1: string[], arr2: string[]) {
  return arr1.some((item) => arr2.includes(item))
}
