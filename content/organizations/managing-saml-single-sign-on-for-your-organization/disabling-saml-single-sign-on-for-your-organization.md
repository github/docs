---
title: Disabling SAML single sign-on for your organization
intro: 'You can disable SAML single sign-on (SSO) for your organization.'
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Disable SAML
permissions: Organization owners can disable SAML SSO for an organization.
---

After you disable SAML SSO for your organization, all external identities for your organization will be removed. For more information, see "[AUTOTITLE](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}

    {% note %}

    **Note:** If you're unable to access the organization because your identity provider (IdP) is unavailable, you can use a recovery code to bypass SSO. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/accessing-your-organization-if-your-identity-provider-is-unavailable)."

    {% endnote %}
{% data reusables.organizations.security %}
1. Under "SAML single sign-on", deselect **Enable SAML authentication**.
1. Click **Save**.
