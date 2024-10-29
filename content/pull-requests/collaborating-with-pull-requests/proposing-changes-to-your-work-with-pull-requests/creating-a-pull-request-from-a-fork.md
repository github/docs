---
title: Creating a pull request from a fork
intro: You can create a pull request to propose changes you've made to a fork of an upstream repository.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
  - /articles/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
permissions: 'Anyone with write access to a repository can create a pull request from a user-owned fork. {% data reusables.enterprise-accounts.emu-permission-propose %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create a PR from a fork
---
If your pull request compares your topic branch with a branch in the upstream repository as the base branch, then your topic branch is also called the "compare branch" of the pull request.

For example:
* Your topic branch (also known as “feature branch”) is the branch where you’re making your changes in your forked repository (e.g. `my-topic-branch`).
* The base branch is the branch in the upstream (central) repository that you want to merge your changes into (e.g. `main`).
* The pull request compares the changes proposed by the topic branch (`my-topic-branch`) with the base branch (`main`), so `my-topic-branch` is known as the “compare branch”.

For more information about pull request branches, including examples, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#changing-the-branch-range-and-destination-repository)."

{% data reusables.pull_requests.perms-to-open-pull-request %}

1. Navigate to the original repository where you created your fork.
{% data reusables.repositories.new-pull-request %}
1. On the page to create a new pull request, click **compare across forks**.

   ![Screenshot of the page to open a pull request. The "compare across forks" link is outlined in dark orange.](/assets/images/help/pull_requests/compare-across-forks-link.png)

1. In the "base branch" dropdown menu, select the branch of the upstream repository you'd like to merge changes into.

   ![Screenshot of the page to open a new pull request. The dropdown menus for choosing the base repository and branch are outlined in dark orange.](/assets/images/help/pull_requests/choose-base-fork-and-branch.png)

1. In the "head fork" dropdown menu, select your fork, then use the "compare branch" drop-down menu to select the branch you made your changes in.

   ![Screenshot of the page to open a new pull request. The dropdown menus for choosing the head repository and compare branch are outlined in dark orange.](/assets/images/help/pull_requests/choose-head-fork-compare-branch.png)

{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.allow-maintainers-user-forks %}

{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

## Further reading

* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks)"
* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
