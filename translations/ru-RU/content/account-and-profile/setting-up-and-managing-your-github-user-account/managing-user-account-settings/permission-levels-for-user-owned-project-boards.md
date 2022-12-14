---
title: Уровни разрешений для досок проектов, принадлежащих пользователю
intro: 'A project board owned by a personal account has two permission levels: the project board owner and collaborators.'
redirect_from:
- /articles/permission-levels-for-user-owned-project-boards
- /github/setting-up-and-managing-your-github-user-account/permission-levels-for-user-owned-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-user-owned-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Permission user project boards
ms.openlocfilehash: 535ef830e9ee0d8d5a3bb81ea208711cf4060943
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088821"
---
## <a name="permissions-overview"></a>Permissions overview (Общие сведения о разрешениях)

Владелец у доски проекта, принадлежащей пользователю, может быть только один; это разрешение не может быть предоставлено другой личной учетной записи. Помимо владельца, над досками проектов могут совместно работать и другие пользователи.

Существует три уровня разрешений для участников совместной работы над доской проекта:

{% data reusables.project-management.project-board-permissions %}

## <a name="owner-and-admin-permissions-for-a-user-owned-project-board"></a>Разрешения владельца и администратора для доски проекта, принадлежащей пользователю

Владелец доски проекта и участники совместной работы с разрешениями администратора имеют полный контроль над доской проекта. Помимо всех разрешений, предоставленных участниками совместной работы над доской проектов, владелец доски проекта и участник совместной работы с разрешениями администратора могут:

- [Управлять, просматривать и добавлять участников совместной работы](/articles/managing-access-to-your-user-account-s-project-boards)
- [Настроить доску проекта как {% ifversion ghae %}внутреннюю{% else %}общедоступную{% endif %} или частную](/articles/changing-project-board-visibility)
- [Удалить доску проекта](/articles/deleting-a-project-board/)
- [Закрыть доску проекта](/articles/closing-a-project-board/)
- [Открыть ранее закрытую доску проекта](/articles/reopening-a-closed-project-board)

## <a name="read-and-write-permissions-for-a-user-owned-project-board"></a>Разрешения на чтение и запись для доски проекта, принадлежащей пользователю

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

## <a name="project-board-visibility"></a>Видимость панели проекта.

Видимость доски проекта можно изменить с частной на {% ifversion ghae %}внутреннюю{% else %}общедоступную{% endif %} и обратно. По умолчанию доски проектов, принадлежащие пользователю, являются частными. Дополнительные сведения см. в разделе [Изменение видимости панели проекта](/articles/changing-project-board-visibility).

## <a name="further-reading"></a>Дополнительные материалы

  - [Управление доступом к доскам проектов личной учетной записи](/articles/managing-access-to-your-user-account-s-project-boards)
