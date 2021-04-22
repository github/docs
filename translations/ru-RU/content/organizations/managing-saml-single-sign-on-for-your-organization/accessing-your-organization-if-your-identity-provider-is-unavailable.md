---
title: Accessing your organization if your identity provider is unavailable
intro: 'Organization administrators can sign into {% data variables.product.product_name %} even if their identity provider is unavailable by bypassing single sign-on and using their recovery codes.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/accessing-your-organization-if-your-identity-provider-is-unavailable
  - /github/setting-up-and-managing-organizations-and-teams/accessing-your-organization-if-your-identity-provider-is-unavailable
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---

Organization administrators can use [one of their downloaded or saved recovery codes](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes) to bypass single sign-on. You may have saved these to a password manager, such as [LastPass](https://lastpass.com/), [1Password](https://1password.com/), or [Keeper](https://keepersecurity.com/).

{% note %}

**Note:** You can only use recovery codes once and you must use them in consecutive order. Recovery codes grant access for 24 hours.

{% endnote %}

1. At the bottom of the single sign-on dialog, click **Use a recovery code** to bypass single sign-on. ![Link to enter your recovery code](/assets/images/help/saml/saml_use_recovery_code.png)
2. In the "Recovery Code" field, type your recovery code. ![Field to enter your recovery code](/assets/images/help/saml/saml_recovery_code_entry.png)
3. Click **Verify**. ![Button to verify your recovery code](/assets/images/help/saml/saml_verify_recovery_codes.png)

After you've used a recovery code, make sure to note that it's no longer valid. You will not be able to reuse the recovery code.

### Дополнительная литература

- "[About identity and access management with SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
