---
title: About SCIM
intro: 'With System for Cross-domain Identity Management (SCIM), administrators can automate the exchange of user identity information between systems.'
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.enterprise-accounts.emu-scim-note %}

If you use [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on) in your organization, you can implement SCIM to add, manage, and remove organization members' access to {% data variables.product.product_name %}. For example, an administrator can deprovision an organization member using SCIM and automatically remove the member from the organization.

If you use SAML SSO without implementing SCIM, you won't have automatic deprovisioning. When organization members' sessions expire after their access is removed from the IdP, they aren't automatically removed from the organization. Authorized tokens grant access to the organization even after their sessions expire. To remove access, organization administrators can either manually remove the authorized token from the organization or automate its removal with SCIM.

These identity providers are compatible with the {% data variables.product.product_name %} SCIM API for organizations. For more information, see [SCIM](/rest/reference/scim) in the {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API documentation.
- Azure AD
- Okta
- OneLogin

{% data reusables.scim.enterprise-account-scim %}

## Further reading

- "[About identity and access management with SAML single sign-on](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Connecting your identity provider to your organization](/articles/connecting-your-identity-provider-to-your-organization)"
- "[Enabling and testing SAML single sign-on for your organization](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)"
- "[Viewing and managing a member's SAML access to your organization](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)"
