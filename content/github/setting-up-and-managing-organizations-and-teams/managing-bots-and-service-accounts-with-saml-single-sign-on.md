---
title: Managing bots and service accounts with SAML single sign-on
intro: Organizations that have enabled SAML single sign-on can retain access for bots and service accounts.
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/managing-bots-and-service-accounts-with-saml-single-sign-on
versions:
  free-pro-team: '*'
---

To retain access for bots and service accounts, organization administrators can [enable](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization), but **not** [enforce](/articles/enforcing-saml-single-sign-on-for-your-organization) SAML single sign-on for their organization. If you need to enforce SAML single sign-on for your organization, you can create an external identity for the bot or service account with your identity provider (IdP).

{% warning %}

**Note:** If you enforce SAML single sign-on for your organization and **do not** have external identities set up for bots and service accounts with your IdP, they will be removed from your organization.

{% endwarning %}

### Further reading

- "[About identity and access management with SAML single sign-on](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
