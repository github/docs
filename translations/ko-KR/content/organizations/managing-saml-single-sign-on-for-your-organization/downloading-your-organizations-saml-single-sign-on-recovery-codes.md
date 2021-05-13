---
title: Downloading your organization's SAML single sign-on recovery codes
intro: 'Organization administrators should download their organization''s SAML single sign-on recovery codes to ensure that they can access {% data variables.product.product_name %} even if the identity provider for the organization is unavailable.'
redirect_from:
  - /articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes
  - /articles/downloading-your-organizations-saml-single-sign-on-recovery-codes
  - /github/setting-up-and-managing-organizations-and-teams/downloading-your-organizations-saml-single-sign-on-recovery-codes
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

Recovery codes should not be shared or distributed. We recommend saving them with a password manager such as [LastPass](https://lastpass.com/), [1Password](https://1password.com/), or [Keeper](https://keepersecurity.com/).

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
5. Under "SAML single sign-on", in the note about recovery codes, click **Save your recovery codes**. ![Link to view and save your recovery codes](/assets/images/help/saml/saml_recovery_codes.png)
6. Save your recovery codes by clicking **Download**, **Print**, or **Copy**. ![Buttons to download, print, or copy your recovery codes](/assets/images/help/saml/saml_recovery_code_options.png)

  {% note %}

  **Note:** Your recovery codes will help get you back into {% data variables.product.product_name %} if your IdP is unavailable. If you generate new recovery codes the recovery codes displayed on the "Single sign-on recovery codes" page are automatically updated.

  {% endnote %}

7. Once you use a recovery code to regain access to {% data variables.product.product_name %}, it cannot be reused. Access to {% data variables.product.product_name %} will only be available for 24 hours before you'll be asked to sign in using single sign-on.

### 더 읽을거리

- "[About identity and access management with SAML single sign-on](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Accessing your organization if your identity provider is unavailable](/articles/accessing-your-organization-if-your-identity-provider-is-unavailable)"
