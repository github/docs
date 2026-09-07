import { describe, expect, test } from 'vitest'
import fs from 'fs'
import path from 'path'

import type { AuditLogEventT, DeduplicatedAuditLogEntry, AuditLogVersionIndex } from '../../types'

const AUDIT_LOG_DATA_DIR = 'src/audit-logs/data'

describe('audit log deduplication', () => {
  describe('shared format file structure', () => {
    test('shared/entries.json exists and is a non-empty array', () => {
      const entriesPath = path.join(AUDIT_LOG_DATA_DIR, 'shared', 'entries.json')
      expect(fs.existsSync(entriesPath), `${entriesPath} should exist`).toBe(true)
      const entries = JSON.parse(fs.readFileSync(entriesPath, 'utf8'))
      expect(Array.isArray(entries)).toBe(true)
      expect(entries.length).toBeGreaterThan(0)
    })

    test('shared/fields-pool.json exists and is a non-empty array of string arrays', () => {
      const fieldsPath = path.join(AUDIT_LOG_DATA_DIR, 'shared', 'fields-pool.json')
      expect(fs.existsSync(fieldsPath), `${fieldsPath} should exist`).toBe(true)
      const fieldsPool = JSON.parse(fs.readFileSync(fieldsPath, 'utf8'))
      expect(Array.isArray(fieldsPool)).toBe(true)
      expect(fieldsPool.length).toBeGreaterThan(0)
      // Each entry should be an array of strings
      for (const fields of fieldsPool) {
        expect(Array.isArray(fields)).toBe(true)
        for (const field of fields) {
          expect(typeof field).toBe('string')
        }
      }
    })

    test('version-index.json exists and has valid structure', () => {
      const indexPath = path.join(AUDIT_LOG_DATA_DIR, 'version-index.json')
      expect(fs.existsSync(indexPath), `${indexPath} should exist`).toBe(true)
      const index: AuditLogVersionIndex = JSON.parse(fs.readFileSync(indexPath, 'utf8'))
      expect(typeof index).toBe('object')
      // Should have at least one version
      const versions = Object.keys(index)
      expect(versions.length).toBeGreaterThan(0)
      // Each version should map pages to arrays of indices
      for (const [version, pages] of Object.entries(index)) {
        expect(typeof pages).toBe('object')
        for (const [page, indices] of Object.entries(pages)) {
          expect(Array.isArray(indices), `${version}/${page} should be an array`).toBe(true)
          for (const idx of indices) {
            expect(typeof idx).toBe('number')
            expect(idx).toBeGreaterThanOrEqual(0)
          }
        }
      }
    })
  })

  describe('entries have valid shape', () => {
    test('each entry has required action and description', () => {
      const entries: DeduplicatedAuditLogEntry[] = JSON.parse(
        fs.readFileSync(path.join(AUDIT_LOG_DATA_DIR, 'shared', 'entries.json'), 'utf8'),
      )
      for (const entry of entries) {
        expect(entry).toHaveProperty('action')
        expect(typeof entry.action).toBe('string')
        expect(entry).toHaveProperty('description')
        expect(typeof entry.description).toBe('string')
      }
    })

    test('fieldsIndex values reference valid fields-pool entries', () => {
      const entries: DeduplicatedAuditLogEntry[] = JSON.parse(
        fs.readFileSync(path.join(AUDIT_LOG_DATA_DIR, 'shared', 'entries.json'), 'utf8'),
      )
      const fieldsPool: string[][] = JSON.parse(
        fs.readFileSync(path.join(AUDIT_LOG_DATA_DIR, 'shared', 'fields-pool.json'), 'utf8'),
      )
      for (const entry of entries) {
        if (entry.fieldsIndex !== undefined) {
          expect(entry.fieldsIndex).toBeGreaterThanOrEqual(0)
          expect(entry.fieldsIndex).toBeLessThan(fieldsPool.length)
        }
      }
    })
  })

  describe('entries in the pool are unique', () => {
    test('no duplicate entries in entries.json', () => {
      const entries: DeduplicatedAuditLogEntry[] = JSON.parse(
        fs.readFileSync(path.join(AUDIT_LOG_DATA_DIR, 'shared', 'entries.json'), 'utf8'),
      )
      const keys = new Set<string>()
      for (const entry of entries) {
        const key = JSON.stringify(entry)
        expect(keys.has(key), `Duplicate entry found: ${entry.action}`).toBe(false)
        keys.add(key)
      }
    })

    test('no duplicate field arrays in fields-pool.json', () => {
      const fieldsPool: string[][] = JSON.parse(
        fs.readFileSync(path.join(AUDIT_LOG_DATA_DIR, 'shared', 'fields-pool.json'), 'utf8'),
      )
      const keys = new Set<string>()
      for (const fields of fieldsPool) {
        const key = JSON.stringify(fields)
        expect(keys.has(key), `Duplicate fields array found`).toBe(false)
        keys.add(key)
      }
    })
  })

  describe('reconstruction matches original data', () => {
    test('reconstructed events match per-version JSON files for each version+page', () => {
      const entries: DeduplicatedAuditLogEntry[] = JSON.parse(
        fs.readFileSync(path.join(AUDIT_LOG_DATA_DIR, 'shared', 'entries.json'), 'utf8'),
      )
      const fieldsPool: string[][] = JSON.parse(
        fs.readFileSync(path.join(AUDIT_LOG_DATA_DIR, 'shared', 'fields-pool.json'), 'utf8'),
      )
      const index: AuditLogVersionIndex = JSON.parse(
        fs.readFileSync(path.join(AUDIT_LOG_DATA_DIR, 'version-index.json'), 'utf8'),
      )

      for (const [version, pages] of Object.entries(index)) {
        for (const [page, indices] of Object.entries(pages)) {
          // Reconstruct from shared format
          const reconstructed: AuditLogEventT[] = indices.map((idx) => {
            const entry = entries[idx]
            const event: AuditLogEventT = {
              action: entry.action,
              description: entry.description,
            }
            if (entry.docs_reference_links) event.docs_reference_links = entry.docs_reference_links
            if (entry.docs_reference_titles)
              event.docs_reference_titles = entry.docs_reference_titles
            if (entry.fieldsIndex !== undefined) event.fields = fieldsPool[entry.fieldsIndex]
            return event
          })

          // Load original per-version file
          const originalPath = path.join(AUDIT_LOG_DATA_DIR, version, `${page}.json`)
          if (!fs.existsSync(originalPath)) continue
          const original: AuditLogEventT[] = JSON.parse(fs.readFileSync(originalPath, 'utf8'))

          expect(reconstructed.length).toBe(original.length)
          for (let i = 0; i < original.length; i++) {
            expect(reconstructed[i].action).toBe(original[i].action)
            expect(reconstructed[i].description).toBe(original[i].description)
            expect(reconstructed[i].docs_reference_links).toBe(original[i].docs_reference_links)
            expect(reconstructed[i].docs_reference_titles).toBe(original[i].docs_reference_titles)
            if (original[i].fields) {
              expect(reconstructed[i].fields).toEqual(original[i].fields)
            }
          }
        }
      }
    })
  })

  describe('deduplication provides savings', () => {
    test('unique entries are significantly fewer than total references', () => {
      const entries: DeduplicatedAuditLogEntry[] = JSON.parse(
        fs.readFileSync(path.join(AUDIT_LOG_DATA_DIR, 'shared', 'entries.json'), 'utf8'),
      )
      const index: AuditLogVersionIndex = JSON.parse(
        fs.readFileSync(path.join(AUDIT_LOG_DATA_DIR, 'version-index.json'), 'utf8'),
      )

      let totalReferences = 0
      for (const pages of Object.values(index)) {
        for (const indices of Object.values(pages)) {
          totalReferences += indices.length
        }
      }

      const uniqueEntries = entries.length
      // We expect at least 80% dedup rate based on issue analysis (93.2% reported)
      const dedupRate = 1 - uniqueEntries / totalReferences
      expect(dedupRate).toBeGreaterThan(0.8)
    })
  })
})
