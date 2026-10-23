import { describe, expect, test } from 'vitest'

import { summarizeSchema } from '@/article-api/lib/summarize-schema'

describe('summarizeSchema', () => {
  test('simple object with properties', () => {
    const result = summarizeSchema({
      type: 'object',
      required: ['id', 'name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        email: { type: 'string', format: 'email' },
      },
    })
    expect(result).toContain('* `id`: required, integer')
    expect(result).toContain('* `name`: required, string')
    expect(result).toContain('* `email`: string, format: email')
  })

  test('array of objects', () => {
    const result = summarizeSchema({
      type: 'array',
      items: {
        title: 'User',
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'integer' },
          login: { type: 'string' },
        },
      },
    })
    expect(result).toContain('Array of `User`:')
    expect(result).toContain('* `id`: required, integer')
    expect(result).toContain('* `login`: string')
  })

  test('enum values are listed', () => {
    const result = summarizeSchema({
      type: 'object',
      properties: {
        state: { type: 'string', enum: ['open', 'closed'] },
      },
    })
    expect(result).toContain('enum: `open`, `closed`')
  })

  test('default values are shown', () => {
    const result = summarizeSchema({
      type: 'object',
      properties: {
        per_page: { type: 'integer', default: 30 },
      },
    })
    expect(result).toContain('default: `30`')
  })

  test('deprecated fields are marked', () => {
    const result = summarizeSchema({
      type: 'object',
      properties: {
        old_field: { type: 'string', deprecated: true },
      },
    })
    expect(result).toContain('deprecated')
  })

  test('oneOf variants list titles', () => {
    const result = summarizeSchema({
      type: 'object',
      properties: {
        payload: {
          oneOf: [
            { title: 'PushEvent', type: 'object', properties: { ref: { type: 'string' } } },
            { title: 'ForkEvent', type: 'object', properties: { forkee: { type: 'object' } } },
          ],
        },
      },
    })
    expect(result).toContain('one of:')
    expect(result).toContain('**PushEvent**')
    expect(result).toContain('**ForkEvent**')
  })

  test('nested array with oneOf items lists each variant', () => {
    const result = summarizeSchema({
      type: 'object',
      required: ['labels'],
      properties: {
        labels: {
          type: 'array',
          items: {
            oneOf: [
              { type: 'string' },
              { type: 'object', properties: { name: { type: 'string' } } },
            ],
          },
        },
      },
    })
    expect(result).toContain('* `labels`: required, array of items:')
    expect(result).toContain('one of:')
    expect(result).toContain('**string**')
    expect(result).toContain('* `name`: string')
    expect(result).not.toContain('array of object')
  })

  test('nested array with titled composition items keeps the title and variants', () => {
    const result = summarizeSchema({
      type: 'object',
      properties: {
        rules: {
          type: 'array',
          items: {
            title: 'Repository Rule',
            type: 'object',
            oneOf: [
              { title: 'creation', type: 'object', properties: { type: { type: 'string' } } },
              { title: 'deletion', type: 'object', properties: { type: { type: 'string' } } },
            ],
          },
        },
      },
    })
    expect(result).toContain('* `rules`: array of `Repository Rule`:')
    expect(result).toContain('**creation**')
    expect(result).toContain('**deletion**')
    expect(result).not.toContain('array of object')
  })

  test('depth-limited composition items do not block later expansion', () => {
    const rules = {
      type: 'array',
      items: {
        title: 'Rule',
        oneOf: [
          { title: 'creation', type: 'object', properties: { ruleField: { type: 'string' } } },
        ],
      },
    }
    const result = summarizeSchema({
      type: 'object',
      properties: {
        a: {
          type: 'object',
          properties: {
            b: {
              type: 'object',
              properties: {
                c: {
                  type: 'object',
                  properties: { d: { type: 'object', properties: { rules } } },
                },
              },
            },
          },
        },
        later: rules,
        again: rules,
      },
    })
    expect(result.match(/`ruleField`/g)).toHaveLength(1)
    expect(result).toContain('* `later`: array of `Rule`:')
    expect(result).toContain('* `again`: array of `Rule` (see above)')
  })

  test('nested array items keep shared properties alongside composition variants', () => {
    const result = summarizeSchema({
      type: 'object',
      properties: {
        items: {
          type: 'array',
          items: {
            type: 'object',
            required: ['id'],
            properties: { id: { type: 'integer' } },
            allOf: [{ type: 'object', properties: { extra: { type: 'string' } } }],
          },
        },
      },
    })
    expect(result).toContain('* `items`: array of items:')
    expect(result).toContain('  * `id`: required, integer')
    expect(result).toContain('all of:')
    expect(result).toContain('* `extra`: string')
  })

  test('nested objects recurse with title', () => {
    const result = summarizeSchema({
      type: 'object',
      properties: {
        owner: {
          title: 'User',
          type: 'object',
          required: ['id'],
          properties: {
            id: { type: 'integer' },
            login: { type: 'string' },
          },
        },
      },
    })
    expect(result).toContain('* `owner`: `User`:')
    expect(result).toContain('  * `id`: required, integer')
  })

  test('constraints are included', () => {
    const result = summarizeSchema({
      type: 'object',
      properties: {
        count: { type: 'integer', minimum: 0, maximum: 100 },
        name: { type: 'string', minLength: 1, maxLength: 255, pattern: '^[a-z]+$' },
      },
    })
    expect(result).toContain('minimum: 0')
    expect(result).toContain('maximum: 100')
    expect(result).toContain('minLength: 1')
    expect(result).toContain('maxLength: 255')
    expect(result).toContain('pattern: `^[a-z]+$`')
  })

  test('readOnly fields are marked', () => {
    const result = summarizeSchema({
      type: 'object',
      properties: {
        id: { type: 'integer', readOnly: true },
      },
    })
    expect(result).toContain('read-only')
  })

  test('array items with constraints', () => {
    const result = summarizeSchema({
      type: 'array',
      minItems: 1,
      maxItems: 50,
      items: { type: 'string' },
    })
    expect(result).toContain('minItems: 1')
    expect(result).toContain('maxItems: 50')
  })

  test('returns empty string for null/undefined input', () => {
    // @ts-expect-error testing invalid input
    expect(summarizeSchema(null)).toBe('')
    // @ts-expect-error testing invalid input
    expect(summarizeSchema(undefined)).toBe('')
  })

  test('does not include examples or descriptions', () => {
    const result = summarizeSchema({
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          description: 'The unique identifier',
          examples: [42],
        },
      },
    })
    expect(result).not.toContain('unique identifier')
    expect(result).not.toContain('42')
    expect(result).toContain('* `id`: integer')
  })

  test('uses colon separator not em dash', () => {
    const result = summarizeSchema({
      type: 'object',
      properties: {
        id: { type: 'integer' },
      },
    })
    expect(result).not.toContain('—')
    expect(result).toContain(':')
  })
})
