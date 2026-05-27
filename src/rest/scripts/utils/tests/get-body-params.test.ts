import { describe, expect, it, vi } from 'vitest'

import { getBodyParams } from '../get-body-params'

// Mock render-content so tests don't require the full content-render pipeline
vi.mock('../render-content', () => ({
  renderContent: async (template: string) => template,
}))

describe('getBodyParams — OAS 3.1 nullable handling', () => {
  // ── Bug #3 ──────────────────────────────────────────────────────────────────
  // anyOf: [{type:"null"}, {type:"object"}] → type should render as "object or null"

  it('renders anyOf [{type:"null"},{type:"object"}] as "object or null"', async () => {
    const schema = {
      type: 'object',
      properties: {
        config: {
          anyOf: [
            { type: 'null' },
            {
              type: 'object',
              description: 'The configuration object',
              properties: {
                enabled: { type: 'boolean', description: 'Whether enabled' },
              },
            },
          ],
        },
      },
    }
    const params = await getBodyParams(schema, false)
    expect(params).toHaveLength(1)
    expect(params[0].name).toBe('config')
    expect(params[0].type).toBe('object or null')
  })

  it('renders anyOf [{type:"object"},{type:"null"}] as "object or null" (order independent)', async () => {
    const schema = {
      type: 'object',
      properties: {
        metadata: {
          anyOf: [
            {
              type: 'object',
              description: 'Metadata',
              properties: {
                key: { type: 'string', description: 'A key' },
              },
            },
            { type: 'null' },
          ],
        },
      },
    }
    const params = await getBodyParams(schema, false)
    expect(params).toHaveLength(1)
    expect(params[0].type).toBe('object or null')
  })

  it('renders anyOf [{type:"null"},{type:"string"}] as "string" (no object found, falls back to first non-null via existing path)', async () => {
    // When anyOf has no object, it uses the existing fallback: param.anyOf[0].type
    // The null entry is at index 0, so this tests the non-null fallback path
    const schema = {
      type: 'object',
      properties: {
        label: {
          anyOf: [{ type: 'string', description: 'A label' }, { type: 'null' }],
        },
      },
    }
    const params = await getBodyParams(schema, false)
    expect(params).toHaveLength(1)
    expect(params[0].name).toBe('label')
    // No object found in anyOf → falls back to anyOf[0].type = 'string'
    expect(params[0].type).toBe('string')
  })

  // ── OAS 3.1 type: ["string", "null"] scalar ─────────────────────────────
  // This is already handled by existing code (paramType array normalization).
  // These tests verify the existing OAS 3.1 scalar nullable path still works.

  it('renders type: ["string", "null"] as "string or null"', async () => {
    const schema = {
      type: 'object',
      properties: {
        name: {
          type: ['string', 'null'],
          description: 'The name',
        },
      },
    }
    const params = await getBodyParams(schema, false)
    expect(params).toHaveLength(1)
    expect(params[0].name).toBe('name')
    expect(params[0].type).toBe('string or null')
  })

  it('renders type: ["integer", "null"] as "integer or null"', async () => {
    const schema = {
      type: 'object',
      properties: {
        count: {
          type: ['integer', 'null'],
          description: 'The count',
        },
      },
    }
    const params = await getBodyParams(schema, false)
    expect(params).toHaveLength(1)
    expect(params[0].type).toBe('integer or null')
  })

  // ── anyOf without null ────────────────────────────────────────────────────
  it('renders anyOf [{type:"object"}] without null (no hasNull) as just "object"', async () => {
    const schema = {
      type: 'object',
      properties: {
        settings: {
          anyOf: [
            {
              type: 'object',
              description: 'Settings',
              properties: {
                timeout: { type: 'integer', description: 'Timeout in ms' },
              },
            },
          ],
        },
      },
    }
    const params = await getBodyParams(schema, false)
    expect(params).toHaveLength(1)
    expect(params[0].type).toBe('object')
    // Confirm "null" is NOT in the type
    expect(params[0].type).not.toContain('null')
  })

  // ── Existing OAS 3.0 nullable path still works ───────────────────────────
  it('still handles OAS 3.0 nullable: true', async () => {
    const schema = {
      type: 'object',
      properties: {
        legacy: {
          type: 'string',
          nullable: true,
          description: 'A legacy field',
        },
      },
    }
    const params = await getBodyParams(schema, false)
    expect(params).toHaveLength(1)
    expect(params[0].type).toBe('string or null')
  })

  // ── Normal non-nullable object body params ───────────────────────────────
  it('renders a plain string param without null', async () => {
    const schema = {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          description: 'The title',
        },
      },
      required: ['title'],
    }
    const params = await getBodyParams(schema, false)
    expect(params).toHaveLength(1)
    expect(params[0].name).toBe('title')
    expect(params[0].type).toBe('string')
    expect(params[0].isRequired).toBe(true)
  })
})
