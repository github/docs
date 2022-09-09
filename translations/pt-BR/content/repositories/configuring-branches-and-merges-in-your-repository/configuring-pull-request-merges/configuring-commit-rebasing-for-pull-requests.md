---
title: Configurar rebase do commit para pull requests
intro: 'Você pode aplicar, permitir ou desabilitar o rebase do commit para todos os merges da pull request no {% data variables.product.product_location %} do seu repositório.'
redirect_from:
  - /articles/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-rebasing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit rebasing
ms.openlocfilehash: e2614349b5baab9be33d1fe6d80a99a78811d8df
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580524'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Em {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}"Solicitações de Pull"{% else %}"Botão Mesclar"{% endif %}, selecione **Permitir mesclagem com troca de base**. Isso permite que os contribuidores façam merge de uma pull request fazendo rebase dos respectivos commits individuais no branch base. 
{% ifversion default-merge-squash-commit-message %} ![Captura de tela das configurações de Solicitação de Pull com caixa de seleção permitir mesclagem de troca de base enfatizada](/assets/images/help/repository/allow-rebase-merging.png){% endif %}{% ifversion ghes = 3.6  %} ![Captura de tela das configurações de Solicitação de Pull com caixa de seleção permitir mesclagem de troca de base enfatizada](/assets/images/help/repository/allow-rebase-merging-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![Commits de troca de base de Solicitação de pull](/assets/images/help/repository/pr-merge-rebase.png){% endif %}

Se você também selecionar outro método de merge, os colaboradores poderão escolher o tipo de commit do merge ao fazer merge de uma pull request. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}
