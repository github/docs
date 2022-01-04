{% data variables.product.product_name %} 支持 SAML SSO 与采用 SAML 2.0 标准的 IdP 一起使用。 更多信息请参阅 OASIS 网站上的 [SAML Wiki](https://wiki.oasis-open.org/security)。

{% data variables.product.company_short %} officially supports and internally tests the following IdPs.

{% ifversion fpt or ghec or ghes %}
- Active Directory Federation Services (AD FS)
- Azure Active Directory (Azure AD)
- Okta
- OneLogin
- PingOne
- Shibboleth
{% elsif ghae %}
- Azure Active Directory (Azure AD)
- Okta (beta)
{% endif %}
