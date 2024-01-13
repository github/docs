---
title: Managing bots and service accounts with SAML single sign-on
intro: Organizations that have enabled SAML single sign-on can retain access for bots and service accounts.
redirect_from:
  - /articles/managing-bots-and-service-accounts-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/managing-bots-and-service-accounts-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage bots & service accounts
---

To retain access for bots and service accounts, organization administrators can [enable](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization), but **not** [enforce](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization) SAML single sign-on for their organization. If you need to enforce SAML single sign-on for your organization, you can create an external identity for the bot or service account with your identity provider (IdP).

{% warning %}

**Note:** If you enforce SAML single sign-on for your organization and **do not** have external identities set up for bots and service accounts with your IdP, they will be removed from your organization.

{% endwarning %}

## Further reading

- "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)"
