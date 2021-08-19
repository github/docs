---
title: Editar arquivos no repositório
intro: 'Com o editor de arquivos, você pode editar arquivos diretamente no {% data variables.product.product_name %} em qualquer dos seus repositórios.'
redirect_from:
  - /articles/editing-files/
  - /articles/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/editing-files-in-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

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

### Leia mais

* "[Editar arquivos no repositório de outro usuário](/articles/editing-files-in-another-user-s-repository)"
