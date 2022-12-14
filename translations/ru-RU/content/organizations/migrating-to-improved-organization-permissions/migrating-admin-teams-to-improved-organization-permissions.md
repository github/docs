---
title: Перенос команд администраторов в улучшенную структуру разрешений организации
intro: 'Если ваша организация была создана позднее, чем в сентябре 2015 года, по умолчанию у нее есть улучшенные разрешения организации. Организациям, созданным до сентября 2015 года, может потребоваться перенести прежние команды "Владельцы" и "Администраторы" в улучшенную модель разрешений. Участники прежних команд администраторов автоматически сохраняют возможность создавать репозитории до тех пор, пока эти команды не будут перенесены в улучшенную модель разрешений организации.'
redirect_from:
  - /articles/migrating-your-previous-admin-teams-to-the-improved-organization-permissions
  - /articles/migrating-admin-teams-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/migrating-admin-teams-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Migrate admin team
ms.openlocfilehash: 32a3bd684d2ed81d1ba492b4e343af3e03390364
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125587'
---
По умолчанию все члены организации могут создавать репозитории. Если вы ограничиваете [разрешения на создание репозитория](/articles/restricting-repository-creation-in-your-organization) для владельцев организации, а ваша организация была создана в рамках устаревшей структуры разрешений организации, члены устаревших команд администрирования по-прежнему могут создавать репозитории.

Устаревшие команды администраторов — это команды, созданные с уровнем разрешений администратора в устаревшей структуре разрешений организации. Участники этих команд смогли создать репозитории для организации, и мы сохранили эту возможность в улучшенной структуре разрешений организации.

Эту возможность можно удалить, переместив устаревшие команды администраторов в улучшенную структуру разрешений организации.

Дополнительные сведения см. в разделе [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

{% warning %}

**Предупреждение.** Если в вашей организации отключены [разрешения на создание репозитория](/articles/restricting-repository-creation-in-your-organization) для всех участников, и некоторые участники устаревших команд администрирования могут утратить разрешения на создание репозитория. Если ваша организация включила создание репозитория для участников, перенос устаревших команд администраторов в улучшенную структуру разрешений организации не повлияет на способность участников группы создавать репозитории.

{% endwarning %}

## Перенос всех устаревших команд администраторов организации

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.teams_sidebar %}
1. Просмотрите устаревшие команды администраторов вашей организации и нажмите кнопку **Перенести все команды**.
  ![Кнопка "Перенести все команды"](/assets/images/help/teams/migrate-all-legacy-admin-teams.png)
1. Ознакомьтесь с информацией о возможных изменениях разрешений для участников этих команд, а затем щелкните **"Перенести все команды".** 
  ![Кнопка "Подтвердить миграцию"](/assets/images/help/teams/confirm-migrate-all-legacy-admin-teams.png)

## Перенос одной группы администраторов

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. В поле описания команды нажмите кнопку **"Перенести команду**".
  ![Кнопка "Перенести команду"](/assets/images/help/teams/migrate-a-legacy-admin-team.png)
