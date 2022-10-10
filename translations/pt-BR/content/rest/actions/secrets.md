---
title: Segredos do GitHub Actions
allowTitleToDifferFromFilename: true
shortTitle: Secrets
intro: 'A API de Segredos {% data variables.product.prodname_actions %} permite que você crie, atualize, exclua e recupere informações sobre segredos criptografados que podem ser usados em fluxos de trabalho do {% data variables.product.prodname_actions %}.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: bd72024abd61feb6b69e3efb09d1ddc2b8f27a23
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061976'
---
## Sobre a API de Segredos

A API de Segredos {% data variables.product.prodname_actions %} permite que você crie, atualize, exclua e recupere informações sobre segredos criptografados que podem ser usados em fluxos de trabalho do {% data variables.product.prodname_actions %}. {% data reusables.actions.about-secrets %} Para obter mais informações, confira "[Como criar e usar segredos criptografados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

{% data reusables.actions.actions-authentication %}Os {% data variables.product.prodname_github_apps %} precisam ter a permissão `secrets` para usar essa API. Os usuários autenticados devem ter acesso de colaborador em um repositório para criar, atualizar ou ler segredos.
