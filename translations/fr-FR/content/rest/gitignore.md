---
title: Gitignore
intro: Utilisez l’API REST pour obtenir des modèles `.gitignore` qui peuvent être utilisés pour ignorer les fichiers et les répertoires.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/gitignore
ms.openlocfilehash: a3d6d35014a0c6bc46102fa7abfa11659fff6fbf
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193040'
---
## À propos de gitignore

Quand vous créez un référentiel sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} via l’API, vous pouvez spécifier un [modèle .gitignore](/github/getting-started-with-github/ignoring-files) à appliquer au référentiel lors de la création. Vous pouvez utiliser l’API REST pour obtenir les modèles .gitignore du [dépôt .gitignore](https://github.com/github/gitignore) {% data variables.product.product_name %}.

Vous pouvez utiliser le type de média personnalisé `application/vnd.github.raw` lors de l’obtention d’un modèle gitignore. Pour plus d’informations, consultez « [Types de médias](/rest/overview/media-types) ».
