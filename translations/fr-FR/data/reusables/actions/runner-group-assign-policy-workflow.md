---
ms.openlocfilehash: 115103621cb0b156ebb7a3c2c72f0f303c497cfb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146178606"
---
{%- ifversion restrict-groups-to-workflows %}
1. Affectez une stratégie d’accès au workflow.

   Vous pouvez configurer un groupe d’exécuteurs pour qu’il soit accessible à une liste spécifique de workflows ou à tous les workflows. Ce paramètre ne peut pas être remplacé si vous configurez un groupe d’exécuteurs d’une organisation, qui a été partagé par une entreprise. Si vous spécifiez quel est le workflow qui peut accéder au groupe d’exécuteurs, vous devez utiliser le chemin complet du workflow, notamment le nom et le propriétaire du dépôt. De plus, vous devez épingler le workflow à une branche, une étiquette ou un algorithme SHA complet. Par exemple : `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`. 
   
   Seuls les travaux directement définis dans les workflows sélectionnés ont accès au groupe d’exécuteurs.{%- endif %}
