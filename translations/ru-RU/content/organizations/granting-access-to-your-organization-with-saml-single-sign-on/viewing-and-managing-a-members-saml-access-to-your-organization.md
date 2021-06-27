---
title: Viewing and managing a member's SAML access to your organization
intro: 'You can view and revoke an organization member''s linked identity, active sessions, and authorized credentials.'
permissions: Organization owners can view and manage a member's SAML access to an organization.
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

### About SAML access to your organization

When you enable SAML single sign-on for your organization, each organization member can link their external identity on your identity provider (IdP) to their existing {% data variables.product.product_name %} account. To access your organization's resources on {% data variables.product.product_name %}, the member must have an active SAML session in their browser. To access your organization's resources using the API or Git, the member must use a personal access token or SSH key that the member has authorized for use with your organization.

You can view and revoke each member's linked identity, active sessions, and authorized credentials on the same page.

### Viewing and revoking a linked identity

{% data reusables.saml.about-linked-identities %}

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

### Viewing and revoking an active SAML session

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

### Viewing and revoking authorized credentials

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

### Дополнительная литература

- "[About identity and access management with SAML single sign-on](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Viewing and managing a user's SAML access to your enterprise account](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)"
