import * as nodePath from 'path'
import { reportingConfig } from '@/content-linter/style/github-docs'

interface LintFlaw {
  severity: string
  ruleNames: string[]
  errorDetail?: string
}

/**
 * Determines if a lint result should be included based on reporting configuration
 *
 * @param flaw - The lint flaw object containing rule names, severity, etc.
 * @param filePath - The path of the file being linted
 * @returns true if the flaw should be included, false if it should be excluded
 */
export function shouldIncludeResult(flaw: LintFlaw, filePath: string): boolean {
  if (!flaw.ruleNames || !Array.isArray(flaw.ruleNames)) {
    return true
  }

  // Extract all possible rule names including sub-rules from search-replace
  const allRuleNames = [...flaw.ruleNames]

  // For search-replace rules, extract the sub-rule name from errorDetail
  if (flaw.ruleNames.includes('search-replace') && flaw.errorDetail) {
    const match = flaw.errorDetail.match(/^([^:]+):/)
    if (match) {
      allRuleNames.push(match[1])
    }
  }

  // Check if any rule name is in the exclude list
  const hasExcludedRule = allRuleNames.some((ruleName: string) =>
    reportingConfig.excludeRules.includes(ruleName),
  )
  if (hasExcludedRule) {
    return false
  }

  // Check if this specific file should be excluded for any of the rules
  for (const ruleName of allRuleNames) {
    const excludedFiles =
      reportingConfig.excludeFilesFromRules?.[
        ruleName as keyof typeof reportingConfig.excludeFilesFromRules
      ]
    if (
      excludedFiles &&
      excludedFiles.some((excludedPath: string) => {
        // Normalize paths for comparison
        const normalizedFilePath = nodePath.normalize(filePath)
        const normalizedExcludedPath = nodePath.normalize(excludedPath)
        return (
          normalizedFilePath === normalizedExcludedPath ||
          normalizedFilePath.endsWith(normalizedExcludedPath)
        )
      })
    ) {
      return false
    }
  }

  // Default to true - include everything unless explicitly excluded
  // This function only handles exclusions; reporting-specific inclusion logic
  // (like severity/rule filtering) is handled separately in lint-report.ts
  return true
}
