---
title: Blocking users
intro: ''
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

The token used to authenticate the call must have the `admin:org` scope in order to make any blocking calls for an organization. Otherwise, the response returns `HTTP 404`.