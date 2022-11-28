---
ms.openlocfilehash: a9030eae8492863ee750f2a02eeac584fd13513a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145066510"
---

### Vérification de la réussite de l’ajout de votre exécuteur autohébergé

Une fois les étapes d’ajout d’un exécuteur autohébergé effectuées, l’exécuteur et son état sont désormais listés sous {% ifversion fpt or ghec %}« Exécuteurs »{% elsif ghae or ghes %}« Exécuteurs autohébergés »{% endif %}.

L’application de l’exécuteur autohébergée doit être active pour que l’exécuteur accepte les travaux. Quand l’application d’exécuteur est connectée à {% data variables.product.product_name %} et qu’elle est prête à recevoir des travaux, le message suivant s’affiche sur le terminal de la machine.

{% data reusables.actions.self-hosted-runner-connected-output %}
