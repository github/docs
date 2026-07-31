---
title: Merging stacked pull requests
shortTitle: Merge stacked PRs
intro: Merge a stack from the bottom up, individually, or in contiguous groups.
versions:
  feature: pr-stacks
contentType: how-tos
category:
  - Merge and close pull requests
---

{% data reusables.public-preview.public-preview %}

Stacked pull requests merge from the bottom (closest to the trunk) up. 

* You can merge any number of pull requests at once, as long as they form a contiguous group starting from the lowest unmerged pull request. 
* You cannot merge a mid-stack pull request in isolation, the pull requests below it will always merge with it.

## Merge requirements

The merge box for a stacked pull request shows the status of the entire stack, not just the current pull request. Before a pull request in the stack can merge, the following must be true:

* All pull requests below it are approved and have passing checks.
* The stack has a linear history.
* The current pull request meets all branch protection requirements for the stack base, such as `main`.

If the stack is not linear, for example, after changes were pushed to a lower branch or after the trunk moved ahead, a **Rebase stack** button will appear in the merge box and you'll need to rebase the stack before you can merge.

> [!NOTE]
> * If you merge via the API and want to use stacked pull requests, you'll need to update your code to use the new merge API for stacks. See [AUTOTITLE](/rest/pulls/pulls?apiVersion=2026-03-10#merge-a-pull-request-asynchronously).
> * Auto-merge is not supported for stacked pull requests.

## Merging using a merge queue

Stacks fully support merge queues. All pull requests in the stack are added to the queue in the correct order. If a pull request is removed or ejected from the queue, all pull requests above it in the stack are also removed. 

> [!NOTE]
> To keep a stack together, the merge queue allows the merge group to exceed its configured maximum size by up to 50 percent. If the stack is too large to fit within that buffer, it will automatically be split across consecutive merge groups.

## Merging from the bottom up

1. Navigate to the lowest unmerged pull request in the stack, or to a higher pull request if you want to merge a contiguous group up to that point.

1. Confirm that the pull request and all pull requests below it meet the merge requirements.

1. Merge the pull request. The selected pull request and all unmerged pull requests below it land on the base branch together as a single operation, ordered from the bottom up in the resulting history.

After the merge, the next unmerged pull request is automatically rebased to target the stack base directly, so it moves to the bottom and is ready to review and merge.

Once every pull request in a stack has merged, the stack is complete and can't be extended. If you add new branches on top and run `gh stack submit`, {% data variables.product.prodname_cli %} automatically starts a new stack rooted at the trunk for those branches.
