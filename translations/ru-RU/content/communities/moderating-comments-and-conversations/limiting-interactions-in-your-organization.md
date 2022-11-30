---
title: Ограничение взаимодействий в организации
intro: 'Вы можете временно применить период ограниченной активности для определенных пользователей во всех общедоступных репозиториях, принадлежащих вашей организации.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
permissions: Organization owners and moderators can limit interactions in an organization.
topics:
  - Community
shortTitle: Limit interactions in org
ms.openlocfilehash: 03bfad7a0da3386b6205517deb66e6b923de8386
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066685'
---
## Сведения о временных ограничениях взаимодействия

Ограничение взаимодействий в организации обеспечивает временные ограничения взаимодействия для всех общедоступных репозиториев, принадлежащих организации. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} По истечении срока действия ограничения пользователи могут возобновить нормальную работу в общедоступных репозиториях организации.

{% data reusables.community.types-of-interaction-limits %}

Члены организации не затрагиваются ни одним из типов ограничений.

При включении ограничений действий на уровне организации не удастся включить или отключить ограничения взаимодействия для отдельных репозиториев. Дополнительные сведения об ограничении действий для отдельного репозитория см. в разделе "[Ограничение взаимодействий в репозитории](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".

Владельцы и модераторы организации также могут блокировать пользователей на определенный период времени. После истечения срока действия блокировки пользователь автоматически разблокируется. Дополнительные сведения см. в разделе "[Блокировка пользователя из организации](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)".

## Ограничение взаимодействий в организации


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. _Для владельцев организации:_ в разделе "Доступ" на боковой панели выберите **{% octicon "report" aria-label="The report icon" %} Модерация**, а затем нажмите кнопку **Ограничения взаимодействия**.

   _Для модераторов организации:_ на боковой панели щелкните **Ограничения взаимодействия**.

{% data reusables.community.set-interaction-limit %} ![Параметры временного ограничения взаимодействия](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

## Дополнительные материалы
- [Сообщение о нарушении или спаме](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
- [Управление доступом пользователя к репозиторию организации](/articles/managing-an-individual-s-access-to-an-organization-repository)
- [Уровни разрешений для репозитория личной учетной записи](/articles/permission-levels-for-a-user-account-repository)
- [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
- [Управление модераторами в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)
