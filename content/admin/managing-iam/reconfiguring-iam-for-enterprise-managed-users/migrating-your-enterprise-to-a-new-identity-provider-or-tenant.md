---
title: Migrating your enterprise to a new identity provider or tenant
shortTitle: Migrate to new IdP or tenant
intro: 'If your enterprise will use a new identity provider (IdP) or tenant for authentication and provisioning after you initially configure Security Assertion Markup Language (SAML) or OpenID Connect (OIDC) and SCIM, you can migrate to a new configuration.'
product: '{% data reusables.gated-features.emus %}'
permissions: Enterprise owners and people with administrative access to your IdP can migrate your enterprise to a new IdP or tenant.
versions:
  feature: idp-tenant-migration
topics:
  - Access management
  - Accounts
  - Administrator
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-your-enterprise-to-a-new-identity-provider-or-tenant
  - /admin/identity-and-access-management/reconfiguring-iam-for-enterprise-managed-users/migrating-your-enterprise-to-a-new-identity-provider-or-tenant
---

## About migrations between IdPs and tenants

While using {% data variables.product.prodname_emus %}, you may need to migrate your enterprise to a new tenant on your IdP, or to a different identity management system. For example, you might be ready to migrate from a test environment to your production environment, or your company may decide to use a new identity system.

Before you migrate to a new authentication and provisioning configuration, review the prerequisites and guidelines for preparation. When you're ready to migrate, you'll disable authentication and provisioning for your enterprise, then reconfigure both. You cannot edit your existing configuration for authentication and provisioning.

## Prerequisites

* {% data reusables.enterprise-managed.emu-prerequisite %}
* Review and understand the requirements for integration with {% data variables.product.prodname_emus %} from an external identity management system. To simplify configuration and support, you can use a single partner IdP for a "paved-path" integration. Alternatively, you can configure authentication using a system that adheres to the Security Assertion Markup Language (SAML) 2.0 and System for Cross-domain Identity Management (SCIM) 2.0 standards. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users#about-authentication-and-user-provisioning)."
* You must have already configured authentication and SCIM provisioning for your enterprise.

## Preparing for migration

To migrate to a new configuration for authentication and provisioning, you must first disable authentication and provisioning for your enterprise. Before you disable your existing configuration, review the following considerations:

* {% data variables.product.prodname_dotcom %} will reset the SCIM records associated with your enterprise's {% data variables.enterprise.prodname_managed_users %}. Before you migrate, determine whether the values of the normalized SCIM `userName` attribute will remain the same for {% data variables.enterprise.prodname_managed_users %} in the new environment. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/iam-configuration-reference/username-considerations-for-external-authentication)."

  * If the normalized SCIM `userName` values will remain the same after the migration, you can complete the migration yourself.
  * If the normalized SCIM `userName` values will change after the migration, {% data variables.product.company_short %} will need to help with your migration. For more information, see "[Migrating when the normalized SCIM `userName` values will change](#migrating-when-the-normalized-scim-username-values-will-change)."
* Do not remove any users or groups from the application for {% data variables.product.prodname_emus %} on your identity management system until after your migration is complete.
* {% data variables.product.product_name %} will delete any {% data variables.product.pat_generic_plural %} or SSH keys associated with your enterprise's {% data variables.enterprise.prodname_managed_users %}. Plan for a migration window after reconfiguration during which you can create and provide new credentials to any external integrations.
* {% data variables.product.product_name %} will remove connections between teams on {% data variables.product.prodname_dotcom %} and IdP groups, and does not reinstate the connections after migration. {% data variables.product.prodname_dotcom %} will also remove all members from the team and leave the team unconnected to your IdP. You may experience disruption if you use groups on your identity management system to manage access to organizations or licenses. {% data variables.product.company_short %} recommends that you use the REST API to list team connections and group membership before you migrate, and to reinstate connections afterwards. For more information, see "[AUTOTITLE](/rest/teams/external-groups)" in the REST API documentation.

## Migrating to a new IdP or tenant

To migrate to a new IdP or tenant, you must complete the following tasks.

1. [Validate matching SCIM `userName` attributes](#1-validate-matching-scim-username-attributes).
1. [Download single sign-on recovery codes](#2-download-single-sign-on-recovery-codes).
1. [Disable provisioning on your current IdP](#3-disable-provisioning-on-your-current-idp).
1. [Disable authentication and provisioning for your enterprise](#4-disable-authentication-and-provisioning-for-your-enterprise).
1. [Validate suspension of your enterprise's members](#5-validate-suspension-of-your-enterprises-members).
1. [Reconfigure authentication and provisioning](#6-reconfigure-authentication-and-provisioning).

### 1. Validate matching SCIM `userName` attributes

For a seamless migration, ensure that the SCIM `userName` attribute on your new SCIM provider matches the attribute on your old SCIM provider. If these attributes don't match, see "[Migrating when the normalized SCIM `userName` values will change](#migrating-when-the-normalized-scim-username-values-will-change)."

### 2. Download single sign-on recovery codes

If you don't already have single sign-on recovery codes for your enterprise, download the codes now. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)."

### 3. Disable provisioning on your current IdP

1. On your current IdP, deactivate provisioning in the application for {% data variables.product.prodname_emus %}.
    * If you use Entra ID, navigate to the "Provisioning" tab of the application, and then click **Stop provisioning**.
    * If you use Okta, navigate to the "Provisioning" tab of the application, click the **Integration** tab, and then click **Edit**. Deselect **Enable API integration**.
    * If you use PingFederate, navigate to the channel settings in the application. From the **Activation & Summary** tab, click **Active** or **Inactive** to toggle the provisioning status, and then click **Save**. For more information about managing provisioning, see "[Reviewing channel settings](https://docs.pingidentity.com/r/en-us/pingfederate-112/help_saaschanneltasklet_saasactivationstate)" and "[Managing channels](https://docs.pingidentity.com/r/en-us/pingfederate-112/help_saasmanagementtasklet_saasmanagementstate)" in the PingFederate documentation.
    * If you use another identity management system, consult the system's documentation, support team, or other resources.

### 4. Disable authentication and provisioning for your enterprise

1. Use a recovery code to sign into {% data variables.product.prodname_dotcom %} as the setup user, whose username is your enterprise's shortcode suffixed with `_admin`. For more information about the setup user, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users)."
1. Disable authentication and provisioning for your enterprise. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/configuring-authentication-for-enterprise-managed-users/disabling-authentication-for-enterprise-managed-users#disabling-authentication)."
1. Wait up to an hour for {% data variables.product.product_name %} to reset your enterprise's SCIM records and suspend your enterprise's members.

### 5. Validate suspension of your enterprise's members

After you disable authentication and provisioning, {% data variables.product.product_name %} will suspend all of the {% data variables.enterprise.prodname_managed_users %} for your enterprise. You can validate suspension of your enterprise's members using the web UI.

1. View the suspended members in your enterprise. For more information, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-suspended-members)."
1. If all of your enterprise's members are not yet suspended, continue waiting, and review the logs on your SCIM provider.

   * If you use Entra ID, suspension of your members can take up to 40 minutes. To expedite the process for an individual user, click the **Provision on Demand** button in the "Provisioning" tab of the application for {% data variables.product.prodname_emus %}.

### 6. Reconfigure authentication and provisioning

After you validate the suspension of your enterprise's members, reconfigure authentication and provisioning.

1. Configure authentication using SAML or OIDC SSO. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/configuring-authentication-for-enterprise-managed-users)."
1. Configure SCIM provisioning. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)."

To unsuspend your {% data variables.enterprise.prodname_managed_users %} and allow them to sign in to {% data variables.product.product_name %}, your SCIM provider must reprovision their accounts.

## Migrating when the normalized SCIM `userName` values will change

If the normalized SCIM `userName` values will change, {% data variables.product.company_short %} must provision a new enterprise account for your migration. [Contact our sales team](https://github.com/enterprise/contact) for help.
