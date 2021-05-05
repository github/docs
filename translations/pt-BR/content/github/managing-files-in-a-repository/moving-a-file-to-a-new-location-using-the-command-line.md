---
title: Mover um arquivo para um novo local usando a linha de comando
intro: 'Você pode usar a linha de comando para mover arquivos dentro de um repositório, removendo o arquivo do local antigo e adicionando-o ao novo local.'
redirect_from:
  - /articles/moving-a-file-to-a-new-location-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Muitos arquivos podem [ser movidos diretamente no {% data variables.product.product_name %}](/articles/moving-a-file-to-a-new-location), mas alguns arquivos, como imagens, precisam ser movidos a partir da linha de comando.

{% data reusables.command_line.manipulating_file_prereqs %}

1. No seu computador, mova o arquivo para a nova localização dentro do diretório que foi criado localmente em seu computador quando você clonou o repositório.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Use `git status` para verificar a localização antiga e nova do arquivo.
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes not staged for commit:
  > #   (use "git add/rm <file>..." to update what will be committed)
  > #   (use "git checkout -- <file>..." to discard changes in working directory)
  > #
  > #     deleted:    /<em>old-folder</em>/<em>image.png</em>
  > #
  > # Untracked files:
  > #   (use "git add <file>..." to include in what will be committed)
  > #
  > #     /<em>new-folder</em>/<em>image.png</em>
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
{% data reusables.git.stage_for_commit %} Isso excluirá, ou `git rm`, o arquivo do local antigo e adicionará, ou `git add`, o arquivo ao novo local.
  ```shell
  $ git add .
  # Adiciona o arquivo ao repositório local e faz stage dele para commit.
  # {% data reusables.git.unstage-codeblock %}
  ```
5. Use `git status` para verificar as alterações com stage para commit.
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #    renamed:    /old-folder/image.png -> /new-folder/image.png
  # Displays the changes staged for commit
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Move file to new directory"
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

### Leia mais

- "[Renomear um arquivo usando a linha de comando](/articles/renaming-a-file-using-the-command-line)"
- "[Adicionar um arquivo a um repositório usando a linha de comando](/articles/adding-a-file-to-a-repository-using-the-command-line)"
