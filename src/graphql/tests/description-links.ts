import { existsSync, readdirSync, readFileSync } from 'fs'
import path from 'path'

import { describe, expect, test } from 'vitest'

import helpers, { createSchemaHelpers } from '@/graphql/scripts/utils/schema-helpers'

const DATA_DIR = 'src/graphql/data'
const PLACEHOLDER_LINK =
  'See "[About code scanning alerts](${externalDocsUrl}/code-security/code-scanning#levels).".'

describe('GraphQL description links', () => {
  test('strips the unexpanded externalDocsUrl placeholder', async () => {
    const rendered = await helpers.getDescription(PLACEHOLDER_LINK)

    // Left in place the placeholder percent-encodes into the href and the
    // browser resolves it against the current page, which 404s.
    expect(rendered).not.toContain('externalDocsUrl')
    expect(rendered).toContain('href="/code-security/code-scanning#levels"')
  })

  test.each([
    ['free-pro-team@latest', '/en/code-security/code-scanning#levels'],
    ['enterprise-cloud@latest', '/en/enterprise-cloud@latest/code-security/code-scanning#levels'],
    ['enterprise-server@3.21', '/en/enterprise-server@3.21/code-security/code-scanning#levels'],
  ])('versions the link for %s', async (currentVersion, expected) => {
    const versioned = createSchemaHelpers({ currentLanguage: 'en', currentVersion })
    const rendered = await versioned.getDescription(PLACEHOLDER_LINK)

    expect(rendered).toContain(`href="${expected}"`)
  })

  test('leaves other link styles alone', async () => {
    expect(await helpers.getDescription('See [a](/code-security/x).')).toContain(
      'href="/code-security/x"',
    )
    expect(await helpers.getDescription('See [a](https://example.com/x).')).toContain(
      'href="https://example.com/x"',
    )
    // A bare placeholder with no path after it is not a link, so leave it.
    expect(await helpers.getDescription('Set ${externalDocsUrl} first.')).toContain(
      '${externalDocsUrl}',
    )
  })

  test('no shipped schema data still contains the placeholder', () => {
    const offenders = readdirSync(DATA_DIR, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => path.join(DATA_DIR, entry.name, 'schema-repos.json'))
      .filter((file) => existsSync(file) && readFileSync(file, 'utf-8').includes('externalDocsUrl'))

    expect(offenders).toEqual([])
  })
})
