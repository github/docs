---
title: Die Forking-Richtlinie für deine Organisation verwalten
intro: 'Du kannst das Forken von privaten{% ifversion ghes or ghae or ghec %} und internen{% endif %} Repositorys im Besitz deiner Organisation zulassen oder verhindern.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106244'
---
Standardmäßig sind neue Organisationen so konfiguriert, dass das Forken von privaten{% ifversion ghes or ghec or ghae %} und internen{% endif %} Repositorys nicht zulässig ist.

Wenn du das Forken von privaten{% ifversion ghes or ghec or ghae %} und internen{% endif %} Repositorys auf Organisationsebene zulässt, kannst auch die Möglichkeit konfigurieren, ein bestimmtes privates{% ifversion ghes or ghec or ghae %} oder internes{% endif %} Repository zu forken. Weitere Informationen findest du unter [Verwalten der Forkingrichtlinie für dein Repository](/github/administering-a-repository/managing-the-forking-policy-for-your-repository).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. Wähle unter „Forken von Repositorys“ die Option **Forken von privaten {% ifversion ghec or ghes or ghae %}und internen {% endif %}Repositorys zulassen**.

   {%- ifversion fpt %} ![Kontrollkästchen zum Zulassen oder Nichtzulassen des Forkens in der Organisation](/assets/images/help/repository/allow-disable-forking-fpt.png) {%- elsif ghes or ghec or ghae %} ![Kontrollkästchen zum Zulassen oder Nichtzulassen des Forkens in der Organisation](/assets/images/help/repository/allow-disable-forking-organization.png) {%- endif %}
6. Klicken Sie auf **Speichern**.

## Weitere Informationsquellen

- [Informationen zu Forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
- [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
