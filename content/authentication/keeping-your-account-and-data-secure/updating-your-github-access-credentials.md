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
1. Enter the email address associated with your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, then click **Send password reset email.** The email will be sent to the backup email address if you have one configured.
1. We'll email you a link that will allow you to reset your password. You must click on this link within 3 hours of receiving the email. If you didn't receive an email from us, make sure to check your spam folder.
1. If you have enabled two-factor authentication, you will be prompted for your 2FA credentials:
{% ifversion fpt or ghec %}
   - If you have {% data variables.product.prodname_mobile %}, you will be sent a push notification to verify your identity. Open the push notification or the {% data variables.product.prodname_mobile %} app and enter the two-digit code shown to you on the password reset page in your browser.
      - To skip using {% data variables.product.prodname_mobile %} to verify, click **Enter two-factor authentication or recovery code**.
{% endif %}
   - Type your authentication code or one of your recovery codes and click **Verify**.
     - If you have added a security key to your account, click **Use security key** instead of typing an authentication code.
     {% ifversion fpt or ghec %}
     - If you have set up [{% data variables.product.prodname_mobile %}](https://github.com/mobile), click **Authenticate with {% data variables.product.prodname_mobile %}** instead.
     {% endif %}
     {% ifversion 2fa-recovery-flow %}
     - If you have forgotten your password and you've lost access to your two-factor authentication credentials, click **Start a 2FA recovery request**. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials)."
     {% endif %}
1. In the text field under **Password**, type a new password. Then, in the text field under **Confirm password**, type the password again.
1. Click **Change password**. For help creating a strong password, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-strong-password)."

{% tip %}

To avoid losing your password in the future, we suggest using a secure password manager.

{% endtip %}

## Changing an existing password

{% data reusables.repositories.blocked-passwords %}

1. {% data variables.product.signin_link %} to {% data variables.product.product_name %}.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
1. Under "Change password", type your old password, a strong new password, and confirm your new password. For help creating a strong password, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-strong-password)"
1. Click **Update password**.

{% tip %}

For greater security, enable two-factor authentication in addition to changing your password. See [About two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication) for more details.

{% endtip %}
{% endif %}

## Updating your access tokens

See "[AUTOTITLE](/apps/using-github-apps/reviewing-your-authorized-integrations)" for instructions on reviewing and deleting access tokens. To generate new access tokens, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

{% ifversion not ghae %}

If you have reset your account password and would also like to trigger a sign-out from the {% data variables.product.prodname_mobile %} app, you can revoke your authorization of the "GitHub iOS" or "GitHub Android" {% data variables.product.prodname_oauth_app %}. This will sign out all instances of the {% data variables.product.prodname_mobile %} app associated with your account. For additional information, see "[AUTOTITLE](/apps/using-github-apps/reviewing-your-authorized-integrations)."

{% endif %}

## Updating your SSH keys

See "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys)" for instructions on reviewing and deleting SSH keys. To generate and add new SSH keys, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh)."

## Resetting API tokens

If you have any applications registered with {% data variables.product.product_name %}, you'll want to reset their OAuth tokens. For more information, see the "[AUTOTITLE](/rest/apps#reset-an-authorization)" endpoint.

{% ifversion not ghae %}

## Preventing unauthorized access

For more tips on securing your account and preventing unauthorized access, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/preventing-unauthorized-access)."
{% endif %}
