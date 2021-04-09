---
title: Exibir o histórico de alterações da wiki
intro: 'Como wikis são repositórios do Git, cada alteração que você faz é um commit que pode ser exibido.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/viewing-a-wiki-s-history-of-changes
  - /articles/viewing-a-wikis-history-of-changes
  - /github/building-a-strong-community/viewing-a-wikis-history-of-changes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - comunidade
---

### Exibir histórico da wiki

O histórico da wiki inclui:
- O usuário que fez a alteração
- A mensagem do commit que ele forneceu
- O momento em que a alteração foi feita

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. Usando a barra lateral da wiki, navegue até a página cujo histórico você deseja exibir.
4. Na parte superior da wiki, clique no link de revisão. ![Link de revisão da wiki](/assets/images/help/wiki/wiki_revision_link.png)

### Exibir conteúdo anterior

Na tabela de histórico da wiki, clique em um [hash SHA-1](http://en.wikipedia.org/wiki/SHA-1) (a sequência de letras e números na extrema direita) para ver uma página wiki exatamente como era em um determinado momento.

![Número SHA da wiki](/assets/images/help/wiki/wiki_sha_number.png)

### Comparar duas revisões

1. Selecione duas linhas que deseja comparar.
2. Na parte superior da tabela do histórico, clique em **Compare Revisions** (Comparar revisões). ![Botão Compare revisions (Comparar revisões) da wiki](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Você verá um diff das alterações mostrando quais linhas foram adicionadas, removidas e modificadas.

### Reverter alterações anteriores

Você só poderá reverter alterações se tiver permissão para editar a wiki.

1. Selecione uma linha que deseja reverter.
2. Na parte superior da tabela do histórico, clique em **Compare Revisions** (Comparar revisões). ![Botão Compare revisions (Comparar revisões) da wiki](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Você verá um diff das alterações mostrando quais linhas foram adicionadas, removidas e modificadas. ![Diff de revisão da wiki](/assets/images/help/wiki/wiki_revision_diff.png)
4. Para reverter as alterações mais recentes, clique em **Revert Changes** (Reverter alterações). ![Botão Revert changes (Reverter alterações) da wiki](/assets/images/help/wiki/wiki_revert_changes.png)
