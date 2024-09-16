---
title: Managing access for a migration between GitHub products
shortTitle: Manage access
intro: 'Before you use {% data variables.product.prodname_importer_proper_name %}, make sure you have appropriate access to both the source and destination of your migration.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /early-access/github/migrating-with-github-enterprise-importer/running-a-migration-with-github-enterprise-importer/managing-access-for-github-enterprise-importer
  - /early-access/enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer
  - /migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer
  - /early-access/enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/granting-the-migrator-role-for-github-enterprise-importer
  - /migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/granting-the-migrator-role-for-github-enterprise-importer
---

## About required access for {% data variables.product.prodname_importer_proper_name %}

{% data reusables.enterprise-migration-tool.required-access-intro %}

To run a migration, you need sufficient access to both the source and the destination for your migration. The source is the organization on {% data variables.product.prodname_dotcom_the_website %} or {% data variables.product.prodname_ghe_server %} from which you want to migrate data. The destination is either an organization account on {% data variables.product.prodname_dotcom_the_website %}, if you're migrating repositories, or an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, if you're migrating an entire organization.

To have sufficient access for the migration, for both the source and the destination, you need the following things.
* A required role in the organization or enterprise account
* A {% data variables.product.pat_generic %} that can access the organization or enterprise account
  * The {% data variables.product.pat_generic %} must have all the required scopes, which depend on your role and the task you want to complete.
  * If the source or destination uses SAML single sign-on for {% data variables.product.prodname_dotcom_the_website %}, you must authorize the {% data variables.product.pat_generic %} for SSO.

Additionally, if you use IP allow lists with the source or destination, you may need to configure the allow lists to allow access by {% data variables.product.prodname_importer_proper_name %}.

If you're migrating from {% data variables.product.prodname_ghe_server %} 3.8 or higher for the first time, you also need someone with access to the {% data variables.enterprise.management_console %} to set up blob storage for {% data variables.location.product_location_enterprise %}.

## About the migrator role

{% data reusables.enterprise-migration-tool.about-the-migrator-role %}

{% note %}

**Notes:**

* If you're migrating a repository between two organizations, you can grant the migrator role to the same person or team for both organizations, but you must grant each separately.
* You cannot grant the migrator role for enterprise accounts. Therefore, you can only run an organization migration if you're an owner of the destination enterprise. However, you can grant the migrator role to that enterprise owner for the source organization.
* The {% data variables.product.prodname_cli %} does not support granting the migrator role for organizations on {% data variables.product.prodname_ghe_server %}, so you must be an organization owner of the source organization to migrate repositories from {% data variables.product.prodname_ghe_server %}.

{% endnote %}

## Required roles

For the source and destination of the migration, different roles are required for different tasks.

### Source organization

The following table lists which roles can perform which tasks.

Task | Organization owner | Migrator |
---- | ------- | ----- |
Running a migration  | {% octicon "check" aria-label="Can perform" %} | {% octicon "check" aria-label="Can perform" %} |
Assigning the migrator role for repository migrations | {% octicon "check" aria-label="Can perform" %} | {% octicon "x" aria-label="Cannot perform" %} |

### Destination organization or enterprise

The following table lists which roles can perform which tasks.

Task | Enterprise owner | Organization owner | Migrator |
---- | ------------ | ------- | ----- |
Migrating organizations to an enterprise | {% octicon "check" aria-label="Can perform" %} | {% octicon "x" aria-label="Cannot perform" %} | {% octicon "x" aria-label="Cannot perform" %} |
Assigning the migrator role for repository migrations | {% octicon "dash" aria-label="Not applicable" %} | {% octicon "check" aria-label="Can perform" %} | {% octicon "x" aria-label="Cannot perform" %} |
Migrating repositories to an organization | {% octicon "dash" aria-label="Not applicable" %} | {% octicon "check" aria-label="Can perform" %} | {% octicon "check" aria-label="Can perform" %} |
Downloading a migration log | {% octicon "dash" aria-label="Not applicable" %} | {% octicon "check" aria-label="Can perform" %} | {% octicon "check" aria-label="Can perform" %} |
Reclaiming mannequins | {% octicon "dash" aria-label="Not applicable" %} | {% octicon "check" aria-label="Can perform" %} | {% octicon "x" aria-label="Cannot perform" %} |

## Required scopes for {% data variables.product.pat_generic %}s

To run a migration, you need a {% data variables.product.pat_generic %} that can access the destination organization (for repository migrations) or enterprise account (for organization migrations). You also need another {% data variables.product.pat_generic %} that can access the source organization.

For other tasks, such as downloading a migration log, you only need one {% data variables.product.pat_generic %} that can access the target of the operation.

The scopes that are required for your {% data variables.product.prodname_dotcom %} {% data variables.product.pat_v1 %} depend on your role and the task you want to complete.

{% note %}

**Note**: {% data reusables.user-settings.generic-classic-pat-only %} This means that you cannot use {% data variables.product.prodname_importer_proper_name %} if your organization uses the "Restrict {% data variables.product.pat_v1_plural %} from accessing your organizations" policy. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise#restricting-access-by-personal-access-tokens-classic)."

{% endnote %}

Task | Enterprise owner | Organization owner | Migrator
---- | ------------------ | -------- | ----- |
Assigning the migrator role for repository migrations | {% octicon "dash" aria-label="Not applicable" %} | `admin:org` | {% octicon "dash" aria-label="Not applicable" %}
Running a repository migration (destination organization) | {% octicon "dash" aria-label="Not applicable" %} | `repo`, `admin:org`, `workflow` | `repo`, `read:org`, `workflow`
Downloading a migration log | {% octicon "dash" aria-label="Not applicable" %} | `repo`, `admin:org`, `workflow` | `repo`, `read:org`, `workflow`
Reclaiming mannequins | {% octicon "dash" aria-label="Not applicable" %} | `admin:org` | {% octicon "dash" aria-label="Not applicable" %}
Running a migration (source organization) | {% octicon "dash" aria-label="Not applicable" %} | `admin:org`, `repo` | `admin:org`, `repo` |
Running an organization migration (destination enterprise) | `read:enterprise`, `admin:org`, `repo`, `workflow` | {% octicon "dash" aria-label="Not applicable" %} | {% octicon "dash" aria-label="Not applicable" %} |

## Granting the migrator role

To allow someone other than an organization owner to run a repository migration or download migration logs, you can grant the migrator role to a user or team. For more information, see "[About the migrator role](#about-the-migrator-role)."

You can grant the migrator role using either the {% data variables.product.prodname_gei_cli %} or the GraphQL API.

* "[Granting the migrator role with the {% data variables.product.prodname_gei_cli_short %}](#granting-the-migrator-role-with-the-gei-extension)"
* "[Granting the migrator role with the GraphQL API](#granting-the-migrator-role-with-the-graphql-api)"

### Granting the migrator role with the {% data variables.product.prodname_gei_cli_short %}

To grant the migrator role using the CLI, you must have installed the {% data variables.product.prodname_gei_cli %}. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/migrating-repositories-from-githubcom-to-github-enterprise-cloud#step-1-install-the-gei-extension-of-the-github-cli)."

1. On {% data variables.product.prodname_dotcom_the_website %}, create and record a {% data variables.product.pat_generic %} that meets all the requirements for granting the migrator role. For more information, see "[Creating a {% data variables.product.pat_generic %} for {% data variables.product.prodname_importer_proper_name %}](#creating-a-personal-access-token-for-github-enterprise-importer)."
{% data reusables.enterprise-migration-tool.grant-migrator-role-pat %}
1. Use the `gh gei grant-migrator-role` command, replacing ORGANIZATION with the organization you want to grant the migrator role for, ACTOR with the user or team name, and TYPE with `USER` or `TEAM`.

   ```shell copy
   gh gei grant-migrator-role --github-org ORGANIZATION --actor ACTOR --actor-type TYPE
   ```

### Granting the migrator role with the GraphQL API

{% data reusables.enterprise-migration-tool.grant-migrator-role-graphql %}

## Creating a {% data variables.product.pat_generic %} for {% data variables.product.prodname_importer_proper_name %}

{% data reusables.enterprise-migration-tool.creating-a-pat-steps %}

## Configuring IP allow lists for migrations

{% data reusables.enterprise-migration-tool.configuring-ip-allow-lists %}

If the source of your migration is {% data variables.product.prodname_ghe_server %}, you do not need to add any {% data variables.product.prodname_dotcom %} IP ranges to your firewall configuration or the IP allow list on {% data variables.location.product_location_enterprise %}. However, depending on the setup of your blob storage provider, you may need to update your blob storage provider's configuration to allow access to the {% data variables.product.prodname_dotcom %} IP ranges below.

### Identifying {% data variables.product.prodname_dotcom %}'s IP ranges

{% data reusables.enterprise-migration-tool.identifying-githubs-ip-ranges %}

## Further reading

* "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
