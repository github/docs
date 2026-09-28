import { describe, expect, test } from 'vitest'

import {
  createOcticonToNameMap,
  mapEnglishToLocalizedNames,
  getLocalizedGroupNames,
} from '@/products/lib/get-product-groups'

// `name` is required here to match what the library expects.
interface MockProductGroupData {
  name: string
  octicon?: string
  children: string[]
}

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

      const octiconToName: { [key: string]: string } = createOcticonToNameMap(mockChildGroups)

      expect(octiconToName['RocketIcon']).toBe('Get started')
      expect(octiconToName['CopilotIcon']).toBe('GitHub Copilot')
      expect(octiconToName['ShieldLockIcon']).toBe('Security')
      expect(Object.keys(octiconToName)).toHaveLength(3)
    })

    test('handles missing octicon or name gracefully', () => {
      const mockChildGroups: PartialProductGroupData[] = [
        { name: 'Valid Group', octicon: 'RocketIcon', children: [] },
        { octicon: 'MissingNameIcon', children: [] },
        { name: 'Missing Octicon', children: [] },
        { name: '', octicon: 'EmptyNameIcon', children: [] },
      ]

      // Cast through unknown so the deliberately malformed groups type-check.
      const octiconToName: { [key: string]: string } = createOcticonToNameMap(
        mockChildGroups as unknown as Parameters<typeof createOcticonToNameMap>[0],
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

      const nameMap: { [key: string]: string } = mapEnglishToLocalizedNames(
        englishGroups,
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

      const nameMap: { [key: string]: string } = mapEnglishToLocalizedNames(
        englishGroups,
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

      const nameMap: { [key: string]: string } = mapEnglishToLocalizedNames(
        englishGroups,
        localizedByOcticon,
      )

      expect(nameMap['Get started']).toBe('Empezar')
      expect(nameMap['Security']).toBe('Seguridad')
    })
  })

  describe('getLocalizedGroupNames integration', () => {
    test('returns empty object for English language', async () => {
      const result: { [key: string]: string } = await getLocalizedGroupNames('en')
      expect(result).toEqual({})
    })
  })

  describe('full translation pipeline', () => {
    test('complete flow from English groups to localized names', () => {
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

      const localizedByOcticon: { [key: string]: string } =
        createOcticonToNameMap(mockLocalizedChildGroups)

      const localizedNames: { [key: string]: string } = mapEnglishToLocalizedNames(
        englishChildGroups,
        localizedByOcticon,
      )

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
