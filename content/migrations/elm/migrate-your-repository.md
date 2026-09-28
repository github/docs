---
title: Migrating your repository with Enterprise Live Migrations
shortTitle: Migrate your repository
intro: 'Migrate from {% data variables.product.prodname_ghe_server %} to {% data variables.enterprise.data_residency_site %} with minimal downtime.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
permissions: 'Site administrators on {% data variables.product.prodname_ghe_server %} who are also enterprise owners on {% data variables.enterprise.data_residency_site %}.'
---

>[!TIP] As you follow this guide, you can refer to the [AUTOTITLE](/migrations/elm/elm-cli-reference) for more detailed usage information. If you encounter errors, see [AUTOTITLE](/migrations/elm/troubleshooting).

## Prerequisites

Make sure your environments and developers are ready for the migration. See [AUTOTITLE](/migrations/elm/prepare-for-your-migration).

## 1. Configure {% data variables.product.prodname_ghe_server %}

You must set some configuration on the {% data variables.product.prodname_ghe_server %} instance before creating tokens and performing a migration. These configuration values apply to all {% data variables.product.prodname_elm_short %} migrations. Developers on {% data variables.product.prodname_ghe_server %} may experience a brief downtime when you apply the new configuration.

1. Access the {% data variables.product.prodname_ghe_server %} administrative shell over SSH. See [AUTOTITLE]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. Set the following configuration variables with `ghe-config`.

   For example: `ghe-config app.elm-exporter.enabled true`

   | Variable | Set this to... |
   |--------- | -------------- |
   | `app.elm-exporter.enabled` | `true` |
   | `app.elm.internal-webhooks-enabled` | `true` |
   | `app.elm-exporter.webhooks-loopback-address-enabled` | `true` |
   | `secrets.elm-exporter.migration-target-url` | {% data reusables.elm.ghe-url-description %} |
   | `secrets.elm-exporter.source-user` | The username associated with the operator's {% data variables.product.prodname_ghe_server %} token. This should be your username on {% data variables.product.prodname_ghe_server %}; if someone else is going to create this token, the value here should be set to their username. We recommend the `ghe-admin` user. |

1. Apply the configuration.

   ```shell copy
   ghe-config-apply
   ```

1. Leave the SSH session. You will run the rest of the commands in a local terminal session.

## 2. Create operator tokens with enterprise access

The operator must authenticate to both the source and destination enterprise with a {% data variables.product.pat_v1 %}. For instructions on creating tokens, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

**Ensure that you make a note of both tokens**, as you will need them in the next step.

1. On **{% data variables.product.prodname_ghe_server %}**, create a {% data variables.product.pat_v1 %} and select the required scope:

   * `admin:enterprise`

   You will use this token as the **Source token** when configuring the {% data variables.product.prodname_elm_cli %}.

1. On **{% data variables.enterprise.data_residency_site %}**, create a {% data variables.product.pat_v1 %} and select the required scopes:

   * `admin:enterprise`
   * `admin:org`

   You will use this token as the **Target token** when configuring the {% data variables.product.prodname_elm_cli %}.

## 3. Configure the {% data variables.product.prodname_elm_short %} command line tool

You will run the migration from a local terminal session, using an extension of the {% data variables.product.prodname_cli %}.

1. Install the [{% data variables.product.prodname_cli %}](https://cli.github.com/) on your local machine. You must be using version 2.0 or later.
1. Install the {% data variables.product.prodname_elm_short %} extension.

   ```shell copy
   gh extension install github/gh-elm
   ```

1. Launch the installation wizard to configure the extension.

   ```shell copy
   gh elm configure
   ```

1. Follow the instructions in the installation wizard, providing the API URLs (for example: `https://api.{% data variables.enterprise.data_residency_domain %}`) for your source and destination and the tokens you created in the previous step.

Any of these values can also be provided as CLI flags on any `gh elm` command, which will take priority over the configuration. For example: `--target-url https://api.{% data variables.enterprise.data_residency_domain %}`.

This setup process will store the URLs in a platform-specific configuration file in your operating system's configuration directory, at `gh-elm/config.json`. The access tokens will be securely stored in your computer's secret storage.  

## 4. Configure the live migration secrets

In addition to the operator tokens with enterprise access, you must create a {% data variables.product.pat_v1 %} for the source and target organizations. You must repeat these steps for every organization you are migrating from.

### Create access tokens

{% data variables.product.prodname_elm_short %} must authenticate with a {% data variables.product.pat_v1 %} for both the source and destination of the migration. For instructions on creating tokens, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

**Ensure that you make a note of these tokens**, as you will need them in the next step.

1. Create a {% data variables.product.pat_v1 %} on **{% data variables.product.prodname_ghe_server %}** with the following scopes:

   * `repo`
   * `admin:org`
   * `admin:repo_hook`
   * `admin:org_hook`
   
   This is your source token.

1. Create a {% data variables.product.pat_v1 %} on **{% data variables.enterprise.data_residency_site %}** with the following scopes:

   * `repo`
   * `workflow`
   * `admin:org`
   * `admin:repo_hook`
   * `admin:enterprise`
   
   This is your target token.
   
   > [!IMPORTANT]
   > If single sign-on is enforced on the target organization on {% data variables.enterprise.data_residency_site %}, you must authorize the {% data variables.enterprise.data_residency_site %} token for SSO.

### Configure your organization's {% data variables.product.prodname_elm_short %} secrets

Use the `gh elm config` commands to set the source and target access tokens:

1. Set the source token.

   ```shell copy
   gh elm config set-source-pat EXISTING-GHES-ORG
   ```
   
   Paste the source token into the terminal when asked.

1. Set the target token.

   ```shell copy
   gh elm config set-target-pat EXISTING-GHES-ORG
   ```
   
   Paste the target token into the terminal when asked.

You can also set the tokens interactively, using `gh elm config org-tokens EXISTING-GHES-ORG`, or in your organization settings at `https://GHES_HOSTNAME/organizations/EXISTING-GHES-ORG/settings/secrets/elm-exporter/`.

## 5. Create a migration

Create a new migration by specifying the source and target repository details.

>[!NOTE] The `target-org` can be new or existing. If the target organization doesn't already exist, it will be created during the migration. However, no settings from the source organization will be migrated.

```shell copy
gh elm migration create \
  --source-org EXISTING-GHES-ORG \
  --source-repo EXISTING-GHES-REPO \
  --target-org GHEC-ORG \
  --target-repo NEW-GHEC-REPO
```

For example:

``` shell
gh elm migration create \
  --source-org my-ghes-org \
  --source-repo my-ghes-repo \
  --target-org my-dr-org \
  --target-repo my-dr-repo
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

## 6. Start the migration

If you didn't already start the migration, start it now using the migration ID you just saved.

``` shell copy
gh elm migration start --migration-id $MIGRATION_ID
```

This launches the backfill and live update processes. {% data variables.product.prodname_elm_short %} is now collecting data from the source repository and listening for supported webhook events.

## 7. Monitor the migration

When the migration has started, you should see a new repository on {% data variables.enterprise.data_residency_site %}. During the migration, you will see the repository fill with an initial load of data and receive updates as developers continue to work in the source repository.

You can monitor the progress of the migration interactively using the `watch` command:

```shell
gh elm migration watch $MIGRATION_ID
```

This will poll the migration status API and display a self-refreshing text UI that reflects the current progress.

### Programmatic monitoring using `migration status`

If you want a migration status suitable for automation, use the `status` command:

``` shell copy
gh elm migration status --migration-id $MIGRATION_ID
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

* If you're running multiple migrations, you can check the status of all of them with `gh elm migration list`. This command shows in-progress migrations by default, but you can also filter by `--status`.
* If you encounter failure statuses that require attention, see [AUTOTITLE](/migrations/elm/troubleshooting#statuses-and-recommended-actions).

## 8. Complete the migration

When a migration is ready for cutover, you can complete the migration. The cutover process will archive the source repository, making it **permanently read-only** unless a repository administrator unarchives it.

``` shell copy
gh elm migration cutover --migration-id $MIGRATION_ID
```

Continue to monitor the migration. When you see the `MIGRATION_STATUS_COMPLETED` status at the top of the response, the migration is complete, although there are some follow-up tasks to give access to users from {% data variables.product.prodname_ghe_server %}.

## Next steps

Give users access to the new repository and reconcile activity with user accounts. See [AUTOTITLE](/migrations/elm/complete-your-migration).
