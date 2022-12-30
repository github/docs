---
title: 配置通知
intro: '选择 {% data variables.product.prodname_dotcom %} 上您想要接收其通知的活动类型以及您希望如何发送这些更新。'
redirect_from:
  - /articles/about-web-notifications
  - /format-of-notification-emails
  - /articles/configuring-notification-emails
  - /articles/about-notification-emails
  - /articles/about-email-notifications
  - /articles/accessing-your-notifications
  - /articles/configuring-notification-delivery-methods
  - /articles/managing-notification-delivery-methods
  - /articles/managing-notification-emails-for-organizations
  - /articles/choosing-the-delivery-method-for-your-notifications
  - /articles/choosing-the-types-of-notifications-you-receive
  - /github/managing-subscriptions-and-notifications-on-github/configuring-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
ms.openlocfilehash: b7822a7db40455476c5fc5ac6f779e45d7f558a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060760'
---
## 通知递送选项

可以在以下位置的 {% data variables.product.product_location %} 上接收活动的通知。

  - {% data variables.product.product_location %} Web 界面{% ifversion fpt or ghes or ghec %}中的通知收件箱
  - {% data variables.product.prodname_mobile %} 上的通知收件箱，它与 {% data variables.product.product_location %} 上的收件箱同步{% endif %}
  - 使用经验证电子邮件地址的电子邮件客户端，也可以与 {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} 及 {% data variables.product.prodname_mobile %} 上的通知收件箱同步{% endif %}

{% ifversion fpt or ghes or ghec %} {% data reusables.notifications-v2.notifications-inbox-required-setting %} 有关详细信息，请参阅“[选择通知设置](#choosing-your-notification-settings)”。
{% endif %}

{% data reusables.notifications.shared_state %}

### 通知收件箱的优点

{% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} 和 {% data variables.product.prodname_mobile %}{% endif %} 上的通知收件箱包含专为你的 {% data variables.product.prodname_dotcom %} 通知流程设计的分类选项，包括：
  - 一次分类多个通知。
  - 将已完成的通知标记为“完成”并将其从收件箱中删除。 要查看标记为“完成”的所有通知，请使用 `is:done` 查询。
  - 保存通知以供以后查看。 已保存的通知会在收件箱中标记并无限期保留。 要查看保存的所有通知，请使用 `is:saved` 查询。
  - 取消订阅并从收件箱中删除通知。
  - 从通知收件箱预览 {% data variables.product.product_location %} 上产生通知的议题、拉取请求或团队讨论。
  - 查看你从收件箱收到带有 `reasons` 标签的通知的最新原因之一。
  - 创建自定义筛选器，以便在需要时关注不同的通知。
  - 按仓库或日期对收件箱中的通知进行分组，以快速概览通知，减少上下文切换

{% ifversion fpt or ghes or ghec %} 此外，可以通过 {% data variables.product.prodname_mobile %} 在移动设备上接收和分类通知。 有关详细信息，请参阅“[使用 GitHub Mobile 管理通知设置](#managing-your-notification-settings-with-github-mobile)”或“[GitHub Mobile](/get-started/using-github/github-mobile)”。
{% endif %}

### 对通知使用电子邮件客户端的优点

使用电子邮件客户端的一个好处是，可以无限期地保留所有通知，具体取决于电子邮件客户端的存储容量。 收件箱通知在 {% data variables.product.prodname_dotcom %} 上仅保留 5 个月，除非将它们标记为“已保存”。 “已保存”通知将无限期保留。 有关收件箱保留策略的详细信息，请参阅“[关于通知](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notification-retention-policy)”。

向电子邮件客户端发送通知还允许您根据电子邮件客户端的设置（可以包括自定义或颜色编码的标签）自定义收件箱。

电子邮件通知还允许您灵活地设置收到的通知类型，并允许您选择不同的电子邮件地址进行更新。 例如，您可以向经验证的个人电子邮件地址发送仓库的某些通知。 有关电子邮件自定义选项的详细信息，请参阅“[自定义电子邮件通知](#customizing-your-email-notifications)”。

## 关于参与和查看通知

关注仓库，意味着订阅该仓库中的活动更新。 同样，关注特定团队的讨论，意味着订阅该团队页面上的所有对话更新。 有关详细信息，请参阅“[关于团队讨论](/organizations/collaborating-with-your-team/about-team-discussions)”。

若要查看正在监视的存储库，请参阅[监视页面](https://github.com/watching)。 有关详细信息，请参阅“[在 GitHub 上管理订阅和通知](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)”。

{% ifversion ghae %}
### 配置通知
{% endif %} 可以在存储库页面上或在监视页面上为存储库配置通知。

### 关于自定义通知
您可以自定义仓库的通知。 例如，您可以选择仅在仓库中发生一类或多类事件 ({% data reusables.notifications-v2.custom-notification-types %}) 的更新时收到通知，或者忽略仓库的所有通知。 有关详细信息，请参阅下方的“[为单个存储库配置监视设置](#configuring-your-watch-settings-for-an-individual-repository)”。

### 参与对话
每当你在对话中发表评论或有人 @mentions你的用户名时，你都在参与对话。 默认情况下，当您参与对话时，会自动订阅该对话。 你可以通过单击议题或拉取请求上的“取消订阅”或通过通知收件箱中的“取消订阅”选项，手动取消订阅已参与的对话 。

对于你监视或参与的对话，你可以选择是通过电子邮件还是 {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} 和 {% data variables.product.prodname_mobile %}{% endif %} 上的收件箱接收通知。

![参与和关注通知选项](/assets/images/help/notifications-v2/participating-and-watching-options.png)

例如：
  - 如果不希望将通知发送到你的电子邮件地址，请取消选中“电子邮件”以便参与和监视通知。
  - 如果希望在参与对话时通过电子邮件接收通知，则可以选中“参与”下的“电子邮件”。

如果未对 Web{% ifversion fpt or ghes or ghec %} 和移动{% endif %}启用监视或参与通知，则你的通知收件箱不会收到任何更新。

## 自定义电子邮件通知

在启用电子邮件通知后，{% data variables.product.product_location %} 将以多部分电子邮件向你发送通知，其中包含内容的 HTML 和纯文本副本。 电子邮件通知内容包含出现在 {% data variables.product.product_location %} 上的原始内容中的任何 Markdown、@mentions、表情符号、哈希链接等。 如果您只想查看电子邮件中的文本，可以配置电子邮件客户端只显示明文副本。

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% ifversion fpt or ghec %}

如果您使用 Gmail，可以单击通知电子邮件旁边的按钮访问生成该通知的原始议题或拉取请求。

![Gmail 中的按钮](/assets/images/help/notifications/gmail-buttons.png)

{% endif %}

选择一个默认电子邮件地址，用于发送您参与或关注的对话的更新。 还可以指定希望使用默认电子邮件地址接收 {% data variables.product.product_location %} 上哪些活动的更新。 例如，选择您的默认电子邮件地址是否要接收以下更新：
  - 对问题和拉取请求的评论。
  - 拉取请求评审。
  - 拉取请求推送。
  - 您自己的更新，例如当您打开、评论或关闭议题或拉取请求时。

您还可以向不同电子邮件地址发送通知，具体取决于拥有仓库的组织。 您的组织可能要求验证特定域的电子邮件地址。 有关详细信息，请参阅“[选择接收组织的电子邮件通知的位置](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent)”。

您也可以将特定仓库的通知发送到电子邮件地址。 有关详细信息，请参阅“[关于推送到存储库的电子邮件通知](/github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository)”。

{% data reusables.notifications-v2.email-notification-caveats %}

## 过滤电子邮件通知

{% data variables.product.product_location %} 发送的每封电子邮件通知都包含标头信息。 每封电子邮件的标头信息都是一致的，因此可用于在电子邮件客户端中筛选或转发所有 {% data variables.product.prodname_dotcom %} 通知，或特定类型的 {% data variables.product.prodname_dotcom %} 通知。

如果你认为你收到不属于你的通知，请检查 `X-GitHub-Recipient` 和 `X-GitHub-Recipient-Address` 标题。 这些标头显示预期的收件人。 根据您的电子邮件设置，您可能会收到预期发给其他用户的通知。

来自 {% data variables.product.product_location %} 的电子邮件通知包含以下标头信息：

| 标头 | 信息 |
| --- | --- |
| `From` 地址 | 此地址始终是{% ifversion fpt or ghec %}'`notifications@github.com`'{% else %}“站点管理员配置的无需回复电子邮件地址”{% endif %}。 |
| `To` 字段 | 此字段直接连接到线程。{% ifversion not ghae %} 如果你回复电子邮件，将在对话中添加一个新的评论。{% endif %} |
| `Cc` 地址 | 如果你订阅了对话，{% data variables.product.product_name %} 将会 `Cc` 给你。 第二个 `Cc` 电子邮件地址与通知原因匹配。 这些通知原因的后缀是 {% data variables.notifications.cc_address %}。 可能的通知原因包括： <ul><li>`assign`：为你分配了一个议题或拉取请求。</li><li>`author`：你创建了议题或拉取请求。</li><li>`ci_activity`：你触发的 {% data variables.product.prodname_actions %} 工作流程运行已完成。</li><li>`comment`：你对议题或拉取请求发表了评论。</li><li>`manual`：你手动订阅的议题或拉取请求有更新。</li><li>`mention`：有人在议题或拉取请求中提及了你。</li><li>`push`：有人提交了你订阅的拉取请求。</li><li>`review_requested`：有人申请你或你所在的团队评审拉取请求。</li><li>`security_alert`：{% data variables.product.prodname_dotcom %} 检测到你要接收其漏洞警报的存储库中存在漏洞。</li><li>`state_change`：你订阅的议题或拉取请求已关闭或打开。</li><li>`subscribed`：你监视的存储库有更新。</li><li>`team_mention`：你所属的团队在议题或拉取请求中被提及。</li><li>`your_activity`：你打开、评论或关闭了议题或拉取请求。</li></ul> |
| `mailing list` 字段 | 此字段识别仓库名称及其所有者。 此地址的格式始终为 `<repository name>.<repository owner>.{% data variables.command_line.backticks %}`。 |
| `X-GitHub-Severity` 字段 | {% data reusables.repositories.security-alerts-x-github-severity %} 可能的严重程度等级包括：<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。 |

## 选择通知设置

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. 在通知设置页面上，选择在以下情况下如何接收通知：
    - 在您关注的仓库或团队讨论或参与的对话中发生了更新。 有关详细信息，请参阅“[关于参与和监视通知](#about-participating-and-watching-notifications)”。
    - 您获得了新仓库的访问权限或加入了新团队。 有关详细信息，请参阅“[自动监视](#automatic-watching)”。
    - 存储库中有新的 {% data variables.product.prodname_dependabot_alerts %}。 有关详细信息，请参阅“[{% data variables.product.prodname_dependabot_alerts %} 通知选项](#dependabot-alerts-notification-options)”。  {% ifversion fpt or ghec %}
    - 在使用 {% data variables.product.prodname_actions %} 设置的仓库上有工作流程运行更新。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} notification options](#github-actions-notification-options)”。{% endif %}{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5668 %}
    - 新部署密钥已添加到属于您作为其所有者的组织的仓库。 有关详细信息，请参阅“[组织警报通知选项](#organization-alerts-notification-options)”。{% endif %}

## 自动关注

默认情况下，每当您获得新仓库的访问权限时，您将会自动开始关注该仓库。 每当你加入新团队时，你都会自动订阅更新，并在该团队被 @mentioned时收到通知。 如果不想自动订阅，您可以取消选择自动关注选项。

  ![自动关注选项](/assets/images/help/notifications-v2/automatic-watching-options.png)

如果禁用了“Automatically watch repositories（自动关注仓库）”，您将不会自动关注自己拥有的仓库。 您必须导航到仓库页面，然后选择关注选项。

## 配置单个仓库的关注设置

您可以选择关注还是取消关注单个仓库。 您还可以选择仅接收某些事件类型的通知，例如 {% data reusables.notifications-v2.custom-notification-types %} （如果为存储库启用），或者完全忽略单个存储库。

{% data reusables.repositories.navigate-to-repo %}
2. 在右上角，选择“Watch（关注）”下拉菜单以单击关注选项。
{% ifversion fpt or ghes or ghae-issue-4910 or ghec %} ![存储库下拉菜单中的“监视”选项](/assets/images/help/notifications-v2/watch-repository-options-custom.png)

   “自定义”选项可用于进一步自定义通知，以便除了参与和 @mentions之外，你仅在存储库中发生特定事件时才收到通知。
{% else %} ![存储库下拉菜单中的“监视”选项](/assets/images/help/notifications-v2/watch-repository-options.png){% endif %} {% ifversion fpt or ghes or ghae-issue-4910 or ghec %} ![存储库下拉菜单中的“自定义监视”选项](/assets/images/help/notifications-v2/watch-repository-options-custom2-dotcom.png) 如果选择“议题”，你将收到存储库中每个议题（包括在你选择此选项之前存在的议题）的更新通知并订阅这些更新。 如果你在此存储库中的拉取请求中被 @mentioned，则除了收到有关议题的通知外，你还将收到有关该特定拉取请求的通知并订阅其更新。
   {% endif %}

## 选择接收组织的电子邮件通知的位置

如果您属于某个组织，您可以选择要接收组织活动通知的电子邮件帐户。 例如，如果您属于某个工作组织，您可能希望通知发送到您的工作电子邮件地址，而不是您的个人地址。    

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. 在“Default notification email（默认通知电子邮件）”下，选择要接收通知的电子邮件地址。   
![默认通知电子邮件地址下拉菜单](/assets/images/help/notifications/notifications_primary_email_for_orgs.png) 
4. 单击“ **保存**”。  

### 自定义每个组织的电子邮件路由   

如果您是多个组织的成员，您可以配置每个组织发送通知到任何{% ifversion fpt or ghec %} 您已验证的电子邮件地址{% else %} 帐户的电子邮件地址{% endif %}。 {% ifversion fpt or ghec %} 有关详细信息，请参阅“[验证电子邮件地址](/articles/verifying-your-email-address)”。{% endif %} 

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. 在“Custom routing（自定义路由）”下，在列表中找到您组织的名称。   
![组织和电子邮件地址列表](/assets/images/help/notifications/notifications_org_emails.png)    
4. 单击要更改的电子邮件地址旁边的“编辑”。
![编辑组织的电子邮件地址](/assets/images/help/notifications/notifications_edit_org_emails.png)   
5. 选择一个经验证的电子邮件地址，然后单击“保存”。    
![切换组织对应的电子邮件地址](/assets/images/help/notifications/notifications_switching_org_email.gif)

## {% data variables.product.prodname_dependabot_alerts %} 通知选项 

{% data reusables.notifications.vulnerable-dependency-notification-enable %} {% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} {% data reusables.notifications.vulnerable-dependency-notification-options %}

若要详细了解可用的通知传递方法，并查看关于优化 {% data variables.product.prodname_dependabot_alerts %} 通知的建议，请参阅“[为 {% data variables.product.prodname_dependabot_alerts %} 配置通知](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)”。

{% ifversion fpt or ghes or ghec %}
## {% data variables.product.prodname_actions %} 通知选项

选择您希望如何接收所关注仓库的工作流程运行更新，通过 {% data variables.product.prodname_actions %} 设置。 您也可以选择仅接收关于失败的工作流程运行的通知。

  ![{% data variables.product.prodname_actions %} 的警报选项](/assets/images/help/notifications-v2/github-actions-notification-options.png)

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5668 %}
## 组织警报通知选项 

如果您是组织所有者，则当组织成员向组织内的存储库添加新的部署密钥时，默认情况下，您将收到电子邮件通知。 您可以取消订阅这些通知。 在通知设置页面上的“组织警报”下，取消选择“电子邮件”。 

{% endif %}

{% ifversion fpt or ghes or ghec %}
## 使用 {% data variables.product.prodname_mobile %} 管理通知设置

安装 {% data variables.product.prodname_mobile %} 时，您将自动选择 web 通知。 在应用程序中，您可以为以下事件启用推送通知。
- 直接提及
- 分配到议题或拉取请求
- 请求审核拉取请求
- 请求批准部署

您还可以安排 {% data variables.product.prodname_mobile %} 何时向移动设备发送推送通知。

{% data reusables.mobile.push-notifications-on-ghes %}

### 使用 {% data variables.product.prodname_ios %} 管理通知设置

1. 在底部菜单中，点击“配置文件”。
2. 要查看设置，请点击 {% octicon "gear" aria-label="The Gear icon" %}。
3. 要更新通知设置，请点击“通知”，然后使用切换开关来启用或禁用首选类型的推送通知。
4. （可选）要安排 {% data variables.product.prodname_mobile %} 何时向移动设备发送推送通知，请点击“工作时间”，使用“自定义工作时间”切换开关，然后选择何时接收推送通知 。

### 使用 {% data variables.product.prodname_android %} 管理通知设置

1. 在底部菜单中，点击“配置文件”。
2. 要查看设置，请点击 {% octicon "gear" aria-label="The Gear icon" %}。
3. 要更新通知设置，请点击“配置通知”，然后使用切换开关来启用或禁用首选类型的推送通知。
4. （可选）要安排 {% data variables.product.prodname_mobile %} 何时向移动设备发送推送通知，请点击“工作时间”，使用“自定义工作时间”切换开关，然后选择何时接收推送通知 。

## 使用 {% data variables.product.prodname_mobile %} 配置个别仓库的关注设置 

您可以选择关注还是取消关注单个仓库。 你也可以选择接收{% ifversion fpt or ghec %}特定事件类型，如议题、拉取请求、讨论（如已对存储库启用）以及{% endif %}新版本的通知，或者完全忽略单个存储库。

1. 在 {% data variables.product.prodname_mobile %} 上，导航到存储库的主页面。
2. 点击“监视”。
   ![{% data variables.product.prodname_mobile %} 上的监视按钮](/assets/images/help/notifications-v2/mobile-watch-button.png)
3. 要选择接收通知的活动，请点击首选的关注设置。
   ![{% data variables.product.prodname_mobile %} 中的监视设置下拉菜单](/assets/images/help/notifications-v2/mobile-watch-settings.png)

{% endif %}
