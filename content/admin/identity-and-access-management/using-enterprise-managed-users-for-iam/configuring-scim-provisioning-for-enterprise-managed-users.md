---
title: Configuring SCIM provisioning for Enterprise Managed Users
shortTitle: Configure SCIM provisioning
intro: You can configure your identity provider to provision new users and manage their membership in your enterprise and teams.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
---

## About provisioning for {% data variables.product.prodname_emus %}

You must configure provisioning for {% data variables.product.prodname_emus %} to create, manage, and deactivate user accounts for your enterprise members.

After you configure provisioning for {% data variables.product.prodname_emus %}, users assigned to the {% data variables.product.prodname_emu_idp_application %} application in your identity provider are provisioned as new {% data variables.enterprise.prodname_managed_users %} on {% data variables.product.prodname_dotcom %} via SCIM, and the {% data variables.enterprise.prodname_managed_users %} are added to your enterprise. If you assign a group to the application, all users within the group will be provisioned as new {% data variables.enterprise.prodname_managed_users %}.

When you update information associated with a user's identity on your IdP, your IdP will update the user's account on {% data variables.product.prodname_dotcom_the_website %}. When you unassign the user from the {% data variables.product.prodname_emu_idp_application %} application or deactivate a user's account on your IdP, your IdP will communicate with {% data variables.product.prodname_dotcom %} to invalidate any sessions and disable the member's account. The disabled account's information is maintained and their username is changed to a hash of their original username with the short code appended. If you reassign a user to the {% data variables.product.prodname_emu_idp_application %} application or reactivate their account on your IdP, the {% data variables.enterprise.prodname_managed_user %} on {% data variables.product.prodname_dotcom %} will be reactivated and username restored.

Groups in your IdP can be used to manage team membership within your enterprise's organizations, allowing you to configure repository access and permissions through your IdP. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)."

## Prerequisites

Before you can configure provisioning for {% data variables.product.prodname_emus %}, you must configure SAML{% ifversion oidc-for-emu %} or OIDC{% endif %} single-sign on. {% ifversion oidc-for-emu %}

- For more information on configuring OIDC, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)"
- {% endif %}For information on configuring SAML, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users)."

## Creating a {% data variables.product.pat_generic %}

To configure provisioning for your {% data variables.enterprise.prodname_emu_enterprise %}, you need a {% data variables.product.pat_v1 %} with the **admin:enterprise** scope that belongs to the setup user.

{% warning %}

**Warning:** If the token expires or a provisioned user creates the token, SCIM provisioning may unexpectedly stop working. Make sure that you create the token while signed in as the setup user and that the token expiration is set to "No expiration".

{% endwarning %}

1. Sign into {% data variables.product.prodname_dotcom_the_website %} as the setup user for your new enterprise with the username **@<em>SHORT-CODE</em>_admin**.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.personal_access_tokens %}
{% data reusables.user-settings.generate_new_token %}
1. Under **Note**, give your token a descriptive name.
1. Select the **Expiration** dropdown menu, then click **No expiration**.
1. Select the **admin:enterprise** scope.
   ![Screenshot of a list of scopes with checkboxes. The "admin:enterprise" scope, accompanied by the text "Full control of enterprises," is selected and highlighted with an orange outline.](/assets/images/help/enterprises/enterprise-pat-scope.png)
1. Click **Generate token**.
1. To copy the token to your clipboard, click {% octicon "copy" aria-label="Copy token" %}.

   ![Screenshot of the "{% data variables.product.pat_generic_caps_plural %}" page. Next to a blurred-out token, an icon of two overlapping squares is outlined in orange.](/assets/images/help/settings/personal-access-tokens.png)
1. To save the token for use later, store the new token securely in a password manager.

## Configuring provisioning for {% data variables.product.prodname_emus %}

After creating your {% data variables.product.pat_generic %} and storing it securely, you can configure provisioning on your identity provider.

{% data reusables.scim.emu-scim-rate-limit %}

To configure provisioning, follow the appropriate link from the table below.

| Identity provider | SSO method | More information |
|---|---|---|{% ifversion oidc-for-emu %}
| Azure AD | OIDC | [Tutorial: Configure GitHub Enterprise Managed User (OIDC) for automatic user provisioning](https://docs.microsoft.com/azure/active-directory/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial) in the Azure AD documentation |{% endif %}
| Azure AD | SAML | [Tutorial: Configure GitHub Enterprise Managed User for automatic user provisioning](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) in the Azure AD documentation |
| Okta | SAML | [Configuring SCIM provisioning for Enterprise Managed Users with Okta](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users-with-okta) |
| PingFederate | SAML | [Configure PingFederate for provisioning and SSO](https://docs.pingidentity.com/r/en-us/pingfederate-github-emu-connector/pingfederate_github_connector_configure_pingfederate_for_provisioning_and_sso) and [Managing channels](https://docs.pingidentity.com/r/en-us/pingfederate-112/help_saasmanagementtasklet_saasmanagementstate) in the PingFederate documentation |

{% note %}

**Note:** Azure AD does not support provisioning nested groups. For more information, see [How Application Provisioning works in Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/how-provisioning-works#assignment-based-scoping).

{% endnote %}
