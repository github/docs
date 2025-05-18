b5011-cd74a 
38f79-c2281 
0bdc6-8f3cb 
2907e-e3c72 
b458d-046e5 
45919-a8271 
32760-7dc6c 
febf7-a0b9c 
13408-80a98 
8577f-0af22 
3186c-ddab3 
c65ed-c2cbf 
10fd3-e9df4 
0bbfa-72fc8 
7a715-66fb5 
074dc-909c6---
title: Accessing your enterprise account if your identity provider is unavailable
shortTitle: Access your enterprise account
intro: 'You can sign into {% data variables.product.github %} even if your identity provider is unavailable by bypassing single sign-on (SSO) with a recovery code.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can use a recovery code to access an enterprise account.
redirect_from:
  - /admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable
---

## About recovery codes

You can use a recovery code to access your enterprise account when an authentication configuration error or an issue with your identity provider (IdP) prevents you from using SSO.

In order to access your enterprise account this way, you must have previously downloaded and stored the recovery codes for your enterprise. For more information, see [AUTOTITLE](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes).

{% data reusables.saml.recovery-code-caveats %}

## Using a recovery code

> [!NOTE]
> If your enterprises uses {% data variables.product.prodname_emus %}, you must sign in as the setup user to use a recovery code.

1. Attempt to access the enterprise account.
{% data reusables.saml.recovery-code-access %}
