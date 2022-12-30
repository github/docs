---
title: Segredos de Dependabot
shortTitle: Secrets
intro: 'Com a API de segredos do {% data variables.product.prodname_dependabot %}, você pode gerenciar e controlar segredos de {% data variables.product.prodname_dependabot %} para uma organização ou repositório.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 0cabee9ace44e75d8fcd2ce81aa9d7583b39e59d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882284'
---
## Sobre a API de segredos {% data variables.product.prodname_dependabot %}

A API de segredos {% data variables.product.prodname_dependabot %} permite criar, atualizar, excluir e recuperar informações sobre segredos criptografados. {% data reusables.actions.about-secrets %} Para obter mais informações, confira "[Como gerenciar segredos criptografados do Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)".

{% data reusables.actions.actions-authentication %}Os {% data variables.product.prodname_github_apps %} precisam ter a permissão `dependabot_secrets` para usar essa API. Os usuários autenticados devem ter acesso de colaborador em um repositório para criar, atualizar ou ler segredos.
