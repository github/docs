---
title: Configuration du graphe de dépendances
intro: Vous pouvez autoriser les utilisateurs à identifier les dépendances de leurs projets en activant le graphe des dépendances.
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Configure dependency graph
ms.openlocfilehash: 24dcaac4ddd994d544f6caa7d04529e1e4a5d569
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146684076'
---
## À propos du graphe de dépendances

{% data reusables.dependabot.about-the-dependency-graph %}  

Pour plus d’informations, consultez « [À propos du graphe des dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph) ».

{% ifversion fpt or ghec %}
## À propos de la configuration du graphe de dépendances 
Pour générer un graphe de dépendances, {% data variables.product.product_name %} a besoin d’un accès en lecture seule aux fichiers de verrouillage et manifeste de dépendance d’un référentiel. Le graphe de dépendances est généré automatiquement pour tous les dépôts publics et vous pouvez choisir de l’activer pour les dépôts privés. Pour plus d’informations sur l’affichage du graphe de dépendances, consultez « [Exploration des dépendances d’un référentiel](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository) ».

{% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

{% ifversion ghes %} ## Activation du graphique de dépendance {% data reusables.dependabot.ghes-ghae-enabling-dependency-graph %}{% endif %}{% ifversion fpt or ghec %}

### Activation et désactivation du graphe de dépendances pour un dépôt privé

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %} {% endif %}

Lorsque le graphe de dépendances est activé pour la première fois, tous les fichiers de manifeste et de verrou pour les écosystèmes pris en charge sont analysés immédiatement. Le graphe est généralement rempli en quelques minutes, mais cela peut prendre plus de temps pour les dépôts avec de nombreuses dépendances. Une fois activé, le graphe est automatiquement mis à jour avec chaque poussée vers le dépôt{% ifversion fpt or ghec %} et chaque poussée vers d’autres dépôts dans le graphe{% endif %}.

{% ifversion ghes %} {% ifversion dependency-submission-api %}{% data reusables.dependency-submission.dependency-submission-link %}{% endif %} {% endif %}

## Pour aller plus loin

{% ifversion ghec %}- « [Affichage des insights pour votre organisation](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization) »{% endif %}
- « [Affichage et mise à jour de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) »
- « [Résolution des problèmes de détection des dépendances vulnérables](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies) »
