---
title: About SCIM for organizations
intro: 'With System for Cross-domain Identity Management (SCIM), administrators can automate the exchange of user identity information between systems.'
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
  - /organizations/managing-saml-single-sign-on-for-your-organization/about-scim
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
---

## About SCIM for organizations

If your organization uses [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on), you can implement SCIM to add, manage, and remove organization members' access to {% data variables.product.product_name %}. For example, an administrator can deprovision an organization member using SCIM and automatically remove the member from the organization.

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

If you use SAML SSO without implementing SCIM, you won't have automatic deprovisioning. When organization members' sessions expire after their access is removed from the IdP, they aren't automatically removed from the organization. Authorized tokens grant access to the organization even after their sessions expire. If SCIM is not used, to fully remove a member's access, an organization owner must remove the member's access in the IdP and manually remove the member from the organization on {% data variables.product.prodname_dotcom %}.

{% data reusables.scim.changes-should-come-from-idp %}

## Supported identity providers

These identity providers (IdPs) are compatible with the {% data variables.product.product_name %} SCIM API for organizations. For more information, see [SCIM](/rest/scim) in the {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API documentation.
- Azure AD
- Okta
- OneLogin

## About SCIM configuration for organizations

{% data reusables.scim.dedicated-configuration-account %}

Before you authorize the {% data variables.product.prodname_oauth_app %}, you must have an active SAML session. For more information, see "[About authentication with SAML single sign-on](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)."

{% note %}

**Note:** {% data reusables.scim.nameid-and-username-must-match %}

{% endnote %} 

## Further reading

- "[Viewing and managing a member's SAML access to your organization](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)"
