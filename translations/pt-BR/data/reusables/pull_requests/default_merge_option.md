When you click the default **Merge pull request** option on a pull request on {% data variables.product.product_location %}, all commits from the feature branch are added to the base branch in a merge commit. The pull request is merged using [the `--no-ff` option](https://git-scm.com/docs/git-merge#_fast_forward_merge).

To merge pull requests, you must have [write permissions](/articles/repository-permission-levels-for-an-organization/) in the repository.

![standard-merge-commit-diagram](/assets/images/help/pull_requests/standard-merge-commit-diagram.png)
