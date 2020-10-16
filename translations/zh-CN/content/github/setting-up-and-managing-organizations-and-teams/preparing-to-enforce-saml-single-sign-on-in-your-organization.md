---
title: 准备在组织中实施 SAML 单点登录
intro: '在组织中实施 SAML 单点登录之前，应验证组织的成员资格，并配置到身份提供程序的连接设置。'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/preparing-to-enforce-saml-single-sign-on-in-your-organization
versions:
  free-pro-team: '*'
---

当您在组织中[实施 SAML 单点登录](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)时，未通过身份提供程序 (IdP) 验证的成员将从组织中删除，并且会收到通知删除的电子邮件。

在组织中实施 SAML SSO 之前，您应该：

- 根据需要[添加](/articles/inviting-users-to-join-your-organization)或[删除](/articles/removing-a-member-from-your-organization)组织中的成员。
- 如果您尚未将 IdP 连接到组织，请连接。 更多信息请参阅“[将身份提供程序连接到组织](/articles/connecting-your-identity-provider-to-your-organization)”。
- 确保组织成员已登录并且将其帐户与 IdP 链接。

{% data reusables.saml.outside-collaborators-exemption %}

### 延伸阅读

- "[关于使用 SAML 单点登录管理身份和访问](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
