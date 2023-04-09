---
title: Cherry-picking a commit
intro: You can pick a specific commit on one branch and copy the commit to another branch.
versions:
  fpt: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/cherry-picking-a-commit
---
## About Git cherry-pick

You can cherry-pick a commit on one branch to create a copy of the commit with the same changes on another branch. If you commit changes to the wrong branch or want to make the same changes to another branch, you can cherry-pick the commit to apply the changes to another branch. You can also use cherry-picking to apply specific changes before you are ready to create or merge a pull request. For example, if you commit a bug fix to a feature branch, you can cherry-pick the commit with the bug fix to other branches of your project.

You can also use cherry-picking when collaborating with a team. Some projects incorporate contributions by cherry-picking commits. For more information, see [Distributed Git - Maintaining a Project](https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project#_rebase_cherry_pick) in the Git documentation.

## Cherry-picking a commit

{% data reusables.desktop.current-branch-menu %}
2. In the list of branches, click the branch that has the commit that you want to cherry-pick.

  ![Screenshot of the "Current Branch" dropdown view. Under "Recent Branches", a branch, named "my-feature", is highlighted with an orange outline.](/assets/images/help/desktop/select-branch-from-dropdown.png)

{% data reusables.desktop.history-tab %}
4. Drag the commit that you want to cherry-pick from the "History" tab to the {% octicon "git-branch" aria-label="The branch icon" %} **Current Branch** dropdown menu, then drop the commit on the branch that you want to copy the commit to.

  ![Screenshot of the "History" tab and the "Current Branch" dropdown view. The cursor hovers over the "my-feature" branch, and "plus one" icons indicate the addition of one commit.](/assets/images/help/desktop/cherry-picking.png)

## Further reading
- [git-cherry-pick](https://git-scm.com/docs/git-cherry-pick) in the Git documentation
