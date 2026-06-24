---
title: Troubleshooting live migrations from GitHub Enterprise Server to GHE.com
shortTitle: Troubleshooting
intro: 'Advice for problems you may encounter with your migration.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: other
---

{% data reusables.elm.preview-note %}

If your migration encounters a problem, check the migration status with `elm migration status --migration-id MIGRATION-ID` and review the error information.

## Statuses and recommended actions

| Status | Meaning | Recommended action |
|---|---|---|
| **Created** | The migration has been created but not yet started | Run `elm migration start` |
| **Queued** | The migration is waiting to start | Wait |
| **Exporting** | Data is being exported from the source | Monitor with `elm migration status` |
| **Processing** | Exported data is being imported to the destination | Monitor with `elm migration status` |
| **Ready for cutover** | The initial migration is complete and the migration is ready for cutover | When ready, run `elm migration cutover-to-destination` |
| **Cutting over** | The source repository is locked and remaining changes are being applied to the destination | Monitor; the status will transition to **Completed** |
| **Completed** | The migration has finished successfully | Verify the destination repository and reclaim mannequins |
| **Failed** | The migration encountered an unrecoverable failure | Investigate the error (see below) |
| **Paused** | The migration is paused | Check the pause reason and resolve (see below) |
| **Terminated** | The migration was cancelled | N/A |
| **Degraded** | The destination is unreachable | Check network connectivity between the GitHub Enterprise Server appliance and GHE.com (see below) |

## Migration status is "Failed"

A migration enters the **Failed** status when an unrecoverable error prevents it from continuing. This is distinct from individual resources failing to import—a failed migration means the migration itself cannot proceed.

To investigate, run `elm migration status --migration-id MIGRATION-ID` and review the error details in the response. Each failure includes a correlation ID in the format `(Correlation ID for Support: UUID)`. If you contact {% data variables.contact.github_support %}, provide this ID so the support team can investigate.

After resolving the underlying issue, abort the failed migration with `elm migration cancel --migration-id MIGRATION-ID` and start a new migration.

## Migration status is "Paused"

A migration enters the **Paused** status when an issue requires your intervention before it can continue. Run `elm migration status --migration-id MIGRATION-ID` and check the pause reason.

Common pause reasons:

* **Credential expiry**: One of the {% data variables.product.pat_v1_plural %} has expired. Create a new token with the required scopes and update it with `elm credential update`. Then restart the migration.
* **Rate limiting**: The migration hit API rate limits. Wait a few minutes, then restart.

To restart a paused migration after resolving the underlying issue:

```shell
elm migration start --migration-id MIGRATION-ID
```

## Migration status is "Degraded"

A **Degraded** status means the migration service on the {% data variables.product.prodname_ghe_server %} appliance cannot reach the destination enterprise. The migration continues on the source side, but the destination status is unknown.

Check network connectivity between the {% data variables.product.prodname_ghe_server %} appliance and your subdomain of {% data variables.enterprise.data_residency_site %}, then run `elm migration status --migration-id MIGRATION-ID` again. The status response includes a timestamp for the last successful contact with the destination, which can help you assess how long the connectivity issue has been occurring.

## Migration stuck in "Exporting"

If your migration remains in the **Exporting** status with no progress change for 30 minutes or more, the exporter may be stuck.

1. Run `elm migration status --migration-id MIGRATION-ID` and note whether resource counts are changing.
1. If counts are static, check the appliance's network connectivity to the destination.
1. Review exporter logs on the {% data variables.product.prodname_ghe_server %} appliance (requires SSH admin access):

   ```shell copy
   journalctl -t elm-exporter-backfiller --since "1 hour ago" | tail -50
   journalctl -t elm-exporter-sender --since "1 hour ago" | tail -50
   ```

1. If the exporter task has crashed, it should recover automatically. If it does not, contact {% data variables.contact.github_support %}.

## Git synchronization not completing

If `elm migration status` shows that the initial Git push has not completed after an extended period, check the Git syncer logs:

```shell copy
journalctl -t elm-exporter-git-syncer --since "2 hours ago"
```

Look for:

* **`connection refused`**: A network issue between the {% data variables.product.prodname_ghe_server %} appliance and the destination. Check firewall rules and DNS resolution.
* **`authentication failed`**: The {% data variables.product.pat_v1 %} may lack the required scopes or has expired.
* **`remote: error`**: The destination may be rejecting the push. Contact {% data variables.contact.github_support %} with the error details.

## Some resources failed to import

Individual resources can fail to import without causing the overall migration to fail. You can see a count of failed resources in the output of `elm migration status --migration-id MIGRATION-ID`.

Failed resources are only shown after all automatic retries have been exhausted, so any failures you see are confirmed as unresolvable without intervention. Review the error details in the status response: each failed resource in backfill or live updates will display `"state":  "failed"`.

If the number and types of failed resources are acceptable, you can proceed with cutover. If not, abort the migration, resolve the underlying issue, then start a new migration.

## Cutover failed and the source repository is locked

{% data reusables.elm.locked-repo %}

## Migration must be restarted due to a force push

If someone force-pushes to the default branch of the source repository while a migration is in progress, the Git synchronization between the source and destination breaks. Force pushes rewrite commit history in a way that cannot be reconciled incrementally.

If this happens, abort the migration with `elm migration cancel --migration-id MIGRATION-ID` and start a new migration. Before restarting, communicate to your team that force pushes to the default branch are not permitted while a migration is active.

## Access token was rejected

If your migration fails with an authentication error, check that:

* Both the source and destination tokens are {% data variables.product.pat_v1_plural %}. Fine-grained tokens are not supported.
* The tokens have the scopes specified in [AUTOTITLE](/migrations/elm/migrate-your-repository#1-create-access-tokens).
* If the destination organization enforces SAML single sign-on, the token must be authorized for SSO.

If you recently rotated a token, the migration picks up new credentials automatically. You do not need to run `ghe-config-apply` or restart the migration service.

## The source GHES URL was rejected

{% data variables.product.prodname_elm %} requires the {% data variables.product.prodname_ghe_server %} URL to use HTTPS. If the URL is configured with HTTP, the migration will fail preflight validation.

## Collecting logs for support

When contacting {% data variables.contact.github_support %}, the most useful artifacts are:

1. **A support bundle** (preferred): Run `ghe-support-bundle -u` on the {% data variables.product.prodname_ghe_server %} appliance. This captures all ELM logs automatically.
1. **Migration status output**: `elm migration status --migration-id MIGRATION-ID`
1. **The migration ID** and approximate time of failure (with timezone)
1. **Any correlation IDs** from error messages

If a support bundle is not possible, you can collect logs manually:

```shell copy
journalctl -t elm-exporter-migration-manager --since "24 hours ago" > migration-manager.log
journalctl -t elm-exporter-backfiller --since "24 hours ago" > backfiller.log
journalctl -t elm-exporter-sender --since "24 hours ago" > sender.log
journalctl -t elm-exporter-git-syncer --since "24 hours ago" > git-syncer.log
```
