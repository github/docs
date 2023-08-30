---
title: Configuring commit merging for pull requests
intro: 'You can enforce, allow, or disable merging with a merge commit for all pull request merges on {% data variables.location.product_location %} in your repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit merging
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Pull Requests", select **Allow merge commits**. This allows contributors to merge a pull request with a full history of commits.
{% ifversion default-merge-squash-commit-message %}
1. Optionally, under **Allow merge commits**, select the dropdown menu, then click the format of the commit message presented to contributors when merging.

   The default message includes the pull request number and title. For example, `Merge pull request #123 from patch-1`. You can also choose to use just the pull request title, or the pull request title and description.
{% endif %}

If you select more than one merge method, collaborators can choose which type of merge commit to use when they merge a pull request. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"
