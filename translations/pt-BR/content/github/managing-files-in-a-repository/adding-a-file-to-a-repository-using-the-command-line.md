---
title: Adicionar um arquivo a um repositório usando a linha de comando
intro: 'Você pode fazer upload de um arquivo existente em um repositório do {% data variables.product.product_name %} usando a linha de comando.'
redirect_from:
  - /articles/adding-a-file-to-a-repository-from-the-command-line/
  - /articles/adding-a-file-to-a-repository-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% tip %}

**Dica:** também é possível [adicionar um arquivo existente a um repositório do site do {% data variables.product.product_name %}](/articles/adding-a-file-to-a-repository).

{% endtip %}

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.repositories.sensitive-info-warning %}

1. No seu computador, mova o arquivo para o qual você gostaria de fazer o upload

{% data variables.product.product_name %} para o diretório local que foi criado quando você clonou o repositório.
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
{% data reusables.git.stage_for_commit %}
  ```shell
  $ git add .
  # Adiciona o arquivo ao repositório local e faz stage dele para commit. {% data reusables.git.unstage-codeblock %}
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Add existing file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

### Leia mais

- "[Criar arquivos](/articles/creating-new-files)"
- "[Adicionar um projeto existente ao GitHub usando a linha de comando](/articles/adding-an-existing-project-to-github-using-the-command-line)"
