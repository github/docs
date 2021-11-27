---
title: Adding a pull request to the merge queue
intro: 'If merge queues are enabled for the repository, you can add your pull requests to the merge queue once all the required checks have passed. {% data variables.product.product_name %} will merge the pull requests for you.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Add PR to merge queue
redirect_from:
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
---

{% data reusables.pull_requests.merge-queue-beta %}

## About pull request merge queue

{% data reusables.pull_requests.merge-queue-overview-short %}
{% data reusables.pull_requests.merge-queue-references %}

## Adding a pull request to the merge queue

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. In the "Pull Requests" list, click the pull request you'd like to add to the merge queue.
1. Click **Add to merge queue** to add your pull request to the merge queue. This enables the default **Queue and merge in a group** option. Alternatively, you can:
   - Add your pull request to the front of the queue by selecting the **Add to merge queue** drop down menu, and clicking **Jump the queue** (only available to repository maintainers and administrators).
   - Directly merge your pull request by selecting the **Add to merge queue** drop down menu, and clicking **Directly merge** (only available to repository administrators). ![Merge queue options](/assets/images/help/pull_requests/merge-queue-options.png)

   {% tip %}

   **Tip:** The **Add to merge queue** button is only enabled once the pull request meets all the review/approval and status check requirements.

   {% endtip %}
2. Confirm you want to add the pull request to the merge queue by clicking **Confirm add to merge queue**.
   {% data variables.product.product_name %} adds the pull request to the merge queue and will merge it for you.

## Viewing the merge queue

You can view the merge queue in various places on {% data variables.product.product_name %}.

   - On the **Branches** page for the repository. We recommend you use this route if you don't have or don't know about a pull request already in the queue, and if you want to see what's in the queue. For more information, see "[Viewing branches in your repository](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)."

  ![View merge queue in Branches page](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- On the **Pull requests** page of your repository, click {% octicon "clock" aria-label="The clock symbol" %}.

  ![View merge queue on Pull requests page](/assets/images/help/pull_requests/clock-icon-in-pull-request-list.png)

- On your pull request, scroll down to the section with the checks, and click **View merge queue**.

  ![View Merge queue button on pull request](/assets/images/help/pull_requests/view-merge-queue-button.png)

The merge queue view shows the pull requests that are currently in the queue, with your pull requests clearly marked.

![Merge queue view](/assets/images/help/pull_requests/merge-queue-view.png)

## Handling pull requests removed from the merge queue

{% data reusables.pull_requests.merge-queue-reject %}
