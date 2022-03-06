---
title: Downloading your enterprise account's SAML single sign-on recovery codes
shortTitle: Download recovery codes
intro: 'To ensure that you can access {% data variables.product.product_name %} if your identity provider (IdP) is unavailable, you should download your enterprise account''s SAML single sign-on (SSO) recovery codes.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can download the SAML SSO recovery codes for the enterprise account.
---

In the event that your IdP is unavailable, you can use a recovery code to sign in and access your enterprise on {% data variables.product.product_location %}. For more information, see "[Accessing your enterprise account if your identity provider is unavailable](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)."

If you did not save your recovery codes when you configured SAML SSO, you can still access the codes from your enterprise's settings.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}

1. Under "Require SAML authentication", click **Save your recovery codes**. ![Screenshot of the button to test SAML configuration before enforcing](/assets/images/help/enterprises/saml-recovery-codes-link.png)

2. To save your recovery codes, click **Download**, **Print**, or **Copy**. ![Screenshot of the buttons to download, print, or copy your recovery codes](/assets/images/help/saml/saml_recovery_code_options.png)
