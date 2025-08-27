---
title: Migrating from SAML to OIDC
shortTitle: Migrate from SAML to OIDC
intro: 'If you''re using SAML to authenticate members in your {% data variables.enterprise.prodname_emu_enterprise %}, you can migrate to OpenID Connect (OIDC) and benefit from support for your IdP''s Conditional Access Policy.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc
  - /admin/identity-and-access-management/reconfiguring-iam-for-enterprise-managed-users/migrating-from-saml-to-oidc
---

{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## About migration of an {% data variables.enterprise.prodname_emu_enterprise %} from SAML to OIDC

If your {% data variables.enterprise.prodname_emu_enterprise %} uses SAML SSO to authenticate with Entra ID, you can migrate to OIDC. {% data reusables.enterprise-accounts.emu-cap-validates %}

{% data reusables.enterprise-accounts.emu-cap-public-preview %}

When you migrate from SAML to OIDC, {% data variables.enterprise.prodname_managed_users %} and groups that were previously provisioned for SAML but are not provisioned by the {% data variables.product.prodname_emu_idp_oidc_application %} application will have "(SAML)" appended to their display names.

If you're new to {% data variables.product.prodname_emus %} and haven't yet configured authentication for your enterprise, you do not need to migrate and can set up OIDC single sign-on immediately. For more information, see [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users).

> [!WARNING]
> {% data reusables.enterprise_user_management.migration-teams-warning %}

## Prerequisites

* Your enterprise on {% data variables.product.github %} must currently be configured to use SAML for authentication, with Entra ID as your identity provider (IdP). For more information, see [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users).
{% data reusables.emus.migration-roles-prereq %}
{% data reusables.emus.migration-schedule-downtime %}

## Migrating your enterprise

To migrate your enterprise from SAML to OIDC, you will disable your existing {% data variables.product.prodname_emu_idp_application %} application on Entra ID, prepare and begin the migration as the setup user for your enterprise on {% data variables.product.github %}, then install and configure the new application for OIDC on Entra ID. After the migration is complete and Entra ID provisions your users, the users can authenticate to access your enterprise's resources on {% data variables.product.github %} using OIDC.

> [!WARNING]
> Migration of your enterprise from SAML to OIDC can take up to an hour. During the migration, users cannot access your enterprise on {% data variables.product.github %}.

1. Before you begin the migration, sign in to Azure and disable provisioning in the existing {% data variables.product.prodname_emu_idp_application %} application.
1. If you use [Conditional Access (CA) network location policies](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition) in Entra ID, and you're currently using an IP allow list with your enterprise account or any of the organizations owned by the enterprise account, disable the IP allow lists. See [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise) and [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization).
{% data reusables.emus.sign-in-as-setup-user %}
{% data reusables.enterprise-accounts.access-enterprise-emu %}
{% data reusables.emus.use-enterprise-recovery-code %}
{% data reusables.enterprise-accounts.identity-provider-tab %}
{% data reusables.enterprise-accounts.sso-configuration %}
1. At the bottom of the page, click **Migrate to OpenID Connect single sign-on**.
1. Read the warning, then click **Migrate to OIDC**.
1. Click **Begin OIDC migration**.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %}
1. After you grant consent, a new browser window will open to {% data variables.product.github %} and display a new set of recovery codes for your {% data variables.enterprise.prodname_emu_enterprise %}. Download the codes, then click **Enable OIDC authentication**.
1. Wait for the migration to complete, which can take up to an hour. To check the status of the migration, navigate to your enterprise's authentication security settings page. If "Require SAML authentication" is selected, the migration is still in progress.

   > [!WARNING]
   > Do not provision new users from the application on Entra ID during the migration.

1. In a new tab or window, while signed in as the setup user, create a {% data variables.product.pat_v1 %} with the **scim:enterprise** scope and **no expiration** and copy it to your clipboard. For more information about creating a new token, see [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token).
1. In the provisioning settings for the {% data variables.product.prodname_emu_idp_oidc_application %} application in the Microsoft Entra admin center, under "Tenant URL", the tenant URL for your enterprise:
    * For **{% data variables.product.prodname_dotcom_the_website %}**: `https://api.github.com/scim/v2/enterprises/YOUR_ENTERPRISE`, replacing YOUR_ENTERPRISE with the name of your enterprise account. For example, if your enterprise account's URL is `https://github.com/enterprises/octo-corp`, the name of the enterprise account is `octo-corp`.
    * For **{% data variables.enterprise.data_residency_site %}**: `https://api.SUBDOMAIN.ghe.com/scim/v2/enterprises/SUBDOMAIN`, where SUBDOMAIN is your enterprise's subdomain on {% data variables.enterprise.data_residency_site %}.

1. Under "Secret token", paste the {% data variables.product.pat_v1 %} with the **scim:enterprise** scope that you created earlier.
1. To test the configuration, click **Test Connection**.
1. To save your changes, at the top of the form, click **Save**.
1. In the Microsoft Entra admin center, copy the users and groups from the old {% data variables.product.prodname_emu_idp_application %} application to the new {% data variables.product.prodname_emu_idp_oidc_application %} application.
1. Test your configuration by provisioning a single new user.
1. If your test is successful, start provisioning for all users by clicking **Start provisioning**.
