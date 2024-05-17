---
title: About two-factor authentication and SAML single sign-on
intro: Organization owners can enable both SAML single sign-on and two-factor authentication to add additional authentication measures for their organization members.
redirect_from:
  - /articles/about-two-factor-authentication-and-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-two-factor-authentication-and-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 2FA & SAML single sign-on
---

Two-factor authentication (2FA) provides basic authentication for organization members. By enabling 2FA, organization owners limit the likelihood that a member's account on {% data variables.location.product_location %} could be compromised. For more information on 2FA, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)."

To add additional authentication measures, organization owners can also [enable SAML single sign-on (SSO)](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization) so that organization members must use single sign-on to access an organization. For more information on SAML SSO, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)."

If both 2FA and SAML SSO are enabled, organization members must do the following:
- Use 2FA to log in to their account on {% data variables.location.product_location %}
- Use single sign-on to access the organization
- Use an authorized token for API or Git access and use single sign-on to authorize the token

## Further reading

- "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)"
