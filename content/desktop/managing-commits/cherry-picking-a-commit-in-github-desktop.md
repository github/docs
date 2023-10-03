---
title: Cherry-picking a commit in GitHub Desktop
shortTitle: Cherry-picking
intro: 'You can use {% data variables.product.prodname_desktop %} to pick a specific commit on one branch and copy the commit to another branch.'
versions:
  feature: desktop
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/cherry-picking-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-commits/cherry-picking-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-commits/cherry-picking-a-commit-in-github-desktop
---
## About Git cherry-pick

You can cherry-pick a commit on one branch to create a copy of the commit with the same changes on another branch. If you commit changes to the wrong branch or want to make the same changes to another branch, you can cherry-pick the commit to apply the changes to another branch. You can also use cherry-picking to apply specific changes before you are ready to create or merge a pull request. For example, if you commit a bug fix to a feature branch, you can cherry-pick the commit with the bug fix to other branches of your project.

You can also use cherry-picking when collaborating with a team. Some projects incorporate contributions by cherry-picking commits. For more information, see [Distributed Git - Maintaining a Project](https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project#_rebase_cherry_pick) in the Git documentation.

## Cherry-picking a commit

{% data reusables.desktop.current-branch-menu %}
1. In the list of branches, click the branch that has the commit that you want to cherry-pick.

   ![Screenshot of the "Current Branch" dropdown view. Under "Recent Branches", a branch, named "my-feature", is highlighted with an orange outline.](/assets/images/help/desktop/select-branch-from-dropdown.png)

{% data reusables.desktop.history-tab %}
1. Select the commit you would like to cherry-pick.

   {% mac %}

   You can select one commit or select multiple commits using <kbd>Command</kbd> or <kbd>Shift</kbd>.

   {% endmac %}

   {% windows %}

   You can select one commit or select multiple commits using <kbd>Ctrl</kbd> or <kbd>Shift</kbd>.

   {% endwindows %}

1. Right-click the selected commit and click **Cherry pick commit**, then select the branch that you want to copy the commit to. You can also drag the commit that you want to cherry-pick from the "History" tab to the {% octicon "git-branch" aria-hidden="true" %} **Current Branch** dropdown menu, then drop the commit on the branch that you want to copy the commit to.

   ![Screenshot of the "History" tab and the "Current Branch" dropdown view. The cursor hovers over the "my-feature" branch, and "plus one" icons indicate the addition of one commit.](/assets/images/help/desktop/cherry-picking.png)

1. The current branch changes to the branch onto which you cherry-picked the commit. You can now push the cherry-picked commit to the remote repository.

## Further reading

- [git-cherry-pick](https://git-scm.com/docs/git-cherry-pick) in the Git documentation
