---
title: Migrating from SAML to OIDC
shortTitle: Migrate from SAML to OIDC
intro: "If you're using SAML to authenticate members in your {% data variables.enterprise.prodname_emu_enterprise %}, you can migrate to OpenID Connect (OIDC) and benefit from support for your IdP's Conditional Access Policy."
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## About migration of an {% data variables.enterprise.prodname_emu_enterprise %} from SAML to OIDC

If your {% data variables.enterprise.prodname_emu_enterprise %} uses SAML SSO to authenticate with Azure Active Directory (Azure AD), you can migrate to OIDC. {% data reusables.enterprise-accounts.emu-cap-validates %}

When you migrate from SAML to OIDC, {% data variables.enterprise.prodname_managed_users %} and groups that were previously provisioned for SAML but are not provisioned by the {% data variables.product.prodname_emu_idp_oidc_application %} application will have "(SAML)" appended to their display names.

If you're new to {% data variables.product.prodname_emus %} and haven't yet configured authentication for your enterprise, you do not need to migrate and can set up OIDC single sign-on immediately. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)."

## Prerequisites

- Your enterprise on {% data variables.location.product_location %} must currently be configured to use SAML for authentication. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users)."
{% data reusables.emus.migration-roles-prereq %}
{% data reusables.emus.migration-schedule-downtime %}

## Migrating your enterprise

To migrate your enterprise from SAML to OIDC, you will disable your existing {% data variables.product.prodname_emu_idp_application %} application on Azure AD, prepare and begin the migration as the setup user for your enterprise on {% data variables.location.product_location %}, then install and configure the new application for OIDC on Azure AD. After the migration is complete and Azure AD provisions your users, the users can authenticate to access your enterprise's resources on {% data variables.location.product_location %} using OIDC.

{% warning %}

**Warning**: Migration of your enterprise from SAML to OIDC can take up to an hour. During the migration, users cannot access your enterprise on {% data variables.location.product_location %}.

{% endwarning %}

1. Before you begin the migration, sign in to Azure and disable provisioning in the existing {% data variables.product.prodname_emu_idp_application %} application.
1. If you use [Conditional Access (CA) network location policies](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition) in Azure AD, and you're currently using an IP allow list with your enterprise account or any of the organizations owned by the enterprise account on {% data variables.product.prodname_dotcom_the_website %}, disable the IP allow lists. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)" and "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)."
{% data reusables.emus.sign-in-as-setup-user %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.emus.use-enterprise-recovery-code %}
{% data reusables.enterprise-accounts.security-tab %}
1. At the bottom of the page, next to "Migrate to OpenID Connect single sign-on", click **Configure with Azure**.
1. Read the warning, then click "I understand, begin migrating to OpenID Connect".
{% data reusables.enterprise-accounts.emu-azure-admin-consent %}
1. After you grant consent, a new browser window will open to {% data variables.location.product_location %} and display a new set of recovery codes for your {% data variables.enterprise.prodname_emu_enterprise %}. Download the codes, then click "Enable OIDC authentication".
1. Wait for the migration to complete, which can take up to an hour. To check the status of the migration, navigate to your enterprise's authentication security settings page. If "Require SAML authentication" is selected, the migration is still in progress.

   {% warning %}

   **Warning:** Do not provision new users from the application on Azure AD during the migration.

   {% endwarning %}
1. In a new tab or window, while signed in as the setup user on {% data variables.product.prodname_dotcom_the_website %}, create a {% data variables.product.pat_v1 %} with the **admin:enterprise** scope and **no expiration** and copy it to your clipboard. For more information about creating a new token, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)."
1. In the provisioning settings for the {% data variables.product.prodname_emu_idp_oidc_application %} application in Azure Portal, under "Tenant URL", type `https://api.github.com/scim/v2/enterprises/YOUR_ENTERPRISE`, replacing YOUR_ENTERPRISE with the name of your enterprise account.

   For example, if your enterprise account's URL is `https://github.com/enterprises/octo-corp`, the name of the enterprise account is `octo-corp`.
1. Under "Secret token", paste the {% data variables.product.pat_v1 %} with the **admin:enterprise** scope that you created earlier.
1. To test the configuration, click **Test Connection**.
1. To save your changes, at the top of the form, click **Save**.
1. In Azure Portal, copy the users and groups from the old {% data variables.product.prodname_emu_idp_application %} application to the new {% data variables.product.prodname_emu_idp_oidc_application %} application.
1. Test your configuration by provisioning a single new user.
1. If your test is successful, start provisioning for all users by clicking **Start provisioning**.
