---
ms.openlocfilehash: eb4b729cf490728306961ff3d2ef2835700c8735
ms.sourcegitcommit: 80edcdbff4726de4d196584fcb603bca2efffd1f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/24/2022
ms.locfileid: "148181798"
---
Ce tableau montre le comportement des alertes pour chaque façon dont un utilisateur peut contourner un blocage de la protection push.

| Motif du contournement         | Comportement des alertes                                              |
|-----------------------|------------------------------------------------------|
| Il est utilisé dans des tests    | {% data variables.product.prodname_dotcom %} crée une alerte fermée, résolue comme « utilisé dans des tests »  |
| C'est un faux positif | {% data variables.product.prodname_dotcom %} crée une alerte fermée, résolue comme « faux positif » |
| Je le corrigerai plus tard     | {% data variables.product.prodname_dotcom %} crée une alerte ouverte                                |