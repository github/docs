import { describe, expect, test } from 'vitest'

import { computeHeadingIds, headingTextToPlain } from '../lib/heading-anchors'

describe('headingTextToPlain', () => {
  test('leaves plain text unchanged', () => {
    expect(headingTextToPlain('Configuring proxy settings')).toBe('Configuring proxy settings')
  })

  test('strips inline markdown formatting', () => {
    expect(headingTextToPlain('**Bold** and *italic* text')).toBe('Bold and italic text')
    expect(headingTextToPlain('__Bold__ and _italic_ text')).toBe('Bold and italic text')
  })

  test('extracts link and image text', () => {
    expect(headingTextToPlain('See [the guide](/actions) here')).toBe('See the guide here')
    expect(headingTextToPlain('![alt text](/img.png) caption')).toBe('alt text caption')
  })

  test('preserves inline code spans verbatim, including angle-bracket placeholders', () => {
    expect(headingTextToPlain('Use `<job_id>` in your workflow')).toBe(
      'Use <job_id> in your workflow',
    )
  })

  test('strips HTML/octicon tags but keeps underscore placeholders outside code', () => {
    expect(headingTextToPlain('Allow <svg class="octicon"></svg>')).toBe('Allow ')
    expect(headingTextToPlain('Set <job_id> here')).toBe('Set job_id here')
  })
})

describe('computeHeadingIds', () => {
  test('slugs ATX headings', () => {
    const ids = computeHeadingIds(
      '## Configuring proxy settings for Copilot\n\ntext\n\n### Usage limits and policy',
    )
    expect(ids.has('configuring-proxy-settings-for-copilot')).toBe(true)
    expect(ids.has('usage-limits-and-policy')).toBe(true)
  })

  test('slugs Setext headings', () => {
    const ids = computeHeadingIds('Introduction\n============\n\nDetails\n-------')
    expect(ids.has('introduction')).toBe(true)
    expect(ids.has('details')).toBe(true)
  })

  test('dedupes repeated headings with github-slugger suffixes', () => {
    const ids = computeHeadingIds('## Overview\n\n## Overview')
    expect(ids.has('overview')).toBe(true)
    expect(ids.has('overview-1')).toBe(true)
  })

  test('captures explicit <a name>/<a id> anchors', () => {
    const ids = computeHeadingIds('<a name="legacy-anchor"></a>\n\n<a id="another-anchor"></a>')
    expect(ids.has('legacy-anchor')).toBe(true)
    expect(ids.has('another-anchor')).toBe(true)
  })

  test('reproduces Liquid-rendered heading with variable already expanded', () => {
    // After Liquid render, the variable is expanded to plain text; the full slug includes it.
    const ids = computeHeadingIds(
      '## Disabling or enabling Copilot coding agent in your repositories',
    )
    expect(ids.has('disabling-or-enabling-copilot-coding-agent-in-your-repositories')).toBe(true)
  })
})
