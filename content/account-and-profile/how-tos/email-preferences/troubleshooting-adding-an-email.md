---
title: Troubleshooting adding an email
intro: Troubleshoot problems when adding an email address to your {% data variables.product.github %} account.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
  - Troubleshooting
shortTitle: Troubleshoot adding an email
contentType: how-tos
redirect_from:
  - /account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/troubleshooting-adding-an-email
---

## Email already in use

If you see the error message `Error adding EMAIL: email is already in use`, it means the email address is already linked to another {% data variables.product.prodname_dotcom %} account. An email address can only be associated with one {% data variables.product.prodname_dotcom %} account at a time.

To use this email with a different account, follow these steps:

1. Sign in to the account currently linked to the email address and remove it from that account.
1. If you don’t have access to the account, request a password reset email to recover it. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials).

## Email linked to a {% data variables.enterprise.prodname_managed_user %}

If the email address that you are trying to add is provided to you by your organization, you may see the `Error adding EMAIL: email is already in use` error when your organization has created a {% data variables.enterprise.prodname_managed_user %} for you in their {% data variables.enterprise.prodname_emu_enterprise %}.

Reach out to your site administrator or internal IT helpdesk to learn about their deployment of {% data variables.product.prodname_ghe_cloud %} and how to access the account. You may be able to sign into the {% data variables.product.prodname_ghe_cloud %} application via the organization's identity provider (IdP).

If you want to use your email address with a personal account, you must sign in to your {% data variables.enterprise.prodname_managed_user %} and unverify the email in your account settings. The email will remain linked to your {% data variables.enterprise.prodname_managed_user %}, allowing you to access the account through your organization's IdP.

However, some third-party apps or services may not function properly with a {% data variables.enterprise.prodname_managed_user %} that has an unverified email address.

## Next steps

* For reference information, see [AUTOTITLE](/account-and-profile/reference/email-addresses-reference).
