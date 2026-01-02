---
title: Updating your GitHub access credentials
intro: '{% data variables.product.github %} credentials include your password, access tokens, SSH keys, and application API tokens used to communicate with {% data variables.product.github %}. You can reset all of these access credentials yourself.'
redirect_from:
  - /articles/rolling-your-credentials
  - /articles/how-can-i-reset-my-password
  - /articles/updating-your-github-access-credentials
  - /github/authenticating-to-github/updating-your-github-access-credentials
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/updating-your-github-access-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Update access credentials
---
{% ifversion ghec %}

> [!NOTE] {% data reusables.enterprise-data-residency.access-domain %}

{% endif %}

## Requesting a new password

{% data reusables.accounts.request-password-reset-link %}

1. If you have enabled two-factor authentication, you will be prompted for your 2FA credentials:
   * If you have added a passkey or a security key to your account, click **Use passkey or security key**.
   {% ifversion fpt or ghec %}
   * If you have set up [{% data variables.product.prodname_mobile %}](https://github.com/mobile), you will be sent a push notification to verify your identity. If you didn't receive a notification, click "More options", then **Authenticate with {% data variables.product.prodname_mobile %}**.
   {% endif %}
   * Alternatively, type your TOTP or SMS authentication code, or one of your recovery codes, and click **Verify**.

   {% ifversion 2fa-recovery-flow %}
   > [!NOTE]
   > If you've lost access to your two-factor authentication credentials and your recovery codes, you can start account recovery request. See [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials#recovering-without-your-password-or-two-factor-authentication-credentials).
   {% endif %}
1. In the text field under **Password**, type a new password. Then, in the text field under **Confirm password**, type the password again.
1. Click **Change password**. For help creating a strong password, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-strong-password).

> [!TIP]
> To avoid losing your password in the future, we suggest using a secure password manager.

## Changing an existing password

{% data reusables.repositories.blocked-passwords %}

1. Sign in to {% data variables.product.github %}.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security %}
1. Under "Change password", type your old password, a strong new password, and confirm your new password. For help creating a strong password, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-strong-password).
1. Click **Update password**.

> [!TIP]
> For greater security, enable two-factor authentication in addition to changing your password. See [About two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication) for more details.

## Updating your access tokens

See [AUTOTITLE](/apps/using-github-apps/reviewing-your-authorized-integrations) for instructions on reviewing and deleting access tokens. To generate new access tokens, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

If you have reset your account password and would also like to trigger a sign-out from the {% data variables.product.prodname_mobile %} app, you can revoke your authorization of the "GitHub iOS" or "GitHub Android" {% data variables.product.prodname_oauth_app %}. This will sign out all instances of the {% data variables.product.prodname_mobile %} app associated with your account. For additional information, see [AUTOTITLE](/apps/using-github-apps/reviewing-your-authorized-integrations).

## Updating your SSH keys

See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys) for instructions on reviewing and deleting SSH keys. To generate and add new SSH keys, see [AUTOTITLE](/authentication/connecting-to-github-with-ssh).

## Resetting API tokens

If you have any applications registered with {% data variables.product.github %}, you'll want to reset their OAuth tokens. For more information, see the `PATCH /applications/{client_id}/token` endpoint in [AUTOTITLE](/rest/apps/oauth-applications#reset-a-token).

## Preventing unauthorized access

For more tips on securing your account and preventing unauthorized access, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/preventing-unauthorized-access).
