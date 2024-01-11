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
---

## About required access for {% data variables.product.prodname_importer_proper_name %}

{% data reusables.enterprise-migration-tool.required-access-intro %}

To run a migration, you need sufficient access to both the source and the destination for your migration. The source is the organization on {% data variables.product.prodname_dotcom_the_website %} or {% data variables.product.prodname_ghe_server %} from which you want to migrate data. The destination is either an organization account on {% data variables.product.prodname_dotcom_the_website %}, if you're migrating repositories, or an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, if you're migrating an entire organization.

To have sufficient access for the migration, for both the source and the destination, you need the following things.
- A required role in the organization or enterprise account
- A {% data variables.product.pat_generic %} that can access the organization or enterprise account
  - The {% data variables.product.pat_generic %} must have all the required scopes, which depend on your role and the task you want to complete.
  - If the source or destination uses SAML single sign-on for {% data variables.product.prodname_dotcom_the_website %}, you must authorize the {% data variables.product.pat_generic %} for SSO.

Additionally, if you use IP allow lists with the source or destination, you may need to configure the allow lists to allow access by {% data variables.product.prodname_importer_proper_name %}.

If you're migrating from {% data variables.product.prodname_ghe_server %} 3.8 or higher for the first time, you also need someone with access to the {% data variables.enterprise.management_console %} to set up blob storage for {% data variables.location.product_location_enterprise %}.

## Required roles

For the source and destination of the migration, different roles are required for different tasks. For some tasks, you can grant the migrator role to a user or team. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/granting-the-migrator-role-for-github-enterprise-importer)."

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
Running a migration (source organization) | {% octicon "dash" aria-label="Not applicable" %} | `read:org`, `repo` | `read:org`, `repo` |
Running an organization migration (destination enterprise) | `read:enterprise`, `admin:org`, `repo`, `workflow` | {% octicon "dash" aria-label="Not applicable" %} | {% octicon "dash" aria-label="Not applicable" %} |

## Creating a {% data variables.product.pat_generic %} for {% data variables.product.prodname_importer_proper_name %}

{% data reusables.enterprise-migration-tool.creating-a-pat-steps %}

## Configuring IP allow lists for migrations

{% data reusables.enterprise-migration-tool.configuring-ip-allow-lists %}

If the source of your migration is {% data variables.product.prodname_ghe_server %}, you do not need to add any {% data variables.product.prodname_dotcom %} IP ranges to your firewall configuration or the IP allow list on {% data variables.location.product_location_enterprise %}. However, depending on the setup of your blob storage provider, you may need to update your blob storage provider's configuration to allow access to the {% data variables.product.prodname_dotcom %} IP ranges below.

### Identifying {% data variables.product.prodname_dotcom %}'s IP ranges

{% data reusables.enterprise-migration-tool.identifying-githubs-ip-ranges %}

## Further reading

- "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
