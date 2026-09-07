import { describe, expect, test } from 'vitest'
import fs from 'fs'
import path from 'path'

const ENABLED_APPS_DIR = 'src/github-apps/data'

describe('GitHub Apps deduplication', () => {
  describe('shared format file structure', () => {
    test('shared/entries.json exists and is a non-empty array', () => {
      const entriesPath = path.join(ENABLED_APPS_DIR, 'shared', 'entries.json')
      expect(fs.existsSync(entriesPath), `${entriesPath} should exist`).toBe(true)
      const entries = JSON.parse(fs.readFileSync(entriesPath, 'utf8'))
      expect(Array.isArray(entries)).toBe(true)
      expect(entries.length).toBeGreaterThan(0)
    })

    test('version-index.json exists and has valid structure', () => {
      const indexPath = path.join(ENABLED_APPS_DIR, 'version-index.json')
      expect(fs.existsSync(indexPath), `${indexPath} should exist`).toBe(true)
      const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'))
      expect(typeof index).toBe('object')
      const versions = Object.keys(index)
      expect(versions.length).toBeGreaterThan(0)
    })
  })

  describe('entries in the pool are unique', () => {
    test('no duplicate entries in entries.json', () => {
      const entries = JSON.parse(
        fs.readFileSync(path.join(ENABLED_APPS_DIR, 'shared', 'entries.json'), 'utf8'),
      )
      const keys = new Set<string>()
      for (const entry of entries) {
        const key = JSON.stringify(entry)
        expect(keys.has(key), `Duplicate entry found`).toBe(false)
        keys.add(key)
      }
    })
  })

  describe('reconstruction matches original data', () => {
    test('reconstructed rest data matches per-version JSON files', () => {
      const entries = JSON.parse(
        fs.readFileSync(path.join(ENABLED_APPS_DIR, 'shared', 'entries.json'), 'utf8'),
      )
      const index = JSON.parse(
        fs.readFileSync(path.join(ENABLED_APPS_DIR, 'version-index.json'), 'utf8'),
      )

      // Test a non-permissions page type
      for (const [version, pageTypes] of Object.entries(
        index as Record<string, Record<string, unknown>>,
      )) {
        for (const [pageType, pageData] of Object.entries(pageTypes as Record<string, unknown>)) {
          if (pageType.includes('permissions')) continue

          // Reconstruct
          const reconstructed: Record<string, unknown[]> = {}
          for (const [category, indices] of Object.entries(pageData as Record<string, number[]>)) {
            reconstructed[category] = indices.map((idx: number) => entries[idx])
          }

          // Compare with original
          const originalPath = path.join(ENABLED_APPS_DIR, version, `${pageType}.json`)
          if (!fs.existsSync(originalPath)) continue
          const original = JSON.parse(fs.readFileSync(originalPath, 'utf8'))

          for (const category of Object.keys(original)) {
            expect(reconstructed[category]?.length).toBe(original[category].length)
            for (let i = 0; i < original[category].length; i++) {
              expect(reconstructed[category][i]).toEqual(original[category][i])
            }
          }
        }
      }
    })

    test('reconstructed permission data matches per-version JSON files', () => {
      const entries = JSON.parse(
        fs.readFileSync(path.join(ENABLED_APPS_DIR, 'shared', 'entries.json'), 'utf8'),
      )
      const index = JSON.parse(
        fs.readFileSync(path.join(ENABLED_APPS_DIR, 'version-index.json'), 'utf8'),
      )

      for (const [version, pageTypes] of Object.entries(
        index as Record<string, Record<string, unknown>>,
      )) {
        for (const [pageType, pageData] of Object.entries(pageTypes as Record<string, unknown>)) {
          if (!pageType.includes('permissions')) continue

          // Reconstruct
          const reconstructed: Record<
            string,
            { title: string; displayTitle: string; permissions: unknown[] }
          > = {}
          for (const [permName, meta] of Object.entries(
            pageData as Record<string, { title: string; displayTitle: string; indices: number[] }>,
          )) {
            reconstructed[permName] = {
              title: meta.title,
              displayTitle: meta.displayTitle,
              permissions: meta.indices.map((idx: number) => entries[idx]),
            }
          }

          // Compare with original
          const originalPath = path.join(ENABLED_APPS_DIR, version, `${pageType}.json`)
          if (!fs.existsSync(originalPath)) continue
          const original = JSON.parse(fs.readFileSync(originalPath, 'utf8'))

          for (const permName of Object.keys(original)) {
            expect(reconstructed[permName].title).toBe(original[permName].title)
            expect(reconstructed[permName].displayTitle).toBe(original[permName].displayTitle)
            expect(reconstructed[permName].permissions.length).toBe(
              original[permName].permissions.length,
            )
            for (let i = 0; i < original[permName].permissions.length; i++) {
              expect(reconstructed[permName].permissions[i]).toEqual(
                original[permName].permissions[i],
              )
            }
          }
        }
      }
    })
  })

  describe('deduplication provides savings', () => {
    test('unique entries are significantly fewer than total references', () => {
      const entries = JSON.parse(
        fs.readFileSync(path.join(ENABLED_APPS_DIR, 'shared', 'entries.json'), 'utf8'),
      )
      const index = JSON.parse(
        fs.readFileSync(path.join(ENABLED_APPS_DIR, 'version-index.json'), 'utf8'),
      )

      let totalReferences = 0
      for (const pageTypes of Object.values(index as Record<string, Record<string, unknown>>)) {
        for (const [pageType, pageData] of Object.entries(pageTypes as Record<string, unknown>)) {
          if (pageType.includes('permissions')) {
            for (const meta of Object.values(pageData as Record<string, { indices: number[] }>)) {
              totalReferences += meta.indices.length
            }
          } else {
            for (const indices of Object.values(pageData as Record<string, number[]>)) {
              totalReferences += indices.length
            }
          }
        }
      }

      const uniqueEntries = entries.length
      // We expect at least 70% dedup rate based on issue analysis (~84% reported)
      const dedupRate = 1 - uniqueEntries / totalReferences
      expect(dedupRate).toBeGreaterThan(0.7)
    })
  })
})
