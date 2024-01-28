{% data variables.product.product_name %} supports SAML SSO with IdPs that implement the SAML 2.0 standard. For more information, see the [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website.

{% data variables.product.company_short %} officially supports and internally tests the following IdPs.

{% ifversion fpt or ghec or ghes %}
- Active Directory Federation Services (AD FS)
- Microsoft Entra ID
- Okta
- OneLogin
- PingOne
- Shibboleth
{% elsif ghae %}
- Microsoft Entra ID
- Okta (beta)
{% endif %}
