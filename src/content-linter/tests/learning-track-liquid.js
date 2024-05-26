import yaml from 'js-yaml'
import { readFile } from 'fs/promises'

import walk from 'walk-sync'
import { beforeAll, describe, expect, test } from 'vitest'

import { liquid } from '#src/content-render/index.js'

const learningTrackRootPath = 'data/learning-tracks'
const yamlWalkOptions = {
  globs: ['**/*.yml'],
  directories: false,
  includeBasePath: true,
}
const yamlFileList = walk(learningTrackRootPath, yamlWalkOptions).sort()

describe('lint learning tracks', () => {
  if (yamlFileList.length < 1) return

  describe.each(yamlFileList)('%s', (yamlAbsPath) => {
    let yamlContent

    beforeAll(async () => {
      const fileContents = await readFile(yamlAbsPath, 'utf8')
      yamlContent = await yaml.load(fileContents)
    })

    test('contains valid liquid', () => {
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
