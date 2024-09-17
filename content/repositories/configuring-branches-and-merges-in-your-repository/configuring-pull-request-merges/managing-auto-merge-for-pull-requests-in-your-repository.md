---
title: Managing auto-merge for pull requests in your repository
intro: You can allow or disallow auto-merge for pull requests in your repository.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
permissions: People with maintainer permissions can manage auto-merge for pull requests in a repository.
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository
  - /github/administering-a-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository
shortTitle: Manage auto merge
---
## About auto-merge

If you allow auto-merge for pull requests in your repository, people with write permissions can configure individual pull requests in the repository to merge automatically when all merge requirements are met. If someone who does not have write permissions pushes changes to a pull request that has auto-merge enabled, auto-merge will be disabled for that pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)."

## Managing auto-merge

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. On the left side of the page in the navigation bar, click **General**
1. Toward the bottom of the page under "Pull Requests", select or deselect **Allow auto-merge**.

![Screenshot of a repository settings showing the auto merge.](/assets/images/help/repository/repo-action-auto-merge.png)
