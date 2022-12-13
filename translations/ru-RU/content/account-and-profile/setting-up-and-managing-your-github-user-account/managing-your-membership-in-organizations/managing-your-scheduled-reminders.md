---
title: Управление запланированными напоминаниями
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
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088794"
---
## <a name="about-scheduled-reminders-for-users"></a>Сведения о запланированных напоминаниях для пользователей

Запланированные напоминания применяются для того, чтобы пользователи сосредоточились на наиболее важных запросах на проверку, требующих их внимания. Запланированные напоминания для запросов на вытягивание будут отправлять вам в Slack сообщение с открытыми запросами на вытягивание, которым требуется проверка в указанное время. Например, можно настроить запланированные напоминания для отправки в Slack каждое утро в 10:00 с помощью сообщений с запросами на вытягивание, которые необходимо проверить вам или одной из ваших команд.

Для определенных событий можно также включить оповещения в режиме реального времени для запланированных напоминаний. Оповещения в режиме реального времени отправляются в канал Slack, как только происходит важное событие, например при назначении проверки.

Можно задать запланированные напоминания для личных или командных запросов на проверку для запросов на вытягивание в организациях, членом которых вы являетесь. Прежде чем можно будет создавать запланированное напоминание для себя, владелец организации должен авторизовать рабочую область Slack. Дополнительные сведения см. в разделе [Управление запланированными напоминаниями для организации](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization).

{% data reusables.reminders.scheduled-reminders-limitations %}

## <a name="creating-scheduled-reminders-for-your-personal-account"></a>Создание запланированных напоминаний для личной учетной записи

{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Рядом с организацией, для которой требуется запланировать напоминания, нажмите кнопку **Изменить**.
![Кнопка редактирования запланированных напоминаний](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %}
8. При необходимости, чтобы получать запланированные напоминания о назначенных вам проверках, выберите **Проверить назначенные вам запросы**.
![Флажок "Проверить назначенные вам запросы"](/assets/images/help/profile/scheduled-reminders-your-requests.png)
9. При необходимости, чтобы получать запланированные напоминания о проверках, назначенных команде, членом которой вы являетесь, выберите **Проверить назначенные вашей команде запросы**.
![Флажок для запросов проверки, назначенных команде](/assets/images/help/profile/scheduled-reminders-your-team-requests.png) {% data reusables.reminders.real-time-alerts %} ![Флажок для включения оповещений в режиме реального времени](/assets/images/help/settings/scheduled-reminders-real-time-alerts-personal.png) {% data reusables.reminders.create-reminder %}

## <a name="managing-scheduled-reminders-for-your-personal-account"></a>Управление запланированными напоминаниями для личной учетной записи
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Рядом с организацией, для которой требуется внести изменения в запланированные напоминания, нажмите кнопку **Изменить**.
![Кнопка редактирования запланированных напоминаний](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## <a name="deleting-scheduled-reminders-for-your-personal-account"></a>Удаление запланированных напоминаний для личной учетной записи
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. Рядом с организацией, для которой требуется удалить напоминания, нажмите кнопку **Изменить**.
![Кнопка редактирования запланированных напоминаний](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.delete %}

## <a name="further-reading"></a>Дополнительные материалы

- [Управление запланированными напоминаниями для организации](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)
- [Управление запланированными напоминаниями для команды](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)
