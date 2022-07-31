{% data variables.product.product_name %} は、SAML2.0 標準を実装し IdP を使用した SAML SSO をサポートします。 詳しい情報については、OASIS Web サイトの [SAML Wiki](https://wiki.oasis-open.org/security) を参照してください。

{% data variables.product.company_short %} officially supports and internally tests the following IdPs.

{% ifversion fpt or ghec or ghes %}
- Active Directory フェデレーションサービス (AD FS)
- Azure Active Directory (Azure AD)
- Okta
- OneLogin
- PingOne
- Shibboleth
{% elsif ghae %}
- Azure Active Directory (Azure AD)
- Okta (beta)
{% endif %}
