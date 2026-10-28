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
    // Liquid rendering expands the variable to plain text before slugging.
    const ids = computeHeadingIds(
      '## Disabling or enabling Copilot coding agent in your repositories',
    )
    expect(ids.has('disabling-or-enabling-copilot-coding-agent-in-your-repositories')).toBe(true)
  })

  test('ignores column-0 comments inside fenced code', () => {
    const ids = computeHeadingIds(
      '```bash\n# Install the dependencies\nnpm ci\n```\n\n## Next steps',
    )
    expect(ids.has('install-the-dependencies')).toBe(false)
    expect(ids.has('next-steps')).toBe(true)
  })

  test('does not treat the line after a lone # as heading text', () => {
    const ids = computeHeadingIds('#\necho hi')
    expect(ids.has('echo-hi')).toBe(false)
  })

  test('ignores --- underlines inside fenced YAML', () => {
    const ids = computeHeadingIds('```yaml\n---\nname: CI\n```')
    expect(ids.has('yaml')).toBe(false)
    expect(ids.size).toBe(0)
  })

  test('does not turn a closing fence followed by --- into a heading', () => {
    const ids = computeHeadingIds('```shell\nls\n```\n---\n')
    expect(ids.size).toBe(0)
  })

  test('masks tilde fences and indented fences in list items', () => {
    const ids = computeHeadingIds(
      '~~~shell\n# Tilde comment\n~~~\n\n1. Run this:\n\n   ```html\n   <a name="indented-anchor"></a>\n   ```\n',
    )
    expect(ids.has('tilde-comment')).toBe(false)
    expect(ids.has('indented-anchor')).toBe(false)
  })

  test('keeps headings after a fence opened on a list marker line', () => {
    const ids = computeHeadingIds(
      '1. ```shell\n   echo hi\n   ```\n\n## Next steps\n\n```bash\nls\n```\n',
    )
    expect(ids.has('next-steps')).toBe(true)
  })

  test('does not treat four-space-indented backticks as fences', () => {
    expect(computeHeadingIds('    ```\n## Real heading\n    ```\n').has('real-heading')).toBe(true)
    const ids = computeHeadingIds('```bash\n    ```\n## Still code\n```\n\n## After')
    expect(ids.has('still-code')).toBe(false)
    expect(ids.has('after')).toBe(true)
  })

  test('keeps the base ID for a real heading that repeats a code comment', () => {
    const ids = computeHeadingIds(
      '```bash\n# Install the dependencies\n```\n\n## Install the dependencies',
    )
    expect(ids.has('install-the-dependencies')).toBe(true)
    expect(ids.has('install-the-dependencies-1')).toBe(false)
  })
})
