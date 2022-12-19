---
title: Vincular versões
intro: Você pode compartilhar cada versão que você cria no GitHub com uma URL única.
redirect_from:
  - /articles/linking-to-releases
  - /github/administering-a-repository/linking-to-releases
  - /github/administering-a-repository/releasing-projects-on-github/linking-to-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 9b07e71c6e6d35839d485e5e37c795ac3c663d0b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145127013'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Para copiar uma URL única para a área de transferência, encontre a versão à qual você deseja vincular, clique com o botão direito no título e copie a URL.
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Título da versão](/assets/images/help/releases/release-title.png) {% else %} ![Título da versão](/assets/images/help/releases/release-title-old.png) {% endif %}
1. Como alternativa, clique com o botão direito do mouse em **Última Versão** e copie a URL para compartilhá-la. O sufixo dessa URL é sempre `/releases/latest`.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Menu Comparar tags de versão](/assets/images/help/releases/refreshed-release-latest.png) {% else %} ![Tag da última versão](/assets/images/help/releases/release_latest_release_tag.png) {% endif %} Para vinculá-la diretamente a um download do seu ativo de última versão que foi carregado manualmente, vincule-a a `/owner/name/releases/latest/download/asset-name.zip`.
