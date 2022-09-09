---
title: 管理您的预定提醒
intro: 当您或您的团队有等待审查的拉取请求时，您会在 Slack 中收到提醒。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
shortTitle: Manage scheduled reminders
ms.openlocfilehash: 7dab3826b1791d3b06b3a2594c3ba132c6d675b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164733'
---
## 关于用户的预定提醒

预定提醒用于确保用户将重点放在需要他们关注的最重要审查请求上。 拉取请求的预定提醒将会在指定的时间在 Slack 中向您发送一条消息，提醒已经打开、需要您审查的拉取请求。 例如，您可以设置预定提醒，以便每天早上 10 点在 Slack 中向您发送消息，提醒需要由您或您的一个团队审查的拉取请求。

对于某些事件，您还可以为预定提醒启用实时警报。 实时警报会在重要事件（例如分配审查时）发生时立即发送到您的 Slack 通道。

对于您所在组织的拉取请求，您可以为个人或团队级审查请求设置预定提醒。 组织所有者必须先授权您的 Slack 工作区，然后您才可为自己创建预定提醒。 有关详细信息，请参阅“[管理组织的预定提醒](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)”。

{% data reusables.reminders.scheduled-reminders-limitations %}

## 为你的个人帐户创建预定提醒

{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. 在要预定提醒的组织旁边，单击“编辑”。
![预定提醒编辑按钮](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %}
8. 或者，要对分配给你的审查接收预定提醒，请选择“审查分配给你的请求”。
![审查分配给你的请求复选框](/assets/images/help/profile/scheduled-reminders-your-requests.png)
9. 或者，要对分配给你所属团队的审查接受预定提醒，请选择“审查分配给你的团队的请求”。
![审查分配给你的团队的请求复选框](/assets/images/help/profile/scheduled-reminders-your-team-requests.png) {% data reusables.reminders.real-time-alerts %} ![启用实时警报复选框](/assets/images/help/settings/scheduled-reminders-real-time-alerts-personal.png) {% data reusables.reminders.create-reminder %}

## 为你的个人帐户管理预定提醒
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. 在要编辑预定提醒的组织旁边，单击“编辑”。
![预定提醒编辑按钮](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## 为你的个人帐户删除预定提醒
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. 在要删除提醒的组织旁边，单击“编辑”。
![预定提醒编辑按钮](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.delete %}

## 延伸阅读

- [管理组织的预定提醒](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)
- [管理团队的预定提醒](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)
