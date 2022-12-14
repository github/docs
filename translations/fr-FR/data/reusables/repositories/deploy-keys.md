---
ms.openlocfilehash: f4ea2cee931b8d44b44f0febba3304f41bac404c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145086842"
---
Vous pouvez lancer des projets à partir d’un dépôt sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} sur votre serveur à l’aide d’une clé de déploiement, qui est une clé SSH accordant l’accès à un seul dépôt. {% data variables.product.product_name %} attache la partie publique de la clé directement à votre dépôt, au lieu d’un compte personnel, tandis que la partie privée de la clé reste sur votre serveur. Pour plus d’informations, consultez « [Livraison de déploiements](/rest/guides/delivering-deployments) ».
