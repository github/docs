---
title: Liens vers des versions
intro: Vous pouvez partager chaque version que vous créez sur GitHub avec une URL unique.
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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132092'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Pour copier une URL unique dans votre Presse-papiers, recherchez la version vers laquelle vous voulez définir un lien, cliquez avec le bouton droit sur le titre et copiez l’URL.
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Titre de la version](/assets/images/help/releases/release-title.png) {% else %} ![Titre de la version](/assets/images/help/releases/release-title-old.png) {% endif %}
1. Vous pouvez également cliquer avec le bouton droit sur **Version la plus récente** et copier l’URL pour la partager. Le suffixe de cette URL est toujours `/releases/latest`.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![Menu des étiquettes de comparaison des versions](/assets/images/help/releases/refreshed-release-latest.png) {% else %} ![Étiquette de version la plus récente](/assets/images/help/releases/release_latest_release_tag.png) {% endif %} Pour créer un lien direct vers un téléchargement de la ressource de votre version la plus récente qui a été chargée manuellement, créez un lien vers `/owner/name/releases/latest/download/asset-name.zip`.
