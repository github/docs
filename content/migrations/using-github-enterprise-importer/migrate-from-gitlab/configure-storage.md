---
title: "Configure blob storage"
allowTitleToDifferFromFilename: true
shortTitle: "5. Configure storage"
intro: "Archives from GitLab need to be temporarily stored so {% data variables.product.github %} can read them."
versions:
  fpt: '*'
  ghec: '*'
contentType: other
---

For most customers, we recommend storing archives with {% data variables.product.prodname_ghos %}. This is the simplest path and does not require any extra configuration.

However, you may want to configure storage with an external provider if you have firewall requirements or need to retain archives after the migration is complete.

## Choosing where to stage archives

The {% data variables.product.prodname_gl2gh_cli_short %} exports each GitLab project to an archive, then uploads the archive to blob storage that {% data variables.product.prodname_dotcom %} can read from. You choose the storage backend when you run a migration.

Storage option | How to select it | Notes
-------------- | ---------------- | -----
{% data variables.product.prodname_ghos %} (recommended) | `--use-github-storage` | No setup required. {% data variables.product.prodname_dotcom %} deletes the archive automatically after a successful migration, or seven days after a failed migration.
AWS S3 | `--aws-bucket-name` (with the `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY` environment variables, and optionally `AWS_SESSION_TOKEN`) | You own the bucket and its lifecycle. {% data variables.product.prodname_dotcom %} does not delete archives from your storage.
Azure Blob Storage | `AZURE_STORAGE_CONNECTION_STRING` environment variable (for a single `migrate-repo` command, you can instead use `--azure-storage-connection-string`) | Only storage-account access-key connection strings are supported (not SAS). {% data variables.product.prodname_dotcom %} does not delete archives from your storage.

## Configuring blob storage

If you are using {% data variables.product.prodname_ghos %}, you do not need to configure anything. You will use the `--use-github-storage` flag to select this method with the CLI. However, you may want to set the `GITHUB_OWNED_STORAGE_MULTIPART_MEBIBYTES` variable (default 100 MiB, minimum 5 MiB) to a lower number if you have a slow or proxied connection.

If you are using external blob storage, you will need to set this up.

### Setting up an AWS S3 storage bucket

{% data reusables.enterprise-migration-tool.set-up-aws-bucket %}

{% data reusables.enterprise-migration-tool.aws-credentials-cli %}

### Setting up an Azure Blob Storage storage account

{% data reusables.enterprise-migration-tool.set-up-azure-storage-account %}

{% data reusables.enterprise-migration-tool.azure-credentials-cli %}

### Allowing network access

If you have configured firewall rules on your storage account, ensure you have allowed access to the IP ranges for your migration destination. See [AUTOTITLE](/migrations/using-github-enterprise-importer/migrate-from-gitlab/manage-access#configure-ip-allow-lists-on-github).