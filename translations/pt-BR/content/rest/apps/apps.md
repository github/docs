---
title: Aplicativos do GitHub
allowTitleToDifferFromFilename: true
intro: 'A API de {% data variables.product.prodname_github_apps %} permite que você recupere informações sobre {% data variables.product.prodname_github_apps %}.'
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## Sobre a API do {% data variables.product.prodname_github_apps %}

{% data reusables.apps.general-apps-restrictions %}

Esta página lista os pontos de extremidade que você pode acessar enquanto autenticado como um aplicativo GitHub. Consulte "[Efetuar a autenticação como um aplicativo GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)" para saber mais.

Quando autenticado como um aplicativo GitHub, a API dos aplicativos GitHub permite que você obtenha informações de alto nível sobre um aplicativo GitHub, bem como informações específicas sobre instalações de um aplicativo.

You can access REST API endpoints while authenticated as a GitHub App. Estes pontos de extremidade têm um texto que diz "Funciona com o aplicativo GitHub." Você também pode acessar esses pontos de extremidade enquanto estiver autenticado como usuário.

A subset of REST API endpoints requires authenticating as a GitHub App installation. Consulte [Instalações](/rest/reference/apps#installations) para obter uma lista desses pontos de extremidade.
