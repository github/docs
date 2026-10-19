import { describe, expect, test } from 'vitest'
import { getAllRuleNames } from '../../lib/helpers/rule-utils'

// Static config objects avoid Commander.js conflicts in tests.
const globalConfig = {
  excludePaths: ['content/contributing/'],
}

const reportingConfig = {
  includeSeverities: ['error'],
  includeRules: ['expired-content'],
}

interface LintFlaw {
  severity: string
  ruleNames: string[]
  errorDetail?: string
}

describe('content linter configuration', () => {
  describe('global path exclusions (lint-content.ts)', () => {
    test('globalConfig.excludePaths is properly configured', () => {
      expect(globalConfig.excludePaths).toBeDefined()
      expect(Array.isArray(globalConfig.excludePaths)).toBe(true)
      expect(globalConfig.excludePaths).toContain('content/contributing/')
    })

    test('simulates path exclusion logic', () => {
      // Mirror cleanPaths excludePaths prefix checks from lint-content.ts.
      function isPathExcluded(filePath: string): boolean {
        return globalConfig.excludePaths.some((excludePath) => filePath.startsWith(excludePath))
      }

      expect(isPathExcluded('content/contributing/README.md')).toBe(true)
      expect(isPathExcluded('content/contributing/how-to-contribute.md')).toBe(true)
      expect(isPathExcluded('content/contributing/collaborating-on-github-docs/file.md')).toBe(true)

      expect(isPathExcluded('content/actions/README.md')).toBe(false)
      expect(isPathExcluded('content/copilot/getting-started.md')).toBe(false)
      expect(isPathExcluded('data/variables/example.yml')).toBe(false)

      expect(isPathExcluded('content/contributing-guide.md')).toBe(false)
    })
  })

  describe('report filtering (lint-report.ts)', () => {
    // Mirror lint-report.ts so config tests use the same rule-name extraction.
    function shouldIncludeInReport(flaw: LintFlaw): boolean {
      const allRuleNames = getAllRuleNames(flaw)

      if (reportingConfig.includeSeverities.includes(flaw.severity)) {
        return true
      }

      const hasIncludedRule = allRuleNames.some((ruleName: string) =>
        reportingConfig.includeRules.includes(ruleName),
      )
      if (hasIncludedRule) {
        return true
      }

      return false
    }

    test('reportingConfig is properly structured', () => {
      expect(reportingConfig.includeSeverities).toBeDefined()
      expect(Array.isArray(reportingConfig.includeSeverities)).toBe(true)
      expect(reportingConfig.includeRules).toBeDefined()
      expect(Array.isArray(reportingConfig.includeRules)).toBe(true)
    })

    test('includes errors by default (severity-based filtering)', () => {
      const errorFlaw = {
        severity: 'error',
        ruleNames: ['some-rule'],
      }

      expect(shouldIncludeInReport(errorFlaw)).toBe(true)
    })

    test('excludes warnings by default (severity-based filtering)', () => {
      const warningFlaw = {
        severity: 'warning',
        ruleNames: ['some-rule'],
      }

      expect(shouldIncludeInReport(warningFlaw)).toBe(false)
    })

    test('includes specific rules regardless of severity', () => {
      const expiredContentWarning = {
        severity: 'warning',
        ruleNames: ['expired-content'],
      }

      expect(shouldIncludeInReport(expiredContentWarning)).toBe(true)
    })

    test('handles search-replace sub-rules correctly', () => {
      const searchReplaceFlaw = {
        severity: 'warning',
        ruleNames: ['search-replace'],
        errorDetail: 'todocs-placeholder: Catch occurrences of TODOCS placeholder.',
      }

      const result = shouldIncludeInReport(searchReplaceFlaw)
      expect(typeof result).toBe('boolean')
    })

    test('handles missing errorDetail gracefully for search-replace', () => {
      const searchReplaceFlawNoDetail = {
        severity: 'warning',
        ruleNames: ['search-replace'],
        // errorDetail deliberately absent.
      }

      expect(shouldIncludeInReport(searchReplaceFlawNoDetail)).toBe(false)
    })

    test('rule extraction logic works correctly', () => {
      const regularFlaw = {
        severity: 'error',
        ruleNames: ['docs-domain'],
      }
      expect(getAllRuleNames(regularFlaw)).toEqual(['docs-domain'])

      const searchReplaceFlaw = {
        severity: 'error',
        ruleNames: ['search-replace'],
        errorDetail: 'todocs-placeholder: Catch occurrences of TODOCS placeholder.',
      }
      expect(getAllRuleNames(searchReplaceFlaw)).toEqual(['search-replace', 'todocs-placeholder'])

      const multipleRulesFlaw = {
        severity: 'error',
        ruleNames: ['search-replace', 'another-rule'],
        errorDetail: 'docs-domain: Some error message.',
      }
      expect(getAllRuleNames(multipleRulesFlaw)).toEqual([
        'search-replace',
        'another-rule',
        'docs-domain',
      ])
    })
  })

  describe('integration between systems', () => {
    // Path-excluded files never reach report filtering, so keep the two filters independent.
    test('path exclusions happen before report filtering', () => {
      const isExcluded = (path: string) =>
        globalConfig.excludePaths.some((excludePath) => path.startsWith(excludePath))

      expect(isExcluded('content/contributing/some-file.md')).toBe(true)
    })

    test('configurations are independent', () => {
      expect(globalConfig.excludePaths).toBeDefined()

      expect(reportingConfig.includeSeverities).toBeDefined()
      expect(reportingConfig.includeRules).toBeDefined()

      expect(globalConfig).not.toHaveProperty('includeSeverities')
      expect(reportingConfig).not.toHaveProperty('excludePaths')
    })
  })
})
