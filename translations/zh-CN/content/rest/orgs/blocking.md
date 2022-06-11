---
title: 阻止用户
intro: ''
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

用于对调用进行身份验证的令牌必须具有 `admin:org` 作用域才可对组织进行任何阻止调用。 否则，响应将返回 `HTTP 404`。
