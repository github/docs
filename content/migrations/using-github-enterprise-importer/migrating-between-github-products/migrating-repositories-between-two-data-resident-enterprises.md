---
title: Migrating repositories between two data-resident enterprises
shortTitle: Migrate between data-resident enterprises
intro: 'You can use the {% data variables.product.prodname_importer_proper_name %} (GEI) extension for {% data variables.product.prodname_cli %} to migrate repositories between two instances of {% data variables.enterprise.data_residency %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
defaultTool: cli
category:
  - Run an enterprise migration
---

## About migrations between data-resident enterprises

Migrations between two data-resident enterprises use the standard GEI archive migration flow:

1. GEI connects to the source {% data variables.enterprise.data_residency_site %} subdomain.
1. GEI generates an archive containing the repository data.
1. GEI uploads the archive to supported migration storage.
1. GEI starts the repository migration on the destination {% data variables.enterprise.data_residency_site %} subdomain.
1. The destination {% data variables.product.prodname_importer_secondary_name %} downloads and processes the archive.

In this migration:

* The **source** is a {% data variables.enterprise.data_residency_site %} subdomain, such as `https://SOURCE_SUBDOMAIN.ghe.com`.
* The **destination** is a different {% data variables.enterprise.data_residency_site %} subdomain, such as `https://DESTINATION_SUBDOMAIN.ghe.com`.
* The source and destination organizations can have different names.
* The migrated repository can have a different name in the destination organization.

The source and destination API endpoints must be specified independently. Do not use the destination API URL for source operations.

> [!IMPORTANT]
> {% data variables.enterprise.data_residency %} API URLs use the format `https://api.SUBDOMAIN.ghe.com`. This is different from a {% data variables.product.prodname_ghe_server %} API URL, which typically uses the format `https://HOSTNAME/api/v3`.

## Prerequisites

Before you begin:

* Confirm that the source and destination are different {% data variables.enterprise.data_residency_site %} subdomains.
* In both the source and destination organizations, ensure that you are an organization owner or have been granted the migrator role.
* Create a {% data variables.product.pat_v1 %} for the source organization.
* Create a {% data variables.product.pat_v1 %} for the destination organization. For required scopes, see [AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#required-scopes-for-personal-access-tokens).
* Run a trial migration before performing the production migration.

We recommend temporarily stopping work on the source repository during the production migration. {% data variables.product.prodname_importer_proper_name %} does not perform delta migrations, so changes made after the migration starts are not included automatically.

For information about the data migrated and known limitations, see [AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products).


## Install the {% data variables.product.prodname_cli %} and GEI

Install the {% data variables.product.prodname_cli %}, then install the GEI extension:

```bash copy
gh extension install github/gh-gei
```

Update the extension before starting a migration:

```bash copy
gh extension upgrade github/gh-gei
```

To display the available options:

```bash copy
gh gei migrate-repo --help
```

## Set environment variables

Set the {% data variables.product.pat_generic %}s for both enterprises:

```bash copy
export GH_SOURCE_PAT="SOURCE_PERSONAL_ACCESS_TOKEN"
export GH_PAT="DESTINATION_PERSONAL_ACCESS_TOKEN"
```

Set the API URL for each {% data variables.enterprise.data_residency_site %} subdomain:

```bash copy
export SOURCE_API_URL="https://api.SOURCE_SUBDOMAIN.ghe.com"
export TARGET_API_URL="https://api.DESTINATION_SUBDOMAIN.ghe.com"
```

Replace `SOURCE_SUBDOMAIN` and `DESTINATION_SUBDOMAIN` with the subdomains of your source and destination enterprise.

For example:

```bash copy
export SOURCE_API_URL="https://api.source-example.ghe.com"
export TARGET_API_URL="https://api.destination-example.ghe.com"
```

The `GH_SOURCE_PAT` token is used for source-side operations, including archive generation. The `GH_PAT` token is used for destination-side operations.

## Configure archive blob storage

{% data variables.product.prodname_importer_proper_name %} exports each project to an archive, then uploads the archive to blob storage that {% data variables.product.github %} can read from. You choose the storage backend when you run a migration:

Storage option | How to select it | Notes
-------------- | ---------------- | -----
{% data variables.product.prodname_ghos %} (recommended) | `--use-github-storage` | No setup required. {% data variables.product.prodname_dotcom %} deletes the archive automatically after a successful migration, or seven days after a failed migration.
AWS S3 | `--aws-bucket-name` (with the `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY` environment variables, and optionally `AWS_SESSION_TOKEN`) | You own the bucket and its lifecycle. {% data variables.product.prodname_dotcom %} does not delete archives from your storage.
Azure Blob Storage | `AZURE_STORAGE_CONNECTION_STRING` environment variable (for a single `migrate-repo` command, you can instead use `--azure-storage-connection-string`) | Only storage-account access-key connection strings are supported (not SAS). {% data variables.product.prodname_dotcom %} does not delete archives from your storage.

## Migrate a single repository

To migrate a single repository, use the `gh gei migrate-repo` command:

```bash copy
gh gei migrate-repo \
  --github-source-org SOURCE_ORGANIZATION \
  --source-repo SOURCE_REPOSITORY \
  --github-source-api-url "$SOURCE_API_URL" \
  --github-target-org DESTINATION_ORGANIZATION \
  --target-repo DESTINATION_REPOSITORY \
  --target-api-url "$TARGET_API_URL" \
  --verbose
```

Replace the placeholders with the following values:

| Placeholder | Description |
| --- | --- |
| `SOURCE_ORGANIZATION` | The organization that owns the repository in the source enterprise. |
| `SOURCE_REPOSITORY` | The name of the repository in the source organization. |
| `DESTINATION_ORGANIZATION` | The organization that will own the migrated repository in the destination enterprise. |
| `DESTINATION_REPOSITORY` | The name of the new repository in the destination organization. |

For example:

```bash copy
gh gei migrate-repo \
  --github-source-org source-org \
  --source-repo example-repository \
  --github-source-api-url "$SOURCE_API_URL" \
  --github-target-org destination-org \
  --target-repo example-repository \
  --target-api-url "$TARGET_API_URL" \
  --verbose
```

If you omit `--target-repo`, GEI uses the source repository name.

### Optional arguments

You can add the following options to the migration command:

| Argument | Description |
| --- | --- |
| `--target-repo-visibility TARGET-VISIBILITY` | Sets the visibility of the new repository. Supported values are `private` and `internal`. |
| `--skip-releases` | Migrates the repository without releases. |
| `--queue-only` | Queues the migration without waiting for it to complete. |
| `--verbose` | Displays additional migration output. |

For example:

```bash copy
gh gei migrate-repo \
  --github-source-org source-org \
  --source-repo example-repository \
  --github-source-api-url "$SOURCE_API_URL" \
  --github-target-org destination-org \
  --target-repo example-repository \
  --target-api-url "$TARGET_API_URL" \
  --target-repo-visibility internal \
  --verbose
```

## Migrate multiple repositories

For multiple repositories, use `gh gei generate-script`.

```bash copy
gh gei generate-script \
  --github-source-org SOURCE_ORGANIZATION \
  --github-target-org DESTINATION_ORGANIZATION \
  --github-source-api-url "$SOURCE_API_URL" \
  --target-api-url "$TARGET_API_URL" \
  --output migration-script.ps1
```

Review the generated script before running it. You can:

* Remove repositories that should not be migrated.
* Change destination repository names.
* Change destination repository visibility.
* Add options such as `--skip-releases`.
* Add `--download-migration-logs` to download logs for each migration.

Run the generated script with PowerShell:

```bash copy
pwsh ./migration-script.ps1
```

## Check the status of a migration

If you started the migration with `--queue-only`, use the migration ID printed by GEI to monitor it:

```bash copy
gh gei wait-for-migration \
  --migration-id MIGRATION_ID \
  --target-api-url "$TARGET_API_URL" \
  --verbose
```

Replace `MIGRATION_ID` with the ID returned by `gh gei migrate-repo`.

> [!NOTE]
> Include both API URL arguments when checking. The source API URL is required for GEI commands that retrieve source-side migration information and logs.

## Download migration logs

To download the migration logs:

```bash copy
gh gei download-logs \
  --migration-id MIGRATION_ID \
  --github-source-api-url "$SOURCE_API_URL" \
  --target-api-url "$TARGET_API_URL"
```

Review the logs for warnings and errors even when the migration reports success.

## Abort a migration

To abort a queued or running migration:

```bash copy
gh gei abort-migration \
  --migration-id MIGRATION_ID \
  --github-source-api-url "$SOURCE_API_URL" \
  --target-api-url "$TARGET_API_URL"
```

## Troubleshooting

### The source tenant cannot be reached

Verify that:

* `--github-source-api-url` is set to the source subdomain.
* The URL uses the format `https://api.SUBDOMAIN.ghe.com`.
* The source token is stored in `GH_SOURCE_PAT`.
* The token has access to the source organization and repository.

### The destination tenant cannot be reached

Verify that:

* `--target-api-url` is set to the destination subdomain.
* The URL uses the format `https://api.SUBDOMAIN.ghe.com`.
* The destination token is stored in `GH_PAT`.
* You have permission to create repositories in the destination organization.

### The migration fails while generating or uploading the archive

Review the migration output and logs, then verify that:

* Migration archive storage is configured correctly.
* The storage provider is accessible to the migration service.
* The source repository is not being modified during the migration.
* The source and destination API URLs have not been swapped.

### Logs cannot be downloaded

When using `download-logs`, `wait-for-migration`, or `abort-migration`, provide the same source and destination API URLs used to start the migration:

```bash
--github-source-api-url "$SOURCE_API_URL" \
--target-api-url "$TARGET_API_URL"
```

### The source URL is rejected

Make sure you are using the {% data variables.enterprise.data_residency_site %} subdomain API endpoint rather than a {% data variables.product.prodname_ghe_server %} endpoint.

Use:

```text
https://api.SUBDOMAIN.ghe.com
```

Do not use:

```text
https://HOSTNAME/api/v3
```

The `/api/v3` format is intended for {% data variables.product.prodname_ghe_server %} sources and is not the correct format for {% data variables.enterprise.data_residency %}.