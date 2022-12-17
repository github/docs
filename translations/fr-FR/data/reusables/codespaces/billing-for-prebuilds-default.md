---
ms.openlocfilehash: 0036dd5cf979531479a7ddf523c7475391b29c0a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147548007"
---
Par défaut, un flux de travail {% data variables.product.prodname_actions %} est déclenché chaque fois que vous créez ou mettez à jour une prébuild, ou que vous effectuez un envoi (push) sur une branche compatible prébuild. Comme d’autres flux de travail, les flux de travail de prébuild consomment une partie des minutes Actions incluses dans votre compte (le cas échéant) ou entraînent des frais pour les minutes Actions lorsqu’ils sont en cours d’exécution. Pour plus d’informations sur la tarification des minutes Actions, consultez « [À propos de la facturation de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) ». 

En plus des minutes {% data variables.product.prodname_actions %}, vous serez également facturé pour le stockage de prébuild associé à chaque configuration de prébuild pour un référentiel et une région donnés. Le stockage des prébuilds est facturé au même taux que le stockage des espaces de code.