When you select the **Rebase and merge** option on a pull request on {% data variables.product.product_location %}, all commits from the topic branch (or head branch) are added onto the base branch individually without a merge commit. Pull requests with rebased commits are merged using the [fast-forward option](https://git-scm.com/docs/git-merge#_fast_forward_merge).

To rebase and merge pull requests, you must have [write permissions](/articles/repository-permission-levels-for-an-organization/) in the repository, and the repository must [allow rebase merging](/articles/configuring-commit-rebasing-for-pull-requests/).

The rebase and merge behavior on {% data variables.product.product_name %} deviates slightly from `git rebase`. Rebase and merge on {% data variables.product.prodname_dotcom %} will always update the committer information and create new commit SHAs, whereas `git rebase` outside of {% data variables.product.prodname_dotcom %} does not change the committer information when the rebase happens on top of an ancestor commit. For more information about `git rebase`, see [the official Git documentation](https://git-scm.com/docs/git-rebase).

For a visual representation of `git rebase`, see [The "Git Branching - Rebasing" chapter from the _Pro Git_ book](https://git-scm.com/book/en/Git-Branching-Rebasing).
