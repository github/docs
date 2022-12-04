---
title: 'Уровни разрешений для доски проекта, принадлежащей личной учетной записи'
intro: 'На доске проекта, принадлежащей личной учетной записи, есть два уровня разрешений: владелец доски проекта и участники совместной работы.'
redirect_from:
  - /articles/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-user-owned-project-boards
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-user-owned-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Project board permissions
ms.openlocfilehash: 353b9ac497abc7110437aafdf691ca48a3ff6cec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165345'
---
## Permissions overview (Общие сведения о разрешениях)

Владелец у доски проекта, принадлежащей пользователю, может быть только один; это разрешение не может быть предоставлено другой личной учетной записи. Помимо владельца, над досками проектов могут совместно работать и другие пользователи.

Существует три уровня разрешений для участников совместной работы над доской проекта:

{% data reusables.project-management.project-board-permissions %}

## Разрешения владельца и администратора для доски проекта, принадлежащей пользователю

Владелец доски проекта и участники совместной работы с разрешениями администратора имеют полный контроль над доской проекта. Помимо всех разрешений, предоставленных участниками совместной работы над доской проектов, владелец доски проекта и участник совместной работы с разрешениями администратора могут:

- [Управлять, просматривать и добавлять участников совместной работы](/articles/managing-access-to-your-user-account-s-project-boards)
- [Настроить доску проекта как {% ifversion ghae %}внутреннюю{% else %}общедоступную{% endif %} или частную](/articles/changing-project-board-visibility)
- [Удалить доску проекта](/articles/deleting-a-project-board/)
- [Закрыть доску проекта](/articles/closing-a-project-board/)
- [Открыть ранее закрытую доску проекта](/articles/reopening-a-closed-project-board)

## Разрешения на чтение и запись для доски проекта, принадлежащей пользователю

Участники совместной работы с доступом для чтения доски проекта, принадлежащей пользователю, могут:

- Просматривать доску проекта
- Копировать доску проекта
- Фильтровать карточки на доске проекта

Участники совместной работы с доступом для записи на доску проекта, принадлежащую пользователю, могут:

- Просматривать доску проекта
- Копировать доску проекта
- Фильтровать карточки на доске проекта
- Редактировать доску проекта
- Связывать репозиторий с доской проекта
- Настраивать автоматизацию для доски проекта
- Копировать доску проекта
- Добавлять проблемы и запросы на вытягивание к доске проекта
- Добавлять примечания к доске проекта
- Отслеживать прогресс на доске проекта
- Архивировать карточки на доске проекта

## Видимость панели проекта.

Видимость доски проекта можно изменить с частной на {% ifversion ghae %}внутреннюю{% else %}общедоступную{% endif %} и обратно. По умолчанию доски проектов, принадлежащие пользователю, являются частными. Дополнительные сведения см. в разделе [Изменение видимости панели проекта](/articles/changing-project-board-visibility).

## Дополнительные материалы

  - [Управление доступом к доскам проектов личной учетной записи](/articles/managing-access-to-your-user-account-s-project-boards)
