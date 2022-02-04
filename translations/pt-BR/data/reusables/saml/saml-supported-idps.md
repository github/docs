{% data variables.product.product_name %} é compatível com o SAML SSO, com IdPs que implementam o padrão SAML 2.0. Para obter mais informações, consulte a [Wiki do SAML](https://wiki.oasis-open.org/security) no site do OASIS.

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
