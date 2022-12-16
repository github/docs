---
ms.openlocfilehash: 14b8f0f8803056b5d3431e8de2eee868d9167546
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108273"
---
Quand vous activez une ou plusieurs fonctionnalités de sécurité et d’analyse pour les dépôts existants, tous les résultats s’affichent sur {% data variables.product.prodname_dotcom %} en quelques minutes :

- Tous les dépôts existants reçoivent la configuration sélectionnée.
- Les nouveaux dépôts suivent la configuration sélectionnée si vous avez coché la case pour les nouveaux dépôts.{% ifversion fpt or ghec %}
- Nous utilisons les autorisations pour rechercher les fichiers manifeste et appliquer les services appropriés.
- Si l’option est activée, vous voyez les informations de dépendance dans le graphe des dépendances.
- Si l’option est activée, {% data variables.product.prodname_dotcom %} génère des {% data variables.product.prodname_dependabot_alerts %} s’il existe des dépendances vulnérables ou des programmes malveillants.{% endif %}{% ifversion fpt or ghec or ghes %}
- Si l’option est activée, les mises à jour de sécurité {% data variables.product.prodname_dependabot %} créent des demandes de tirage pour mettre à niveau les dépendances vulnérables quand des {% data variables.product.prodname_dependabot_alerts %} sont déclenchées.{% endif %}
