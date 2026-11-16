---
title: Sudo mode
intro: 'To confirm access to your account before you perform a protected high-impact action, {% data variables.location.product_location %} prompts for authentication.'
redirect_from:
  - /articles/sudo-mode
  - /github/authenticating-to-github/sudo-mode
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/sudo-mode
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Manage access credentials
---

## About sudo mode

To maintain the security of your account when you perform a protected high-impact action on {% data variables.location.product_location %}, you must authenticate even though you're already signed in. {% data variables.product.company_short %} requires authentication for actions that can affect access to accounts and resources, including but not limited to:

* **Account**: Deleting your user account, modifying an associated email address, adding a new SSH key, or authorizing third-party applications
* **Developer settings**: Generating or removing a client secret, creating {% data variables.product.pat_generic_plural %}, revoking all tokens, or transferring a {% data variables.product.prodname_oauth_app %}
* **Webhooks**: Creating, viewing, editing, or deleting repository, organization, or enterprise webhooks; viewing or redelivering webhook deliveries
* **Organization membership**: Sending or editing organization invitations, adding members directly, adding team members, or changing team roles
* **Organization security**: Changing two-factor authentication enforcement or other organization security settings
* **Enterprise settings**: Creating organizations in an enterprise or changing app access settings for an identity provider (IdP) IP allow list
* **Rulesets**: Creating and modifying rulesets at organization and repository level.
* **Recovery codes**: Viewing, downloading, printing, or regenerating authentication or SSO recovery codes

After you authenticate to perform a sensitive action, your session is temporarily in "sudo mode." In sudo mode, you can perform sensitive actions without authentication. {% data variables.product.github %} has a two-hour session timeout period before prompting you for authentication again. During this time, any sensitive action that you perform will reset the timer.

{% ifversion ghes %}

> [!NOTE]
> If {% data variables.location.product_location_enterprise %} uses an external authentication method like CAS or SAML SSO, you will not receive prompts to enter sudo mode. For more information, contact your site administrator.

{% endif %}
{% ifversion ghec %}

> [!NOTE]
> If your enterprise uses {% data variables.product.prodname_emus %}, only the setup user will receive prompts to enter sudo mode, as {% data variables.enterprise.prodname_managed_users %} don't have credentials stored on {% data variables.product.github %}.

{% endif %}

{% ifversion proof-of-presence %}

## Proof of Presence for enterprise actions

Enterprises can extend sudo mode with Proof of Presence (PoP). For protected high-impact actions, PoP requires you to reauthenticate through your enterprise's identity provider before the action can proceed. Follow the identity provider's prompts, including any required multi-factor authentication, then return to {% data variables.product.github %} to complete the action.

{% data reusables.enterprise-accounts.proof-of-presence-supported-idps %} For more information, see [AUTOTITLE](/admin/configuring-settings/hardening-security-for-your-enterprise/configuring-proof-of-presence).

{% endif %}

## Confirming access for sudo mode

To confirm access for sudo mode, you can authenticate with your password. Optionally, you can use a different authentication method, like a passkey, {% ifversion fpt or ghec %}a security key, {% data variables.product.prodname_mobile %}, or a 2FA code{% elsif ghes %}a security key or a 2FA code{% endif %}.

* [Confirming access using a passkey](#confirming-access-using-a-passkey)

* [Confirming access using a security key](#confirming-access-using-a-security-key)
{%- ifversion fpt or ghec %}
* [Confirming access using GitHub Mobile](#confirming-access-using-github-mobile)
{%- endif %}
* [Confirming access using a 2FA code](#confirming-access-using-a-2fa-code)
* [Confirming access using your password](#confirming-access-using-your-password)
* [Confirming access using your social login email](#confirming-access-using-your-social-login-email)

### Confirming access using a passkey

You must have a passkey registered to your account to confirm access to your account for sudo mode using a passkey. See [AUTOTITLE](/authentication/authenticating-with-a-passkey/about-passkeys).

### Confirming access using a security key

You must configure two-factor authentication (2FA) for your account using a security key to confirm access to your account for sudo mode using the security key. For more information, see [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key).

When prompted to authenticate for sudo mode, click **Use security key**, then follow the prompts.

{% ifversion fpt or ghec %}

### Confirming access using {% data variables.product.prodname_mobile %}

You must install and sign into {% data variables.product.prodname_mobile %} to confirm access to your account for sudo mode using the app. For more information, see [AUTOTITLE](/get-started/using-github/github-mobile).

1. When prompted to authenticate for sudo mode, click **Use {% data variables.product.prodname_mobile %}**.
1. Open {% data variables.product.prodname_mobile %}. {% data variables.product.prodname_dotcom %} will display numbers that you must enter in {% data variables.product.prodname_mobile %} to approve the request.
1. In {% data variables.product.prodname_mobile %}, type the numbers displayed.

{% endif %}

### Confirming access using a 2FA code

You must configure 2FA using a TOTP mobile app to confirm access to your account for sudo mode using a 2FA code. For more information, see [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

When prompted to authenticate for sudo mode, type the authentication code from your TOTP mobile app, then click **Verify**.

{% ifversion fpt or ghec %}Text messages are not supported for use on the sudo prompt. If you have registered SMS as the only 2FA method on your account, you'll be asked for your password to enter sudo mode.
{% endif %}

### Confirming access using your password

When prompted to authenticate for sudo mode, type your password, then click **Confirm**.

### Confirming access using your social login email

Before you can access sudo mode, you must first configure social login. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-authentication-to-github).

When prompted to authenticate for sudo mode, type the authentication code sent to your social login email account, then click **Verify**. If you dont receive the email within few minutes, check your spam folder.
