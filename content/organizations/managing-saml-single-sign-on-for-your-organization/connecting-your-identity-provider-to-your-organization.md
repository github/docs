---
title: Connecting your identity provider to your organization
intro: 'To use SAML single sign-on and SCIM, you must connect your identity provider (IdP) to your organization on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/connecting-your-identity-provider-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization
versions:
  ghec: '*'
topics:
  - Authentication
  - Organizations
  - Teams
shortTitle: Connect an IdP
---

## About connection of your IdP to your organization

When you enable SAML SSO for your {% data variables.product.product_name %} organization, you connect your identity provider (IdP) to your organization. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)."

{% data reusables.saml.ghec-only %}

You can find the SAML and SCIM implementation details for your IdP in the IdP's documentation.
- Active Directory Federation Services (AD FS) [SAML](https://docs.microsoft.com/windows-server/identity/active-directory-federation-services)
- Azure Active Directory (Azure AD) [SAML](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-tutorial) and [SCIM](https://docs.microsoft.com/azure/active-directory/active-directory-saas-github-provisioning-tutorial)
- Okta [SAML](https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Github-com.html) and [SCIM](https://developer.okta.com/standards/SCIM/)
- OneLogin [SAML](https://onelogin.service-now.com/support?id=kb_article&sys_id=2929ddcfdbdc5700d5505eea4b9619c6) and [SCIM](https://onelogin.service-now.com/support?id=kb_article&sys_id=5aa91d03db109700d5505eea4b96197e)
- PingOne [SAML](https://support.pingidentity.com/s/marketplace-integration/a7i1W0000004ID3QAM/github-connector)
- Shibboleth [SAML](https://shibboleth.atlassian.net/wiki/spaces/IDP4/overview)

{% note %}

**Note:** {% data variables.product.product_name %} supported identity providers for SCIM are Azure AD, Okta, and OneLogin. For more information about SCIM, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)."

{% data reusables.scim.enterprise-account-scim %}

{% endnote %}

## SAML metadata

For more information about SAML metadata for your organization, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)."
