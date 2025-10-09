import { describe, expect, test } from 'vitest'
import {
  ValidOcticon,
  VALID_OCTICONS,
  OCTICON_COMPONENTS,
  isValidOcticon,
  getOcticonComponent,
} from '../lib/octicons'
import { CopilotIcon, BugIcon, RocketIcon } from '@primer/octicons-react'

describe('octicons reference', () => {
  describe('VALID_OCTICONS', () => {
    test('contains expected octicon names', () => {
      // Test that we have the expected number of octicons and they're all defined
      expect(VALID_OCTICONS.length).toBeGreaterThan(0)
      expect(VALID_OCTICONS).toEqual(expect.arrayContaining(['bug', 'rocket', 'copilot']))
    })

    test('all octicons are strings', () => {
      VALID_OCTICONS.forEach((octicon) => {
        expect(typeof octicon).toBe('string')
      })
    })
  })

  describe('OCTICON_COMPONENTS', () => {
    test('has components for all valid octicons', () => {
      VALID_OCTICONS.forEach((octicon) => {
        expect(OCTICON_COMPONENTS[octicon]).toBeDefined()
        expect(typeof OCTICON_COMPONENTS[octicon]).toBe('object')
      })
    })

    test('maps specific octicons to correct components', () => {
      expect(OCTICON_COMPONENTS.bug).toBe(BugIcon)
      expect(OCTICON_COMPONENTS.rocket).toBe(RocketIcon)
      expect(OCTICON_COMPONENTS.copilot).toBe(CopilotIcon)
    })
  })

  describe('isValidOcticon', () => {
    test('returns true for valid octicons', () => {
      expect(isValidOcticon('bug')).toBe(true)
      expect(isValidOcticon('rocket')).toBe(true)
      expect(isValidOcticon('shield-lock')).toBe(true)
    })

    test('returns false for invalid octicons', () => {
      expect(isValidOcticon('invalid-octicon')).toBe(false)
      expect(isValidOcticon('pizza')).toBe(false)
      expect(isValidOcticon('')).toBe(false)
    })

    test('returns false for null or undefined', () => {
      expect(isValidOcticon(null)).toBe(false)
      expect(isValidOcticon(undefined as any)).toBe(false)
    })

    test('provides correct type narrowing', () => {
      const testOcticon: string | null = 'bug'

      if (isValidOcticon(testOcticon)) {
        // This should compile without type errors
        const validOcticon: ValidOcticon = testOcticon
        expect(validOcticon).toBe('bug')
      }
    })
  })

  describe('getOcticonComponent', () => {
    test('returns correct component for valid octicons', () => {
      expect(getOcticonComponent('bug')).toBe(BugIcon)
      expect(getOcticonComponent('rocket')).toBe(RocketIcon)
      expect(getOcticonComponent('copilot')).toBe(CopilotIcon)
    })

    test('returns CopilotIcon as fallback for undefined', () => {
      expect(getOcticonComponent(undefined)).toBe(CopilotIcon)
    })

    test('returns CopilotIcon as fallback for invalid octicons', () => {
      // TypeScript should prevent this, but test runtime behavior
      expect(getOcticonComponent('invalid' as ValidOcticon)).toBe(CopilotIcon)
    })
  })

  describe('type safety', () => {
    test('ValidOcticon type includes all expected values', () => {
      // This test ensures the type system prevents invalid octicons at compile time
      // Test a few key octicons to verify the type works correctly
      const testOcticons: ValidOcticon[] = ['bug', 'rocket', 'copilot']

      testOcticons.forEach((octicon) => {
        expect(VALID_OCTICONS.includes(octicon)).toBe(true)
      })
    })
  })

  describe('consistency checks', () => {
    test('OCTICON_COMPONENTS keys match VALID_OCTICONS', () => {
      const componentKeys = Object.keys(OCTICON_COMPONENTS)
      const validOcticonsSet = new Set(VALID_OCTICONS)

      componentKeys.forEach((key) => {
        expect(validOcticonsSet.has(key as ValidOcticon)).toBe(true)
      })

      expect(componentKeys).toHaveLength(VALID_OCTICONS.length)
    })

    test('no duplicate octicons in VALID_OCTICONS', () => {
      const octiconsSet = new Set(VALID_OCTICONS)
      expect(octiconsSet.size).toBe(VALID_OCTICONS.length)
    })
  })

  describe('single source of truth', () => {
    test('VALID_OCTICONS is derived from OCTICON_COMPONENTS', () => {
      const componentKeys = Object.keys(OCTICON_COMPONENTS).sort()
      const validOcticons = [...VALID_OCTICONS].sort()

      expect(validOcticons).toEqual(componentKeys)
    })

    test('ValidOcticon type matches OCTICON_COMPONENTS keys', () => {
      // This test ensures the type system is correctly derived from the object
      const testOcticon: ValidOcticon = 'bug'
      expect(OCTICON_COMPONENTS[testOcticon]).toBeDefined()

      // Type check - this should compile without errors
      const allKeys: ValidOcticon[] = Object.keys(OCTICON_COMPONENTS) as ValidOcticon[]
      expect(allKeys.length).toBeGreaterThan(0)
    })

    test('adding new octicon only requires updating OCTICON_COMPONENTS', () => {
      // This test documents the single source of truth approach
      // If you add a new octicon to OCTICON_COMPONENTS:
      // 1. ValidOcticon type automatically includes it
      // 2. VALID_OCTICONS array automatically includes it
      // 3. All validation functions work with it

      const componentCount = Object.keys(OCTICON_COMPONENTS).length
      const validOcticonsCount = VALID_OCTICONS.length

      expect(componentCount).toBe(validOcticonsCount)
    })
  })
})
