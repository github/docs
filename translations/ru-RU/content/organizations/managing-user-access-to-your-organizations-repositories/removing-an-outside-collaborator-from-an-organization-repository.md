---
title: Удаление внешнего участника совместной работы из репозитория организации
intro: Владельцы и администраторы репозитория могут удалить доступ стороннего участника к репозиторию.
redirect_from:
  - /articles/removing-an-outside-collaborator-from-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-repository
  - /organizations/managing-access-to-your-organizations-repositories/removing-an-outside-collaborator-from-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove collaborator
ms.openlocfilehash: 4265cd0f7bdc272fbb875bfaf961fa0b2e708647
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099135'
---
{% ifversion fpt or ghec %}

{% warning %}

**Внимание!**
- При удалении стороннего участника совместной работы из частного репозитория уровень платных лицензий не понижается автоматически. Чтобы платить за меньшее число лицензий после удаления пользователей из вашей организации, выполните действия, описанные в разделе [Уменьшение количества платных рабочих мест в организации](/articles/downgrading-your-organization-s-paid-seats).

- Вы несете ответственность за то, чтобы пользователи, которые потеряли доступ к репозиторию, удалили любую конфиденциальную информацию или интеллектуальную собственность.

{% endwarning %}

{% endif %}

Хотя вилки частных репозиториев удаляются при удалении участника совместной работы, у этого человека по-прежнему останутся все локальные клоны репозитория.

## Удаление сторонних участников совместной работы из всех репозиториев в организации

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. Выберите одного или нескольких сторонних участников совместной работы, которых требуется удалить из организации.
![Список сторонних участников совместной работы, где указаны два выбранных сторонних участника совместной работы](/assets/images/help/teams/list-of-outside-collaborators-selected-bulk.png)
6. Над списком сторонних участников совместной работы используйте раскрывающееся меню и нажмите кнопку **Удалить из всех репозиториев**.
![Раскрывающееся меню с командой удаления сторонних участников совместной работы ](/assets/images/help/teams/user-bulk-management-options-for-outside-collaborators.png)
7. Просмотрите сторонних участников совместной работы, которые будут удалены из организации, а затем нажмите кнопку **Удалить сторонних участников совместной работы**.
  ![Список сторонних участников совместной работы, которые будут удалены, и кнопка "Удалить сторонних участников совместной работы"](/assets/images/help/teams/confirm-remove-outside-collaborators-bulk.png)

## Удаление стороннего участника совместной работы из конкретного репозитория в организации

Чтобы удалить стороннего участника совместной работы из определенных репозиториев в организации, можно удалить доступ этого пользователя к одному конкретному репозиторию за раз.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. Справа от имени пользователя, которого требуется удалить, перейдите в раскрывающееся меню {% octicon "gear" aria-label="The Settings gear" %} и нажмите **Управление**.
  ![Кнопка "Управление доступом"](/assets/images/help/organizations/member-manage-access.png)
6. Справа от репозитория, из которого требуется удалить стороннего участника совместной работы, щелкните **Управление доступом**.
![Нажмите кнопку "Управление доступом" рядом с репозиторием, к которому имеет доступ сторонний участник совместной работы](/assets/images/help/organizations/second-manage-access-selection-for-collaborator.png)
7. Чтобы полностью удалить доступ стороннего участника к репозиторию, в правом верхнем углу нажмите кнопку **Удалить доступ к этому репозиторию**.
![Кнопка "Удалить доступ к этому репозиторию"](/assets/images/help/organizations/remove-access-to-this-repository.png)
8. Чтобы подтвердить, нажмите кнопку **Удалить доступ**.
![Подтвердите сторонних участников совместной работы, которые будут удалены из репозитория](/assets/images/help/teams/confirm-remove-outside-collaborator-from-a-repository.png)

{% ifversion fpt или ghec или ghes > 3.3 или ghae > 3,3 %} Вы также можете удалить внешнего участника совместной работы из репозитория в обзоре доступа в параметрах репозитория. Дополнительные сведения см. в разделе [Управление командами и людьми, имеющими доступ к репозиторию](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person).
{% endif %}
## Дополнительные материалы

- [Добавление сторонних участников совместной работы в репозитории в вашей организации](/articles/adding-outside-collaborators-to-repositories-in-your-organization)
- [Преобразование участника организации во внешнего участника совместной работы](/articles/converting-an-organization-member-to-an-outside-collaborator)
