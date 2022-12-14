---
title: Bien démarrer avec GitHub Copilot dans un IDE JetBrains
shortTitle: JetBrains IDE
intro: 'Découvrez comment installer {% data variables.product.prodname_copilot %} dans un IDE JetBrains, et commencez à voir des suggestions lorsque vous écrivez des commentaires et du code.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: f5b90fb18645b69f86e9e45e08ba47e534678ae4
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192782'
---
{% data reusables.copilot.copilot-cta-button %}

## À propos de {% data variables.product.prodname_copilot %} et des IDE JetBrains

{% data reusables.copilot.procedural-intro %}

Si vous utilisez un IDE JetBrains, vous pouvez visualiser et intégrer les suggestions de {% data variables.product.prodname_copilot %} directement dans l’éditeur. Ce guide montre comment utiliser {% data variables.product.prodname_copilot %} dans un IDE JetBrains pour macOS, Windows ou Linux.

## Prérequis

{% data reusables.copilot.subscription-prerequisite %}

{% data reusables.copilot.jetbrains-ides %}

## Installation de l’extension {% data variables.product.prodname_copilot %} dans votre IDE JetBrains

Pour utiliser {% data variables.product.prodname_copilot %} dans un IDE JetBrains, vous devez installer l’extension {% data variables.product.prodname_copilot %}. La procédure suivante vous guide tout au long de l’installation du plug-in {% data variables.product.prodname_copilot %} dans IntelliJ IDEA. Les étapes d’installation du plug-in peuvent différer dans les autres IDE pris en charge.

1. Dans votre IDE JetBrains, sous le menu **Fichier** pour Windows, ou sous le nom de votre IDE pour Mac (par exemple **, PyCharm** ou **IntelliJ**), cliquez sur **Paramètres** pour Windows ou **Préférences** pour Mac.
2. Dans le menu de gauche de la boîte de dialogue **Paramètres/Préférences**, cliquez sur **Plug-ins**.
3. En haut de la boîte de dialogue **Paramètres/Préférences**, cliquez sur **Marketplace**. Dans la barre de recherche, recherchez **{% data variables.product.prodname_copilot %}** , puis cliquez sur **Installer**.
   ![Capture d’écran de la recherche Marketplace](/assets/images/help/copilot/jetbrains-marketplace.png)
1. Une fois {% data variables.product.prodname_copilot %} installé, cliquez sur **Redémarrer l’IDE**.
1. Une fois votre IDE JetBrains redémarré, cliquez sur le menu **Outils**. Cliquez sur **{% data variables.product.prodname_copilot %}** , puis cliquez sur **Se connecter à {% data variables.product.prodname_dotcom %}** . 
    ![Capture d’écran du menu Outils JetBrains](/assets/images/help/copilot/jetbrains-tools-menu.png)
1. Dans la boîte de dialogue « Se connecter à {% data variables.product.prodname_dotcom %} », pour copier le code de l’appareil et ouvrir la fenêtre d’activation de l’appareil, cliquez sur **Copier et ouvrir**.
    ![Capture d’écran de la copie et de l’ouverture du code de l’appareil](/assets/images/help/copilot/device-code-copy-and-open.png)
1. Une fenêtre d’activation d’appareil s’ouvrira dans votre navigateur. Collez le code de l’appareil, puis cliquez sur **Continuer**.

   - Pour coller le code sur un système Windows ou Linux, appuyez sur <kbd>Ctrl</kbd>+<kbd>v</kbd>.
   - Pour coller le code sur un système macOS, appuyez sur <kbd>commande</kbd>+<kbd>v</kbd>.
1. {% data variables.product.prodname_dotcom %} demandera les autorisations nécessaires pour {% data variables.product.prodname_copilot %}. Pour approuver ces autorisations, cliquez sur **Autoriser le plug-in {% data variables.product.prodname_copilot %}** .
1. Une fois les autorisations approuvées, votre IDE JetBrains affichera une confirmation. Pour commencer à utiliser {% data variables.product.prodname_copilot %}, cliquez sur **OK**.
   ![Capture d’écran de la confirmation des autorisations IDE JetBrains](/assets/images/help/copilot/jetbrains-ide-confirmation.png)
   

## Voir votre première suggestion

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} Les exemples suivants sont en Java. Cependant, d’autres langages ont un fonctionnement similaire.

{% data reusables.copilot.create-java-file %}
1. Dans le fichier Java, créez une classe en tapant `class Test`.
   {% data variables.product.prodname_copilot %} suggère automatiquement un corps de classe en texte grisé, comme indiqué ci-dessous. La suggestion exacte peut varier.
   ![Capture d’écran de la suggestion de corps de classe Java](/assets/images/help/copilot/java-class-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %}
1. Pour inviter {% data variables.product.prodname_copilot %} à suggérer un corps de fonction, tapez la ligne suivante sous le crochet de la fonction `main`. La suggestion exacte peut varier.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}

   ![Capture d’écran de la suggestion de corps de fonction Java](/assets/images/help/copilot/java-function-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %}

{% data variables.product.prodname_copilot %} tentera de correspondre au contexte et au style de votre code. Vous pouvez toujours modifier le code suggéré.

## Voir d’autres suggestions

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-java-file %}
1. Pour inviter {% data variables.product.prodname_copilot %} à afficher une suggestion, tapez la ligne suivante dans le fichier Java.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %} {% data reusables.copilot.see-alternative-suggestions %}

   | Système d''exploitation | Voir la suggestion suivante | Voir la suggestion précédente |
   | :- | :- | :- |
   | macOS | <kbd>Option</kbd>+<kbd>]</kbd> | <kbd>Option</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
   | Linux | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
{% data reusables.copilot.accept-or-reject-suggestion %}

## Affichage de plusieurs suggestions sous un nouvel onglet

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-java-file %}
1. Pour inviter {% data variables.product.prodname_copilot %} à afficher une suggestion, tapez la ligne suivante dans le fichier Java.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
1. Ouvrez un nouvel onglet avec plusieurs suggestions supplémentaires.
    - Sur macOS, appuyez sur <kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>A</kbd>, puis cliquez sur **Ouvrir GitHub Copilot**, ou appuyez sur <kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>\</kbd> pour ouvrir immédiatement le nouvel onglet.
    - Sur Windows ou Linux, appuyez sur <kbd>Ctrl</kbd>+<kbd>Entrée</kbd>, puis cliquez sur **Ouvrir GitHub Copilot**.
  ![Capture d’écran de la boîte de dialogue d’ouverture de Copilot](/assets/images/help/copilot/open-copilot-tab-jetbrains.png)
1. Pour accepter une suggestion, au-dessus de celle-ci, cliquez sur **Accepter la solution**. Pour rejeter toutes les suggestions, fermez l’onglet.

## Génération de suggestions de code à partir de commentaires

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-java-file %}
1. Pour inviter {% data variables.product.prodname_copilot %} à suggérer une implémentation d’une fonction dans le fichier Java, tapez les lignes suivantes.
    ```java{:copy}
    // find all images without alternate text
    // and give them a red border
    void process () {
    ```
  ![Capture d’écran de la suggestion de corps de la fonction Java](/assets/images/help/copilot/comment-suggestion-jetbrains.png)

## Activation et désactivation de {% data variables.product.prodname_copilot %}

Vous pouvez activer ou désactiver {% data variables.product.prodname_copilot %} pour tous les langages ou seulement certains langages. L’icône d’état {% data variables.product.prodname_copilot %} dans le panneau inférieur de la fenêtre de l’IDE JetBrains indique si {% data variables.product.prodname_copilot %} est activé ou désactivé. Quand cette option est activée, l’icône est mise en évidence. Quand elle est désactivée, l’icône est grisée.

1. Pour activer ou désactiver {% data variables.product.prodname_copilot %}, cliquez sur l’icône d’état dans le panneau inférieur de la fenêtre JetBrains.
   ![Capture d’écran de l’icône d’état dans IntelliJ IDEA](/assets/images/help/copilot/status-icon-jetbrains.png)
2. Si vous désactivez {% data variables.product.prodname_copilot %}, il vous sera demandé si vous souhaitez le désactiver entièrement ou seulement pour le langage du fichier que vous êtes en train de modifier.

   - Pour désactiver les suggestions de {% data variables.product.prodname_copilot %} globalement, cliquez sur **Désactiver les saisies semi-automatiques**.
   - Pour désactiver les suggestions de {% data variables.product.prodname_copilot %} pour le langage spécifié, cliquez sur **Désactiver les saisies semi-automatiques pour _LANGAGE_**.
   ![Capture d’écran de l’option permettant de désactiver {% data variables.product.prodname_copilot %} globalement ou pour le langage actuel](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)


## Pour aller plus loin

- [Site web de {% data variables.product.prodname_copilot %}](https://copilot.github.com/)
- [À propos de {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot#about-the-license-for-the-github-copilot-plugin-in-jetbrains-ides)
