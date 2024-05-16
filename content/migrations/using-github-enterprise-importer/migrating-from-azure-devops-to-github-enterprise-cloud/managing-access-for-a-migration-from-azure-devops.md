---
title: Managing access for a migration from Azure DevOps
shortTitle: Manage access
intro: 'Before you use {% data variables.product.prodname_importer_proper_name %}, make sure you have appropriate access to both the source and destination of your migration.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About required access for {% data variables.product.prodname_importer_proper_name %}

{% data reusables.enterprise-migration-tool.required-access-intro %}

To migrate a repository from Azure DevOps to GitHub, you need sufficient access to both the source (an organization on Azure DevOps) and the destination (an organization on {% data variables.product.prodname_dotcom %}). To have sufficient access, you'll need all of the following things.
- A required role in the destination organization on {% data variables.product.prodname_dotcom %}
- A {% data variables.product.pat_generic %} that can access the destination organization on {% data variables.product.prodname_dotcom %}
  - The {% data variables.product.pat_generic %} must have all the required scopes, which depend on your role and the task you want to complete.
  - If the destination organization uses SAML single sign-on for {% data variables.product.prodname_dotcom_the_website %}, you must authorize the {% data variables.product.pat_generic %} for SSO.
- A {% data variables.product.pat_generic %} that can access the source organization on Azure DevOps

Additionally, if you use IP allow lists with the source or destination, you may need to configure the allow lists to allow access by {% data variables.product.prodname_importer_proper_name %}.

## About the migrator role

{% data reusables.enterprise-migration-tool.about-the-migrator-role %}

<span id="required-roles"></span>

## Required roles for {% data variables.product.company_short %}

For the destination organization on {% data variables.product.prodname_dotcom %}, different roles are required for different tasks.

{% data reusables.enterprise-migration-tool.gei-required-roles %}

## Required scopes for {% data variables.product.pat_generic %}s

To run a migration, you need one {% data variables.product.pat_generic %} that can access the destination organization on {% data variables.product.prodname_dotcom %}, and another {% data variables.product.pat_generic %} that can access the source organization on Azure DevOps.

For other tasks, such as downloading a migration log, you only need one {% data variables.product.pat_generic %} that can access the destination organization on {% data variables.product.prodname_dotcom %}.

### {% data variables.product.pat_generic_caps %}s for {% data variables.product.prodname_dotcom %}

{% data reusables.enterprise-migration-tool.github-pat-required-scopes %}

### {% data variables.product.pat_generic_caps %}s for Azure DevOps

Your Azure DevOps {% data variables.product.pat_generic %} must have `work item (read)`, `code (read)`, and `identity (read)` scopes.

If you want to use the `--integrate-boards` or `--rewire-pipelines` flags when generating a migration script, you will also need `Build (Read)` scope.

If you want to migrate from multiple organizations, allow the {% data variables.product.pat_generic %} to access all accessible organizations. For more information, see [Use {% data variables.product.pat_generic %}s](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page#create-a-pat) in Microsoft Docs.

## Granting the migrator role

To allow someone other than an organization owner to run a migration or download migration logs, you can grant the migrator role to a user or team. For more information, see "[About the migrator role](#about-the-migrator-role)."

You can grant the migrator role using either the {% data variables.product.prodname_ado2gh_cli %} or the GraphQL API.

- "[Granting the migrator role with the {% data variables.product.prodname_ado2gh_cli_short %}](#granting-the-migrator-role-with-the-ado2gh-extension)"
- "[Granting the migrator role with the GraphQL API](#granting-the-migrator-role-with-the-graphql-api)"

### Granting the migrator role with the {% data variables.product.prodname_ado2gh_cli_short %}

To grant the migrator role using the CLI, you must have installed the {% data variables.product.prodname_ado2gh_cli %}. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/migrating-repositories-from-azure-devops-to-github-enterprise-cloud#step-1-install-the-ado2gh-extension-of-the-github-cli)."

1. On {% data variables.product.prodname_dotcom_the_website %}, create and record a {% data variables.product.pat_generic %} that meets all the requirements for granting the migrator role. For more information, see "[Creating a {% data variables.product.pat_generic %} for {% data variables.product.prodname_dotcom %}](#creating-a-personal-access-token-for-github)."
{% data reusables.enterprise-migration-tool.grant-migrator-role-pat %}
1. Use the `gh ado2gh grant-migrator-role` command, replacing ORGANIZATION with the organization you want to grant the migrator role for, ACTOR with the user or team name, and TYPE with `USER` or `TEAM`.

   ```shell copy
   gh ado2gh grant-migrator-role --github-org ORGANIZATION --actor ACTOR --actor-type TYPE
   ```

### Granting the migrator role with the GraphQL API

{% data reusables.enterprise-migration-tool.grant-migrator-role-graphql %}

## Creating a {% data variables.product.pat_generic %} for {% data variables.product.prodname_dotcom %}

{% data reusables.enterprise-migration-tool.creating-a-pat-steps %}

## Configuring IP allow lists for migrations

{% data reusables.enterprise-migration-tool.configuring-ip-allow-lists %}

### Identifying {% data variables.product.prodname_dotcom %}'s IP ranges

{% data reusables.enterprise-migration-tool.identifying-githubs-ip-ranges %}

## Further reading

- "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
