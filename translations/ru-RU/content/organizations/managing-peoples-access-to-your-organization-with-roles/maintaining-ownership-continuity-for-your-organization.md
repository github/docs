---
title: Поддержание непрерывности владения для организации
intro: 'У организации может быть несколько владельцев, чтобы избежать перерывов в периоде владения.'
redirect_from:
  - /articles/changing-a-person-s-role-to-owner
  - /articles/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/managing-ownership-continuity-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization
permissions: Organization owners can promote any member of an organization to an organization owner.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Maintain ownership continuity
ms.openlocfilehash: 636982e8985a79e617b01220df8a63256c874b70
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147885975'
---
## Сведения о поддержании непрерывности владения для организации

{% data reusables.organizations.org-ownership-recommendation %}

Владельцы организации имеют полный административный доступ к организации. {% data reusables.organizations.new-org-permissions-more-info %}

{% note %}

**Примечание.** Как владелец организации, вы можете изменять роли других участников и владельцев организации. Свою собственную роль изменять нельзя. 

{% endnote %}

{% ifversion enterprise-owner-join-org %} Если ваша организация относится к корпоративной учетной записи, любой владелец этого предприятия может назначить себя владельцем вашей организации. Дополнительные сведения см. в статье [Управление ролью в организации, принадлежащей предприятию](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).
{% endif %}

## Назначение владельца организации

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Выберите одного или нескольких пользователей, которых нужно сделать владельцами.
  ![Список участников с двумя выбранными участниками](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Откройте раскрывающееся меню над списком участников и нажмите **Изменить роль**.
  ![Раскрывающееся меню с параметром удаления участников](/assets/images/help/teams/user-bulk-management-options.png)
6. Выберите новую роль для пользователя или пользователей и нажмите кнопку **Изменить роль**.
  ![Переключатели с ролями владельца и участника и кнопка "Изменить роль"](/assets/images/help/teams/select-and-confirm-new-role-bulk.png)
