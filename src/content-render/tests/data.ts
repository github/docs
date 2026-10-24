import { afterAll, beforeAll, describe, expect, test } from 'vitest'

import Page from '@/frame/lib/page'
import { liquid } from '@/content-render/index'
import { renderLiquid } from '@/content-render/liquid/index'
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
          multi: 'First line.\n\nSecond paragraph.',
          'multi-longer': 'L1\nL2',
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

  test('prefixes only the blockquote use when a reusable appears in a blockquote first', async () => {
    const rendered = await renderLiquid(
      '> [!NOTE]\n> {% data reusables.multi %}\n\nText.\n\n{% data reusables.multi %}',
      { currentLanguage: 'en' },
    )
    expect(rendered).toBe(
      '> [!NOTE]\n> First line.\n> \n> Second paragraph.\n\nText.\n\nFirst line.\n\nSecond paragraph.',
    )
  })

  test('prefixes only the blockquote use when a reusable appears in a blockquote last', async () => {
    const rendered = await renderLiquid(
      '{% data reusables.multi %}\n\nText.\n\n> [!NOTE]\n> {% data reusables.multi %}',
      { currentLanguage: 'en' },
    )
    expect(rendered).toBe(
      'First line.\n\nSecond paragraph.\n\nText.\n\n> [!NOTE]\n> First line.\n> \n> Second paragraph.',
    )
  })

  test('does not prefix a reusable whose path is a prefix of a blockquoted reusable', async () => {
    const rendered = await renderLiquid(
      '> {% data reusables.multi-longer %}\n\n{% data reusables.multi %}',
      { currentLanguage: 'en' },
    )
    expect(rendered).toBe('> L1\n> L2\n\nFirst line.\n\nSecond paragraph.')
  })
})
