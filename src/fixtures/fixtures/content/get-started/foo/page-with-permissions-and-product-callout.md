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

<!--
  The only CTA button in the fixture content: the regression guard for the `:not(.btn)`
  exclusion in src/frame/stylesheets/article-link-overrides.scss, scanned by axe via
  src/fixtures/tests/playwright-a11y.spec.ts. It has to be `btn-primary` (only the filled
  variant puts the label on a coloured fill, where the override's link blue fell under
  4.5:1) and it has to be in the BODY, not in `product:` — the frontmatter callouts render
  outside `.markdown-body`, and a CTA there would also break the byte-for-byte assertions
  in src/fixtures/tests/permissions-callout.ts.
-->

<a href="https://github.com/pricing" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_pages %}</span> {% octicon "link-external" %}</a>
