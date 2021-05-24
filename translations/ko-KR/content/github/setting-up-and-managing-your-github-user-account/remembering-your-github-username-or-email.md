---
title: Remembering your GitHub username or email
intro: 'Are you signing in to {% data variables.product.product_location %} for the first time in a while? If so, welcome back! If you can''t remember your {% data variables.product.product_name %} user account name, you can try these methods for remembering it.'
redirect_from:
  - /articles/oh-noes-i-ve-forgotten-my-username-email/
  - /articles/oh-noes-i-ve-forgotten-my-username-or-email/
  - /articles/remembering-your-github-username-or-email
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
  - Notifications
---

{% mac %}

### {% data variables.product.prodname_desktop %} users

1. In the **GitHub Desktop** menu, click **Preferences**.
2. In the Preferences window, verify the following:
    - To view your {% data variables.product.product_name %} username, click **Accounts**.
    - To view your Git email, click **Git**. Note that this email is not guaranteed to be [your primary {% data variables.product.product_name %} email](/articles/changing-your-primary-email-address).

{% endmac %}

{% windows %}

### {% data variables.product.prodname_desktop %} users

1. In the **File** menu, click **Options**.
2. In the Options window, verify the following:
    - To view your {% data variables.product.product_name %} username, click **Accounts**.
    - To view your Git email, click **Git**. Note that this email is not guaranteed to be [your primary {% data variables.product.product_name %} email](/articles/changing-your-primary-email-address).

{% endwindows %}

### Finding your username in your `user.name` configuration

During set up, you may have [set your username in Git](/github/getting-started-with-github/setting-your-username-in-git). If so, you can review the value of this configuration setting:

```shell
$ git config user.name
# View the setting
<em>YOUR_USERNAME</em>
```

### Finding your username in the URL of remote repositories

If you have any local copies of personal repositories you have created or forked, you can check the URL of the remote repository.

{% tip %}

**Tip**: This method only works if you have an original repository or your own fork of someone else's repository. If you clone someone else's repository, their username will show instead of yours. Similarly, organization repositories will show the name of the organization instead of a particular user in the remote URL.

{% endtip %}

```shell
$ cd <em>YOUR_REPOSITORY</em>
# Change directories to the initialized Git repository
$ git remote -v
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (fetch)
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (push)
```

Your user name is what immediately follows the `https://{% data variables.command_line.backticks %}/`.

{% if currentVersion == "free-pro-team@latest" %}
### 더 읽을거리

- "[Verifying your email address](/articles/verifying-your-email-address)"
{% endif %}
