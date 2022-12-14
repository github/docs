---
title: Управление политикой ветвления для вашей организации
intro: 'Вы можете разрешить или запретить создание вилки в любых частных{% ifversion ghes or ghae or ghec %} и внутренних репозиториев{% endif %}, принадлежащих вашей организации.'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization
permissions: Organization owners can manage the forking policy for an organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage forking policy
ms.openlocfilehash: 11aad8ee3c08b62f6bc352f91b6d804f35eee6e6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145119299'
---
По умолчанию в новых организациях устанавливается запрет на ветвление частных{% ifversion ghes or ghec or ghae %} и внутренних {% endif %} репозиториев.

Если вы разрешите ветвление частных{% ifversion ghes or ghec or ghae %} и внутренних{% endif %} репозиториев на уровне организации, то сможете также настроить возможность ветвления для отдельного частного{% ifversion ghes or ghec or ghae %} или внутреннего {% endif %} репозитория. Дополнительные сведения см. в разделе [Управление политикой ветвления для репозитория](/github/administering-a-repository/managing-the-forking-policy-for-your-repository).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. В разделе "Ветвление репозиториев" установите флажок **Разрешить ветвление частных {% ifversion ghec or ghes or ghae %} и внутренних{% endif %} репозиториев**.

   {%- ifversion fpt %} ![Флажок, разрешающий или запрещающий ветвление в организации](/assets/images/help/repository/allow-disable-forking-fpt.png) {%- elsif ghes or ghec or ghae %} ![Флажок, разрешающий или запрещающий ветвление в организации](/assets/images/help/repository/allow-disable-forking-organization.png) {%- endif %}
6. Выберите команду **Сохранить**.

## Дополнительные материалы

- [Сведения о вилках](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
- [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
