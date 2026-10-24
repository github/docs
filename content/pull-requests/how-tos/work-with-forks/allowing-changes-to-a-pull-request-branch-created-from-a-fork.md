---
title: Allowing changes to a pull request branch created from a fork
intro: Enable collaboration by allowing repository maintainers to commit changes to pull request branches created from forks in your personal account.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
permissions: People with push access to the upstream repository of a fork in a personal account can commit to the forked branches.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Allow changes to a branch
category:
  - Work with forks
contentType: how-tos
---
When someone creates a pull request from their fork, they usually decide whether other people can commit to the pull request's compare branch. For greater collaboration, the author can give maintainers of the upstream repository—that is, anyone with push access to the upstream repository—permission to commit to the compare branch. See [AUTOTITLE](/pull-requests/reference/forks).

Pull request authors can set these permissions when they create a pull request from a fork in a personal account. They can also update an existing pull request to let repository maintainers commit to the branch. See [AUTOTITLE](/pull-requests/how-tos/create-pull-requests/creating-a-pull-request-from-a-fork).

## Enabling repository maintainer permissions on existing pull requests

1. On {% data variables.product.github %}, navigate to the main page of the upstream repository of your pull request.
1. Under the upstream repository name, click **{% octicon "git-pull-request" aria-hidden="true" aria-label="git-pull-request" %} Pull requests**.

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Pull requests," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-pull-requests-global-nav-update.png)

1. In the list of pull requests, navigate to the pull request that you'd like to allow commits on.
{% data reusables.repositories.allow-maintainers-user-forks %}

   ![Screenshot of a pull request. On the bottom right, the "Allow edits and access to secrets by maintainers" checkbox is enabled and outlined in orange.](/assets/images/help/pull_requests/allow-edits-and-access-by-maintainers.png)

## Further reading

* [AUTOTITLE](/pull-requests/how-tos/commit-changes/committing-changes-to-a-pull-request-branch-created-from-a-fork)
