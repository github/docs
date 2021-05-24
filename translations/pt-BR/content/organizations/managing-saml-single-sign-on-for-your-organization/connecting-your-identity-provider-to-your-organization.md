---
title: Conectar o provedor de identidade à organização
intro: 'Para usar o logon único SAML e o SCIM, é preciso conectar o provedor de identidade à organização do {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/connecting-your-identity-provider-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

Antes de [habilitar o SAML SSO](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) na organização do {% data variables.product.product_name %}, você precisará conectar o provedor de identidade (IdP) à sua organização.

Você pode encontrar os detalhes de implementação do SAML e SCIM para seu IdP na respectiva documentação:
- [SAML](https://docs.microsoft.com/windows-server/identity/active-directory-federation-services) do Active Directory Federation Services (AD FS)
- [SAML](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-tutorial) e [SCIM](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-provisioning-tutorial) do Azure Active Directory (Azure AD)
- [SAML](http://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Github-com.html) e [SCIM](http://developer.okta.com/standards/SCIM/) do Okta
- [SAML](https://onelogin.service-now.com/support?id=kb_article&sys_id=2929ddcfdbdc5700d5505eea4b9619c6) e [SCIM](https://onelogin.service-now.com/support?id=kb_article&sys_id=5aa91d03db109700d5505eea4b96197e) do OneLogin
- [SAML](https://support.pingidentity.com/s/marketplace-integration/a7i1W0000004ID3QAM/github-connector) do PingOne
- [SAML](https://wiki.shibboleth.net/confluence/display/IDP30/Home) do Shibboleth

{% note %}

**Observação:** os provedores de identidade aceitos pelo {% data variables.product.product_name %} para SCIM são Azure AD, Okta e OneLogin. Para obter mais informações sobre o SCIM, consulte "[Sobre o SCIM](/articles/about-scim)."

{% endnote %}

### Leia mais

- "[Sobre gerenciamento de identidade e acesso com o SAML de logon único](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Aplicar SAML de logon único para sua organização](/articles/enforcing-saml-single-sign-on-for-your-organization)"
