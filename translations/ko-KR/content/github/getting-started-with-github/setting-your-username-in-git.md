---
title: Setting your username in Git
intro: 'Git uses a username to associate commits with an identity. The Git username is not the same as your {% data variables.product.product_name %} username.'
redirect_from:
  - /articles/setting-your-username-in-git
  - /github/using-git/setting-your-username-in-git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

You can change the name that is associated with your Git commits using the `git config` command. The new name you set will be visible in any future commits you push to {% data variables.product.product_name %} from the command line. If you'd like to keep your real name private, you can use any text as your Git username.

Changing the name associated with your Git commits using `git config` will only affect future commits and will not change the name used for past commits.

### Setting your Git username for *every* repository on your computer

{% data reusables.command_line.open_the_multi_os_terminal %}

2. {% data reusables.user_settings.set_your_git_username %}
   ```shell
   $ git config --global user.name "<em>Mona Lisa</em>"
   ```

3. {% data reusables.user_settings.confirm_git_username_correct %}
   ```shell
   $ git config --global user.name
   > Mona Lisa
   ```

### Setting your Git username for a single repository

{% data reusables.command_line.open_the_multi_os_terminal %}

2. Change the current working directory to the local repository where you want to configure the name that is associated with your Git commits.

3. {% data reusables.user_settings.set_your_git_username %}
   ```shell
   $ git config user.name "<em>Mona Lisa</em>"
   ```

3. {% data reusables.user_settings.confirm_git_username_correct %}
   ```shell
   $ git config user.name
   > Mona Lisa
   ```

### 더 읽을거리

- "[Setting your commit email address](/articles/setting-your-commit-email-address)"
- ["Git Configuration" from the _Pro Git_ book](https://git-scm.com/book/en/Customizing-Git-Git-Configuration)
