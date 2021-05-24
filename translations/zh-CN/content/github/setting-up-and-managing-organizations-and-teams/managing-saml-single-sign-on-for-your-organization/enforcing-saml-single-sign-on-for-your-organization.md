---
title: 实施组织的 SAML 单点登录
intro: 组织所有者和管理员可以实施 SAML SSO，以便所有组织成员都必须通过身份提供程序进行身份验证。
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enforcing-saml-single-sign-on-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - 组织
  - 团队
---
如果您在组织中实施 SAML SSO，则任何成员（包括未通过 SAML 身份提供程序 (IdP) 进行身份验证的管理员）都将从组织中删除，并会收到一封告知此类删除的电子邮件。 未在组织的 IdP 中设置外部身份的自动程序和服务帐户也将被删除。 有关自动程序和服务帐户的更多信息，请参阅“[使用 SAML 单点登录管理自动程序和服务帐户](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on)”。 成功完成单点登录后，可以恢复组织成员。

如果您的组织由企业帐户拥有，则为企业帐户启用 SAML 将覆盖组织级的 SAML 配置。 更多信息请参阅“[在企业帐户中实施安全设置](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account)”。

{% tip %}

**提示：** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

1. 启用和测试组织的 SAML SSO。 有关此过程的更多信息，请参阅“[启用和测试组织的 SAML 单点登录](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)”。
2. 选择 **Require SAML SSO authentication for all members of the SAML SSO Org organization（要求对 SAML SSO 组织的所有成员进行 SAML SSO 身份验证）**后，将显示未通过您的 IdP 进行身份验证的组织成员。 如果实施 SAML SSO，则将从组织中删除这些成员。
3. 单击 **Enforce SAML SSO（实施 SAML SSO）**，以实施 SAML SSO 并删除所列的组织成员。

### 延伸阅读

- "[关于使用 SAML 单点登录管理身份和访问](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
