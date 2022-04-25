---
title: 团队
intro: 'With the Teams API, you can create and manage teams in your GitHub organization.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

此 API 仅适用于团队[组织](/rest/reference/orgs)中经过身份验证的成员。 OAuth 访问令牌需要 `read:org` [scope](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)。 {% data variables.product.prodname_dotcom %}  从团队 `name` 生成团队的 `slug`。
