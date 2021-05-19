---
title: 关于企业帐户中组织的用户预配
intro: 您可以直接从身份提供程序 (IdP) 管理企业帐户中的组织成员身份。
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
topics:
  - Enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account
---
{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

{% data reusables.saml.about-user-provisioning-enterprise-account %}

{% data reusables.scim.enterprise-account-scim %}（可选）您也可以启用 SAML 预配和单独取消预配。

如果您在 IdP 中为 {% data variables.product.product_name %} 应用程序配置 SCIM，则每次更改 IdP 中的组成员身份时，IdP 都会向 {% data variables.product.prodname_dotcom %} 发出 SCIM 调用来更新相应的组织成员身份。 如果启用 SAML 预配，则每当企业成员访问受企业帐户 SAML 配置保护的资源时，该 SAML 断言都将触发预配。

对于每个 SCIM 呼叫或 SAML 断言，{% data variables.product.product_name %} 都将检查用户所属的 IdP 组并执行以下操作：

- 如果用户是企业帐户拥有的组织对应的 IdP 组的成员，并且该用户当前不是该组织的成员，请将该用户添加到组织（SAML 断言）或向用户发送电子邮件邀请其加入组织（SCIM 呼叫）。
- 取消邀请用户加入您的企业帐户所拥有的组织的任何现有邀请。

对于每个 SCIM 呼叫，如果您启用 SAML 解除预配，则对于每个 SAML 断言，{% data variables.product.product_name %} 也会执行以下操作：

- 如果用户不是企业帐户拥有的组织对应的 IdP 组的成员，并且该用户当前是该组织的成员，请将组织中删除该用户。

如果解除预配从组织中删除最后一个剩余的所有者，组织将变得没有所有者。 企业所有者可以接管无所有者组织的所有权。 更多信息请参阅“[管理企业帐户中无所有者的组织](/github/setting-up-and-managing-your-enterprise/managing-unowned-organizations-in-your-enterprise-account)”。

要使用 Okta 为您的企业帐户启用用户预配，请参阅“[使用 Okta 为企业帐户配置 SAML 单点登录和 SCIM](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)”。
