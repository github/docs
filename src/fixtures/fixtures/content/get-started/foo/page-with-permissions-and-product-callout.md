---
title: Page with permissions and product callout
shortTitle: Callout page
intro: A very short intro
permissions: This is a permission callout
product: '{% data reusables.gated-features.not-for-ghes %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## Heading

Note that this page uses the `product` and `permissions` frontmatter property. So it should
result in a call out box rendered with two messages. But only if the version is *not*
Enterprise Server.
