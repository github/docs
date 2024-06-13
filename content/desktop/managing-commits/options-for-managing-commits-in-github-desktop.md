---
title: Options for managing commits in GitHub Desktop
shortTitle: Options for managing commits
intro: 'You can use {% data variables.product.prodname_desktop %} to maintain an easy-to-follow commit history.'
versions:
  feature: desktop
---

## About commit history in {% data variables.product.prodname_desktop %}

When you're contributing changes to a repository, your commit history should tell an easy-to-follow story about how you arrived at the changes you've made. To help people review your work, and to make it easier for people to find when and why changes were introduced to a repository, we recommend you follow certain best practices, such as:

* Organizing your commits into a sequential, easy-to-follow order
* Writing clear commit messages that include your intent and any necessary context
* Making small commits that contain related changes

Often, it is difficult to follow these best practices perfectly at the point where you're making changes. You might realize you need to undo the changes in a commit you've made, edit a commit message, or reorder your commits to tell a clearer story. With {% data variables.product.prodname_desktop %}, you can manage your commit history directly from the user interface.

{% note %}

**Note:** Where possible, you should avoid changing the history of commits that have already been pushed to the remote repository. Other contributors may have already based work on these commits.

{% endnote %}

## Options for managing commit history in {% data variables.product.prodname_desktop %}

| Option | Description | More information |
| ------ | ----------- | ---------------- |
| Undo a commit | Restores the changes from a commit to your working directory, so you can make further changes before re-committing. Useful if you made a mistake in the changes you included. Not possible if you have already pushed the commit to the remote repository. | "[AUTOTITLE](/desktop/managing-commits/undoing-a-commit-in-github-desktop)" |
| Reset to commit |  Similar to undoing a commit, but restores the changes from all of the commits up to the selected commit to your working directory. Can only be used up to the most recent commit that has been pushed to the remote repository. | "[AUTOTITLE](/desktop/managing-commits/resetting-to-a-commit-in-github-desktop)" |
| Amend a commit | Lets you edit your most recent commit message or combine new changes with the most recent commit. Useful if the changes in the previous commit are still valid, but you have made further changes that fit into the same commit. | "[AUTOTITLE](/desktop/managing-commits/amending-a-commit-in-github-desktop)" |
| Revert a commit | Creates a new commit that reverses the changes of another commit in your history. Useful if a commit has already been pushed to the remote repository, and you don't want to remove the commit from the repository's history. | "[AUTOTITLE](/desktop/managing-commits/reverting-a-commit-in-github-desktop)" |
| Cherry-pick a commit | Copies a commit from one branch to another. Useful if you have accidentally committed changes on the wrong branch, or if you need to apply a bug fix across different branches you're working on. | "[AUTOTITLE](/desktop/managing-commits/cherry-picking-a-commit-in-github-desktop)" |
| Reorder commits | Changes the order of commits in your history. Useful if changing the order would make your progress easier to follow. | "[AUTOTITLE](/desktop/managing-commits/reordering-commits-in-github-desktop)" |
| Squash commits | Combines multiple commits into a single commit. Useful if you have a series of small commits that contain related changes. | "[AUTOTITLE](/desktop/managing-commits/squashing-commits-in-github-desktop)" |
