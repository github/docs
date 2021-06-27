---
title: Preparing to enforce SAML single sign-on in your organization
intro: 'Before you enforce SAML single sign-on in your organization, you should verify your organization''s membership and configure the connection settings to your identity provider.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/preparing-to-enforce-saml-single-sign-on-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-enforce-saml-single-sign-on-in-your-organization
versions:
  fpt: '*'
topics:
  - Organizations
  - Teams
shortTitle: Prepare to enforce SAML SSO
---

When you [enforce SAML single sign-on](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) in your organization, members that haven't authenticated via your identity provider (IdP) will be removed from the organization and will receive an email notifying them about the removal.

Before enforcing SAML SSO in your organization, you should:

- [Add](/articles/inviting-users-to-join-your-organization) or [remove](/articles/removing-a-member-from-your-organization) members from your organization if needed.
- If you haven't already, connect your IdP to your organization. For more information, see "[Connecting your identity provider to your organization](/articles/connecting-your-identity-provider-to-your-organization)."
- Ensure that your organization members have signed in and linked their accounts with the IdP.

{% data reusables.saml.outside-collaborators-exemption %}

## Further reading

- "[About identity and access management with SAML single sign-on](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
