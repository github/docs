import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { thirdPartyActionsReusable } from '../../lib/linting-rules/third-party-actions-reusable'

// Configure the test figure to not split frontmatter and content
const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe(thirdPartyActionsReusable.names.join(' - '), () => {
  describe('valid cases', () => {
    test('should pass when third-party actions have disclaimer', async () => {
      const content = `---
title: Test
---

# Test

This example shows proper usage:

{% data reusables.actions.actions-not-certified-by-github-comment %}

\`\`\`yaml copy
name: Test
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: pnpm/action-setup@v2
      with:
        version: 6.10.0
\`\`\`
`
      const result = await runRule(thirdPartyActionsReusable, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should pass when no third-party actions are used', async () => {
      const content = `---
title: Test
---

# Test

This example uses only GitHub actions:

\`\`\`yaml copy
name: Test
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
    - uses: github/super-action@v1
\`\`\`
`
      const result = await runRule(thirdPartyActionsReusable, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should pass when using reusables instead of direct action references', async () => {
      const content = `---
title: Test
---

# Test

This example uses reusables:

\`\`\`yaml copy
name: Test
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - uses: {% data reusables.actions.action-setup-node %}
\`\`\`
`
      const result = await runRule(thirdPartyActionsReusable, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should pass when disclaimer is within search range', async () => {
      const content = `---
title: Test
---

# Test

Some explanatory text here.

More text.

{% data reusables.actions.actions-not-certified-by-github-comment %}

Some additional notes.

\`\`\`yaml copy
name: Test
jobs:
  test:
    steps:
    - uses: azure/login@v1
\`\`\`
`
      const result = await runRule(thirdPartyActionsReusable, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should pass when disclaimer is inside code block', async () => {
      const content = `---
title: Test
---

# Test

This example has disclaimer inside the code block:

\`\`\`yaml copy

{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Test
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: swift-actions/setup-swift@v2
      with:
        swift-version: 5.3
\`\`\`
`
      const result = await runRule(thirdPartyActionsReusable, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should pass for non-YAML code blocks', async () => {
      const content = `---
title: Test
---

# Test

\`\`\`javascript
const actions = 'pnpm/action-setup@v2';
console.log(actions);
\`\`\`
`
      const result = await runRule(thirdPartyActionsReusable, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })
  })

  describe('invalid cases', () => {
    test('should fail when third-party action lacks disclaimer', async () => {
      const content = `---
title: Test
---

# Test

This example is missing the disclaimer:

\`\`\`yaml copy
name: Test
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: pnpm/action-setup@v2
      with:
        version: 6.10.0
\`\`\`
`
      const result = await runRule(thirdPartyActionsReusable, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(1)
      expect(result.content[0].errorDetail).toContain('pnpm/action-setup@v2')
      expect(result.content[0].errorDetail).toContain('actions-not-certified-by-github-comment')
    })

    test('should fail when multiple third-party actions lack disclaimer', async () => {
      const content = `---
title: Test
---

# Test

\`\`\`yaml copy
name: Test
jobs:
  test:
    steps:
    - uses: azure/login@v1
    - uses: pnpm/action-setup@v2
    - uses: docker/build-push-action@v3
\`\`\`
`
      const result = await runRule(thirdPartyActionsReusable, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(1)
      expect(result.content[0].errorDetail).toContain('azure/login@v1')
      expect(result.content[0].errorDetail).toContain('pnpm/action-setup@v2')
      expect(result.content[0].errorDetail).toContain('docker/build-push-action@v3')
    })

    test('should pass when disclaimer is close but not immediate', async () => {
      const content = `---
title: Test
---

# Test

{% data reusables.actions.actions-not-certified-by-github-comment %}

Some explanation text here.
More details about the example.

\`\`\`yaml copy
name: Test
jobs:
  test:
    steps:
    - uses: pnpm/action-setup@v2
\`\`\`
`
      const result = await runRule(thirdPartyActionsReusable, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should fail when disclaimer is outside search range', async () => {
      const content = `---
title: Test
---

# Test

{% data reusables.actions.actions-not-certified-by-github-comment %}

Some text here.
More text.
Line 1
Line 2
Line 3
Line 4
Line 5
Line 6
Line 7
Line 8
Line 9
Line 10
Line 11

\`\`\`yaml copy
name: Test
jobs:
  test:
    steps:
    - uses: pnpm/action-setup@v2
\`\`\`
`
      const result = await runRule(thirdPartyActionsReusable, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(1)
    })
  })

  describe('edge cases', () => {
    test('should handle mixed GitHub and third-party actions correctly', async () => {
      const content = `---
title: Test
---

# Test

{% data reusables.actions.actions-not-certified-by-github-comment %}

\`\`\`yaml copy
name: Test
jobs:
  test:
    steps:
    - uses: actions/checkout@v3  # GitHub action - OK
    - uses: github/super-action@v1  # GitHub action - OK
    - uses: pnpm/action-setup@v2  # Third-party - needs disclaimer
\`\`\`
`
      const result = await runRule(thirdPartyActionsReusable, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should handle actions with complex version specifiers', async () => {
      const content = `---
title: Test
---

# Test

{% data reusables.actions.actions-not-certified-by-github-comment %}

\`\`\`yaml copy
name: Test
jobs:
  test:
    steps:
    - uses: some-org/action@1.2.3
    - uses: another-org/tool@v1.0.0-beta.1
    - uses: company/action@main
    - uses: user/action@sha1234567890abcdef
\`\`\`
`
      const result = await runRule(thirdPartyActionsReusable, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should handle yaml copy blocks', async () => {
      const content = `---
title: Test
---

# Test

\`\`\`yaml copy
name: Test
jobs:
  test:
    steps:
    - uses: pnpm/action-setup@v2
\`\`\`
`
      const result = await runRule(thirdPartyActionsReusable, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(1)
    })

    test('should not match incomplete action references', async () => {
      const content = `---
title: Test
---

# Test

\`\`\`yaml copy
name: Test
jobs:
  test:
    steps:
    - uses: incomplete-action
    - uses: also/incomplete
    - name: Not an action reference
      run: echo "hello"
\`\`\`
`
      const result = await runRule(thirdPartyActionsReusable, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })
  })
})
