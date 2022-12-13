---
title: Revisar alterações proposta em pull requests
intro: 'Em uma solicitação de pull, você pode examinar e discutir commits, arquivos alterados e as diferenças (ou "comparação") entre os arquivos nos branches base e de comparação.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /articles/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Review proposed changes
ms.openlocfilehash: 8ea199ad1dc2f574f8820bde3e0529112645bc23
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158586'
---
## Sobre revisões de pull requests

Você pode revisar as alterações em um arquivo de pull request por vez. Ao revisar os arquivos em um pull request, você pode deixar comentários individuais em alterações específicas. Após terminar de revisar cada arquivo, você pode marcar o arquivo como visualizado. Isso aninha o arquivo e ajuda a identificar os arquivos que ainda precisam ser revisadas. Uma barra de progresso no cabeçalho do pull request mostra o número de arquivos que você visualizou. Depois de revisar todos os arquivos você desejar, você pode aprovar a solicitação de pull ou solicitar alterações adicionais enviando a sua revisão com um comentário resumido.

{% data reusables.search.requested_reviews_search_tip %}

## Iniciar uma revisão

{% webui %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %} {% ifversion fpt or ghec or ghes > 3.3 or ghae %}

   Você pode alterar o formato da visualização do diff nesta aba clicando em {% octicon "gear" aria-label="The Settings gear" %} e escolhendo a exibição unificada ou dividida. A escolha que você fizer será aplicada quando você visualizar o diff para outros pull requests.

   ![Configurações de exibição do diff](/assets/images/help/pull_requests/diff-view-settings.png)

   Você também pode optar por ocultar as diferenças nos espaços em branco. A escolha que você fizer só se aplica a este pull request e será lembrada na próxima vez que você acessar esta página.
{% endif %}
1. Opcionalmente, filtre os arquivos para mostrar apenas aqueles que deseja examinar{% ifversion pr-tree-view %} ou use a árvore de arquivos para acessar um arquivo específico{% endif %}. Para obter mais informações, confira "[Como filtrar arquivos em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)".
{% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
1. Quando terminar, clique em **Iniciar uma revisão**. Se você já tiver iniciado uma revisão, clique em **Adicionar comentário sobre a revisão**.

   ![Botão Start a review (Iniciar uma revisão)](/assets/images/help/pull_requests/start-a-review-button.png)

Antes de enviar a revisão, os comentários em linha ficam com o status _pendente_ e somente você pode visualizá-los. Você pode editar editar os comentários pendentes a qualquer momento antes de enviar a revisão. Para cancelar uma revisão pendente, incluindo todos os comentários pendentes, role a página para baixo até o final da linha do tempo na guia Conversa e clique em **Cancelar revisão**.

![Botão Cancelar revisão](/assets/images/help/pull_requests/cancel-review-button.png) {% endwebui %}

{% ifversion fpt or ghec %}

{% codespaces %}

Use o [{% data variables.product.prodname_github_codespaces %}](/codespaces/overview) para testar, executar e examinar solicitações de pull.

1. Abra a solicitação pull em um codespace, conforme descrito em "[Como abrir uma solicitação de pull](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces)".
1. Na barra de atividades, clique na exibição **Solicitação de Pull do GitHub**. Essa exibição só aparece quando você abre uma solicitação de pull em um codespace.

   ![Opção para abrir RP em um codespace](/assets/images/help/codespaces/github-pr-view.png)

1. Para revisar um arquivo específico, clique no ícone **Abrir Arquivo** na barra lateral.

   ![Opção para abrir RP em um codespace](/assets/images/help/codespaces/changes-in-files.png)

1. Para adicionar comentários de revisão, clique no ícone **+** ao lado do número da linha. Digite seu comentário de revisão e clique em **Iniciar Revisão**.

   ![Opção para abrir RP em um codespace](/assets/images/help/codespaces/start-review.png)

1. Quando terminar de adicionar comentários de revisão, na barra lateral, você poderá optar por enviar os comentários, aprovar as alterações ou solicitar alterações.

   ![Opção para abrir RP em um codespace](/assets/images/help/codespaces/submit-review.png)

Para ver mais informações de como revisar solicitações de pull nos {% data variables.product.prodname_github_codespaces %}, confira "[Como usar {% data variables.product.prodname_github_codespaces %} para solicitações de pull](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests)".

{% endcodespaces %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## Revisar alterações de dependência

Se o pull request contiver alterações em dependências, você poderá usar a revisão de dependências para um manifesto ou arquivo de bloqueio para ver o que mudou e verificar se as alterações introduzem vulnerabilidades de segurança. Para obter mais informações, confira "[Como revisar as alterações de dependência em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)".

{% data reusables.repositories.changed-files %}

1. À direita do cabeçalho de um arquivo de manifesto ou de bloqueio, veja a revisão de dependências clicando no botão de comparação avançada **{% octicon "file" aria-label="The rich diff icon" %}** .

   ![Botão de diff avançado](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

{% data reusables.repositories.return-to-source-diff %} {% endif %}

## Marcar um arquivo como visualizado

Quando terminar de revisar um arquivo, você pode marcar o arquivo como visualizado, e o arquivo será aninhado. Se o arquivo for alterado após ser visualizado, será desmarcado como visualizado.

{% data reusables.repositories.changed-files %}
2. À direta do cabeçalho do arquivo que você terminou de revisar, selecione **Visualizado**.

   ![Caixa de seleção visualizado](/assets/images/help/pull_requests/viewed-checkbox.png)

## Enviar a revisão

Quando terminar de revisar os arquivos que deseja incluir na pull request, envie a revisão.

{% data reusables.repositories.changed-files %} {% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
4. Selecione o tipo de revisão que você gostaria de deixar:

   ![Botões de opção com opções de revisão](/assets/images/help/pull_requests/pull-request-review-statuses.png)

    - Selecione **Comentar** para incluir um comentário geral sem aprovar explicitamente as alterações nem solicitar alterações adicionais.
    - Selecione **Aprovar** para enviar seu comentário e aprovar a mesclagem das alterações propostas na solicitação de pull.
    - Selecione **Solicitar alterações** para enviar comentários que precisam ser resolvidos para que a solicitação de pull seja mesclada.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## Leitura adicional

- "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)"
- "[Como filtrar solicitações de pull por status de revisão](/github/managing-your-work-on-github/filtering-pull-requests-by-review-status)"
