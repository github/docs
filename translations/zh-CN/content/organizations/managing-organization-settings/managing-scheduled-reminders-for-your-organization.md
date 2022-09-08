---
title: 管理组织的预定提醒
intro: 对于组织中的团队已请求审查的所有拉取请求，您可以在 Slack 中收到提醒。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage scheduled reminders
ms.openlocfilehash: 870e22581488689a72cc70f317b6d97fdc4f5ed5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109452'
---
## 关于拉取请求的预定提醒

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

对于团队的所有拉取请求或团队已经请求审查的所有拉取请求，组织所有者可为其组织中的一个或多个团队预定提醒。

{% data reusables.reminders.scheduled-reminders-limitations %}

## 为组织创建预定提醒
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.slack-channel %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %} {% data reusables.reminders.tracked-repos %}
1.  在“筛选已分配进行评审代码的团队”下，单击“添加团队”下拉列表并选择一个或多个团队。 您最多可以添加 100 个团队。 如果您选择的团队无法访问上面选择的“跟踪的仓库”，您将无法创建预定提醒。
![添加团队下拉列表](/assets/images/help/organizations/scheduled-reminders-add-teams.png) {% data reusables.reminders.ignore-drafts %} {% data reusables.reminders.no-review-requests %} {% data reusables.reminders.author-reviews %} {% data reusables.reminders.approved-prs %} {% data reusables.reminders.min-age %} {% data reusables.reminders.min-staleness %} {% data reusables.reminders.ignored-terms %} {% data reusables.reminders.ignored-labels %} {% data reusables.reminders.required-labels %} {% data reusables.reminders.create-reminder %}

## 管理组织的预定提醒
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.edit-existing %} {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## 删除组织的预定提醒
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.delete %}

## 延伸阅读

- [管理你的计划提醒](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)
- [管理团队的计划提醒](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)
