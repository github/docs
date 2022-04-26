---
title: Equipos
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

Esta API solo está disponible para los miembros autenticados de la [organization](/rest/reference/orgs) del equipo. Los tokens de acceso de OAuth requieren el [alcance](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) `read:org`. {% data variables.product.prodname_dotcom %} genera el `slug` del equipo a partir del `name` del mismo.
