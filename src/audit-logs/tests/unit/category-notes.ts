import { describe, expect, test } from 'vitest'

import { getCategorizedAuditLogEvents } from '../../lib'
import config from '../../lib/config.json'

describe('audit log category notes', () => {
  test('config contains expected category notes', () => {
    expect(config.categoryNotes).toBeDefined()
    expect(typeof config.categoryNotes).toBe('object')

    // Check that we have the specific category notes mentioned in the issue
    expect(config.categoryNotes).toHaveProperty('members_can_create_pages')
    expect(config.categoryNotes).toHaveProperty('git')
    expect(config.categoryNotes).toHaveProperty('sso_redirect')
  })

  test('category notes are strings', () => {
    if (config.categoryNotes) {
      Object.values(config.categoryNotes).forEach((note) => {
        expect(typeof note).toBe('string')
        expect(note.length).toBeGreaterThan(0)
      })
    }
  })

  test('members_can_create_pages note contains reference to GitHub Pages', () => {
    const note = config.categoryNotes?.['members_can_create_pages']
    expect(note).toContain('GitHub Pages')
    expect(note).toContain('organization')
  })

  test('git category note contains REST API information', () => {
    const note = config.categoryNotes?.['git']
    expect(note).toContain('REST API')
    expect(note).toContain('7-day retention')
  })

  test('sso_redirect note mentions beta status', () => {
    const note = config.categoryNotes?.['sso_redirect']
    expect(note).toContain('beta')
    expect(note).toContain('Enterprise Managed Users')
  })

  test('category notes do not interfere with event categorization', () => {
    // Test that adding category notes doesn't break existing functionality
    const organizationEvents = getCategorizedAuditLogEvents('organization', 'free-pro-team@latest')
    const enterpriseEvents = getCategorizedAuditLogEvents('enterprise', 'enterprise-cloud@latest')

    // Should still have categorized events
    expect(Object.keys(organizationEvents).length).toBeGreaterThan(0)
    expect(Object.keys(enterpriseEvents).length).toBeGreaterThan(0)

    // Each category should still contain arrays of events
    Object.values(organizationEvents).forEach((events) => {
      expect(Array.isArray(events)).toBe(true)
      if (events.length > 0) {
        expect(events[0]).toHaveProperty('action')
        expect(events[0]).toHaveProperty('description')
      }
    })
  })

  test('category notes are properly typed', () => {
    // This test will pass once we update the types
    const notes = config.categoryNotes
    if (notes) {
      expect(notes).toEqual(
        expect.objectContaining({
          members_can_create_pages: expect.any(String),
          git: expect.any(String),
          sso_redirect: expect.any(String),
        }),
      )
    }
  })
})
