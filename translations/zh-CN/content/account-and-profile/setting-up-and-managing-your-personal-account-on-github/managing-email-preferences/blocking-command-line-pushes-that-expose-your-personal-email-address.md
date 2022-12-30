---
title: 阻止会暴露个人电子邮件地址的命令行推送
intro: 如果选择了在执行基于 web 的 Git 操作中保密您的电子邮件地址，您还可以选择阻止可能暴露您个人电子邮件地址的命令行推送。
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
ms.openlocfilehash: 2c79886af1e35e0f02419610dfca1459a9693731
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145164807'
---
从命令行推送提交时，[在 Git 中设置](/articles/setting-your-commit-email-address)的电子邮件地址与提交相关联。 如果您启用此设置，则每当您推送到 GitHub 时，我们将检查最近的提交。 如果提交的作者电子邮件地址是您的 GitHub 帐户上的私人电子邮件地址，我们将阻止推送并警告这样会暴露您的私人电子邮件地址。

{% data reusables.user-settings.about-commit-email-addresses %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.keeping_your_email_address_private %}
4. 要使你的电子邮件地址在你通过命令行推送的提交中保持私密，请选择阻止会公开个人电子邮件地址的命令行推送。
![阻止会公开个人电子邮件地址的命令行推送的选项](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

## 延伸阅读

- [设置提交电子邮件地址](/articles/setting-your-commit-email-address)
