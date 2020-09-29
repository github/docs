---
title: Creating a pull request from a fork
intro: You can create a pull request to propose changes you've made to a fork of an upstream repository.
redirect_from:
  - /articles/creating-a-pull-request-from-a-fork
permissions: Anyone with write access to a repository can create a pull request from user-owned fork.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

You can also give the upstream repository's maintainers permission to push commits to a user-owned fork. If your pull request compares your topic branch with a branch in the upstream repository as the base branch, then your topic branch is also called the compare branch of the pull request. For more information about pull request branches, including examples, see "[Creating a pull request](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository)."

{% data reusables.pull_requests.perms-to-open-pull-request %}

1. Navigate to the original repository where you created your fork.
{% data reusables.repositories.new-pull-request %}
3. On the Compare page, click **compare across forks**. ![Compare across forks link](/assets/images/help/pull_requests/compare-across-forks-link.png)
4. In the "base branch" drop-down menu, select the branch of the upstream repository you'd like to merge changes into. ![Drop-down menus for choosing the base fork and branch](/assets/images/help/pull_requests/choose-base-fork-and-branch.png)
5. In the "head fork" drop-down menu, select your fork, then use the "compare branch" drop-down menu to select the branch you made your changes in. ![Drop-down menus for choosing the head fork and compare branch](/assets/images/help/pull_requests/choose-head-fork-compare-branch.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits.png)
{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

### Дополнительная литература

- "[Working with forks](/articles/working-with-forks)"
- "[Allowing changes to a pull request branch created from a fork](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
