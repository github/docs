---
title: 为企业帐户中的组织启用 SAML 单点登录
intro: 'You can control and secure access to resources like repositories, issues, and pull requests by enabling SAML single sign-on (SSO) and centralized authentication through an IdP across all organizations owned by an enterprise account.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners can enable SAML single sign-on for organizations in an enterprise account.
versions:
  free-pro-team: '*'
---

### About SAML single sign-on for enterprise accounts

{% data reusables.saml.dotcom-saml-explanation %}更多信息请参阅“[关于使用 SAML 单点登录管理身份和访问](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)”。

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} 更多信息请参阅“[查看和管理用户对企业帐户的 SAML 访问](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)”。

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %} 如果您没有参与私人测试，那么 SIM 卡不支持企业账户。 更多信息请参阅“[关于企业帐户中组织的用户配置](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)”。

### Enabling SAML single-sign on for organizations in your enterprise account

{% note %}

**注：**对企业帐户启用 SAML 单点登录身份验证将覆盖任何现有的组织级 SAML 配置。

{% endnote %}

For more detailed information about how to enable SAML using Okta, see "[Configuring SAML single sign-on and SCIM for your enterprise account using Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“SAML single sign-on”（SAML 单点登录）下，选择 **Enable SAML authentication（启用 SAML 身份验证）**。 ![用于启用 SAML SSO 的复选框](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. 在 **Sign on URL（登录 URL）**字段中，为单点登录请求输入您的 IdP 的 HTTPS 端点。 此值可在 IdP 配置中找到。 ![登录时将成员转发到的 URL 字段](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Optionally, in the **Issuer** field, type your SAML issuer URL to verify the authenticity of sent messages. ![SAML 签发者姓名字段](/assets/images/help/saml/saml_issuer.png)
8. 在 **Public Certificate（公共证书）**下，粘贴证书以验证 SAML 响应。 ![身份提供程序的公共证书字段](/assets/images/help/saml/saml_public_certificate.png)
9. 要验证来自 SAML 签发者的请求的完整性，请单击 {% octicon "pencil" aria-label="The edit icon" %}。 Then in the "Signature Method" and "Digest Method" drop-downs, choose the hashing algorithm used by your SAML issuer. ![SAML 签发者使用的签名方法和摘要方法哈希算法下拉列表](/assets/images/help/saml/saml_hashing_method.png)
10. 在为企业启用 SAML SSO 之前，单击 **Test SAML configuration（测试 SMAL 配置）** ，以确保已输入的信息正确。 ![实施前测试 SAML 配置的按钮](/assets/images/help/saml/saml_test.png)
11. 单击 **Save（保存）**。
