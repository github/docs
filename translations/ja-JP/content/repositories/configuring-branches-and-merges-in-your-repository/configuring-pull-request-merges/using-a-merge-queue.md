---
title: Using a merge queue
intro: You can increase development velocity by enabling merge queues for pull requests in your repository.
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can configure merge queues for pull requests targeting selected branches of a repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Use merge queue
---

{% data reusables.pull_requests.merge-queue-beta %}

## About pull request merge queue

{% data reusables.pull_requests.merge-queue-overview %}
{% data reusables.pull_requests.merge-queue-reject %}

## Managing pull request merge queue

Repository administrators can configure merge queues for pull requests targeting selected branches of a repository. The requirement to use a merge queue is a branch protection setting called "Require merge queue" that can be enabled in branch protection rules.

For information about how to enable the merge queue protection setting, see "[Managing a branch protection rule](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)."

## 参考リンク

- "[Adding a pull request to the merge queue](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue)"
- [保護されたブランチについて](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
