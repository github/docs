---
title: Verifying your email address
intro: 'Verifying your primary email address ensures strengthened security, allows {% data variables.product.prodname_dotcom %} staff to better assist you if you forget your password, and gives you access to more features on {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/troubleshooting-email-verification/
  - /articles/setting-up-email-verification/
  - /articles/verifying-your-email-address
versions:
  free-pro-team: '*'
topics:
  - accounts
---

### About email verification

You can verify your email address after signing up for a new account, or when you add a new email address. If an email address is undeliverable or bouncing, it will be unverified.

If you do not verify your email address, you will not be able to:
  - Create or fork repositories
  - Create issues or pull requests
  - Comment on issues, pull requests, or commits
  - Authorize {% data variables.product.prodname_oauth_app %} applications
  - Generate personal access tokens
  - Receive email notifications
  - Star repositories
  - Create or update project boards, including adding cards
  - Create or update gists
  - Create or use {% data variables.product.prodname_actions %}
  - Sponsor developers with {% data variables.product.prodname_sponsors %}

{% warning %}

**Warnings**:

- {% data reusables.user_settings.no-verification-disposable-emails %}
- {% data reusables.user_settings.verify-org-approved-email-domain %}

{% endwarning %}

### Verifying your email address

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
1. Under your email address, click **Resend verification email**. ![Resend verification email link](/assets/images/help/settings/email-verify-button.png)
4. {% data variables.product.prodname_dotcom %} will send you an email with a link in it. After you click that link, you'll be taken to your {% data variables.product.prodname_dotcom %} dashboard and see a confirmation banner. ![Banner confirming that your email was verified](/assets/images/help/settings/email-verification-confirmation-banner.png)

### Troubleshooting email verification

#### Unable to send verification email

{% data reusables.user_settings.no-verification-disposable-emails %}

#### Error page after clicking verification link

The verification link expires after 24 hours. If you don't verify your email within 24 hours, you can request another email verification link. For more information, see "[Verifying your email address](/articles/verifying-your-email-address)."

If you click on the link in the confirmation email within 24 hours and you are directed to an error page, you should ensure that you're signed into the correct {% data variables.product.prodname_dotcom %} account.

1. {% data variables.product.signout_link %} of your personal {% data variables.product.prodname_dotcom %} account.
2. Quit and restart your browser.
3. {% data variables.product.signin_link %} to your personal {% data variables.product.prodname_dotcom %} account.
4. Click on the verification link in the email we sent you.

### Дополнительная литература

- "[Changing your primary email address](/articles/changing-your-primary-email-address)"
