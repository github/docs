---
title: Preventing unauthorized access
intro: 'You may be alerted to a security incident in the media, such as the discovery of the [Heartbleed bug](http://heartbleed.com/), or your computer could be stolen while you''re signed in to {% data variables.location.product_location %}. In such cases, changing your password prevents any unintended future access to your account and projects.'
redirect_from:
  - /articles/preventing-unauthorized-access
  - /github/authenticating-to-github/preventing-unauthorized-access
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/preventing-unauthorized-access
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Unauthorized access
---
{% data variables.product.product_name %} requires a password to perform sensitive actions, such as adding new SSH keys, authorizing applications, or modifying team members.

After changing your password, you should perform these actions to make sure that your account is secure:

- Enable two-factor authentication on your account so that access requires more than just a password. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)."
{%- ifversion passkeys %}
- Add a passkey to your account to enable a secure, passwordless login. Passkeys are phishing-resistant, and they don't require memorization or active management. For more information, see "[AUTOTITLE](/authentication/authenticating-with-a-passkey/about-passkeys)" and "[AUTOTITLE](/authentication/authenticating-with-a-passkey/managing-your-passkeys)."{% endif %}
- Review your SSH keys, deploy keys, and authorized integrations and revoke unauthorized or unfamiliar access in your SSH and Applications settings. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys)," "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-deploy-keys)," and "[AUTOTITLE](/apps/using-github-apps/reviewing-your-authorized-integrations)."
{% ifversion fpt or ghec %}
- Verify all your email addresses. If an attacker added their email address to your account, it could allow them to force an unintended password reset. For more information, see "[AUTOTITLE](/get-started/signing-up-for-github/verifying-your-email-address)."
{% endif %}
- Review your account's security log. This provides an overview on various configurations made to your repositories. For example, you can ensure that no private repositories were turned public, or that no repositories were transferred. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)."
- Review the webhooks on your repositories. Webhooks could allow an attacker to intercept pushes made to your repository. For more information, see "[AUTOTITLE](/get-started/exploring-integrations/about-webhooks)."
- Make sure that no new deploy keys were created. This could enable outside servers access to your projects. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys)."
- Review recent commits made to your repositories.
- Review the list of collaborators for each repository.
