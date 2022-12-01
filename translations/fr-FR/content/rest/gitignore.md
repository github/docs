---
title: Gitignore
intro: L’API Gitignore extrait des modèles `.gitignore` qui peuvent être utilisés pour ignorer des fichiers et répertoires.
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
ms.openlocfilehash: e830b0f00d60f3eb121fa2a99a910b073780700e
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181267'
---
## À propos de l’API gitignore

Quand vous créez un référentiel sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} via l’API, vous pouvez spécifier un [modèle .gitignore](/github/getting-started-with-github/ignoring-files) à appliquer au référentiel lors de la création. L’API de modèles .gitignore répertorie et extrait des modèles à partir du [référentiel .gitignore](https://github.com/github/gitignore) {% data variables.product.product_name %}.

### Types de médias personnalisés pour gitignore

Vous pouvez utiliser ce type de média personnalisé lors de l’obtention d’un modèle gitignore.

    application/vnd.github.raw

Pour plus d’informations, consultez « [Types de médias](/rest/overview/media-types) ».
