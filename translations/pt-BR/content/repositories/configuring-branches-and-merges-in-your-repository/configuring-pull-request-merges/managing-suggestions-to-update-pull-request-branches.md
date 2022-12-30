---
title: Gerenciando sugestões para atualizar os branches do pull request
intro: Você pode dar aos usuários a capacidade de sempre atualizar um branch de pull request quando ele não estiver atualizado com o branch de base.
versions:
  fpt: '*'
  ghes: '> 3.4'
  ghae: '>= 3.5'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage branch updates
permissions: People with maintainer permissions can enable or disable the setting to suggest updating pull request branches.
ms.openlocfilehash: a29e2e9d11b24287cdad71b71f617a58e64df297
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578607'
---
## Sobre sugestões para atualizar um branch de pull request

Se você habilitar a configuração para sempre sugerir a atualização de branches de pull request no repositório, as pessoas com permissões de gravação sempre poderão, na página do pull request, atualizar o branch principal de um pull request quando ele não estiver atualizado com o branch de base. Quando habilitado, a capacidade de atualização só estará disponível quando o branch de base exigir que os branches estejam atualizados antes do merge e que o branch não esteja atualizado. Para obter mais informações, confira "[Como manter sua solicitação de pull em sincronia com o branch base](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)".

{% data reusables.enterprise.3-5-missing-feature %}

## Gerenciando sugestões para atualizar um branch de pull request

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Em "Solicitações de Pull", marque ou desmarque **Sempre sugerir a atualização de branches de solicitação de pull**.
  ![Caixa de seleção usada para habilitar ou desabilitar a sugestão contínua de atualização do branch](/assets/images/help/repository/always-suggest-updating-branches.png)
