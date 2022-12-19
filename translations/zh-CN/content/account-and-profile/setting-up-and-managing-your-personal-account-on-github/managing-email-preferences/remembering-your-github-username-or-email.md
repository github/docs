---
title: 记住您的 GitHub 用户名或电子邮件
intro: '是否距离您第一次登录 {% data variables.product.product_location %} 已经有一段时间？ 如果是这样，欢迎回来！ 如果无法记住 {% data variables.product.product_name %} 上个人帐户的用户名，可以尝试使用以下方法来记住它。'
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
ms.openlocfilehash: e65ba973a5ca7865aa642ce5d64f8efa0a996742
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164771'
---
{% mac %}

## {% data variables.product.prodname_desktop %} 用户

1. 在“GitHub 桌面”菜单中，单击“首选项” 。
2. 在 Preferences（首选项）窗口中，验证以下内容：
    - 若要查看 {% data variables.product.product_name %} 用户名，请单击“帐户”。
    - 若要查看 Git 电子邮件，请单击“Git”。 请注意，此电子邮件不保证是 [主要 {% data variables.product.product_name %} 电子邮件](/articles/changing-your-primary-email-address)。

{% endmac %}

{% windows %}

## {% data variables.product.prodname_desktop %} 用户

1. 在“文件”菜单中，单击“选项” 。
2. 在 Options（选项）窗口中，验证以下内容：
    - 若要查看 {% data variables.product.product_name %} 用户名，请单击“帐户”。
    - 若要查看 Git 电子邮件，请单击“Git”。 请注意，此电子邮件不保证是 [主要 {% data variables.product.product_name %} 电子邮件](/articles/changing-your-primary-email-address)。
  
{% endwindows %}

## 在 `user.name` 配置中查找用户名

在设置期间，你可能已[在 Git 中设置用户名](/github/getting-started-with-github/setting-your-username-in-git)。 如果这样，您可以查看此配置设置的值：

```shell
$ git config user.name
# View the setting
<em>YOUR_USERNAME</em>
```

## 在远程仓库的 URL 中查找您的用户名

如果您有已创建或已复刻的个人仓库的任何本地副本，则可以检查远程仓库的 URL。

{% tip %}

提示：此方法仅当你拥有原始存储库或其他人存储库中你自己的分叉时才有效。 如果您克隆其他人的仓库，将显示他们的用户名而不是您的用户名。 类似地，组织仓库将显示组织的名称，而不是远程 URL 中的特定用户。

{% endtip %}

```shell
$ cd <em>YOUR_REPOSITORY</em>
# Change directories to the initialized Git repository
$ git remote -v
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (fetch)
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (push)
```

用户名紧跟在 `https://{% data variables.command_line.backticks %}/` 后。

{% ifversion fpt or ghec %}
## 延伸阅读

- “[验证电子邮件地址](/articles/verifying-your-email-address)”{% endif %}
