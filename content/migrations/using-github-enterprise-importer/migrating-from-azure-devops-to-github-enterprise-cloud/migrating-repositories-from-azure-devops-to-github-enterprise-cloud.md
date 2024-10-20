---
title: Migrating repositories from Azure DevOps to GitHub Enterprise Cloud
shortTitle: Migrate repositories
intro: 'You can migrate repositories from Azure DevOps to {% data variables.product.prodname_ghe_cloud %}, using the {% data variables.product.prodname_cli %} or the GraphQL API.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
defaultTool: cli
redirect_from:
  - /early-access/enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-to-github-enterprise-cloud/migrating-repositories-from-azure-devops-to-github-enterprise-cloud
  - /early-access/enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-from-azure-devops-to-github-enterprise-cloud
  - /migrations/using-github-enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-from-azure-devops-to-github-enterprise-cloud
---

## About repository migrations with {% data variables.product.prodname_importer_proper_name %}

{% data reusables.enterprise-migration-tool.tool-options %}

{% cli %}
{% data reusables.enterprise-migration-tool.gei-tool-switcher-api %}
{% endcli %}
{% api %}
{% data reusables.enterprise-migration-tool.gei-tool-switcher-cli %}
{% endapi %}

{% ifversion repo-rules-enterprise %}
{% data reusables.enterprise-migration-tool.deploy-key-bypass %}
{% endif %}

## Prerequisites

* We strongly recommend that you perform a trial run of your migration and complete your production migration soon after. To learn more about trial runs, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/overview-of-a-migration-from-azure-devops-to-github-enterprise-cloud#running-your-migrations)."
* {% data reusables.enterprise-migration-tool.link-to-support-limitations %} For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/about-migrations-from-azure-devops-to-github-enterprise-cloud)."
* {% data reusables.enterprise-migration-tool.delta-migrations-not-supported %}
* For the destination organization on {% data variables.product.prodname_dotcom %}, you need to be an organization owner or have the migrator role. For more information about the migrator role, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/managing-access-for-a-migration-from-azure-devops#about-the-migrator-role)."

{% api %}

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
        "name": "Azure Devops Source",
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
    targetRepoVisibility: $targetRepoVisibility
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

For {% data variables.product.pat_generic %} requirements, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/managing-access-for-a-migration-from-azure-devops#required-scopes-for-personal-access-tokens)."

{% data reusables.enterprise-migration-tool.next-check-status %}

## Step 4: Check the status of your migration

{% data reusables.enterprise-migration-tool.check-migration %}

## Step 5: Validate your migration and check the error log

{% data reusables.enterprise-migration-tool.validate-migration-log %}

{% endapi %}

{% cli %}

## Step 1: Install the {% data variables.product.prodname_ado2gh_cli %}

If this is your first migration, you'll need to install the {% data variables.product.prodname_ado2gh_cli %}. For more information about {% data variables.product.prodname_cli %}, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

{% data reusables.enterprise-migration-tool.ado2gh-binary %}

{% data reusables.enterprise-migration-tool.install-github-cli %}
1. Install the {% data variables.product.prodname_ado2gh_cli_short %}.

   ```shell copy
   gh extension install github/gh-ado2gh
   ```

{% data reusables.enterprise-migration-tool.ado2gh-help-flag %}

## Step 2: Update the {% data variables.product.prodname_ado2gh_cli %}

The {% data variables.product.prodname_ado2gh_cli %} is updated weekly. {% data reusables.enterprise-migration-tool.update-your-extension %}

```shell copy
gh extension upgrade github/gh-ado2gh
```

## Step 3: Set environment variables

Before you can use the {% data variables.product.prodname_ado2gh_cli_short %} to migrate to {% data variables.product.prodname_ghe_cloud %}, you must create {% data variables.product.pat_generic %}s that can access the source and destination organizations, then set the {% data variables.product.pat_generic %}s as environment variables.

1. Create and record a {% data variables.product.pat_v1 %} that will authenticate for the destination organization on {% data variables.product.prodname_ghe_cloud %}, making sure that the token meets all requirements. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/managing-access-for-a-migration-from-azure-devops#creating-a-personal-access-token-for-github)."
1. Create and record a {% data variables.product.pat_generic %} that will authenticate for the source organization on Azure DevOps, making sure that this token meets all requirements. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/managing-access-for-a-migration-from-azure-devops#personal-access-tokens-for-azure-devops)."
1. Set environment variables for the {% data variables.product.pat_generic %}s, replacing TOKEN in the commands below with the {% data variables.product.pat_generic %}s you recorded above. Use `GH_PAT` for the destination organization and `ADO_PAT` for the source organization.

   * If you're using Terminal, use the `export` command.

      ```shell copy
      export GH_PAT="TOKEN"
     export ADO_PAT="TOKEN"
      ```

   * If you're using PowerShell, use the `$env` command.

      ```shell copy
      $env:GH_PAT="TOKEN"
     $env:ADO_PAT="TOKEN"
      ```

## Step 4: Generate a migration script

{% data reusables.enterprise-migration-tool.generate-migration-script %}

If you want to migrate a single repository, skip to the next step.

### Generating a migration script

To generate a migration script, run the `gh ado2gh generate-script` command.

```shell copy
gh ado2gh generate-script --ado-org SOURCE --github-org DESTINATION --output FILENAME
```

To add additional functionality to the script, such as rewiring pipelines, creating teams, and configuring Azure Boards integrations, you can add the `--all` flag.

{% data reusables.enterprise-migration-tool.download-migration-logs-flag %}

{% data reusables.enterprise-migration-tool.placeholder-table %}
{% data reusables.enterprise-migration-tool.source-placeholder %}
{% data reusables.enterprise-migration-tool.destination-placeholder %}
{% data reusables.enterprise-migration-tool.filename-placeholder %}

### Reviewing the migration script

{% data reusables.enterprise-migration-tool.review-migration-script %}

{% data reusables.enterprise-migration-tool.ado2gh-binary-generate-script %}

## Step 5: Migrate repositories

You can migrate multiple repositories with a migration script or a single repository with the `gh ado2gh migrate-repo` command.

### Migrate multiple repositories

{% data reusables.enterprise-migration-tool.migrate-multiple-repos %}

### Migrate a single repository

To migrate a single repository, use the `gh ado2gh migrate-repo` command.

```shell copy
gh ado2gh migrate-repo --ado-org SOURCE --ado-team-project TEAM-PROJECT --ado-repo CURRENT-NAME --github-org DESTINATION --github-repo NEW-NAME
```

{% data reusables.enterprise-migration-tool.migrate-repo-table-ec %}
TEAM-PROJECT | Name of the team project of the repository you want to migrate

{% data reusables.enterprise-migration-tool.abort-migration %}

```shell copy
gh ado2gh abort-migration --migration-id MIGRATION-ID
```

## Step 6: Validate your migration and check the error log

{% data reusables.enterprise-migration-tool.validate-migration-logs %}

{% endcli %}
