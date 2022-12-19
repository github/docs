---
title: Управление запланированными напоминаниями для организации
intro: 'Вы можете получать напоминания в Slack по всем запросам на вытягивание, запрос на проверку которых был отправлен командам в вашей организации.'
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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125715'
---
## Сведения об управлении запланированными напоминаниями для запросов на вытягивание.

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

Владельцы организации могут запланировать напоминание для одной или нескольких команд в своей организации в отношении всех запросов на вытягивание, которые запрашиваются одной или несколькими командами для проверки.

{% data reusables.reminders.scheduled-reminders-limitations %}

## Создание запланированного напоминания для организации
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.slack-channel %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %} {% data reusables.reminders.tracked-repos %}
1.  В разделе "Фильтрация по команде, назначенной для проверки кода", щелкните раскрывающийся список **Добавить команду** и выберите одну или несколько команд. Можно добавить до 100 ссылок. Если выбранная команда не имеет доступа к выбранному выше разделу "Отслеживаемые репозитории", вы не сможете создать запланированное напоминание.
![Добавление раскрывающегося списка команды](/assets/images/help/organizations/scheduled-reminders-add-teams.png) {% data reusables.reminders.ignore-drafts %} {% data reusables.reminders.no-review-requests %} {% data reusables.reminders.author-reviews %} {% data reusables.reminders.approved-prs %} {% data reusables.reminders.min-age %} {% data reusables.reminders.min-staleness %} {% data reusables.reminders.ignored-terms %} {% data reusables.reminders.ignored-labels %} {% data reusables.reminders.required-labels %} {% data reusables.reminders.create-reminder %}

## Управление запланированным напоминанием для организации
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.edit-existing %} {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## Удаление запланированного напоминания для организации
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.delete %}

## Дополнительные материалы

- [Управление запланированными напоминаниями](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)
- [Управление запланированными напоминаниями для команды](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)
