---
title: Adding an email address to your GitHub account
intro: '{% data variables.product.github %} allows you to add as many email addresses to your account as you like. If you set an email address in your local Git configuration, you will need to add it to your account settings in order to connect your commits to your account. For more information about your email address and commits, see [Setting your commit email address](/articles/setting-your-commit-email-address/).'
redirect_from:
  - /articles/adding-an-email-address-to-your-github-account
  - /github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Add an email address
---
{% ifversion fpt or ghec %}

> [!NOTE]
> * {% data reusables.user-settings.no-verification-disposable-emails %}
> * If you're a member of an {% data variables.enterprise.prodname_emu_enterprise %}, you cannot make changes to your email address on {% data variables.product.prodname_dotcom %}. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.emails %}
{% data reusables.user-settings.add_and_verify_email %}
1. If you'd like to associate the email address with your web-based Git operations, select it from the "Primary email address" dropdown menu.

   ![Screenshot of the "Email" settings page. Under "Primary email address," a dropdown menu, labeled with Octocat's email address, is outlined in orange.](/assets/images/help/settings/email-primary.png)

## Troubleshooting adding an email

If you see an error message when you try to add an email address to your account, you may be experiencing one of the following issues.

### Email already in use

If you see the error message `Error adding EMAIL: email is already in use`, it means the email address is already linked to another {% data variables.product.prodname_dotcom %} account. An email address can only be associated with one {% data variables.product.prodname_dotcom %} account at a time.

To use this email with a different account, follow these steps:

1. Sign in to the account currently linked to the email address and remove it from that account.
1. If you don’t have access to the account, request a password reset email to recover it. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials).

### Email linked to a {% data variables.enterprise.prodname_managed_user %}

If the email address that you are trying to add is provided to you by your organization, you may see the `Error adding EMAIL: email is already in use` error when your organization has created a {% data variables.enterprise.prodname_managed_user %} for you in their {% data variables.enterprise.prodname_emu_enterprise %}.

Reach out to your site administrator or internal IT helpdesk to learn about their deployment of {% data variables.product.prodname_ghe_cloud %} and how to access the account. You may be able to sign into the {% data variables.product.prodname_ghe_cloud %} application via the organization's identity provider (IdP).

If you want to use your email address with a personal account, you must sign in to your {% data variables.enterprise.prodname_managed_user %} and unverify the email in your account settings. The email will remain linked to your {% data variables.enterprise.prodname_managed_user %}, allowing you to access the account through your organization's IdP.

However, some third-party apps or services may not function properly with a {% data variables.enterprise.prodname_managed_user %} that has an unverified email address.

## Further reading

* [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences)
