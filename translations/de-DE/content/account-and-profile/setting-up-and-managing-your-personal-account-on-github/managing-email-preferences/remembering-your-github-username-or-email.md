---
title: Remembering your GitHub username or email
intro: 'Are you signing in to {% data variables.location.product_location %} for the first time in a while? If so, welcome back! If you can''t remember the username for your personal account on {% data variables.product.product_name %}, you can try these methods for remembering it.'
redirect_from:
  - /articles/oh-noes-i-ve-forgotten-my-username-email
  - /articles/oh-noes-i-ve-forgotten-my-username-or-email
  - /articles/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Find your username or email
---
{% mac %}

## {% data variables.product.prodname_desktop %} users

1. In the **GitHub Desktop** menu, click **Preferences**.
2. In the Preferences window, verify the following:
    - To view your {% data variables.product.product_name %} username, click **Accounts**.
    - To view your Git email, click **Git**. Note that this email is not guaranteed to be [your primary {% data variables.product.product_name %} email](/articles/changing-your-primary-email-address).

{% endmac %}

{% windows %}

## {% data variables.product.prodname_desktop %} users

1. In the **File** menu, click **Options**.
2. In the Options window, verify the following:
    - To view your {% data variables.product.product_name %} username, click **Accounts**.
    - To view your Git email, click **Git**. Note that this email is not guaranteed to be [your primary {% data variables.product.product_name %} email](/articles/changing-your-primary-email-address).
  
{% endwindows %}

## Finding your username in your `user.name` configuration

During set up, you may have [set your username in Git](/github/getting-started-with-github/setting-your-username-in-git). If so, you can review the value of this configuration setting:

```shell
$ git config user.name
# View the setting
YOUR_USERNAME
```

## Finding your username in the URL of remote repositories

If you have any local copies of personal repositories you have created or forked, you can check the URL of the remote repository.

{% tip %}

**Tip**: This method only works if you have an original repository or your own fork of someone else's repository. If you clone someone else's repository, their username will show instead of yours. Similarly, organization repositories will show the name of the organization instead of a particular user in the remote URL.

{% endtip %}

```shell
$ cd YOUR_REPOSITORY
# Change directories to the initialized Git repository
$ git remote -v
origin	https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_REPOSITORY.git (fetch)
origin	https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_REPOSITORY.git (push)
```

Your user name is what immediately follows the `https://{% data variables.command_line.backticks %}/`.

{% ifversion fpt or ghec %}
## Further reading

- "[Verifying your email address](/articles/verifying-your-email-address)"
{% endif %}
