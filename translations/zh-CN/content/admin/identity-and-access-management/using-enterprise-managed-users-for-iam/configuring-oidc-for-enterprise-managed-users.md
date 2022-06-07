---
title: Configuring OIDC for Enterprise Managed Users
shortTitle: OIDC for managed users
intro: 'You can automatically manage access to your enterprise account on {% data variables.product.prodname_dotcom %} by configuring OpenID Connect (OIDC) single sign-on (SSO) and enable support for your IdP''s Conditional Access Policy (CAP).'
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

## About OIDC for Enterprise Managed Users

With {% data variables.product.prodname_emus %}, your enterprise uses your identity provider (IdP) to authenticate all members. You can use OpenID Connect (OIDC) to manage authentication for your {% data variables.product.prodname_emu_enterprise %}. Enabling OIDC SSO is a one-click setup process with certificates managed by {% data variables.product.prodname_dotcom %} and your IdP.

{% data reusables.enterprise-accounts.emu-cap-validates %} For more information, see "[About support for your IdP's Conditional Access Policy](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)."

You can adjust the lifetime of a session, and how often a {% data variables.product.prodname_managed_user %} needs to reauthenticate with your IdP, by changing the lifetime policy property of the ID tokens issued for {% data variables.product.prodname_dotcom %} from  your IdP. The default lifetime is one hour. For more information, see "[Configurable token lifetimes in the Microsoft identity platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-configurable-token-lifetimes)" in the Azure AD documentation.

If you currently use SAML SSO for authentication and would prefer to use OIDC and benefit from CAP support, you can follow a migration path. For more information, see "[Migrating from SAML to OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)."

{% data reusables.enterprise-accounts.oidc-gei-warning %}

## 身份提供程序支持

Support for OIDC is in public beta and available for customers using Azure Active Directory (Azure AD).

## Configuring OIDC for Enterprise Managed Users

1. 以新企业的设置用户身份登录 {% data variables.product.prodname_dotcom_the_website %} ，用户名为 **@<em>SHORT-CODE</em>_admin**。
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Select **Require OIDC single sign-on**.  
   ![Screenshot showing the "Require OIDC single sign-on" checkbox](/assets/images/help/enterprises/require-oidc.png)
1. To continue setup and be redirected to Azure AD, click **Save**.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %}
{% data reusables.enterprise-accounts.download-recovery-codes %}

## 启用预配

After you enable OIDC SSO, enable provisioning. 更多信息请参阅“[配置企业托管用户的 SCIM 预配](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)”。
