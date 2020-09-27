---
title: Viewing and managing a member's SAML access to your organization
intro: 'You can view and revoke an organization member''s linked identity, active sessions, and authorized credentials.'
permissions: Organization owners can view and manage a member's SAML access to an organization.
product: '{{ site.data.reusables.gated-features.saml-sso }}'
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
versions:
  free-pro-team: '*'
---

### About SAML access to your organization

When you enable SAML single sign-on for your organization, each organization member can link their external identity on your identity provider (IdP) to their existing {{ site.data.variables.product.product_name }} account. To access your organization's resources on {{ site.data.variables.product.product_name }}, the member must have an active SAML session in their browser. To access your organization's resources using the API or Git, the member must use a personal access token or SSH key that the member has authorized for use with your organization.

You can view and revoke each member's linked identity, active sessions, and authorized credentials on the same page.

### Viewing and revoking a linked identity

{{ site.data.reusables.saml.about-linked-identities }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.people }}
{{ site.data.reusables.saml.click-person-revoke-identity }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-sso-identity }}
{{ site.data.reusables.saml.revoke-sso-identity }}
{{ site.data.reusables.saml.confirm-revoke-identity }}

### Viewing and revoking an active SAML session

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.people }}
{{ site.data.reusables.saml.click-person-revoke-session }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-saml-sessions }}
{{ site.data.reusables.saml.revoke-saml-session }}

### Viewing and revoking authorized credentials

{{ site.data.reusables.saml.about-authorized-credentials }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.people }}
{{ site.data.reusables.saml.click-person-revoke-credentials }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-authorized-credentials }}
{{ site.data.reusables.saml.revoke-authorized-credentials }}
{{ site.data.reusables.saml.confirm-revoke-credentials }}

### Дополнительная литература

- "[About identity and access management with SAML single sign-on](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Viewing and managing a user's SAML access to your enterprise account](/github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)"
