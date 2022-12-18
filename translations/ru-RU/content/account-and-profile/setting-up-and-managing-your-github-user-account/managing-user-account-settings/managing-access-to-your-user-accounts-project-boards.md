---
title: Управление доступом к панелям проектов учетной записи пользователя
intro: As a project board owner, you can add or remove a collaborator and customize their permissions to a project board.
redirect_from:
- /articles/managing-project-boards-in-your-repository-or-organization
- /articles/managing-access-to-your-user-account-s-project-boards
- /articles/managing-access-to-your-user-accounts-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-user-accounts-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Manage access project boards
ms.openlocfilehash: 5a5cf08169fec04a896b05b7934c80cfe9f2eded
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088890"
---
Участник совместной работы — это пользователь с разрешениями на доступ к панели проекта, владельцем которой вы являетесь. По умолчанию участнику совместной работы предоставляются разрешения на чтение. Дополнительные сведения см. в разделе [Уровни разрешений для панелей проектов, принадлежащих пользователю](/articles/permission-levels-for-user-owned-project-boards).

## <a name="inviting-collaborators-to-a-user-owned-project-board"></a>Приглашение участников совместной работы в панель проекта, принадлежащую пользователю

1. Перейдите к панели проекта, в которую требуется добавить участника совместной работы.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
5. В разделе "Поиск по имени пользователя, полному имени или адресу электронной почты" введите имя участника совместной работы, имя пользователя или адрес электронной почты {% data variables.product.prodname_dotcom %}.
   ![Раздел "Участники совместной работы"; в поле поиска введено имя пользователя Octocat](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %}
7. Новый участник совместной работы по умолчанию получает разрешения на чтение. При необходимости можно выбрать другой уровень разрешений в раскрывающемся меню рядом с именем нового участника.
  ![Раздел "Участники совместной работы"; выбрано раскрывающееся меню "Разрешения"](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

## <a name="removing-a-collaborator-from-a-user-owned-project-board"></a>Удаление участника совместной работы из панели проекта, принадлежащей пользователю

{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}
