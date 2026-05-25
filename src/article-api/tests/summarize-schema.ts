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
