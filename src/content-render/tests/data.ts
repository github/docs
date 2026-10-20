import { afterAll, beforeAll, describe, expect, test } from 'vitest'

import Page from '@/frame/lib/page'
import { liquid } from '@/content-render/index'
import languages from '@/languages/lib/languages-server'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { DataDirectory } from '@/tests/helpers/data-directory'

describe('data tag', () => {
  let dd: DataDirectory
  const enDirBefore = languages.en.dir

  beforeAll(() => {
    dd = new DataDirectory({
      data: {
        variables: {
          stuff: {
            foo: 'Foo',
          },
        },
        reusables: {
          indented_code: 'Intro\n\n```yaml\nfoo:\n  bar: 1\n  list:\n    - a\n```',
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
    // good-data-variable.md uses {% data variables.stuff.foo %} from the test data directory.
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

  test('keeps reusable indentation when the tag is inside a blockquote', async () => {
    const rendered = await liquid.parseAndRender(
      '> [!NOTE]\n> {% data reusables.indented_code %}\n',
      {
        currentLanguage: 'en',
        currentVersion: nonEnterpriseDefaultVersion,
      },
    )
    expect(rendered).toContain('> foo:\n>   bar: 1\n>   list:\n>     - a\n')
  })
})
