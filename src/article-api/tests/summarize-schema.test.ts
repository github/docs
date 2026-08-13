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

describe('summarizeSchema — repeated titled type deduplication', () => {
  type Schema = Parameters<typeof summarizeSchema>[0]
  const user: Schema = {
    type: 'object',
    title: 'Simple User',
    properties: {
      login: { type: 'string' },
      id: { type: 'integer' },
    },
  }

  it('expands a titled type once then references it with "(see above)"', () => {
    const schema: Schema = {
      type: 'object',
      properties: {
        actor: user,
        assignee: user,
        assigner: user,
      },
    }
    const result = summarizeSchema(schema)
    // Expanded exactly once
    expect(result.match(/`login`/g)?.length).toBe(1)
    // Two later references
    expect(result.match(/\(see above\)/g)?.length).toBe(2)
    expect(result).toContain('`assignee`: `Simple User` (see above)')
  })

  it('references repeated titled variants inside a composition', () => {
    const schema: Schema = {
      type: 'array',
      items: {
        anyOf: [
          {
            type: 'object',
            title: 'Event A',
            properties: { actor: user, target: user },
          },
          {
            type: 'object',
            title: 'Event B',
            properties: { actor: user },
          },
        ],
      },
    }
    const result = summarizeSchema(schema)
    // Simple User expanded once across the whole schema
    expect(result.match(/`login`/g)?.length).toBe(1)
    expect((result.match(/\(see above\)/g) || []).length).toBeGreaterThanOrEqual(2)
  })

  it('does not reference untitled (anonymous) objects', () => {
    const anon: Schema = {
      type: 'object',
      properties: { a: { type: 'string' } },
    }
    const schema: Schema = {
      type: 'object',
      properties: { first: anon, second: anon },
    }
    const result = summarizeSchema(schema)
    expect(result).not.toContain('(see above)')
    expect(result.match(/`a`/g)?.length).toBe(2)
  })

  it('expands a self-referential top-level object before referencing it (no dangling ref)', () => {
    // A top-level object emits no visible titled header. With the top-level
    // title NOT pre-marked, the first occurrence of the recursive property
    // expands visibly, so any deeper "(see above)" points to that expansion
    // rather than a header that was never rendered.
    const node: Schema = {
      type: 'object',
      title: 'Category',
      properties: {
        name: { type: 'string' },
      },
    }
    node.properties!.parent = node
    const result = summarizeSchema(node)
    // `Category` is expanded at least once (its `name` field is visible)
    // before the recursive reference appears.
    const firstExpansion = result.indexOf('`name`')
    const firstReference = result.indexOf('(see above)')
    expect(firstExpansion).toBeGreaterThanOrEqual(0)
    if (firstReference >= 0) {
      expect(firstExpansion).toBeLessThan(firstReference)
    }
  })
})
