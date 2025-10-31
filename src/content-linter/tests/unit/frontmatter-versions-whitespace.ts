import { describe, expect, test } from 'vitest'

import { runRule } from '@/content-linter/lib/init-test'
import { frontmatterVersionsWhitespace } from '@/content-linter/lib/linting-rules/frontmatter-versions-whitespace'

// Configure the test fixture to not split frontmatter and content
const fmOptions = { markdownlintOptions: { frontMatter: null } }

interface ValidTestCase {
  name: string
  content: string
}

interface InvalidTestCase {
  name: string
  content: string
  expectedErrors: number
  expectedMessage?: string
}

// Valid cases - should pass
const validCases: ValidTestCase[] = [
  {
    name: 'valid-simple-versions',
    content: `---
title: Test
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.0'
---

# Test

This is a test.
`,
  },
  {
    name: 'valid-complex-operators',
    content: `---
title: Test
versions:
  ghes: '<3.6 >3.8'
  fpt: '*'
---

# Test

This is a test.
`,
  },
  {
    name: 'valid-no-versions',
    content: `---
title: Test
type: tutorial
---

# Test

This is a test.
`,
  },
]

// Invalid cases - should fail
const invalidCases: InvalidTestCase[] = [
  {
    name: 'trailing-whitespace',
    content: `---
title: Test
versions:
  fpt: '* '
  ghec: '*'
---

# Test

This is a test.
`,
    expectedErrors: 1,
    expectedMessage:
      "Versions frontmatter should not contain leading or trailing whitespace. Found: '* ', expected: '*'",
  },
  {
    name: 'leading-whitespace',
    content: `---
title: Test
versions:
  fpt: ' *'
  ghec: '*'
---

# Test

This is a test.
`,
    expectedErrors: 1,
    expectedMessage:
      "Versions frontmatter should not contain leading or trailing whitespace. Found: ' *', expected: '*'",
  },
  {
    name: 'both-leading-and-trailing',
    content: `---
title: Test
versions:
  fpt: ' * '
  ghec: '*'
---

# Test

This is a test.
`,
    expectedErrors: 1,
    expectedMessage:
      "Versions frontmatter should not contain leading or trailing whitespace. Found: ' * ', expected: '*'",
  },
  {
    name: 'multiple-version-whitespace-issues',
    content: `---
title: Test
versions:
  fpt: '* '
  ghec: ' *'
  ghes: '>=3.0'
---

# Test

This is a test.
`,
    expectedErrors: 2,
  },
  {
    name: 'internal-whitespace-simple-version',
    content: `---
title: Test
versions:
  fpt: 'f pt'
  ghec: '*'
---

# Test

This is a test.
`,
    expectedErrors: 1,
    expectedMessage:
      "Versions frontmatter should not contain leading or trailing whitespace. Found: 'f pt', expected: 'fpt'",
  },
]

describe(frontmatterVersionsWhitespace.names.join(' - '), () => {
  describe('valid cases', () => {
    validCases.forEach(({ name, content }) => {
      test(`${name} should pass`, async () => {
        const result = await runRule(frontmatterVersionsWhitespace, {
          strings: { content },
          ...fmOptions,
        })
        expect(result.content.length).toBe(0)
      })
    })
  })

  describe('invalid cases', () => {
    invalidCases.forEach(({ name, content, expectedErrors, expectedMessage }) => {
      test(`${name} should fail`, async () => {
        const result = await runRule(frontmatterVersionsWhitespace, {
          strings: { content },
          ...fmOptions,
        })
        expect(result.content.length).toBe(expectedErrors)

        if (expectedMessage) {
          expect(result.content[0].errorDetail).toBe(expectedMessage)
        }
      })
    })
  })

  describe('fixable errors', () => {
    test('should provide fix information for trailing whitespace', async () => {
      const content = `---
title: Test
versions:
  fpt: '* '
---

# Test
`
      const result = await runRule(frontmatterVersionsWhitespace, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(1)
      expect(result.content[0].fixInfo).toBeDefined()
      expect(result.content[0].fixInfo?.insertText).toBe('*')
    })

    test('should provide fix information for leading whitespace', async () => {
      const content = `---
title: Test
versions:
  fpt: ' *'
---

# Test
`
      const result = await runRule(frontmatterVersionsWhitespace, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(1)
      expect(result.content[0].fixInfo).toBeDefined()
      expect(result.content[0].fixInfo?.insertText).toBe('*')
    })
  })

  describe('edge cases', () => {
    test('should handle non-string version values', async () => {
      const content = `---
title: Test
versions:
  fpt: '*'
  feature: ['foo', 'bar']
---

# Test
`
      const result = await runRule(frontmatterVersionsWhitespace, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should handle missing versions frontmatter', async () => {
      const content = `---
title: Test
type: tutorial
---

# Test
`
      const result = await runRule(frontmatterVersionsWhitespace, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should allow complex operator expressions with spaces', async () => {
      const content = `---
title: Test
versions:
  ghes: '<3.6 >3.8'
  fpt: '*'
---

# Test
`
      const result = await runRule(frontmatterVersionsWhitespace, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should allow operator expressions with spaces around operators', async () => {
      const content = `---
title: Test
versions:
  ghes: '>= 3.0'
  fpt: '*'
---

# Test
`
      const result = await runRule(frontmatterVersionsWhitespace, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })
  })
})
