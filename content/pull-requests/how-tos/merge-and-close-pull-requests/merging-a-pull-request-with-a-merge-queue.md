---
title: Merging a pull request with a merge queue
intro: 'Use merge queues in {% data variables.product.github %} to streamline pull request merging, ensure required checks pass, and manage queue operations effectively.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Merge PR with merge queue
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue
defaultTool: webui
product: '{% data reusables.gated-features.merge-queue %}'
category:
  - Merge and close pull requests
contentType: how-tos
---

## About merge queues

A merge queue helps merge pull requests into a busy protected branch after required checks pass. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue).

## Adding a pull request to a merge queue

{% webui %}

> [!NOTE]
> You can use {% data variables.product.prodname_cli %} to add a pull request to a merge queue. For more information, click the "{% data variables.product.prodname_cli %}" tab at the top of this article.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}

1. In the "Pull Requests" list, click the pull request you want to add to a merge queue.

1. Click **Merge when ready** to add the pull request to the merge queue. Alternatively, if you are an administrator, you can:

   * Directly merge the pull request by checking **Merge without waiting for requirements to be met (bypass branch protections)**, if allowed by branch protection settings, and follow the standard flow.

   ![Screenshot of the merge queue options for a pull request.](/assets/images/help/pull_requests/merge-queue-options.png)

   > [!NOTE]
   > You can click **Merge when ready** before all requirements pass. {% data variables.product.github %} adds the pull request to the queue when requirements are met.

1. Confirm you want to add the pull request to the merge queue by clicking **Confirm merge when ready**.

{% endwebui %}

{% cli %}

With {% data variables.product.prodname_cli %}, use the `gh pr merge` command to add a pull request to a merge queue. If you are targeting a branch that requires a merge queue, this command automatically adds the pull request to the queue if required checks have passed. If required checks have not passed, this command enables auto-merge for the pull request. See [`gh pr merge`](https://cli.github.com/manual/gh_pr_merge) in the {% data variables.product.prodname_cli %} manual.

{% endcli %}

## Removing a pull request from a merge queue

{% cli %}

To remove a pull request from a merge queue, you must navigate to the repository's page on {% data variables.location.product_location %}. You cannot use {% data variables.product.prodname_cli %} to remove a pull request from a merge queue.

{% endcli %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}

1. In the "Pull Requests" list, click the pull request you want to remove from a merge queue.

1. To remove the pull request from the queue, click **Remove from queue**.

   ![Screenshot of the merge queue message at the bottom of a pull request. The "Remove from queue" button is outlined in dark orange.](/assets/images/help/pull_requests/remove-from-queue-button.png)

Alternatively, you can navigate to the merge queue page for the base branch, click **...** next to the pull request you want to remove, and select **Remove from queue**. For information about getting to the merge queue page for the base branch, see the section below.

## Viewing merge queues

{% cli %}

You can view the merge queue for a base branch in various places on {% data variables.product.github %}. You cannot use {% data variables.product.prodname_cli %} to view a merge queue.

{% endcli %}

{% webui %}

You can view the merge queue for a base branch in various places on {% data variables.product.github %}.

{% endwebui %}

* On the **Branches** page for the repository. We recommend this route if you don't have or don't know about a pull request already in a queue, and if you want to see what's in that queue. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository).

  ![Screenshot of the "Branches" page for a repository. A link, labeled "33 pull requests queued to merge," is outlined in dark orange.](/assets/images/help/pull_requests/merge-queue-branches-page.png)

* On the pull request page, when a merge queue is required for merging, scroll to the bottom of the timeline and click the **merge queue** link.

  ![Screenshot of the merge queue message at the bottom of a pull request. The "merge queue" link is outlined in dark orange.](/assets/images/help/pull_requests/merge-queue-link.png)

* The merge queue view shows the pull requests that are currently in the queue, with your pull requests clearly marked.

  ![Screenshot of the merge queue for a repository.](/assets/images/help/pull_requests/merge-queue-view.png)

## Understanding why your pull request was removed from the merge queue

A pull request can be removed from the merge queue if it no longer meets merge requirements or if a queue check fails.

{% data reusables.pull_requests.merge-queue-removal-reasons %}
