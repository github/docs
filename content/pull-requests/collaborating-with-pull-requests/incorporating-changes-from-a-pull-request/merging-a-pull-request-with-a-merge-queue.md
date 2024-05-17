---
title: Merging a pull request with a merge queue
intro: 'If a merge queue is required by the branch protection setting for the branch, you can add your pull requests to a merge queue and {% data variables.product.product_name %} will merge the pull requests for you once all required checks have passed.'
versions:
  feature: merge-queue
topics:
  - Pull requests
shortTitle: Merge PR with merge queue
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
defaultTool: webui
product: '{% data reusables.gated-features.merge-queue %}'
---

## About merge queues

{% data reusables.pull_requests.merge-queue-overview %}
{% data reusables.pull_requests.merge-queue-references %}

## Adding a pull request to a merge queue

{% webui %}

{% note %}

**Note:** You can use {% data variables.product.prodname_cli %} to add a pull request to a merge queue. For more information, click the "{% data variables.product.prodname_cli %}" tab at the top of this article.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}

1. In the "Pull Requests" list, click the pull request you would like to add to a merge queue.

1. Click **Merge when ready** to add the pull request to the merge queue. Alternatively, if you are an administrator, you can:

   - Directly merge the pull request by checking **Merge without waiting for requirements to be met ({% ifversion bypass-branch-protections %}bypass branch protections{% else %}administrators only{% endif %})**, if allowed by branch protection settings, and follow the standard flow.

   ![Screenshot of the merge queue options for a pull request.](/assets/images/help/pull_requests/merge-queue-options.png)

   {% note %}

   **Note:** You can click  **Merge when ready** whenever you're ready to merge your proposed changes. {% data variables.product.product_name %} will automatically add the pull request to the merge queue once required approval and status checks conditions are met.

   {% endnote %}

1. Confirm you want to add the pull request to the merge queue by clicking  **Confirm merge when ready**.

{% endwebui %}

{% cli %}

With {% data variables.product.prodname_cli %}, you can use the `gh pr merge` command to add a pull request to a merge queue. If you are targeting a branch that requires a merge queue, this command automatically adds the pull request to the queue if required checks have passed. If required checks have not passed, this command enables auto-merge for the pull request. For more information, see [`gh pr merge`](https://cli.github.com/manual/gh_pr_merge) in the {% data variables.product.prodname_cli %} manual.

{% endcli %}

## Removing a pull request from a merge queue

{% cli %}

To remove a pull request from a merge queue, you must navigate to the repository's page on {% data variables.location.product_location %}. You cannot use {% data variables.product.prodname_cli %} to remove a pull request from a merge queue.

{% endcli %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}

1. In the "Pull Requests" list, click the pull request you would like to remove from a merge queue.

1. To remove the pull request from the queue, click **Remove from queue**.

   ![Screenshot of the merge queue message at the bottom of a pull request. The "Remove from queue" button is outlined in dark orange.](/assets/images/help/pull_requests/remove-from-queue-button.png)

Alternatively, you can navigate to the merge queue page for the base branch, click **...** next to the pull request you want to remove, and select **Remove from queue**. For information on how to get to the merge queue page for the base branch, see the section below.

## Viewing merge queues

{% cli %}

You can view the merge queue for a base branch in various places on {% data variables.product.product_name %}. You cannot use {% data variables.product.prodname_cli %} to view a merge queue.

{% endcli %}

{% webui %}

You can view the merge queue for a base branch in various places on {% data variables.product.product_name %}.

{% endwebui %}

- On the **Branches** page for the repository. We recommend you use this route if you don't have or don't know about a pull request already in a queue, and if you want to see what's in that queue. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)."

  ![Screenshot of the "Branches" page for a repository. A link, labeled "33 pull requests queued to merge," is outlined in dark orange.](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- On the pull request page when merge queue is required for merging, scroll to the bottom of the timeline and click the **merge queue** link.

  ![Screenshot of the merge queue message at the bottom of a pull request. The "merge queue" link is outlined in dark orange.](/assets/images/help/pull_requests/merge-queue-link.png)

- The merge queue view shows the pull requests that are currently in the queue, with your pull requests clearly marked.

  ![Screenshot of the merge queue.](/assets/images/help/pull_requests/merge-queue-view.png)

## Understanding why your pull request was removed from the merge queue

{% data reusables.pull_requests.merge-queue-reject %}

{% data reusables.pull_requests.merge-queue-removal-reasons %}
