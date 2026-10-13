import { describe, expect, it, vi } from 'vitest'

import { getBodyParams, type Schema } from '@/rest/scripts/utils/get-body-params'

// renderContent returns input because these tests cover schema transformation, not rendering.
vi.mock('../render-content', () => ({
  renderContent: async (template: string) => template,
}))

describe('getBodyParams — OAS 3.1 nullable handling', () => {
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

  it('renders anyOf [{type:"string"},{type:"null"}] as "string" (no object, falls back to anyOf[0])', async () => {
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
    expect(params[0].type).toBe('string')
  })

  it('preserves required fields from all object-only top-level oneOf alternatives', async () => {
    const schema: Schema = {
      oneOf: [
        {
          type: 'object',
          properties: {
            first: { type: 'string', description: 'First value' },
          },
          required: ['first'],
        },
        {
          type: 'object',
          properties: {
            middle: { type: 'string', description: 'Middle value' },
          },
          required: ['middle'],
        },
        {
          type: 'object',
          properties: {
            last: { type: 'string', description: 'Last value' },
          },
          required: ['last'],
        },
      ],
    }
    const params = await getBodyParams(schema, true)
    expect(params.map(({ name, isRequired }) => [name, isRequired])).toEqual([
      ['first', true],
      ['middle', true],
      ['last', true],
    ])
  })

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
    expect(params[0].type).not.toContain('null')
  })

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
