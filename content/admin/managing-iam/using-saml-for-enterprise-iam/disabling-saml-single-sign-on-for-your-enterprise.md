---
title: Disabling SAML single sign-on for your enterprise
intro: You can disable SAML single sign-on (SSO) for your enterprise account.
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
type: how_to
shortTitle: Disable SAML SSO
redirect_from:
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/disabling-saml-single-sign-on-for-your-enterprise
---

## About disabled SAML SSO for your enterprise

After you disable SAML SSO for your enterprise, the following effects apply:

* All external identities for your enterprise will be removed. For more information, see - All external identities for the enterprise will be removed. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)."
* Any SAML settings configured for individual organizations within the enterprise will take effect. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)."

## Disabling SAML

{% data reusables.enterprise-accounts.access-enterprise %}

   {% note %}

   **Note:** If you're unable to access the enterprise because your IdP is unavailable, you can use a recovery code to bypass SSO. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)."

   {% endnote %}

{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "SAML single sign-on", deselect **Require SAML authentication**.
1. Click **Save**.

## Further reading

* "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/disabling-authentication-for-enterprise-managed-users)"
