---
title: Workflow cancellation reference
shortTitle: Workflow cancellation
intro: 'Find information on the steps {% data variables.product.prodname_dotcom %} takes to cancel a workflow run.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/reference/workflow-cancellation-reference
---

When canceling a workflow run, you may be running other software that uses resources related to the workflow run. To help you free up resources related to the workflow run, it may help to understand the steps {% data variables.product.prodname_dotcom %} performs to cancel a workflow run.

1. To cancel the workflow run, the server re-evaluates `if` conditions for all currently running jobs. If the condition evaluates to `true`, the job will not get canceled. For example, the condition `if: always()` would evaluate to true and the job continues to run. When there is no condition, that is the equivalent of the condition `if: success()`, which only runs if the previous step finished successfully.
1. For jobs that need to be canceled, the server sends a cancellation message to all the runner machines with jobs that need to be canceled.
1. For jobs that continue to run, the server re-evaluates `if` conditions for the unfinished steps. If the condition evaluates to `true`, the step continues to run. You can use the `cancelled` expression to apply a status check of `cancelled()`. For more information, see [AUTOTITLE](/actions/reference/evaluate-expressions-in-workflows-and-actions#cancelled).
1. For steps that need to be canceled, the runner machine sends `SIGINT/Ctrl-C` to the step's entry process (`node` for JavaScript actions, `docker` for container actions, and `bash/cmd/pwd` when using `run` in a step). If the process doesn't exit within 7500 ms, the runner will send `SIGTERM/Ctrl-Break` to the process, then wait for 2500 ms for the process to exit. If the process is still running, the runner kills the process tree.
1. After the 5 minute cancellation timeout period, the server will forcibly terminate all jobs and steps that are still running.
