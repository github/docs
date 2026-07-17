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

A workflow run has a `status` while it moves through its lifecycle. After the run reaches a `completed` status, its `conclusion` describes the final result.

The workflow run list endpoints in the REST API use the `status` query parameter to filter by either status or conclusion. For more information, see [AUTOTITLE](/rest/actions/workflow-runs).

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

The `startup_failure` value can appear as a workflow run conclusion in webhook payloads. It is not an accepted value for the `status` query parameter in the REST API workflow run list endpoints.
