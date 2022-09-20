---
title: Usar ações no GitHub AE
intro: '{% data variables.product.prodname_ghe_managed %} inclui a maioria das ações de autoria de {% data variables.product.prodname_dotcom %}.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/using-actions-in-github-ae
shortTitle: Use actions
ms.openlocfilehash: a8439a08f73667b7d048b31e2c9eb3968ba2e957
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095891'
---
Os fluxos de trabalho do {% data variables.product.prodname_actions %} podem usar _ações_, que são tarefas individuais que podem ser combinadas para criar trabalhos e personalizar seu fluxo de trabalho. Você pode criar suas próprias ações ou usar e personalizar ações compartilhadas pela comunidade {% data variables.product.prodname_dotcom %}.

## Ações oficiais incluídas no {% data variables.product.prodname_ghe_managed %}

A maioria das ações oficiais criadas pelo {% data variables.product.prodname_dotcom %} é empacotada automaticamente com o {% data variables.product.prodname_ghe_managed %} e capturada em um ponto no tempo do {% data variables.product.prodname_marketplace %}. Quando a sua instância do {% data variables.product.prodname_ghe_managed %} for atualizada, as ações oficiais empacotadas também serão atualizadas.

As ações oficiais empacotadas incluem `actions/checkout`, `actions/upload-artifact`, `actions/download-artifact` e `actions/labeler` e várias ações `actions/setup-`, entre outras. Para ver quais das ações oficiais estão incluídas, acesse as seguintes organizações na sua instância: 
- <code>https://<em>HOSTNAME</em>/actions</code>
- <code>https://<em>HOSTNAME</em>/github</code>

Os arquivos de cada ação são mantidos em um repositório nas organizações `actions` e `github`. Cada repositório de ação inclui as tags, branches e o commit necessários para que seus fluxos de trabalho possam usar para fazer referência à ação.
