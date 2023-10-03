import yaml from 'js-yaml'
import { readFile } from 'fs/promises'
import walk from 'walk-sync'
import path from 'path'
import { jest } from '@jest/globals'

import { liquid } from '#src/content-render/index.js'

const ghesReleaseNoteRootPath = 'data/release-notes'
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
    const relativePath = path.relative('', yamlAbsPath)

    beforeAll(async () => {
      const fileContents = await readFile(yamlAbsPath, 'utf8')
      yamlContent = yaml.load(fileContents)
    })

    it('contains valid liquid', () => {
      const { intro, sections } = yamlContent
      let toLint = { intro }
      for (const key in sections) {
        const section = sections[key]
        const label = `sections.${key}`
        section.forEach((part) => {
          if (Array.isArray(part)) {
            toLint = { ...toLint, ...{ [label]: section.join('\n') } }
          } else {
            for (const prop in section) {
              toLint = { ...toLint, ...{ [`${label}.${prop}`]: section[prop] } }
            }
          }
        })
      }

      for (const key in toLint) {
        if (!toLint[key]) continue
        expect(() => liquid.parse(toLint[key]), `${key} contains invalid liquid`).not.toThrow()
      }
    })

    const currentWeeksFound = []
    it('does not have more than one yaml file with currentWeek set to true', () => {
      if (!yamlAbsPath.includes('data/release-notes/github-ae')) return
      if (yamlContent.currentWeek) currentWeeksFound.push(relativePath)
      const errorMessage = `Found more than one file with currentWeek set to true: ${currentWeeksFound.join(
        '\n',
      )}`
      expect(currentWeeksFound.length, errorMessage).not.toBeGreaterThan(1)
    })
  })
})
