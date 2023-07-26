---
title: Setting your username in Git
intro: 'Git uses a username to associate commits with an identity. The Git username is not the same as your {% data variables.product.product_name %} username.'
redirect_from:
  - /articles/setting-your-username-in-git
  - /github/using-git/setting-your-username-in-git
  - /github/getting-started-with-github/setting-your-username-in-git
  - /github/getting-started-with-github/getting-started-with-git/setting-your-username-in-git
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Set your username
---
## About Git usernames

You can change the name that is associated with your Git commits using the `git config` command. The new name you set will be visible in any future commits you push to {% data variables.product.product_name %} from the command line. If you'd like to keep your real name private, you can use any text as your Git username.

Changing the name associated with your Git commits using `git config` will only affect future commits and will not change the name used for past commits.

## Setting your Git username for _every_ repository on your computer

{% data reusables.command_line.open_the_multi_os_terminal %}

1. {% data reusables.user-settings.set_your_git_username %}

   ```shell
   git config --global user.name "Mona Lisa"
   ```

1. {% data reusables.user-settings.confirm_git_username_correct %}

   ```shell
   $ git config --global user.name
   > Mona Lisa
   ```

## Setting your Git username for a single repository

{% data reusables.command_line.open_the_multi_os_terminal %}

1. Change the current working directory to the local repository where you want to configure the name that is associated with your Git commits.

1. {% data reusables.user-settings.set_your_git_username %}

   ```shell
   git config user.name "Mona Lisa"
   ```

1. {% data reusables.user-settings.confirm_git_username_correct %}

   ```shell
   $ git config user.name
   > Mona Lisa
   ```

## Further reading

- "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)"
- ["Git Configuration" from the _Pro Git_ book](https://git-scm.com/book/en/Customizing-Git-Git-Configuration)
