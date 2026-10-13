// GitHub Actions workflows parse these strings into pull request annotations.

interface LintFlaw {
  ruleNames: string[]
  severity: string
  lineNumber?: number
  ruleDescription?: string
  errorDetail?: string
  context?: string
  [key: string]: unknown
}

// Annotations also accept endLine to group one error across consecutive lines:
// https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-error-message
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

      // Logging the annotation string keeps local debugging independent of @actions/core.
      console.log(annotation)
    }
  }
}

function intersection(arr1: string[], arr2: string[]) {
  return arr1.some((item) => arr2.includes(item))
}
