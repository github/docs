---
title: Link rewriting
intro: 'When rendered, links are rewriting to perfection for viewing'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: quick_start
---

## Internal links never need language prefix

"[AUTOTITLE](/get-started/foo/cross-version-linking)" already tests things
like `/enterprise-server@latest/` becomes `/enterprise-server@X.Y/` where
`X.Y` is the latest Enterprise server version.

## External links are left alone

[@peterbe](https://github.com/peterbe)

## Legacy enterprise links

For example, [this Enterprise 11.10 link](/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release).

## Links to `assets` and `public`

Here's a [Picture](/assets/images/_fixtures/screenshot.png).

[A GraphQL Schema](/public/schema.docs.graphql)
