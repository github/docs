import { describe, expect, test } from 'vitest'

import { mergeAllOf } from '@/rest/scripts/utils/merge-all-of'

describe('mergeAllOf', () => {
  test('leaves a schema without allOf untouched', () => {
    const schema = {
      type: 'object',
      properties: { name: { type: 'string' }, age: { type: 'integer' } },
      required: ['name'],
    }
    expect(mergeAllOf(schema)).toEqual(schema)
  })

  test('unions properties and required across allOf members', () => {
    expect(
      mergeAllOf({
        allOf: [
          { type: 'object', properties: { a: { type: 'string' } }, required: ['a'] },
          { type: 'object', properties: { b: { type: 'integer' } }, required: ['b'] },
        ],
      }),
    ).toEqual({
      type: 'object',
      properties: { a: { type: 'string' }, b: { type: 'integer' } },
      required: ['a', 'b'],
    })
  })

  test('annotations declared alongside allOf win over the members', () => {
    expect(
      mergeAllOf({
        type: 'object',
        title: 'outer',
        description: 'from the parent',
        allOf: [{ title: 'inner', description: 'from the member', properties: { a: {} } }],
      }),
    ).toEqual({
      type: 'object',
      title: 'outer',
      description: 'from the parent',
      properties: { a: {} },
    })
  })

  test('deduplicates required entries', () => {
    expect(
      mergeAllOf({ required: ['a'], allOf: [{ required: ['a', 'b'] }, { required: ['b', 'c'] }] }),
    ).toEqual({ required: ['a', 'b', 'c'] })
  })

  test('merges nested allOf inside a shared property', () => {
    expect(
      mergeAllOf({
        allOf: [
          { properties: { nested: { type: 'object', properties: { a: { type: 'string' } } } } },
          { properties: { nested: { type: 'object', properties: { b: { type: 'string' } } } } },
        ],
      }),
    ).toEqual({
      properties: {
        nested: { type: 'object', properties: { a: { type: 'string' }, b: { type: 'string' } } },
      },
    })
  })

  test('resolves allOf nested inside oneOf, as the ruleset schemas do', () => {
    expect(
      mergeAllOf({
        type: 'object',
        properties: {
          conditions: {
            oneOf: [
              {
                type: 'object',
                title: 'org ruleset conditions',
                allOf: [
                  { type: 'object', properties: { ref_name: { type: 'object' } } },
                  {
                    type: 'object',
                    properties: { repository_name: { type: 'object' } },
                    required: ['repository_name'],
                  },
                ],
              },
            ],
          },
        },
      }),
    ).toEqual({
      type: 'object',
      properties: {
        conditions: {
          oneOf: [
            {
              type: 'object',
              title: 'org ruleset conditions',
              properties: { ref_name: { type: 'object' }, repository_name: { type: 'object' } },
              required: ['repository_name'],
            },
          ],
        },
      },
    })
  })

  test('resolves allOf inside items', () => {
    expect(
      mergeAllOf({
        type: 'array',
        items: { allOf: [{ properties: { a: {} } }, { properties: { b: {} } }] },
      }),
    ).toEqual({ type: 'array', items: { properties: { a: {}, b: {} } } })
  })

  test('keeps a property that is literally named allOf', () => {
    const schema = { type: 'object', properties: { allOf: { type: 'string' } } }
    expect(mergeAllOf(schema)).toEqual(schema)
  })

  test('merges a property named after an Object.prototype member', () => {
    const merged = mergeAllOf({
      allOf: [
        { properties: { a: { type: 'string' } } },
        { properties: { constructor: { type: 'string' }, toString: { type: 'string' } } },
      ],
    }) as { properties: Record<string, unknown> }
    expect(merged.properties).toEqual({
      a: { type: 'string' },
      constructor: { type: 'string' },
      toString: { type: 'string' },
    })
    expect(Object.hasOwn(merged.properties, 'constructor')).toBe(true)
  })

  test('keeps a property named __proto__ as an own key', () => {
    const schema = JSON.parse(
      '{"allOf":[{"properties":{"a":{}}},{"properties":{"__proto__":{"type":"string"}}}]}',
    )
    const merged = mergeAllOf(schema) as { properties: Record<string, unknown> }
    expect(Object.hasOwn(merged.properties, '__proto__')).toBe(true)
    expect(Object.getOwnPropertyDescriptor(merged.properties, '__proto__')?.value).toEqual({
      type: 'string',
    })
    expect(Object.getPrototypeOf(merged.properties)).toBe(Object.prototype)
  })

  test('keeps instance data that contains an allOf key', () => {
    const schema = {
      type: 'object',
      properties: { config: { type: 'object', default: { allOf: 'literal user data' } } },
      enum: [{ allOf: 'still literal' }],
    }
    expect(mergeAllOf(schema)).toEqual(schema)
  })

  test('accepts members that agree on a keyword', () => {
    expect(
      mergeAllOf({
        allOf: [
          { type: 'object', enum: ['a'] },
          { type: 'object', enum: ['a'] },
        ],
      }),
    ).toEqual({ type: 'object', enum: ['a'] })
  })

  test('intersects "type" when allOf members allow different but overlapping types', () => {
    expect(mergeAllOf({ allOf: [{ type: 'object' }, { type: ['object', 'null'] }] })).toEqual({
      type: 'object',
    })
    expect(
      mergeAllOf({ allOf: [{ type: ['object', 'null'] }, { type: ['null', 'object'] }] }),
    ).toEqual({ type: ['object', 'null'] })
  })

  test('throws on a conflicting keyword rather than guessing', () => {
    expect(() => mergeAllOf({ allOf: [{ type: 'string' }, { type: 'number' }] })).toThrow(
      /conflicting "type" keyword/,
    )
    expect(() => mergeAllOf({ allOf: [{ enum: ['a'] }, { enum: ['b'] }] })).toThrow(
      /conflicting "enum" keyword/,
    )
    expect(() => mergeAllOf({ allOf: [{ minimum: 10 }, { minimum: 20 }] })).toThrow(
      /conflicting "minimum" keyword/,
    )
  })

  test('throws when allOf is not an array of object schemas', () => {
    expect(() => mergeAllOf({ allOf: { properties: {} } })).toThrow(/is not an array/)
    expect(() => mergeAllOf({ allOf: [false] })).toThrow(/is not an object schema/)
  })

  test('reports the path of a conflict', () => {
    expect(() =>
      mergeAllOf({
        properties: { outer: { items: { allOf: [{ type: 'string' }, { type: 'number' }] } } },
      }),
    ).toThrow(/#\/properties\/outer\/items/)
  })

  test('returns a deep copy, so consumers can mutate the result safely', () => {
    const schema = {
      oneOf: [
        { type: 'object', properties: { a: {} } },
        { type: 'object', properties: { b: {} } },
      ],
    }
    const before = JSON.stringify(schema)
    const merged = mergeAllOf(schema) as { oneOf: { properties: Record<string, unknown> }[] }

    // get-body-params merges the oneOf members in place, so this must not
    // reach back into the OpenAPI operation the schema came from.
    Object.assign(merged.oneOf[0].properties, merged.oneOf[1].properties)
    merged.oneOf[0].properties.injected = true

    expect(JSON.stringify(schema)).toBe(before)
  })
})
