---
title: Viewing and managing a user's SAML access to your enterprise
intro: 'You can view and revoke an enterprise member''s {% ifversion ghec %}linked identity, active sessions, and authorized credentials{% else %}active SAML sessions{% endif %}.'
permissions: Enterprise owners
product: '{% ifversion ghes %}Instances that have configured SCIM provisioning{% endif %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
  - /admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
versions:
  ghec: '*'
  feature: scim-for-ghes-public-beta
topics:
  - Enterprise
shortTitle: View & manage SAML access
---

## About SAML access to your enterprise account

When you enable SAML single sign-on for your enterprise account, each enterprise member can link their external identity on your identity provider (IdP) to their existing account on {% data variables.location.product_location %}. {% data reusables.saml.about-saml-access-enterprise-account %}

{% ifversion ghec %}

If your enterprise is uses {% data variables.product.prodname_emus %}, your members will use accounts provisioned through your IdP. {% data variables.enterprise.prodname_managed_users_caps %} will not use their existing user account on {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)."

{% endif %}

{% ifversion ghec %}

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

{% endif %}

## Viewing and revoking an active SAML session

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.saml.click-person-revoke-session %}
{% data reusables.saml.saml-identity-linked %}
{% data reusables.saml.view-saml-sessions %}
{% data reusables.saml.revoke-saml-session %}

{% ifversion ghec %}

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

* "[AUTOTITLE](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"

{% endif %}
