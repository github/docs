interface LintFlaw {
  severity: string
  ruleNames: string[]
  errorDetail?: string
}

/**
 * Gets all rule names from a flaw, including sub-rules from search-replace errors
 */
export function getAllRuleNames(flaw: LintFlaw): string[] {
  const ruleNames = [...flaw.ruleNames]

  // Extract sub-rule name from search-replace error details
  if (flaw.ruleNames.includes('search-replace') && flaw.errorDetail) {
    const match = flaw.errorDetail.match(/^([^:]+):/)
    if (match) {
      ruleNames.push(match[1])
    }
  }

  return ruleNames
}
