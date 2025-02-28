---
title: Verifying your email address
intro: 'Verifying your primary email address ensures strengthened security, allows {% data variables.product.prodname_dotcom %} staff to better assist you if you forget your password, and gives you access to more features on {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/troubleshooting-email-verification
  - /articles/setting-up-email-verification
  - /articles/verifying-your-email-address
  - /github/getting-started-with-github/verifying-your-email-address
  - /github/getting-started-with-github/signing-up-for-github/verifying-your-email-address
  - /get-started/signing-up-for-github/verifying-your-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Verify your email address
---

## About email verification for personal accounts

You can verify your email address after signing up for a new account, or when you add a new email address. If an email address is undeliverable or bouncing, it will be unverified.

If you do not verify your email address, you will not be able to:
* Create or fork repositories
* Create issues or pull requests
* Comment on issues, pull requests, or commits
* Authorize {% data variables.product.prodname_oauth_app %} applications
* Generate {% data variables.product.pat_generic %}s
* Receive email notifications
* Star repositories
* Create or update projects
* Create or update gists
* Create or use {% data variables.product.prodname_actions %}
* Sponsor developers with {% data variables.product.prodname_sponsors %}
* Accept organization invitations

> [!WARNING]
> * {% data reusables.user-settings.no-verification-disposable-emails %}
> * {% data reusables.user-settings.verify-org-approved-email-domain %}

## About email verification for {% data variables.enterprise.prodname_managed_users %}

Enterprise Managed Users (EMUs) must now prove ownership of their email addresses to secure their accounts and prevent any accidental data leaks by third party GitHub Apps and OAuth applications.
If you are a member of an {% data variables.enterprise.prodname_emu_enterprise %} and your account was created from August 2024, your email address is unverified by default.

Having an unverified email address does not affect most actions you can take on {% data variables.product.prodname_dotcom %}. However, we **recommend email verification** for additional account security and to prevent potential exploitation of third-party {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} which may not have followed our best practices around secure authentication methods for apps (see [AUTOTITLE](/apps/oauth-apps/building-oauth-apps/best-practices-for-creating-an-oauth-app) and [AUTOTITLE](/apps/creating-github-apps/about-creating-github-apps/best-practices-for-creating-a-github-app)).

Until you verify your email address, your account will use a placeholder email address with your enterprise's shortcode appended for certain operations. For example, the [AUTOTITLE](/rest/users/users) and [AUTOTITLE](/rest/users/emails) will return `email+shortcode@domain.com`. In rare cases, you may find that your company's email provider does not handle the placeholder email correctly, or that the placeholder prevents you from accessing some third-party {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}.

You cannot verify an email address for your {% data variables.enterprise.prodname_managed_user %} if the email address is already verified by another account on {% data variables.product.prodname_dotcom_the_website %}. To verify the email, you will need to unverify the email address on the conflicting account, then verify it for your {% data variables.enterprise.prodname_managed_user %}. See [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/changing-your-primary-email-address).

Once you verify an email with a {% data variables.enterprise.prodname_managed_user %}, you won't be able to use the email to sign up for a personal account on {% data variables.product.prodname_dotcom_the_website %}.

## Verifying your email address

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.emails %}
1. Under your email address, click **Resend verification email**.

   ![Screenshot of email addresses on the "Emails" page. Under an email address, a link, labeled "Resend verification email," is outlined in orange.](/assets/images/help/settings/email-verify-button.png)
1. {% data variables.product.prodname_dotcom %} will send you an email with a link in it. After you click that link, you'll be taken to your {% data variables.product.prodname_dotcom %} dashboard and see a confirmation banner.

## Troubleshooting email verification

### Unable to send verification email

{% data reusables.user-settings.no-verification-disposable-emails %}

### Error page after clicking verification link

The verification link expires after 24 hours. If you don't verify your email within 24 hours, you can request another email verification link. For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address#verifying-your-email-address).

If you click on the link in the confirmation email within 24 hours and you are directed to an error page, you should ensure that you're signed into the correct account on {% data variables.product.github %}.

1. Sign out of your account.
1. Quit and restart your browser.
1. Sign in to your account.
1. Click on the verification link in the email we sent you.

### Email is already verified by another user

If you see the error message `Error adding EMAIL: Email is already verified by another user`, you must either unverify the email for the other account before proceeding, or choose a different email address to verify.

To unverify an email address, delete it in your email settings, then optionally re-add it without verifying to keep any commits linked to your account. See [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/changing-your-primary-email-address).

## Further reading

* [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/changing-your-primary-email-address)
