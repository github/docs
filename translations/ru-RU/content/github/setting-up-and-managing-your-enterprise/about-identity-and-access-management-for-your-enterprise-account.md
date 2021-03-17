---
title: About identity and access management for your enterprise account
intro: You can centrally manage access to your enterprise's resources, organization membership, and team membership using your identity provider (IdP).
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
---

### About identity and access management for your enterprise account

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %} For more information, see "[Enabling SAML single sign-on for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

After you enable SAML SSO, depending on the IdP you use, you may be able to enable additional identity and access management features.

{% data reusables.saml.about-user-provisioning-enterprise-account %} For more information, see "[About user provisioning for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)."

If you use Azure AD as your IDP, you can use team synchronization to manage team membership within each organization. {% data reusables.identity-and-permissions.about-team-sync %} For more information, see "[Managing team synchronization for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)."

### Supported IdPs

We test and officially support the following IdPs. For SAML SSO, we offer limited support for all identity providers that implement the SAML 2.0 standard. For more information, see the [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website.

| IdP                                          |                              SAML                              |                                                                                           User provisioning                                                                                            |                     Team synchronization                      |
| -------------------------------------------- |:--------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------:|
| Active Directory Federation Services (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} |                                                                                                                                                                                                        |                                                               |
| Azure Active Directory (Azure AD)            | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                        | {% octicon "check-circle-fill" aria-label="The check icon" %}
| Okta                                         | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label= "The check icon" %} [<sup>Beta</sup>](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account) |                                                               |
| OneLogin                                     | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                        |                                                               |
| PingOne                                      | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                        |                                                               |
| Shibboleth                                   | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                        |                                                               |

