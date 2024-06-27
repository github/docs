---
title: Managing a merge queue
intro: You can increase development velocity with a merge queue for pull requests in your repository.
versions:
  feature: merge-queue
permissions: People with admin permissions can manage merge queues for pull requests targeting selected branches of a repository.
product: '{% data reusables.gated-features.merge-queue %}'
topics:
  - Repositories
  - Pull requests
shortTitle: Managing merge queue
redirect_from:
  - /repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/using-a-merge-queue
---

## About merge queues

{% data reusables.pull_requests.merge-queue-overview %}

For more information on merging a pull request using a merge queue, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)."

## Configuring continuous integration (CI) workflows for merge queues

{% note %}

**Notes:**

* A merge queue cannot be enabled with branch protection rules that use wildcard characters (`*`) in the branch name pattern.
* A merge queue will wait for required checks to be reported before it can proceed with merging. You must update your CI configuration to trigger and report on merge group events when requiring a merge queue.
* Merge queue and pull requests checks are coupled and configured under branch protection rules or rulesets. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue#managing-a-merge-queue)."

{% endnote %}

### Triggering merge group checks with {% data variables.product.prodname_actions %}

You **must** use the `merge_group` event to trigger your {% data variables.product.prodname_actions %}  workflow when a pull request is added to a merge queue.

{% note %}

**Note:** {% data reusables.actions.merge-group-event-with-required-checks %}

{% endnote %}

A workflow that reports a check which is required by the target branch's protections would look like this:

```yaml
on:
  pull_request:
  merge_group:
```

For more information on the `merge_group` event, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#merge_group)."

### Triggering merge group checks with third-party CI providers

With third-party CI providers, you will need to update your CI configuration to run when a branch that begins with the special prefix `gh-readonly-queue/{base_branch}` is pushed to. These are the temporary branches that are created on your behalf by a merge queue and contain a different `sha` from the pull request.

## Managing a merge queue

Repository administrators can require a merge queue by enabling the branch protection setting "Require merge queue" in the protection rules for the base branch. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule#creating-a-branch-protection-rule)."

Once you have enabled the "Require merge queue" setting, you can also access the following settings:

* **Merge method**: Select which method to use when merging queued pull requests: merge, rebase, or squash.

* **Build concurrency**: The maximum number of `merge_group` webhooks to dispatch (between `1` and `100`), throttling the total amount of concurrent CI builds. This affects the velocity of merges that a merge queue can complete.
* **Only merge non-failing pull requests**: This setting determines how a merge queue forms groups of pull requests to be merged.

  | Enabled? | Description |
  | -------- | ----------- |
  | Yes      | All pull requests must satisfy required checks to be merged. |
  | No       | Pull requests that have failed required checks can be added to a group as long as the last pull request in the group has passed required checks. If the last pull request in the group has passed required checks, this means that the checks have passed for the combined set of changes in the merge group. Leaving this checkbox unselected can be useful if you have intermittent test failures, but don't want false negatives to hold up the queue. |

* **Status check timeout**: Choose how long the queue should wait for a response from CI before assuming that checks have failed.

* **Merge limits**: Select the minimum and maximum number of pull requests to merge into the base branch at the same time (between `1` and `100`), and a timeout after which the queue should stop waiting for more entries and merge with fewer than the minimum number.

{% note %}

**Note:** Merge limits do not combine `merge_group` **builds**. Merge limits only affect merges to the base branch once one or more `merge_group` has satisfied build checks.

{% endnote %}

  | Merge Limit | Use Case |
  | ----------- | -------- |
  | Maximum pull requests to merge | You can specify a maximum group size, which is useful if merges to your base branch trigger a deployment, and you want to make sure you’re not deploying too many changes at once. |
  | Minimum pull requests to merge | You can specify a minimum group size, which is useful if merges to your base branch trigger a lengthy CI build or deploy process, and you don’t want to hold up the following entries in the queue. |
  | Wait time | You can specify a timeout for reaching the minimum group size, which allows smaller groups to merge if there are no more PRs queued within your specified time limit. |

## How merge queues work

As pull requests are added to the merge queue, the merge queue ensures that they are merged in a first-in-first-out order where the required checks are always satisfied.

A merge queue creates temporary branches with a special prefix to validate pull request changes. When a pull request is added to the merge queue, the changes in the pull request are grouped into a `merge_group` with the latest version of the `base_branch` as well as changes from pull requests ahead of it in the queue. {% data variables.product.product_name %} will merge all these changes into the `base_branch` once the checks required by the branch protections of `base_branch` pass.

For information about merge methods, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)."

### Successful CI

When multiple pull requests are added to the merge queue and when the temporary `merge_group` branches have successful CI results, they are both merged. In the following scenario, two pull requests are successfully added to the queue and merged to the target branch.

1. User adds pull request #1 to the merge queue.
1. The merge queue creates a temporary branch with the prefix of `main/pr-1` that contains code changes from the target branch and pull request #1. A `merge_group` webhook event of type `checks_requested` is dispatched and the merge queue will await a response from your CI provider.
1. User adds pull request #2 to the merge queue.
1. The merge queue creates a temporary branch with the prefix of `main/pr-2` that contains code changes from the target branch, pull request #1, and pull request #2, and dispatches webhooks.
1. When the {% data variables.product.product_name %} API receives successful CI responses for `merge_group` branches `main/pr-1` and `main/pr-2`, the temporary branch `main/pr-2` will be merged in to the target branch. The target branch now contains both changes from pull request #1 and #2.

### Failing CI

{% data reusables.pull_requests.merge-queue-reject %}

The following scenario outlines what happens when a CI reports a failing status about one pull request.

1. User adds pull request #1 to the merge queue.
1. The merge queue creates a temporary branch with the prefix of `main/pr-1` that contains code changes from the target branch and pull request #1. A `merge_group` webhook event of type `checks_requested` is dispatched and the merge queue will await a response from your CI provider.
1. User adds pull request #2 to the merge queue.
1. The merge queue creates a temporary branch with the prefix of `main/pr-2` that contains code changes from the target branch, pull request #1, and pull request #2, and dispatches webhooks.
1. When the {% data variables.product.product_name %} API receives a failing status for `main/pr-1`, the merge queue automatically removes pull request #1 from the merge queue.
1. The merge queue recreates the temporary branch with the prefix of `main/pr-2` to only contain changes from the target branch and pull request #2.
1. When the {% data variables.product.product_name %} API receives successful CI responses for `merge_group` branch `main/pr-2`, the temporary branch `main/pr-2` will be merged in to the target branch without pull request #1 included.

{% data reusables.pull_requests.merge-queue-removal-reasons %}

### Jumping to the top of the queue

When adding a pull request to a merge queue, there is an option to move your pull request to the top of the queue.

{% note %}

**Note:** Be aware that jumping to the top of a merge queue will cause a full rebuild of all in-progress pull requests, as the reordering of the queue introduces a break in the commit graph. Heavily utilizing this feature can slow down the velocity of merges for your target branch.

{% endnote %}

The following scenario outlines what happens when a user jumps the queue.

1. User adds pull request #1 to the merge queue.
1. The merge queue creates a temporary branch with the prefix of `main/pr-1` that contains code changes from the target branch and pull request #1. A `merge_group` webhook event of type `checks_requested` is dispatched and the merge queue will await a response from your CI provider.
1. User adds pull request #2 to the merge queue.
1. The merge queue creates a temporary branch with the prefix of `main/pr-2` that contains code changes from the target branch, pull request #1, and pull request #2, and dispatches webhooks.
1. User adds pull request #3 to the merge queue with the jump option which introduces a break in the commit graph.
1. The merge queue creates a temporary branch with the prefix of `main/pr-3` that contains code changes from the target branch and pull request #3, and dispatches webhooks.
1. The merge queue recreates the temporary branches with the prefix of `main/pr-1` and `main/pr-2` that contain the changes from pull request #3, and dispatches webhooks.

## Further reading

* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)"
* "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)"
