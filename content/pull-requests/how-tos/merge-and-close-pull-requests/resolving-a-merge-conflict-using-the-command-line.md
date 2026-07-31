---
title: Resolving a merge conflict using the command line
intro: Resolve merge conflicts using the command line by identifying conflicting changes, editing files, and committing resolutions.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
  - /articles/resolving-a-merge-conflict-from-the-command-line
  - /articles/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
  - /pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Resolve merge conflicts in Git
category:
  - Merge and close pull requests
contentType: how-tos
---
Merge conflicts happen when competing changes are made to the same line of a file, or when one person edits a file and another person deletes the same file. See [AUTOTITLE](/pull-requests/reference/merge-conflicts).

> [!TIP]
> You can use the conflict editor on {% data variables.product.github %} to resolve competing line change merge conflicts between branches that are part of a pull request. See [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-on-github).

## Competing line change merge conflicts

When competing changes affect the same lines, choose which changes to keep, then commit the resolution.

1. Open your terminal or Git Bash.
1. Navigate into the local Git repository that has the merge conflict.

   ```shell
   cd REPOSITORY-NAME
   ```

1. List the files affected by the merge conflict. In this example, the file _styleguide.md_ has a merge conflict.

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

1. Open your preferred text editor, such as [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/), and navigate to the file that has merge conflicts.
1. Search the file for the conflict marker `<<<<<<<`. The changes from the HEAD or base branch appear after `<<<<<<< HEAD`, followed by `=======`, then the changes from the other branch and `>>>>>>> BRANCH-NAME`.

   ```text
   If you have questions, please
   <<<<<<< HEAD
   open an issue
   =======
   ask your question in IRC.
   >>>>>>> branch-a
   ```

{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %} For example, you can keep both changes:

   ```shell
   If you have questions, please open an issue or ask in our IRC channel if it's more urgent.
   ```

1. Stage your changes.

   ```shell
   git add .
   ```

1. Commit your changes with a comment.

   ```shell
   git commit -m "Resolve merge conflict by incorporating both suggestions"
   ```

You can now merge the branches on the command line or [push your changes to your remote repository](/get-started/using-git/pushing-commits-to-a-remote-repository) on {% data variables.product.github %} and [merge your changes](/pull-requests/how-tos/merge-and-close-pull-requests/merging-a-pull-request) in a pull request.

## Removed file merge conflicts

When one branch deletes a file and another branch edits the same file, choose whether to keep or delete the file, then commit the resolution.

1. Open your terminal or Git Bash.
1. Navigate into the local Git repository that has the merge conflict.

   ```shell
   cd REPOSITORY-NAME
   ```

1. List the files affected by the merge conflict. In this example, the file `README.md` has a merge conflict.

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

1. Open your preferred text editor, such as [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/), and navigate to the file that has merge conflicts.
1. Decide whether to keep the removed file. To add it back to your repository:

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

With merge conflicts resolved, you can now push your changes to your remote repository on {% data variables.product.github %} or merge your pull request into its base branch.

## Further reading

* [AUTOTITLE](/pull-requests/reference/merge-conflicts)
* [AUTOTITLE](/pull-requests/how-tos/review-pull-requests/checking-out-pull-requests-locally)
