---
title: 阻止会暴露个人电子邮件地址的命令行推送
intro: 如果选择了在执行基于 web 的 Git 操作中保密您的电子邮件地址，您还可以选择阻止可能暴露您个人电子邮件地址的命令行推送。
redirect_from:
  - /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  free-pro-team: '*'
topics:
  - Accounts
  - Notifications
---

从命令行推送提交时，您[在 Git 中设置](/articles/setting-your-commit-email-address)的电子邮件地址会与您的提交相关联。 如果您启用此设置，则每当您推送到 GitHub 时，我们将检查最近的提交。 如果提交的作者电子邮件地址是您的 GitHub 帐户上的私人电子邮件地址，我们将阻止推送并警告这样会暴露您的私人电子邮件地址。

{% data reusables.user_settings.about-commit-email-addresses %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.keeping_your_email_address_private %}
4. 要在您从命令行推送的提交中保密电子邮件地址，请选择 **Block command line pushes that expose my email（阻止会暴露我个人电子邮件地址的命令行推送）**。 ![阻止会暴露个人电子邮件地址的命令行推送的选项](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

### 延伸阅读

- "[设置提交电子邮件地址](/articles/setting-your-commit-email-address)"
