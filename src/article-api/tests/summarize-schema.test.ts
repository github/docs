import { describe, expect, it } from 'vitest'
import { summarizeSchema } from '../lib/summarize-schema'

describe('summarizeSchema — OAS 3.1 nullable handling', () => {
  // ── Bug #1 ──────────────────────────────────────────────────────────────────
  // renderProperties: type: ["array", "null"] on a property

  it('renders nullable array property (primitive items) with "or null"', () => {
    const schema = {
      type: 'object' as const,
      properties: {
        tags: {
          type: ['array', 'null'],
          items: { type: 'string' },
        },
      },
    }
    const result = summarizeSchema(schema)
    expect(result).toContain('or null')
    expect(result).toContain('array of')
  })

  it('renders nullable array property (object items with title) with "or null"', () => {
    const schema = {
      type: 'object' as const,
      properties: {
        items: {
          type: ['array', 'null'],
          items: {
            type: 'object',
            title: 'Widget',
            properties: { id: { type: 'string' } },
          },
        },
      },
    }
    const result = summarizeSchema(schema)
    expect(result).toContain('array of `Widget` or null')
  })

  it('renders nullable array property (object items without title) with "or null"', () => {
    const schema = {
      type: 'object' as const,
      properties: {
        entries: {
          type: ['array', 'null'],
          items: {
            type: 'object',
            properties: { name: { type: 'string' } },
          },
        },
      },
    }
    const result = summarizeSchema(schema)
    expect(result).toContain('array of objects or null')
  })

  it('renders non-nullable array property without "or null"', () => {
    const schema = {
      type: 'object' as const,
      properties: {
        tags: {
          type: 'array',
          items: { type: 'string' },
        },
      },
    }
    const result = summarizeSchema(schema)
    expect(result).not.toContain('or null')
    expect(result).toContain('array of')
  })

  it('renders scalar type: ["string", "null"] property as "string or null"', () => {
    const schema = {
      type: 'object' as const,
      properties: {
        description: {
          type: ['string', 'null'],
        },
      },
    }
    const result = summarizeSchema(schema)
    expect(result).toContain('string or null')
  })

  // ── Bug #2 ──────────────────────────────────────────────────────────────────
  // summarizeSchema: type: ["array", "null"] at the top level

  it('renders top-level type: ["array", "null"] with primitive items as "or null"', () => {
    const schema = {
      type: ['array', 'null'],
      items: { type: 'string' },
    }
    const result = summarizeSchema(schema)
    expect(result).toContain('or null')
    expect(result).toContain('Array')
  })

  it('renders top-level type: ["array", "null"] with object items as "or null"', () => {
    const schema = {
      type: ['array', 'null'],
      items: {
        type: 'object',
        title: 'Repo',
        properties: { id: { type: 'integer' } },
      },
    }
    const result = summarizeSchema(schema)
    expect(result).toContain('or null')
    expect(result).toContain('`Repo`')
  })

  it('renders top-level type: ["array", "null"] with composition items as "or null"', () => {
    const schema = {
      type: ['array', 'null'],
      items: {
        oneOf: [
          { title: 'TypeA', type: 'object' },
          { title: 'TypeB', type: 'object' },
        ],
      },
    }
    const result = summarizeSchema(schema)
    expect(result).toContain('or null')
  })

  it('renders top-level plain array (not nullable) without "or null"', () => {
    const schema = {
      type: 'array',
      items: { type: 'string' },
    }
    const result = summarizeSchema(schema)
    expect(result).not.toContain('or null')
  })

  // ── Existing branches still work ─────────────────────────────────────────
  it('handles top-level anyOf', () => {
    const schema = {
      anyOf: [
        {
          type: 'object',
          title: 'Option A',
          properties: { x: { type: 'string' } } as Record<string, object>,
        },
        {
          type: 'object',
          title: 'Option B',
          properties: { y: { type: 'number' } } as Record<string, object>,
        },
      ],
    }
    const result = summarizeSchema(schema)
    expect(result).toContain('any of')
    expect(result).toContain('Option A')
    expect(result).toContain('Option B')
  })

  it('handles top-level oneOf', () => {
    const schema = {
      oneOf: [
        { title: 'Foo', type: 'object' },
        { title: 'Bar', type: 'object' },
      ],
    }
    const result = summarizeSchema(schema)
    expect(result).toContain('one of')
  })

  it('handles top-level allOf', () => {
    const schema = {
      allOf: [
        { title: 'Base', type: 'object' },
        { title: 'Extension', type: 'object' },
      ],
    }
    const result = summarizeSchema(schema)
    expect(result).toContain('all of')
  })

  it('handles property-level anyOf', () => {
    const schema = {
      type: 'object' as const,
      properties: {
        value: {
          anyOf: [{ type: 'string' }, { type: 'number' }],
        },
      },
    }
    const result = summarizeSchema(schema)
    expect(result).toContain('any of')
  })

  it('returns empty string for null/non-object input', () => {
    // @ts-expect-error testing runtime behavior
    expect(summarizeSchema(null)).toBe('')
    // @ts-expect-error testing runtime behavior
    expect(summarizeSchema('not an object')).toBe('')
  })
})
