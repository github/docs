import { describe, expect, test } from 'vitest'

import { simplifyParameterSchema } from '@/rest/scripts/utils/parameter-schema'

describe('simplifyParameterSchema', () => {
  test('keeps only type, default, and enum for a typed schema', () => {
    expect(
      simplifyParameterSchema({
        type: 'string',
        default: 'open',
        enum: ['open', 'closed'],
        example: 'open',
      }),
    ).toEqual({ type: 'string', default: 'open', enum: ['open', 'closed'] })
  })

  test('derives the type from oneOf variants', () => {
    expect(
      simplifyParameterSchema({
        oneOf: [{ type: 'integer' }, { type: 'string' }],
      }),
    ).toEqual({ type: ['integer', 'string'] })
  })

  test('describes array variants by item type and omits enum when a variant is unrestricted', () => {
    expect(
      simplifyParameterSchema({
        oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string', enum: ['patch'] } }],
      }),
    ).toEqual({ type: ['string', 'array of strings'] })
  })

  test('combines enum values when every variant is restricted', () => {
    expect(
      simplifyParameterSchema({
        oneOf: [
          { type: 'string', enum: ['patch'] },
          { type: 'array', items: { type: 'string', enum: ['patch', 'deployment'] } },
        ],
      }),
    ).toEqual({ type: ['string', 'array of strings'], enum: ['patch', 'deployment'] })
  })

  test('derives the type from anyOf variants and drops duplicate types', () => {
    expect(
      simplifyParameterSchema({
        anyOf: [{ type: 'string' }, { type: 'string', enum: ['all'] }],
        default: 'all',
      }),
    ).toEqual({ type: 'string', default: 'all' })
  })

  test('leaves the type undefined for an empty schema', () => {
    expect(simplifyParameterSchema({})).toEqual({ type: undefined })
  })
})
