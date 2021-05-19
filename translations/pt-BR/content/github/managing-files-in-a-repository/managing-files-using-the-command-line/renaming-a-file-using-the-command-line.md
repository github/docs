---
title: Renomear um arquivo usando a linha de comando
intro: Você pode usar a linha de comando para renomear qualquer arquivo do repositório.
redirect_from:
  - /articles/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/renaming-a-file-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
Muitos arquivos podem ser [renomeados diretamente no {% data variables.product.product_name %}](/articles/renaming-a-file), mas alguns arquivos, como imagens, exigem que a renomeação seja feita usando a linha de comando.

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
3. Renomeie o arquivo especificando o nome antigo e o novo nome que deseja atribuir ao arquivo. Isso fará o stage da alteração para commit.
  ```shell
  $ git mv <em>old_filename</em> <em>new_filename</em>
  ```
4. Use o `git status` para verificar os nomes antigo e novo do arquivo.
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #     renamed: <em>old_filename</em> -> <em>new_filename</em>
  > #
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Rename file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

### Leia mais
- "[Mover um arquivo para outro local usando a linha de comando](/articles/moving-a-file-to-a-new-location-using-the-command-line)"
- "[Adicionar um arquivo a um repositório usando a linha de comando](/articles/adding-a-file-to-a-repository-using-the-command-line)"
