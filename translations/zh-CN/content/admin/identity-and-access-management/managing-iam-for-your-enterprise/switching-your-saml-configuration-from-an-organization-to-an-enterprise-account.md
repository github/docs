---
title: 将 SAML 配置从组织切换到企业帐户
intro: 了解将组织级 SAML 配置替换为企业级 SAML 配置的特殊注意事项和最佳实践。
permissions: Enterprise owners can configure SAML single sign-on for an enterprise account.
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
  - Organizations
type: how_to
shortTitle: 从组织切换
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
---

## 关于企业帐户的 SAML 单点登录

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.switching-from-org-to-enterprise %}

在组织级别配置 SAML SSO 时，必须在 IdP 中为每个组织配置唯一的 SSO 租户，这意味着您的成员将与已成功进行身份验证的每个组织的唯一 SAML 身份记录相关联。 如果您为企业帐户配置 SAML SSO，则每个企业成员将具有一个 SAML 身份，该身份用于企业帐户拥有的所有组织。

为企业帐户配置 SAML SSO 后，新配置将覆盖企业帐户拥有的组织的任何现有 SAML SSO 配置。

当企业所有者为企业帐户启用 SAML 时，不会通知企业成员。 如果以前在组织级别强制实施了 SAML SSO，则在直接导航到组织资源时，成员应该不会看到重大差异。 系统将继续提示成员通过 SAML 进行身份验证。 如果成员通过其 IdP 仪表板导航到组织资源，则需要单击企业级应用程序的新磁贴，而不是组织级应用程序的旧磁贴。 然后，成员将能够选择要导航到的组织。

以前为组织授权的任何个人访问令牌 (PAT)、SSH 密钥、{% data variables.product.prodname_oauth_apps %} 和 {% data variables.product.prodname_github_apps %} 将继续为组织授权。 但是，成员需要授权任何从未授权与组织的 SAML SSO 一起使用的 PAT、SSH 密钥、{% data variables.product.prodname_oauth_apps %}和 {% data variables.product.prodname_github_apps %} 。

为企业帐户配置 SAML SSO 时，当前不支持 SCIM 预配。 如果您当前正在为企业帐户拥有的组织使用 SCIM，则在切换到企业级配置时将失去此功能。

在为企业帐户配置 SAML SSO 之前，不需要删除任何组织级 SAML 配置，但您可能需要考虑这样做。 如果将来为企业帐户禁用 SAML，则任何剩余的组织级 SAML 配置都将生效。 删除组织级配置可以防止将来出现意外问题。

## 将 SAML 配置从组织切换到企业帐户

1. 为您的企业帐户强制实施 SAML SSO，确保为所有组织成员分配或授予对用于企业帐户的 IdP 应用程序的访问权限。 更多信息请参阅“[配置企业的 SAML 单点登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。
1. （可选）删除企业帐户拥有的组织的任何现有 SAML 配置。 为了帮助您决定是否删除配置，请参阅“[关于企业帐户的 SAML 单点登录](#about-saml-single-sign-on-for-enterprise-accounts)”。
1. 如果您保留了任何组织级 SAML 配置，为防止混淆，请考虑在 IdP 中隐藏组织级应用程序的磁贴。
1. 向您的企业成员提供有关更改的建议。
   -  成员将无法再通过单击 IdP 控制面板中组织的 SAML 应用程序来访问其组织。 他们将需要使用为企业帐户配置的新应用。
   - 成员需要授权以前未授权其组织与 SAML SSO 一起使用的任何 PAT 或 SSH 密钥。 更多信息请参阅“[授权个人访问令牌用于 SAML 单点登录](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”和“[授权 SSH 密钥用于 SAML 单点登录](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)”。
   - 成员可能需要重新授权以前为组织授权的 {% data variables.product.prodname_oauth_apps %} 。 更多信息请参阅“[关于使用 SAML 单点登录进行身份验证](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-and-saml-sso)”。
