---
title: Use GraphQL to migrate repositories from Azure DevOps to GitHub Enterprise Cloud
shortTitle: Migrate with GraphQL API
intro: You can build your own tooling to migrate repositories from Azure DevOps to {% data variables.product.prodname_ghe_cloud %} using the GraphQL API.
versions:
  fpt: '*'
  ghec: '*'
defaultTool: cli
contentType: other
---

>[!NOTE] You can also use {% data variables.product.prodname_ado2gh_cli %} to perform your migration. See [AUTOTITLE](/migrations/ado/phase-1-understand-migrations-from-azure-devops-to-github).

## Step 0: Get ready to use the {% data variables.product.prodname_dotcom %} GraphQL API

{% data reusables.enterprise-migration-tool.migration-query-method %}

## Step 1: Get the `ownerId` for your migration destination

{% data reusables.enterprise-migration-tool.get-destination-ownerId-ec %}

{% data reusables.enterprise-migration-tool.migration-destination-query %}

## Step 2: Identify where you're migrating from

{% data reusables.enterprise-migration-tool.identify-migration-source-intro %}

Your migration source is your ADO organization.

### `createMigrationSource` mutation

```graphql
mutation createMigrationSource($name: String!, $ownerId: ID!) {
  createMigrationSource(input: {name: $name, url: "https://dev.azure.com", ownerId: $ownerId, type: AZURE_DEVOPS}) {
    migrationSource {
      id
      name
      url
      type
    }
  }
}
```

{% data reusables.enterprise-migration-tool.type-note-azure-devops %}

{% data reusables.enterprise-migration-tool.createMigrationSource-table-ec %}

### `createMigrationSource` response

```json
{
  "data": {
    "createMigrationSource": {
      "migrationSource": {
        "id": "MS_kgDaACQxYmYxOWU4Yi0wNzZmLTQ3NTMtOTdkZC1hNGUzZmYxN2U2YzA",
        "name": "Azure DevOps Source",
        "url": "https://dev.azure.com",
        "type": "AZURE_DEVOPS"
      }
    }
  }
}
```

In this example, `MS_kgDaACQxYmYxOWU4Yi0wNzZmLTQ3NTMtOTdkZC1hNGUzZmYxN2U2YzA` is the migration source ID, which we'll use in the next step.

## Step 3: Start your repository migration

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
| `sourceRepositoryUrl` | The URL of your source repository, using the format `https://dev.azure.com/{organization}/{project}/_git/{repository}`.

For {% data variables.product.pat_generic %} requirements, see [AUTOTITLE](/migrations/ado/phase-2-manage-access).

{% data reusables.enterprise-migration-tool.next-check-status %}

## Step 4: Check the status of your migration

{% data reusables.enterprise-migration-tool.check-migration %}

## Step 5: Validate your migration and check the error log

{% data reusables.enterprise-migration-tool.validate-migration-log %}

## Further reading

* [AUTOTITLE](/migrations/ado/phase-6-follow-up-tasks)
* [AUTOTITLE](/migrations/ado/key-differences-between-azure-devops-and-github)
