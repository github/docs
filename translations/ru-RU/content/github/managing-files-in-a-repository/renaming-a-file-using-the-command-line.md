---
title: Renaming a file using the command line
intro: You can use the command line to rename any file in your repository.
redirect_from:
  - /articles/renaming-a-file-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Many files can be [renamed directly on {% data variables.product.product_name %}](/articles/renaming-a-file), but some files, such as images, require that you rename them from the command line.

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
3. Rename the file, specifying the old file name and the new name you'd like to give the file. This will stage your change for commit.
  ```shell
  $ git mv <em>old_filename</em> <em>new_filename</em>
  ```
4. Use `git status` to check the old and new file names.
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

### Дополнительная литература
- "[Moving a file to a new location using the command line](/articles/moving-a-file-to-a-new-location-using-the-command-line)"
- "[Adding a file to a repository using the command line](/articles/adding-a-file-to-a-repository-using-the-command-line)"
