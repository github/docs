---
title: Renaming a file
intro: 'You can rename any file in your repository directly in {% data variables.product.product_name %} or by using the command line.'
redirect_from:
  - /articles/renaming-a-file
  - /github/managing-files-in-a-repository/renaming-a-file
  - /articles/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/renaming-a-file
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/renaming-a-file-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## Renaming a file on {% data variables.product.product_name %}

Renaming a file also gives you the opportunity to [move the file to a new location](/articles/moving-a-file-to-a-new-location)

{% tip %}

**Tips**:

- If you try to rename a file in a repository that you don’t have access to, we will fork the project to your personal account and help you send [a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to the original repository after you commit your change.
- File names created via the web interface can only contain alphanumeric characters and hyphens (`-`). To use other characters, create and commit the files locally and then push them to the repository.
- Some files, such as images, require that you rename them from the command line. For more information, see "[Renaming a file using the command line](/articles/renaming-a-file-using-the-command-line)."

{% endtip %}

1. In your repository, browse to the file you want to rename.
2. In the upper right corner of the file view, click {% octicon "pencil" aria-label="The edit icon" %} to open the file editor.
![Edit file icon](/assets/images/help/repository/edit-file-icon.png)
3. In the filename field, change the name of the file to the new filename you want. You can also update the contents of your file at the same time.
![Editing a file name](/assets/images/help/repository/changing-file-name.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## Renaming a file using the command line 

You can use the command line to rename any file in your repository.

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

