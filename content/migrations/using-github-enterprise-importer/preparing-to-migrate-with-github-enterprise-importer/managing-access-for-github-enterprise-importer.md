---
title: Managing access for GitHub Enterprise Importer
shortTitle: Manage access
intro: 'Before you use {% data variables.product.prodname_importer_proper_name %}, make sure you have appropriate access to both the source and destination of your migration.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /early-access/github/migrating-with-github-enterprise-importer/running-a-migration-with-github-enterprise-importer/managing-access-for-github-enterprise-importer
  - /early-access/enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer
---

## About required access for {% data variables.product.prodname_importer_proper_name %}

To protect your data, {% data variables.product.company_short %} enforces specific access requirements to use {% data variables.product.prodname_importer_proper_name %}. To prevent errors, you should review this article carefully and verify that you meet all of the requirements for the task you want to complete.

To run a migration, you need sufficient access to both the source and the destination for your migration. For repository migrations, the destination is an organization. For organization migrations, the destination is an enterprise account.

Before you can migrate from {% data variables.product.prodname_ghe_server %} 3.8 or higher for the first time, you also need someone with access to the {% data variables.enterprise.management_console %} to set up blob storage for {% data variables.location.product_location_enterprise %}.

For other tasks, you only need access to the target of the operation. For example, to grant the migrator role for an organization, you only need access to that organization.

To have sufficient access for either the source or destination, you need both of the following:
- A required role in the {% data variables.product.company_short %} organization or enterprise account
- For Bitbucket Server, required permissions and SFTP or SMB access
- For {% data variables.product.prodname_dotcom %} products and Azure DevOps, a {% data variables.product.pat_generic %} that can access the organization or enterprise account
  - The {% data variables.product.pat_generic %} must have all the required scopes, which depend on your role and the task you want to complete.
  - If the source or destination uses SAML single sign-on for {% data variables.product.prodname_dotcom_the_website %}, you must authorize the {% data variables.product.pat_generic %} for SSO.

Additionally, if you use IP allow lists with the source or destination, you may need to configure the allow lists to allow access by {% data variables.product.prodname_importer_proper_name %}.

## Required roles for {% data variables.product.company_short %}

When migrating to or from {% data variables.product.prodname_dotcom %} products, different roles are required for different tasks.

Task | Enterprise owner | Organization owner | Migrator |
---- | ------------ | ------- | ----- |
Running a migration (source organization) | | X | X |
Running an organization migration (destination enterprise) | X | | |
Assigning the migrator role for repository migrations | | X | |
Running a repository migration (destination organization) | | X | X |
Downloading a migration log | | X | X |
Reclaiming mannequins | | X | |

## Required permissions for Bitbucket Server

To migrate from Bitbucket Server, you need:

- The username and password of a Bitbucket Server account that has admin or super admin permissions
- If your Bitbucket Server instances runs on Linux, SFTP access to the Bitbucket Server instance (see "[SSH keys](#ssh-keys)"). In general, if you can access the server via SSH, then you can also use SFTP.
- If your Bitbucket Server instance runs on Windows, file sharing (SMB) access to the Bitbucket Server instance

### SSH keys

If your Bitbucket Server instance runs on Linux, you must use an SSH key that meets the following requirements:

- Does not have a passphrase
- Uses one of the following ciphers
  - `aes256-ctr`
  - `3des-cbc`
  - `aes128-cbc`
  - `aes192-cbc`
  - `aes256-cbc`
  - `blowfish-cbc`
  - `twofish-cbc`
  - `twofish192-cbc`
  - `twofish128-cbc`
  - `twofish256-cbc`
  - `arcfour`
  - `arcfour128`
  - `arcfour256`
  - `cast128-cbc`
  - `aes128-ctr`
  - `aes192-ctr`

If you receive an error like `cipher name aes256-ctr for openssh key file is not supported` when running a migration, your SSH private key uses an unsupported cipher. For more information about how to generate a compatible private key, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/troubleshooting-your-migration-with-github-enterprise-importer#cipher-name-is-not-supported)."

## Required scopes for {% data variables.product.pat_generic %}s

To run a migration, you need a {% data variables.product.pat_generic %} that can access the destination organization (for repository migrations) or enterprise account (for organization migrations). If your source is a {% data variables.product.prodname_dotcom %} product or Azure DevOps, you also need another {% data variables.product.pat_generic %} that can access the source organization.

For other tasks, such as downloading a migration log, you only need one {% data variables.product.pat_generic %} that can access the target of the operation.

### {% data variables.product.pat_generic_caps %}s for {% data variables.product.prodname_dotcom %} products

The scopes that are required for your {% data variables.product.prodname_dotcom %} {% data variables.product.pat_v1 %} depend on your role and the task you want to complete.

{% note %}

**Note**: {% data reusables.user-settings.generic-classic-pat-only %} This means that you cannot use {% data variables.product.prodname_importer_proper_name %} if your organization uses the "Restrict {% data variables.product.pat_v1_plural %} from accessing your organizations" policy. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise#restricting-access-by-personal-access-tokens-classic)."

{% endnote %}

Task | Enterprise owner | Organization owner | Migrator
---- | ------------------ | -------- | ----- |
Running a migration (source organization) | - | `read:org`, `repo` | `read:org`, `repo` |
Running an organization migration (destination enterprise) | `read:enterprise`, `admin:org`, `repo`, `workflow` | - | - |
Assigning the migrator role for repository migrations | - | `admin:org` | -
Running a repository migration (destination organization) | - | `repo`, `admin:org`, `workflow` | `repo`, `read:org`, `workflow`
Downloading a migration log | - | `repo`, `admin:org`, `workflow` | `repo`, `read:org`, `workflow`
Reclaiming mannequins | - | `admin:org` | -

### {% data variables.product.pat_generic_caps %}s for Azure DevOps

To run a migration from Azure DevOps (ADO), your ADO {% data variables.product.pat_generic %} must have `work item (read)`, `code (read)`, and `identity (read)` scopes.

If you want to migrate from multiple organizations, allow the {% data variables.product.pat_generic %} to access all accessible organizations. For more information, see [Use {% data variables.product.pat_generic %}s](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page#create-a-pat) in Microsoft Docs.

## Creating a {% data variables.product.pat_generic %} for {% data variables.product.prodname_importer_proper_name %}

1. Verify that you have a sufficient role for the task you want to complete. For more information, see "[Required roles](#required-roles)."
1. Create a {% data variables.product.pat_v1 %}, making sure to grant all the scopes required for the task you want to complete. {% data reusables.user-settings.generic-classic-pat-only %} For more information, "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" and "[Required scopes for {% data variables.product.pat_generic %}](#required-scopes-for-personal-access-tokens)."
1. If SAML single sign-on is enforced for the organization(s) you need to access, authorize the {% data variables.product.pat_generic %} for SSO. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)."

## Configuring IP allow lists for migrations

If you use IP allow lists with your migration source or destination, you may need to configure the lists to allow access to {% data variables.product.prodname_importer_proper_name %}.

To configure IP allow lists correctly, please read the following sections carefully. Depending on your migration, more than one section may apply to you.

### The source or destination of your migration is {% data variables.product.prodname_dotcom_the_website %}

You need to configure IP allow lists on {% data variables.product.prodname_dotcom_the_website %} if **both** of the following apply to your migration:

- The source or destination of your migration is {% data variables.product.prodname_dotcom_the_website %}
- The source or destination uses an IP allow list, either {% data variables.product.company_short %}'s IP allow list feature or your identity provider's (IdP) IP allow list restrictions (such as Azure CAP)

If you use {% data variables.product.company_short %}'s IP allow list feature, you must add the {% data variables.product.prodname_dotcom %} IP ranges below to the allow list for the source and/or destination organizations.

If you use your IdP's IP allow list to restrict access to your enterprise on {% data variables.product.prodname_dotcom_the_website %}, you should disable these restrictions in your enterprise account settings until after your migration is complete.

For more information, see "[AUTOTITLE](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)" and "[AUTOTITLE](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)."

### The source of your migration is {% data variables.product.prodname_ghe_server %}

If the source of your migration is {% data variables.product.prodname_ghe_server %}, you do not need to add any {% data variables.product.prodname_dotcom %} IP ranges to your firewall configuration or the IP allow list on {% data variables.location.product_location_enterprise %}.

However, depending on the setup of your blob storage provider, you may need to update your blob storage provider's configuration to allow access to the {% data variables.product.prodname_dotcom %} IP ranges below.

### Identifying {% data variables.product.prodname_dotcom %}'s IP ranges

You'll need to add the following IP ranges to your IP allowlist(s):

- 192.30.252.0/22
- 185.199.108.0/22
- 140.82.112.0/20
- 143.55.64.0/20
- 40.71.233.224/28
- 2a0a:a440::/29
- 2606:50c0::/32
- 20.125.12.8/29 _(active from 00:00 UTC on November 8, 2023)_

You can get an up-to-date list of IP ranges used by {% data variables.product.prodname_importer_proper_name %} at any time with the "Get {% data variables.product.prodname_dotcom %} meta information" endpoint of the REST API.

The `github_enterprise_importer` key in the response contains a list of IP ranges used for migrations.

For more information, see "[AUTOTITLE](/rest/meta#get-github-meta-information)" in the REST API documentation.

## Further reading

- "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
