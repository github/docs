---
title: Team
intro: Team APIを使うと、GitHub Organization内のTeamの作成や管理ができます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

この API は、Team の [Organization](/rest/reference/orgs) の、認証済みメンバーのみが利用できます。 OAuth のアクセストークンは、 `read:org` [スコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)を必要とします。 {% data variables.product.prodname_dotcom %} は、Team の `name` からTeam の `slug` を生成します。
