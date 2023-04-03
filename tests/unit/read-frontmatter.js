import parse from '../../lib/read-frontmatter.js'
import { schema as frontmatterSchema } from '../../lib/frontmatter.js'

const filepath = 'path/to/file.md'
const fixture1 = `---
title: Hello, World
meaning_of_life: 42
---

I am content.
`
const fixture2 = `---
versions:
  fpt: '*'
  ghec: '*'
  ghes: 'BAD_VERSION'
---
`

describe('frontmatter', () => {
  it('parses frontmatter and content in a given string (no options required)', () => {
    const { data, content, errors } = parse(fixture1)
    expect(data.title).toBe('Hello, World')
    expect(data.meaning_of_life).toBe(42)
    expect(content.trim()).toBe('I am content.')
    expect(errors.length).toBe(0)
  })

  describe('frontmatter.stringify', () => {
    it('is exported', () => {
      expect(typeof parse.stringify).toBe('function')
    })
  })

  describe('YML parsing errors', () => {
    it('creates errors if YML has an unescaped quote', () => {
      const fixture = `---
intro: 'I've got an unescaped quote'
---

I am content.
`
      const { errors } = parse(fixture, { filepath })
      expect(errors.length).toBe(1)
      const expectedError = {
        filepath: 'path/to/file.md',
        message: 'YML parsing error!',
        reason: 'invalid frontmatter entry',
      }
      expect(errors[0]).toEqual(expectedError)
    })

    it('creates errors if YML has incorrect indentation', () => {
      const fixture = `---
title: Hello, World
 intro: 'I have a bad leading space'
---

I am content.
`
      const { errors } = parse(fixture, { filepath })
      expect(errors.length).toBe(1)
      const expectedError = {
        filepath: 'path/to/file.md',
        message: 'YML parsing error!',
        reason: 'bad indentation of a mapping entry',
      }
      expect(errors[0]).toEqual(expectedError)
    })
  })

  describe('schema', () => {
    it('is optional', () => {
      const schema = {
        properties: {
          title: {
            type: 'string',
          },
          meaning_of_life: {
            type: 'number',
          },
        },
      }

      const { data, content, errors } = parse(fixture1, { schema })
      expect(data.title).toBe('Hello, World')
      expect(data.meaning_of_life).toBe(42)
      expect(content.trim()).toBe('I am content.')
      expect(errors.length).toBe(0)
    })

    it('creates errors if frontmatter does not conform to schema', () => {
      const schema = {
        properties: {
          meaning_of_life: {
            type: 'number',
            minimum: 50,
          },
        },
      }

      const { data, content, errors } = parse(fixture1, { schema })
      expect(data.title).toBe('Hello, World')
      expect(data.meaning_of_life).toBe(42)
      expect(content.trim()).toBe('I am content.')
      expect(errors.length).toBe(1)
      const expectedError = {
        instancePath: '/meaning_of_life',
        schemaPath: '#/properties/meaning_of_life/minimum',
        keyword: 'minimum',
        params: {
          comparison: '>=',
          limit: 50,
        },
        message: 'must be >= 50',
      }
      expect(errors[0]).toEqual(expectedError)
    })

    it('creates errors if versions frontmatter does not match semver format', () => {
      const schema = { type: 'object', required: ['versions'], properties: {} }
      schema.properties.versions = Object.assign({}, frontmatterSchema.properties.versions)

      const { errors } = parse(fixture2, { schema })
      const expectedError = {
        instancePath: '/versions/ghes',
        schemaPath: '#/properties/versions/properties/ghes/errorMessage',
        keyword: 'errorMessage',
        params: {
          errors: [
            {
              instancePath: '/versions/ghes',
              schemaPath: '#/properties/versions/properties/ghes/format',
              keyword: 'format',
              params: {
                format: 'semver',
              },
              message: 'must match format "semver"',
              emUsed: true,
            },
          ],
        },
        message: 'Must be a valid SemVer range: "BAD_VERSION"',
      }

      expect(errors[0]).toEqual(expectedError)
    })

    it('creates errors if required frontmatter is not present', () => {
      const schema = {
        type: 'object',
        required: ['yet_another_key'],
        properties: {
          yet_another_key: {
            type: 'string',
          },
        },
      }

      const { errors } = parse(fixture1, { schema })
      expect(errors.length).toBe(1)
      const expectedError = {
        instancePath: '',
        schemaPath: '#/required',
        keyword: 'required',
        params: {
          missingProperty: 'yet_another_key',
        },
        message: "must have required property 'yet_another_key'",
      }
      expect(errors[0]).toEqual(expectedError)
    })
  })
})
