---
title: Downloading your enterprise account's single sign-on recovery codes
shortTitle: Download recovery codes
intro: 'To ensure that you can access {% data variables.product.github %} if your identity provider (IdP) is unavailable, you should download your enterprise account''s single sign-on (SSO) recovery codes.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-saml-single-sign-on-recovery-codes
  - /admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes
permissions: Enterprise owners can download the SSO recovery codes for the enterprise account.
---

In the event that your IdP is unavailable, you can use a recovery code to sign in and access your enterprise on {% data variables.product.github %}. For more information, see [AUTOTITLE](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable).

If you did not save your recovery codes when you configured SSO, you can still access the codes from your enterprise's settings.

## Downloading codes for an enterprise with personal accounts

{% data reusables.enterprise-accounts.access-enterprise-personal-accounts %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}

1. Under "Require SAML authentication", click **Save your recovery codes**.

   ![Screenshot of the "Authentication security" screen. The "Save your recovery codes" hyperlink is highlighted with an orange outline.](/assets/images/help/enterprises/saml-recovery-codes-link.png)
1. To save your recovery codes, click **Download**, **Print**, or **Copy**.

## Downloading codes for an enterprise with {% data variables.product.prodname_emus %}

{% data reusables.enterprise-accounts.access-enterprise-emu %}
{% data reusables.enterprise-accounts.identity-provider-tab %}
{% data reusables.enterprise-accounts.sso-configuration %}

1. Under either "SAML single sign-on" or "OIDC single sign-on", click **Save your recovery codes**.

1. To save your recovery codes, click **Download**, **Print**, or **Copy**.
