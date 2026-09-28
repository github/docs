import { readFile } from 'fs/promises'
import walk from 'walk-sync'

import { beforeAll, describe, expect, test } from 'vitest'
import { load } from 'js-yaml'

import { liquid } from '@/content-render/index'
import { getDataByLanguage } from '@/data-directory/lib/get-data'
import { allVersions } from '@/versions/lib/all-versions'

interface ReleaseNoteContent {
  intro: string
  sections: {
    [key: string]: Array<string | { [prop: string]: string }>
  }
}

const ghesReleaseNoteRootPath = 'data/release-notes'
const yamlWalkOptions = {
  globs: ['**/*.yml'],
  directories: false,
  includeBasePath: true,
}
const yamlFileList = walk(ghesReleaseNoteRootPath, yamlWalkOptions).sort()

describe('lint enterprise release notes', () => {
  if (yamlFileList.length < 1) return
  describe.each(yamlFileList)('%s', (yamlAbsPath) => {
    let yamlContent: ReleaseNoteContent

    beforeAll(async () => {
      const fileContents = await readFile(yamlAbsPath, 'utf8')
      yamlContent = load(fileContents) as ReleaseNoteContent
    })

    test('contains valid liquid', async () => {
      const { intro, sections } = yamlContent
      let toLint: Record<string, string> = { intro }
      for (const key in sections) {
        const section = sections[key]
        const label = `sections.${key}`
        for (const part of section) {
          if (Array.isArray(part)) {
            toLint = { ...toLint, ...{ [label]: section.join('\n') } }
          } else {
            for (const prop in section) {
              const value = section[prop]
              if (typeof value === 'string') {
                toLint = { ...toLint, ...{ [`${label}.${prop}`]: value } }
              }
            }
          }
        }
      }

      const context = {
        currentLanguage: 'en',
        currentVersionObj: allVersions['free-pro-team@latest'],
        site: {
          data: {
            reusables: getDataByLanguage('reusables', 'en'),
            variables: getDataByLanguage('variables', 'en'),
            ui: getDataByLanguage('ui', 'en'),
          },
        },
      }

      for (const key in toLint) {
        if (!toLint[key]) continue
        expect(() => liquid.parse(toLint[key]), `${key} contains invalid liquid`).not.toThrow()
        await expect(
          liquid.parseAndRender(toLint[key], context),
          `${key} contains liquid that fails to render`,
        ).resolves.not.toThrow()
      }
    })
  })
})
