---
title: 管理您的预定提醒
intro: Get reminders in Slack when you or your team have pull requests waiting for review.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders
- /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
shortTitle: Manage scheduled reminders
ms.openlocfilehash: 41670a8c8b8aa1e6eade16c42f5a146f1ec0f5ee
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145084744"
---
## <a name="about-scheduled-reminders-for-users"></a>关于用户的预定提醒

预定提醒用于确保用户将重点放在需要他们关注的最重要审查请求上。 拉取请求的预定提醒将会在指定的时间在 Slack 中向您发送一条消息，提醒已经打开、需要您审查的拉取请求。 例如，您可以设置预定提醒，以便每天早上 10 点在 Slack 中向您发送消息，提醒需要由您或您的一个团队审查的拉取请求。

对于某些事件，您还可以为预定提醒启用实时警报。 实时警报会在重要事件（例如分配审查时）发生时立即发送到您的 Slack 通道。

对于您所在组织的拉取请求，您可以为个人或团队级审查请求设置预定提醒。 组织所有者必须先授权您的 Slack 工作区，然后您才可为自己创建预定提醒。 有关详细信息，请参阅“[管理组织的预定提醒](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)”。

{% data reusables.reminders.scheduled-reminders-limitations %}

## <a name="creating-scheduled-reminders-for-your-personal-account"></a>为你的个人帐户创建预定提醒

{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. 在要预定提醒的组织旁边，单击“编辑”。
![预定提醒编辑按钮](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %}
8. 或者，要对分配给你的审查接收预定提醒，请选择“审查分配给你的请求”。
![审查分配给你的请求复选框](/assets/images/help/profile/scheduled-reminders-your-requests.png)
9. 或者，要对分配给你所属团队的审查接受预定提醒，请选择“审查分配给你的团队的请求”。
![审查分配给你的团队的请求复选框](/assets/images/help/profile/scheduled-reminders-your-team-requests.png) {% data reusables.reminders.real-time-alerts %} ![启用实时警报复选框](/assets/images/help/settings/scheduled-reminders-real-time-alerts-personal.png) {% data reusables.reminders.create-reminder %}

## <a name="managing-scheduled-reminders-for-your-personal-account"></a>为你的个人帐户管理预定提醒
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. 在要编辑预定提醒的组织旁边，单击“编辑”。
![预定提醒编辑按钮](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## <a name="deleting-scheduled-reminders-for-your-personal-account"></a>为你的个人帐户删除预定提醒
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. 在要删除提醒的组织旁边，单击“编辑”。
![预定提醒编辑按钮](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.delete %}

## <a name="further-reading"></a>延伸阅读

- [管理组织的预定提醒](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)
- [管理团队的预定提醒](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)
