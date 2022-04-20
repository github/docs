---
title: Teams
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

This API is only available to authenticated members of the team's [organization](/rest/reference/orgs). OAuth access tokens require the `read:org` [scope](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). {% data variables.product.prodname_dotcom %}  generates the team's `slug` from the team `name`.
