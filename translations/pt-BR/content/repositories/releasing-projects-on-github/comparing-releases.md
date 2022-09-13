---
title: Comparando versões
intro: Você pode comparar as tags de versão para ver as alterações no seu repositório entre diferentes versões.
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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145127015'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Ao lado da versão que deseja usar como base, clique em **Comparar**.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Menu Comparar tags de versão](/assets/images/help/releases/refreshed-compare-tags.png) {% else %} ![Menu Comparar tags de versão](/assets/images/help/releases/compare-tags-menu.png) {% endif %}
4. Use o menu suspenso "comparar" e selecione as tags que você deseja comparar.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Menu Comparar tags de versão](/assets/images/help/releases/refreshed-compare-tags-menu-options.png) {% else %} ![Opções do menu Comparar tags de versão](/assets/images/help/releases/compare-tags-menu-options.png) {% endif %}
