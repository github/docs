---
title: Aplicativos GitHub
allowTitleToDifferFromFilename: true
intro: 'A API {% data variables.product.prodname_github_apps %} permite que você recupere informações sobre {% data variables.product.prodname_github_apps %}.'
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: b9bb851837d7a5c61a74917eacf2154e7f29bc71
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146769186'
---
## Sobre a API {% data variables.product.prodname_github_apps %}

{% data reusables.apps.general-apps-restrictions %}

Esta página lista os pontos de extremidade que você pode acessar enquanto autenticado como um aplicativo GitHub. Confira "[Autenticação como um Aplicativo do GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)" para saber mais.

Quando autenticado como um aplicativo GitHub, a API dos aplicativos GitHub permite que você obtenha informações de alto nível sobre um aplicativo GitHub, bem como informações específicas sobre instalações de um aplicativo.

Você pode acessar os pontos de extremidade da API REST enquanto autenticado como um aplicativo GitHub. Esses pontos de extremidade têm um texto que diz "Funciona com Aplicativos do GitHub". Você também pode acessar esses pontos de extremidade enquanto estiver autenticado como usuário.

Um subconjunto de pontos de extremidade da API REST exige autenticação como uma instalação do aplicativo GitHub. Confira [Instalações](/rest/reference/apps#installations) para ver uma lista desses pontos de extremidade.
