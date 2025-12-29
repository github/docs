---
title: Configuring commit rebasing for pull requests
intro: 'You can enforce, allow, or disable commit rebasing for all pull request merges on {% data variables.product.prodname_dotcom %} in your repository.'
redirect_from:
  - /articles/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-rebasing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit rebasing
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Pull Requests", select **Allow rebase merging**. This allows contributors to merge a pull request by rebasing their individual commits onto the base branch.

If you also select another merge method, collaborators will be able to choose the type of merge commit when merging a pull request. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}
