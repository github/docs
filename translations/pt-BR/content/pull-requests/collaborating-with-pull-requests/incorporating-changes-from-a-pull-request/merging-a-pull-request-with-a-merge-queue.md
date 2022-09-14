---
title: Como mesclar uma solicitação de pull com uma fila de mesclagem
intro: 'Se uma fila de mesclagem for exigida pela configuração de proteção do branch, você poderá adicionar as solicitações de pull a uma fila de mesclagem para que o {% data variables.product.product_name %} mescle as solicitações de pull depois que todas as verificações necessárias forem aprovadas.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Merge PR with merge queue
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
ms.openlocfilehash: ce2bc87b82e3590c2a7f55f528fc9f71dc0ceb0d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614268'
---
{% data reusables.pull_requests.merge-queue-beta %}

## Sobre as filas de mesclagem

{% data reusables.pull_requests.merge-queue-overview %} {% data reusables.pull_requests.merge-queue-references %}

## Como adicionar uma solicitação de pull a uma fila de mesclagem

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. Na lista "Solicitações de Pull", clique na solicitação de pull que deseja adicionar a uma fila de mesclagem.

1. Clique em **Mesclar quando estiver pronto** para adicionar a solicitação de pull à fila de mesclagem. Como alternativa, se você for um administrador, poderá:
   -  Mescle diretamente a solicitação de pull marcando **Mesclar sem esperar que os requisitos sejam atendidos ({% ifversion bypass-branch-protections %}ignorar proteções de branch{% else %}somente administradores{% endif %})** , se permitido pelas configurações de proteção de branch, e siga o fluxo padrão.
   ![Opções da fila de mesclagem](/assets/images/help/pull_requests/merge-queue-options.png)

  {% tip %}

  **Dica:** clique em **Mesclar quando estiver pronto** sempre que estiver pronto para mesclar as alterações propostas. O {% data variables.product.product_name %} adicionará automaticamente a solicitação de pull à fila de mesclagem depois que as condições de aprovação e verificação de status necessárias forem atendidas.

  {% endtip %}

1. Confirme se deseja adicionar a solicitação de pull à fila de mesclagem clicando em **Confirmar mesclagem quando estiver pronto**.

## Como remover uma solicitação de pull de uma fila de mesclagem

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. Na lista "Solicitações de Pull", clique na solicitação de pull que deseja remover de uma fila de mesclagem.

1. Para remover a solicitação de pull da fila, clique em **Remover da fila**.
  ![Remover solicitação de pull da fila](/assets/images/help/pull_requests/remove-from-queue-button.png)

Como alternativa, navegue até a página da fila de mesclagem do branch base, clique em **…** ao lado da solicitação de pull que deseja remover e selecionar **Remover da fila**. Para obter informações sobre como acessar a página de fila de mesclagem do branch base, confira a seção abaixo.

## Como ver as filas de mesclagem

Você pode ver a fila de mesclagem de um branch base em vários locais no {% data variables.product.product_name %}.

- Na página **Branches** do repositório. Recomendamos que você use essa rota se não tiver ou não souber que uma solicitação de pull já está em uma fila e quiser ver o que está nessa fila. Para obter mais informações, confira "[Como ver branches no seu repositório](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)".

  ![Visualizar fila de merge na página de Branches](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- Na página **Solicitações de pull** do repositório, clique em {% octicon "clock" aria-label="The clock symbol" %} ao lado de qualquer solicitação de pull na fila de mesclagem.

  ![Visualizar fila de merge na página de Pull requests](/assets/images/help/pull_requests/clock-icon-in-pull-request-list.png)

- Na página de solicitação de pull quando a fila de mesclagem for necessária para mesclagem, role a página até a parte inferior da linha do tempo e clique no link da **fila de mesclagem**.

  ![Mesclar link da fila na solicitação de pull](/assets/images/help/pull_requests/merge-queue-link.png)

- A exibição da fila de merge mostra os pull requests que estão atualmente na fila, com seus pull requests claramente marcados.

  ![Visualização da fila de merge](/assets/images/help/pull_requests/merge-queue-view.png)

## Manipulação de pull requests removidos da fila de merge

{% data reusables.pull_requests.merge-queue-reject %}
