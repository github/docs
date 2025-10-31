import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test'
import { headerContentRequirement } from '../../lib/linting-rules/header-content-requirement'

// Configure the test fixture to not split frontmatter and content
const fmOptions = { markdownlintOptions: { frontMatter: null } }

describe(headerContentRequirement.names.join(' - '), () => {
  describe('valid cases', () => {
    test('should pass when headers have content between them', async () => {
      const content = `---
title: Test
---

# Main Header

This is introductory content for the main section.

## Subheader

This section has proper introduction content.

### Nested Subheader

More content here.
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should pass when headers are at the same level', async () => {
      const content = `---
title: Test
---

# First Header

Some content here.

# Second Header

More content here.

# Third Header

Even more content.
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should pass when subheader goes back to higher level', async () => {
      const content = `---
title: Test
---

## Level 2 Header

Content here.

# Level 1 Header

This is fine - going from h2 to h1.

## Another Level 2

More content.
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should pass with liquid conditionals between headers', async () => {
      const content = `---
title: Test
---

# Main Header

Some intro content.

{% ifversion fpt %}

## Conditional Subheader

This content appears conditionally.

{% endif %}
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should pass with lists between headers', async () => {
      const content = `---
title: Test
---

# Main Header

* Item 1
* Item 2
* Item 3

## Subheader

More content.
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should pass with code blocks between headers', async () => {
      const content = `---
title: Test
---

# Main Header

\`\`\`javascript
console.log('hello');
\`\`\`

## Subheader

More content.
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })
  })

  describe('invalid cases', () => {
    test('should fail when h1 is immediately followed by h2', async () => {
      const content = `---
title: Test
---

# Main Header

## Subheader

Content here.
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(1)
      expect(result.content[0].errorDetail).toContain('Header must have introductory content')
      expect(result.content[0].errorDetail).toContain('Main Header')
      expect(result.content[0].errorDetail).toContain('Subheader')
    })

    test('should fail when h2 is immediately followed by h3', async () => {
      const content = `---
title: Test
---

# Main Header

Some content here.

## Level 2 Header

### Level 3 Header

Content at level 3.
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(1)
      expect(result.content[0].errorDetail).toContain('Level 2 Header')
      expect(result.content[0].errorDetail).toContain('Level 3 Header')
    })

    test('should fail with multiple consecutive violations', async () => {
      const content = `---
title: Test
---

# Main Header

## Level 2 Header

### Level 3 Header

#### Level 4 Header

Content finally appears here.
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(3) // Three violations: h1->h2, h2->h3, h3->h4
    })

    test('should fail when only whitespace between headers', async () => {
      const content = `---
title: Test
---

# Main Header


## Subheader

Content here.
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(1)
    })

    test('should fail when only liquid tags without content between headers', async () => {
      const content = `---
title: Test
---

# Main Header

{% ifversion fpt %}
{% endif %}

## Subheader

Content here.
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(1)
    })
  })

  describe('edge cases', () => {
    test('should handle document with only one header', async () => {
      const content = `---
title: Test
---

# Only Header

Some content here.
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should handle deep nesting correctly', async () => {
      const content = `---
title: Test
---

# H1

Content for h1.

## H2

Content for h2.

### H3

Content for h3.

#### H4

Content for h4.

##### H5

Content for h5.

###### H6

Content for h6.
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should handle mixed content types between headers', async () => {
      const content = `---
title: Test
---

# Main Header

Some text content.

> Blockquote content.

{% data reusables.example.reusable %}

## Subheader

More content.
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })

    test('should handle frontmatter correctly', async () => {
      const content = `---
title: Test
versions:
  fpt: '*'
  ghec: '*'
---

# Main Header

## Subheader

Content here.
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(1)
    })

    test('should handle complex liquid blocks', async () => {
      const content = `---
title: Test
---

# Main Header

{% ifversion fpt %}
This content appears in FPT.
{% elsif ghec %}
This content appears in GHEC.
{% else %}
This content appears elsewhere.
{% endif %}

## Subheader

More content.
`
      const result = await runRule(headerContentRequirement, {
        strings: { content },
        ...fmOptions,
      })
      expect(result.content.length).toBe(0)
    })
  })
})
