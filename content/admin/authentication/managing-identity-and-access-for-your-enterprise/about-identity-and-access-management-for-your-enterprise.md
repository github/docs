---
title: About identity and access management for your enterprise
shortTitle: About identity and access management
intro: 'You can use SAML single sign-on (SSO) and System for Cross-domain Identity Management (SCIM) to centrally manage access {% ifversion ghec %}to organizations owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}{% endif %}{% ifversion ghae %}to {% data variables.product.product_location %}{% endif %}.'
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  ghec: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Access management
  - Authentication
  - Enterprise
  - Identity
redirect_from:
  - /admin/authentication/about-identity-and-access-management-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta
---
## About identity and access management for your enterprise

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %} For more information, see "[Configuring SAML single sign-on for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)."

After you enable SAML SSO, depending on the IdP you use, you may be able to enable additional identity and access management features. {% data reusables.scim.enterprise-account-scim %}

If you use Azure AD as your IDP, you can use team synchronization to manage team membership within each organization. {% data reusables.identity-and-permissions.about-team-sync %} For more information, see "[Managing team synchronization for organizations in your enterprise account](/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)."

{% data reusables.saml.switching-from-org-to-enterprise %} For more information, see "[Switching your SAML configuration from an organization to an enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."

## About {% data variables.product.prodname_emus %}

{% data reusables.enterprise-accounts.emu-short-summary %}

Configuring {% data variables.product.prodname_emus %} for SAML single-sign on and user provisioning involves following a different process than you would for an enterprise that isn't using {% data variables.product.prodname_managed_users %}. If your enterprise uses {% data variables.product.prodname_emus %}, see "[Configuring SAML single sign-on for Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)."

## Supported IdPs

We test and officially support the following IdPs. For SAML SSO, we offer limited support for all identity providers that implement the SAML 2.0 standard. For more information, see the [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website.

IdP | SAML | Team synchronization | 
--- | :--: | :-------: |
Active Directory Federation Services (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %}  | |
Azure Active Directory (Azure AD) | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label="The check icon" %} |
OneLogin | {% octicon "check-circle-fill" aria-label="The check icon" %}  | |
PingOne | {% octicon "check-circle-fill" aria-label="The check icon" %}  | |
Shibboleth | {% octicon "check-circle-fill" aria-label="The check icon" %}  | |

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

After you configure the application for {% data variables.product.product_name %} on your IdP, you can grant access to {% data variables.product.product_location %} by assigning the application to users and groups on your IdP. For more information about SAML SSO for {% data variables.product.product_name %}, see "[Configuring SAML single sign-on for your enterprise](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)."

{% data reusables.scim.after-you-configure-saml %} For more information, see "[Configuring user provisioning for your enterprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise)."

To learn how to configure both authentication and user provisioning for {% data variables.product.product_location %} with your specific IdP, see "[Configuring authentication and provisioning with your identity provider](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)."

{% endif %}

## Further reading

- [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website
- [System for Cross-domain Identity Management: Protocol (RFC 7644)](https://tools.ietf.org/html/rfc7644) on the IETF website{% ifversion ghae %}
- [Restricting network traffic to your enterprise](/admin/configuration/restricting-network-traffic-to-your-enterprise){% endif %}
