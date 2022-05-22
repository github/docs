When you select the **Squash and merge** option on a pull request on {% data variables.product.product_location %}, the pull request's commits are squashed into a single commit. Instead of seeing all of a contributor's individual commits from a topic branch, the commits are combined into one commit and merged into the default branch. Pull requests with squashed commits are merged using the [fast-forward option](https://git-scm.com/docs/git-merge#_fast_forward_merge).

To squash and merge pull requests, you must have [write permissions](/articles/repository-permission-levels-for-an-organization/) in the repository, and the repository must [allow squash merging](/articles/configuring-commit-squashing-for-pull-requests/).

![commit-squashing-diagram](/assets/images/help/pull_requests/commit-squashing-diagram.png)

You can use squash and merge to create a more streamlined Git history in your repository. Work-in-progress commits are helpful when working on a feature branch, but they aren’t necessarily important to retain in the Git history. If you squash these commits into one commit while merging to the default branch, you can retain the original changes with a clear Git history.
