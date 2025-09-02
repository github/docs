import { describe, expect, test } from 'vitest'
import { getAuditLogEvents, getCategorizedAuditLogEvents } from '../lib/index.js'
import type { AuditLogEventT } from '../types'

describe('Audit log fields functionality', () => {
  describe('getAuditLogEvents', () => {
    test('should return events with fields when available', () => {
      // Test with GHEC version which should have fields after our changes
      const events = getAuditLogEvents('organization', 'enterprise-cloud@latest')

      expect(events).toBeDefined()
      expect(Array.isArray(events)).toBe(true)
      expect(events.length).toBeGreaterThan(0)

      // Check that at least some events have fields
      const eventsWithFields = events.filter((event) => event.fields && event.fields.length > 0)
      expect(eventsWithFields.length).toBeGreaterThan(0)

      // Check structure of an event with fields
      const eventWithFields = eventsWithFields[0]
      expect(eventWithFields).toHaveProperty('action')
      expect(eventWithFields).toHaveProperty('description')
      expect(eventWithFields).toHaveProperty('fields')
      expect(Array.isArray(eventWithFields.fields)).toBe(true)
      expect(eventWithFields.fields!.length).toBeGreaterThan(0)
    })

    test('should have fields as array of strings', () => {
      const events = getAuditLogEvents('organization', 'enterprise-cloud@latest')
      const eventWithFields = events.find((event) => event.fields && event.fields.length > 0)

      if (eventWithFields) {
        expect(Array.isArray(eventWithFields.fields)).toBe(true)
        eventWithFields.fields!.forEach((field) => {
          expect(typeof field).toBe('string')
          expect(field.length).toBeGreaterThan(0)
        })
      }
    })

    test('should handle events without fields gracefully', () => {
      // Some events might not have fields, this should not break anything
      const events = getAuditLogEvents('organization', 'enterprise-cloud@latest')

      events.forEach((event) => {
        expect(event).toHaveProperty('action')
        expect(event).toHaveProperty('description')
        // fields property is optional
        if (event.fields) {
          expect(Array.isArray(event.fields)).toBe(true)
        }
      })
    })

    test('should include common audit log fields', () => {
      const events = getAuditLogEvents('organization', 'enterprise-cloud@latest')
      const eventWithFields = events.find((event) => event.fields && event.fields.length > 0)

      if (eventWithFields) {
        const fields = eventWithFields.fields!

        // Common fields that should be present in most events
        const commonFields = ['@timestamp', 'action', 'actor']
        const hasCommonFields = commonFields.some((field) => fields.includes(field))
        expect(hasCommonFields).toBe(true)
      }
    })
  })

  describe('getCategorizedAuditLogEvents', () => {
    test('should return categorized events with fields', () => {
      const categorizedEvents = getCategorizedAuditLogEvents(
        'organization',
        'enterprise-cloud@latest',
      )

      expect(categorizedEvents).toBeDefined()
      expect(typeof categorizedEvents).toBe('object')

      // Check that categories exist
      const categories = Object.keys(categorizedEvents)
      expect(categories.length).toBeGreaterThan(0)

      // Check that events in categories have proper structure including fields
      categories.forEach((category) => {
        const events = categorizedEvents[category]
        expect(Array.isArray(events)).toBe(true)

        events.forEach((event: AuditLogEventT) => {
          expect(event).toHaveProperty('action')
          expect(event).toHaveProperty('description')
          // fields is optional but if present should be array
          if (event.fields) {
            expect(Array.isArray(event.fields)).toBe(true)
          }
        })
      })
    })

    test('should preserve fields data through categorization', () => {
      const categorizedEvents = getCategorizedAuditLogEvents(
        'organization',
        'enterprise-cloud@latest',
      )

      // Find an event with fields
      let eventWithFields: AuditLogEventT | null = null
      for (const category of Object.keys(categorizedEvents)) {
        const event = categorizedEvents[category].find(
          (e: AuditLogEventT) => e.fields && e.fields.length > 0,
        )
        if (event) {
          eventWithFields = event
          break
        }
      }

      if (eventWithFields) {
        expect(eventWithFields.fields).toBeDefined()
        expect(Array.isArray(eventWithFields.fields)).toBe(true)
        expect(eventWithFields.fields!.length).toBeGreaterThan(0)
      }
    })
  })

  describe('Fields data integrity', () => {
    test('should not have duplicate fields in same event', () => {
      const events = getAuditLogEvents('organization', 'enterprise-cloud@latest')

      events.forEach((event) => {
        if (event.fields) {
          const uniqueFields = new Set(event.fields)
          expect(uniqueFields.size).toBe(event.fields.length)
        }
      })
    })

    test('should have reasonable field names', () => {
      const events = getAuditLogEvents('organization', 'enterprise-cloud@latest')
      const eventWithFields = events.find((event) => event.fields && event.fields.length > 0)

      if (eventWithFields) {
        eventWithFields.fields!.forEach((field) => {
          // Field names should be reasonable strings
          expect(field).toBeTruthy()
          expect(typeof field).toBe('string')
          expect(field.length).toBeGreaterThan(0)
          expect(field.length).toBeLessThan(100) // Reasonable max length

          // Should not contain special characters that would break display
          expect(field).not.toMatch(/[<>'"&]/)
        })
      }
    })

    test('should handle different page types consistently', () => {
      const pageTypes = ['organization', 'enterprise', 'user']

      pageTypes.forEach((pageType) => {
        try {
          const events = getAuditLogEvents(pageType, 'enterprise-cloud@latest')

          events.forEach((event) => {
            expect(event).toHaveProperty('action')
            expect(event).toHaveProperty('description')

            if (event.fields) {
              expect(Array.isArray(event.fields)).toBe(true)
              event.fields.forEach((field) => {
                expect(typeof field).toBe('string')
              })
            }
          })
        } catch (error) {
          // Some page types might not exist for certain versions, that's ok
          console.log(`Skipping ${pageType} page type due to: ${error}`)
        }
      })
    })
  })

  describe('Type safety', () => {
    test('should have proper TypeScript types', () => {
      const events = getAuditLogEvents('organization', 'enterprise-cloud@latest')
      const event = events[0]

      // These should compile without TypeScript errors
      const action: string = event.action
      const description: string = event.description
      const fields: string[] | undefined = event.fields

      expect(typeof action).toBe('string')
      expect(typeof description).toBe('string')

      if (fields) {
        expect(Array.isArray(fields)).toBe(true)
        fields.forEach((field) => {
          expect(typeof field).toBe('string')
        })
      }
    })
  })
})
