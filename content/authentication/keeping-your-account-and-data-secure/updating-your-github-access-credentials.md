---
title: Updating your GitHub access credentials
intro: '{% data variables.product.product_name %} credentials include{% ifversion not ghae %} not only your password, but also{% endif %} the access tokens, SSH keys, and application API tokens you use to communicate with {% data variables.product.product_name %}. Should you have the need, you can reset all of these access credentials yourself.'
redirect_from:
  - /articles/rolling-your-credentials
  - /articles/how-can-i-reset-my-password
  - /articles/updating-your-github-access-credentials
  - /github/authenticating-to-github/updating-your-github-access-credentials
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/updating-your-github-access-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Update access credentials
---
{% ifversion not ghae %}
## Requesting a new password

1. To request a new password, visit {% ifversion fpt or ghec %}https://{% data variables.product.product_url %}/password_reset{% else %}`https://{% data variables.product.product_url %}/password_reset`{% endif %}.
2. Enter the email address associated with your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, then click **Send password reset email.** The email will be sent to the backup email address if you have one configured.
  ![Password reset email request dialog](/assets/images/help/settings/password-recovery-email-request.png)
3. We'll email you a link that will allow you to reset your password. You must click on this link within 3 hours of receiving the email. If you didn't receive an email from us, make sure to check your spam folder.
4. If you have enabled two-factor authentication, you will be prompted for your 2FA credentials:
{% ifversion fpt or ghec %}
   * If you have {% data variables.product.prodname_mobile %}, you will be sent a push notification to verify your identity. Open the push notification or the {% data variables.product.prodname_mobile %} app and enter the two-digit code shown to you on the password reset page in your browser.
   ![Two-factor {% data variables.product.prodname_mobile %} authentication prompt](/assets/images/help/2fa/2fa-mobile-challenge-password-reset.png)
      * To skip using GitHub Mobile to verify, click **Enter two-factor authentication or recovery code**.
      ![Two-factor GitHub Mobile authentication prompt on {% data variables.product.product_name %} with "Enter two-factor authentication or recovery code" highlighted](/assets/images/help/2fa/2fa-github-mobile-password-reset.png)
{% endif %}
   * Type your authentication code or one of your recovery codes and click **Verify**.
      ![Two-factor authentication prompt](/assets/images/help/2fa/2fa-password-reset.png)
     * If you have added a security key to your account, click **Use security key** instead of typing an authentication code.
     {% ifversion fpt or ghec %}
     * If you have set up [{% data variables.product.prodname_mobile %}](https://github.com/mobile), click **Authenticate with GitHub Mobile** instead.
     {% endif %}
5. Type a new password, confirm your new password, and click **Change password**. For help creating a strong password, see "[Creating a strong password](/articles/creating-a-strong-password)."
  {% ifversion fpt or ghec %}![Password recovery box](/assets/images/help/settings/password-recovery-page.png){% else %}
  ![Password recovery box](/assets/images/enterprise/settings/password-recovery-page.png){% endif %}

{% tip %}

To avoid losing your password in the future, we suggest using a secure password manager, like [LastPass](https://lastpass.com/) or [1Password](https://1password.com/).

{% endtip %}

## Changing an existing password

{% data reusables.repositories.blocked-passwords %}

1. {% data variables.product.signin_link %} to {% data variables.product.product_name %}.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
4. Under "Change password", type your old password, a strong new password, and confirm your new password. For help creating a strong password, see "[Creating a strong password](/articles/creating-a-strong-password)"
5. Click **Update password**.

{% tip %}

For greater security, enable two-factor authentication in addition to changing your password. See [About two-factor authentication](/articles/about-two-factor-authentication) for more details.

{% endtip %}
{% endif %}
## Updating your access tokens

See "[Reviewing your authorized integrations](/articles/reviewing-your-authorized-integrations)" for instructions on reviewing and deleting access tokens. To generate new access tokens, see "[Creating a {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)."

{% ifversion not ghae %}

If you have reset your account password and would also like to trigger a sign-out from the {% data variables.product.prodname_mobile %} app, you can revoke your authorization of the "GitHub iOS" or "GitHub Android" OAuth App. This will sign out all instances of the {% data variables.product.prodname_mobile %} app associated with your account. For additional information, see "[Reviewing your authorized integrations](/authentication/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations)."

{% endif %}

## Updating your SSH keys

See "[Reviewing your SSH keys](/articles/reviewing-your-ssh-keys)" for instructions on reviewing and deleting SSH keys. To generate and add new SSH keys, see "[Generating an SSH key](/articles/generating-an-ssh-key)."

## Resetting API tokens

If you have any applications registered with {% data variables.product.product_name %}, you'll want to reset their OAuth tokens. For more information, see the "[Reset an authorization](/rest/reference/apps#reset-an-authorization)" endpoint.

{% ifversion not ghae %}
## Preventing unauthorized access

For more tips on securing your account and preventing unauthorized access, see "[Preventing unauthorized access](/articles/preventing-unauthorized-access)."
{% endif %}
