---
title: Mistyped frontmatter translation fallback
intro: Demonstrates falling back to English when a translated frontmatter value has the wrong type.
versions:
  fpt: "*"
  ghes: "*"
  ghec: "*"
---

## Intro

This page exists to test that a translated file with valid YAML but a
translatable frontmatter value of the wrong type, such as an empty `title`
or a number for `intro`, falls back to the English value for that key.
