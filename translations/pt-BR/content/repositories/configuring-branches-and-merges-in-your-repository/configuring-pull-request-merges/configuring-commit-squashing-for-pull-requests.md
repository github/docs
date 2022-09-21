---
title: Configurar a combinação de commits por squash em pull requests
intro: 'Você pode aplicar, permitir ou desabilitar a combinação por squash do commit para todos os merges da pull request no {% data variables.product.product_location %} do seu repositório.'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit squashing
ms.openlocfilehash: 8d53a558163b6a847fa4fb509399b1e7b7c6c05c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580708'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Em {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}"Solicitações de Pull"{% else %}"Botão Mesclar"{% endif %}, selecione **Permitir mesclagem squash**. Isso permite que os contribuidores façam merge de uma pull request combinando por squash todos os commits em um único commit. A mensagem de commit padrão apresentada aos colaboradores durante a mesclagem será o título e a mensagem de commit se a solicitação de pull contiver apenas 1 commit, ou o título da solicitação de pull e a lista de commits se a solicitação de pull contiver 2 ou mais commits. {% ifversion ghes = 3.6 %} Para sempre usar o título da solicitação de pull, independentemente do número de commits nela, selecione **Padronizar para título de PR no caso de commits mesclados por squash**.{% endif %}{% ifversion default-merge-squash-commit-message %} ![Commits combinados por squash na solicitação de pull](/assets/images/help/repository/allow-squash-merging.png){% endif %}{% ifversion ghes = 3.6 %} ![Captura de tela das configurações de solicitação de pull com caixa de seleção permitir confirmações de mesclagem enfatizada](/assets/images/help/repository/allow-squash-merging-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![Commits combinados por squash na solicitação de pull](/assets/images/enterprise/3.5/repository/pr-merge-squash.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. Opcionalmente, em **Permitir mesclagem por squash**, use a lista suspensa para escolher o formato da mensagem de commit de squash padrão apresentada aos colaboradores durante a mesclagem. A mensagem padrão usará o título e a mensagem do commit se a solicitação de pull contiver apenas 1 commit, ou o título da solicitação de pull e a lista de commits se a solicitação de pull contiver 2 ou mais commits. Você também pode optar por usar apenas o título da solicitação de pull, o título da solicitação de pull e os detalhes de confirmação ou o título e a descrição da solicitação de pull.
![Captura de tela da lista suspensa de mensagens de combinação por squash padrão enfatizada](/assets/images/help/repository/default-squash-message-dropdown.png) {% endif %}

Se você selecionar mais de um método de mesclagem, os colaboradores poderão escolher qual tipo de confirmação de mesclagem usar ao mesclar uma solicitação de pull. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## Leitura adicional

- "[Sobre as mesclagens de solicitações de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- "[Como mesclar uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"
