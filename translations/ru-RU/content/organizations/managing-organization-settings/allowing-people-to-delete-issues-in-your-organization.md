---
title: Разрешение на удаление проблем в организации пользователями
intro: 'Владельцы организации могут разрешить определенным пользователям удалять проблемы в репозиториях, принадлежащих вашей организации.'
redirect_from:
  - /articles/allowing-people-to-delete-issues-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-delete-issues-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Allow issue deletion
ms.openlocfilehash: 6396b54d7a6e7113344935e4229843f580c246b6
ms.sourcegitcommit: 219fb805abddaef3e5547638bd798da890020bfd
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878445'
---
По умолчанию проблемы нельзя удалить из репозиториев организации. Сначала владелец организации должен включить эту функцию для всех репозиториев организации.

После включения владельцы организации и пользователи с правами администратора в репозитории, принадлежащем организации, смогут удалять проблемы. Пользователи с правами администратора для репозитория включают участников организации и сторонних участников совместной работы, которым предоставлены права администратора. Дополнительные сведения см. в разделе [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) и [Удаление проблемы](/articles/deleting-an-issue).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. В разделе "Удаление проблемы" выберите **Разрешить участникам удалять проблемы для этой организации**.
![Флажок, разрешающий пользователям удалять проблемы](/assets/images/help/settings/issue-deletion.png)
6. Выберите команду **Сохранить**.
