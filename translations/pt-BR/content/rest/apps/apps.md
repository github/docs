---
title: Aplicativos do GitHub
allowTitleToDifferFromFilename: true
intro: 'The {% data variables.product.prodname_github_apps %} API enables you to retrieve information about {% data variables.product.prodname_github_apps %}.'
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## About the {% data variables.product.prodname_github_apps %} API

{% data reusables.apps.general-apps-restrictions %}

Esta página lista os pontos de extremidade que você pode acessar enquanto autenticado como um aplicativo GitHub. Consulte "[Efetuar a autenticação como um aplicativo GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)" para saber mais.

Quando autenticado como um aplicativo GitHub, a API dos aplicativos GitHub permite que você obtenha informações de alto nível sobre um aplicativo GitHub, bem como informações específicas sobre instalações de um aplicativo.

Você pode acessar os pontos de extremidade da API v3 de REST enquanto autenticado como um aplicativo GitHub. These endpoints have text that says "Works with GitHub Apps." Você também pode acessar esses pontos de extremidade enquanto estiver autenticado como usuário.

Um subconjunto de pontos de extremidade da API v2 de REST exige autenticação como uma instalação do aplicativo GitHub. Consulte [Instalações](/rest/reference/apps#installations) para obter uma lista desses pontos de extremidade.
