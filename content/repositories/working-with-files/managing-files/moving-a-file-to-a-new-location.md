---
title: Moving a file to a new location
intro: 'You can move a file to a different directory on {% data variables.product.product_name %} or by using the command line.'
redirect_from:
  - /articles/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location
  - /articles/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/moving-a-file-to-a-new-location-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Move a file
---
In addition to changing the file location, you can also [update the contents of your file](/repositories/working-with-files/managing-files/editing-files), or [give it a new name](/repositories/working-with-files/managing-files/renaming-a-file) in the same commit.

## Moving a file to a new location on {% data variables.product.product_name %}

{% tip %}

**Tips**:

* If you try to move a file in a repository that you don’t have access to, we'll fork the project to your personal account and help you send [a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to the original repository after you commit your change.
* Some files, such as images, require that you move them from the command line. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location)".
* {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. In your repository, browse to the file you want to move.
{% data reusables.repositories.edit-file %}
1. In the filename field, change the name of the file using these guidelines:
    * To move the file **into a subfolder**, type the name of the folder you want, followed by `/`. Your new folder name becomes a new item in the navigation breadcrumbs.
    * To move the file into a directory **above the file's current location**, place your cursor at the beginning of the filename field, then either type `../` to jump up one full directory level, or type the `backspace` key to edit the parent folder's name.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## Moving a file to a new location using the command line

You can use the command line to move files within a repository by removing the file from the old location and then adding it in the new location.

Many files can be [moved directly on {% data variables.product.product_name %}](/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location), but some files, such as images, require that you move them from the command line.

{% data reusables.command_line.manipulating_file_prereqs %}

1. On your computer, move the file to a new location within the directory that was created locally on your computer when you cloned the repository.
{% data reusables.command_line.open_the_multi_os_terminal %}
1. Use `git status` to check the old and new file locations.

   ```shell
   $ git status
   > # On branch YOUR-BRANCH
   > # Changes not staged for commit:
   > #   (use "git add/rm <file>..." to update what will be committed)
   > #   (use "git checkout -- <file>..." to discard changes in working directory)
   > #
   > #     deleted:    /OLD-FOLDER/IMAGE.PNG
   > #
   > # Untracked files:
   > #   (use "git add <file>..." to include in what will be committed)
   > #
   > #     /NEW-FOLDER/IMAGE.PNG
   > #
   > # no changes added to commit (use "git add" and/or "git commit -a")
   ```

{% data reusables.git.stage_for_commit %} This will delete, or `git rm`, the file from the old location and add, or `git add`, the file to the new location.

   ```shell
   $ git add .
   # Adds the file to your local repository and stages it for commit.
   # {% data reusables.git.unstage-codeblock %}
   ```

1. Use `git status` to check the changes staged for commit.

   ```shell
   $ git status
   > # On branch YOUR-BRANCH
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
