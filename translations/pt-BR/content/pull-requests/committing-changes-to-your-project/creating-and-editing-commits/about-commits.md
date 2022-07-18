---
title: Sobre commits
intro: Você pode salvar pequenos grupos de mudanças significativas como commits.
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/about-commits
  - /github/committing-changes-to-your-project/creating-and-editing-commits/about-commits
  - /pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/commit-branch-and-tag-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## Sobre commits

{% data reusables.commits.about-commits %}

Você pode adicionar um coautor em qualquer commit em que colaborar. Para obter mais informações, consulte "[Criar um commit com vários autores](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)".

{% ifversion fpt or ghec %}
Também é possível criar um commit em nome de uma organização. Para obter mais informações, consulte "[Criar um commit em nome de uma organização](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization)".{% endif %}

O rebase permite que você altere uma série de commits e pode modificar a ordem dos commits na sua linha do tempo. Para obter mais informações, consulte "[Sobre o rebase do git](/github/getting-started-with-github/about-git-rebase)".

## Sobre branches de commit e etiquetas de tags

Você pode ver em qual branch um commit está ao ver as etiquetas abaixo do commit na página de commit.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-commit-page %}
1. Navegue até o commit clicando no link da mensagem do commit. ![Captura de tela do commit com o link da mensagem do commit destacado](/assets/images/help/commits/commit-message-link.png)
2. Para ver em qual branch o commit está, verifique a etiqueta abaixo da mensagem de commit. ![Captura de tela do commit com o indicador do branch do commit destacado](/assets/images/help/commits/commit-branch-indicator.png)

Se seu commit não estiver no branch padrão (`principal`), a etiqueta mostrará os branches que contêm o commit. Se o commit fizer parte de um pull request não mesclado, clique no link para ir para o pull request.

Assim que o commit estiver no branch padrão, todas as tags que contêm o commit serão mostradas e o branch padrão será o único branch listado. Para obter mais informações sobre tags, consulte "[Básico do Git - Inserção de tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging)" na documentação do Git.

![Captura de tela do commit com a tag do commit destacado](/assets/images/help/commits/commit-tag-label.png)

{% ifversion commit-tree-view %}

## Usando a árvore de arquivos

You can use the file tree to navigate between files in a commit.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-commit-page %}
1. Navegue até o commit clicando no link da mensagem do commit. ![Captura de tela do commit com o link da mensagem do commit destacado](/assets/images/help/commits/commit-message-link.png)
1. Clique em um arquivo na árvore de arquivos para ver o diff do arquivo correspondente. Se a árvore de arquivos estiver oculta, clique em {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} para exibir a árvore de arquivos.

  {% note %}

  **Note**: The file tree will not display if your screen width is too narrow or if the commit only includes one file.

  {% endnote %}

  ![Captura de tela do filtro de caixa de pesquisa de arquivos alterada e a árvore de arquivos destacada](/assets/images/help/repository/file-tree.png)
1. Para filtrar por caminho do arquivo, digite parte ou todo o caminho do arquivo na caixa de pesquisa **Filtrar arquivos alterados**.

{% endif %}

## Leia mais
- "[Fazer commit e revisar alterações no seu projeto](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#about-commits)" em {% data variables.product.prodname_desktop %}
