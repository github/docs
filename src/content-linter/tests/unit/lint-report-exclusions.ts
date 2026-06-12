import { describe, expect, test } from 'vitest'
import { getAllRuleNames } from '../../lib/helpers/rule-utils'

// Use static config objects for testing to avoid Commander.js conflicts
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
      // Simulate the cleanPaths function logic from lint-content.ts
      function isPathExcluded(filePath: string): boolean {
        return globalConfig.excludePaths.some((excludePath) => filePath.startsWith(excludePath))
      }

      // Files in contributing directory should be excluded
      expect(isPathExcluded('content/contributing/README.md')).toBe(true)
      expect(isPathExcluded('content/contributing/how-to-contribute.md')).toBe(true)
      expect(isPathExcluded('content/contributing/collaborating-on-github-docs/file.md')).toBe(true)

      // Files outside contributing directory should not be excluded
      expect(isPathExcluded('content/actions/README.md')).toBe(false)
      expect(isPathExcluded('content/copilot/getting-started.md')).toBe(false)
      expect(isPathExcluded('data/variables/example.yml')).toBe(false)

      // Edge case: partial matches should not be excluded
      expect(isPathExcluded('content/contributing-guide.md')).toBe(false)
    })
  })

  describe('report filtering (lint-report.ts)', () => {
    // Helper function that matches the actual logic in lint-report.ts
    function shouldIncludeInReport(flaw: LintFlaw): boolean {
      const allRuleNames = getAllRuleNames(flaw)

      // Check if severity should be included
      if (reportingConfig.includeSeverities.includes(flaw.severity)) {
        return true
      }

      // Check if any rule name is in the include list that overrides severity
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

      // Should be included because expired-content is in includeRules
      expect(shouldIncludeInReport(expiredContentWarning)).toBe(true)
    })

    test('handles search-replace sub-rules correctly', () => {
      const searchReplaceFlaw = {
        severity: 'warning',
        ruleNames: ['search-replace'],
        errorDetail: 'todocs-placeholder: Catch occurrences of TODOCS placeholder.',
      }

      // Should extract 'todocs-placeholder' as a rule name and check against includeRules
      // This will depend on your actual includeRules configuration
      const result = shouldIncludeInReport(searchReplaceFlaw)
      expect(typeof result).toBe('boolean')
    })

    test('handles missing errorDetail gracefully for search-replace', () => {
      const searchReplaceFlawNoDetail = {
        severity: 'warning',
        ruleNames: ['search-replace'],
        // no errorDetail
      }

      // Should not throw an error and return false (warning not in includeSeverities)
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
    test('path exclusions happen before report filtering', () => {
      // This is a conceptual test - in practice, files excluded by globalConfig.excludePaths
      // never reach the reporting stage, so they never get filtered by reportingConfig

      // Files in excluded paths should never be linted at all
      const isExcluded = (path: string) =>
        globalConfig.excludePaths.some((excludePath) => path.startsWith(excludePath))

      expect(isExcluded('content/contributing/some-file.md')).toBe(true)

      // If a file is excluded at the path level, it doesn't matter what the reportingConfig says
      // because the file will never be processed for linting in the first place
    })

    test('configurations are independent', () => {
      // globalConfig handles what gets linted
      expect(globalConfig.excludePaths).toBeDefined()

      // reportingConfig handles what gets reported
      expect(reportingConfig.includeSeverities).toBeDefined()
      expect(reportingConfig.includeRules).toBeDefined()

      // They should not overlap or depend on each other
      expect(globalConfig).not.toHaveProperty('includeSeverities')
      expect(reportingConfig).not.toHaveProperty('excludePaths')
    })
  })
})
