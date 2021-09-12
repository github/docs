---
title: 关于推送到仓库的电子邮件通知
intro: 您可以选择在任何人推送到仓库时自动发送电子邮件通知到特定电子邮件地址。
permissions: People with admin permissions in a repository can enable email notifications for pushes to your repository.
redirect_from:
  - /articles/managing-notifications-for-pushes-to-a-repository/
  - /articles/receiving-email-notifications-for-pushes-to-a-repository/
  - /articles/about-email-notifications-for-pushes-to-your-repository/
  - /github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% data reusables.notifications.outbound_email_tip %}

对于推送到仓库所发送的每封电子邮件通知都会列出新提交，以及只包含这些提交的差异的链接。 在电子邮件通知中，您会看到：

- 其中进行了提交的仓库名称
- 进行提交的分支
- 提交的 SHA1，包括到 {% data variables.product.product_name %} 中差异的链接
- 提交的作者
- 提交的日期
- 作为提交一部分所更改的文件
- 提交消息

您可以过滤因推送到仓库而收到的电子邮件通知。 更多信息请参阅{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}”[关于通知电子邮件](/github/receiving-notifications-about-activity-on-github/about-email-notifications)”。 您还可以对推送关闭电子邮件通知。 更多信息请参阅“[选择通知的递送方式](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications){% endif %}”。

### 对推送到仓库启用电子邮件通知

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.sidebar-notifications %}
5. 输入最多两个您希望通知发送到的电子邮件地址，用空格分隔。 如果要将电子邮件发送到两个以上的帐户，请将其中一个电子邮件地址设为群组电子邮件地址。 ![电子邮件地址文本框](/assets/images/help/settings/email_services_addresses.png)
1. 如果您操作自己的服务器，可通过 **Approved 标头**验证电子邮件的真实性。 **Approved 标头**是您在此字段中输入的令牌或密码，它将随电子邮件一起发送。 如果电子邮件的 `Approved` 标头与令牌匹配，则可以信任该电子邮件来自 {% data variables.product.product_name %}。 ![电子邮件已批准标头文本框](/assets/images/help/settings/email_services_approved_header.png)
7. 单击 **Setup notifications（设置通知）**。 ![设置通知按钮](/assets/images/help/settings/setup_notifications_settings.png)

### 延伸阅读
{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
- "[关于通知](/github/managing-subscriptions-and-notifications-on-github/about-notifications)"
{% else %}
- "[关于通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- "[选择通知的递送方式](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)"
- "[关于电子邮件通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)"
- "[关于 web 通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)"{% endif %}
