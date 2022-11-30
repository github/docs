---
title: 'À propos des insights des {% data variables.product.prodname_projects_v2 %}'
intro: Vous pouvez afficher et personnaliser des graphiques créés à partir des données de votre projet.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/using-insights-with-projects
type: tutorial
product: '{% data reusables.gated-features.historical-insights-for-projects %}'
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 809d8492bb1ec7c8cd4eb051b1eaefb00d29097e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158572'
---
{% ifversion fpt %}

{% note %}

**Remarque :** Les graphiques historiques sont actuellement disponibles comme fonctionnalités en préversion pour les organisations utilisant {% data variables.product.prodname_team %} et sont en disponibilité générale pour les organisations utilisant {% data variables.product.prodname_ghe_cloud %}.

{% endnote %}

{% endif %}

 Vous pouvez utiliser les insights des {% data variables.product.prodname_projects_v2 %} pour voir, créer et personnaliser des graphiques qui utilisent les éléments ajoutés à votre projet comme données sources. Vous pouvez appliquer des filtres au graphique par défaut et créer vos propres graphiques. Lorsque vous créez un graphique, vous définissez les filtres, le type de graphique, les informations affichées, et le graphique est disponible pour tous ceux qui peuvent voir le projet. Vous pouvez générer deux types de graphique : les graphiques actuels et les graphiques historiques.

 Insights fait le suivi des éléments que vous avez archivés ou supprimés.

 ### À propos des graphiques actuels

Vous pouvez créer des graphiques actuels pour visualiser les éléments de votre projet. Par exemple, vous pouvez créer des graphiques pour montrer le nombre d’éléments attribués à chaque individu ou le nombre de problèmes affectés à chaque itération à venir.

Vous pouvez également utiliser des filtres pour manipuler les données utilisées pour créer votre graphique. Par exemple, vous pouvez créer un graphique montrant la quantité de travail que vous allez avoir, mais limiter ces résultats à des étiquettes ou des destinataires spécifiques. Pour plus d’informations, consultez « [Filtrage des projets](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) ».

 ![Capture d’écran montrant un histogramme empilé montrant les types d’éléments pour chaque itération](/assets/images/help/issues/column-chart-example.png)

Pour plus d’informations, consultez « [Création de graphiques](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts) ».

 ### À propos des graphiques historiques

 Les graphiques historiques sont des graphiques temporels qui vous permettent de voir les tendances et la progression de votre projet. Vous pouvez voir le nombre d’éléments regroupés par état et d’autres champs sur une période.
 
 Le graphique par défaut affiche l’état de l’élément au fil du temps, ce qui vous permet de visualiser la progression et de détecter les motifs au fil du temps. 

![Capture d’écran montrant un exemple du graphique par défaut pour l’itération actuelle](/assets/images/help/issues/burnup-example.png)

 Pour créer un graphique historique, définissez l’axe X de votre graphique sur « Durée ». Pour plus d’informations, consultez « [Création de graphiques](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts) » et « [Configuration de graphiques](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/configuring-charts) ».

## Pour aller plus loin

- « [À propos des {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) »
- « [Désactivation des insights des {% data variables.product.prodname_projects_v2 %} de votre organisation](/organizations/managing-organization-settings/disabling-insights-for-projects-in-your-organization) »
