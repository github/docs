---
title: Adicionando um pull request à fila de merge
intro: 'Se as filas de merge estiverem habilitadas para o repositório, você poderá adicionar seus pull requests à fila de merge assim que todas as verificações necessárias tiverem passado. {% data variables.product.product_name %} fará merge dos pull requests para você.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Adicionar PR à fila de merge
redirect_from:
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
---

{% data reusables.pull_requests.merge-queue-beta %}

## Sobre a a fila de merge do pull request

{% data reusables.pull_requests.merge-queue-overview-short %}
{% data reusables.pull_requests.merge-queue-references %}

## Adicionando um pull request à fila de merge

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. Na lista "Pull Requests", clique no pull request que você deseja adicionar à fila de merge.
1. Clique **Adicionar à fila de merge** para adicionar seu pull request à fila de merge. Isso habilita a opção padrão **Fila e merge em um grupo**. Como alternativa, você pode:
   - Adicione seu pull request à frente da fila, selecionando o menu suspenso **Adicionar à gila de merge** e clicando em **Pular a fila** (disponível apenas para mantenedores e administradores do repositório).
   - Faça o merge direto do seu pull request selecionando o menu suspenso **Adicionar à fila de merge** e clicando em **Fazer merge diretamente** (disponível apenas para administradores do repositório). ![Opções da fila de merge](/assets/images/help/pull_requests/merge-queue-options.png)

   {% tip %}

   **Dica:** O botão **Adicionar à fila de merge** só é habilitado quando o pull request atender a todos os requisitos de revisão/aprovação e verificação de status.

   {% endtip %}
2. Confirme que você deseja adicionar o pull request à fila de merge clicando em **Confirmar a adição à fila de merge**.
   {% data variables.product.product_name %} adiciona o pull request à fila de merge e irá fazer o merge para você.

## Visualizando a fila de merge

Você pode visualizar a fila de merge em vários lugares em {% data variables.product.product_name %}.

   - Na página **Branches** para o repositório. Recomendamos que você use encaminhamento rota se você não tiver ou não conhecer um pull request já na fila e se você quiser ver o que está na fila. Para obter mais informações, consulte "[Visualizar branches no seu repositório](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)".

  ![Visualizar fila de merge na página de Branches](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- Na página **Pull requests** do seu repositório, clique em {% octicon "clock" aria-label="The clock symbol" %}.

  ![Visualizar fila de merge na página de Pull requests](/assets/images/help/pull_requests/clock-icon-in-pull-request-list.png)

- No seu pull request, role para baixo para a seção com as verificações e clique em **Visualizar fila de merge**.

  ![Ver botão de fila de merge no pull request](/assets/images/help/pull_requests/view-merge-queue-button.png)

A exibição da fila de merge mostra os pull requests que estão atualmente na fila, com seus pull requests claramente marcados.

![Visualização da fila de merge](/assets/images/help/pull_requests/merge-queue-view.png)

## Manipulação de pull requests removidos da fila de merge

{% data reusables.pull_requests.merge-queue-reject %}
