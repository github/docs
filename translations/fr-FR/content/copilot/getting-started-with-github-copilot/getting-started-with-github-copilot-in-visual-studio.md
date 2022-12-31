---
title: Bien démarrer avec GitHub Copilot dans Visual Studio
shortTitle: Visual Studio
product: '{% data reusables.gated-features.copilot %}'
intro: 'Découvrez comment installer {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vs %}, et commencez à voir des suggestions lorsque vous écrivez des commentaires et du code.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 65384a5cafae1c739b52847d1a826c0138e91fd9
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193016'
---
{% data reusables.copilot.copilot-cta-button %}

## À propos de {% data variables.product.prodname_copilot %} et de Visual Studio

{% data reusables.copilot.procedural-intro %}

Si vous utilisez {% data variables.product.prodname_vs %}, vous pouvez visualiser et intégrer les suggestions de {% data variables.product.prodname_copilot %} directement dans l’éditeur. Ce guide montre comment utiliser {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vs %} pour Windows.

## Prérequis

{% data reusables.copilot.subscription-prerequisite %}

- Pour utiliser {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vs %}, vous devez avoir installé {% data variables.product.prodname_vs %} 2022 17.2 ou version ultérieure. Pour plus d’informations, consultez la documentation relative à l’[IDE Visual Studio](https://visualstudio.microsoft.com/vs/).

{% note %}

**Remarque** : {% data variables.product.prodname_copilot %} ne peut pas être utilisé avec Visual Studio pour Mac.

{% endnote %}

## Installation de l’extension {% data variables.product.prodname_vs %}

Pour utiliser {% data variables.product.prodname_copilot %}, vous devez d’abord installer l’extension {% data variables.product.prodname_vs %}.
1. Dans la barre d’outils Visual Studio, cliquez sur **Extensions**, puis sur **Gérer les extensions**.
   ![Capture d’écran de la barre d’outils Visual Studio](/assets/images/help/copilot/visual-studio-toolbar.png)
1. Dans la fenêtre « Gérer les extensions », cliquez sur **Visual Studio Marketplace**, recherchez l’extension {% data variables.product.prodname_copilot %}, puis cliquez sur **Télécharger**.
   ![Capture d’écran de l’extension GitHub Copilot pour Visual Studio avec le bouton de téléchargement mis en évidence](/assets/images/help/copilot/install-copilot-extension-visual-studio.png)
1. Fermez la fenêtre « Gérer les extensions », puis quittez et relancez {% data variables.product.prodname_vs %}.
1. Si vous le souhaitez, pour vérifier que {% data variables.product.prodname_copilot %} est installé et activé, revenez à **Gérer les extensions**, cliquez sur **Installé** pour afficher les extensions actuellement installées, puis cliquez sur **{% data variables.product.prodname_copilot %}** pour afficher les informations d’état.
  ![Capture d’écran des extensions installées dans Visual Studio avec GitHub Copilot mis en évidence](/assets/images/help/copilot/installed-copilot-extension-visual-studio.png)
1. Ouvrez ou créez un projet dans {% data variables.product.prodname_vs %}. 
1. Dans la boîte de dialogue « Microsoft {% data variables.product.prodname_vs %} », pour copier le code d’activation de votre appareil, cliquez sur **OK**.
   ![Capture d’écran de la boîte de dialogue Microsoft {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-auth-dialogue.png)
1. Une fenêtre d’activation d’appareil s’ouvrira dans votre navigateur. Collez le code de l’appareil, puis cliquez sur **Continuer**.

   - Pour coller le code sur un système Windows ou Linux, appuyez sur <kbd>Ctrl</kbd>+<kbd>v</kbd>.
   - Pour coller le code sur un système macOS, appuyez sur <kbd>commande</kbd>+<kbd>v</kbd>.
1. {% data variables.product.prodname_dotcom %} demandera les autorisations nécessaires pour {% data variables.product.prodname_copilot %}. Pour approuver ces autorisations, cliquez sur **Autoriser le plug-in {% data variables.product.prodname_copilot %}** .
1. Une fois les autorisations approuvées, {% data variables.product.prodname_vs %} affiche une confirmation.
   ![Capture d’écran de la confirmation des autorisations {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-confirmation.png)

## Voir votre première suggestion

{% data reusables.copilot.code-examples-limitations %} {% data reusables.copilot.supported-languages %} Les exemples suivants sont en C#. Cependant, d’autres langages ont un fonctionnement similaire.

{% data reusables.copilot.create-c-file %}
1. Dans le fichier C#, tapez la signature de fonction suivante. {% data variables.product.prodname_copilot %} suggère automatiquement un corps de fonction entier en texte grisé, comme indiqué ci-dessous. La suggestion exacte peut varier.
  ```csharp{:copy}
  int CalculateDaysBetweenDates(
  ```
  ![Capture d’écran d’une première suggestion Visual Studio Code](/assets/images/help/copilot/first-suggestion-visual-studio.png) {% data reusables.copilot.accept-suggestion %}
 
## Voir d’autres suggestions
{% data reusables.copilot.alternative-suggestions %} {% data reusables.copilot.create-c-file %}
1. Dans le fichier C#, tapez la signature de fonction suivante. {% data variables.product.prodname_copilot %} affichera une suggestion.

   ```csharp{:copy}
   int CalculateDaysBetweenDates(
   ```
1. Si d’autres suggestions sont disponibles, vous pouvez les voir en appuyant sur <kbd>Alt</kbd>+<kbd>]</kbd> (ou <kbd>Alt</kbd>+<kbd>[</kbd>).
1. Si vous le souhaitez, vous pouvez pointer sur la suggestion pour afficher la palette de commandes {% data variables.product.prodname_copilot %} afin de choisir des suggestions.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Génération de suggestions de code à partir de commentaires

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-c-file %}
1. Dans le fichier C#, tapez le commentaire suivant. {% data variables.product.prodname_copilot %} suggère une implémentation de la fonction.
   ```csharp{:copy}
   using System.Xml.Linq;

   var doc = XDocument.Load("index.xhml");
   
   // find all images
   ```
{% data reusables.copilot.accept-suggestion %}


{% data reusables.copilot.enabling-or-disabling-vs %}

## Pour aller plus loin

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
