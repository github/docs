---
title: 为企业帐户中的组织启用 SAML 单点登录
intro: '通过跨企业帐户拥有的所有组织的 IDP 启用 SAML 单点登录 (SSO) 和集中身份验证，可以控制并保护对资源（如仓库、议题和拉取请求）的访问。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: 企业所有者可以对企业帐户中的组织启用 SAML 单点登录。
versions:
  free-pro-team: '*'
topics:
  - 企业
---

### 关于企业帐户的 SAML 单点登录

{% data reusables.saml.dotcom-saml-explanation %}更多信息请参阅“[关于使用 SAML 单点登录管理身份和访问](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)”。

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} 更多信息请参阅“[查看和管理用户对企业帐户的 SAML 访问](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)”。

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %} 如果您没有参与私人测试，那么 SIM 卡不支持企业账户。 更多信息请参阅“[关于企业帐户中组织的用户配置](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)”。

### 为企业帐户中的组织启用 SAML 单点登录

{% note %}

**注：**对企业帐户启用 SAML 单点登录身份验证将覆盖任何现有的组织级 SAML 配置。

{% endnote %}

有关如何使用 Okta 启用 SAML 的更多详细信息，请参阅“[使用 Okta 为企业帐户配置 SAML 单点登录和 SCIM](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)”。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“SAML single sign-on”（SAML 单点登录）下，选择 **Enable SAML authentication（启用 SAML 身份验证）**。 ![用于启用 SAML SSO 的复选框](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. 在 **Sign on URL（登录 URL）**字段中，为单点登录请求输入您的 IdP 的 HTTPS 端点。 此值可在 IdP 配置中找到。 ![登录时将成员转发到的 URL 字段](/assets/images/help/saml/saml_sign_on_url_business.png)
7. （可选）在 **Issuer（签发者）**字段中，输入 SAML 签发者 URL 以验证已发送消息的真实性。 ![SAML 签发者姓名字段](/assets/images/help/saml/saml_issuer.png)
8. 在 **Public Certificate（公共证书）**下，粘贴证书以验证 SAML 响应。 ![身份提供程序的公共证书字段](/assets/images/help/saml/saml_public_certificate.png)
9. 要验证来自 SAML 签发者的请求的完整性，请单击 {% octicon "pencil" aria-label="The edit icon" %}。 然后，在“Signature Method（签名方法）”和“Digest Method（摘要方法）”下拉菜单中，选择 SAML 签发者使用的哈希算法。 ![SAML 签发者使用的签名方法和摘要方法哈希算法下拉列表](/assets/images/help/saml/saml_hashing_method.png)
10. 在为企业启用 SAML SSO 之前，单击 **Test SAML configuration（测试 SMAL 配置）** ，以确保已输入的信息正确。 ![实施前测试 SAML 配置的按钮](/assets/images/help/saml/saml_test.png)
11. 单击 **Save（保存）**。
