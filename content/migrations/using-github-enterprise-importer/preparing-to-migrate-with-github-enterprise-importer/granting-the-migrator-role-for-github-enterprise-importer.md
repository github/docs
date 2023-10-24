---
title: Granting the migrator role for GitHub Enterprise Importer
shortTitle: Grant migrator role
intro: 'To allow someone who isn''t an organization owner to run migrations, you can grant a person or team the migrator role.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
permissions: Organization owners can grant the migrator role.
defaultTool: cli
redirect_from:
  - /early-access/enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/granting-the-migrator-role-for-github-enterprise-importer
---

## About the migrator role

To remove the need for organization owners to complete migrations, {% data variables.product.prodname_dotcom_the_website %} includes a distinct role for using {% data variables.product.prodname_importer_proper_name %}. Granting the migrator role allows you to designate other teams or individuals to handle your migrations.

You can grant the migrator role to an individual user or a team. We strongly recommend that you assign the migrator role to a team. Then, you can further customize who can run a migration by adjusting team membership. For more information about changing team membership, see "[AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)" or "[AUTOTITLE](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team)."

You can only grant the migrator role for an organization on {% data variables.product.prodname_dotcom_the_website %}. If you're migrating a repository between two organizations on {% data variables.product.prodname_dotcom_the_website %}, you can grant the migrator role to the same person or team for both organizations, but you must grant each separately.

{% note %}

**Note:** You cannot grant the migrator role for enterprise accounts. Therefore, you can only run an organization migration if you're an owner of the destination enterprise. However, you can grant the migrator role to that enterprise owner for the source organization.

{% endnote %}

After you grant the migrator role, make sure the migrator uses a {% data variables.product.pat_generic %} that meets all the requirements for running migrations. For the details of those requirements, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer)."

{% cli %}

{% data reusables.enterprise-migration-tool.gei-tool-switcher-api %}

## Granting the migrator role with the {% data variables.product.prodname_ado2gh_cli_short %}

{% data reusables.enterprise-migration-tool.grant-migrator-role-pat %}
1. Use the `gh ado2gh grant-migrator-role` command, replacing ORGANIZATION with the organization you want to grant the migrator role for, ACTOR with the user or team name, and TYPE with `USER` or `TEAM`.

   ```shell copy
   gh ado2gh grant-migrator-role --github-org ORGANIZATION --actor ACTOR --actor-type TYPE
   ```

## Granting the migrator role with the {% data variables.product.prodname_bbs2gh_cli_short %}

{% data reusables.enterprise-migration-tool.grant-migrator-role-pat %}
1. Use the `gh bbs2gh grant-migrator-role` command, replacing ORGANIZATION with the organization you want to grant the migrator role for, ACTOR with the user or team name, and TYPE with `USER` or `TEAM`.

   ```shell copy
   gh bbs2gh grant-migrator-role --github-org ORGANIZATION --actor ACTOR --actor-type TYPE
   ```

## Granting the migrator role with the {% data variables.product.prodname_gei_cli_short %}

{% note %}

**Note:** The {% data variables.product.prodname_cli %} does not support granting the migrator role for organizations on {% data variables.product.prodname_ghe_server %}, so you must be an organization owner of the source organization to migrate repositories from {% data variables.product.prodname_ghe_server %}.

{% endnote %}

{% data reusables.enterprise-migration-tool.grant-migrator-role-pat %}
1. Use the `gh gei grant-migrator-role` command, replacing ORGANIZATION with the organization you want to grant the migrator role for, ACTOR with the user or team name, and TYPE with `USER` or `TEAM`.

   ```shell copy
   gh gei grant-migrator-role --github-org ORGANIZATION --actor ACTOR --actor-type TYPE
   ```

{% endcli %}

{% api %}

{% data reusables.enterprise-migration-tool.gei-tool-switcher-cli %}

## Granting the migrator role with the GraphQL API

You can use the `grantMigratorRole` GraphQL mutation to assign the migrator role and the `revokeMigratorRole` mutation to revoke the migrator role.

You must use a {% data variables.product.pat_generic %} (PAT) that meets all access requirements. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer)."

### `grantMigratorRole` mutation

This GraphQL mutation sets the migration role.

```graphql
mutation grantMigratorRole (
  $organizationId: ID!,
  $actor: String!,
  $actor_type: ActorType!
) {
  grantMigratorRole( input: {
    organizationId: $organizationId,
    actor: $actor,
    actorType: $actor_type
  })
   { success }
}
```

| Query variable | Description |
|----|----|
| `organizationId` | The `ownerId` (or organization ID) for your organization, from the `GetOrgInfo` query.
| `actor` | The team or username who you want to assign the migration role to.
|  `actor_type` | Specify whether the migrator is a `USER` or `TEAM`.

### `revokeMigratorRole` mutation

This mutation removes the migrator role.

```graphql
mutation revokeMigratorRole (
  $organizationId: ID!,
  $actor: String!,
  $actor_type: ActorType!
) {
  revokeMigratorRole( input: {
    organizationId: $organizationId,
    actor: $actor,
    actorType: $actor_type
  })
   { success }
}
```

{% endapi %}
