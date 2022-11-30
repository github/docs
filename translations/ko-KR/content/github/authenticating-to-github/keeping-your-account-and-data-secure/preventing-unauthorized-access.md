---
title: Preventing unauthorized access
intro: 'You may be alerted to a security incident in the media, such as the discovery of the [Heartbleed bug](http://heartbleed.com/), or your computer could be stolen while you''re signed in to {% data variables.product.product_location %}. In such cases, changing your password prevents any unintended future access to your account and projects.'
redirect_from:
  - /articles/preventing-unauthorized-access
  - /github/authenticating-to-github/preventing-unauthorized-access
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Identity
  - Access management
---

{% data variables.product.product_name %} requires a password to perform sensitive actions, such as adding new SSH keys, authorizing applications, or modifying team members.

After changing your password, you should perform these actions to make sure that your account is secure:

- [Enable two-factor authentication](/articles/about-two-factor-authentication) on your account so that access requires more than just a password.
- [Review your SSH keys](/articles/reviewing-your-ssh-keys), [deploy keys](/articles/reviewing-your-deploy-keys), and [authorized integrations](/articles/reviewing-your-authorized-integrations) and revoke unauthorized or unfamiliar access in your SSH and Applications settings.
{% if currentVersion == "free-pro-team@latest" %}
- [Verify all your email addresses](/articles/verifying-your-email-address). If an attacker added their email address to your account, it could allow them to force an unintended password reset.
{% endif %}
- [Review your account's security log](/github/authenticating-to-github/reviewing-your-security-log). This provides an overview on various configurations made to your repositories. For example, you can ensure that no private repositories were turned public, or that no repositories were transferred.
- [Review the webhooks](/articles/creating-webhooks) on your repositories. Webhooks could allow an attacker to intercept pushes made to your repository.
- [Make sure that no new deploy keys](/guides/managing-deploy-keys/#deploy-keys) were created. This could enable outside servers access to your projects.
- Review recent commits made to your repositories.
- Review the list of collaborators for each repository.
