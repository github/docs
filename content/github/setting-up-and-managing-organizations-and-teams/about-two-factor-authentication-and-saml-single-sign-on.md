---
title: About two-factor authentication and SAML single sign-on
intro: Organizations administrators can enable both SAML single sign-on and two-factor authentication to add additional authentication measures for their organization members.
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-two-factor-authentication-and-saml-single-sign-on
versions:
  free-pro-team: '*'
---

Two-factor authentication (2FA) provides basic authentication for organization members. By enabling 2FA, organization administrators limit the likelihood that a member's {% data variables.product.product_name %} account could be compromised. For more information on 2FA, see "[About two-factor authentication](/articles/about-two-factor-authentication)."

To add additional authentication measures, organization administrators can also [enable SAML single sign-on (SSO)](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) so that organization members must use single sign-on to access an organization. For more information on SAML SSO, see "[About identity and access management with SAML single sign-on](/articles/about-identity-and-access-management-with-saml-single-sign-on)."

If both 2FA and SAML SSO are enabled, organization members must do the following:
- Use 2FA to log in to their {% data variables.product.product_name %} account
- Use single sign-on to access the organization
- Use an authorized token for API or Git access and use single sign-on to authorize the token

### Further reading

- "[Enforcing SAML single sign-on for your organization](/articles/enforcing-saml-single-sign-on-for-your-organization)"
