---
title: Multi-Carousel Test Page
intro: "A test page for testing multiple carousels with articles."
versions:
  fpt: "*"
  ghes: "*"
  ghec: "*"
layout: discovery-landing
carousels:
  # This has a matching key in ui.yml -> should display "Recommended" title
  recommended:
    - /get-started/foo/bar
    - /get-started/foo/autotitling
    - /get-started/foo/for-playwright
  # This has NO matching key in ui.yml -> should display no title
  titleTwoNoMatchingUiYml:
    - /get-started/foo/for-playwright
    - /get-started/foo/autotitling
    - /get-started/foo/bar
children:
  - /placeholder
---

This page tests multiple carousels.
Each carousel can have a different set of articles, and the title comes from ui.yml if the key matches.
