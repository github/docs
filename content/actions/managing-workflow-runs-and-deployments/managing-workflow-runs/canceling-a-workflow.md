---
title: Canceling a workflow
shortTitle: Cancel a workflow
intro: 'You can cancel a workflow run that is in progress. When you cancel a workflow run, {% data variables.product.prodname_dotcom %} cancels all jobs and steps that are a part of that workflow.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/managing-workflow-runs/canceling-a-workflow
---

{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

## Canceling a workflow run

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. From the list of workflow runs, click the name of the `queued` or `in progress` run that you want to cancel.
1. In the upper-right corner of the workflow, click **Cancel workflow**.
![Screenshot showing the summary for a workflow that is currently running. The "Cancel workflow" button is highlighted with a dark orange outline.](/assets/images/help/repository/cancel-check-suite-updated.png)

## Steps {% data variables.product.prodname_dotcom %} takes to cancel a workflow run

When canceling workflow run, you may be running other software that uses resources that are related to the workflow run. To help you free up resources related to the workflow run, it may help to understand the steps {% data variables.product.prodname_dotcom %} performs to cancel a workflow run.

1. To cancel the workflow run, the server re-evaluates `if` conditions for all currently running jobs. If the condition evaluates to `true`, the job will not get canceled. For example, the condition `if: always()` would evaluate to true and the job continues to run. When there is no condition, that is the equivalent of the condition `if: success()`, which only runs if the previous step finished successfully.
1. For jobs that need to be canceled, the server sends a cancellation message to all the runner machines with jobs that need to be canceled.
1. For jobs that continue to run, the server re-evaluates `if` conditions for the unfinished steps. If the condition evaluates to `true`, the step continues to run. You can use the `cancelled` expression to apply a  status check of `cancelled()`. For more information see "[AUTOTITLE](/actions/learn-github-actions/expressions#cancelled)."
1. For steps that need to be canceled, the runner machine sends `SIGINT/Ctrl-C` to the step's entry process (`node` for javascript action, `docker` for container action, and `bash/cmd/pwd` when using `run` in a step). If the process doesn't exit within 7500 ms, the runner will send `SIGTERM/Ctrl-Break` to the process, then wait for 2500 ms for the process to exit. If the process is still running, the runner kills the process tree.
1. After the 5 minutes cancellation timeout period, the server will force terminate all jobs and steps that don't finish running or fail to complete the cancellation process.
