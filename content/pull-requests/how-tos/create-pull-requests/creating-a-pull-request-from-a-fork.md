---
title: Creating a pull request from a fork
intro: Create a pull request from a fork to propose changes to an upstream repository and collaborate on code effectively.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
  - /articles/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
  - /pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
permissions: Anyone with write access to a repository can create a pull request from a user-owned fork. {% data reusables.enterprise-accounts.emu-permission-propose %}
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Create a PR from a fork
category:
  - Create pull requests
contentType: how-tos
---

Before creating a pull request from a fork, fork the upstream repository and push your changes to a branch in your fork. See [AUTOTITLE](/pull-requests/how-tos/work-with-forks/fork-a-repo).

In a pull request from a fork, the base branch is where you want to merge your changes, and the compare branch is the branch in your fork that contains your changes. See [AUTOTITLE](/pull-requests/how-tos/create-pull-requests/creating-a-pull-request#creating-the-pull-request).

{% data reusables.pull_requests.perms-to-open-pull-request %}

1. Navigate to the original repository where you created your fork.
{% data reusables.repositories.new-pull-request %}
1. On the page to create a new pull request, click **compare across forks**.

   ![Screenshot of the page to open a pull request. The "compare across forks" link is outlined in dark orange.](/assets/images/help/pull_requests/compare-across-forks-link.png)

1. In the "base branch" dropdown menu, select the branch of the upstream repository where you want to merge changes.

   ![Screenshot of the page to open a new pull request. The dropdown menus for choosing the base repository and branch are outlined in dark orange.](/assets/images/help/pull_requests/choose-base-fork-and-branch.png)

1. In the "head fork" dropdown menu, select your fork. Then, use the "compare branch" dropdown menu to select the branch where you made your changes.

   ![Screenshot of the page to open a new pull request. The dropdown menus for choosing the head repository and compare branch are outlined in dark orange.](/assets/images/help/pull_requests/choose-head-fork-compare-branch.png)

{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.allow-maintainers-user-forks %}

{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

## Further reading

* [AUTOTITLE](/pull-requests/how-tos/work-with-forks)
* [AUTOTITLE](/pull-requests/how-tos/work-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)
