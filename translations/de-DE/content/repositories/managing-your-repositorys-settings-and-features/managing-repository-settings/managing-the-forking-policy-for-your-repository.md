---
title: Verwalten der Forking-Richtlinie für dein Repository
intro: 'Du kannst das Forken eines bestimmten privaten{% ifversion ghae or ghes or ghec %} oder internen{% endif %} Repositorys im Besitz einer Organisation erlauben oder verhindern.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132118'
---
Ein Organisationsinhaber muss Forks von privaten{% ifversion ghae or ghes or ghec %} und internen{% endif %} Repositorys auf der Organisationsebene erlauben, bevor du Forks für ein bestimmtes Repository erlauben oder verbieten kannst. Weitere Informationen findest du unter "[Verwalten der Forking-Richtlinie für deine Organisation](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Wähle unter "Features" (Funktionen) die Option **Allow forking** (Forking zulassen) aus.
  ![Kontrollkästchen zum Zulassen oder Verbieten von Forking eines privaten Repositorys](/assets/images/help/repository/allow-forking-specific-org-repo.png)

## Weitere Informationsquellen

- [Informationen zu Forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
- [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
