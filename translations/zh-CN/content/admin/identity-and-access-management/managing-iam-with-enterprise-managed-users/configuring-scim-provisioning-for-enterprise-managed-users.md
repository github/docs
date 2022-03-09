---
title: Configuring SCIM provisioning for Enterprise Managed Users
shortTitle: Provisioning managed users
intro: You can configure your identity provider to provision new users and manage their membership in your enterprise and teams.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
---

## About provisioning for {% data variables.product.prodname_emus %}

You must configure provisioning for {% data variables.product.prodname_emus %} to create, manage, and deactivate user accounts for your enterprise members. When you configure provisioning for {% data variables.product.prodname_emus %}, users assigned to the {% data variables.product.prodname_emu_idp_application %} application in your identity provider are provisioned as new user accounts on {% data variables.product.prodname_dotcom %} via SCIM, and the users are added to your enterprise.

When you update information associated with a user's identity on your IdP, your IdP will update the user's account on GitHub.com. When you unassign the user from the {% data variables.product.prodname_emu_idp_application %} application or deactivate a user's account on your IdP, your IdP will communicate with {% data variables.product.prodname_dotcom %} to invalidate any SAML sessions and disable the member's account. The disabled account's information is maintained and their username is changed to a hash of their original username with the short code appended. If you reassign a user to the {% data variables.product.prodname_emu_idp_application %} application or reactivate their account on your IdP, the {% data variables.product.prodname_managed_user %} account on {% data variables.product.prodname_dotcom %} will be reactivated and username restored.

Groups in your IdP can be used to manage team membership within your enterprise's organizations, allowing you to configure repository access and permissions through your IdP. 更多信息请参阅“[使用身份提供商组管理团队成员](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)”。

## 基本要求

Before you can configure provisioning for {% data variables.product.prodname_emus %}, you must configure SAML single-sign on. For more information, see "[Configuring SAML single sign-on for Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)."

## 创建个人访问令牌

To configure provisioning for your {% data variables.product.prodname_emu_enterprise %}, you need a personal access token with the **admin:enterprise** scope that belongs to the setup user.

{% warning %}

**Warning:** If the token expires or a provisioned user creates the token, SCIM provisioning may unexpectedly stop working. Make sure that you create the token while signed in as the setup user and that the token expiration is set to "No expiration".

{% endwarning %}

1. Sign into {% data variables.product.prodname_dotcom_the_website %} as the setup user for your new enterprise with the username **@<em>SHORT-CODE</em>_admin**.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.personal_access_tokens %}
{% data reusables.user-settings.generate_new_token %}
1. Under **Note**, give your token a descriptive name. ![Screenshot showing the token's name](/assets/images/help/enterprises/emu-pat-name.png)
1. Select the **Expiration** drop-down menu, then click **No expiration**. ![Screenshot showing token expiration set to no expiration](/assets/images/help/enterprises/emu-pat-no-expiration.png)
1. Select the **admin:enterprise** scope. ![Screenshot showing the admin:enterprise scope](/assets/images/help/enterprises/enterprise-pat-scope.png)
1. 单击 **Generate token（生成令牌）**。 ![生成令牌按钮](/assets/images/help/settings/generate_token.png)
1. To copy the token to your clipboard, click the {% octicon "paste" aria-label="The copy icon" %}. ![新建的令牌](/assets/images/help/settings/personal_access_tokens.png)
2. To save the token for use later, store the new token securely in a password manager.

## Configuring provisioning for {% data variables.product.prodname_emus %}

After creating your personal access token and storing it securely, you can configure provisioning on your identity provider.

{% data reusables.scim.emu-scim-rate-limit %}

To configure Azure Active Directory to provision users for your {% data variables.product.prodname_emu_enterprise %}, see [Tutorial: Configure GitHub Enterprise Managed User for automatic user provisioning](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) in the Azure AD documentation.

To configure Okta to provision users for your {% data variables.product.prodname_emu_enterprise %}, see "[Configuring SCIM provisioning for Enterprise Managed Users with Okta](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)."

