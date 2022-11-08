---
title: Accessing GitHub using two-factor authentication
intro: 'With 2FA enabled, you''ll be asked to provide your 2FA authentication code, as well as your password, when you sign in to {% data variables.product.product_name %}.'
redirect_from:
  - /articles/providing-your-2fa-security-code
  - /articles/providing-your-2fa-authentication-code
  - /articles/authenticating-to-github-using-fido-u2f-via-nfc
  - /articles/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Access GitHub with 2FA
---
With two-factor authentication enabled, you'll need to provide an authentication code when accessing {% data variables.product.product_name %} through your browser. If you access {% data variables.product.product_name %} using other methods, such as the API or the command line, you'll need to use an alternative form of authentication. For more information, see "[About authentication to {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)."

## Providing a 2FA code when signing in to the website

After you sign in to {% data variables.product.product_name %} using your password, you'll be prompted to provide an authentication code from {% ifversion fpt or ghec %}a text message or{% endif %} your TOTP app.

{% data variables.product.product_name %} will only ask you to provide your 2FA authentication code again if you've logged out, are using a new device, or your session expires.

### Generating a code through a TOTP application

If you chose to set up two-factor authentication using a TOTP application on your smartphone, you can generate an authentication code for {% data variables.product.product_name %} at any time. In most cases, just launching the application will generate a new code. You should refer to your application's documentation for specific instructions.

If you delete the mobile application after configuring two-factor authentication, you'll need to provide your recovery code to get access to your account. For more information, see "[Recovering your account if you lose your two-factor authentication credentials](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"

{% ifversion fpt or ghec %}

### Receiving a text message

If you set up two-factor authentication via text messages, {% data variables.product.product_name %} will send you a text message with your authentication code.

### Verifying with {% data variables.product.prodname_mobile %}

If you have installed and signed in to {% data variables.product.prodname_mobile %}, you may choose to authenticate with {% data variables.product.prodname_mobile %} for two-factor authentication.

1. Sign in to {% data variables.product.product_name %} with your browser, using your username and password.
2. If you have added a security key to your account, you'll first be prompted to insert and use a security key. To skip using a security key, click **Authenticate with {% data variables.product.prodname_mobile %}**.
  ![Two-factor authentication challenge on {% data variables.product.product_name %} with "Authenticate with {% data variables.product.prodname_mobile %}" highlighted](/assets/images/help/2fa/2fa-select-mobile.png)
3. {% data variables.product.product_name %} will send you a push notification to verify your sign in attempt. Opening the push notification or opening the {% data variables.product.prodname_mobile %} app will display a prompt, asking you to approve or reject this sign in attempt.
  {% note %}

  **Note**: This prompt may require you to enter a two-digit number displayed within the browser you are signing in to.

  {% endnote %}

  ![Two-factor authentication challenge with {% data variables.product.prodname_mobile %} requiring a two-digit input](/assets/images/help/2fa/2fa-mobile-number-challenge.png)

    - Upon approving the login attempt using {% data variables.product.prodname_mobile %}, your browser will complete the sign in attempt automatically.
    - Rejecting the sign in attempt will prevent the authentication from finishing. For more information, see "[Keeping your account and data secure](/authentication/keeping-your-account-and-data-secure)."

{% endif %}

## Using two-factor authentication with the command line

After you've enabled 2FA, you will no longer use your password to access {% data variables.product.product_name %} on the command line. Instead, use Git Credential Manager, a {% data variables.product.pat_generic %}, or an SSH key.

### Authenticating on the command line using Git Credential Manager

[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) is a secure Git credential helper that runs on Windows, macOS, and Linux. For more information about Git credential helpers, see [Avoiding repetition](https://git-scm.com/docs/gitcredentials#_avoiding_repetition) in the Pro Git book.

Setup instructions vary based on your computer's operating system. For more information, see [Download and install](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install) in the GitCredentialManager/git-credential-manager repository.

### Authenticating on the command line using HTTPS

After you've enabled 2FA, you must create a {% data variables.product.pat_generic %} to use as a password when authenticating to {% data variables.product.product_name %} on the command line using HTTPS URLs.

When prompted for a username and password on the command line, use your {% data variables.product.product_name %} username and {% data variables.product.pat_generic %}. The command line prompt won't specify that you should enter your {% data variables.product.pat_generic %} when it asks for your password.

For more information, see "[Creating a {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)."

### Authenticating on the command line using SSH

Enabling 2FA doesn't change how you authenticate to {% data variables.product.product_name %} on the command line using SSH URLs. For more information about setting up and using an SSH key, see "[Connecting to {% data variables.product.prodname_dotcom %} with SSH](/articles/connecting-to-github-with-ssh/)."

## Using two-factor authentication to access a repository using Subversion

When you access a repository via Subversion, you must provide a {% data variables.product.pat_generic %} instead of entering your password. For more information, see "[Creating a {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)."

## Troubleshooting

If you lose access to your two-factor authentication credentials, you can use your recovery codes or another recovery method (if you've set one up) to regain access to your account. For more information, see "[Recovering your account if you lose your 2FA credentials](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)."

If your authentication fails several times, you may wish to synchronize your phone's clock with your mobile provider. Often, this involves checking the "Set automatically" option on your phone's clock, rather than providing your own time zone.

## Further reading

- "[About two-factor authentication](/articles/about-two-factor-authentication)"
- "[Configuring two-factor authentication](/articles/configuring-two-factor-authentication)"
- "[Configuring two-factor authentication recovery methods](/articles/configuring-two-factor-authentication-recovery-methods)"
- "[Recovering your account if you lose your two-factor authentication credentials](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
