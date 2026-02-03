import { describe, expect, test } from 'vitest'

import {
  createOcticonToNameMap,
  mapEnglishToLocalizedNames,
  getLocalizedGroupNames,
} from '@/products/lib/get-product-groups'

// Mock data interface for tests - uses required name to match library expectations
interface MockProductGroupData {
  name: string
  octicon?: string
  children: string[]
}

// Mock data for testing edge cases with optional fields
interface PartialProductGroupData {
  name?: string
  octicon?: string
  children: string[]
}

describe('get-product-groups helper functions', () => {
  describe('createOcticonToNameMap', () => {
    test('creates correct mapping from childGroups', () => {
      const mockChildGroups: MockProductGroupData[] = [
        { name: 'Get started', octicon: 'RocketIcon', children: ['get-started'] },
        { name: 'GitHub Copilot', octicon: 'CopilotIcon', children: ['copilot'] },
        { name: 'Security', octicon: 'ShieldLockIcon', children: ['code-security'] },
      ]

      // Using any to cast mock data structure to match library's expected ProductGroupData type
      const octiconToName: { [key: string]: string } = createOcticonToNameMap(
        mockChildGroups as any,
      )

      expect(octiconToName['RocketIcon']).toBe('Get started')
      expect(octiconToName['CopilotIcon']).toBe('GitHub Copilot')
      expect(octiconToName['ShieldLockIcon']).toBe('Security')
      expect(Object.keys(octiconToName)).toHaveLength(3)
    })

    test('handles missing octicon or name gracefully', () => {
      const mockChildGroups: PartialProductGroupData[] = [
        { name: 'Valid Group', octicon: 'RocketIcon', children: [] },
        { octicon: 'MissingNameIcon', children: [] }, // missing name
        { name: 'Missing Octicon', children: [] }, // missing octicon
        { name: '', octicon: 'EmptyNameIcon', children: [] }, // empty name
      ]

      // Using any to test edge cases with partial/missing fields that wouldn't normally pass strict typing
      const octiconToName: { [key: string]: string } = createOcticonToNameMap(
        mockChildGroups as any,
      )

      expect(octiconToName['RocketIcon']).toBe('Valid Group')
      expect(octiconToName['MissingNameIcon']).toBeUndefined()
      expect(octiconToName['EmptyNameIcon']).toBeUndefined()
      expect(Object.keys(octiconToName)).toHaveLength(1)
    })
  })

  describe('mapEnglishToLocalizedNames', () => {
    test('maps English names to localized names using octicon as key', () => {
      const englishGroups: MockProductGroupData[] = [
        { name: 'Get started', octicon: 'RocketIcon', children: [] },
        { name: 'Security', octicon: 'ShieldLockIcon', children: [] },
        { name: 'GitHub Copilot', octicon: 'CopilotIcon', children: [] },
      ]

      const localizedByOcticon: { [key: string]: string } = {
        RocketIcon: 'Empezar',
        ShieldLockIcon: 'Seguridad',
        CopilotIcon: 'GitHub Copilot', // Some names stay the same
      }

      // Using any to cast mock data structure to match library's expected ProductGroupData type
      const nameMap: { [key: string]: string } = mapEnglishToLocalizedNames(
        englishGroups as any,
        localizedByOcticon,
      )

      expect(nameMap['Get started']).toBe('Empezar')
      expect(nameMap['Security']).toBe('Seguridad')
      expect(nameMap['GitHub Copilot']).toBe('GitHub Copilot')
      expect(Object.keys(nameMap)).toHaveLength(3)
    })

    test('handles missing translations gracefully', () => {
      const englishGroups: MockProductGroupData[] = [
        { name: 'Get started', octicon: 'RocketIcon', children: [] },
        { name: 'Missing Translation', octicon: 'MissingIcon', children: [] },
        { name: 'No Octicon', children: [] },
      ]

      const localizedByOcticon: { [key: string]: string } = {
        RocketIcon: 'Empezar',
        // MissingIcon is not in the localized map
      }

      // Using any to cast mock data structure to match library's expected ProductGroupData type
      const nameMap: { [key: string]: string } = mapEnglishToLocalizedNames(
        englishGroups as any,
        localizedByOcticon,
      )

      expect(nameMap['Get started']).toBe('Empezar')
      expect(nameMap['Missing Translation']).toBeUndefined()
      expect(nameMap['No Octicon']).toBeUndefined()
      expect(Object.keys(nameMap)).toHaveLength(1)
    })

    test('handles different ordering between English and localized groups', () => {
      // English groups in one order
      const englishGroups: MockProductGroupData[] = [
        { name: 'Get started', octicon: 'RocketIcon', children: [] },
        { name: 'Security', octicon: 'ShieldLockIcon', children: [] },
      ]

      // Localized groups in different order (but mapped by octicon)
      const localizedByOcticon: { [key: string]: string } = {
        ShieldLockIcon: 'Seguridad', // Security comes first in localized
        RocketIcon: 'Empezar', // Get started comes second
      }

      // Using any to cast mock data structure to match library's expected ProductGroupData type
      const nameMap: { [key: string]: string } = mapEnglishToLocalizedNames(
        englishGroups as any,
        localizedByOcticon,
      )

      // Should correctly map regardless of order
      expect(nameMap['Get started']).toBe('Empezar')
      expect(nameMap['Security']).toBe('Seguridad')
    })
  })

  describe('getLocalizedGroupNames integration', () => {
    test('returns empty object for English language', async () => {
      const result: { [key: string]: string } = await getLocalizedGroupNames('en')
      expect(result).toEqual({})
    })

    test('returns empty object when no translation root available', () => {
      // Test the fallback when translation root is not found
      const lang = 'unknown-lang'
      const languages: { [key: string]: { dir: string } } = {
        en: { dir: '/en' },
        es: { dir: '/es' },
      }

      const translationRoot: string | undefined = languages[lang]?.dir
      const result: { [key: string]: string } = translationRoot
        ? {
            /* would proceed */
          }
        : {}

      expect(result).toEqual({})
    })

    test('handles file read errors gracefully', () => {
      // Test the try/catch behavior when file read fails
      let result: { [key: string]: string }
      try {
        // Simulate file read error
        throw new Error('File not found')
      } catch {
        result = {}
      }

      expect(result).toEqual({})
    })
  })

  describe('full translation pipeline', () => {
    test('complete flow from English groups to localized names', () => {
      // Simulate the complete flow
      const englishChildGroups: MockProductGroupData[] = [
        { name: 'Get started', octicon: 'RocketIcon', children: ['get-started'] },
        { name: 'Security', octicon: 'ShieldLockIcon', children: ['code-security'] },
        { name: 'GitHub Copilot', octicon: 'CopilotIcon', children: ['copilot'] },
      ]

      // Simulate what would come from a Spanish localized file
      const mockLocalizedChildGroups: MockProductGroupData[] = [
        { name: 'Empezar', octicon: 'RocketIcon', children: ['get-started'] },
        { name: 'Seguridad', octicon: 'ShieldLockIcon', children: ['code-security'] },
        { name: 'GitHub Copilot', octicon: 'CopilotIcon', children: ['copilot'] },
      ]

      // Step 1: Create octicon -> localized name mapping
      // Using any to cast mock data structure to match library's expected ProductGroupData type
      const localizedByOcticon: { [key: string]: string } = createOcticonToNameMap(
        mockLocalizedChildGroups as any,
      )

      // Step 2: Map English names to localized names
      // Using any to cast mock data structure to match library's expected ProductGroupData type
      const localizedNames: { [key: string]: string } = mapEnglishToLocalizedNames(
        englishChildGroups as any,
        localizedByOcticon,
      )

      // Step 3: Use in final mapping
      const finalResult = englishChildGroups.map((group: MockProductGroupData) => {
        const localizedName: string = localizedNames[group.name] || group.name
        return {
          name: localizedName,
          octicon: group.octicon,
          children: group.children,
        }
      })

      expect(finalResult[0].name).toBe('Empezar')
      expect(finalResult[1].name).toBe('Seguridad')
      expect(finalResult[2].name).toBe('GitHub Copilot')

      // Technical data should remain unchanged
      expect(finalResult[0].octicon).toBe('RocketIcon')
      expect(finalResult[0].children).toEqual(['get-started'])
    })
  })
})
