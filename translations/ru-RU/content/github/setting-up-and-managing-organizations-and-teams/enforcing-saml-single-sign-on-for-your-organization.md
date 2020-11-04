---
title: Enforcing SAML single sign-on for your organization
intro: Organization owners and admins can enforce SAML SSO so that all organization members must authenticate via an identity provider.
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
versions:
  free-pro-team: '*'
---

If you enforce SAML SSO in your organization, any members, including admins who have not authenticated via your SAML identity provider (IdP), will be removed from the organization and will receive an email notifying them about the removal. Bots and service accounts that do not have external identities set up in your organization's IdP will also be removed. For more information on bots and service accounts, see "[Managing bots and service accounts with SAML single sign-on](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on)." You can restore organization members once they successfully complete single sign-on.

If your organization is owned by an enterprise account, enabling SAML for the enterprise account will override your organization-level SAML configuration. For more information, see "[Enforcing security settings in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account)."

{% tip %}

**Tip:** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

1. Enable and test SAML SSO for your organization. For more information on this process, see "[Enabling and testing SAML single sign-on for your organization](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)."
2. After you select **Require SAML SSO authentication for all members of the SAML SSO Org organization**, organization members who haven't authenticated via your IdP will be shown. If you enforce SAML SSO, these members will be removed from the organization.
3. Click **Enforce SAML SSO** to enforce SAML SSO and remove the listed organization members.

### Дополнительная литература

- "[About identity and access management with SAML single sign-on](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
