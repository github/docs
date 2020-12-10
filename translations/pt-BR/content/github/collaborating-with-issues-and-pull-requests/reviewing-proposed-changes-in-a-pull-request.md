---
title: Revisar alterações proposta em pull requests
intro: 'Em uma pull request, você pode revisar e comentar commits, arquivos alterados e diferenças (ou "diff") entre os arquivos nos branches base e de comparação.'
redirect_from:
  - /articles/reviewing-proposed-changes-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre revisões de pull requests

Você pode revisar as alterações em um arquivo de pull request por vez. Ao revisar os arquivos em um pull request, você pode deixar comentários individuais em alterações específicas. Após terminar de revisar cada arquivo, você pode marcar o arquivo como visualizado. Isso aninha o arquivo e ajuda a identificar os arquivos que ainda precisam ser revisadas. Uma barra de progresso no cabeçalho do pull request mostra o número de arquivos que você visualizou. Depois de revisar todos os arquivos você desejar, você pode aprovar a solicitação de pull ou solicitar alterações adicionais enviando a sua revisão com um comentário resumido.

{% data reusables.search.requested_reviews_search_tip %}

### Iniciar uma revisão

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
{% data reusables.repositories.start-line-comment %}
{% data reusables.repositories.type-line-comment %}
{% data reusables.repositories.suggest-changes %}
5. Quando terminar, clique em **Start a review** (Iniciar uma revisão). Se você já iniciou uma revisão, poderá clicar em **Add review comment** (Adicionar comentários à revisão). ![Botão Start a review (Iniciar uma revisão)](/assets/images/help/pull_requests/start-a-review-button.png)

Antes de enviar a revisão, os comentários em linha ficam com status _pendente_ e somente você pode visualizá-los. Você pode editar editar os comentários pendentes a qualquer momento antes de enviar a revisão. Para cancelar uma revisão pendente, incluindo todos os comentários pendentes, role para baixo até o final da linha do tempo na guia Conversation (Conversa) e clique em **Cancel review** (Cancelar revisão).

![Botão Cancel review (Cancelar revisão)](/assets/images/help/pull_requests/cancel-review-button.png)

### Marcar um arquivo como visualizado

Quando terminar de revisar um arquivo, você pode marcar o arquivo como visualizado, e o arquivo será aninhado. Se o arquivo for alterado após ser visualizado, será desmarcado como visualizado.

{% data reusables.repositories.changed-files %}
2. À direta do cabeçalho do arquivo revisado, selecione **Viewed** (Visualizado). ![Caixa de seleção visualizado](/assets/images/help/pull_requests/viewed-checkbox.png)

### Enviar a revisão

Quando terminar de revisar os arquivos que deseja incluir na pull request, envie a revisão.

{% data reusables.repositories.changed-files %}
{% data reusables.repositories.review-changes %}
{% data reusables.repositories.review-summary-comment %}
4. Selecione o tipo de revisão que você gostaria de deixar:![Botões de opção com opções de revisão](/assets/images/help/pull_requests/pull-request-review-statuses.png)
    - Selecione **Comment** (Comentar) para incluir um feedback geral sem aprovar explicitamente as alterações nem solicitar alterações adicionais.
    - Selecione **Approve** (Aprovar) para enviar um feedback e aprovar o merge das alterações propostas na pull request.
    - Selecione **Request changes** (Solicitar alterações) para enviar um feedback que deve ser aplicado para que a pull request possa sofrer merge.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

### Leia mais

- "[Sobre revisões de solicitação pull](/articles/about-pull-request-reviews)"
- "[Sobre revisões obrigatórias para pull requests](/articles/about-required-reviews-for-pull-requests)"
- "[Aprovar uma pull request com revisões obrigatórias](/articles/approving-a-pull-request-with-required-reviews)"
- "[Comentar em uma pull request](/articles/commenting-on-a-pull-request)"
- "[Filtrar pull requests por status de revisão](/articles/filtering-pull-requests-by-review-status)"
