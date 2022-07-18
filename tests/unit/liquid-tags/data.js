import { expect } from '@jest/globals'
import path from 'path'
import Page from '../../../lib/page.js'
import nonEnterpriseDefaultVersion from '../../../lib/non-enterprise-default-version.js'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe('data tag', () => {
  it('should render fine if data is found', async () => {
    const page = await Page.init({
      relativePath: 'liquid-tags/good-data-variable.md',
      basePath: path.join(__dirname, '../../fixtures'),
      languageCode: 'en',
    })
    const context = {
      currentVersion: nonEnterpriseDefaultVersion,
      currentLanguage: 'en',
      currentPath: '/en/liquid-tags/good-data-variable',
    }
    const rendered = await page.render(
      Object.assign(
        {
          site: {
            data: {
              variables: {
                foo: 'Foo',
              },
            },
          },
        },
        context
      )
    )
    // The test fixture contains:
    //   {% data variables.foo %}
    // which we control the value of here in the test.
    expect(rendered.includes('Foo')).toBeTruthy()
  })
  it('should throw if the data tag is used with something unrecognized', async () => {
    const page = await Page.init({
      relativePath: 'liquid-tags/bad-data-variable.md',
      basePath: path.join(__dirname, '../../fixtures'),
      languageCode: 'en',
    })
    const context = {
      currentPath: '/en/liquid-tags/bad-data-variable',
    }
    await expect(page.render(context)).rejects.toThrow(
      "Can't find the key 'site.data.foo.bar.tipu' in the scope., line:2, col:1"
    )
  })
})
