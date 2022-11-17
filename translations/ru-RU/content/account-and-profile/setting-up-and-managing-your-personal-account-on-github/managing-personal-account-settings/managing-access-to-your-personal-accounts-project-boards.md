---
title: Управление доступом к панелям проектов личной учетной записи
intro: Владелец доски проекта может добавлять или удалять участников совместной работы и настраивать разрешения таких участников на доступ к доске проекта.
redirect_from:
  - /articles/managing-project-boards-in-your-repository-or-organization
  - /articles/managing-access-to-your-user-account-s-project-boards
  - /articles/managing-access-to-your-user-accounts-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-user-accounts-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Manage access project boards
ms.openlocfilehash: 4cbf968cee79ac8e4aafbc5eea8220949cf80a30
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145165219'
---
Участник совместной работы — это пользователь с разрешениями на доступ к панели проекта, владельцем которой вы являетесь. По умолчанию участнику совместной работы предоставляются разрешения на чтение. Дополнительные сведения см. в разделе [Уровни разрешений для панелей проектов, принадлежащих пользователю](/articles/permission-levels-for-user-owned-project-boards).

## Приглашение участников совместной работы в панель проекта, принадлежащую пользователю

1. Перейдите к панели проекта, в которую требуется добавить участника совместной работы.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
5. В разделе "Поиск по имени пользователя, полному имени или адресу электронной почты" введите имя участника совместной работы, имя пользователя или адрес электронной почты {% data variables.product.prodname_dotcom %}.
   ![Раздел "Участники совместной работы"; в поле поиска введено имя пользователя Octocat](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %}
7. Новый участник совместной работы по умолчанию получает разрешения на чтение. При необходимости можно выбрать другой уровень разрешений в раскрывающемся меню рядом с именем нового участника.
  ![Раздел "Участники совместной работы"; выбрано раскрывающееся меню "Разрешения"](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

## Удаление участника совместной работы из панели проекта, принадлежащей пользователю

{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}
