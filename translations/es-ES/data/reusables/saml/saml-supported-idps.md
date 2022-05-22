{% data variables.product.product_name %} es compatible con el SSO de SAML para los IdP que implementen SAML 2.0 estándar. Para obtener más información, consulta la sección [Wiki de SAML](https://wiki.oasis-open.org/security) en el sitio web de OASIS.

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
{% endif %}
