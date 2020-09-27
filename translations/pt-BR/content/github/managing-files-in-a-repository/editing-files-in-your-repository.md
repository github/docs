---
title: Editar arquivos no repositório
intro: 'Com o editor de arquivos, você pode editar arquivos diretamente no {{ site.data.variables.product.product_name }} em qualquer dos seus repositórios.'
redirect_from:
  - /articles/editing-files/
  - /articles/editing-files-in-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Dica**: {{ site.data.reusables.repositories.protected-branches-block-web-edits-uploads }}

{% endtip %}

{% note %}

**Observação:** o editor de arquivos do {{ site.data.variables.product.product_name }} usa o [CodeMirror](https://codemirror.net/).

{% endnote %}

1. No repositório, navegue até o arquivo que deseja editar.
{{ site.data.reusables.repositories.edit-file }}
3. Na guia **Edit file** (Editar arquivo), faça as alterações necessárias no arquivo. ![Novo conteúdo no arquivo](/assets/images/help/repository/edit-readme-light.png)
{{ site.data.reusables.files.preview_change }}
{{ site.data.reusables.files.write_commit_message }}
{{ site.data.reusables.files.choose-commit-email }}
{{ site.data.reusables.files.choose_commit_branch }}
{{ site.data.reusables.files.propose_file_change }}

### Leia mais

* "[Editar arquivos no repositório de outro usuário](/articles/editing-files-in-another-user-s-repository)"
