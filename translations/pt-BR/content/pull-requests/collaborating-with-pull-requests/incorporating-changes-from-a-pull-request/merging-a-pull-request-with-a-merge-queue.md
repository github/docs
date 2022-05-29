---
title: Fazendo merge de um pull request com uma fila de merge
intro: 'Se uma fila de merge for exigida pela configuração de proteção de branch para o branch, você pode adicionar seus pull requests a uma fila de merge e {% data variables.product.product_name %} fará o merge dos pull requests para você assim que todas as verificações necessárias tiverem passado.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Fazer merge do PR com fila de merge
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
---

{% data reusables.pull_requests.merge-queue-beta %}

## Sobre filas de merge

{% data reusables.pull_requests.merge-queue-overview %}
{% data reusables.pull_requests.merge-queue-references %}

## Adicionando um pull request a uma fila de merge

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}

1. Na lista "Pull Requests", clique no pull request que você gostaria de adicionar a uma fila de merge.

1. Clique em **Fazer merge quando estiver pronto** para adicionar o pull request à fila de merge. Como alternativa, se você for um administrador, você pode:
   -  Faça o merge diretamente do pull request verificando **Merge sem aguardar que os requisitos sejam cumpridos (somente administradores)**, se permitido pelas configurações de proteção de branches e siga o fluxo padrão. ![Opções da fila de merge](/assets/images/help/pull_requests/merge-queue-options.png)

  {% tip %}

  **Dica:** você pode clicar em  **Fazer merge quando estiver pronto** sempre que estiver pronto para fazer merge das alterações propostas. {% data variables.product.product_name %} irá adicionar automaticamente o pull request à fila de merge assim que forem atendidas as condições de aprovação e verificação de status.

  {% endtip %}

1. Confirme que você deseja adicionar o pull request à fila de merge clicando em  **Confirmar o merge quando estiver pronto**.

## Removendo um pull request de uma fila de merge

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}

1. Na lista "Pull Requests", clique no pull request que você gostaria de remover de uma fila de merge.

1. Para remover o pull request da fila, clique em **Remover da fila**. ![Remova o pull request da fila](/assets/images/help/pull_requests/remove-from-queue-button.png)

Como alternativa, você pode acessar a página da fila de merge para o branch base, clique em **...** ao lado do pull request que você deseja remover e selecione **Remover da fila**. Para obter informações sobre como obter na página da fila de merge para o branch base, consulte a seção abaixo.

## Visualizando filas de merge

Você pode visualizar a fila de merge para um branch base em vários lugares em {% data variables.product.product_name %}.

- Na página **Branches** para o repositório. Recomendamos que você use encaminhamento se você não tiver ou não conhecer um pull request já na fila e se você quiser ver o que está nessa fila. Para obter mais informações, consulte "[Visualizar branches no seu repositório](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)".

  ![Visualizar fila de merge na página de Branches](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- Na página de **Pull requests** do seu repositório, clique em {% octicon "clock" aria-label="The clock symbol" %} ao lado de qualquer pull request na fila de merge.

  ![Visualizar fila de merge na página de Pull requests](/assets/images/help/pull_requests/clock-icon-in-pull-request-list.png)

- Na página do pull request, quando a fila do merge é necessária para o merge, role para a parte inferior da linha do tempo e clique no link **fila de merge**.

  ![Link da fila de merge no pull request](/assets/images/help/pull_requests/merge-queue-link.png)

- A exibição da fila de merge mostra os pull requests que estão atualmente na fila, com seus pull requests claramente marcados.

  ![Visualização da fila de merge](/assets/images/help/pull_requests/merge-queue-view.png)

## Manipulação de pull requests removidos da fila de merge

{% data reusables.pull_requests.merge-queue-reject %}
