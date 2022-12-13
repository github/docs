---
title: Gerenciando merge automático para pull requests no seu repositório
intro: Você pode permitir ou impedir um merge automático de pull requests em seu repositório.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with maintainer permissions can manage auto-merge for pull requests in a repository.
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository
  - /github/administering-a-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository
shortTitle: Manage auto merge
ms.openlocfilehash: 4d0f0d465ea3c8551dc909d56620a06ee9864c1c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883438'
---
## Sobre o merge automático

Se você permitir uma merge automático para pull requests no seu repositório, as pessoas com permissões de gravação poderão configurar pull requests individuais no repositório para fazer merge automaticamente quando todos os requisitos de merge forem atendidos. Se alguém que não tiver permissão de gravação efetuar push de uma solicitação de pull que tenha a mesclagem automática habilitado, a mesclagem automática será desabilitada para essa solicitação de pull. Para obter mais informações, confira "[Mesclar uma solicitação de pull automaticamente](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)".

## Gerenciar merge automático

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Em {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"Solicitações de Pull"{% else %}"Botão Mesclar"{% endif %}, marque ou desmarque **Permitir mesclagem automática**.
  ![Caixa de seleção usada para permitir ou não permitir a mesclagem automática](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)
