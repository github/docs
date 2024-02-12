---
title: Migrating organizations from GitHub.com to GitHub Enterprise Cloud
shortTitle: GitHub.com to Enterprise Cloud
intro: 'You can migrate organizations from {% data variables.product.prodname_dotcom_the_website %} to {% data variables.product.prodname_ghe_cloud %}, using the {% data variables.product.prodname_cli %} or the GraphQL API.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
defaultTool: cli
redirect_from:
  - /early-access/enterprise-importer/migrating-organizations-with-github-enterprise-importer/migrating-organizations-from-githubcom-to-github-enterprise-cloud
---

## About organization migrations with {% data variables.product.prodname_importer_proper_name %}

{% data reusables.enterprise-migration-tool.tool-options %}

{% cli %}
{% data reusables.enterprise-migration-tool.gei-tool-switcher-api %}
{% endcli %}
{% api %}
{% data reusables.enterprise-migration-tool.gei-tool-switcher-cli %}
{% endapi %}

## Prerequisites

{% data reusables.enterprise-migration-tool.migration-prerequisites %}
- For the source organization, you must be an organization owner or have the migrator role. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/granting-the-migrator-role-for-github-enterprise-importer)."
- For the destination enterprise account, you must be an enterprise owner.

{% api %}

## Step 0: Get ready to use the {% data variables.product.prodname_dotcom %} GraphQL API

{% data reusables.enterprise-migration-tool.migration-query-method %}

## Step 1: Get the enterprise ID for your migration destination

As an enterprise owner in {% data variables.product.prodname_dotcom_the_website %}, use the following query to return the ID for the enterprise account you want to own the migrated organization. You'll need the enterprise ID to identify your migration destination.

```graphql
query(
  $slug: String!
){
  enterprise (slug: $slug)
  {
    slug
    id
  }
}
```

{% data reusables.enterprise_migrations.retreive-enterprise-id-graphql %}

## Step 2: Start your organization migration

When you start a migration, a single organization and its accompanying data migrates into a brand new organization within the destination enterprise that you identify.

```graphql
mutation startOrganizationMigration (
  $sourceOrgUrl: URI!,
  $targetOrgName: String!,
  $targetEnterpriseId: ID!,
  $sourceAccessToken: String!,
	$targetAccessToken: String!
){
  startOrganizationMigration( input: {
    sourceOrgUrl: $sourceOrgUrl,
    targetOrgName: $targetOrgName,
    targetEnterpriseId: $targetEnterpriseId,
    sourceAccessToken: $sourceAccessToken,
		targetAccessToken: $targetAccessToken
  }) {
    orgMigration {
      id
    }
  }
}
```

| Query variable | Description |
|----|----|
`sourceOrgUrl` | The URL of the source organization, such as `https://github.com/octo-org`.
`targetOrgName` | The name you want the new organization to have. Must be unique on {% data variables.product.prodname_dotcom_the_website %}.
`targetEnterpriseId` | The ID of the enterprise that you want to create the new organization in, returned by step 2.
`sourceAccessToken` | Your {% data variables.product.pat_v1 %} for the source organization. For requirements, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer)."
`targetAccessToken` | Your {% data variables.product.pat_v1 %} for the destination enterprise.

In the next step, you'll use the migration ID returned from the `startOrganizationMigration` mutation to check the migration status.

## Step 3: Check the status of your migration

To detect any migration failures and ensure your migration is working, you can query the `OrganizationMigration`(s) that you have created to see the migration status using the `getMigration` query.

The query will return with a status to let you know if the migration is `queued`, `in progress`, `failed`, or `completed`, plus information about how many repositories are waiting to be migrated. If your migration failed, the {% data variables.product.prodname_importer_secondary_name %} will provide a reason for the failure.

```graphql
query (
  $id: ID!
){
  node( id: $id ) {
    ... on OrganizationMigration {
      id
			sourceOrgUrl
			targetOrgName
      state
      failure_reason
      remaining_repositories_count
      total_repositories_count
    }
  }
}
```

| Query variable | Description |
|----|----|
| `id` | The `id` of your migration. |

{% endapi %}

{% cli %}

## Step 1: Install the {% data variables.product.prodname_gei_cli %}

{% data reusables.enterprise-migration-tool.install-gei-extension-intro %}

{% data reusables.enterprise-migration-tool.install-github-cli %}
{% data reusables.enterprise-migration-tool.install-gei-extension %}

{% data reusables.enterprise-migration-tool.gei-help-flag %}

## Step 2: Update the {% data variables.product.prodname_gei_cli %}

{% data reusables.enterprise-migration-tool.update-gei-cli %}

## Step 3: Set environment variables

Before you can use the {% data variables.product.prodname_gei_cli_short %} to migrate to {% data variables.product.prodname_ghe_cloud %}, you must create {% data variables.product.pat_v1_plural %} that can access the source organization and destination enterprise, then set the {% data variables.product.pat_v1_plural %} as environment variables.

1. Create and record a {% data variables.product.pat_generic %} that meets all the requirements to authenticate for the source organization for organization migrations. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer#creating-a-personal-access-token-for-github-enterprise-importer)."
1. Create and record a {% data variables.product.pat_v1 %} that meets all the requirements to authenticate for the destination enterprise for organization migrations.
1. Set environment variables for the {% data variables.product.pat_v1_plural %}, replacing TOKEN in the commands below with the {% data variables.product.pat_v1_plural %} you recorded above. Use `GH_PAT` for the destination enterprise and `GH_SOURCE_PAT` for the source organization.

   - If you're using Terminal, use the `export` command.

     ```shell copy
     export GH_PAT="TOKEN"
     export GH_SOURCE_PAT="TOKEN"
     ```

   - If you're using PowerShell, use the `$env` command.

     ```shell copy
     $env:GH_PAT="TOKEN"
     $env:GH_SOURCE_PAT="TOKEN"
     ```

## Step 4: Migrate your organization

To migrate an organization, use the `gh gei migrate-org` command.

```shell copy
gh gei migrate-org --github-source-org SOURCE --github-target-org DESTINATION --github-target-enterprise ENTERPRISE
```

{% data reusables.enterprise-migration-tool.placeholder-table %}
{% data reusables.enterprise-migration-tool.source-placeholder %}
DESTINATION | The name you want the new organization to have. Must be unique on {% data variables.product.prodname_dotcom_the_website %}.
ENTERPRISE | The slug for your destination enterprise, which you can identify by looking at the URL for your enterprise account, `https://github.com/enterprises/SLUG`.

## Step 5: Validate your migration and check the error log

{% endcli %}
{% api %}

## Step 4: Validate your migration and check the error log

{% endapi %}

After your migration has finished, we recommend that you check the migration log repository. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/accessing-your-migration-logs-for-github-enterprise-importer#accessing-an-organization-migration-log)."

Finally, we recommend you perform a soundness check of your organization and migrated repositories.
