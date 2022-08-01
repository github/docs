---
title: Accessing your enterprise account if your identity provider is unavailable
shortTitle: Access your enterprise account
intro: 'You can sign into {% data variables.product.product_name %} even if your identity provider is unavailable by bypassing single sign-on (SSO) with a recovery code.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can use a recovery code to access an enterprise account.
---

You can use a recovery code to access your enterprise account when a authentication configuration error or an issue with your identity provider (IdP) prevents you from using SSO.

In order to access your enterprise account this way, you must have previously downloaded and stored the recovery codes for your enterprise. For more information, see "[Downloading your enterprise account's single sign-on recovery codes](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)."

{% data reusables.saml.recovery-code-caveats %}

{% note %}

**Note:** If your enterprises uses {% data variables.product.prodname_emus %}, you must sign in as the setup user to use a recovery code.

{% endnote %}

{% data reusables.saml.recovery-code-access %}
