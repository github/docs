import { afterAll, beforeAll, expect, describe, it } from '@jest/globals'

import Page from '../../../lib/page.js'
import languages from '#src/languages/lib/languages.js'
import nonEnterpriseDefaultVersion from '#src/versions/lib/non-enterprise-default-version.js'
import { DataDirectory } from '../../../tests/helpers/data-directory.js'

describe('data tag', () => {
  let dd
  const enDirBefore = languages.en.dir

  beforeAll(() => {
    dd = new DataDirectory({
      data: {
        variables: {
          stuff: {
            foo: 'Foo',
          },
        },
      },
    })
    languages.en.dir = dd.root
  })

  afterAll(() => {
    if (dd) dd.destroy()
    languages.en.dir = enDirBefore
  })

  it('should render fine if data is found', async () => {
    const page = await Page.init({
      relativePath: 'liquid-tags/good-data-variable.md',
      basePath: './tests/fixtures',
      languageCode: 'en',
    })
    const context = {
      currentVersion: nonEnterpriseDefaultVersion,
      currentLanguage: 'en',
      currentPath: '/en/liquid-tags/good-data-variable',
    }
    const rendered = await page.render(context)
    // The test fixture contains:
    //   {% data variables.stuff.foo %}
    // which we control the value of here in the test.
    expect(rendered.includes('Foo')).toBeTruthy()
  })
  it('should throw if the data tag is used with something unrecognized', async () => {
    const page = await Page.init({
      relativePath: 'liquid-tags/bad-data-variable.md',
      basePath: './tests/fixtures',
      languageCode: 'en',
    })
    const context = {
      currentPath: '/en/liquid-tags/bad-data-variable',
      currentLanguage: 'en',
    }
    await expect(page.render(context)).rejects.toThrow(
      "Can't find the key 'foo.bar.tipu' in the scope., line:2, col:1",
    )
  })
})
