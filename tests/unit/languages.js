import revalidator from 'revalidator'
import languages from '../../lib/languages.js'
import schema from '../helpers/schemas/languages-schema.js'

describe('languages module', () => {
  test('is an object with language codes as keys', () => {
    expect('en' in languages).toBe(true)
    expect('ja' in languages).toBe(true)
    expect('cn' in languages).toBe(true)
  })

  test('every language is valid', () => {
    Object.values(languages).forEach((language) => {
      const { valid, errors } = revalidator.validate(language, schema)
      const expectation = JSON.stringify(errors, null, 2)
      expect(valid, expectation).toBe(true)
    })
  })
})
