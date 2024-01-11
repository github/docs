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

## Required roles for {% data variables.product.company_short %}

For the destination organization on {% data variables.product.prodname_dotcom %}, different roles are required for different tasks. For some tasks, you can grant the migrator role to a user or team. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/granting-the-migrator-role-for-github-enterprise-importer)."

{% data reusables.enterprise-migration-tool.gei-required-roles %}

## Required scopes for {% data variables.product.pat_generic %}s

To run a migration, you need one {% data variables.product.pat_generic %} that can access the destination organization on {% data variables.product.prodname_dotcom %}, and another {% data variables.product.pat_generic %} that can access the source organization on Azure DevOps.

For other tasks, such as downloading a migration log, you only need one {% data variables.product.pat_generic %} that can access the destination organization on {% data variables.product.prodname_dotcom %}.

### {% data variables.product.pat_generic_caps %}s for {% data variables.product.prodname_dotcom %}

{% data reusables.enterprise-migration-tool.github-pat-required-scopes %}

### {% data variables.product.pat_generic_caps %}s for Azure DevOps

Your Azure DevOps {% data variables.product.pat_generic %} must have `work item (read)`, `code (read)`, and `identity (read)` scopes.

If you want to migrate from multiple organizations, allow the {% data variables.product.pat_generic %} to access all accessible organizations. For more information, see [Use {% data variables.product.pat_generic %}s](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page#create-a-pat) in Microsoft Docs.

## Creating a {% data variables.product.pat_generic %} for {% data variables.product.prodname_dotcom %}

{% data reusables.enterprise-migration-tool.creating-a-pat-steps %}

## Configuring IP allow lists for migrations

{% data reusables.enterprise-migration-tool.configuring-ip-allow-lists %}

### Identifying {% data variables.product.prodname_dotcom %}'s IP ranges

{% data reusables.enterprise-migration-tool.identifying-githubs-ip-ranges %}

## Further reading

- "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
