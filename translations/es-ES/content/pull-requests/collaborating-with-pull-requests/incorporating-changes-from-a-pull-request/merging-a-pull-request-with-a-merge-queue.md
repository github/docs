---
title: Merging a pull request with a merge queue
intro: 'If a merge queue is required by the branch protection setting for the branch, you can add your pull requests to a merge queue and {% data variables.product.product_name %} will merge the pull requests for you once all required checks have passed.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Merge PR with merge queue
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
---

{% data reusables.pull_requests.merge-queue-beta %}

## About merge queues

{% data reusables.pull_requests.merge-queue-overview %}
{% data reusables.pull_requests.merge-queue-references %}

## Adding a pull request to a merge queue

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}

1. In the "Pull Requests" list, click the pull request you would like to add to a merge queue.

1. Click **Merge when ready** to add the pull request to the merge queue. Alternatively, if you are an administrator, you can:
   -  Directly merge the pull request by checking **Merge without waiting for requirements to be met (administrators only)**, if allowed by branch protection settings, and follow the standard flow. ![Fusionar las opciones de la cola](/assets/images/help/pull_requests/merge-queue-options.png)

  {% tip %}

  **Tip:** You can click  **Merge when ready** whenever you're ready to merge your proposed changes. {% data variables.product.product_name %} will automatically add the pull request to the merge queue once required approval and status checks conditions are met.

  {% endtip %}

1. Confirm you want to add the pull request to the merge queue by clicking  **Confirm merge when ready**.

## Removing a pull request from a merge queue

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}

1. In the "Pull Requests" list, click the pull request you would like to remove from a merge queue.

1. To remove the pull request from the queue, click **Remove from queue**. ![Remove pull request from queue](/assets/images/help/pull_requests/remove-from-queue-button.png)

Alternatively, you can navigate to the merge queue page for the base branch, click **...** next to the pull request you want to remove, and select **Remove from queue**. For information on how to get to the merge queue page for the base branch, see the section below.

## Viewing merge queues

You can view the merge queue for a base branch in various places on {% data variables.product.product_name %}.

- En la página de **Ramas** del repositorio. We recommend you use this route if you don't have or don't know about a pull request already in a queue, and if you want to see what's in that queue. Para obtener más información, consulta la sección "[Ver las ramas en tu repositorio](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)".

  ![Ver la cola de fusión en la página de las ramas](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- On the **Pull requests** page of your repository, click {% octicon "clock" aria-label="The clock symbol" %} next to any pull request in the merge queue.

  ![Ver la cola de fusión en la página de solicitudes de cambio](/assets/images/help/pull_requests/clock-icon-in-pull-request-list.png)

- On the pull request page when merge queue is required for merging, scroll to the bottom of the timeline and click the **merge queue** link.

  ![Merge queue link on pull request](/assets/images/help/pull_requests/merge-queue-link.png)

- La vista de cola de fusión muestra las solicitudes de cambios que están actualmente en cola, con tus solicitudes de cambios marcadas claramente.

  ![Vista de cola de fusión](/assets/images/help/pull_requests/merge-queue-view.png)

## Manejar las solicitudes de cambios eliminadas de la cola de fusión

{% data reusables.pull_requests.merge-queue-reject %}
