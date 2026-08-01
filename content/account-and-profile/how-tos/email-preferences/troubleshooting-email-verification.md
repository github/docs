---
title: Troubleshooting email verification
intro: Troubleshoot problems when verifying your email address.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Troubleshoot email verification
contentType: how-tos
redirect_from:
  - /account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/troubleshooting-email-verification
category:
  - Manage your email
---

## Unable to send verification email

{% data reusables.user-settings.no-verification-disposable-emails %}

{% ifversion fpt or ghec %}

## Account is restricted until you change your email address

If your account is restricted and you're told to change the email address on your account before access can be restored, you must update your account email and then ask {% data variables.contact.github_support %} to review the restriction.

1. Add a different, non-disposable email address and set it as your primary email address. For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/changing-your-primary-email-address).
1. Verify your new primary email address. For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address).
1. Remove the previous email address from your account.
1. Contact {% data variables.contact.github_support %} and ask for a review of the restriction.

Using a `noreply` email address can help protect your commit privacy, but it does not replace the need for a valid account email address. For more information, see [AUTOTITLE](/account-and-profile/reference/email-addresses-reference#your-noreply-email-address).

{% endif %}

## Error page after clicking verification link

The verification link expires after 24 hours. If you don't verify your email within 24 hours, you can request another email verification link.

If you click on the link in the confirmation email within 24 hours and you are directed to an error page, you should ensure that you're signed into the correct account on {% data variables.product.github %}.

1. Sign out of your account.
1. Quit and restart your browser.
1. Sign in to your account.
1. Click on the verification link in the email we sent you.

## Email is already verified by another user

If you see the error message `Error adding EMAIL: Email is already verified by another user`, you must either unverify the email for the other account before proceeding, or choose a different email address to verify.

To unverify an email address, delete it in your email settings, then optionally re-add it without verifying to keep any commits linked to your account. See [AUTOTITLE](/account-and-profile/how-tos/email-preferences/changing-your-primary-email-address).

## Next steps

* For reference information, see [AUTOTITLE](/account-and-profile/reference/email-addresses-reference).
