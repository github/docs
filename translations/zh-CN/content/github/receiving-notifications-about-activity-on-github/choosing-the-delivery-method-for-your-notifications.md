---
title: 选择通知递送方式
intro: '您可以在 {% data variables.product.product_location %} 上或通过电子邮件客户端接收通知。'
versions:
  enterprise-server: <2.21
---

对于个人帐户，通知电子邮件会自动发送到您的默认通知电子邮件地址。

{% data reusables.notifications.outbound_email_tip %}

### 选择有关仓库活动通知的递送方式。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
3. 通过选中复选框，配置您希望如何接收有关您参与或关注的通知：
    - 选中 **Email（电子邮件）**将通过您的默认通知电子邮件地址接收通知。
    - 选中 **Web**将允许您在 {% data variables.product.product_location %} 上访问通知。 ![配置通知设置](/assets/images/help/settings/ent-notifications-settings.png)
4. 如果为参与或关注的对话选择了 **Email（电子邮件）**， 请在“Notification email（通知电子邮件）”部分选中复选框以选择要接收哪些更新：
    - 选中 **Comments on Issues and Pull Requests（议题和拉取请求评论）**，则有人在议题或拉取请求的“Conversation（对话）”选项卡中发表评论时，您将会收到电子邮件。
    - 选中 **Pull request reviews（拉取请求审查）**，则有人在拉取请求的“Files changed（已更改文件）”选项卡中发表审查评论时，您将会收到电子邮件。
    - 选中 **Pull request pushes（拉取请求推送）**，则有人将提交添加到您订阅的拉取请求时，您将会收到电子邮件。
    - 选中 **Include your own updates（包括自己的更新）**，则当您打开、评论或关闭议题或拉取请求时，您将会收到电子邮件。 ![配置电子邮件通知选项](/assets/images/help/settings/email_notification_settings.png)

### 选择易受攻击依赖项安全警报的递送方式

{% data reusables.repositories.security-alert-delivery-options %}

{% data reusables.repositories.enable-security-alerts %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
3. 在“Security alerts（安全警报）”下，配置当 {% data variables.product.product_name %} 检测到您仓库中易受攻击依赖项时，您希望如何接收通知： ![配置安全警报通知的选项](/assets/images/help/settings/vulnerability-alerts-options.png)
    - 选择 **UI alerts（UI 警报）**，将在 {% data variables.product.product_name %} 界面显示横幅。
    - 选择 **Command Line（命令行）**，当您向有漏洞的仓库推送时，将显示回调警告。
    - 选中 **Web**将允许您在 {% data variables.product.product_location %} 上访问通知。
    - 选择 **Email each time a vulnerability is found（每次发现漏洞时发送电子邮件）**，将发送电子邮件至您的默认通知电子邮件地址。
    - 选择 **Email a digest summary of vulnerabilities（通过电子邮件发送漏洞汇总摘要）**，将发送汇总最多 10 个仓库安全警报的摘要电子邮件。 使用下拉菜单选择每日或每周接收摘要电子邮件。

### 延伸阅读

- "[关于通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- "[关于电子邮件通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)"
- "[关于 web 通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)"
- "[关注和取消关注仓库](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"
- “[管理电子邮件首选项](/articles/managing-email-preferences)”
