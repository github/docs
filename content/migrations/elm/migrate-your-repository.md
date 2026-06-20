---
title: Migrating your repository with Enterprise Live Migrations
shortTitle: Migrate your repository
intro: 'Migrate from {% data variables.product.prodname_ghe_server %} to {% data variables.enterprise.data_residency_site %} with minimal downtime.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
product: '{% data reusables.elm.ghes-version-requirement %}'
permissions: 'Site administrators on {% data variables.product.prodname_ghe_server %} who are also enterprise owners on {% data variables.enterprise.data_residency_site %}.'
---

{% data reusables.elm.preview-note %}

>[!TIP] As you follow this guide, you can refer to the [AUTOTITLE](/migrations/elm/elm-cli-reference) for more detailed usage information. If you encounter errors, see [AUTOTITLE](/migrations/elm/troubleshooting).

## Prerequisites

Make sure you're ready for your migration. See [AUTOTITLE](/migrations/elm/prepare-for-your-migration).

## 1. Create access tokens

You must authenticate with a {% data variables.product.pat_v1 %} for both the source and destination of the migration. For detailed instructions, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

**Make a note of both tokens**, as you will need them in the next step.

1. Create a {% data variables.product.pat_v1 %} on **{% data variables.product.prodname_ghe_server %}** with the following scopes.

   * `repo`
   * `admin:org`
   * `admin:repo_hook`
   * `admin:org_hook`

1. Create a {% data variables.product.pat_v1 %} on **{% data variables.enterprise.data_residency_site %}** with the following scopes.

   * `repo`
   * `workflow`
   * `admin:org`
   * `admin:repo_hook`
   * `admin:enterprise`

1. If single sign-on is enforced on the target organization on {% data variables.enterprise.data_residency_site %}, authorize the {% data variables.enterprise.data_residency_site %} token.

## 2. Configure {% data variables.product.prodname_ghe_server %}

You must set some configuration on the {% data variables.product.prodname_ghe_server %} instance before performing a migration. These configuration values apply to all {% data variables.product.prodname_elm_short %} migrations. Developers on {% data variables.product.prodname_ghe_server %} may experience a brief downtime when you apply the new configuration.

1. Access the {% data variables.product.prodname_ghe_server %} administrative shell over SSH. See [AUTOTITLE]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. Set the following configuration variables with `ghe-config`.

   For example: `ghe-config app.elm-exporter.enabled true`

   | Variable | Set this to... |
   |--------- | -------------- |
   | `app.elm-exporter.enabled` | `true` |
   | `app.elm.internal-webhooks-enabled` | `true` |
   | `app.elm-exporter.webhooks-loopback-address-enabled` | `true` |
   | `secrets.elm-exporter.migration-target-url` | {% data reusables.elm.ghe-url-description %} |
   | `secrets.elm-exporter.migration-target-token` | The access token you created for {% data variables.enterprise.data_residency_site %}. |
   | `secrets.elm-exporter.source-token` | The access token you created for {% data variables.product.prodname_ghe_server %}. |
   | `secrets.elm-exporter.source-user` | The username associated with the {% data variables.product.prodname_ghe_server %} token (for example: `ghe-admin`). |

1. If you **don't** already have migrations enabled and blob storage configured on the instance, you can configure them now. You can check your existing settings in in "Migrations" section of the Management Console (`HOSTNAME/setup/settings`).

   You can use the following default values, which will not introduce any unexpected functionality.

   ```shell copy
   ghe-config app.migrations.enabled true
   ```

   ```shell copy
   ghe-config secrets.migrations.blob-storage-type local-storage
   ```

1. Apply the configuration.

   ```shell copy
   ghe-config-apply
   ```

## 3. Set required environment variables

When the configuration has been applied, and before starting a migration, set required environment variables. For example:

```shell
export API_URL='{% data reusables.elm.localhost-value %}'
```

>[!IMPORTANT] Copy the values for `API_URL` and `MIGRATION_MANAGER_HMAC_KEY` verbatim. The other variables are specific to your environment.

| Variable | Required value |
| -------- | -------------- |
| API_URL | `{% data reusables.elm.localhost-value %}` |
| MIGRATION_MANAGER_HMAC_KEY | `{% data reusables.elm.hmac-key-value %}` |
| MIGRATION_TARGET_URL | {% data reusables.elm.ghe-url-description %} |
| MIGRATION_TARGET_TOKEN | {% data reusables.elm.ghe-pat-description %} |

Any of these values can also be provided as CLI flags on any `elm` command, which will take priority over the variables. For example: `--api-url {% data reusables.elm.localhost-value %}`.

## 4. Create a migration

Create a new migration by specifying the source and target repository details. `--pat-name` must be set to `system-pat` as a static value. The other values are placeholders specific to your environment.

>[!NOTE] The `target-org` can be new or existing. If the target organization doesn't already exist, it will be created during the migration. However, no settings from the source organization will be migrated.

```shell copy
elm migration create \
  --source-org EXISTING-GHES-ORG \
  --source-repo EXISTING-GHES-REPO \
  --target-org GHEC-ORG \
  --target-repo NEW-GHEC-REPO \
  --target-api GHEC-API-URL \
  --pat-name system-pat
```

For example:

``` shell
elm migration create \
  --source-org my-ghes-org \
  --source-repo my-ghes-repo \
  --target-org my-dr-org \
  --target-repo my-dr-repo \
  --target-api $MIGRATION_TARGET_URL \
  --pat-name system-pat
```

Optional flags:
* `--start`: If you're ready to start the migration immediately.
* `--target-visibility`: Migrated repositories are created with **internal** visibility by default, but you can specify `private`.

### Save the migration ID

You should see a response like the following:

```json
{
  "migrationId": "2b5c9eae-b5da-4306-ab04-2a29cc2b7cb9",
  "expiresAt": "2026-02-11T21:49:33.619162159Z"
}
```

Export the `migrationId` as a variable, as you will need it for the next commands. For example:

```shell
export MIGRATION_ID='2b5c9eae-b5da-4306-ab04-2a29cc2b7cb9'
```

## 5. Start the migration

If you didn't already start the migration, start it now using the migration ID you just saved.

``` shell copy
elm migration start --migration-id $MIGRATION_ID
```

This launches the backfill and live update processes. {% data variables.product.prodname_elm_short %} is now collecting data from the source repository and listening for supported webhook events.

## 6. Monitor the migration

When the migration has started, you should see a new repository on {% data variables.enterprise.data_residency_site %}. During the migration, you will see the repository fill with an initial load of data and receive updates as developers continue to work in the source repository.

Run the following command regularly to monitor the migration status. You will see a breakdown of the statuses of the source and target, and information on live data being migrated.

``` shell copy
elm migration status --migration-id $MIGRATION_ID
```

The most important indicator in the response is the status in the **combinedState** object. When the status reaches `COMBINED_STATUS_READY_FOR_CUTOVER`, you should be ready to proceed to the next step. However, you will be alerted in the `displayMessage` if any individual resources failed to migrate, which you may need to investigate.

For example:

``` json
  "combinedState":  {
    "status":  "COMBINED_STATUS_READY_FOR_CUTOVER",
    "displayMessage":  "Ready for cutover (1 resources failed)",
    "repositories":  [
      {
        "repositoryNwo":  "new-test-org/my-new-repo",
        "phase":  "REPOSITORY_PHASE_READY_FOR_CUTOVER",
        "displayStatus":  "Ready for cutover (1 failed)"
      }
    ],
    "readyForCutover":  true,
    "cutoverBlockers":  []
  },
```

Tips:

* If you're running multiple migrations, you can check the status of all of them with `elm migration list`. This command shows in-progress migrations by default, but you can also filter by `--status`.
* If you encounter failure statuses that require attention, see [AUTOTITLE](/migrations/elm/troubleshooting#statuses-and-recommended-actions).

## 7. Complete the migration

When a migration is ready for cutover, you can complete the migration. The cutover process will lock the source repository, making it **permanently unavailable** for developers unless an administrator unlocks it.

``` shell copy
elm migration cutover-to-destination --migration-id $MIGRATION_ID
```

Continue to monitor the migration. When you see the `MIGRATION_STATUS_COMPLETED` status at the top of the response, the migration is complete, although there are some follow-up tasks to give access to users from {% data variables.product.prodname_ghe_server %}.

## Next steps

Give users access to the new repository and reconcile activity with user accounts. See [AUTOTITLE](/migrations/elm/complete-your-migration).
