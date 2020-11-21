---
title: 配置通知
intro: '选择 {% data variables.product.product_name %} 上您想要接收其通知的活动类型以及您希望如何发送这些更新。'
redirect_from:
  - /articles/about-web-notifications
  - /format-of-notification-emails/
  - /articles/configuring-notification-emails/
  - /articles/about-notification-emails/
  - /articles/about-email-notifications
  - /articles/accessing-your-notifications
  - /articles/configuring-notification-delivery-methods/
  - /articles/managing-notification-delivery-methods/
  - /articles/managing-notification-emails-for-organizations/
  - /articles/choosing-the-delivery-method-for-your-notifications
  - /articles/choosing-the-types-of-notifications-you-receive/
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
---

### 通知递送选项

您有三个基本的通知递送选项：
  - the notifications inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %}
  - {% data variables.product.prodname_mobile %} 上的通知收件箱，它与 {% data variables.product.product_name %} 上的收件箱同步{% endif %}
  - an email client that uses a verified email address, which can also sync with the notifications inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} and {% data variables.product.prodname_mobile %}{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.notifications-v2.notifications-inbox-required-setting %} 更多信息请参阅“[选择通知设置](#choosing-your-notification-settings)”。
{% endif %}

{% data reusables.notifications-v2.tip-for-syncing-email-and-your-inbox-on-github %}

#### 通知收件箱的优点

The notifications inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} and {% data variables.product.prodname_mobile %}{% endif %} includes triaging options designed specifically for your {% data variables.product.product_name %} notifications flow, including options to:
  - 一次对多种通知进行分类。
  - 将已完成的通知标记为**完成**并从收件箱中删除它们。 要查看标记为**完成**的所有通知，请使用 `is:done` 查询。
  - 保存通知以供以后查看。 保存的通知将在收件箱中标记并无限期保留。 要查看所有已保存的通知，请使用 `is:saved` 查询。
  - 取消订阅并从收件箱中删除通知。
  - 从通知收件箱预览 {% data variables.product.product_name %} 上产生通知的议题、拉取请求或团队讨论。
  - 使用 `reasons` 标签查看收件箱中收到通知的最新原因之一。
  - 创建自定义过滤器，以便按需要关注不同的通知。
  - 按仓库或日期对收件箱中的通知进行分组，以快速概览通知，减少上下文切换

{% if currentVersion == "free-pro-team@latest" %}
In addition, the notifications inbox on
{% data variables.product.prodname_mobile %} allows you to triage notifications in dark mode and receive push notifications for direct mentions. 更多信息请参阅“[为移动版 GitHub 启用推送通知](#enabling-push-notifications-with-github-for-mobile)”或“[移动版 GitHub](/github/getting-started-with-github/github-for-mobile)”。
{% endif %}

#### 对通知使用电子邮件客户端的优点

使用电子邮件客户端的一个好处是，可以无限期地保留所有通知，具体取决于电子邮件客户端的存储容量。 收件箱通知仅保留 5 个月，除非您将它们标记为 **Saved（已保存）**。 **Saved（已保存）**通知将无限期保留。 有关收件箱保留政策的更多信息，请参阅“[关于通知](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notification-retention-policy)”。

向电子邮件客户端发送通知还允许您根据电子邮件客户端的设置（可以包括自定义或颜色编码的标签）自定义收件箱。

电子邮件通知还允许您灵活地设置收到的通知类型，并允许您选择不同的电子邮件地址进行更新。 例如，您可以向经验证的个人电子邮件地址发送仓库的某些通知。 有关电子邮件自定义选项的更多信息，请参阅“[自定义电子邮件通知](#customizing-your-email-notifications)”。

### 关于参与和查看通知

关注仓库，意味着订阅该仓库中的活动更新。 同样，关注特定团队的讨论，意味着订阅该团队页面上的所有对话更新。 要查看您关注的仓库，请参阅 [https://github.com/watching](https://github.com/watching)。 更多信息请参阅“[在 GitHub 上管理订阅和通知](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)”。

每当您在对话中发表评论或有人 @提及您的用户名时，您都在_参与_对话。 默认情况下，当您参与对话时，会自动订阅该对话。 您可以通过单击议题或拉取请求上的 **Unsubscribe（取消订阅）**或通过通知收件箱中的 **Unsubscribe（取消订阅）**选项，手动取消订阅已参与的对话。

For conversations you're watching or participating in, you can choose whether you want to receive notifications by email or through the notifications inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} and {% data variables.product.prodname_mobile %}{% endif %}.

![参与和关注通知选项](/assets/images/help/notifications-v2/participating-and-watching-options.png)

例如：
  - 如果您不希望将通知发送到您的电子邮件地址，请取消选中 **email（电子邮件）**以便参与和查看通知。
  - 如果您希望在参与对话时通过电子邮件接收通知，则可以选中“Participating（参与）”下的 **email（电子邮件）**。

If you do not enable watching or participating notifications for web{% if currentVersion == "free-pro-team@latest" %} and mobile{% endif %}, then your notifications inbox will not have any updates.

### 自定义电子邮件通知

在启用电子邮件通知后，{% data variables.product.product_name %} 将以多部分电子邮件向您发送通知，其中包含内容的 HTML 和明文副本。 电子邮件通知内容包含出现在 {% data variables.product.product_name %} 上的原始内容中的任何 Markdown、@提及、表情符号、哈希链接等。 如果您只想查看电子邮件中的文本，可以配置电子邮件客户端只显示明文副本。

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% if currentVersion == "free-pro-team@latest" %}

如果您使用 Gmail，可以单击通知电子邮件旁边的按钮访问生成该通知的原始议题或拉取请求。

![Gmail 中的按钮](/assets/images/help/notifications/gmail-buttons.png)

{% endif %}

选择一个默认电子邮件地址，用于发送您参与或关注的对话的更新。 您还可以指定希望使用默认电子邮件地址接收 {% data variables.product.product_name %} 上哪些活动的更新。 例如，选择您的默认电子邮件地址是否要接收以下更新：
  - 对问题和拉取请求的评论。
  - 拉取请求审查.
  - 拉取请求推送。
  - 您自己的更新，例如当您打开、评论或关闭议题或拉取请求时。

您还可以向特定仓库的不同电子邮件地址发送通知，具体取决于拥有仓库的组织。 例如，您可以向经验证的个人电子邮件地址发送特定公共仓库的通知。 您的组织可能要求验证特定域的电子邮件地址。 更多信息请参阅“[选择接收组织的电子邮件通知的位置](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent)”。

{% data reusables.notifications-v2.email-notification-caveats %}

### 过滤电子邮件通知

{% data variables.product.product_name %} 发送的每封电子邮件通知都包含标头信息。 每封电子邮件的标头信息都是一致的，因此可用于电子邮件客户端中过滤或转发所有 {% data variables.product.product_name %} 通知，或特定类型的 {% data variables.product.product_name %} 通知。

如果您认为收到的通知不属于您，请检查 `X-GitHub-recepient` 和 `X-GitHub-recipient-Address` 标头。 这些标头显示预期的收件人。 根据您的电子邮件设置，您可能会收到预期发给其他用户的通知。

来自 {% data variables.product.product_name %} 的电子邮件通知包含以下标头信息：

| 标头                     | 信息                                                                                                                                                                                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `From` 地址              | This address will always be {% if currentVersion == "free-pro-team@latest" %}'`notifications@github.com`'{% else %}'the no-reply email address configured by your site administrator'{% endif %}.                                   |
| `To` 字段                | This field connects directly to the thread.{% if currentVersion != "github-ae@latest" %} If you reply to the email, you'll add a new comment to the conversation.{% endif %}
| `Cc` 地址                | 如果您订阅了对话，{% data variables.product.product_name %} 将会 `Cc` 给您。 第二个 `Cc` 电子邮件地址与通知原因匹配。 这些通知原因的后缀是 {% data variables.notifications.cc_address %}。 可能的通知原因包括： <ul><li>`assign`：您被分配到议题或拉取请求。</li><li>`author`：您创建了议题或拉取请求。</li><li>`comment`：您评论了议题或拉取请求。</li><li>`manual`：您手动订阅的议题或拉取请求有更新。</li><li>`mention`：您提及了议题或拉取请求。</li><li>`push`：有人提交了您订阅的拉取请求。</li><li>`review_requested`：您或您所在的团队已请求审查拉取请求。</li>{% if currentVersion != "github-ae@latest" %}<li>`security_alert`：{% data variables.product.prodname_dotcom %} 检测到您要接收其漏洞警报的仓库中存在漏洞。</li>{% endif %}<li>`state_change`：您订阅的议题或拉取请求已关闭或打开。</li><li>`subscribed`：您查看的仓库有更新。</li><li>`team_mention`：您所属的团队在议题或拉取请求中被提及。</li><li>`your_activity`：您打开、评论或关闭了议题或拉取请求。</li></ul>                                                |
| `mailing list` 字段      | 此字段识别仓库名称及其所有者。 此地址的格式始终是 `<仓库名称>.<仓库所有者>.{% data variables.command_line.backticks %}`。 |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
| `X-GitHub-Severity` 字段 | {% data reusables.repositories.security-alerts-x-github-severity %} 可能的严重程度等级包括：<ul><li>`低`</li><li>`中`</li><li>`高`</li><li>`严重`</li></ul>更多信息请参阅“[关于易受攻击的依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。 |{% endif %}

### 选择通知设置

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. 在通知设置页面上，选择在以下情况下如何接收通知：
    - 在您关注的仓库或团队讨论或参与的对话中发生了更新。 更多信息请参阅“[关于参与和关注通知](#about-participating-and-watching-notifications)”。
    - 您获得了新仓库的访问权限或加入了新团队。 For more information, see "[Automatic watching](#automatic-watching)."{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
    - 您的仓库中有新的 {% if page.version == 'dotcom' %} {% data variables.product.prodname_dependabot_alerts %} {% else %} 安全警报 {% endif %}。 更多信息请参阅“[{% data variables.product.prodname_dependabot_alerts %} 通知选项](#dependabot-alerts-notification-options)”。 {% endif %}{% if currentVersion == "enterprise-server@2.21" %}
    - 您的仓库中有新的安全警报。 For more information, see "[Security alert notification options](#security-alert-notification-options)." {% endif %} {% if currentVersion == "free-pro-team@latest" %}
    - 在使用 {% data variables.product.prodname_actions %} 设置的仓库上有工作流程运行更新。 更多信息请参阅“[{% data variables.product.prodname_actions %} 通知选项](#github-actions-notification-options)”。{% endif %}

### 自动关注

默认情况下，每当您获得新仓库的访问权限时，您将会自动开始关注该仓库。 每当您加入新团队时，您都会自动订阅更新，并在该团队被 @提及时收到通知。 如果不想自动订阅，您可以取消选择自动关注选项。

  ![自动关注选项](/assets/images/help/notifications-v2/automatic-watching-options.png)

如果禁用了“Automatically watch repositories（自动关注仓库）”，您将不会自动关注自己拥有的仓库。 您必须导航到仓库页面，然后选择关注选项。

### 选择接收组织的电子邮件通知的位置

如果您属于某个组织，您可以选择要接收组织活动通知的电子邮件帐户。 例如，如果您属于某个工作组织，您可能希望通知发送到您的工作电子邮件地址，而不是您的个人地址。

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. 在“Default notification email（默认通知电子邮件）”下，选择要接收通知的电子邮件地址。   
   ![默认通知电子邮件地址下拉菜单](/assets/images/help/notifications/notifications_primary_email_for_orgs.png)
4. 单击 **Save（保存）**。

#### 自定义每个组织的电子邮件路由

If you are a member of more than one organization, you can configure each one to send notifications to any of{% if currentVersion == "free-pro-team@latest" %} your verified email addresses{% else %} the email addressed you've added to your {% data variables.product.product_name %} account{% endif %}. {% if currentVersion == "free-pro-team@latest" %} For more information, see "[Verifying your email address](/articles/verifying-your-email-address)."{% endif %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. 在“Custom routing（自定义路由）”下，在列表中找到您组织的名称。   
   ![组织和电子邮件地址列表](/assets/images/help/notifications/notifications_org_emails.png)
4. 在要更改的电子邮件地址旁边单击 **Edit（编辑）**。 ![编辑组织的电子邮件地址](/assets/images/help/notifications/notifications_edit_org_emails.png)
5. 选择一个经验证电子邮件地址，然后单击 **Save（保存）**。    
   ![切换每个组织的电子邮件地址](/assets/images/help/notifications/notifications_switching_org_email.gif)

{% if currentVersion != "github-ae@latest" %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### {% data variables.product.prodname_dependabot_alerts %} 通知选项
{% else %}
### Security alert notification options
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}
For more information about the notification delivery methods available to you, and advice on optimizing your notifications for

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}, see "[Configuring notifications for vulnerable dependencies](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### {% data variables.product.prodname_actions %} 通知选项

选择您希望如何接收所关注仓库的工作流程运行更新，通过 {% data variables.product.prodname_actions %} 设置。 您也可以选择仅接收关于失败的工作流程运行的通知。

  ![{% data variables.product.prodname_dependabot_short %} 警报选项](/assets/images/help/notifications-v2/github-actions-notification-options.png)

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### 使用 {% data variables.product.prodname_mobile %} 启用推送通知

安装 {% data variables.product.prodname_mobile %} 时，您将自动选择 web 通知。 然后，您可以针对应用程序中的直接提及启用推送通知。

目前，您只能针对 {% data variables.product.prodname_mobile %} 上仓库的推送接收通知。

#### 使用 {% data variables.product.prodname_ios %} 启用推送通知

1. 在“Home（主页）”上，点击您的个人资料照片。
2. 要查看设置，请点击 {% octicon "gear" aria-label="The Gear icon" %}。 ![iOS 版 GitHub 的设置图标](/assets/images/help/mobile/ios-settings-icon.png)
3. 要更新通知设置，请点击 **Push notifications（推送通知）**。
4. 要针对直接提及开启推送通知，请使用 **Direct Mentions（直接提及）**切换按钮。

#### 使用 {% data variables.product.prodname_android %} 启用推送通知

1. 在“Home（主页）”上，点击您的个人资料照片。
2. 要查看设置，请点击 {% octicon "gear" aria-label="The Gear icon" %}。 ![Android 版 GitHub 的设置图标](/assets/images/help/mobile/android-settings-icon.png)
3. 要针对直接提及开启推送通知，请使用 **Direct mentions（直接提及）**切换按钮。
{% endif %}
