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

  it('keeps parent properties when top-level oneOf options only constrain them', async () => {
    const schema: Schema = {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'The name' },
        head_sha: { type: 'string', description: 'The SHA' },
        status: {
          type: 'string',
          description: 'The status',
          enum: ['queued', 'in_progress', 'completed'],
        },
        conclusion: { type: 'string', description: 'The conclusion' },
        output: { type: 'object', description: 'The output' },
      },
      required: ['name', 'head_sha'],
      oneOf: [
        {
          properties: { status: { enum: ['completed'] } },
          required: ['status', 'conclusion'],
        },
        {
          properties: { status: { enum: ['queued', 'in_progress'] } },
        },
      ],
    }
    const params = await getBodyParams(schema, true)
    expect(params.map(({ name, type, isRequired }) => [name, type, isRequired])).toEqual([
      ['name', 'string', true],
      ['head_sha', 'string', true],
      ['status', 'string', undefined],
      ['conclusion', 'string', undefined],
      ['output', 'object', undefined],
    ])
    expect(params[2].enum).toEqual(['queued', 'in_progress', 'completed'])
  })

  it('keeps parent properties when top-level oneOf options only list required fields', async () => {
    const schema: Schema = {
      type: 'object',
      properties: {
        type: { type: 'string', description: 'The type', enum: ['Issue', 'PullRequest'] },
        id: { type: 'integer', description: 'The ID' },
        owner: { type: 'string', description: 'The owner' },
        repo: { type: 'string', description: 'The repo' },
        number: { type: 'integer', description: 'The number' },
      },
      required: ['type'],
      oneOf: [{ required: ['id'] }, { required: ['owner', 'repo', 'number'] }],
    }
    const params = await getBodyParams(schema, true)
    expect(params.map(({ name, isRequired }) => [name, isRequired])).toEqual([
      ['type', true],
      ['id', undefined],
      ['owner', undefined],
      ['repo', undefined],
      ['number', undefined],
    ])
  })

  it('keeps alternative parent fields optional when top-level oneOf options are typed objects', async () => {
    const schema: Schema = {
      type: 'object',
      properties: {
        type: { type: 'string', description: 'The type', enum: ['Issue', 'PullRequest'] },
        id: { type: 'integer', description: 'The ID' },
        owner: { type: 'string', description: 'The owner' },
        repo: { type: 'string', description: 'The repo' },
        number: { type: 'integer', description: 'The number' },
      },
      required: ['type'],
      oneOf: [
        { type: 'object', required: ['id'] },
        { type: 'object', required: ['owner', 'repo', 'number'] },
      ],
    }
    const params = await getBodyParams(schema, true)
    expect(params.map(({ name, isRequired }) => [name, isRequired])).toEqual([
      ['type', true],
      ['id', undefined],
      ['owner', undefined],
      ['repo', undefined],
      ['number', undefined],
    ])
  })

  it('adds first-option properties to parent properties when top-level oneOf options are untyped', async () => {
    const schema: Schema = {
      type: 'object',
      properties: {
        type: { type: 'string', description: 'The type', enum: ['Issue', 'PullRequest'] },
      },
      required: ['type'],
      oneOf: [
        {
          properties: {
            type: { enum: ['Issue'] },
            owner: { type: 'string', description: 'The owner' },
            repo: { type: 'string', description: 'The repo' },
            number: { type: 'integer', description: 'The number' },
          },
          required: ['owner', 'repo', 'number'],
        },
        { properties: { id: { type: 'integer', description: 'The ID' } }, required: ['id'] },
      ],
    }
    const params = await getBodyParams(schema, true)
    expect(params.map(({ name, isRequired }) => [name, isRequired])).toEqual([
      ['type', true],
      ['owner', true],
      ['repo', true],
      ['number', true],
    ])
    expect(params[0].enum).toEqual(['Issue', 'PullRequest'])
  })

  it('marks a parent property required when every top-level oneOf option requires it', async () => {
    const schema: Schema = {
      type: 'object',
      properties: {
        mode: { type: 'string', description: 'The mode' },
        first: { type: 'string', description: 'First value' },
        second: { type: 'string', description: 'Second value' },
      },
      oneOf: [{ required: ['mode', 'first'] }, { required: ['second', 'mode'] }],
    }
    const params = await getBodyParams(schema, true)
    expect(params.map(({ name, isRequired }) => [name, isRequired])).toEqual([
      ['mode', true],
      ['first', undefined],
      ['second', undefined],
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

  it('recurses into array items with type ["object", "null"]', async () => {
    const schema: Schema = {
      type: 'object',
      properties: {
        assignees: {
          type: 'array',
          items: {
            type: ['object', 'null'],
            properties: {
              login: { type: 'string', description: 'The login' },
            },
          },
        },
      },
    }
    const params = await getBodyParams(schema, false)
    expect(params).toHaveLength(1)
    expect(params[0].type).toBe('array of objects')
    expect(params[0].childParamsGroups?.map(({ name }) => name)).toEqual(['login'])
  })

  it('renders a nullable array of ["string", "null"] items as "array of strings or null"', async () => {
    const schema: Schema = {
      type: 'object',
      properties: {
        bullets: {
          type: ['array', 'null'],
          items: { type: ['string', 'null'] },
        },
      },
    }
    const params = await getBodyParams(schema, false)
    expect(params).toHaveLength(1)
    expect(params[0].type).toBe('array of strings or null')
  })

  it('adds supported values for enum array items with type ["string", "null"]', async () => {
    const schema: Schema = {
      type: 'object',
      properties: {
        tags: {
          type: 'array',
          description: 'Tags.',
          items: { type: ['string', 'null'], enum: ['a', 'b'] },
        },
      },
    }
    const params = await getBodyParams(schema, false)
    expect(params).toHaveLength(1)
    expect(params[0].description).toContain('Supported values are: <code>a</code>, <code>b</code>')
  })

  it('adds supported values without a prefix when nullable enum items have no array description', async () => {
    const schema: Schema = {
      type: 'object',
      properties: {
        tags: {
          type: 'array',
          items: { type: ['string', 'null'], enum: ['a', 'b'] },
        },
      },
    }
    const params = await getBodyParams(schema, false)
    expect(params).toHaveLength(1)
    expect(params[0].description).toBe('Supported values are: <code>a</code>, <code>b</code>')
  })

  it('recurses into top-level array items with type ["object", "null"]', async () => {
    const schema: Schema = {
      type: 'array',
      items: {
        type: ['object', 'null'],
        properties: {
          id: { type: 'integer', description: 'The ID' },
        },
      },
    }
    const params = await getBodyParams(schema, true)
    expect(params).toHaveLength(1)
    expect(params[0].type).toBe('array')
    expect(params[0].childParamsGroups?.map(({ name }) => name)).toEqual(['id'])
  })
})
