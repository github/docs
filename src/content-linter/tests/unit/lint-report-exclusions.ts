import { describe, expect, test } from 'vitest'
import { shouldIncludeResult } from '../../lib/helpers/should-include-result'
import { reportingConfig } from '../../style/github-docs'

interface LintFlaw {
  severity: string
  ruleNames: string[]
  errorDetail?: string
}

describe('lint report exclusions', () => {
  // Helper function to simulate the reporting logic from lint-report.ts
  function shouldIncludeInReport(flaw: LintFlaw, filePath: string): boolean {
    if (!flaw.ruleNames || !Array.isArray(flaw.ruleNames)) {
      return false
    }

    // First check exclusions using shared function
    if (!shouldIncludeResult(flaw, filePath)) {
      return false
    }

    // Extract all possible rule names including sub-rules from search-replace
    const allRuleNames = [...flaw.ruleNames]
    if (flaw.ruleNames.includes('search-replace') && flaw.errorDetail) {
      const match = flaw.errorDetail.match(/^([^:]+):/)
      if (match) {
        allRuleNames.push(match[1])
      }
    }

    // Apply reporting-specific filtering
    // Check if severity should be included
    if (reportingConfig.includeSeverities.includes(flaw.severity)) {
      return true
    }

    // Check if any rule name is in the include list
    const hasIncludedRule = allRuleNames.some((ruleName) =>
      reportingConfig.includeRules.includes(ruleName),
    )
    if (hasIncludedRule) {
      return true
    }

    return false
  }

  test('TODOCS placeholder errors are excluded for documentation file', () => {
    const flaw = {
      severity: 'error',
      ruleNames: ['search-replace'],
      errorDetail: 'todocs-placeholder: Catch occurrences of TODOCS placeholder.',
    }

    const excludedFilePath =
      'content/contributing/collaborating-on-github-docs/using-the-todocs-placeholder-to-leave-notes.md'
    const regularFilePath = 'content/some-other-article.md'

    // Should be excluded for the specific documentation file
    expect(shouldIncludeInReport(flaw, excludedFilePath)).toBe(false)

    // Should still be included for other files
    expect(shouldIncludeInReport(flaw, regularFilePath)).toBe(true)
  })

  test('TODOCS placeholder errors are excluded with different path formats', () => {
    const flaw = {
      severity: 'error',
      ruleNames: ['search-replace'],
      errorDetail: 'todocs-placeholder: Catch occurrences of TODOCS placeholder.',
    }

    // Test various path formats that should match
    const pathVariants = [
      'content/contributing/collaborating-on-github-docs/using-the-todocs-placeholder-to-leave-notes.md',
      './content/contributing/collaborating-on-github-docs/using-the-todocs-placeholder-to-leave-notes.md',
      '/absolute/path/content/contributing/collaborating-on-github-docs/using-the-todocs-placeholder-to-leave-notes.md',
    ]

    pathVariants.forEach((path) => {
      expect(shouldIncludeInReport(flaw, path)).toBe(false)
    })
  })

  test('other rules are not affected by TODOCS file exclusions', () => {
    const flaw = {
      severity: 'error',
      ruleNames: ['docs-domain'],
    }

    const excludedFilePath =
      'content/contributing/collaborating-on-github-docs/using-the-todocs-placeholder-to-leave-notes.md'

    // Should still be included for other rules even in the excluded file
    expect(shouldIncludeInReport(flaw, excludedFilePath)).toBe(true)
  })

  test('multiple rule names with mixed exclusions', () => {
    const flaw = {
      severity: 'error',
      ruleNames: ['search-replace', 'docs-domain'],
      errorDetail: 'todocs-placeholder: Catch occurrences of TODOCS placeholder.',
    }

    const excludedFilePath =
      'content/contributing/collaborating-on-github-docs/using-the-todocs-placeholder-to-leave-notes.md'

    // Should be excluded because one of the rules (todocs-placeholder) is excluded for this file
    expect(shouldIncludeInReport(flaw, excludedFilePath)).toBe(false)
  })

  test('exclusion configuration exists and is properly structured', () => {
    expect(reportingConfig.excludeFilesFromRules).toBeDefined()
    expect(reportingConfig.excludeFilesFromRules['todocs-placeholder']).toBeDefined()
    expect(Array.isArray(reportingConfig.excludeFilesFromRules['todocs-placeholder'])).toBe(true)
    expect(
      reportingConfig.excludeFilesFromRules['todocs-placeholder'].includes(
        'content/contributing/collaborating-on-github-docs/using-the-todocs-placeholder-to-leave-notes.md',
      ),
    ).toBe(true)
  })

  describe('shared shouldIncludeResult function', () => {
    test('excludes TODOCS placeholder errors for specific file', () => {
      const flaw = {
        severity: 'error',
        ruleNames: ['search-replace'],
        errorDetail: 'todocs-placeholder: Catch occurrences of TODOCS placeholder.',
      }

      const excludedFilePath =
        'content/contributing/collaborating-on-github-docs/using-the-todocs-placeholder-to-leave-notes.md'
      const regularFilePath = 'content/some-other-article.md'

      // Should be excluded for the specific documentation file
      expect(shouldIncludeResult(flaw, excludedFilePath)).toBe(false)

      // Should be included for other files
      expect(shouldIncludeResult(flaw, regularFilePath)).toBe(true)
    })

    test('includes flaws by default when no exclusions apply', () => {
      const flaw = {
        severity: 'error',
        ruleNames: ['some-other-rule'],
      }

      const filePath = 'content/some-article.md'

      expect(shouldIncludeResult(flaw, filePath)).toBe(true)
    })

    test('handles missing errorDetail gracefully', () => {
      const flaw = {
        severity: 'error',
        ruleNames: ['search-replace'],
        // no errorDetail
      }

      const filePath = 'content/some-article.md'

      expect(shouldIncludeResult(flaw, filePath)).toBe(true)
    })
  })
})
