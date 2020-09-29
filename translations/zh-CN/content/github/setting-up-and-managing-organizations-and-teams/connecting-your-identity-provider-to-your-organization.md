---
title: 将身份提供程序连接到组织
intro: '要使用 SAML 单点登录和 SCIM，必须将身份提供程序连接到您的 {% data variables.product.product_name %} 组织。'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/connecting-your-identity-provider-to-your-organization
versions:
  free-pro-team: '*'
---

在您的 {% data variables.product.product_name %} 组织中[启用 SAML SSO](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) 之前，需要将身份提供程序 (IdP) 连接到您的组织。

您可以在以下文档中找到 IdP 的 SAML 和 SCIM 实现详细信息：
- Active Directory Federation Services (AD FS) [SAML](https://docs.microsoft.com/windows-server/identity/active-directory-federation-services)
- Azure Active Directory (Azure AD) [SAML](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-tutorial) 和 [SCIM](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-provisioning-tutorial)
- Okta [SAML](http://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Github-com.html) 和 [SCIM](http://developer.okta.com/standards/SCIM/)
- OneLogin [SAML](https://onelogin.service-now.com/support?id=kb_article&sys_id=2929ddcfdbdc5700d5505eea4b9619c6) 和 [SCIM](https://onelogin.service-now.com/support?id=kb_article&sys_id=5aa91d03db109700d5505eea4b96197e)
- PingOne [SAML](https://support.pingidentity.com/s/marketplace-integration/a7i1W0000004ID3QAM/github-connector)
- Shibboleth [SAML](https://wiki.shibboleth.net/confluence/display/IDP30/Home)

{% note %}

**注：**{% data variables.product.product_name %} 支持的用于 SCIM 的身份提供程序为 Azure AD、Okta 和 OneLogin。 有关 SCIM 的更多信息，请参阅“[关于 SCIM](/articles/about-scim)”。

{% endnote %}

### 延伸阅读

- "[关于使用 SAML 单点登录管理身份和访问](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[对组织实施 SAML 单点登录](/articles/enforcing-saml-single-sign-on-for-your-organization)"
