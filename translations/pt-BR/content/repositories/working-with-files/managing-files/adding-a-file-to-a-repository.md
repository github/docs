---
title: Adicionar um arquivo a um repositório
intro: 'Você pode fazer o upload e o commit de um arquivo existente para um repositório no {% data variables.product.product_name %} ou usando a linha de comando.'
redirect_from:
  - /articles/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository
  - /articles/adding-a-file-to-a-repository-from-the-command-line
  - /articles/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/adding-a-file-to-a-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Adicionar um arquivo
---

## Adicionando um arquivo a um repositório em {% data variables.product.product_name %}

Os arquivos que você adiciona a um repositório por meio do navegador são limitados a {% data variables.large_files.max_github_browser_size %} por arquivo. É possível adicionar arquivos maiores, de até {% data variables.large_files.max_github_size %} cada um, usando a linha de comando. Para obter mais informações, consulte "[Adicionar um arquivo a um repositório usando a linha de comando](#adding-a-file-to-a-repository-using-the-command-line)".

{% tip %}

**Dicas:**
- É possível fazer upload de vários arquivos no {% data variables.product.product_name %} ao mesmo tempo.
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Acima da lista de arquivos, usando o menu suspenso **Adicionar arquivo** clique em **Fazer upload de arquivos**. !["Fazer upload de arquivos" no menu suspenso "Adicionar arquivo"](/assets/images/help/repository/upload-files-button.png)
3. Arraste e solte o arquivo ou a pasta que deseja fazer upload no repositório na árvore de arquivos. ![Área arrastar e soltar](/assets/images/help/repository/upload-files-drag-and-drop.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
6. Clique em **Commit changes** (Fazer commit das alterações). ![Botão Commit changes (Fazer commit de alterações)](/assets/images/help/repository/commit-changes-button.png)

## Adicionar um arquivo a um repositório usando a linha de comando

You can upload an existing file to a repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} using the command line.

{% tip %}

**Dica:** também é possível [adicionar um arquivo existente a um repositório do site do {% data variables.product.product_name %}](/articles/adding-a-file-to-a-repository).

{% endtip %}

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.repositories.sensitive-info-warning %}

1. No seu computador, mova o arquivo do qual deseja fazer upload para o {% data variables.product.product_name %}, no diretório local que foi criado quando o repositório foi clonado.
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

## Leia mais

- "[Adicionar um projeto existente ao GitHub usando a linha de comando](/articles/adding-an-existing-project-to-github-using-the-command-line)"
