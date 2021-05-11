---
title: Allowing changes to a pull request branch created from a fork
intro: 'For greater collaboration, you can allow commits on branches you''ve created from forks owned by your user account.'
redirect_from:
  - /articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork
permissions: People with push access to the upstream repository of a fork owned by a user account can commit to the forked branches.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Only pull request authors can give upstream repository maintainers, or those with push access to the upstream repository, permission to make commits to their pull request's compare branch in a user-owned fork. To learn more about upstream repositories, see "[About forks](/articles/about-forks)."

Pull request authors can give these permissions when they initially create a pull request from a user-owned fork or after they create the pull request. For more information, see "[Creating a pull request from a fork](/articles/creating-a-pull-request-from-a-fork)."

You can set commit permissions when you first create a pull request from a fork. For more information, see "[Creating a pull request from a fork](/articles/creating-a-pull-request-from-a-fork)." Additionally, you can modify an existing pull request to let repository maintainers make commits to your branch.

### Enabling repository maintainer permissions on existing pull requests

1. On {% data variables.product.product_name %}, navigate to the main page of the upstream repository of your pull request.
2. Under the upstream repository name, click {% octicon "git-pull-request" aria-label="The pull request icon" %} **Pull requests**.
![Issues and pull requests tab selection](/assets/images/help/repository/repo-tabs-pull-requests.png)
3. In the list of pull requests, navigate to the pull request that you'd like to allow commits on.
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-sidebar-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits-sidebar-checkbox.png)

### Further reading

- "[Committing changes to a pull request branch created from a fork](/articles/committing-changes-to-a-pull-request-branch-created-from-a-fork)"
