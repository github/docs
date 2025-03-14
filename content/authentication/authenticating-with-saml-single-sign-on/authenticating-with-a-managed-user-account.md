---
title: 'Authenticating with {% data variables.product.prodname_emus %}'
shortTitle: Authenticate as a managed user
intro: 'Learn how to authenticate to access an {% data variables.enterprise.prodname_emu_enterprise %} on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
allowTitleToDifferFromFilename: true
---

If you use a {% data variables.enterprise.prodname_managed_user %}, you must authenticate through your identity provider (IdP) to access {% data variables.product.prodname_dotcom %}. The location where you can authenticate depends on whether your enterprise uses SAML or OIDC authentication.

## Supported authentication locations

Authentication location | SAML | OIDC
--- | --- | --- |
IdP application portal | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %}
Login page on {% data variables.product.prodname_dotcom %} |{% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %}
The profile page for an organization or enterprise on {% data variables.product.prodname_dotcom %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %}

## Authenticating via the login page

1. Navigate to [https://github.com/login](https://github.com/login).
1. In the "Username or email address" text box, enter your username including the underscore and short code.
1. To continue to your IdP, click **Sign in with your identity provider**.
