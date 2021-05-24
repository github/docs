---
title: Fazer comentários em uma pull request
redirect_from:
  - /articles/adding-commit-comments/
  - /articles/commenting-on-the-diff-of-a-pull-request/
  - /articles/commenting-on-differences-between-files/
  - /articles/commenting-on-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request
intro: 'Depois de abrir uma pull request em um repositório, os colaboradores ou integrantes da equipe podem comentar na comparação dos arquivos entre os dois branches especificados ou deixar os comentários gerais no projeto como um todo.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
### Sobre comentários da pull request

Você pode fazer comentários na guia **Conversation** (Conversa) de uma pull request para deixar comentários gerais, perguntas ou complementos. Você também pode sugerir alterações que o autor da pull request pode aplicar diretamente a partir do seu comentário.

![Conversa da pull request](/assets/images/help/pull_requests/conversation.png)

Também é possível comentar em seções específicas de um arquivo na guia **Files changed** (Arquivos alterados) de uma pull request na forma de comentários em linha individuais ou como parte de uma [revisão de pull request](/articles/about-pull-request-reviews). Adicionar comentários em linha é uma excelente maneira de discutir questões sobre implementação ou fornecer feedback ao autor.

Para obter mais informações sobre como adicionar comentários em linha a uma revisão de pull request, consulte ["Revisar alterações propostas em uma pull request"](/articles/reviewing-proposed-changes-in-a-pull-request).

{% note %}

**Observação:** se você responder a uma pull request por e-mail, seu comentário será adicionado na guia **Conversation** (Conversa) e não fará parte de uma revisão de pull request.

{% endnote %}

Para responder a um comentário em linha existente, é preciso navegar até o comentário na guia **Conversation** (Conversa) ou **Files changed** (Arquivos alterados) e incluir um comentário em linha adicional abaixo dele.

{% tip %}

**Dicas:**
- Os comentários da pull request aceitam a mesma [formatação](/categories/writing-on-github) como comentários regulares no {% data variables.product.product_name %}, como @menções, emoji e referências.
- You can add reactions to comments in pull requests in the **Files changed** tab.

{% endtip %}

### Adicionar comentários em linha a uma pull request

{% data reusables.repositories.sidebar-pr %}
2. Na lista de pull requests, clique na pull request onde deseja deixar comentários em linha.
{% data reusables.repositories.changed-files %}
{% data reusables.repositories.start-line-comment %}
{% data reusables.repositories.type-line-comment %}
{% data reusables.repositories.suggest-changes %}
5. Quando tiver concluído, clique em **>Add single comment** (Adicionar único comentário). ![Janela de comentários inline](/assets/images/help/commits/inline-comment.png)

Qualquer pessoa que inspeciona a pull request ou o repositório receberá uma notificação de seu comentário.

{% data reusables.pull_requests.resolving-conversations %}

### Leia mais

- "[Criar um link permanente em um trecho de código](/articles/creating-a-permanent-link-to-a-code-snippet/)"
{% if currentVersion == "free-pro-team@latest" %}- "[Relatar abuso ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
{% endif %}
