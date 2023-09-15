---
title: About SAML for enterprise IAM
shortTitle: About SAML for IAM
intro: 'You can use SAML single sign-on (SSO) {% ifversion ghae %}and System for Cross-domain Identity Management (SCIM) {% endif %}to centrally manage access {% ifversion ghec %}to organizations owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}to {% data variables.location.product_location %}{% elsif ghae %}to {% data variables.location.product_location %}{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
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
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/about-identity-and-access-management-for-your-enterprise
---

## About SAML SSO for {% ifversion ghec or ghae %}your enterprise on {% endif %}{% ifversion ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}

{% ifversion ghec %}

If your enterprise members manage their own user accounts on {% data variables.location.product_location %}, you can configure SAML authentication as an additional access restriction for your enterprise or organization. {% data reusables.saml.dotcom-saml-explanation %}

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.about-saml-enterprise-accounts %} For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#considerations-for-enabling-saml-for-an-enterprise-or-organization)" and [AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)."

Alternatively, you can provision and manage the accounts of your enterprise members with {% data variables.product.prodname_emus %}. To help you determine whether SAML SSO or {% data variables.product.prodname_emus %} is better for your enterprise, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/identifying-the-best-authentication-method-for-your-enterprise)."

{% data reusables.enterprise-accounts.about-recovery-codes %} For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)."

After you enable SAML SSO, depending on the IdP you use, you may be able to enable additional identity and access management features.

{% data reusables.saml.no-scim-for-enterprises %}

If you use Azure AD as your IdP, you can use team synchronization to manage team membership within each organization. {% data reusables.identity-and-permissions.about-team-sync %} For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/managing-team-synchronization-for-organizations-in-your-enterprise)."

{% data reusables.saml.switching-from-org-to-enterprise %} For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."

{% elsif ghes %}

SAML SSO allows people to authenticate and access {% data variables.location.product_location %} through an external system for identity management.

SAML is an XML-based standard for authentication and authorization. When you configure SAML for {% data variables.location.product_location %}, the external system for authentication is called an identity provider (IdP). Your instance acts as a SAML service provider (SP). For more information about the SAML standard, see [Security Assertion Markup Language](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) on Wikipedia.

{% data reusables.enterprise.saml-or-ldap %}

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

After you configure the application for {% data variables.product.product_name %} on your identity provider (IdP), you can provision access to {% data variables.location.product_location %} by assigning users and groups to the application on your IdP. For more information about SAML SSO for {% data variables.product.product_name %}, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)."

{% endif %}

{% ifversion ghes %}

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

After you configure SAML, people who use {% data variables.location.product_location %} must use a {% data variables.product.pat_generic %} to authenticate API requests. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

{% data reusables.enterprise_user_management.built-in-authentication %}

{% endif %}

For more information about the configuration of SAML SSO on {% data variables.product.product_name %}, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)."{% ifversion ghec or ghae or scim-for-ghes %} To learn how to configure both authentication and {% ifversion ghae or ghes %}user {% endif %}provisioning for {% data variables.location.product_location %} with your specific IdP, see the articles for individual IdPs in "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam)."{% endif %}

{% ifversion ghae or scim-for-ghes %}

## About creation of user accounts

{% data reusables.scim.after-you-configure-saml %} For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)."

{% data reusables.saml.saml-ghes-account-revocation %}

{% endif %}

## Supported IdPs

{% ifversion ghec %}

We test and officially support the following IdPs. For SAML SSO, we offer limited support for all identity providers that implement the SAML 2.0 standard. For more information, see the [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website.

IdP | SAML | Team synchronization |
--- | :--: | :-------: |
Active Directory Federation Services (AD FS) | {% octicon "check" aria-label= "Supported" %} | {% octicon "x" aria-label="Not supported" %} |
Azure Active Directory (Azure AD) | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
Okta | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
OneLogin | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
PingOne | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
Shibboleth | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |

{% elsif ghes %}

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghes %}

If your IdP supports encrypted assertions, you can configure encrypted assertions on {% data variables.product.product_name %} for increased security during the authentication process.

{% endif %}

{% data reusables.saml.saml-single-logout-not-supported %}

{% elsif ghae %}

The following IdPs are officially supported for integration with {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% endif %}

{% ifversion ghae %}

## Mapping {% data variables.product.prodname_ghe_managed %} teams to Okta groups

If you use Okta as your IdP, you can map your Okta groups to teams on {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/mapping-okta-groups-to-teams)."

{% endif %}

## Further reading

- [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website
{%- ifversion ghae or scim-for-ghes %}
- [System for Cross-domain Identity Management: Protocol (RFC 7644)](https://tools.ietf.org/html/rfc7644) on the IETF website
{%- endif %}
{%- ifversion ghae %}
- "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)"
{%- endif %}
