interface LintFlaw {
  severity: string
  ruleNames: string[]
  errorDetail?: string
}

// Search-replace errors encode sub-rule names in errorDetail.
export function getAllRuleNames(flaw: LintFlaw): string[] {
  const ruleNames = [...flaw.ruleNames]

  if (flaw.ruleNames.includes('search-replace') && flaw.errorDetail) {
    const match = flaw.errorDetail.match(/^([^:]+):/)
    if (match) {
      ruleNames.push(match[1])
    }
  }

  return ruleNames
}
