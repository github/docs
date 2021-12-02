---
title: Editando arquivos
intro: 'Com o editor de arquivos, você pode editar arquivos diretamente no {% data variables.product.product_name %} em qualquer dos seus repositórios.'
redirect_from:
  - /articles/editing-files/
  - /articles/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/editing-files-in-your-repository
  - /articles/editing-files-in-another-user-s-repository
  - /github/managing-files-in-a-repository/editing-files-in-another-users-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-another-users-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Editar arquivos
---

## Editar arquivos no repositório

{% tip %}

**Dica**: {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% note %}

**Observação:** o editor de arquivos do {% data variables.product.product_name %} usa o [CodeMirror](https://codemirror.net/).

{% endnote %}

1. No repositório, navegue até o arquivo que deseja editar.
{% data reusables.repositories.edit-file %}
3. Na guia **Edit file** (Editar arquivo), faça as alterações necessárias no arquivo. ![Novo conteúdo no arquivo](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## Editar arquivos no repositório de outro usuário

Ao editar um arquivo em um repositório de outro usuário, iremos [bifurcar o repositório](/articles/fork-a-repo) automaticamente e [abrir um pull request](/articles/creating-a-pull-request) para você.

1. No repositório de outro usuário, navegue até a pasta que contém o arquivo que deseja editar. Clique no nome do arquivo a ser editado.
2. Acima do conteúdo do arquivo, clique em {% octicon "pencil" aria-label="The edit icon" %}. Neste ponto, o GitHub bifurca o repositório para você.
3. Faça as alterações necessárias no arquivo. ![Novo conteúdo no arquivo](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
6. Clique em **Propose file change** (Propor alteração no arquivo). ![Botão Commit Changes (Fazer commit de alterações)](/assets/images/help/repository/propose_file_change_button.png)
7. Digite um título e uma descrição para a pull request. ![Página Pull Request description (Descrição da pull request)](/assets/images/help/pull_requests/pullrequest-description.png)
8. Clique em **Create pull request** (Criar pull request). ![Botão Pull Request (Pull request)](/assets/images/help/pull_requests/pullrequest-send.png)
