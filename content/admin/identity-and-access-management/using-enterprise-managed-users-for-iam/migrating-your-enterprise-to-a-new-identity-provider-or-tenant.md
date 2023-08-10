---
title: Migrating your enterprise to a new identity provider or tenant
shortTitle: Migrate to new IdP or tenant
intro: You can migrate your enterprise to a different identity provider (IdP) or Azure AD tenant.
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: idp-tenant-migration
topics:
  - Access management
  - Accounts
  - Administrator
  - Authentication
  - Enterprise
  - SSO
---

## About migrations between IdPs and tenants

While using {% data variables.product.prodname_emus %}, you may need to migrate your enterprise to a new IdP or Azure AD tenant. For example, you might be ready to migrate from a test environment to your production environment.

{% warning %}

**Warning**: Migrating to a new identity provider or tenant can cause disruption to integrations and automated flows in your enterprise. When your current SAML identity provider is disabled, {% data variables.product.pat_generic_plural %} and SSH keys associated with {% data variables.enterprise.prodname_managed_users %} will be deleted. You should plan for a migration window after configuring your new identity provider, during which you can create and deploy new keys to your integrations where necessary.

{% endwarning %}

Before you migrate your {% data variables.enterprise.prodname_emu_enterprise %} to a new IdP or tenant, determine whether the values of the normalized SCIM `userName` attribute will remain the same for your {% data variables.enterprise.prodname_managed_users %} in the new environment. For more information about username normalization, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)."

If the normalized SCIM `userName` values will remain the same after the migration, you can complete the migration by yourself. For instructions, see "[Migrating when the normalized SCIM `userName` values will remain the same](#migrating-when-the-normalized-scim-username-values-will-remain-the-same)."

If the normalized SCIM `userName` values will change after the migration, {% data variables.product.company_short %} will need to help with your migration. For more information, see "[Migrating when the normalized SCIM `userName` values will change](#migrating-when-the-normalized-scim-username-values-will-change)."

## Migrating when the normalized SCIM `userName` values will remain the same

To migrate to a new IdP or tenant, you cannot edit your existing SAML configuration. Instead, you must completely deactivate SAML for your enterprise account, then create new SAML and SCIM configurations for the new IdP or tenant.

{% warning %}

**Warning:** Do not remove any users or groups from the application for {% data variables.product.prodname_emus %} in your original IdP or tenant until after your migration is complete.

{% endwarning %}

1. If you don't already have single sign-on recovery codes for your enterprise, download the codes now. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)."
1. In your current IdP, deactivate provisioning in the application for {% data variables.product.prodname_emus %}.
    - If you use Azure AD, navigate to the "Provisioning" tab of the application, and then click **Stop provisioning**.
    - If you use Okta, navigate to the "Provisioning" tab of the application, click the **Integration** tab, and then click **Edit**. Deselect **Enable API integration**.
    - If you use PingFederate, navigate to the channel settings in the application. From the **Activation & Summary** tab, click **Active** or **Inactive** to toggle the provisioning status, and then click **Save**. For more information about managing provisioning, see "[Reviewing channel settings](https://docs.pingidentity.com/r/en-us/pingfederate-112/help_saaschanneltasklet_saasactivationstate)" and "[Managing channels](https://docs.pingidentity.com/r/en-us/pingfederate-112/help_saasmanagementtasklet_saasmanagementstate)" in the Ping Federate documentation.
1. Use a recovery code to sign into {% data variables.product.prodname_dotcom_the_website %} as the setup user, whose username is your enterprise's shortcode suffixed with `_admin`. For more information about the setup user, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#getting-started-with-enterprise-managed-users)."
1. Deactivate SAML for the {% data variables.enterprise.prodname_emu_enterprise %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/disabling-authentication-for-enterprise-managed-users)."
1. Wait for all users in the enterprise to show as suspended.
1. While still signed in as the setup user, configure SAML and SCIM for the new IdP or tenant with a new {% data variables.product.prodname_emus %} application.

   After you configure provisioning for the new application, the {% data variables.enterprise.prodname_managed_users %} will be unsuspended, and your developers will be able to sign into their existing accounts again.

   By default, this process can take up to 40 minutes for Azure AD. To expedite the process for an individual user, click the **Provision on Demand** button in the "Provisioning" tab of the application for {% data variables.product.prodname_emus %}.

## Migrating when the normalized SCIM `userName` values will change

If the normalized SCIM `userName` values will change, {% data variables.product.company_short %} must provision a new enterprise account for your migration. [Contact our sales team](https://github.com/enterprise/contact) for help.
