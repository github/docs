---
title: Управление политикой создания вилок для репозитория
intro: 'Вы можете разрешить или запретить создание вилок определенного частного{% ifversion ghae or ghes or ghec %} или внутреннего{% endif %} репозитория, принадлежащего организации.'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/managing-the-forking-policy-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-the-forking-policy-for-your-repository
permissions: People with admin permissions for a repository can manage the forking policy for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage the forking policy
ms.openlocfilehash: 18355227ad40567de3824f3cc286763cd081e153
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136697'
---
Владелец организации должен разрешить создание вилок частных{% ifversion ghae or ghes or ghec %} и внутренних{% endif %} репозиториев на уровне организации, чтобы вы могли разрешить или запретить создание вилок для конкретного репозитория. Дополнительные сведения см. в разделе [Управление политикой ветвления для организации](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. В разделе "Функции" выберите параметр **Разрешить создание вилок**.
  ![Флажок для разрешения или запрета создания вилок частного репозитория](/assets/images/help/repository/allow-forking-specific-org-repo.png)

## Дополнительные материалы

- [Сведения о вилках](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
- [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
