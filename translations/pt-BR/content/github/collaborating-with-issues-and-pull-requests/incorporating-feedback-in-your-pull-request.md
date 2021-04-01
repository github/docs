---
title: Incorporando feedback em sua pull request
intro: 'Quando os revisores sugerem mudanças em uma pull request, é possível incorporar automaticamente as alterações na pull request ou abrir um problema para monitorar sugestões fora do escopo.'
redirect_from:
  - /articles/incorporating-feedback-in-your-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

### Aplicar alterações sugeridas

Outras pessoas podem sugerir alterações específicas em sua pull request. É possível aplicar essas alterações sugeridas diretamente em uma pull request, se você tiver acesso de gravação no repositório. Se a pull request foi criada a partir de uma bifurcação e o autor permitir edições de mantenedores, você também pode aplicar as alterações sugeridas, caso tenha acesso ao repositório upstream. Para obter mais informações, consulte "[Comentar em uma pull request](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)" e "[Permitir alterações em um branch da pull request criado a partir de uma bifurcação](/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork)".

Para incluir rapidamente mais de uma alteração sugerida em um único commit, também é possível aplicá-las como um lote. Aplicar uma alteração ou um lote de alterações sugeridas cria um único commit no branch comparado da pull request.

Cada pessoa que sugeriu uma alteração incluída no commit será uma coautora do commit. A pessoa que aplica as alterações sugeridas será uma coautora e committer do commit. Para obter mais informações sobre o termo committer no Git, consulte "[Básido do Git - visualizar o histórico de commits](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)" no site do livro _Pro Git_.

{% data reusables.repositories.sidebar-pr %}
2. Na lista de pull requests, clique naquela que você gostaria de aplicar a alteração sugerida.
3. Navegue até a primeira alteração sugerida que você gostaria de aplicar.
    - Para aplicar a alteração no próprio commit dela, clique em **Commit suggestion** (Fazer commit da sugestão). ![Botão Commit suggestion (Fazer commit de sugestão)](/assets/images/help/pull_requests/commit-suggestion-button.png)
    - Para adicionar a sugestão a um lote de alterações, clique em **Add suggestion to batch** (Adicionar sugestão em um lote). Continue a adicionar as alterações sugeridas que quer incluir em um único commit. Quando terminar, clique em **Commit suggestions** (Fazer commit das sugestões). ![Botão Add suggestion to batch (Adicionar sugestão em um lote)](/assets/images/help/pull_requests/add-suggestion-to-batch.png)
4. No campo de mensagem do commit, digite uma mensagem curta e relevante que descreva a alteração que você fez no arquivo ou arquivos. ![Campo Commit message (Mensagem do commit)](/assets/images/help/pull_requests/suggested-change-commit-message-field.png)
5. Clique em **Commit changes** (Fazer commit das alterações). ![Botão Commit changes (Fazer commit de alterações)](/assets/images/help/pull_requests/commit-changes-button.png)

### Ressolicitar uma revisão

{% data reusables.pull_requests.re-request-review %}

### Abrir um problema para uma sugestão fora do escopo

Se alguém sugerir alterações na sua pull request que estão fora do escopo dela, abra um novo problema para acompanhar o feedback. Para obter mais informações, consulte "[Abrir um problema a partir de um comentário](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)".

### Leia mais

- "[Sobre revisões de solicitação pull](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)"
- "[Revisando alterações propostas em uma pull request](/github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[Comentando em uma pull request](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)"
- "[Solicitando uma revisão de pull request](/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review)"
- "[Abrindo um problema a partir de um comentário](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)"
