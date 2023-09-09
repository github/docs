When you click the default **Merge pull request** option on a pull request on {% data variables.location.product_location %}, all commits from the feature branch are added to the base branch in a merge commit. The pull request is merged using [the `--no-ff` option](https://git-scm.com/docs/git-merge#_fast_forward_merge).

To merge pull requests, you must have [write permissions](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) in the repository.

![Diagram of a standard merge and commit flow, where commits from a feature branch and an additional merge commit are both added to `main`.](/assets/images/help/pull_requests/standard-merge-commit-diagram.png)
