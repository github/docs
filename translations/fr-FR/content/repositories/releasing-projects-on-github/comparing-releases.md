---
title: Comparaison des versions
intro: Vous pouvez comparer les étiquettes de version pour voir les modifications apportées à votre dépôt entre différentes versions.
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132098'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. En regard de la version que vous souhaitez utiliser comme base, cliquez sur **Comparer**.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Menu des balises de comparaison des versions](/assets/images/help/releases/refreshed-compare-tags.png) {% else %} ![Menu des balises de comparaison des versions](/assets/images/help/releases/compare-tags-menu.png) {% endif %}
4. Utilisez le menu déroulant « Comparer » et sélectionnez les balises que vous souhaitez comparer.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Menu des balises de comparaison des versions](/assets/images/help/releases/refreshed-compare-tags-menu-options.png) {% else %} ![Option du menu des balises de comparaison des versions](/assets/images/help/releases/compare-tags-menu-options.png) {% endif %}
