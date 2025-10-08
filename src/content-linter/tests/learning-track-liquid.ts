import yaml from 'js-yaml'
import { readFile } from 'fs/promises'

import walk from 'walk-sync'
import { beforeAll, describe, expect, test } from 'vitest'

import { liquid } from '@/content-render/index'

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
    // Using any type because YAML content structure is dynamic and varies per file
    let yamlContent: any

    beforeAll(async () => {
      const fileContents = await readFile(yamlAbsPath, 'utf8')
      yamlContent = await yaml.load(fileContents)
    })

    test('contains valid liquid', () => {
      // Using any[] for toLint since it contains mixed string content from various YAML properties
      const toLint: any[] = []
      // Using any for destructured params as YAML structure varies across different learning track files
      Object.values(yamlContent).forEach(({ title, description }: any) => {
        toLint.push(title)
        toLint.push(description)
      })

      toLint.forEach((element) => {
        expect(() => liquid.parse(element), `${element} contains invalid liquid`).not.toThrow()
      })
    })
  })
})
