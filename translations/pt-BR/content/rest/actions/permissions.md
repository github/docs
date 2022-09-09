---
title: Permissões de GitHub Actions
allowTitleToDifferFromFilename: true
shortTitle: Permissions
intro: 'A API de permissões do {% data variables.product.prodname_actions %} permite definir quais empresas, organizações e repositórios têm permissão para executar o {% data variables.product.prodname_actions %} e quais ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} podem ser executados.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 33dce77111812ba9cf5b05a170bc713c3506c00e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060671'
---
## Sobre a API de Permissões

A API de permissões do {% data variables.product.prodname_actions %} permite definir permissões para quais empresas, organizações e repositórios têm permissão para executar {% data variables.product.prodname_actions %} e quais ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} podem ser executados.{% ifversion fpt or ghec or ghes %} Para obter mais informações, confira "[Limites de uso, cobrança e administração](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)."{% endif %}
