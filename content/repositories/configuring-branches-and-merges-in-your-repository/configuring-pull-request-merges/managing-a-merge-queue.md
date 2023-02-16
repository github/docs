---
title: Managing a merge queue
intro: You can increase development velocity with a merge queue for pull requests in your repository.
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can manage merge queues for pull requests targeting selected branches of a repository.
product: '{% data reusables.gated-features.merge-queue %}'
topics:
  - Repositories
  - Pull requests
shortTitle: Managing merge queue
redirect_from:
  - /repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/using-a-merge-queue
---

{% data reusables.pull_requests.merge-queue-beta %}

## About merge queues

{% data reusables.pull_requests.merge-queue-overview %}

The merge queue creates temporary branches with a special prefix to validate pull request changes. The changes in the pull request are then grouped into a `merge_group` with the latest version of the `base_branch` as well as changes ahead of it in the queue. {% data variables.product.product_name %} will merge all these changes into `base_branch` once the checks required by the branch protections of `base_branch` pass.


For information about merge methods, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)."

{% note %}

**Notes:**

* A merge queue cannot be enabled with branch protection rules that use wildcard characters (`*`) in the branch name pattern.
* A merge queue will wait for required checks to be reported before it can proceed with merging. You must update your CI configuration to trigger and report on merge group events when requiring a merge queue.

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

### Triggering merge group checks with {% data variables.product.prodname_actions %}

You can use the `merge_group` event to trigger your {% data variables.product.prodname_actions %} workflow when a pull request is added to a merge queue. Note that this is a different event from the `pull_request` and `push` events.

A workflow that reports a check which is required by the target branch's protections would look like this:

```yaml
on:
  pull_request:
  merge_group:
```

For more information, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#merge-group)."

### Triggering merge group checks with other CI providers

With other CI providers, you may need to update your CI configuration to run when a branch that begins with the special prefix `gh-readonly-queue/{base_branch}` is created.

## Managing a merge queue

Repository administrators can require a merge queue by enabling the branch protection setting "Require merge queue" in the protection rules for the base branch. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)."


Once you have enabled "require merge queue," you can also access the following settings:

- **Merge method**: Select which method to use when merging queued pull requests: merge, rebase, or squash.

- **Build concurrency**: Select the maximum number of pull requests to build (between 1 and 100). This setting limits the number of queued pull requests that can run CI checks at the same time.

- **Merge limits**: Select the minimum and maximum number of pull requests to merge in a single group (between 1 and 100), and a timeout after which the queue should stop waiting for more entries and merge with fewer than the minimum number of pull requests.

- **Only merge non-failing pull requests**: This setting determines how the merge queue forms groups of pull requests to be merged.

    If selected, only pull requests that are passing their required CI checks can be added to a group. This can be useful if you want to maintain a history where every commit is in a good state, or if you run different sets of checks for different pull requests.

    If unselected, pull requests that have failed required checks can be added to a group as long as the last pull request in the group has passed required checks. If the last pull request in the group has passed required checks, this means that the checks have passed for the combined set of changes in the merge group. Leaving this checkbox unselected can be useful if you have intermittent test failures, but don't want false negatives to hold up the queue.

- **Status check timeout**: Choose how long the queue should wait for a response from CI before assuming that checks have failed.

## Further reading

* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)"
* "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)"
