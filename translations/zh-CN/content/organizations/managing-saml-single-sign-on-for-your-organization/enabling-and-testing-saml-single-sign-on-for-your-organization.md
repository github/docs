---
title: 启用和测试组织的 SAML 单点登录
intro: 组织所有者和管理员可以启用 SAML 单点登录，以将额外的安全层添加到其组织。
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/enabling-and-testing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

无需所有成员使用 SAML SSO，即可在组织中将其启用。 在组织中启用但不实施 SAML SSO 可帮助组织顺利采用 SAML SSO。 一旦组织内的大多数成员使用 SAML SSO，即可在组织内将其实施。

如果启用但不实施 SAML SSO，则选择不使用 SAML SSO 的组织成员仍可以是组织的成员。 有关实施 SAML SSO 的更多信息，请参阅“[对组织实施 SAML 单点登录](/articles/enforcing-saml-single-sign-on-for-your-organization)”。

{% data reusables.saml.outside-collaborators-exemption %}

在组织中实施 SAML SSO 之前，请确保已设置身份提供程序 (IdP)。 更多信息请参阅“[准备在组织中实施 SAML 单点登录](/articles/preparing-to-enforce-saml-single-sign-on-in-your-organization)”。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
5. 在“SAML single sign-on”（SAML 单点登录）下，选择 **Enable SAML authentication（启用 SAML 身份验证）**。 ![用于启用 SAML SSO 的复选框](/assets/images/help/saml/saml_enable.png)

  {% note %}

  **注意：** 启用 SAML SSO 后，可以下载单点登录恢复代码，以便即使 IdP 不可用也可以访问组织。 更多信息请参阅“[下载组织的单点登录恢复代码](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes)”。

  {% endnote %}

6. 在“Sign on URL”（登录 URL）字段中，为单点登录请求输入 IdP 上的 HTTPS 端点。 此值可在 IdP 配置中找到。 ![登录时将成员转发到的 URL 字段](/assets/images/help/saml/saml_sign_on_url.png)
7. 可选择在“Issuer”（签发者）字段中，输入 SAML 签发者的姓名。 此操作验证已发送消息的真实性。 ![SAML 签发者姓名字段](/assets/images/help/saml/saml_issuer.png)
8. 在“Public Certificate”（公共证书）下，粘贴证书以验证 SAML 响应。 ![身份提供程序的公共证书字段](/assets/images/help/saml/saml_public_certificate.png)
9. 单击 {% octicon "pencil" aria-label="The edit icon" %}，然后在 Signature Method（签名方法）和 Digest Method（摘要方法）下拉菜单中，选择 SAML 签发者使用的哈希算法。以验证请求的完整性。 ![SAML 签发者使用的签名方法和摘要方法哈希算法下拉列表](/assets/images/help/saml/saml_hashing_method.png)
10. 在为组织启用 SAML SSO 之前，单击 **Test SAML configuration** （测试 SMAL 配置），以确保已输入的信息正确。 ![实施前测试 SAML 配置的按钮](/assets/images/help/saml/saml_test.png)

  {% tip %}

  **提示：** {% data reusables.saml.testing-saml-sso %}

  {% endtip %}
11. 要实施 SAML SSO 并删除未通过 IdP 进行身份验证的所有组织成员，请选择 **Require SAML SSO authentication for all members of the _organization name_ organization（要求组织的所有成员进行 SAML SSO 身份验证）**。 有关实施 SAML SSO 的更多信息，请参阅“[对组织实施 SAML 单点登录](/articles/enforcing-saml-single-sign-on-for-your-organization)”。 ![对组织要求 SAML SSO 的复选框 ](/assets/images/help/saml/saml_require_saml_sso.png)
12. 单击 **Save（保存）**。 ![保存 SAML SSO 设置的按钮](/assets/images/help/saml/saml_save.png)

### 延伸阅读

- "[关于使用 SAML 单点登录管理身份和访问](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
