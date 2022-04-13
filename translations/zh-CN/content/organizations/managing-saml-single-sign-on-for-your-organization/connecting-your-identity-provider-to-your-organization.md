---
title: 将身份提供程序连接到组织
intro: '要使用 SAML 单点登录和 SCIM，必须将身份提供程序连接到您的 {% data variables.product.product_name %} 组织。'
redirect_from:
  - /articles/connecting-your-identity-provider-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 连接 IdP
---

为您的 {% data variables.product.product_name %} 组织启用 SAML SSO时，会将您的身份提供商 (IDP) 连接到组织。 更多信息请参阅“[对组织启用并测试 SAML 单点登录](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)”。

{% data reusables.saml.ghec-only %}

您可以在 IdP 文档中找到 IdP 的 SAML 和 SCIM 实现详细信息。
- Active Directory Federation Services (AD FS) [SAML](https://docs.microsoft.com/windows-server/identity/active-directory-federation-services)
- Azure Active Directory (Azure AD) [SAML](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-tutorial) 和 [SCIM](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-provisioning-tutorial)
- Okta [SAML](http://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Github-com.html) 和 [SCIM](http://developer.okta.com/standards/SCIM/)
- OneLogin [SAML](https://onelogin.service-now.com/support?id=kb_article&sys_id=2929ddcfdbdc5700d5505eea4b9619c6) 和 [SCIM](https://onelogin.service-now.com/support?id=kb_article&sys_id=5aa91d03db109700d5505eea4b96197e)
- PingOne [SAML](https://support.pingidentity.com/s/marketplace-integration/a7i1W0000004ID3QAM/github-connector)
- Shibboleth [SAML](https://wiki.shibboleth.net/confluence/display/IDP30/Home)

您可以通过以下 URL 访问组织的服务提供商元数据，将 ORGANIZATION 替换为您的组织的用户名。

```
http(s)://github.com/orgs/ORGANIZATION/saml/metadata.xml
```

{% note %}

**注：**{% data variables.product.product_name %} 支持的用于 SCIM 的身份提供程序为 Azure AD、Okta 和 OneLogin。 {% data reusables.scim.enterprise-account-scim %} 有关 SCIM 的更多信息，请参阅“[关于 SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim)”。

{% endnote %}
