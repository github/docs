---
title: About troubleshooting workflows
intro: 'You can use the tools in {% data variables.product.prodname_actions %} to debug your workflows.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: About troubleshooting
redirect_from:
  - /actions/monitoring-and-troubleshooting-workflows/troubleshooting-workflows/about-troubleshooting-workflows
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Initial troubleshooting suggestions

There are several ways you can troubleshoot failed workflow runs.

{% ifversion copilot %}

### Using {% data variables.product.prodname_copilot %}

If a workflow run fails, you can open a chat with {% data variables.product.prodname_copilot %} for assistance resolving the error. See [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/troubleshooting-workflows/using-copilot-to-troubleshoot-workflows).

{% endif %}

### Using workflow run logs

Each workflow run generates activity logs that you can view, search, and download. For more information, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs).

### Enabling debug logging

If the workflow logs do not provide enough detail to diagnose why a workflow, job, or step is not working as expected, you can enable additional debug logging. For more information, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging).

If your workflow uses specific tools or actions, enabling their debug or verbose logging options can help generate more detailed output for troubleshooting.
For example, you can use `npm install --verbose` for npm or `GIT_TRACE=1 GIT_CURL_VERBOSE=1 git ...` for git.

{% ifversion fpt or ghec %}

## Reviewing billing errors

Actions usage includes runner minutes and storage for [workflow artifacts](/actions/writing-workflows/choosing-what-your-workflow-does/storing-and-sharing-data-from-a-workflow). For more information, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-actions/about-billing-for-github-actions).

### Setting a budget

Setting an Actions budget may help immediately unblock workflows failing due to billing or storage errors. It will allow further minutes and storage usage to be billed up to the set budget amount. To learn more, see [AUTOTITLE](/billing/managing-your-billing/preventing-overspending).

{% endif %}

{% ifversion actions-metrics %}

## Reviewing {% data variables.product.prodname_actions %} activity with metrics

To analyze the efficiency and reliability of your workflows using metrics, see [AUTOTITLE](/actions/administering-github-actions/viewing-github-actions-metrics).
{% endif %}

## Troubleshooting workflow triggers

You can review your workflow’s `on:` field to understand what is expected to trigger the workflow. For more information, see [AUTOTITLE](/actions/writing-workflows/choosing-when-your-workflow-runs/triggering-a-workflow).

For a full list of available events, see [AUTOTITLE](/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows).

### Triggering event conditions

Some triggering events only run from the default branch (i.e. `issues`, `schedule`). Workflow file versions that exist outside of the default branch will not trigger on these events.

Workflows will not run on `pull_request` activity if the pull request has a merge conflict.

Workflows that would otherwise be triggered on `push` or `pull_request` activity will be skipped if the commit message contains a skip annotation. For more information, see [AUTOTITLE](/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/skipping-workflow-runs).

### Scheduled workflows running at unexpected times

Scheduled events can be delayed during periods of high loads of {% data variables.product.prodname_actions %} workflow runs.

High load times include the start of every hour. If the load is sufficiently high enough, some queued jobs may be dropped. To decrease the chance of delay, schedule your workflow to run at a different time of the hour. For more information, see [AUTOTITLE](/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#schedule).

### Filtering and diff limits

Specific events allow for filtering by branch, tag, and/or paths you can customize. Workflow run creation will be skipped if the filter conditions apply to filter out the workflow.

You can use special characters with filters. For more information, see [AUTOTITLE](/actions/writing-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet).

For path filtering, evaluating diffs is limited to the first 300 files. If there are files changed that are not matched in the first 300 files returned by the filter, the workflow will not be run. For more information, see [AUTOTITLE](/actions/writing-workflows/workflow-syntax-for-github-actions#git-diff-comparisons).

## Troubleshoot workflow execution

Workflow execution involves any issues seen after the workflow was triggered and a workflow run has been created.

### Canceling Workflows

If standard cancellation through the [UI](/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/canceling-a-workflow) or [API](/rest/actions/workflow-runs?apiVersion=2022-11-28#cancel-a-workflow-run) does not process as expected, there may be a conditional statement configured for your running workflow job(s) that causes it to not cancel.

In these cases, you can leverage the API to force cancel the run. For more information, see [AUTOTITLE](/rest/actions/workflow-runs?apiVersion=2022-11-28#force-cancel-a-workflow-run).

A common cause can be using the `always()` [status check function](/actions/writing-workflows/choosing-what-your-workflow-does/evaluate-expressions-in-workflows-and-actions#status-check-functions) which returns `true`, even on cancellation. An alternative is to use the inverse of the `cancelled()` function, `{% raw %}${{ !cancelled() }}{% endraw %}`.

For more information, see [AUTOTITLE](/actions/writing-workflows/choosing-when-your-workflow-runs/using-conditions-to-control-job-execution) and [AUTOTITLE](/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/canceling-a-workflow#steps-github-takes-to-cancel-a-workflow-run).

## Troubleshooting runners

### Defining runner labels

{% data variables.product.github %}-hosted runners leverage [preset labels](/actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners#standard-github-hosted-runners-for-public-repositories) maintained through the [`actions/runner-images`](https://github.com/actions/runner-images?tab=readme-ov-file#available-images) repository.

We recommend using unique label names for larger and self-hosted runners. If a label matches to any of the existing preset labels, there can be runner assignment issues where there is no guarantee on which matching runner option the job will run on.

### Self-hosted runners

If you use self-hosted runners, you can view their activity and diagnose common issues.

For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners).
