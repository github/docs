---
title: 关于推送到仓库的电子邮件通知
intro: 您可以选择在任何人推送到仓库时自动发送电子邮件通知到特定电子邮件地址。
permissions: People with admin permissions in a repository can enable email notifications for pushes to your repository.
redirect_from:
  - /articles/managing-notifications-for-pushes-to-a-repository
  - /articles/receiving-email-notifications-for-pushes-to-a-repository
  - /articles/about-email-notifications-for-pushes-to-your-repository
  - /github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/about-email-notifications-for-pushes-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Email notifications for pushes
ms.openlocfilehash: ee12b8f8270921abd1fe70c748449e46fd472e2c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129327'
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

您可以过滤因推送到仓库而收到的电子邮件通知。 有关详细信息，请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)”。

## 对推送到仓库启用电子邮件通知

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-notifications %}
5. 输入最多两个您希望通知发送到的电子邮件地址，用空格分隔。 如果要将电子邮件发送到两个以上的帐户，请将其中一个电子邮件地址设为群组电子邮件地址。
![电子邮件地址文本框](/assets/images/help/settings/email_services_addresses.png)
1. 如果操作自己的服务器，可通过“Approved 标头”验证电子邮件的完整性。 “Approved 标头”是在此字段中键入的令牌或机密，该令牌或机密随电子邮件一起发送。 如果电子邮件的 `Approved` 标头与令牌匹配，则可以信任该电子邮件来自 {% data variables.product.product_name %}。
![电子邮件 approved 标头文本框](/assets/images/help/settings/email_services_approved_header.png)
7. 单击“设置通知”。
![“设置通知”按钮](/assets/images/help/settings/setup_notifications_settings.png)

## 延伸阅读
- [关于通知](/github/managing-subscriptions-and-notifications-on-github/about-notifications)

