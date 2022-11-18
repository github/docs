---
title: Viewing and managing a user's SAML access to your enterprise
intro: 'You can view and revoke an enterprise member''s linked identity, active sessions, and authorized credentials.'
permissions: Enterprise owners can view and manage a member's SAML access to an organization.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
versions:
  ghec: '*'
topics:
  - Enterprise
shortTitle: View & manage SAML access
---
## About SAML access to your enterprise account

When you enable SAML single sign-on for your enterprise account, each enterprise member can link their external identity on your identity provider (IdP) to their existing account on {% data variables.location.product_location %}. {% data reusables.saml.about-saml-access-enterprise-account %}

If your enterprise is uses {% data variables.product.prodname_emus %}, your members will use accounts provisioned through your IdP. {% data variables.enterprise.prodname_managed_users_caps %} will not use their existing user account on {% data variables.product.product_name %}. For more information, see "[About {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."

## Viewing and revoking a linked identity

{% data reusables.saml.about-linked-identities %}

If your enterprise uses {% data variables.product.prodname_emus %}, you will not be able to deprovision or remove user accounts from the enterprise on {% data variables.product.product_name %}. Any changes you need to make to your enterprise's {% data variables.enterprise.prodname_managed_users %} should be made through your IdP.

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-identity %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-sso-identity %}
{% data reusables.saml.revoke-sso-identity %}
{% data reusables.saml.confirm-revoke-identity %}

## Viewing and revoking an active SAML session

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

## Viewing and revoking authorized credentials

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-credentials %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-authorized-credentials %}
{% data reusables.saml.revoke-authorized-credentials %}
{% data reusables.saml.confirm-revoke-credentials %}

## Further reading

- "[Viewing and managing a member's SAML access to your organization](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"
