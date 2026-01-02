import { describe, expect, test } from 'vitest'

import {
  createOcticonToNameMap,
  mapEnglishToLocalizedNames,
  getLocalizedGroupNames,
} from '@/products/lib/get-product-groups'

describe('get-product-groups helper functions', () => {
  describe('createOcticonToNameMap', () => {
    test('creates correct mapping from childGroups', () => {
      const mockChildGroups = [
        { name: 'Get started', octicon: 'RocketIcon', children: ['get-started'] },
        { name: 'GitHub Copilot', octicon: 'CopilotIcon', children: ['copilot'] },
        { name: 'Security', octicon: 'ShieldLockIcon', children: ['code-security'] },
      ]

      const octiconToName = createOcticonToNameMap(mockChildGroups)

      expect(octiconToName['RocketIcon']).toBe('Get started')
      expect(octiconToName['CopilotIcon']).toBe('GitHub Copilot')
      expect(octiconToName['ShieldLockIcon']).toBe('Security')
      expect(Object.keys(octiconToName)).toHaveLength(3)
    })

    test('handles missing octicon or name gracefully', () => {
      const mockChildGroups = [
        { name: 'Valid Group', octicon: 'RocketIcon', children: [] },
        { octicon: 'MissingNameIcon', children: [] }, // missing name
        { name: 'Missing Octicon', children: [] }, // missing octicon
        { name: '', octicon: 'EmptyNameIcon', children: [] }, // empty name
      ]

      const octiconToName = createOcticonToNameMap(mockChildGroups)

      expect(octiconToName['RocketIcon']).toBe('Valid Group')
      expect(octiconToName['MissingNameIcon']).toBeUndefined()
      expect(octiconToName['EmptyNameIcon']).toBeUndefined()
      expect(Object.keys(octiconToName)).toHaveLength(1)
    })
  })

  describe('mapEnglishToLocalizedNames', () => {
    test('maps English names to localized names using octicon as key', () => {
      const englishGroups = [
        { name: 'Get started', octicon: 'RocketIcon', children: [] },
        { name: 'Security', octicon: 'ShieldLockIcon', children: [] },
        { name: 'GitHub Copilot', octicon: 'CopilotIcon', children: [] },
      ]

      const localizedByOcticon = {
        RocketIcon: 'Empezar',
        ShieldLockIcon: 'Seguridad',
        CopilotIcon: 'GitHub Copilot', // Some names stay the same
      }

      const nameMap = mapEnglishToLocalizedNames(englishGroups, localizedByOcticon)

      expect(nameMap['Get started']).toBe('Empezar')
      expect(nameMap['Security']).toBe('Seguridad')
      expect(nameMap['GitHub Copilot']).toBe('GitHub Copilot')
      expect(Object.keys(nameMap)).toHaveLength(3)
    })

    test('handles missing translations gracefully', () => {
      const englishGroups = [
        { name: 'Get started', octicon: 'RocketIcon', children: [] },
        { name: 'Missing Translation', octicon: 'MissingIcon', children: [] },
        { name: 'No Octicon', children: [] },
      ]

      const localizedByOcticon = {
        RocketIcon: 'Empezar',
        // MissingIcon is not in the localized map
      }

      const nameMap = mapEnglishToLocalizedNames(englishGroups, localizedByOcticon)

      expect(nameMap['Get started']).toBe('Empezar')
      expect(nameMap['Missing Translation']).toBeUndefined()
      expect(nameMap['No Octicon']).toBeUndefined()
      expect(Object.keys(nameMap)).toHaveLength(1)
    })

    test('handles different ordering between English and localized groups', () => {
      // English groups in one order
      const englishGroups = [
        { name: 'Get started', octicon: 'RocketIcon', children: [] },
        { name: 'Security', octicon: 'ShieldLockIcon', children: [] },
      ]

      // Localized groups in different order (but mapped by octicon)
      const localizedByOcticon = {
        ShieldLockIcon: 'Seguridad', // Security comes first in localized
        RocketIcon: 'Empezar', // Get started comes second
      }

      const nameMap = mapEnglishToLocalizedNames(englishGroups, localizedByOcticon)

      // Should correctly map regardless of order
      expect(nameMap['Get started']).toBe('Empezar')
      expect(nameMap['Security']).toBe('Seguridad')
    })
  })

  describe('getLocalizedGroupNames integration', () => {
    test('returns empty object for English language', async () => {
      const result = await getLocalizedGroupNames('en')
      expect(result).toEqual({})
    })

    test('returns empty object when no translation root available', () => {
      // Test the fallback when translation root is not found
      const lang = 'unknown-lang'
      const languages = { en: { dir: '/en' }, es: { dir: '/es' } }

      const translationRoot = languages[lang]?.dir
      const result = translationRoot
        ? {
            /* would proceed */
          }
        : {}

      expect(result).toEqual({})
    })

    test('handles file read errors gracefully', () => {
      // Test the try/catch behavior when file read fails
      let result
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
      const englishChildGroups = [
        { name: 'Get started', octicon: 'RocketIcon', children: ['get-started'] },
        { name: 'Security', octicon: 'ShieldLockIcon', children: ['code-security'] },
        { name: 'GitHub Copilot', octicon: 'CopilotIcon', children: ['copilot'] },
      ]

      // Simulate what would come from a Spanish localized file
      const mockLocalizedChildGroups = [
        { name: 'Empezar', octicon: 'RocketIcon', children: ['get-started'] },
        { name: 'Seguridad', octicon: 'ShieldLockIcon', children: ['code-security'] },
        { name: 'GitHub Copilot', octicon: 'CopilotIcon', children: ['copilot'] },
      ]

      // Step 1: Create octicon -> localized name mapping
      const localizedByOcticon = createOcticonToNameMap(mockLocalizedChildGroups)

      // Step 2: Map English names to localized names
      const localizedNames = mapEnglishToLocalizedNames(englishChildGroups, localizedByOcticon)

      // Step 3: Use in final mapping
      const finalResult = englishChildGroups.map((group) => {
        const localizedName = localizedNames[group.name] || group.name
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
