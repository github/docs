---
title: Moving a file to a new location using the command line
intro: You can use the command line to move files within a repository by removing the file from the old location and then adding it in the new location.
redirect_from:
  - /articles/moving-a-file-to-a-new-location-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Many files can be [moved directly on {% data variables.product.product_name %}](/articles/moving-a-file-to-a-new-location), but some files, such as images, require that you move them from the command line.

{% data reusables.command_line.manipulating_file_prereqs %}

1. On your computer, move the file to a new location within the directory that was created locally on your computer when you cloned the repository.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Use `git status` to check the old and new file locations.
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
{% data reusables.git.stage_for_commit %} This will delete, or `git rm`, the file from the old location and add, or `git add`, the file to the new location.
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit.
  # {% data reusables.git.unstage-codeblock %}
  ```
5. Use `git status` to check the changes staged for commit.
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

### 더 읽을거리

- "[Renaming a file using the command line](/articles/renaming-a-file-using-the-command-line)"
- "[Adding a file to a repository using the command line](/articles/adding-a-file-to-a-repository-using-the-command-line)"
