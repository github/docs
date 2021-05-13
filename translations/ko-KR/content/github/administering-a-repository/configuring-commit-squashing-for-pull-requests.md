---
title: Configuring commit squashing for pull requests
intro: 'You can enforce, allow, or disable commit squashing for all pull request merges on {% data variables.product.product_location %} in your repository.'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Merge button", optionally select **Allow merge commits**. This allows contributors to merge a pull request with a full history of commits. ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png)
4. Under "Merge button", select **Allow squash merging**. This allows contributors to merge a pull request by squashing all commits into a single commit. If you select another merge method besides **Allow squash merging**, collaborators will be able to choose the type of merge commit when merging a pull request. {% data reusables.repositories.squash-and-rebase-linear-commit-hisitory %} ![Pull request squashed commits](/assets/images/help/repository/pr-merge-squash.png)

### 더 읽을거리

- "[About pull request merges](/articles/about-pull-request-merges)"
- "[Merging a pull request](/articles/merging-a-pull-request)"
