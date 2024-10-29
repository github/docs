---
title: Resolving a merge conflict using the command line
intro: You can resolve merge conflicts using the command line and a text editor.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
  - /articles/resolving-a-merge-conflict-from-the-command-line
  - /articles/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts in Git
---
Merge conflicts occur when competing changes are made to the same line of a file, or when one person edits a file and another person deletes the same file. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)."

{% tip %}

**Tip:** You can use the conflict editor on {% data variables.product.product_name %} to resolve competing line change merge conflicts between branches that are part of a pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)."

{% endtip %}

## Competing line change merge conflicts

To resolve a merge conflict caused by competing line changes, you must choose which changes to incorporate from the different branches in a new commit.

For example, if you and another person both edited the file _styleguide.md_ on the same lines in different branches of the same Git repository, you'll get a merge conflict error when you try to merge these branches. You must resolve this merge conflict with a new commit before you can merge these branches.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Navigate into the local Git repository that has the merge conflict.

   ```shell
   cd REPOSITORY-NAME
   ```

1. Generate a list of the files affected by the merge conflict. In this example, the file _styleguide.md_ has a merge conflict.

   ```shell
   $ git status
   > # On branch branch-b
   > # You have unmerged paths.
   > #   (fix conflicts and run "git commit")
   > #
   > # Unmerged paths:
   > #   (use "git add <file>..." to mark resolution)
   > #
   > # both modified:      styleguide.md
   > #
   > no changes added to commit (use "git add" and/or "git commit -a")
   ```

1. Open your favorite text editor, such as [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/), and navigate to the file that has merge conflicts.
1. To see the beginning of the merge conflict in your file, search the file for the conflict marker `<<<<<<<`. When you open the file in your text editor, you'll see the changes from the HEAD or base branch after the line `<<<<<<< HEAD`. Next, you'll see `=======`, which divides your changes from the changes in the other branch, followed by `>>>>>>> BRANCH-NAME`. In this example, one person wrote "open an issue" in the base or HEAD branch and another person wrote "ask your question in IRC" in the compare branch or `branch-a`.

   ```text
   If you have questions, please
   <<<<<<< HEAD
   open an issue
   =======
   ask your question in IRC.
   >>>>>>> branch-a
   ```

{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %} In this example, both changes are incorporated into the final merge:

   ```shell
   If you have questions, please open an issue or ask in our IRC channel if it's more urgent.
   ```

1. Add or stage your changes.

   ```shell
   git add .
   ```

1. Commit your changes with a comment.

   ```shell
   git commit -m "Resolve merge conflict by incorporating both suggestions"
   ```

You can now merge the branches on the command line or [push your changes to your remote repository](/get-started/using-git/pushing-commits-to-a-remote-repository) on {% data variables.product.product_name %} and [merge your changes](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) in a pull request.

## Removed file merge conflicts

To resolve a merge conflict caused by competing changes to a file, where a person deletes a file in one branch and another person edits the same file, you must choose whether to delete or keep the removed file in a new commit.

For example, if you edited a file, such as _README.md_, and another person removed the same file in another branch in the same Git repository, you'll get a merge conflict error when you try to merge these branches. You must resolve this merge conflict with a new commit before you can merge these branches.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Navigate into the local Git repository that has the merge conflict.

   ```shell
   cd REPOSITORY-NAME
   ```

1. Generate a list of the files affected by the merge conflict. In this example, the file _README.md_ has a merge conflict.

   ```shell
   $ git status
   > # On branch main
   > # Your branch and 'origin/main' have diverged,
   > # and have 1 and 2 different commits each, respectively.
   > #  (use "git pull" to merge the remote branch into yours)
   > # You have unmerged paths.
   > #  (fix conflicts and run "git commit")
   > #
   > # Unmerged paths:
   > #  (use "git add/rm <file>..." as appropriate to mark resolution)
   > #
   > #	deleted by us:   README.md
   > #
   > # no changes added to commit (use "git add" and/or "git commit -a")
   ```

1. Open your favorite text editor, such as [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/), and navigate to the file that has merge conflicts.
1. Decide if you want to keep the removed file. You may want to view the latest changes made to the removed file in your text editor.

   To add the removed file back to your repository:

   ```shell
   git add README.md
   ```

   To remove this file from your repository:

   ```shell
   $ git rm README.md
   > README.md: needs merge
   > rm 'README.md'
   ```

1. Commit your changes with a comment.

   ```shell
   $ git commit -m "Resolve merge conflict by keeping README.md file"
   > [branch-d 6f89e49] Merge branch 'branch-c' into branch-d
   ```

You can now merge the branches on the command line or [push your changes to your remote repository](/get-started/using-git/pushing-commits-to-a-remote-repository) on {% data variables.product.product_name %} and [merge your changes](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) in a pull request.

## Further reading

* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)"
* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)"
