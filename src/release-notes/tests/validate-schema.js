import yaml from 'js-yaml'
import { readFile } from 'fs/promises'
import walk from 'walk-sync'
import { jest } from '@jest/globals'

import releaseNotesSchema from '../lib/release-notes-schema.js'
import { formatAjvErrors } from '#src/tests/helpers/schemas.js'
import { getJsonValidator } from '#src/tests/lib/validate-json-schema.js'

const ghesReleaseNoteRootPath = 'data/release-notes'
const validate = getJsonValidator(releaseNotesSchema)
const yamlWalkOptions = {
  globs: ['**/*.yml'],
  directories: false,
  includeBasePath: true,
}
const yamlFileList = walk(ghesReleaseNoteRootPath, yamlWalkOptions).sort()

jest.useFakeTimers({ legacyFakeTimers: true })

describe('lint enterprise release notes', () => {
  if (yamlFileList.length < 1) return
  describe.each(yamlFileList)('%s', (yamlAbsPath) => {
    let yamlContent

    beforeAll(async () => {
      const fileContents = await readFile(yamlAbsPath, 'utf8')
      yamlContent = yaml.load(fileContents)
    })

    it('matches the schema', () => {
      const isValid = validate(yamlContent)
      let errors

      if (!isValid) {
        errors = formatAjvErrors(validate.errors)
      }

      expect(isValid, errors).toBe(true)
    })
  })
})
