---
title: Workflow run statuses and conclusions
shortTitle: Workflow run statuses
intro: Learn how status and conclusion values describe the lifecycle and result of a workflow run.
versions:
  fpt: "*"
  ghes: "*"
  ghec: "*"
category:
  - Manage and monitor workflow runs
contentType: reference
---

A workflow run has a `status` while it moves through its lifecycle. When the run finishes, it has a `conclusion`.

The workflow run list endpoints in the REST API use the `status` query parameter for both status values and conclusion values. For more information, see [AUTOTITLE](/rest/actions/workflow-runs).

## Status values

Use `status` to understand what phase the workflow run is in.

| Status        | Meaning                                                                                                                                        | Typical use case                                                                               |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `requested`   | The run has been created, but it has not been added to the queue yet. This value is set only by {% data variables.product.prodname_actions %}. | The event that triggered the workflow has been accepted, and the run is about to be scheduled. |
| `queued`      | The run is in the queue and is waiting to be scheduled.                                                                                        | {% data variables.product.prodname_actions %} has not started running the workflow yet.        |
| `pending`     | The run is blocked by concurrency limits. This value is set only by {% data variables.product.prodname_actions %}.                             | Another job or workflow in the same concurrency group is already in progress.                  |
| `waiting`     | The run is paused until a deployment protection rule is satisfied. This value is set only by {% data variables.product.prodname_actions %}.    | A job is waiting for a required review or another environment gate.                            |
| `in_progress` | At least one part of the run is actively executing.                                                                                            | A runner has started processing the workflow.                                                  |
| `completed`   | The run has finished. When a run reaches this state, it also has a `conclusion`.                                                               | The workflow ended with a final result.                                                        |

## Conclusion values

Use `conclusion` to understand the final result after a workflow run is `completed`.

| Conclusion        | Meaning                                                      | Typical use case                                                                |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| `success`         | The run finished successfully.                               | All required work completed as expected.                                        |
| `failure`         | The run finished with a failure.                             | A step or job reported an error.                                                |
| `neutral`         | The run finished without a success or failure result.        | The workflow completed, but it did not produce a pass/fail outcome.             |
| `cancelled`       | The run stopped before it finished.                          | Someone canceled the run, or concurrency canceled an older run.                 |
| `timed_out`       | The run exceeded an allowed time limit.                      | A job or run took too long to finish.                                           |
| `action_required` | The run completed, but additional action is still needed.    | A manual or external follow-up is required before work can continue.            |
| `skipped`         | The run's work was skipped.                                  | Conditions prevented jobs or steps from running.                                |
| `stale`           | {% data variables.product.github %} marked the run as stale. | The run stayed unresolved long enough that it was no longer treated as current. |
| `startup_failure` | The run failed during startup.                               | Initialization failed before the run could proceed normally.                    |

## Notes

- `requested`, `pending`, and `waiting` are set only by {% data variables.product.prodname_actions %}.
- `pending` commonly appears when you use [AUTOTITLE](/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency).
- `waiting` commonly appears when a job is blocked by [AUTOTITLE](/actions/how-tos/deploy/configure-and-manage-deployments/review-deployments) or other deployment protection rules.
- `startup_failure` can appear as a workflow run conclusion in webhook payloads, even though it is not an accepted `status` filter value for the REST API list endpoints.
