---
title: Reverting a pull request
intro: You can revert a pull request after it's been merged to the upstream branch.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /articles/reverting-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
---
## About reverting a pull request

Reverting a pull request on {% data variables.product.product_name %} creates a new pull request that contains one revert of the merge commit from the original merged pull request. To revert pull requests, you must have [write permissions](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) in the repository.

## Reverting a pull request

{% note %}

**Note:** You may need to revert the individual commits in your pull request if either of the following is true.

* Reverting the pull request causes merge conflicts
* The original pull request was not originally merged on {% data variables.product.product_name %}. For example, someone could have merged the pull request using a fast-forward merge on the command line.

For more information about using Git to manually revert individual commits, see [Git revert](https://git-scm.com/docs/git-revert.html) in the Git documentation.

{% endnote %}

{% data reusables.repositories.sidebar-pr %}
1. In the "Pull Requests" list, click the pull request you'd like to revert.
1. Near the bottom of the pull request, click **Revert**. If the **Revert** option isn't displayed, you'll need to ask the repository administrator for write permissions.

   ![Screenshot of a pull request's timeline. The "Revert" button is outlined in dark orange.](/assets/images/help/pull_requests/revert-pull-request-link.png)

1. Merge the resulting pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)."
