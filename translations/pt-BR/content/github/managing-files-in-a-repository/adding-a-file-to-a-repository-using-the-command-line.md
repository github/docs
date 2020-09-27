---
title: Adicionar um arquivo a um repositório usando a linha de comando
intro: 'Você pode fazer upload de um arquivo existente em um repositório do {{ site.data.variables.product.product_name }} usando a linha de comando.'
redirect_from:
  - /articles/adding-a-file-to-a-repository-from-the-command-line/
  - /articles/adding-a-file-to-a-repository-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Dica:** também é possível [adicionar um arquivo existente a um repositório do site do {{ site.data.variables.product.product_name }}](/articles/adding-a-file-to-a-repository).

{% endtip %}

{{ site.data.reusables.command_line.manipulating_file_prereqs }}

{{ site.data.reusables.repositories.sensitive-info-warning }}

1. No seu computador, mova o arquivo do qual deseja fazer upload para o {{ site.data.variables.product.product_name }}, no diretório local que foi criado quando o repositório foi clonado.
{{ site.data.reusables.command_line.open_the_multi_os_terminal }}
{{ site.data.reusables.command_line.switching_directories_procedural }}
{{ site.data.reusables.git.stage_for_commit }}
  ```shell
  $ git add .
  # Adiciona o arquivo ao repositório local e faz stage dele para commit. {{ site.data.reusables.git.unstage-codeblock }}
  ```
{{ site.data.reusables.git.commit-file }}
  ```shell
  $ git commit -m "Add existing file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {{ site.data.reusables.git.reset-head-to-previous-commit-codeblock }}
  ```
{{ site.data.reusables.git.git-push }}

### Leia mais

- "[Criar arquivos](/articles/creating-new-files)"
- "[Adicionar um projeto existente ao GitHub usando a linha de comando](/articles/adding-an-existing-project-to-github-using-the-command-line)"
