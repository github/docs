---
title: Use GraphQL to migrate repositories from GitLab to GitHub Enterprise Cloud
allowTitleToDifferFromFilename: true
shortTitle: Migrate with GraphQL API
intro: You can build your own tooling to migrate repositories from GitLab to {% data variables.product.prodname_ghe_cloud %} using the GraphQL API.
versions:
  fpt: '*'
  ghec: '*'
contentType: other
---

> [!NOTE] You can also use {% data variables.product.prodname_gl2gh_cli %} to perform your migration. See [AUTOTITLE](/migrations/using-github-enterprise-importer/migrate-from-gitlab/understand-migrations).

## Step 0: Get ready to use the {% data variables.product.prodname_dotcom %} GraphQL API

{% data reusables.enterprise-migration-tool.migration-query-method %}

## Step 1: Get the `ownerId` for your migration destination

{% data reusables.enterprise-migration-tool.get-destination-ownerId-ec %}

{% data reusables.enterprise-migration-tool.migration-destination-query %}

## Step 2: Identify where you're migrating from

{% data reusables.enterprise-migration-tool.identify-migration-source-intro %}

Your migration source is your GitLab instance.

### `createMigrationSource` mutation

```graphql
mutation createMigrationSource($name: String!, $url: String!, $ownerId: ID!) {
  createMigrationSource(input: {name: $name, url: $url, ownerId: $ownerId, type: GITLAB}) {
    migrationSource {
      id
      name
      url
      type
    }
  }
}
```

Set `url` to the full URL of your GitLab instance, such as `https://gitlab.com` or `https://gitlab.example.com`. Make sure to use `GITLAB` for `type`.

{% data reusables.enterprise-migration-tool.createMigrationSource-table-ec %}

### `createMigrationSource` response

```json
{
  "data": {
    "createMigrationSource": {
      "migrationSource": {
        "id": "MS_kgDaACQxYmYxOWU4Yi0wNzZmLTQ3NTMtOTdkZC1hNGUzZmYxN2U2YzA",
        "name": "GitLab Source",
        "url": "https://gitlab.com",
        "type": "GITLAB"
      }
    }
  }
}
```

In this example, `MS_kgDaACQxYmYxOWU4Yi0wNzZmLTQ3NTMtOTdkZC1hNGUzZmYxN2U2YzA` is the migration source ID, which we'll use in a later step.

## Step 3: Generate and host your migration archive

Migrations from GitLab are archive-based. Instead of connecting to your GitLab instance during the migration, {% data variables.product.prodname_importer_proper_name %} imports a migration archive that you generate from your GitLab project. A GitLab archive is a single file that contains both the Git source and the repository's metadata.

Before you start the migration, you must:

1. Generate a migration archive for the GitLab project you want to migrate.
1. Host the archive at a URL that {% data variables.product.prodname_ghe_cloud %} can access.

You'll provide this URL as the `gitArchiveUrl` value in the next step.

### Generating a migration archive

Use the GitLab [project export API](https://docs.gitlab.com/api/project_import_export/) to export the project you want to migrate. The token you use must have the `api` scope and a role with permission to export the project. For more information, see [AUTOTITLE](/migrations/using-github-enterprise-importer/migrate-from-gitlab/manage-access).

In the following requests, set the `GITLAB_PAT` environment variable to the token you created in [AUTOTITLE](/migrations/using-github-enterprise-importer/migrate-from-gitlab/manage-access). Replace `GITLAB-SERVER` with the host of your GitLab instance, such as `gitlab.com`, and replace `GROUP%2FPROJECT` with the URL-encoded path of your project. For example, the project `acme-group/my-project` is encoded as `acme-group%2Fmy-project`. For nested subgroups, include the full path, such as `parent-group%2Fsubgroup%2Fmy-project`.

1. Schedule the export.

   ```shell
   curl --request POST \
     --header "PRIVATE-TOKEN: $GITLAB_PAT" \
     "https://GITLAB-SERVER/api/v4/projects/GROUP%2FPROJECT/export"
   ```

1. Check the status of the export. Repeat this request until `export_status` is `finished`.

   ```shell
   curl --header "PRIVATE-TOKEN: $GITLAB_PAT" \
     "https://GITLAB-SERVER/api/v4/projects/GROUP%2FPROJECT/export"
   ```

1. Download the archive.

   ```shell
   curl --location \
     --header "PRIVATE-TOKEN: $GITLAB_PAT" \
     --output archive.tar.gz \
     "https://GITLAB-SERVER/api/v4/projects/GROUP%2FPROJECT/export/download"
   ```

### Hosting the archive

You must host the archive at a URL that {% data variables.product.prodname_ghe_cloud %} can access. You can either upload the archive to {% data variables.product.prodname_ghos %} or use an external blob storage provider. For information about external providers, see [AUTOTITLE](/migrations/using-github-enterprise-importer/migrate-from-gitlab/configure-storage).

To upload the archive to {% data variables.product.prodname_ghos %}, you'll need the database ID of your organization on {% data variables.product.prodname_ghe_cloud %}. Replace `ORGANIZATION` with the name of your organization to get this ID from the `id` field in the response.

```shell
curl --header "Authorization: Bearer YOUR-TOKEN" \
  "{% data variables.product.rest_url %}/orgs/ORGANIZATION"
```

> [!NOTE] If you're migrating to {% data variables.enterprise.data_residency_site %}, replace `{% data variables.product.rest_url %}` with the base API URL for your enterprise's subdomain, such as `https://api.{% data variables.enterprise.data_residency_example_domain %}`.

Upload the archive with a `POST` request, replacing `ORGANIZATION-ID` with your organization's database ID. This request works for archives up to 100 MiB. For larger archives, use an external blob storage provider.

```shell
curl --request POST \
  --header "Authorization: Bearer YOUR-TOKEN" \
  --header "Content-Type: application/octet-stream" \
  --data-binary @archive.tar.gz \
  "https://uploads.github.com/organizations/ORGANIZATION-ID/gei/archive?name=archive.tar.gz"
```

> [!NOTE] If you're migrating to {% data variables.enterprise.data_residency_site %}, replace `uploads.github.com` with the uploads host for your enterprise's subdomain, such as `uploads.{% data variables.enterprise.data_residency_example_domain %}`.

The response includes a `uri` in the format `gei://archive/GUID`. Use this value as the `gitArchiveUrl` in the next step.

```json
{
  "guid": "ff7b1a25-aa10-41a9-8e42-f170304b1c0d",
  "node_id": "MA_kgDaACRmZjdiMWEyNS1hYTEwLTQxYTktOGU0Mi1mMTcwMzA0YjFjMGQ",
  "name": "archive.tar.gz",
  "size": 7103,
  "uri": "gei://archive/ff7b1a25-aa10-41a9-8e42-f170304b1c0d",
  "created_at": "2024-11-13T12:35:45.761-08:00"
}
```

## Step 4: Start your repository migration

{% data reusables.enterprise-migration-tool.start-repository-migration-ec %}

### `startRepositoryMigration` mutation

```graphql
mutation startRepositoryMigration (
  $sourceId: ID!,
  $ownerId: ID!,
  $sourceRepositoryUrl: URI!,
  $repositoryName: String!,
  $continueOnError: Boolean!,
  $accessToken: String!,
  $githubPat: String!,
  $gitArchiveUrl: String!,
  $targetRepoVisibility: String!
){
  startRepositoryMigration( input: {
    sourceId: $sourceId,
    ownerId: $ownerId,
    repositoryName: $repositoryName,
    continueOnError: $continueOnError,
    accessToken: $accessToken,
    githubPat: $githubPat,
    targetRepoVisibility: $targetRepoVisibility,
    gitArchiveUrl: $gitArchiveUrl,
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
| `gitArchiveUrl` | A {% data variables.product.prodname_ghe_cloud %}-accessible URL to the migration archive you generated in the previous step. GitLab migrations use a single archive that contains both the Git source and metadata, so you don't need to provide a separate `metadataArchiveUrl`.
| `sourceRepositoryUrl` | The URL of your source repository on GitLab, using the format `https://GITLAB-SERVER/{group}/{project}`. For nested subgroups, include the full path, such as `https://GITLAB-SERVER/{parent-group}/{subgroup}/{project}`. {% data variables.product.prodname_ghe_cloud %} does not connect to this URL during the migration; it's recorded for reference.

Because GitLab migrations are archive-based, {% data variables.product.prodname_ghe_cloud %} does not connect to GitLab during the migration. The `accessToken` variable is required by the mutation but isn't used, so you can set it to any placeholder value, such as `not-used`.

For {% data variables.product.pat_generic %} requirements, see [AUTOTITLE](/migrations/using-github-enterprise-importer/migrate-from-gitlab/manage-access).

{% data reusables.enterprise-migration-tool.next-check-status %}

## Step 5: Check the status of your migration

{% data reusables.enterprise-migration-tool.check-migration %}

## Step 6: Validate your migration and check the error log

{% data reusables.enterprise-migration-tool.validate-migration-log %}

## Further reading

* [AUTOTITLE](/migrations/using-github-enterprise-importer/migrate-from-gitlab/follow-up-tasks)
