---
title: Migrating from SAML to OIDC
shortTitle: Migrating from SAML to OIDC
intro: 'If you''re using SAML to authenticate members in your {% data variables.product.prodname_emu_enterprise %}, you can migrate to OpenID Connect (OIDC) and benefit from support for your IdP''s Conditional Access Policy.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

{% data reusables.enterprise-accounts.oidc-beta-notice %}

## About migrating your {% data variables.product.prodname_emu_enterprise %} from SAML to OIDC

If your {% data variables.product.prodname_emu_enterprise %} uses SAML SSO to authenticate with Azure Active Directory (Azure AD), you can migrate to OIDC. {% data reusables.enterprise-accounts.emu-cap-validates %}

When you migrate from SAML to OIDC, {% data variables.product.prodname_managed_users %} and groups that were previously provisioned for SAML but are not provisioned by the {% data variables.product.prodname_emu_idp_oidc_application %} application will have "(SAML)" appended to their display names.

If you're new to {% data variables.product.prodname_emus %} and haven't yet configured authentication for your enterprise, you do not need to migrate and can set up OIDC single sign-on immediately. For more information, see "[Configuring OIDC for Enterprise Managed Users](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)."

## Migrating your enterprise

{% note %}

**Note:** To sign in as the setup user, you will need a recovery code. If you do not already have your recovery codes, you can access the codes while signed in as an enterprise owner. For more information, see "[Downloading your enterprise account's single sign-on recovery codes](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)."

{% endnote %}

1. Before you begin the migration, sign in to Azure and disable provisioning in the existing {% data variables.product.prodname_emu_idp_application %} application.
1.  Sign into {% data variables.product.prodname_dotcom_the_website %} as the setup user for your enterprise with the username **@<em>SHORT-CODE</em>_admin**.
1. When prompted to continue to your identity provider, click **Use a recovery code** and sign in using one of your enterprise's recovery codes.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. At the bottom of the page, next to "Migrate to OpenID Connect single sign-on", click **Configure with Azure**.
   {% warning %}

   **Warning:** The migration can take up to an hour, and it is important that no users are provisioned during the migration. You can confirm if the migration is still in progress by returning to your enterprise's security settings page; if "Require SAML authentication" is still checked, the migration is still in progress.

   {% endwarning %}

   ![Screenshot showing the "Configure with Azure" button](/assets/images/help/enterprises/saml-to-oidc-button.png)
1. Read both warnings and click to continue.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %}
1. In a new tab or window, while signed in as the setup user on {% data variables.product.prodname_dotcom_the_website %}, create a personal access token with the **admin:enterprise** scope and **no expiration** and copy it to your clipboard. For more information about creating a new token, see "[Creating a personal access token](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)."
1. In the settings for the {% data variables.product.prodname_emu_idp_oidc_application %} application in Azure Portal, under "Tenant URL", type `https://api.github.com/scim/v2/enterprises/YOUR_ENTERPRISE`, replacing YOUR_ENTERPRISE with the name of your enterprise account.

   For example, if your enterprise account's URL is `https://github.com/enterprises/octo-corp`, the name of the enterprise account is `octo-corp`.
1. Under "Secret token", paste the personal access token with the **admin:enterprise** scope that you created earlier.
1. To test the configuration, click **Test Connection**.
1. To save your changes, at the top of the form, click **Save**.
1. In Azure Portal, copy the users and groups from the old {% data variables.product.prodname_emu_idp_application %} application to the new {% data variables.product.prodname_emu_idp_oidc_application %} application.
1. Test your configuration by provisioning a single new user.
1. If your test is successful, start provisioning for all users by clicking **Start provisioning**.
