---
title: Allowing changes to a pull request branch created from a fork
intro: 'For greater collaboration, you can allow commits on branches you''ve created from forks in your personal account.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
permissions: People with push access to the upstream repository of a fork in a personal account can commit to the forked branches.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Allow changes to a branch
---
When a user creates a pull request from their fork, the user generally has the authority to decide if other users can commit to the pull request's compare branch. If the pull request author wants greater collaboration, they can grant maintainers of the upstream repository (that is, anyone with push access to the upstream repository) permission to commit to the pull request's compare branch. To learn more about upstream repositories, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)."

Pull request authors can give these permissions when they initially create a pull request from a fork in a personal account or after they create the pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)."

You can set commit permissions when you first create a pull request from a fork. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)." Additionally, you can modify an existing pull request to let repository maintainers make commits to your branch.

## Enabling repository maintainer permissions on existing pull requests

1. On {% data variables.product.product_name %}, navigate to the main page of the upstream repository of your pull request.
1. Under the upstream repository name, click {% octicon "git-pull-request" aria-hidden="true" %} **Pull requests**.
{% ifversion global-nav-update %}

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Pull requests," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-pull-requests-global-nav-update.png)

{% else %}

   ![Screenshot of the main page of a repository. In the horizontal navigation bar, a tab, labeled "Pull requests," is outlined in dark orange.](/assets/images/help/repository/repo-tabs-pull-requests.png)

{% endif %}
1. In the list of pull requests, navigate to the pull request that you'd like to allow commits on.
{% data reusables.repositories.allow-maintainers-user-forks %}

   ![Screenshot of a pull request. On the right bottom side, a blue, enabled checkbox, labeled "Allow edits and access to secrets by maintainers", is highlighted with an orange outline.](/assets/images/help/pull_requests/allow-edits-and-access-by-maintainers.png)

## Further reading

* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)"
