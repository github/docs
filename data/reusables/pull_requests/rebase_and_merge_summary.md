When you select the **Rebase and merge** option on a pull request, all commits from the topic branch (or head branch) are added onto the base branch individually without a merge commit. In that way, the rebase and merge behavior resembles a [fast-forward merge](https://git-scm.com/docs/git-merge#_fast_forward_merge) by maintaining a linear project history. However, rebasing achieves this by re-writing the commit history on the base branch with new commits.

The rebase and merge behavior on {% data variables.product.github %} deviates slightly from `git rebase` outside of {% data variables.product.prodname_dotcom %}. Rebase and merge on {% data variables.product.prodname_dotcom %}:

* Always updates the committer information and creates new commit SHAs, whereas `git rebase` does not change the committer information when the rebase happens on top of an ancestor commit.
* Drops commits that were empty to begin with, such as those created with `git commit --allow-empty`, whereas `git rebase` keeps originally-empty commits by default.

For more information about `git rebase`, see [git-rebase](https://git-scm.com/docs/git-rebase) in the Git documentation.

To rebase and merge pull requests, you must have [write permissions](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) in the repository, and the repository must [allow rebase merging](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-rebasing-for-pull-requests).

For a visual representation of `git rebase`, see [The "Git Branching - Rebasing" chapter from the _Pro Git_ book](https://git-scm.com/book/en/v2/Git-Branching-Rebasing).
