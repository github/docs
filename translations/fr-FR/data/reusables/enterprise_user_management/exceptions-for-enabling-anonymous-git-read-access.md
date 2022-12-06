---
ms.openlocfilehash: 625b0ed6920a4f5f1192583b214983b09427734e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145066414"
---
{% note %}

**Remarques :**
- Vous ne pouvez pas modifier les paramètres d’accès en lecture de Git pour les référentiels dupliqués puisqu’ils héritent par défaut des paramètres d’accès du référentiel racine.
- Si un référentiel public devient privé, l’accès en lecture anonyme à Git est automatiquement désactivé pour ce référentiel et ses duplications.
- Si un référentiel avec authentification anonyme contient des ressources {% data variables.large_files.product_name_short %}, le téléchargement des ressources {% data variables.large_files.product_name_short %} échoue car elles nécessitent encore une authentification. Nous recommandons vivement de ne pas activer l’accès en lecture anonyme à Git pour un référentiel contenant des ressources {% data variables.large_files.product_name_short %}.

{% endnote %}
