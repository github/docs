---
title: Comparar lanzamientos
intro: Puedes comparar etiquetas de lanzamiento para ver los cambios en tu repositorio entre diferentes lanzamientos.
permissions: People with read access to a repository can view and compare releases.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/comparing-releases
  - /github/administering-a-repository/releasing-projects-on-github/comparing-releases
ms.openlocfilehash: 12ec28717e8de8575a58487b02d5665044f471eb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136675'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Junto a la versión que quiera usar como base, haga clic en **Compare** (Comparar).
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Menú Comparar etiquetas de versión](/assets/images/help/releases/refreshed-compare-tags.png) {% else %} ![Compare release tags menu](/assets/images/help/releases/compare-tags-menu.png) {% endif %}
4. Utiliza el menú desplegable "Comparar" y selecciona las etiquetas que quieras comparar.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Menú Comparar etiquetas de versión](/assets/images/help/releases/refreshed-compare-tags-menu-options.png) {% else %} ![Opciones del menú Comparar etiquetas de versión](/assets/images/help/releases/compare-tags-menu-options.png) {% endif %}
