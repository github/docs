---
title: Configuração da mesclagem de commit para solicitações pull
intro: 'Você pode impor, permitir ou desabilitar a mesclagem com um commit de mesclagem para todas as mesclagens de solicitação pull em {% data variables.product.product_location %} em seu repositório.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit merging
ms.openlocfilehash: 322f74168935175a75f3a8f19cc4faca2cde174b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580720'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Em {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}"Solicitações de Pull"{% else %}"Mesclar botão"{% endif %}, selecione **Permitir commits de mesclagem**. Isso permite que os contribuidores mesclem uma solicitação pull com um histórico completo de commits.{% ifversion default-merge-squash-commit-message %} ![Captura de tela das configurações da solicitação de pull com caixa de seleção permitir commits de mesclagem realçada](/assets/images/help/repository/allow-merge-commits.png){% endif %}{% ifversion ghes = 3.6 %} ![Captura de tela das configurações de Solicitação de pull com caixa de seleção permitir commits de mesclagem realçada](/assets/images/help/repository/allow-merge-commits-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %}![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. Opcionalmente, em **Permitir commits de mesclagem**, use a lista suspensa para escolher o formato da mensagem de commit apresentada aos colaboradores ao mesclar. A mensagem padrão inclui o número e o título da solicitação de pull. Por exemplo, `Merge pull request #123 from patch-1`. Você também pode optar por usar apenas o título ou o título e a descrição da solicitação de pull. 
![Captura de tela da lista suspensa de mensagens de commit padrão realçada](/assets/images/help/repository/default-commit-message-dropdown.png) {% endif %}

Se você selecionar mais de um método de mesclagem, os colaboradores poderão escolher qual tipo de confirmação de mesclagem usar ao mesclar uma solicitação de pull. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## Leitura adicional

- "[Sobre as mesclagens de solicitações de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- "[Como mesclar uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"
