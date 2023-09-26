---
title: Migrating repositories from Bitbucket Server to GitHub Enterprise Cloud
shortTitle: Bitbucket Server to Enterprise Cloud
intro: 'You can migrate repositories from Bitbucket Server to {% data variables.product.prodname_ghe_cloud %} using the {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
defaultTool: cli
redirect_from:
  - /early-access/enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-from-bitbucket-server-to-github-enterprise-cloud
---

## About repository migrations with {% data variables.product.prodname_importer_proper_name %}

You can migrate individual repositories or all repositories from a BitBucket Server instance using {% data variables.product.prodname_cli %}.

At this time, migrating from Bitbucket Server with the {% data variables.product.prodname_dotcom %} API is not supported.

## Prerequisites

{% data reusables.enterprise-migration-tool.migration-prerequisites %}
- For the destination organization on {% data variables.product.prodname_dotcom_the_website %}, you must be an organization owner or have the migrator role. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/granting-the-migrator-role-for-github-enterprise-importer)."
- You need the username and password for a Bitbucket Server account with admin or super admin permissions.

## Step 1: Install the {% data variables.product.prodname_bbs2gh_cli %}

If this is your first migration, you'll need to install the {% data variables.product.prodname_bbs2gh_cli %}. For more information about {% data variables.product.prodname_cli %}, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

{% data reusables.enterprise-migration-tool.install-github-cli %}
1. Install the {% data variables.product.prodname_bbs2gh_cli_short %}.

   ```shell copy
   gh extension install github/gh-bbs2gh
   ```

{% data reusables.enterprise-migration-tool.bbs2gh-help-flag %}

## Step 2: Update the {% data variables.product.prodname_bbs2gh_cli %}

The {% data variables.product.prodname_bbs2gh_cli %} is updated weekly. {% data reusables.enterprise-migration-tool.update-your-extension %}

```shell copy
gh extension upgrade github/gh-bbs2gh
```

## Step 3: Set environment variables

Before you can use the {% data variables.product.prodname_bbs2gh_cli_short %} to migrate to {% data variables.product.prodname_ghe_cloud %}, you must create a {% data variables.product.pat_generic %} that can access the destination organization, then set the {% data variables.product.pat_generic %} as an environment variable.

You'll also need to set environment variables for your Bitbucket Server username and password and, if your Bitbucket Server instance runs on Windows, your SMB password.

1. Create and record a {% data variables.product.pat_v1 %} that will authenticate for the destination organization on {% data variables.product.prodname_ghe_cloud %}, making sure that the token meets all requirements. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer#creating-a-personal-access-token-for-github-enterprise-importer)."
1. Set environment variables, replacing TOKEN with the {% data variables.product.pat_generic %} you recorded above, USERNAME with the username of a Bitbucket Server account that has admin or super admin permissions, and PASSWORD with the password for the Bitbucket Server account.

   - If you're using Terminal, use the `export` command.

      ```shell copy
      export GH_PAT="TOKEN"
     export BBS_USERNAME="USERNAME"
     export BBS_PASSWORD="PASSWORD"
     # If your Bitbucket Server instance runs on Windows
     export SMB_PASSWORD="PASSWORD"
      ```

   - If you're using PowerShell, use the `$env` command.

      ```shell copy
      $env:GH_PAT="TOKEN"
     $env:BBS_USERNAME="USERNAME"
     $env:BBS_PASSWORD="PASSWORD"
     # If your Bitbucket Server instance runs on Windows
     $env:SMB_PASSWORD="PASSWORD"
      ```

## Step 4: Set up blob storage

Because many Bitbucket Server instances sit behind firewalls, the {% data variables.product.prodname_cli %} uses blob storage as an intermediate location to store your data that is reachable from the internet.

You will first generate an archive of the data you want to migrate and push the data to blob storage from behind your firewall.

{% data reusables.enterprise-migration-tool.supported-blob-storage-providers %}

Before you can run a migration, you need to set up a storage container with your chosen cloud provider to store your data.

### Setting up an AWS S3 storage bucket

{% data reusables.enterprise-migration-tool.set-up-aws-bucket %}

{% data reusables.enterprise-migration-tool.aws-credentials-cli %}

### Setting up an Azure Blob Storage storage account

{% data reusables.enterprise-migration-tool.set-up-azure-storage-account %}

{% data reusables.enterprise-migration-tool.azure-credentials-cli %}

## Step 5: Migrate a repository

You can migrate repositories with the `gh bbs2gh migrate-repo` command.

When you migrate a repository, by default, the {% data variables.product.prodname_bbs2gh_cli %} performs the following steps:

1. Connects to your Bitbucket Server instance and generates a migration archive per repository
1. Downloads the migration archive from the Bitbucket Server instance to the machine where you're running the {% data variables.product.prodname_bbs2gh_cli %}, using SFTP (Linux) or SMB (Windows)
1. Uploads the migration archives to the blob storage provider of your choice
1. Starts your migration in {% data variables.product.prodname_ghe_cloud %}, using the URLs of the archives stored with your blob storage provider
1. Deletes the migration archive from your local machine. (You'll need to delete the archive from your blob storage provider manually once the migration has finished.)

Alternatively, you can use the {% data variables.product.prodname_cli %} to generate the archive, download that archive manually, and then use the {% data variables.product.prodname_cli %} to continue the migration.

- "[Allowing the {% data variables.product.prodname_cli %} to download the migration archive](#allowing-the-github-cli-to-download-the-migration-archive)"
- "[Downloading the migration archive manually](#downloading-the-migration-archive-manually)"

### Allowing the {% data variables.product.prodname_cli %} to download the migration archive

To migrate a single repository, use the `gh bbs2gh migrate-repo` command.

{% data reusables.enterprise-migration-tool.bitbucket-server-migrate-repo-access %}

```shell copy
gh bbs2gh migrate-repo --bbs-server-url BBS-SERVER-URL \
  --bbs-project PROJECT --bbs-repo CURRENT-NAME \
  --github-org DESTINATION --github-repo NEW-NAME \
  # Use the following options if your Bitbucket Server instance runs on Linux
  --ssh-user SSH-USER --ssh-private-key PATH-TO-KEY
  # Use the following options if your Bitbucket Server instance runs on Windows
  --smb-user SMB-USER
  # Use the following option if you're using AWS S3 as your blob storage provider
  --aws-bucket-name AWS-BUCKET-NAME
  # Use the following option if you are running a Bitbucket Data Center cluster or your Bitbucket Server is behind a load balancer
  --archive-download-host ARCHIVE-DOWNLOAD-HOST
```

{% data reusables.enterprise-migration-tool.placeholder-table %}
{% data reusables.enterprise-migration-tool.bbs-server-url-placeholder %}
{% data reusables.enterprise-migration-tool.project-placeholder %}
{% data reusables.enterprise-migration-tool.current-name-placeholder %}
{% data reusables.enterprise-migration-tool.destination-placeholder %}
{% data reusables.enterprise-migration-tool.new-name-placeholder %}
{% data reusables.enterprise-migration-tool.ssh-user-placeholder %}
{% data reusables.enterprise-migration-tool.path-to-key-placeholder %}
{% data reusables.enterprise-migration-tool.smb-user-placeholder %}
{% data reusables.enterprise-migration-tool.aws-bucket-name-placeholder %}
{% data reusables.enterprise-migration-tool.archive-download-host-placeholder %}

{% note %}

**Note:** If you get an error mentioning `Renci.SshNet`, then the CLI is having issues making an SFTP connection to your server to download your migration archive. For information about how to troubleshoot these issues, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/troubleshooting-your-migration-with-github-enterprise-importer#cipher-name-is-not-supported)."

{% endnote %}

### Downloading the migration archive manually

By default, the {% data variables.product.prodname_bbs2gh_cli %} performs the entire migration, including downloading the migration archive from the Bitbucket Server instance using SFTP or SMB.

However, some customers prefer to download the migration archive manually, because their server does not offer SFTP access, for example. In that case, you can use the {% data variables.product.prodname_cli %} to generate the archive, download that archive manually, and then use the {% data variables.product.prodname_cli %} to continue the migration.

You must follow this step from a computer that can access:

- Your Bitbucket Server instance via HTTPS
- Your chosen blob storage provider

First, use the `gh bbs2gh migrate-repo` command with only the following arguments:

```shell copy
gh bbs2gh migrate-repo --bbs-server-url BBS-SERVER-URL \
  --bbs-project PROJECT \
  --bbs-repo CURRENT-NAME
```

{% data reusables.enterprise-migration-tool.placeholder-table %}
{% data reusables.enterprise-migration-tool.bbs-server-url-placeholder %}
{% data reusables.enterprise-migration-tool.project-placeholder %}
{% data reusables.enterprise-migration-tool.current-name-placeholder %}

Your migration archive will be generated, and its path will be printed in the command output:

```text
[12:14] [INFO] Export completed. Your migration archive should be ready on your
instance at $BITBUCKET_SHARED_HOME/data/migration/export/Bitbucket_export_9.tar
```

In general, `$BITBUCKET_SHARED_HOME` will be set to `/var/atlassian/application-data/bitbucket/shared` on Linux and `C:\Atlassian\ApplicationData\Bitbucket\Shared` on Windows, but this may differ depending on your server configuration. To help you identify your shared home directory, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/troubleshooting-your-migration-with-github-enterprise-importer#source-export-archive-does-not-exist-error)."

Download the migration archive from your Bitbucket Server instance, and store the archive on the machine where you're running the {% data variables.product.prodname_cli %}.

To import your migration archive into {% data variables.product.prodname_dotcom %}, use the `gh bbs2gh migrate-repo` command again, with a different set of arguments:

```shell copy
gh bbs2gh migrate-repo --archive-path ARCHIVE-PATH \
  --github-org DESTINATION --github-repo NEW-NAME \
  --bbs-server-url BBS-SERVER-URL \
  --bbs-project PROJECT \
  --bbs-repo CURRENT-NAME \
  # Use the following option if you're using AWS S3 as your blob storage provider
  --aws-bucket-name AWS-BUCKET-NAME
```

{% data reusables.enterprise-migration-tool.placeholder-table %}
{% data reusables.enterprise-migration-tool.archive-path-placeholder %}
{% data reusables.enterprise-migration-tool.destination-placeholder %}
{% data reusables.enterprise-migration-tool.new-name-placeholder %}
{% data reusables.enterprise-migration-tool.bbs-server-url-placeholder %}
{% data reusables.enterprise-migration-tool.project-placeholder %}
{% data reusables.enterprise-migration-tool.current-name-placeholder %}
{% data reusables.enterprise-migration-tool.aws-bucket-name-placeholder %}

## Step 6: Validate your migration and check the error log

{% data reusables.enterprise-migration-tool.validate-migration-logs %}

## Step 7: Migrate multiple repositories

{% data reusables.enterprise-migration-tool.generate-migration-script %}

### Generating a migration script

You must follow this step from a computer that can access your Bitbucket Server instance via HTTPS.

To generate a migration script, run the `gh bbs2gh generate-script` command.

```shell copy
gh bbs2gh generate-script --bbs-server-url BBS-SERVER-URL \
  --github-org DESTINATION \
  --output FILENAME \
  # Use the following options if your Bitbucket Server instance runs on Linux
  --ssh-user SSH-USER --ssh-private-key PATH-TO-KEY
  # Use the following options if your Bitbucket Server instance runs on Windows
  --smb-user SMB-USER
  # Use the following option if you are running a Bitbucket Data Center cluster or your Bitbucket Server is behind a load balancer
  --archive-download-host ARCHIVE-DOWNLOAD-HOST
```

{% data reusables.enterprise-migration-tool.download-migration-logs-flag %}

{% data reusables.enterprise-migration-tool.placeholder-table %}
{% data reusables.enterprise-migration-tool.bbs-server-url-placeholder %}
{% data reusables.enterprise-migration-tool.destination-placeholder %}
{% data reusables.enterprise-migration-tool.filename-placeholder %}
{% data reusables.enterprise-migration-tool.ssh-user-placeholder %}
{% data reusables.enterprise-migration-tool.path-to-key-placeholder %}
{% data reusables.enterprise-migration-tool.smb-user-placeholder %}
{% data reusables.enterprise-migration-tool.archive-download-host-placeholder %}

### Reviewing the migration script

After you generate the script, review the file and, optionally, edit the script.

- If there are any repositories you don't want to migrate, delete or comment out the corresponding lines.
- By default, repository names in {% data variables.product.prodname_dotcom %} will follow a `projectKey-repositoryName` convention. For example, a Bitbucket Server repository named `airports` that is part of the `open-source` project, which has the key `OS`, would be called `OS-airports` in {% data variables.product.prodname_dotcom %}. If you want any repositories to have a different name on {% data variables.product.prodname_dotcom %}, update the value for the corresponding `--github-repo` flag.

### Running your migration script

To migrate your repositories, run the generated script.

{% data reusables.enterprise-migration-tool.bitbucket-server-migrate-repo-access %}

Before running the script, you must set additional environment variables to authenticate to your blob storage provider.

- For AWS S3, set the following environment variables.
  - `AWS_ACCESS_KEY`: The access key for your bucket
  - `AWS_SECRET_KEY`: The secret key for your bucket
  - `AWS_REGION`: The AWS region where your bucket is located
  - `AWS_SESSION_TOKEN`: The session token, if you're using AWS temporary credentials (see [Using temporary credentials with AWS resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html) in the AWS documentation)
- For Azure Blob Storage, set `AZURE_STORAGE_CONNECTION_STRING` to the connection string for your Azure storage account.

{% data reusables.enterprise-migration-tool.azure-storage-connection-key %}

{% data reusables.enterprise-migration-tool.migrate-multiple-repos %}
