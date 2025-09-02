---
title: Migrating repositories from GitHub Enterprise Server to GitHub Enterprise Cloud
shortTitle: Migrate from Enterprise Server
intro: 'You can migrate repositories from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %}, using the {% data variables.product.prodname_cli %} or API.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
defaultTool: cli
redirect_from:
  - /early-access/enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-to-github-enterprise-cloud/migrating-repositories-from-github-enterprise-server-to-github-enterprise-cloud
  - /early-access/enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-from-github-enterprise-server-to-github-enterprise-cloud
  - /migrations/using-github-enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-from-github-enterprise-server-to-github-enterprise-cloud
---

## About repository migrations with {% data variables.product.prodname_importer_proper_name %}

{% data reusables.enterprise-migration-tool.tool-options %}

{% api %}

If you choose to use the API, you'll need to write your own scripts or use an HTTP client like [Insomnia](https://insomnia.rest/). You can learn more about getting started with {% data variables.product.company_short %}'s APIs in [AUTOTITLE](/rest/guides/getting-started-with-the-rest-api) and [AUTOTITLE](/graphql/guides/forming-calls-with-graphql).

To migrate your repositories from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %} with the APIs, you will:

1. Create a {% data variables.product.pat_generic %} for both the source and destination organization
1. Fetch the `ownerId` of the destination organization on {% data variables.product.prodname_ghe_cloud %}
1. Set up a migration source via {% data variables.product.prodname_dotcom %}'s GraphQL API to identify where you're migrating from
1. For each repository you want to migrate, repeat these steps.
   * Use the REST API on {% data variables.location.product_location_enterprise %} to generate migration archives for your repository
   * Upload your migration archives to a location where they can be accessed by {% data variables.product.prodname_dotcom %}
   * Start your migration using the GraphQL API for your migration destination, passing in your archive URLs
   * Check the status of your migration via the GraphQL API
   * Validate your migration and check the error log

{% endapi %}

{% cli %}

{% data reusables.enterprise-migration-tool.gei-tool-switcher-api %}

{% endcli %}

{% api %}

{% data reusables.enterprise-migration-tool.gei-tool-switcher-cli %}

{% endapi %}

## Prerequisites

* {% data reusables.enterprise-migration-tool.github-trial-prerequisite %}
* {% data reusables.enterprise-migration-tool.link-to-support-limitations %} For more information, see [AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products).
* {% data reusables.enterprise-migration-tool.delta-migrations-not-supported %}
* In both the source and destination organizations, you must be either an organization owner or be granted the migrator role. For more information, see [AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#about-the-migrator-role).
* If you use {% data variables.product.prodname_ghe_server %} 3.8 or higher, to configure blob storage for exported archives, you need access to the {% data variables.enterprise.management_console %}.

{% api %}

## Step 1. Create your {% data variables.product.pat_generic %}

{% data reusables.enterprise-migration-tool.create-pats %}

## Step 2: Get the `ownerId` for the destination organization

{% data reusables.enterprise-migration-tool.get-destination-ownerId-ec %}

{% data reusables.enterprise-migration-tool.migration-destination-query %}

## Step 3: Set up blob storage

When performing a repository migration, you must store your repository data in a place that {% data variables.product.prodname_importer_proper_name %} can access. This can be accomplished by:

* Using local storage on the GHES instance (GHES **3.16** and later)
* Using a blob storage provider

### Using local storage (GHES 3.16+)

{% data reusables.enterprise-migration-tool.local-storage-steps %}

### Using a blob storage provider

If your {% data variables.product.prodname_ghe_server %} instance is behind a firewall, you may need to set up blob storage with an external cloud service.

First, you must set up blob storage with a supported provider. Then, if you're using a cloud provider, you must configure your credentials for the storage provider in the {% data variables.enterprise.management_console %} or {% data variables.product.prodname_cli %}.

{% data reusables.enterprise-migration-tool.supported-blob-storage-providers %}

> [!NOTE]
> You only need to configure blob storage if you use {% data variables.product.prodname_ghe_server %} versions 3.8 or higher. If you use {% data variables.product.prodname_ghe_server %} versions 3.7 or lower, skip to [Step 4: Set up a migration source in {% data variables.product.prodname_ghe_cloud %}](#step-4-set-up-a-migration-source-in-github-enterprise-cloud).
>
> Blob storage is required to migrate repositories with large Git source or metadata. If you use {% data variables.product.prodname_ghe_server %} versions 3.7 or lower, you will not be able to perform migrations where your Git source or metadata exports exceed 2GB. To perform these migrations, update to {% data variables.product.prodname_ghe_server %} versions 3.8 or higher.

#### Setting up an AWS S3 storage bucket

{% data reusables.enterprise-migration-tool.set-up-aws-bucket %}

#### Setting up an Azure Blob Storage account

{% data reusables.enterprise-migration-tool.set-up-azure-storage-account %}

#### Configuring blob storage in the {% data variables.enterprise.management_console %} of {% data variables.location.product_location_enterprise %}

{% data reusables.enterprise-migration-tool.blob-storage-management-console %}

#### Allowing network access

If you have configured firewall rules on your storage account, ensure you have allowed access to the IP ranges for your migration destination. See [AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#configuring-ip-allow-lists-for-migrations).

## Step 4: Set up a migration source in {% data variables.product.prodname_ghe_cloud %}

{% data reusables.enterprise-migration-tool.identify-migration-source-intro %}

Your migration source is your organization on {% data variables.product.prodname_ghe_server %}.

### `createMigrationSource` mutation

```graphql
mutation createMigrationSource($name: String!, $url: String!, $ownerId: ID!) {
  createMigrationSource(input: {name: $name, url: $url, ownerId: $ownerId, type: GITHUB_ARCHIVE}) {
    migrationSource {
      id
      name
      url
      type
    }
  }
}
```

{% data reusables.enterprise-migration-tool.type-note-github-archive %}

{% data reusables.enterprise-migration-tool.createMigrationSource-table-ec %}
| `url` | The URL for {% data variables.location.product_location_enterprise %}. This URL does not need to be accessible from {% data variables.product.prodname_ghe_cloud %}.

### `createMigrationSource` response

```json
{
  "data": {
    "createMigrationSource": {
      "migrationSource": {
        "id": "MS_kgDaACRjZTY5NGQ1OC1mNDkyLTQ2NjgtOGE1NS00MGUxYTdlZmQwNWQ",
        "name": "GHES Source",
        "url": "https://my-ghes-hostname.com",
        "type": "GITHUB_ARCHIVE"
      }
    }
  }
}
```

In this example, `MS_kgDaACRjZTY5NGQ1OC1mNDkyLTQ2NjgtOGE1NS00MGUxYTdlZmQwNWQ` is the migration source ID, which we'll use in a later step.

## Step 5: Generate migration archives on {% data variables.location.product_location_enterprise %}

You will use the REST API to start two "migrations" in {% data variables.product.prodname_ghe_server %}: one to generate an archive of your repository's Git source, and one to generate an archive of your repository's metadata (such as issues and pull requests).

To generate the Git source archive, make a `POST` request to `https://HOSTNAME/api/v3/orgs/ORGANIZATION/migrations`, replacing `HOSTNAME` with the hostname of {% data variables.location.product_location_enterprise %}, and `ORGANIZATION` with your organization's login.

In the body, specify the single repository you want to migrate. Your request will look something like this:

```http
POST /api/v3/orgs/acme-corp/migrations HTTP/1.1
Accept: application/vnd.github+json
Authorization: Bearer <TOKEN>
Content-Type: application/json
Host: github.acmecorp.net

{
  "repositories": ["repository_to_migrate"],
  "exclude_metadata": true
}
```

To generate your metadata archive, send a similar request to the same URL with the following body:

```json
{
  "repositories": ["repository_to_migrate"],
  "exclude_git_data": true,
  "exclude_releases": false,
  "exclude_owner_projects": true
}
```

Each of these two API calls will return a JSON response including the ID of the migration you have started.

```http
HTTP/1.1 201 Created

{
  "id": 123,
  // ...
}
```

For more information, see [Start an organization migration](/rest/migrations/orgs#start-an-organization-migration).

Generating the archives can take a while, depending on the amount of data. You can regularly check the status of the two migrations with the "Get an organization migration status" API until the `state` of the migration changes to `exported`.

```http
GET /api/v3/orgs/acme-corp/migrations/123 HTTP/1.1
Accept: application/vnd.github+json
Authorization: Bearer <TOKEN>
Host: github.acmecorp.net

HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 123,
  "state": "exported",
  // ...
}
```

For more information, see [Get an organization migration status](/rest/migrations/orgs#get-an-organization-migration-status).

> [!NOTE]
> If your migration moves to the `failed` state rather than the `exported` state, try starting the migration again. If the migration fails repeatedly, we recommend generating the archives using `ghe-migrator` instead of the API.
>
>Follow the steps in [Exporting migration data from your enterprise]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/migrating-data-to-and-from-your-enterprise/exporting-migration-data-from-your-enterprise), adding only one repository to the migration. At the end of the process, you will have a single migration archive with your Git source and metadata, and you can move to step 6 in this article.

After the `state` of a migration moves to `exported`, you can fetch the migration's URL using the "Download an organization migration archive" API.

```http
GET /api/v3/orgs/acme-corp/migrations/123/archive HTTP/1.1
Accept: application/vnd.github+json
Authorization: Bearer <TOKEN>
Host: github.acmecorp.net

HTTP/1.1 302 Found
Location: https://media.github.acmecorp.net/migrations/123/archive/cca2ebe9-7403-4ffa-9b6a-4c9e16c94410?token=AAAAABEWE7JP4H2HACKEGMTDOYRC6
```

The API will return a `302 Found` response with a `Location` header redirecting to the URL where the downloadable archive is located. Download the two files: one for the Git source, and one for the metadata.

For more information, see [Download an organization migration archive](/rest/migrations/orgs#download-an-organization-migration-archive).

After both migrations have completed and you have downloaded the archives, you can move to the next step.

## Step 6: Upload your migration archives

To import your data into {% data variables.product.prodname_ghe_cloud %}, you must pass both archives for each repository (Git source and metadata) from your machine to {% data variables.product.prodname_dotcom %}, using our GraphQL API.

If you're using {% data variables.product.prodname_ghe_server %} 3.7 or lower, you must first generate URLs for the archives that are accessible by {% data variables.product.prodname_dotcom %}. Most customers choose to upload the archives to a cloud provider's blob storage service, such as Amazon S3 or Azure Blob Storage, then generate a short-lived URL for each.

If you're using {% data variables.product.prodname_ghe_server %} 3.8 or higher, your instance uploads the archives and generates the URLs for you. The `Location` header in the previous step will return the short-lived URL.

You may need to allowlist {% data variables.product.company_short %}'s IP ranges. For more information, see [AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#configuring-ip-allow-lists-for-migrations).

### Uploading your migration archives to {% data variables.product.prodname_ghos %}

> [!NOTE]
> Repository migrations with {% data variables.product.prodname_ghos %} are currently in {% data variables.release-phases.public_preview %} and subject to change.

If you're using {% data variables.product.prodname_ghos %}, you will upload your archive to {% data variables.product.prodname_ghos %} using the following process:

1. Create a multipart upload by submitting a POST request
1. Upload archive in multiple parts up to 100MB in size as PATCH requests
1. Submit a PUT request to complete the upload

#### 1. Create the multipart upload

You will submit a POST request to:

```http
https://uploads.github.com/organizations/{organization_id}/gei/archive/blobs/uploads
```

Include a JSON body like below with the archive name and size. The content type can remain as `"application/octet-stream"` for all uploads.

```json
{
"content_type": "application/octet-stream",
"name": "git-archive.tar.gz",
"size": 262144000
}
```

This will return a JSON object response as follows:

```json
{
  "guid": "363b2659-b8a3-4878-bfff-eed4bcb54d35",
  "node_id": "MA_kgDaACQzNjNiMjY1OS1iOGEzLTQ4NzgtYmZmZi1lZWQ0YmNiNTRkMzU",
  "name": "git-archive.tar.gz",
  "size": 33287,
  "uri": "gei://archive/363b2659-b8a3-4878-bfff-eed4bcb54d35",
  "created_at": "2024-11-13T12:35:45.761-08:00"
}
```

This URI represents the uploaded archive, and will be used to enqueue migration when you start your repository migration. The response will also include the location in the response header used to upload file parts using a PATCH request in the next step:

```http
/organizations/{organization_id}/gei/archive/blobs/uploads?part_number=1&guid=<guid>&upload_id=<upload_id>
```

#### 2. Upload the archive in multiple parts

Upload up to 100 MB of your file in each part with a PATCH request using the location from the previous response header, ensuring that the raw data is uploaded in the request body without using a multipart form. If the final part of your file is less than 100 MB, upload only the remaining bytes in that last request:

```http
https://uploads.github.com/{location}
```

This will return an empty response body with the following location in the response header:

```http
/organizations/{organization_id}/gei/archive/blobs/uploads?part_number=2&guid=<guid>&upload_id=<upload_id>
```

Repeat this until the upload is complete. Ensure that you are reading up to 100 MB of the file at a time, and submitting requests to the new location values with the incremented `part_number` values.

#### 3. Complete the upload

Submit a PUT request to the "last path" value from the previous step with an empty body and your upload to GitHub-owned storage is complete. The GEI URI can be constructed with the GUID from this initial POST request in the following format:

```http
gei://archive/{guid}
```

## Step 7: Start your repository migration

{% data reusables.enterprise-migration-tool.start-repository-migration-ec %}

### `startRepositoryMigration` mutation

```graphql
mutation startRepositoryMigration (
  $sourceId: ID!,
  $ownerId: ID!,
  $repositoryName: String!,
  $continueOnError: Boolean!,
  $accessToken: String!,
  $githubPat: String!,
  $gitArchiveUrl: String!,
  $metadataArchiveUrl: String!,
  $sourceRepositoryUrl: URI!,
  $targetRepoVisibility: String!
){
  startRepositoryMigration( input: {
    sourceId: $sourceId,
    ownerId: $ownerId,
    repositoryName: $repositoryName,
    continueOnError: $continueOnError,
    accessToken: $accessToken,
    githubPat: $githubPat,
    targetRepoVisibility: $targetRepoVisibility
    gitArchiveUrl: $gitArchiveUrl,
    metadataArchiveUrl: $metadataArchiveUrl,
    sourceRepositoryUrl: $sourceRepositoryUrl,
  }) {
    repositoryMigration {
      id
      migrationSource {
        id
        name
        type
      }
      sourceUrl
    }
  }
}
```

{% data reusables.enterprise-migration-tool.startRepositoryMigration-table-ec %}
`gitArchiveUrl` | A {% data variables.product.prodname_ghe_cloud %}-accessible URL for your Git source archive.
`metadataArchiveUrl` | A {% data variables.product.prodname_ghe_cloud %}-accessible URL for your metadata archive.
`sourceRepositoryUrl` | The URL for your repository on your {% data variables.product.prodname_ghe_server %} instance. This is required, but {% data variables.product.prodname_ghe_cloud %} will not communicate directly with your {% data variables.product.prodname_ghe_server %} instance.

For {% data variables.product.pat_generic %} requirements, see [AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#required-scopes-for-personal-access-tokens).

{% data reusables.enterprise-migration-tool.next-check-status %}

## Step 8: Check the status of your migration

{% data reusables.enterprise-migration-tool.check-migration %}

## Step 9: Validate your migration and check the error log

{% data reusables.enterprise-migration-tool.validate-migration-log %}

{% endapi %}

{% cli %}

## Step 1: Install the {% data variables.product.prodname_gei_cli %}

{% data reusables.enterprise-migration-tool.install-gei-extension-intro %}

{% data reusables.enterprise-migration-tool.gei-binary %}

{% data reusables.enterprise-migration-tool.install-github-cli %}
{% data reusables.enterprise-migration-tool.install-gei-extension %}

{% data reusables.enterprise-migration-tool.gei-help-flag %}

## Step 2: Update the {% data variables.product.prodname_gei_cli %}

{% data reusables.enterprise-migration-tool.update-gei-cli %}

## Step 3: Set environment variables

{% data reusables.enterprise-migration-tool.set-env-variables-gei %}

{% data reusables.enterprise-migration-tool.create-pats %}
{% data reusables.enterprise-migration-tool.env-variables-gei %}

## Step 4: Set up blob storage

### Migrating repositories with {% data variables.product.prodname_ghos %}

> [!NOTE]
> Repository migrations with {% data variables.product.prodname_ghos %} are currently in {% data variables.release-phases.public_preview %} and subject to change.

If you do not want to set up and provide {% data variables.product.prodname_importer_proper_name %} with access to a customer-owned blob storage account for storing your repository archives, you can migrate repositories using {% data variables.product.prodname_ghos %}. To do so, you must be running v1.9.0 (or higher) of {% data variables.product.prodname_gei_cli %}. {% data variables.product.prodname_ghos %} does not require additional setup and is available as an option when you run {% data variables.product.prodname_gei_cli %} commands.

For security purposes, {% data variables.product.prodname_ghos %} is explicitly write-only, and downloads from {% data variables.product.prodname_ghos %} are not possible. After a migration is complete, the repository archives are immediately deleted. If an archive is uploaded and not used in a migration, the archive is deleted after 7 days.

When you use the CLI flag for {% data variables.product.prodname_ghos %}, the repository archive is automatically exported to the destination configured in the Management Console, uploaded to GitHub-owned storage, and imported to your migration destination. When using {% data variables.product.prodname_ghos %} we recommend configuring local storage. See [Using local storage (GHES 3.16+)](#using-local-storage-ghes-316-1).

### Migrating repositories with customer-owned blob storage

{% data reusables.enterprise-migration-tool.blob-storage-intro %}

### Setting up an AWS S3 storage bucket

{% data reusables.enterprise-migration-tool.set-up-aws-bucket %}

### Setting up an Azure Blob Storage storage account

{% data reusables.enterprise-migration-tool.set-up-azure-storage-account %}

### Using local storage (GHES 3.16+)

{% data reusables.enterprise-migration-tool.local-storage-steps %}

### Configuring your blob storage credentials

If you set up blob storage with a **cloud provider** (as opposed to local storage), you must configure your credentials for the storage provider in {% data variables.product.prodname_dotcom %}:

* If you use {% data variables.product.prodname_ghe_server %} 3.8 or higher, configure your credentials in the {% data variables.enterprise.management_console %}.
* If you use {% data variables.product.prodname_ghe_server %} 3.7 or lower, configure the credentials in the {% data variables.product.prodname_cli %}.

#### Configuring blob storage in the {% data variables.enterprise.management_console %} of {% data variables.location.product_location_enterprise %}

> [!NOTE]
> You only need to configure blob storage in the {% data variables.enterprise.management_console %} if you use {% data variables.product.prodname_ghe_server %} 3.8 or higher. If you use 3.7 or lower, configure your credentials in the {% data variables.product.prodname_cli %} instead.

{% data reusables.enterprise-migration-tool.blob-storage-management-console %}

### Configuring your blob storage credentials in the {% data variables.product.prodname_cli %}

> [!NOTE]
> You only need to configure your blob storage credentials in the {% data variables.product.prodname_cli %} if you use {% data variables.product.prodname_ghe_server %} 3.7 or lower. If you use 3.8 or higher, configure blob storage in the {% data variables.enterprise.management_console %} instead.
>
> If you configure your blob storage credentials in the {% data variables.product.prodname_cli %}, you will not be able to perform migrations where your Git source or metadata exports exceed 2GB. To perform these migrations, upgrade to {% data variables.product.prodname_ghe_server %} 3.8 or higher.

#### Configuring AWS S3 credentials in the {% data variables.product.prodname_cli %}

{% data reusables.enterprise-migration-tool.aws-credentials-cli %}

#### Configuring Azure Blob Storage account credentials in the {% data variables.product.prodname_cli %}

{% data reusables.enterprise-migration-tool.azure-credentials-cli %}

### Allowing network access

If you have configured firewall rules on your storage account, ensure you have allowed access to the IP ranges for your migration destination. See [AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#configuring-ip-allow-lists-for-migrations).

## Step 5: Generate a migration script

{% data reusables.enterprise-migration-tool.generate-migration-script %}

If you want to migrate a single repository, skip to the next step.

### Generating a migration script

{% data reusables.enterprise-migration-tool.follow-step-from-computer-with-access %}

{% data reusables.enterprise-migration-tool.gh-gei-generate-script %}

For {% data variables.product.prodname_ghe_server %} 3.8 or later, or if you're using 3.7 or lower with Azure Blob Storage, use the following flags:

```shell copy
gh gei generate-script --github-source-org SOURCE \
  --github-target-org DESTINATION \
  --output FILENAME \
  --ghes-api-url GHES-API-URL
```

If you're using {% data variables.product.prodname_ghe_server %} 3.7 or lower with AWS S3, use the following flags:

```shell copy
gh gei generate-script --github-source-org SOURCE \
  --github-target-org DESTINATION \
  --output FILENAME \
  --ghes-api-url GHES-API-URL \
  --aws-bucket-name AWS-BUCKET-NAME
```

#### Placeholders

{% data reusables.enterprise-migration-tool.generate-script-table %}
{% data reusables.enterprise-migration-tool.ghes-api-url-placeholder %}
{% data reusables.enterprise-migration-tool.aws-bucket-name-placeholder %}

#### Additional arguments

| Argument | Description |
| -------- | ----------- |
| `--target-api-url TARGET-API-URL` | {% data reusables.enterprise-migration-tool.add-target-api-url %} |
| `--no-ssl-verify` | {% data reusables.enterprise-migration-tool.ssl-flag %} |
| `--download-migration-logs` | Download the migration log for each migrated repository. For more information about migration logs, see [AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/accessing-your-migration-logs-for-github-enterprise-importer#downloading-all-migration-logs-for-an-organization). |
| `--use-github-storage`| Perform a repository migration using {% data variables.product.prodname_ghos %} as the intermediate blob storage solution. |

### Reviewing the migration script

{% data reusables.enterprise-migration-tool.review-migration-script %}

{% data reusables.enterprise-migration-tool.skip-releases %}

{% data reusables.enterprise-migration-tool.gei-binary-generate-script %}

## Step 6: Migrate repositories

{% data reusables.enterprise-migration-tool.migrate-repos-gei %}

When you migrate repositories, the {% data variables.product.prodname_gei_cli %} performs the following steps:

1. Connects to {% data variables.location.product_location_enterprise %} and generates two migration archives per repository, one for the Git source and one for the metadata
1. Uploads the migration archives to the blob storage provider of your choice
1. Starts your migration in {% data variables.product.prodname_ghe_cloud %}, using the URLs of the archives stored with your blob storage provider
1. Deletes the migration archive from your local machine

### Migrate multiple repositories

If you're migrating from {% data variables.product.prodname_ghe_server %} 3.7 or earlier, before you run your script, you must set additional environment variables to authenticate to your blob storage provider.

* For Azure Blob Storage, set `AZURE_STORAGE_CONNECTION_STRING` to the connection string for your Azure storage account.

   {% data reusables.enterprise-migration-tool.azure-storage-connection-key %}
* For AWS S3, set the following environment variables.
  * `AWS_ACCESS_KEY_ID`: The access key id for your bucket
  * `AWS_SECRET_ACCESS_KEY`: The secret key for your bucket
  * `AWS_REGION`: The AWS region where your bucket is located
  * `AWS_SESSION_TOKEN`: The session token, if you're using AWS temporary credentials (see [Using temporary credentials with AWS resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html) in the AWS documentation)

{% data reusables.enterprise-migration-tool.migrate-multiple-repos %}

### Migrate a single repository

{% data reusables.enterprise-migration-tool.follow-step-from-computer-with-access %}

{% data reusables.enterprise-migration-tool.gei-migrate-repo %}

If you're using {% data variables.product.prodname_ghe_server %} 3.8 or later, use the following flags:

```shell copy
gh gei migrate-repo --github-source-org SOURCE --source-repo CURRENT-NAME --github-target-org DESTINATION --target-repo NEW-NAME --ghes-api-url GHES-API-URL
```

If you're migrating from {% data variables.product.prodname_ghe_server %} 3.7 or earlier and using Azure Blob Storage as your blob storage provider, use the following flags to authenticate:

```shell copy
gh gei migrate-repo --github-source-org SOURCE --source-repo CURRENT-NAME --github-target-org DESTINATION --target-repo NEW-NAME \
    --ghes-api-url GHES-API-URL --azure-storage-connection-string "AZURE_STORAGE_CONNECTION_STRING"
```

If you're migrating from {% data variables.product.prodname_ghe_server %} 3.7 or earlier and using Amazon S3 as your blob storage provider, use the following flags to authenticate:

```shell copy
gh gei migrate-repo --github-source-org SOURCE --source-repo CURRENT-NAME --github-target-org DESTINATION --target-repo NEW-NAME \
    --ghes-api-url GHES-API-URL --aws-bucket-name "AWS-BUCKET-NAME"
```

#### Placeholders

{% data reusables.enterprise-migration-tool.migrate-repo-table-ec %}
{% data reusables.enterprise-migration-tool.ghes-api-url-placeholder %}
{% data reusables.enterprise-migration-tool.azure-storage-connection-string-placeholder %}
{% data reusables.enterprise-migration-tool.aws-bucket-name-placeholder %}

#### Additional arguments

| Argument | Description |
| -------- | ----------- |
| `--target-api-url TARGET-API-URL` | {% data reusables.enterprise-migration-tool.add-target-api-url %} |
| `--no-ssl-verify` | {% data reusables.enterprise-migration-tool.ssl-flag %} |
| `--skip-releases` | {% data reusables.enterprise-migration-tool.skip-releases %} |
| `--target-repo-visibility TARGET-VISIBILITY` | {% data reusables.enterprise-migration-tool.set-repository-visibility %} |
| `--use-github-storage`| Perform a repository migration using {% data variables.product.prodname_ghos %} as the intermediate blob storage solution. |

#### Aborting the migration

{% data reusables.enterprise-migration-tool.abort-migration %}

```shell copy
gh gei abort-migration --migration-id MIGRATION-ID
```

## Step 7: Validate your migration and check the error log

{% data reusables.enterprise-migration-tool.validate-migration-logs %}

After your migration has finished, we recommend deleting the archives from your storage container. If you plan to complete additional migrations, delete the archive placed into your storage container by the {% data variables.product.prodname_ado2gh_cli_short %}. If you're done migrating, you can delete the entire container.

{% endcli %}
