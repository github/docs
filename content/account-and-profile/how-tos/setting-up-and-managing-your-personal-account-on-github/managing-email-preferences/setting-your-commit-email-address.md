---
title: Setting your commit email address
intro: 'You can set the email address that is used to author commits on {% data variables.product.github %} and on your computer.'
redirect_from:
  - /articles/keeping-your-email-address-private
  - /articles/setting-your-commit-email-address-on-github
  - /articles/about-commit-email-addresses
  - /articles/git-email-settings
  - /articles/setting-your-email-in-git
  - /articles/set-your-user-name-email-and-github-token
  - /articles/setting-your-commit-email-address-in-git
  - /articles/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Set commit email address
---

## Setting your commit email address on {% data variables.product.github %}

{% data reusables.files.commit-author-email-options %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.emails %}
{% data reusables.user-settings.add_and_verify_email %}
{% data reusables.user-settings.select_primary_email %}{% ifversion fpt or ghec %}
{% data reusables.user-settings.keeping_your_email_address_private %}{% endif %}

## Setting your commit email address in Git

You can use the `git config` command to change the email address you associate with your Git commits. The new email address you set will be visible in any future commits you push to {% data variables.product.github %} from the command line. Any commits you made prior to changing your commit email address are still associated with your previous email address.

### Setting your email address for every repository on your computer

{% data reusables.command_line.open_the_multi_os_terminal %}

1. {% data reusables.user-settings.set_your_email_address_in_git %}

   ```shell
   git config --global user.email "YOUR_EMAIL"
   ```

1. {% data reusables.user-settings.confirm_git_email_address_correct %}

   ```shell
   $ git config --global user.email
   email@example.com
   ```

1. {% data reusables.user-settings.link_email_with_your_account %}

### Setting your email address for a single repository

{% data variables.product.github %} uses the email address set in your local Git configuration to associate commits pushed from the command line with your account on {% data variables.product.github %}.

You can change the email address associated with commits you make in a single repository. This will override your global Git configuration settings in this one repository, but will not affect any other repositories.

{% data reusables.command_line.open_the_multi_os_terminal %}

1. Change the current working directory to the local repository where you want to configure the email address that you associate with your Git commits.
1. {% data reusables.user-settings.set_your_email_address_in_git %}

   ```shell
   git config user.email "YOUR_EMAIL"
   ```

1. {% data reusables.user-settings.confirm_git_email_address_correct %}

   ```shell
   $ git config user.email
   email@example.com
   ```

1. {% data reusables.user-settings.link_email_with_your_account %}

## Next steps

To learn more about using a private email address, see [AUTOTITLE](/account-and-profile/reference/email-addresses-reference#your-noreply-email-address).
