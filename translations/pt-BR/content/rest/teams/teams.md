---
title: Equipes
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

Esta API só está disponível para os integrantes autenticados da [organização](/rest/reference/orgs) da equipe. Os tokens de acesso do OAuth exigem o escopo `read:org` [](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). {% data variables.product.prodname_dotcom %}  gera o `slug` da equipe a partir do `nome` da equipe.
