---
title: Accessing your organization if your identity provider is unavailable
intro: 'Organization owners can sign into {% data variables.product.product_name %} even if their identity provider is unavailable by bypassing single sign-on (SSO) and using their recovery codes.'
redirect_from:
  - /articles/accessing-your-organization-if-your-identity-provider-is-unavailable
  - /github/setting-up-and-managing-organizations-and-teams/accessing-your-organization-if-your-identity-provider-is-unavailable
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Unavailable identity provider
permissions: Organization owners can use a recovery code to bypass SAML SSO.
---

## About recovery codes

Organization owners can use one of their downloaded or saved recovery codes to bypass single sign-on. You may have saved these to a password manager. For more information about downloading recovery codes, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/downloading-your-organizations-saml-single-sign-on-recovery-codes)."

{% data reusables.saml.recovery-code-caveats %}

## Using a recovery code

1. Attempt to access the organization.
{% data reusables.saml.recovery-code-access %}
