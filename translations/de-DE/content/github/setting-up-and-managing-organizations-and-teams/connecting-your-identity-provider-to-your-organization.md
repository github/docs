---
title: Deinen Identitätsanbieter mit Deiner Organisation verbinden
intro: 'Um SAML Single Sign-On und SCIM zu verwenden, musst Du Deinen Identitätsanbieter mit Deiner {% data variables.product.product_name %}-Organisation verbinden.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/connecting-your-identity-provider-to-your-organization
versions:
  free-pro-team: '*'
---

Vor der [Aktivierung von SAML SSO](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) in Ihrer {% data variables.product.product_name %}-Organisation müssen Sie Ihren Identity Provider (IdP) mit Ihrer Organisation verbinden.

Die SAML- und SCIM-Implementierungsdetails für Deinen IdP findest Du in der IdP-Dokumentation:
- Active Directory Federation Services (AD FS) [SAML](https://docs.microsoft.com/windows-server/identity/active-directory-federation-services)
- Azure Active Directory (Azure AD) [SAML](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-tutorial) und [SCIM](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-provisioning-tutorial)
- Okta [SAML](http://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Github-com.html) und [SCIM](http://developer.okta.com/standards/SCIM/)
- OneLogin [SAML](https://onelogin.service-now.com/support?id=kb_article&sys_id=2929ddcfdbdc5700d5505eea4b9619c6) und [SCIM](https://onelogin.service-now.com/support?id=kb_article&sys_id=5aa91d03db109700d5505eea4b96197e)
- PingOne [SAML](https://support.pingidentity.com/s/marketplace-integration/a7i1W0000004ID3QAM/github-connector)
- Shibboleth [SAML](https://wiki.shibboleth.net/confluence/display/IDP30/Home)

{% note %}

**Hinweis:** Von {% data variables.product.product_name %} unterstützte Identitätsanbieter für SCIM sind Azure AD, Okta und OneLogin. Weitere Informationen zu SCIM findest Du unter „[Informationen zu SCIM](/articles/about-scim).“

{% endnote %}

### Weiterführende Informationen

- „[Informationen zum Identitäts- und Zugriffsmanagement mit SAML Single-Sign-On](/articles/about-identity-and-access-management-with-saml-single-sign-on)“
- „[SAML Single Sign-On für Deine Organisation erzwingen](/articles/enforcing-saml-single-sign-on-for-your-organization)“
