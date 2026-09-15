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

If your migration encounters a problem, check the migration status with `gh elm migration status --migration-id MIGRATION-ID` and review the error information.

## Statuses and recommended actions

| Status | Meaning | Recommended action |
|---|---|---|
| **Created** | The migration has been created but not yet started | Run `gh elm migration start` |
| **Queued** | The migration is waiting to start | Wait |
| **Exporting** | Data is being exported from the source | Monitor with `gh elm migration status` |
| **Processing** | Exported data is being imported to the destination | Monitor with `gh elm migration status` |
| **Ready for cutover** | The initial migration is complete and the migration is ready for cutover | When ready, run `gh elm migration cutover` |
| **Cutting over** | The source repository is archived and remaining changes are being applied to the destination | Monitor; the status will transition to **Completed** |
| **Completed** | The migration has finished successfully | Verify the destination repository and reclaim mannequins |
| **Failed** | The migration encountered an unrecoverable failure | Investigate the error (see below) |
| **Paused** | The migration is paused | Check the pause reason and resolve (see below) |
| **Terminated** | The migration was cancelled | N/A |
| **Degraded** | The destination is unreachable | Check network connectivity between the GitHub Enterprise Server appliance and GHE.com (see below) |

## Migration status is "Failed"

A migration enters the **Failed** status when an unrecoverable error prevents it from continuing. This is distinct from individual resources failing to import—a failed migration means the migration itself cannot proceed.

To investigate, run `gh elm migration status --migration-id MIGRATION-ID` and review the error details in the response. Each failure includes a correlation ID in the format `(Correlation ID for Support: UUID)`. If you contact {% data variables.contact.github_support %}, provide this ID so the support team can investigate.

After resolving the underlying issue, abort the failed migration with `gh elm migration cancel --migration-id MIGRATION-ID` and start a new migration.

## Migration status is "Paused"

A migration enters the **Paused** status when an issue requires your intervention before it can continue. Run `gh elm migration status --migration-id MIGRATION-ID` and check the pause reason.

Common pause reasons:

* **Credential expiry**: One of the {% data variables.product.pat_v1_plural %} has expired. Create a new token with the required scopes and update it with `gh elm credential update`. Then restart the migration.
* **Rate limiting**: The migration hit API rate limits. Wait a few minutes, then restart.

To restart a paused migration after resolving the underlying issue:

```shell
gh elm migration start --migration-id MIGRATION-ID
```

## Migration status is "Degraded"

A **Degraded** status means the migration service on the {% data variables.product.prodname_ghe_server %} appliance cannot reach the destination enterprise. The migration continues on the source side, but the destination status is unknown.

Check network connectivity between the {% data variables.product.prodname_ghe_server %} appliance and your subdomain of {% data variables.enterprise.data_residency_site %}, then run `gh elm migration status --migration-id MIGRATION-ID` again. The status response includes a timestamp for the last successful contact with the destination, which can help you assess how long the connectivity issue has been occurring.

## Migration stuck in "Exporting"

If your migration remains in the **Exporting** status with no progress change for 30 minutes or more, the exporter may be stuck.

1. Run `gh elm migration status --migration-id MIGRATION-ID` and note whether resource counts are changing.
1. If counts are static, check the appliance's network connectivity to the destination.
1. Review exporter logs on the {% data variables.product.prodname_ghe_server %} appliance (requires SSH admin access):

   ```shell copy
   journalctl -t elm-exporter-backfiller --since "1 hour ago" | tail -50
   journalctl -t elm-exporter-sender --since "1 hour ago" | tail -50
   ```

1. If the exporter task has crashed, it should recover automatically. If it does not, contact {% data variables.contact.github_support %}.

## Git synchronization not completing

If `gh elm migration status` shows that the initial Git push has not completed after an extended period, check the Git syncer logs:

```shell copy
journalctl -t elm-exporter-git-syncer --since "2 hours ago"
```

Look for:

* **`connection refused`**: A network issue between the {% data variables.product.prodname_ghe_server %} appliance and the destination. Check firewall rules and DNS resolution.
* **`authentication failed`**: The {% data variables.product.pat_v1 %} may lack the required scopes or may have expired.
* **`remote: error`**: The destination may be rejecting the push. Contact {% data variables.contact.github_support %} with the error details.

## Some resources failed to import

Individual resources can fail to import without causing the overall migration to fail. You can see a count of failed resources in the output of `gh elm migration status --migration-id MIGRATION-ID`.

Failed resources are only shown after all automatic retries have been exhausted, so any failures you see are confirmed as unresolvable without intervention. Review the error details in the status response: each failed resource in backfill or live updates will display `"state": "failed"`.

If the number and types of failed resources are acceptable, you can proceed with cutover. If not, abort the migration, resolve the underlying issue, then start a new migration.

## Cutover failed and the source repository is unavailable

{% data reusables.elm.locked-repo %}

## Migration must be restarted due to a force push

If someone force-pushes to the default branch of the source repository while a migration is in progress, the Git synchronization between the source and destination breaks. Force pushes rewrite commit history in a way that cannot be reconciled incrementally.

If this happens, abort the migration with `gh elm migration cancel --migration-id MIGRATION-ID` and start a new migration. Before restarting, communicate to your team that force pushes to the default branch are not permitted while a migration is active.

## Migration access token was rejected

If your migration fails with an authentication error, check that:

* Both the source and destination tokens are {% data variables.product.pat_v1_plural %}. {% data variables.product.pat_v2_caps_plural %} are not supported.
* If the destination organization enforces SAML single sign-on, the token must be authorized for SSO.
* Both tokens have the scopes specified in [AUTOTITLE](/migrations/elm/migrate-your-repository#4-configure-the-live-migration-secrets).

If you recently rotated a token, the migration picks up new credentials automatically. You do not need to run `ghe-config-apply` or restart the migration service.

## {% data variables.product.prodname_cli %} access token was rejected

{% data variables.product.prodname_elm %} uses two sets of credentials. This section applies to the **operator tokens** created in step 2 and stored locally by `gh elm configure`.

The operator must use a {% data variables.product.pat_v1 %} for each endpoint:

* The **source operator token** must be created on {% data variables.product.prodname_ghe_server %}.
* The **target operator token** must be created on {% data variables.enterprise.data_residency_site %}.
* Both tokens have the scopes specified in [AUTOTITLE](/migrations/elm/migrate-your-repository#2-create-the-tokens-used-by-the-operator-who-will-perform-the-migration).
* The token owner must be an administrator of the corresponding enterprise. Selecting a scope does not grant the user administrative access.
* {% data variables.product.pat_v2_caps_plural %} are not supported.

### Common responses

| Response | Meaning | Remedy |
| --- | --- | --- |
| `401 Bad credentials` | The endpoint could not authenticate the token. Authorization scopes have not been evaluated yet. | Check that the token has not expired or been revoked, that it was copied completely, and that the source and target tokens were not exchanged. Confirm that each token was created on the host where it is being used. |
| `403 Forbidden` | The token was authenticated, but its user or scopes do not authorize the operation. | Use a {% data variables.product.pat_v1 %} with `admin:enterprise`. Confirm that the token owner is an administrator of the enterprise. If SAML SSO applies, authorize the token for SSO. |
| `Resource not accessible by {% data variables.product.pat_generic %}` | The token type or permissions are unsupported. This commonly occurs with a {% data variables.product.pat_v2 %}. | Replace it with a {% data variables.product.pat_v1 %} that has `admin:enterprise`. |
| `404 Not Found` | The request may be using the wrong API URL, or {% data variables.product.prodname_elm %} may not be enabled for the destination enterprise. | For {% data variables.enterprise.data_residency_site %}, use the tenant API URL, such as `https://api.SUBDOMAIN.ghe.com`, without a trailing slash. Verify the source API URL as well. If both URLs are correct, contact {% data variables.contact.github_support %} to confirm that {% data variables.product.prodname_elm %} is enabled. |

### Validate the tokens independently

Test each token against the `/user` endpoint before using it with {% data variables.product.prodname_elm %}. These commands print response headers but discard the response body.

For the source ({% data variables.product.prodname_ghe_server %}) token:

```shell
curl --silent --show-error --output /dev/null --dump-header - \
  --header "Authorization: Bearer $SOURCE_OPERATOR_TOKEN" \
  "$SOURCE_API_URL/user"
```

For the target token:

```shell
curl --silent --show-error --output /dev/null --dump-header - \
  --header "Authorization: Bearer $TARGET_OPERATOR_TOKEN" \
  "$TARGET_API_URL/user"
```

Each request should return `200 OK`. The `X-OAuth-Scopes` response header should include `admin:enterprise`.

If `/user` returns `200 OK` but an {% data variables.product.prodname_elm %} command returns `401 Bad credentials`, the CLI may have a different token or URL stored. Run `gh elm configure` again and carefully associate each token with its corresponding endpoint.

Operator tokens are stored locally by the {% data variables.product.prodname_elm %} CLI. After rotating an operator token, run `gh elm configure` again or supply the replacement credentials using the appropriate command-line options.

This differs from the migration service tokens configured in step 4. Updated migration service credentials are picked up automatically and do not require `ghe-config-apply` or a migration-service restart.

Do not include access tokens in logs, screenshots, support bundles, or support requests. If the problem continues, provide {% data variables.contact.github_support %} with the HTTP status, endpoint hostname, migration ID, timestamp with timezone, and any correlation ID—but not the token.

## The source GHES URL was rejected

{% data variables.product.prodname_elm %} requires the {% data variables.product.prodname_ghe_server %} URL to use HTTPS. If the URL is configured with HTTP, the migration will fail preflight validation.

## Collecting logs for support

When contacting {% data variables.contact.github_support %}, the most useful artifacts are:

1. **A support bundle** (preferred): Run `ghe-support-bundle -u` on the {% data variables.product.prodname_ghe_server %} appliance. This captures all {% data variables.product.prodname_elm %} logs automatically.
1. **Migration status output**: `gh elm migration status --migration-id MIGRATION-ID`
1. **The migration ID** and approximate time of failure (with timezone)
1. **Any correlation IDs** from error messages

If a support bundle is not possible, you can collect logs manually:

```shell copy
journalctl -t elm-exporter-migration-manager --since "24 hours ago" > migration-manager.log
journalctl -t elm-exporter-backfiller --since "24 hours ago" > backfiller.log
journalctl -t elm-exporter-sender --since "24 hours ago" > sender.log
journalctl -t elm-exporter-git-syncer --since "24 hours ago" > git-syncer.log
```
