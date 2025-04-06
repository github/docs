---
title: Blocking command line pushes that expose your personal email address
intro: 'If you''ve chosen to keep your email address private when performing web-based operations, you can also choose to block command line pushes that may expose your personal email address.'
redirect_from:
  - /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Block push with personal email
---
When you push commits from the command line, the email address that you've [set in Git](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address) is associated with your commits. If you enable this setting, each time you push to GitHub, we’ll check the most recent commit. If the author email on that commit is a private email on your GitHub account, we will block the push and warn you about exposing your private email.

{% data reusables.user-settings.about-commit-email-addresses %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.emails %}
{% data reusables.user-settings.keeping_your_email_address_private %}
1. To keep your email address private in commits you push from the command line, select **Block command line pushes that expose my email**.

## Further reading

* "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)"
