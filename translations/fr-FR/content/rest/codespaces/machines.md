---
title: Machines Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Machines
intro: Utilisez l’API REST pour gérer la disponibilité des types d’ordinateurs pour un codespace.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5b53ceb3fb7cf137f61285b1f9ed0aa7838a9179
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193350'
---
## À propos des ordinateurs {% data variables.product.prodname_codespaces %}

Vous pouvez déterminer quels types d’ordinateur sont disponibles pour créer un codespace, soit sur un dépôt donné, soit en tant qu’utilisateur authentifié. Pour plus d’informations, consultez « [À propos des types d’ordinateurs](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types) ».

Vous pouvez également utiliser ces informations lors de la modification de la machine d’un espace de code existant en mettant à jour sa propriété `machine`. La mise à jour de la machine aura lieu la prochaine fois que l’espace de code est redémarré. Pour plus d’informations, consultez « [Modification du type de machine pour votre espace de code](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace) ».
