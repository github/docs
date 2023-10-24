import yaml from 'js-yaml'
import { readFile } from 'fs/promises'
import walk from 'walk-sync'
import { jest } from '@jest/globals'

import { liquid } from '#src/content-render/index.js'
import learningTracksSchema from '../lib/learning-tracks-schema.js'
import { formatAjvErrors } from '../../../tests/helpers/schemas.js'
import { ajvValidate } from '../../../lib/ajv-validate.js'

const learningTrackRootPath = 'data/learning-tracks'
const jsonValidator = ajvValidate(learningTracksSchema)
const yamlWalkOptions = {
  globs: ['**/*.yml'],
  directories: false,
  includeBasePath: true,
}
const yamlFileList = walk(learningTrackRootPath, yamlWalkOptions).sort()

jest.useFakeTimers({ legacyFakeTimers: true })

describe('lint learning tracks', () => {
  if (yamlFileList.length < 1) return

  describe.each(yamlFileList)('%s', (yamlAbsPath) => {
    let yamlContent

    beforeAll(async () => {
      const fileContents = await readFile(yamlAbsPath, 'utf8')
      yamlContent = await yaml.load(fileContents)
    })

    it('matches the schema', () => {
      const valid = jsonValidator(yamlContent)
      let errors

      if (!valid) {
        errors = formatAjvErrors(jsonValidator.errors)
      }

      expect(valid, errors).toBe(true)
    })

    it('contains valid liquid', () => {
      const toLint = []
      Object.values(yamlContent).forEach(({ title, description }) => {
        toLint.push(title)
        toLint.push(description)
      })

      toLint.forEach((element) => {
        expect(() => liquid.parse(element), `${element} contains invalid liquid`).not.toThrow()
      })
    })
  })
})
