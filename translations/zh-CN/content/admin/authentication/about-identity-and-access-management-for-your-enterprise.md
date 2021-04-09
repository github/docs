---
title: 关于企业的身份和访问管理
shortTitle: 关于身份和访问管理
intro: '您可以使用 {% if enterpriseServerVersions contains currentVersion %}{% data variables.product.prodname_ghe_server %} 的内置身份验证，或者选择 CAS、LDAP 或 SAML{% else %}SAML 单点登录 (SSO) 和跨域身份管理系统 (SCIM){% endif %} 来集中管理对 {% data variables.product.prodname_dotcom_the_website %} 上{% if currentVersion == "free-pro-team@latest" %}企业拥有的组织{% endif %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} {% data variables.product.product_location %}{% endif %}的访问。'
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  github-ae: '*'
---

### 关于企业的身份和访问管理

{% if currentVersion == "github-ae@latest" %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

在 IdP 上为 {% data variables.product.product_name %} 配置应用程序后，可以通过将应用程序分配到 IdP 上的用户和组来授予其访问 {% data variables.product.product_location %} 的权限。 有关用于 {% data variables.product.product_name %} 的 SAML SSO 的详细信息，请参阅“[为企业配置 SAML 单点登录](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)”。

{% data reusables.scim.after-you-configure-saml %} 更多信息请参阅“[配置企业的用户预配](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”。

要了解如何合适特定 IdP 为 {% data variables.product.product_location %} 配置身份验证和用户预配，请参阅“[使用身份提供程序配置身份验证和预配](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)”。

{% endif %}

### 延伸阅读

- OASIS 网站上的 [SAML Wiki](https://wiki.oasis-open.org/security)
- IETF 网站上的[跨域身份管理系统：协议 (RFC 7644)](https://tools.ietf.org/html/rfc7644)
- [限制到企业的网络流量](/admin/configuration/restricting-network-traffic-to-your-enterprise)
