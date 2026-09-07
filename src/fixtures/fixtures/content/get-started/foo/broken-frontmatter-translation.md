---
title: Broken frontmatter translation fallback
intro: Demonstrates falling back to English when a translation's frontmatter is corrupted.
versions:
  fpt: "*"
  ghes: "*"
  ghec: "*"
---

## Intro

This page exists to test that a translated file whose frontmatter is corrupted
into a non-object (for example, fullwidth colons replacing the ASCII `:`
separators) falls back to the English title instead of rendering an empty title.
