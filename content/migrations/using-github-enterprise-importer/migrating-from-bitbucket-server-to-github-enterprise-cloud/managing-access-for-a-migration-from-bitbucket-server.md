---
title: Managing access for a migration from Bitbucket Server
shortTitle: Manage access
intro: 'Before you use {% data variables.product.prodname_importer_proper_name %}, make sure you have appropriate access to both the source and destination of your migration.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About required access for {% data variables.product.prodname_importer_proper_name %}

{% data reusables.enterprise-migration-tool.required-access-intro %}

To migrate a repository from Bitbucket Server to GitHub, you need sufficient access to both the source (your Bitbucket Server instance) and the destination (an organization on {% data variables.product.prodname_dotcom %}). To have sufficient access, you'll need all of the following things.
* A required role in the destination organization on {% data variables.product.prodname_dotcom %}
* A {% data variables.product.pat_generic %} that can access the destination organization on {% data variables.product.prodname_dotcom %}
  * The {% data variables.product.pat_generic %} must have all the required scopes, which depend on your role and the task you want to complete.
  * If the destination organization uses SAML single sign-on for {% data variables.product.prodname_dotcom %}, you must authorize the {% data variables.product.pat_generic %} for SSO.
* On Bitbucket Server, required permissions and SFTP or SMB access

Additionally, if you use IP allow lists in the destination organization, you may need to configure the allow lists to allow access by {% data variables.product.prodname_importer_proper_name %}.

## About the migrator role

{% data reusables.enterprise-migration-tool.about-the-migrator-role %}

<span id="required-roles"></span>

## Required roles for {% data variables.product.company_short %}

For the destination organization on {% data variables.product.prodname_dotcom %}, different roles are required for different tasks.

{% data reusables.enterprise-migration-tool.gei-required-roles %}

## Required scopes for {% data variables.product.pat_generic %}s

To run a migration, you need a {% data variables.product.pat_generic %} that can access the destination organization on {% data variables.product.prodname_dotcom %}.

{% data reusables.enterprise-migration-tool.github-pat-required-scopes %}

## Required permissions for Bitbucket Server

To migrate from Bitbucket Server, you need:

* The username and password of a Bitbucket Server account that has admin or super admin permissions
* If your Bitbucket Server instances runs on Linux, SFTP access to the Bitbucket Server instance (see "[SSH keys](#ssh-keys)"). In general, if you can access the server via SSH, then you can also use SFTP.
* If your Bitbucket Server instance runs on Windows, file sharing (SMB) access to the Bitbucket Server instance

### SSH keys

If your Bitbucket Server instance runs on Linux, you must use an SSH key that meets the following requirements:

* Does not have a passphrase
* Uses one of the following ciphers
  * `aes256-ctr`
  * `3des-cbc`
  * `aes128-cbc`
  * `aes192-cbc`
  * `aes256-cbc`
  * `blowfish-cbc`
  * `twofish-cbc`
  * `twofish192-cbc`
  * `twofish128-cbc`
  * `twofish256-cbc`
  * `arcfour`
  * `arcfour128`
  * `arcfour256`
  * `cast128-cbc`
  * `aes128-ctr`
  * `aes192-ctr`

If you receive an error like `cipher name aes256-ctr for openssh key file is not supported` when running a migration, your SSH private key uses an unsupported cipher. For more information about how to generate a compatible private key, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/troubleshooting-your-migration-with-github-enterprise-importer#cipher-name-is-not-supported)."

## Granting the migrator role

To allow someone other than an organization owner to run a migration or download migration logs, you can grant the migrator role to a user or team. For more information, see "[About the migrator role](#about-the-migrator-role)."

You can grant the migrator role using either the {% data variables.product.prodname_bbs2gh_cli %} or the GraphQL API.

* "[Granting the migrator role with the {% data variables.product.prodname_bbs2gh_cli_short %}](#granting-the-migrator-role-with-the-bbs2gh-extension)"
* "[Granting the migrator role with the GraphQL API](#granting-the-migrator-role-with-the-graphql-api)"

### Granting the migrator role with the {% data variables.product.prodname_bbs2gh_cli_short %}

To grant the migrator role using the CLI, you must have installed the {% data variables.product.prodname_bbs2gh_cli %}. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/migrating-repositories-from-bitbucket-server-to-github-enterprise-cloud#step-1-install-the-bbs2gh-extension-of-the-github-cli)."

1. On {% data variables.product.prodname_dotcom %}, create and record a {% data variables.product.pat_generic %} that meets all the requirements for granting the migrator role. For more information, see "[Creating a {% data variables.product.pat_generic %} for {% data variables.product.prodname_importer_proper_name %}](#creating-a-personal-access-token-for-github-enterprise-importer)."
{% data reusables.enterprise-migration-tool.grant-migrator-role-pat %}
1. Use the `gh bbs2gh grant-migrator-role` command, replacing ORGANIZATION with the organization you want to grant the migrator role for, ACTOR with the user or team name, and TYPE with `USER` or `TEAM`.

   ```shell copy
   gh bbs2gh grant-migrator-role --github-org ORGANIZATION --actor ACTOR --actor-type TYPE
   ```

### Granting the migrator role with the GraphQL API

{% data reusables.enterprise-migration-tool.grant-migrator-role-graphql %}

## Creating a {% data variables.product.pat_generic %} for {% data variables.product.prodname_importer_proper_name %}

{% data reusables.enterprise-migration-tool.creating-a-pat-steps %}

## Configuring IP allow lists for migrations

If the destination of your migration uses an IP allow list (either {% data variables.product.company_short %}'s IP allow list feature or your identity provider's (IdP) IP allow list restrictions), you need to configure IP allow lists on {% data variables.product.prodname_dotcom %}.

* If you use {% data variables.product.company_short %}'s IP allow list feature, you must add the {% data variables.product.prodname_dotcom %} IP ranges below to the allow list for the destination organization.
* If you use your IdP's IP allow list to restrict access to your enterprise on {% data variables.product.prodname_dotcom %}, you should disable these restrictions in your enterprise account settings until after your migration is complete.

For more information, see "[AUTOTITLE](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)" and "[AUTOTITLE](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)."

### Identifying {% data variables.product.prodname_dotcom %}'s IP ranges

{% data reusables.enterprise-migration-tool.identifying-githubs-ip-ranges %}

## Further reading

* "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
