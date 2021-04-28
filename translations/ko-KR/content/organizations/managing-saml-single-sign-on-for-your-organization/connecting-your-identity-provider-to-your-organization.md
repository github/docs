---
title: Connecting your identity provider to your organization
intro: 'To use SAML single sign-on and SCIM, you must connect your identity provider to your {% data variables.product.product_name %} organization.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/connecting-your-identity-provider-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---

Before [enabling SAML SSO](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) in your {% data variables.product.product_name %} organization, you'll need to connect your identity provider (IdP) to your organization.

You can find the SAML and SCIM implementation details for your IdP in their documentation:
- Active Directory Federation Services (AD FS) [SAML](https://docs.microsoft.com/windows-server/identity/active-directory-federation-services)
- Azure Active Directory (Azure AD) [SAML](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-tutorial) and [SCIM](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-provisioning-tutorial)
- Okta [SAML](http://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Github-com.html) and [SCIM](http://developer.okta.com/standards/SCIM/)
- OneLogin [SAML](https://onelogin.service-now.com/support?id=kb_article&sys_id=2929ddcfdbdc5700d5505eea4b9619c6) and [SCIM](https://onelogin.service-now.com/support?id=kb_article&sys_id=5aa91d03db109700d5505eea4b96197e)
- PingOne [SAML](https://support.pingidentity.com/s/marketplace-integration/a7i1W0000004ID3QAM/github-connector)
- Shibboleth [SAML](https://wiki.shibboleth.net/confluence/display/IDP30/Home)

{% note %}

**Note:** {% data variables.product.product_name %} supported identity providers for SCIM are Azure AD, Okta, and OneLogin. For more information about SCIM, see "[About SCIM](/articles/about-scim)."

{% endnote %}

### 더 읽을거리

- "[About identity and access management with SAML single sign-on](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Enforcing SAML single sign-on for your organization](/articles/enforcing-saml-single-sign-on-for-your-organization)"
