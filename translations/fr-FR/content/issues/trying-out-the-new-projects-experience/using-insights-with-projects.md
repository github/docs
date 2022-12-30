---
title: Utilisation des insights avec des projets (bêta)
intro: Vous pouvez afficher et personnaliser des graphiques créés à partir des données de votre projet.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: b2e8f2bc76c584d4de33fe00da1fd95982f9d091
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147064705"
---
{% data reusables.projects.insights-alpha %}

## <a name="about-insights"></a>À propos des insights

Vous pouvez utiliser des insights pour afficher et personnaliser des graphiques qui utilisent les éléments ajoutés à votre projet comme données sources. Le graphique par défaut affiche l’état de l’élément au fil du temps, ce qui vous permet de visualiser la progression et de détecter les motifs au fil du temps. 

![Capture d’écran montrant un exemple du graphique par défaut pour l’itération actuelle](/assets/images/help/issues/burnup-example.png)

Vous pouvez appliquer des filtres au graphique par défaut et créer vos propres graphiques. Lorsque vous créez un graphique, vous définissez les filtres, le type de graphique et les informations affichées, et le graphique est disponible pour tous ceux qui peuvent afficher le projet.

![Capture d’écran montrant un histogramme empilé montrant les types d’éléments pour chaque itération](/assets/images/help/issues/column-chart-example.png)

## <a name="creating-a-chart"></a>Créer un graphique

{% data reusables.projects.access-insights %}
3. Dans le menu de gauche, cliquez sur **Nouveau graphique**.
4. Si vous le souhaitez, pour modifier le nom du nouveau graphique, cliquez sur {% octicon "triangle-down" aria-label="The triangle icon" %}, tapez un nouveau nom, puis appuyez sur <kbd>Retour</kbd>.
5. Au-dessus du graphique, tapez des filtres pour modifier les données utilisées pour générer le graphique. Pour plus d’informations, consultez « [Filtrage des projets](/issues/trying-out-the-new-projects-experience/filtering-projects) ».
6. À droite de la zone de texte de filtre, cliquez sur **Enregistrer les modifications**.

## <a name="configuring-a-chart"></a>Configuration d’un graphique

{% data reusables.projects.access-insights %}
1. Dans le menu de gauche, cliquez sur le graphique que vous souhaitez configurer.
1. À droite de la page, cliquez sur **Configurer**. Un panneau s’ouvre à droite.
1. Pour modifier le type de graphique, sélectionnez la liste déroulante **Disposition**, puis cliquez sur le type de graphique que vous souhaitez utiliser.
1. Pour modifier le champ utilisé pour l’axe X de votre graphique, sélectionnez la liste déroulante **Axe X**, puis cliquez sur le champ que vous souhaitez utiliser.
1. Si vous le souhaitez, pour regrouper les éléments de votre axe X par un autre champ, sélectionnez **Regrouper par** en cliquant sur le champ que vous souhaitez utiliser, ou cliquez sur « Aucun » pour désactiver le regroupement.
1. Si vous le souhaitez, si votre projet contient des champs de nombre et que vous souhaitez que l’axe Y affiche la somme, la moyenne, la valeur minimale ou la valeur maximale d’un de ces champs, sélectionnez **Axe Y**, puis cliquez sur une option. Sélectionnez ensuite la liste déroulante qui s’affiche en dessous, puis cliquez sur le champ numérique que vous souhaitez utiliser. 
1. Pour enregistrer votre graphique, cliquez sur **Enregistrer les modifications**.
