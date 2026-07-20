---
title: Workflow run statuses and conclusions
shortTitle: Workflow run statuses
intro: Learn how status and conclusion values describe the lifecycle and result of a workflow run.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Manage and monitor workflow runs
contentType: reference
---

A workflow run has a `status` while it moves through its lifecycle. After the run reaches a `completed` status, its `conclusion` describes the final result. Until then, the `conclusion` value is `null`.

A status is a snapshot of the workflow run's current state, not a history of transitions. For example, a sequence of `queued`, `in_progress`, `queued`, and `completed` values does not identify why the state changed. When investigating such a sequence, first compare `run_attempt`: a re-run keeps the workflow run ID and increments `run_attempt`. If the attempt did not change, inspect the workflow run logs and its related check runs for more evidence. For more information, see [AUTOTITLE](/actions/reference/workflows-and-actions/contexts#github-context) and [AUTOTITLE](/actions/how-tos/monitor-workflows/use-workflow-run-logs).

The workflow run list endpoints in the REST API use the `status` query parameter to filter by either status or conclusion. For more information, see [AUTOTITLE](/rest/actions/workflow-runs).

The values on this page apply only to workflow runs. Check suites, check runs, and commit statuses have their own status and conclusion values, and a value with the same name can have different meanings for different objects. For example, in the Checks API, `startup_failure` describes a check suite that failed during startup, while `stale` describes an incomplete check run that {% data variables.product.github %} marked stale. For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).

## Status values

| Status | Description |
| --- | --- |
| `requested` | The workflow run was created but has not been queued. |
| `queued` | The workflow run is queued. |
| `pending` | The workflow run is at the front of the queue, but a concurrency limit has been reached. |
| `waiting` | The workflow run is waiting for a deployment protection rule to be satisfied. |
| `in_progress` | The workflow run is in progress. |
| `completed` | The workflow run completed and has a conclusion. |

Only {% data variables.product.prodname_actions %} can set the `requested`, `pending`, and `waiting` statuses.

For more information about the conditions that cause `pending` and `waiting` statuses, see [AUTOTITLE](/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency) and [AUTOTITLE](/actions/how-tos/deploy/configure-and-manage-deployments/review-deployments).

## Conclusion values

| Conclusion | Description |
| --- | --- |
| `action_required` | The workflow run completed and requires action. |
| `cancelled` | The workflow run was cancelled before it completed. |
| `failure` | The workflow run failed. |
| `neutral` | The workflow run completed with a neutral result. |
| `skipped` | The workflow run was skipped. |
| `stale` | The workflow run was marked stale by {% data variables.product.github %}. |
| `success` | The workflow run completed successfully. |
| `timed_out` | The workflow run timed out. |
| `startup_failure` | The workflow run failed during startup. |

The `startup_failure` value can appear as a workflow run conclusion in webhook payloads. It is not listed as an accepted value for the `status` query parameter in the REST API workflow run list endpoints.
