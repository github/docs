---
title: Viewing and managing a user's SAML access to your enterprise account
intro: 'You can view and revoke an enterprise member''s linked identity, active sessions, and authorized credentials.'
permissions: Enterprise owners can view and manage a member's SAML access to an organization.
product: '{{ site.data.reusables.gated-features.enterprise-accounts }}'
versions:
  free-pro-team: '*'
---

### About SAML access to your enterprise account

When you enable SAML single sign-on for your enterprise account, each enterprise member can link their external identity on your identity provider (IdP) to their existing {{ site.data.variables.product.product_name }} account. {{ site.data.reusables.saml.about-saml-access-enterprise-account }}

### Viewing and revoking a linked identity

{{ site.data.reusables.saml.about-linked-identities }}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.people-tab }}
{{ site.data.reusables.saml.click-person-revoke-identity }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-sso-identity }}
{{ site.data.reusables.saml.revoke-sso-identity }}
{{ site.data.reusables.saml.confirm-revoke-identity }}

### Viewing and revoking an active SAML session

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.people-tab }}
{{ site.data.reusables.saml.click-person-revoke-session }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-saml-sessions }}
{{ site.data.reusables.saml.revoke-saml-session }}

### Viewing and revoking authorized credentials

{{ site.data.reusables.saml.about-authorized-credentials }}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.people-tab }}
{{ site.data.reusables.saml.click-person-revoke-credentials }}
{{ site.data.reusables.saml.saml-identity-linked }}
{{ site.data.reusables.saml.view-authorized-credentials }}
{{ site.data.reusables.saml.revoke-authorized-credentials }}
{{ site.data.reusables.saml.confirm-revoke-credentials }}

### Дополнительная литература

- "[Viewing and managing a member's SAML access to your organization](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization)"
