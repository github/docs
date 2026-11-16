import { describe, expect, test } from 'vitest'

import { renderContent } from '@/content-render/index'
import type { Context } from '@/types'

describe('use-english-headings rehype plugin', () => {
  const englishHeadings: Record<string, string> = {
    Introducción: 'Introduction',
    'Error: "Se requiere una dirección"': 'Error: "A verified email address is required"',
    "Erreur d'identité SAML": 'Conflicting SAML identity error',
    'Tom et Jerry & co': 'Tom & Jerry',
    'Exemple de jobs.<job_id>.env': 'Example of jobs.<job_id>.env',
  }

  async function render(markdown: string) {
    return renderContent(markdown, { englishHeadings } as unknown as Context)
  }

  test('uses the English slug for a plain heading', async () => {
    const html = await render('## Introducción')
    expect(html).toContain('id="introduction"')
  })

  test('uses the English slug for headings with special HTML characters', async () => {
    const html = await render(
      [
        '## Error: "Se requiere una dirección"',
        "## Erreur d'identité SAML",
        '### Tom et Jerry & co',
        '### Exemple de `jobs.<job_id>.env`',
      ].join('\n\n'),
    )
    expect(html).toContain('id="error-a-verified-email-address-is-required"')
    expect(html).toContain('id="conflicting-saml-identity-error"')
    expect(html).toContain('id="tom--jerry"')
    expect(html).toContain('id="example-of-jobsjob_idenv"')
  })

  test('keeps the translated slug when no English heading exists', async () => {
    const html = await render('## Sin cambios')
    expect(html).toContain('id="sin-cambios"')
  })
})
