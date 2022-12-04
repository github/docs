---
title: Configuration de GitHub Copilot dans Visual Studio
intro: 'Vous pouvez activer, configurer et désactiver {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vs %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio
topics:
  - Copilot
ms.openlocfilehash: cb24557b15eafd4a5be8ef1a991ae3c43f376c67
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147786028'
---
## À propos de {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vs %}

Si vous utilisez {% data variables.product.prodname_vs %}, {% data variables.product.prodname_copilot %} peut autocompléter le code à mesure que vous le tapez. Après l’installation, vous pouvez activer ou désactiver {% data variables.product.prodname_copilot %}, et vous pouvez configurer des paramètres avancés dans {% data variables.product.prodname_vs %} ou sur {% data variables.product.prodname_dotcom_the_website %}.

## Prérequis

Pour configurer {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vs %}, vous devez installer le plug-in {% data variables.product.prodname_copilot %}. Pour plus d’informations, consultez « [Prise en main de {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vs %}](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio) ».

## Raccourcis clavier pour {% data variables.product.prodname_copilot %}

Vous pouvez utiliser les raccourcis clavier par défaut dans {% data variables.product.prodname_vs %} lorsque vous utilisez {% data variables.product.prodname_copilot %}. Vous pouvez également associer à nouveau les raccourcis dans les paramètres d’outils pour {% data variables.product.prodname_vs %} en utilisant vos raccourcis clavier préférés pour chaque commande spécifique. Vous pouvez rechercher chaque raccourci clavier par son nom de commande dans l’éditeur Raccourcis clavier.

| Action | Raccourci | Nom de commande |
|:---|:---|:---|
|Afficher la suggestion inline suivante|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>]</kbd>|Tools.Nextsuggestion|
|Afficher la suggestion inline précédente|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>[</kbd>|Tools.Previoussuggestion|
|Déclencher une suggestion inline|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>\</kbd>|Edit.Copilot.TriggerInlineSuggestion|

## Réassocier les raccourcis clavier

Si vous ne voulez pas utiliser les raccourcis clavier par défaut dans {% data variables.product.prodname_vs %} lorsque vous utilisez {% data variables.product.prodname_copilot %}, vous pouvez relier les raccourcis dans l’éditeur de raccourcis clavier en utilisant vos raccourcis clavier préférés pour chaque commande spécifique.

1. Dans la barre d’outils {% data variables.product.prodname_vs %}, sous **Outils**, cliquez sur **Options**.
   ![Capture d’écran de l’option Options de la barre d’outils {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-toolbar-options.png)
1. Dans la boîte de dialogue « Options », sous **Environnement**, cliquez sur **Clavier**.
   ![Capture d’écran de l’option « Clavier » dans la boîte de dialogue « Options »](/assets/images/help/copilot/vs-options-dialogue.png)
1. Sous « Afficher les commandes contenant : », recherchez la commande que vous voulez associer.
   ![Capture d’écran de la barre de recherche Afficher les commandes contenant](/assets/images/help/copilot/vs-show-commands-containing.png)
1. Sous « Appuyez sur les touches de raccourci », tapez le raccourci que vous souhaitez attribuer à la commande, puis cliquez sur **Attribuer**.
   ![Capture d’écran de l’affectation des raccourcis clavier](/assets/images/help/copilot/vs-rebind-shortcut.png)

{% data reusables.copilot.enabling-or-disabling-vs %}

## Configuration de ReSharper pour {% data variables.product.prodname_copilot %}

Si vous utilisez ReSharper, {% data variables.product.prodname_copilot %} fonctionne mieux lorsque vous configurez ReSharper pour qu’il utilise l’IntelliSense natif de {% data variables.product.prodname_copilot %}. Pour plus d’informations sur ReSharper, consultez la [documentation ReSharper](https://www.jetbrains.com/resharper/documentation/documentation.html)

1. Dans la barre d’outils {% data variables.product.prodname_vs %}, sous **Outils**, cliquez sur **Options**.
   ![Capture d’écran de l’option Options de la barre d’outils {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-toolbar-options.png)
1. Dans la boîte de dialogue « Options », sous **Environnement**, cliquez sur **IntelliSense**, puis sur **Général**.
    ![Capture d’écran de l’option IntelliSense dans la boîte de dialogue « Options »](/assets/images/help/copilot/vs-options-intellisense.png)
1. Sous « Général », sélectionnez **Visual Studio**, puis cliquez sur **Enregistrer**.

{% data reusables.copilot.dotcom-settings %}
