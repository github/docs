---
ms.openlocfilehash: a9678c48ca3bd557f99816ef21c70c2332fb4e46
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145133503"
---
Les administrateurs de dépôts peuvent activer ou désactiver le graphe de dépendances pour les dépôts privés.

Vous pouvez également activer ou désactiver le graphe de dépendances pour tous les dépôts appartenant à votre compte d’utilisateur ou organisation. Pour plus d’informations, consultez « [Configuration du graphe des dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph) ».

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Lisez le message sur l’octroi à {% data variables.product.product_name %} de l’accès en lecture seule aux données du dépôt pour activer le graphe de dépendances, puis en regard de « Graphe de dépendances », cliquez sur **Activer**.
   ![Bouton « Activer » pour le graphe de dépendances](/assets/images/help/repository/dependency-graph-enable-button.png) Vous pouvez désactiver le graphe de dépendances à tout moment en cliquant sur **Désactiver** en regard de « Graphe de dépendances » dans la page des paramètres pour {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} Sécurité et analyse du code.{% else %} Sécurité et analyse.{% endif %}
