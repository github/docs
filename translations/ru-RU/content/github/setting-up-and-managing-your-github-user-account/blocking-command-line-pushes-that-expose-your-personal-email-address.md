---
title: Blocking command line pushes that expose your personal email address
intro: 'If you''ve chosen to keep your email address private when performing web-based operations, you can also choose to block command line pushes that may expose your personal email address.'
redirect_from:
  - /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  free-pro-team: '*'
topics:
  - Accounts
  - Notifications
---

When you push commits from the command line, the email address that you've [set in Git](/articles/setting-your-commit-email-address) is associated with your commits. This setting blocks you from pushing commits on the command line that use your personal email address.

{% data reusables.user_settings.about-commit-email-addresses %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.keeping_your_email_address_private %}
4. To keep your email address private in commits you push from the command line, select **Block command line pushes that expose my email**. ![Option to block command line pushes that expose your emails](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

### Дополнительная литература

- "[Setting your commit email address](/articles/setting-your-commit-email-address)"
