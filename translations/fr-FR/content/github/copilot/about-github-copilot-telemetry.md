---
title: À propos des données de télémétrie GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} collects and relies on additional telemetry data beyond what other {% data variables.product.company_short %} products and services collect.'
redirect_from:
- /early-access/github/copilot/about-github-copilot-telemetry
versions:
  fpt: '*'
ms.openlocfilehash: ad46b7b2b6626cad0419b1588d64923cca34c0ca
ms.sourcegitcommit: d8653a0ad00d2122cdaaed47f6a4f0c1d0f41845
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/18/2022
ms.locfileid: "145148754"
---
## <a name="what-data-is-collected"></a>Quelles sont les données collectées ?

Les données collectées sont décrites dans les « [Conditions de télémétrie {% data variables.product.prodname_copilot %}](/github/copilot/github-copilot-telemetry-terms) ». En outre, l’extension/le plug-in {% data variables.product.prodname_copilot %} collecte l’activité à partir de l’environnement de développement intégré (IDE) de l’utilisateur, liée à un timestamp, et les métadonnées collectées par le package de télémétrie de l’extension/du plug-in. Utilisé conjointement avec {% data variables.product.prodname_vscode %}, IntelliJ, NeoVIM ou d’autres IDE, {% data variables.product.prodname_copilot %} collecte les métadonnées standard fournies par ces IDE. 

## <a name="how-the-data-is-used-by--data-variablesproductcompany_short-"></a>Utilisation des données par {% data variables.product.company_short %}

{% data variables.product.company_short %} utilise ces données pour :

- Améliorer directement le produit, notamment pour évaluer différentes stratégies de traitement et prédire les suggestions que les utilisateurs peuvent juger utiles
- Évaluer le produit, par exemple en mesurant son impact positif sur l’utilisateur
- Améliorer les modèles de génération de code sous-jacents, par exemple en fournissant des exemples positifs et négatifs (mais toujours de manière à ce que votre code privé ne soit pas utilisé comme entrée pour suggérer du code aux autres utilisateurs de {% data variables.product.prodname_copilot %})
- Guider les produits {% data variables.product.company_short %} étroitement liés
- Examiner et détecter un abus potentiel du service {% data variables.product.prodname_copilot %}
- D’autres objectifs liés à l’amélioration du service {% data variables.product.prodname_copilot %}, notamment le partage comme décrit dans la section suivante

## <a name="how-the-data-is-shared"></a>Comment les données sont-elles partagées ?

Les données de télémétrie sont stockées en toute sécurité sur des systèmes {% data variables.product.company_short %} et correctement chiffrées. Nous savons que les actions de modification de l’utilisateur, les extraits de code source et les URL des référentiels et des chemins d’accès aux fichiers sont des données sensibles. Par conséquent, l’accès est strictement contrôlé. Les données sont uniquement accessibles par (1) le personnel (employés et sous-traitants) {% data variables.product.company_short %} nommé travaillant dans l’équipe {% data variables.product.prodname_copilot %} ou dans l’équipe d’intégrité de la plateforme {% data variables.product.company_short %}, (2) le personnel Microsoft (employés et sous-traitants) travaillant dans ou avec les équipes Azure et/ou {% data variables.product.prodname_copilot %} et (3) les employés OpenAI travaillant sur {% data variables.product.prodname_copilot %}.

