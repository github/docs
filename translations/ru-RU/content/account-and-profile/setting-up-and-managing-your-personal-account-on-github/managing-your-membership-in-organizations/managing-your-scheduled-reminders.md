---
title: Управление запланированными напоминаниями
intro: 'Напоминания можно получать в Slack, если у вас или вашей команды есть запросы на вытягивание, ожидающие проверки.'
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145165180'
---
## Сведения о запланированных напоминаниях для пользователей

Запланированные напоминания применяются для того, чтобы пользователи сосредоточились на наиболее важных запросах на проверку, требующих их внимания. Запланированные напоминания для запросов на вытягивание будут отправлять вам в Slack сообщение с открытыми запросами на вытягивание, которым требуется проверка в указанное время. Например, можно настроить запланированные напоминания для отправки в Slack каждое утро в 10:00 с помощью сообщений с запросами на вытягивание, которые необходимо проверить вам или одной из ваших команд.

Для определенных событий можно также включить оповещения в режиме реального времени для запланированных напоминаний. Оповещения в режиме реального времени отправляются в канал Slack, как только происходит важное событие, например при назначении проверки.

Можно задать запланированные напоминания для личных или командных запросов на проверку для запросов на вытягивание в организациях, членом которых вы являетесь. Прежде чем можно будет создавать запланированное напоминание для себя, владелец организации должен авторизовать рабочую область Slack. Дополнительные сведения см. в разделе [Управление запланированными напоминаниями для организации](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization).

{% data reusables.reminders.scheduled-reminders-limitations %}

## Создание запланированных напоминаний для личной учетной записи

{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Рядом с организацией, для которой требуется запланировать напоминания, нажмите кнопку **Изменить**.
![Кнопка редактирования запланированных напоминаний](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %}
8. При необходимости, чтобы получать запланированные напоминания о назначенных вам проверках, выберите **Проверить назначенные вам запросы**.
![Флажок "Проверить назначенные вам запросы"](/assets/images/help/profile/scheduled-reminders-your-requests.png)
9. При необходимости, чтобы получать запланированные напоминания о проверках, назначенных команде, членом которой вы являетесь, выберите **Проверить назначенные вашей команде запросы**.
![Флажок для запросов проверки, назначенных команде](/assets/images/help/profile/scheduled-reminders-your-team-requests.png) {% data reusables.reminders.real-time-alerts %} ![Флажок для включения оповещений в режиме реального времени](/assets/images/help/settings/scheduled-reminders-real-time-alerts-personal.png) {% data reusables.reminders.create-reminder %}

## Управление запланированными напоминаниями для личной учетной записи
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Рядом с организацией, для которой требуется внести изменения в запланированные напоминания, нажмите кнопку **Изменить**.
![Кнопка редактирования запланированных напоминаний](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## Удаление запланированных напоминаний для личной учетной записи
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Рядом с организацией, для которой требуется удалить напоминания, нажмите кнопку **Изменить**.
![Кнопка редактирования запланированных напоминаний](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.delete %}

## Дополнительные материалы

- [Управление запланированными напоминаниями для организации](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)
- [Управление запланированными напоминаниями для команды](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)
