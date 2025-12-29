import { afterAll, beforeAll, describe, expect, test } from 'vitest'

import Page from '@/frame/lib/page'
import languages from '@/languages/lib/languages-server'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { DataDirectory } from '@/tests/helpers/data-directory'

describe('data tag', () => {
  // Using 'any' type as DataDirectory is from data-directory.ts which lacks type definitions
  let dd: any
  const enDirBefore = languages.en.dir

  beforeAll(() => {
    dd = new DataDirectory({
      data: {
        variables: {
          stuff: {
            foo: 'Foo',
          },
        },
        ui: {
          alerts: {},
        },
      },
    })
    languages.en.dir = dd.root
  })

  afterAll(() => {
    if (dd) dd.destroy()
    languages.en.dir = enDirBefore
  })

  test('should render fine if data is found', async () => {
    const page = await Page.init({
      relativePath: 'liquid-tags/good-data-variable.md',
      basePath: './src/fixtures/fixtures',
      languageCode: 'en',
    })
    const context = {
      currentVersion: nonEnterpriseDefaultVersion,
      currentLanguage: 'en',
      currentPath: '/en/liquid-tags/good-data-variable',
    }
    const rendered = await page!.render(context)
    // The test fixture contains:
    //   {% data variables.stuff.foo %}
    // which we control the value of here in the test.
    expect(rendered.includes('Foo')).toBeTruthy()
  })
  test('should throw if the data tag is used with something unrecognized', async () => {
    const page = await Page.init({
      relativePath: 'liquid-tags/bad-data-variable.md',
      basePath: './src/fixtures/fixtures',
      languageCode: 'en',
    })
    const context = {
      currentPath: '/en/liquid-tags/bad-data-variable',
      currentLanguage: 'en',
    }
    await expect(page!.render(context)).rejects.toThrow(
      "Can't find the key 'foo.bar.tipu' in the scope., line:2, col:1",
    )
  })
})
