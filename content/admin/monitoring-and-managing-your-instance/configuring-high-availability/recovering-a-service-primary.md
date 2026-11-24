---
title: Recovering a service primary
shortTitle: Recover a service primary
intro: Restore Redis writes after losing the node that hosts the service primary in a high availability configuration.
# Review draft: the target GHES release is TBD. Required versions.feature is deferred.
# Do not merge until availability, feature versioning, and navigation are approved.
contentType: how-tos
category:
  - Scale your instance
---

<!--
Reviewer-only publication checklist:
* Confirm the supported GHES release and Operator Platform approval. The parent
  epic's target release is TBD; no availability is asserted by this draft.
* Confirm that the ghes-manage package with these commands has shipped and that
  live HA recovery qualification is complete. Companion checks did not recover
  an actual appliance.
* Prerequisites: verify the supported HA/internal-MySQL/dedicated-Redis topology
  and the published CLI version that supports these commands.
* Starting recovery, steps 3-4: confirm the per-node powered-off checks and the
  data-loss confirmation against the shipping command before publication.
* Starting without prompts: confirm the flags and JSON behavior against the
  shipping command, including refusal when a newly required node is unconfirmed.
* Checking recovery progress: confirm the operation-state, exit-code, and
  restart-retention semantics against the shipping Replication Controller.
* Once availability is approved, add a dedicated data/features gate and use it
  in this article's versions.feature. Add the article beside the failover guide
  in the HA category's children and gate the reciprocal link in the failover
  guide with the same feature. Do not change the existing failover procedure.
-->

## About service-primary recovery

Use service-primary recovery when the node hosting the Redis primary is lost, but your high availability (HA) primary appliance is still available. The Replication Controller coordinates recovery on the HA primary appliance. The `--target` option selects the new service primary, not the appliance to connect to.

This procedure does not fail over your HA site. If the HA primary appliance itself is lost, follow [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/initiating-a-failover-to-your-replica-appliance) instead.

A service group contains stores that share one primary node. Recovery supports only the `redis/default` group in an HA configuration, not standalone instances or clusters. The group includes the main Redis store and, when enabled, the Kafka-lite and Aqueduct Redis stores.

> [!WARNING]
> Recovery can lose writes that were acknowledged but had not replicated to the target. Before confirming that a node is powered off, verify its power state: an unreachable node is not necessarily powered off.

## Prerequisites

* An HA configuration with internal MySQL and a dedicated Redis node on the primary site.
* A version of the `gh es` extension that supports service-group recovery, configured to authenticate to your HA primary appliance using your existing Manage API credentials. See [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/administering-your-instance-using-the-github-cli).
* A target node on the primary site. Choose the node yourself and use its name from `cluster.conf`, not its UUID. The Replication Controller checks eligibility but does not choose or rank targets.
* Access to verify and, if necessary, turn off each node that the recovery plan identifies as not responding.

## Starting recovery

In the commands below, replace `TARGET-NODE` with the node name you chose. Always specify `--group redis/default` and `--target`; neither has a default.

To start interactively, use a terminal without `--json`. The command prompts for any confirmations you have not supplied through flags.

1. Optionally, preview the recovery plan. This command is read-only.

   ```shell
   gh es service-group recovery preview \
     --group redis/default --target TARGET-NODE
   ```

1. Start the interactive recovery flow.

   ```shell
   gh es service-group recovery start \
     --group redis/default --target TARGET-NODE
   ```

   The command always fetches a fresh plan from the Replication Controller and displays it unchanged, including the risk of losing acknowledged but unreplicated writes. Review this plan even if you previously previewed one.

1. To accept the displayed plan and its data-loss risk, answer `Proceed with this recovery plan, accepting the risk of data loss?`.
1. For each node that did not respond, verify that it is powered off before answering the prompt `Confirm node "<name>" is powered off (unreachable is not sufficient)`. If you cannot verify that a named node is powered off, do not proceed.

Both types of confirmation default to no. Declining either stops the command without starting recovery.

After the request is accepted, the command prints `Recovery started`, an operation ID, and the command to check group status. This means recovery has started, not that it has completed. The Replication Controller continues in the background if you close the CLI.

If you lose the response to a start request, the outcome is unknown. Check operation status before deciding whether to retry. Do not retry automatically.

## Starting without prompts

For noninteractive use, or whenever you use `--json`, supply all confirmations through flags. These flags confirm decisions you have already made. They do not turn off nodes or verify their power state.

1. Preview the plan before supplying confirmations.

   ```shell
   gh es service-group recovery preview \
     --group redis/default --target TARGET-NODE --json
   ```

   The JSON response includes `message`, `nodes_to_confirm`, and `record_modify_index`. Read the message and verify that every node in `nodes_to_confirm` is powered off. Do not automatically copy the returned names into confirmation flags without verifying their power state.

1. Start recovery with `--accept-data-loss-risk` to accept possible data loss and `--confirm-nodes-powered-off` to name the nodes you have verified are powered off. Replace `NODE-A,NODE-C` with their comma-separated names. If no nodes require confirmation, omit `--confirm-nodes-powered-off`.

   ```shell
   gh es service-group recovery start \
     --group redis/default --target TARGET-NODE \
     --accept-data-loss-risk \
     --confirm-nodes-powered-off NODE-A,NODE-C --json
   ```

Every start still fetches a fresh plan. If that plan requires a node you have not explicitly confirmed, the command does not start recovery. Review the updated plan and verify the additional node before another attempt.

With `--json`, a successful start outputs only `{"operation_id":"OPERATION-ID"}`. It does not display the human-readable plan on standard output or standard error. The operation ID confirms acceptance, not completion.

## Checking recovery progress

Run the shared status command for the group. It does not take an operation ID.

```shell
gh es service-group operation-status --group redis/default
```

The response describes the current or last primary operation for the group: its ID, state, step, and message. The state is `running`, `succeeded`, `failed`, or `interrupted`. For a failed or interrupted operation, follow the instructions in the returned message.

This status is not a service health check or a report of primary placement. It is not durable operation history: finished results disappear when the Replication Controller restarts. A response indicating no known operation does not prove that recovery never occurred.

The preview and operation-status commands support noninteractive use and `--json`. A successful operation-status request exits with code 0 even when the operation state is `failed` or `interrupted`. When consuming JSON, inspect `state` rather than treating exit code 0 as recovery success. Request, authentication, routing, and not-found errors exit with a nonzero code.

There are no wait, cancel, or history commands for recovery.
