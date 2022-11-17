---
ms.openlocfilehash: d810c1d04e070750ead1b64ff62e54842a86feb1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145066519"
---
Si les services {% data variables.product.prodname_actions %} sont temporairement indisponibles, alors une exécution de workflow est ignorée si elle n’a pas été mise en file d’attente dans les 30 minutes suivant son déclenchement. Par exemple, si un workflow est déclenché et que les services {% data variables.product.prodname_actions %} ne sont pas disponibles pendant 31 minutes ou plus, l’exécution du workflow n’est pas traitée.
