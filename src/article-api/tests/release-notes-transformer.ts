import { describe, expect, test, vi } from 'vitest'

import type { Context, GHESReleasePatch, Page } from '@/types'
import {
  ReleaseNotesTransformer,
  renderReleaseNotesMarkdown,
} from '@/article-api/transformers/release-notes-transformer'

// Mock renderContent so the unit tests don't need fixtures and so we can
// assert that markdownRequested: true is always threaded through. The mock
// returns the input unchanged so we can verify the output shape.
vi.mock('@/content-render/index', () => ({
  renderContent: vi.fn(async (template: string, ctx: { markdownRequested?: boolean }) => {
    if (!ctx?.markdownRequested) {
      throw new Error('renderContent was called without markdownRequested: true')
    }
    return template
  }),
}))

// Mock the release notes loader so the unit tests don't depend on fixtures
// existing on disk. Returns empty data, which makes the "release not found"
// branch in transform() the deterministic outcome.
vi.mock('@/release-notes/middleware/get-release-notes', () => ({
  getReleaseNotes: vi.fn(() => ({})),
}))

const makeContext = (overrides: Partial<Context> = {}): Context =>
  ({
    currentVersion: 'enterprise-server@3.21',
    currentLanguage: 'en',
    ...overrides,
  }) as Context

const makePage = (overrides: Partial<Page> = {}): Page =>
  ({
    layout: 'release-notes',
    title: 'GitHub Enterprise Server 3.21 release notes',
    intro: '',
    renderProp: async () => '',
    ...overrides,
  }) as unknown as Page

const samplePatch = (): GHESReleasePatch => ({
  version: '3.21.0',
  patchVersion: '0',
  downloadVersion: '3.21.0',
  release: '3.21',
  date: '2026-05-26',
  intro: 'Intro paragraph for this patch.',
  sections: {
    features: ['A new feature note.'],
    bugs: ['A bug was fixed.', 'Another bug was fixed.'],
    known_issues: [
      { heading: 'Instance administration', notes: ['Sub note one.', 'Sub note two.'] },
    ],
    security_fixes: ['**CRITICAL**: Something serious.'],
  },
})

describe('ReleaseNotesTransformer', () => {
  describe('canTransform', () => {
    test('matches pages with layout: release-notes', () => {
      const transformer = new ReleaseNotesTransformer()
      expect(transformer.canTransform(makePage({ layout: 'release-notes' }))).toBe(true)
    })

    test('does not match pages with other layouts', () => {
      const transformer = new ReleaseNotesTransformer()
      expect(transformer.canTransform(makePage({ layout: 'default' } as unknown as Page))).toBe(
        false,
      )
      expect(transformer.canTransform(makePage({ layout: undefined } as unknown as Page))).toBe(
        false,
      )
    })
  })

  describe('transform error paths', () => {
    test('throws when currentVersion is missing', async () => {
      const transformer = new ReleaseNotesTransformer()
      await expect(
        transformer.transform(
          makePage(),
          '/x',
          makeContext({ currentVersion: undefined as unknown as string }),
        ),
      ).rejects.toThrow(/No currentVersion/)
    })

    test('throws when plan is not enterprise-server', async () => {
      const transformer = new ReleaseNotesTransformer()
      await expect(
        transformer.transform(
          makePage(),
          '/x',
          makeContext({ currentVersion: 'free-pro-team@latest' }),
        ),
      ).rejects.toThrow(/only supports enterprise-server/)
    })

    test('throws when release is not found', async () => {
      const transformer = new ReleaseNotesTransformer()
      await expect(
        transformer.transform(
          makePage(),
          '/x',
          makeContext({ currentVersion: 'enterprise-server@0.0' }),
        ),
      ).rejects.toThrow(/No release notes found/)
    })
  })
})

describe('renderReleaseNotesMarkdown', () => {
  test('builds H1 title and intro', async () => {
    const out = await renderReleaseNotesMarkdown('My Title', 'Intro line.', [], makeContext())
    expect(out).toMatch(/^# My Title\n\nIntro line\.$/)
  })

  test('renders H2 per patch and H3 per section with bulleted notes', async () => {
    const out = await renderReleaseNotesMarkdown('Title', '', [samplePatch()], makeContext())

    expect(out).toContain('## 3.21.0')
    expect(out).toContain('**Release date:** 2026-05-26')
    expect(out).toContain('Intro paragraph for this patch.')

    expect(out).toContain('### Features')
    expect(out).toContain('- A new feature note.')

    expect(out).toContain('### Bug fixes')
    expect(out).toContain('- A bug was fixed.')
    expect(out).toContain('- Another bug was fixed.')

    expect(out).toContain('### Security fixes')
    expect(out).toContain('- **CRITICAL**: Something serious.')
  })

  test('renders { heading, notes } as a nested bulleted list', async () => {
    const out = await renderReleaseNotesMarkdown('Title', '', [samplePatch()], makeContext())

    expect(out).toContain('### Known issues')
    // Heading is a top-level bullet, sub-notes are nested under it.
    expect(out).toContain('- **Instance administration**')
    expect(out).toMatch(
      /- \*\*Instance administration\*\*\n {2}- Sub note one\.\n {2}- Sub note two\./,
    )
  })

  test('preserves multi-line notes with continuation indent', async () => {
    const patch: GHESReleasePatch = {
      ...samplePatch(),
      sections: { features: ['Line one.\n\nLine two.'] },
    }
    const out = await renderReleaseNotesMarkdown('Title', '', [patch], makeContext())
    expect(out).toMatch(/- Line one\.\n\n {2}Line two\./)
  })

  test('throws on unrecognized note shape', async () => {
    const patch: GHESReleasePatch = {
      ...samplePatch(),
      sections: { features: [{ unknown: 'shape' } as unknown as string] },
    }
    await expect(renderReleaseNotesMarkdown('Title', '', [patch], makeContext())).rejects.toThrow(
      /Unrecognized release note shape/,
    )
  })

  test('uses raw section key when label is unknown', async () => {
    const patch: GHESReleasePatch = {
      ...samplePatch(),
      sections: { custom_section: ['A note.'] } as unknown as GHESReleasePatch['sections'],
    }
    const out = await renderReleaseNotesMarkdown('Title', '', [patch], makeContext())
    expect(out).toContain('### custom_section')
  })

  test('skips empty sections', async () => {
    const patch: GHESReleasePatch = {
      ...samplePatch(),
      sections: { features: [], bugs: ['A bug.'] },
    }
    const out = await renderReleaseNotesMarkdown('Title', '', [patch], makeContext())
    expect(out).not.toContain('### Features')
    expect(out).toContain('### Bug fixes')
  })
})
