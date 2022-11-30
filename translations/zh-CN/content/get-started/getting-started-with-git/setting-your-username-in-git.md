---
title: 在 Git 中设置用户名
intro: 'Git 使用用户名将提交与身份关联。 Git 用户名与您的 {% data variables.product.product_name %} 用户名不同。'
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
ms.openlocfilehash: c713f21fdf91269764dd97f15770e7996bf9f4f0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128984'
---
## 关于 Git 用户名
可使用 `git config` 命令更改与 Git 提交关联的名称。 您设置的新名称将在从命令行推送到 {% data variables.product.product_name %} 的任何未来提交中显示。 如果您想要将真实姓名保密，则可以使用任意文本作为您的 Git 用户名。

使用 `git config` 更改与 Git 提交关联的名称仅影响未来的提交，而不会更改用于过去提交的名称。

## 为计算机上的每个存储库设置 Git 用户名

{% data reusables.command_line.open_the_multi_os_terminal %}

2. {% data reusables.user-settings.set_your_git_username %}
   ```shell
   $ git config --global user.name "<em>Mona Lisa</em>"
   ```

3. {% data reusables.user-settings.confirm_git_username_correct %}
   ```shell
   $ git config --global user.name
   > Mona Lisa
   ```

## 为一个仓库设置 Git 用户名

{% data reusables.command_line.open_the_multi_os_terminal %}

2. 将当前工作目录更改为您想要在其中配置与 Git 提交关联的名称的本地仓库。

3. {% data reusables.user-settings.set_your_git_username %}
   ```shell
   $ git config user.name "<em>Mona Lisa</em>"
   ```

3. {% data reusables.user-settings.confirm_git_username_correct %}
   ```shell
   $ git config user.name
   > Mona Lisa
   ```

## 延伸阅读

- “[设置提交电子邮件地址](/articles/setting-your-commit-email-address)”
- [Pro Git 书中的“Git 配置”](https://git-scm.com/book/en/Customizing-Git-Git-Configuration)
