---
title: 自定义企业的用户消息
shortTitle: Customizing user messages
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-for-your-enterprise
intro: '您可以创建用户将在 {% data variables.product.product_location %} 上看到的自定义消息。'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Maintenance
ms.openlocfilehash: 08cd547cd79b1e731f439688f02b475db8db4d1d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147052054'
---
## 关于用户消息

有几种类型的用户消息。
- 出现在{% ifversion ghes %}登录或{% endif %}退出登录{% ifversion ghes or ghae %}页面上的消息
- 必须忽略在弹出窗口中出现一次的强制性消息{% endif %}{% ifversion ghes or ghae %}
- 公告横幅，出现在每个页面的顶部{% endif %}

{% ifversion ghes %} {% note %}

注意：如果使用 SAML 进行身份验证，登录页面将由标识提供者呈现，无法通过 {% data variables.product.prodname_ghe_server %} 进行自定义。

{% endnote %}

您可以使用 Markdown 格式化消息。 有关详细信息，请参阅“[关于在 {% data variables.product.prodname_dotcom %} 上编写和设置格式](/articles/about-writing-and-formatting-on-github/)”。

## 创建自定义登录消息

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes %}在“登录页面”的右侧{% else %}下方{% endif %}，单击“添加消息”或“编辑消息” 。
![{% ifversion ghes %}添加{% else %}编辑{% endif %}消息按钮](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. 在“登录消息”下，输入想要用户看到的消息。
![登录消息](/assets/images/enterprise/site-admin-settings/sign-in-message.png){% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![预览按钮](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. 预览显示的消息。
![呈现的登录消息](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %} {% endif %}

## 创建自定义退出消息

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes or ghae %}在“退出登录页面”的右侧{% else %}下方{% endif %}，单击“添加消息”或“编辑消息” 。
![“添加消息”按钮](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. 在“退出登录消息”下，输入想要用户看到的消息。
![签名 two_factor_auth_header 消息](/assets/images/enterprise/site-admin-settings/sign-out-message.png){% ifversion ghes or ghae %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![预览按钮](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. 预览显示的消息。
![呈现的退出登录消息](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}

{% ifversion ghes or ghae %}
## 创建必读消息

您可以创建必读消息，保存后，{% data variables.product.product_name %} 将在所有用户首次登录时显示该消息。 该消息出现在弹出窗口中，用户必须忽略后才能使用 {% data variables.product.product_location %}。

必读消息有多种用途。

- 为新员工提供入职信息
- 告诉用户如何获得 {% data variables.product.product_location %} 帮助
- 确保所有用户阅读有关使用 {% data variables.product.product_location %} 的服务条款

如果消息中包含 Markdown 复选框，则用户必须选中所有复选框才能忽略消息。 例如，如果您在必读消息中包含服务条款，您可以要求每个用户选中复选框以确认他们阅读了这些条款。

每次用户看到必读消息时，都会创建审核日志事件。 该事件包括用户看到的消息的版本。 有关详细信息，请参阅“[企业的审核日志事件](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)”。

{% note %}

注意：如果更改了 {% data variables.product.product_location %} 的必读消息，已经确认该消息的用户将不会看到新消息。

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. 在“必读消息”的右侧，单击“添加消息”。
  ![添加必须消息按钮](/assets/images/enterprise/site-admin-settings/add-mandatory-message-button.png)
1. 在“Mandatory message（必读消息）”下面的文本框中输入消息。
  ![必读消息文本框](/assets/images/enterprise/site-admin-settings/mandatory-message-text-box.png) {% data reusables.enterprise_site_admin_settings.message-preview-save %}

{% endif %}

{% ifversion ghes or ghae %}
## 创建全局公告横幅

您可以设置全局公告横幅，以便在每个页面顶部向所有用户显示。

{% ifversion ghae or ghes %} 你也可以使用命令行实用工具或{% ifversion ghes %}使用 API 在管理 shell 中{% endif %}设置公告横幅。 有关详细信息，请参阅{% ifversion ghes %}“[命令行实用工具](/enterprise/admin/configuration/command-line-utilities#ghe-announce)”和{% endif %}“[{% data variables.product.prodname_enterprise %} 管理](/rest/reference/enterprise-admin#announcements)”。
{% else %}

您还可以使用命令行工具在管理 shell 中设置公告横幅。 有关详细信息，请参阅“[命令行实用工具](/enterprise/admin/configuration/command-line-utilities#ghe-announce)”。

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. {% ifversion ghes or ghae %}在“公告”的右侧{% else %}下方{% endif %}，单击“添加公告”。
  ![“添加公告”按钮](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. 在“Announcement（公告）”下的在文本字段中键入要显示在横幅中的公告。
  ![用于输入公告的文本字段](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. （可选）在“Expires on（到期日）”下，选择日历下拉菜单并单击一个到期日。
  ![用于选择到期日期的日历下拉菜单](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png){% ifversion ghe-announce-dismiss %}
1. （可选）若要允许每个用户关闭公告，请选择“用户可关闭”。

   ![“用户可关闭”复选框的屏幕截图](/assets/images/enterprise/site-admin-settings/user-dismissible-checkbox.png){% endif %} {% data reusables.enterprise_site_admin_settings.message-preview-save %} {% endif %}
