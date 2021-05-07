---
title: 记住您的 GitHub 用户名或电子邮件
intro: '是否距离您第一次登录 {% data variables.product.product_location %} 已经有一段时间？ 如果是这样，欢迎回来！ 如果无法记住您的 {% data variables.product.product_name %} 用户帐户名，您可以尝试以下方法来记住它。'
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

### {% data variables.product.prodname_desktop %} 用户

1. 在 **GitHub Desktop** 菜单中，单击 **Preferences（首选项）**。
2. 在 Preferences（首选项）窗口中，验证以下内容：
    - 要查看 {% data variables.product.product_name %} 用户名，请单击 **Accounts（帐户）**。
    - 要查看您的 Git 电子邮件，请单击 **Git**。 请注意，此电子邮件不一定是[您的主 {% data variables.product.product_name %} 电子邮件](/articles/changing-your-primary-email-address)。

{% endmac %}

{% windows %}

### {% data variables.product.prodname_desktop %} 用户

1. 在 **File（文件）**菜单中，单击 **Options（选项）**。
2. 在 Options（选项）窗口中，验证以下内容：
    - 要查看 {% data variables.product.product_name %} 用户名，请单击 **Accounts（帐户）**。
    - 要查看您的 Git 电子邮件，请单击 **Git**。 请注意，此电子邮件不一定是[您的主 {% data variables.product.product_name %} 电子邮件](/articles/changing-your-primary-email-address)。

{% endwindows %}

### 在 `user.name` 配置中查找您的用户名

设置期间，您可能已[在 Git 中设置用户名](/github/getting-started-with-github/setting-your-username-in-git)。 如果这样，您可以查看此配置设置的值：

```shell
$ git config user.name
# 查看设置
<em>YOUR_USERNAME</em>
```

### 在远程仓库的 URL 中查找您的用户名

如果您有已创建或已复刻的个人仓库的任何本地副本，则可以检查远程仓库的 URL。

{% tip %}

**提示**：此方法仅当您拥有原始仓库或其他人存储库中您自己的复刻时才有效。 如果您克隆其他人的仓库，将显示他们的用户名而不是您的用户名。 类似地，组织仓库将显示组织的名称，而不是远程 URL 中的特定用户。

{% endtip %}

```shell
$ cd <em>YOUR_REPOSITORY</em>
# 将目录更改为初始化的 Git 仓库
$ git remote -v
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (fetch)
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (push)
```

您的用户名是紧跟在 `https://{% data variables.command_line.backticks %}/` 之后的内容。

{% if currentVersion == "free-pro-team@latest" %}
### 延伸阅读

- “[验证电子邮件地址](/articles/verifying-your-email-address)”
{% endif %}
