---
title: Bien démarrer avec GitHub Copilot dans Visual Studio Code
shortTitle: Visual Studio Code
intro: 'Découvrez comment installer {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vscode %}, et commencez à voir des suggestions lorsque vous écrivez des commentaires et du code.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: ec117cce02fab8917aef958c69077c521d9c1974
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192768'
---
{% data reusables.copilot.copilot-cta-button %}

## À propos de {% data variables.product.prodname_copilot %} et de {% data variables.product.prodname_vscode %}

{% data reusables.copilot.procedural-intro %}

Si vous utilisez {% data variables.product.prodname_vscode %}, vous pouvez visualiser et intégrer les suggestions de {% data variables.product.prodname_copilot %} directement dans l’éditeur. Ce guide montre comment utiliser {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vscode %} pour macOS, Windows ou Linux.

## Prérequis

{% data reusables.copilot.subscription-prerequisite %}

- Pour utiliser {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vscode %}, vous devez avoir installé {% data variables.product.prodname_vscode %}. Pour plus d’informations, consultez la [page de téléchargement {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/Download).

## Installation de l’extension {% data variables.product.prodname_vscode %}

Pour utiliser {% data variables.product.prodname_copilot %}, vous devez d’abord installer l’extension {% data variables.product.prodname_vscode %}.

1. Dans {% data variables.product.prodname_vscode %} Marketplace, accédez à la page de l’[extension {% data variables.product.prodname_copilot %}](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) et cliquez sur **Installer**.
   ![Installer l’extension {% data variables.product.prodname_copilot %} {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. Une fenêtre contextuelle s’affiche, vous demandant d’ouvrir {% data variables.product.prodname_vscode %}. Cliquez sur **Ouvrir {% data variables.product.prodname_vscode %}** .
1. Sous l’onglet « Extension : {% data variables.product.prodname_copilot %} » dans {% data variables.product.prodname_vscode %}, cliquez sur **Installer**.
   ![Bouton Installer dans {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. Si vous n’avez pas déjà autorisé {% data variables.product.prodname_vscode %} dans votre compte {% data variables.product.prodname_dotcom %}, vous serez invité à vous connecter à {% data variables.product.prodname_dotcom %} dans {% data variables.product.prodname_vscode %}.
   - Si vous avez déjà autorisé {% data variables.product.prodname_vscode %} pour votre compte {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_copilot %} sera automatiquement autorisé.
   ![Capture d’écran de l’écran d’autorisation {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. Dans votre navigateur, {% data variables.product.prodname_dotcom %} demandera les autorisations nécessaires pour {% data variables.product.prodname_copilot %}. Pour approuver ces autorisations, cliquez sur **Autoriser {% data variables.product.prodname_vscode %}** .
1. Dans {% data variables.product.prodname_vscode %}, dans la boîte de dialogue « {% data variables.product.prodname_vscode %} », pour confirmer l’authentification, cliquez sur **Ouvrir**.
   

## Voir votre première suggestion

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} Les exemples suivants sont en JavaScript. Cependant, d’autres langages ont un fonctionnement similaire.

{% data reusables.copilot.create-js-file %}
1. Dans le fichier JavaScript, tapez l’en-tête de fonction suivant. {% data variables.product.prodname_copilot %} suggère automatiquement un corps de fonction entier en texte grisé, comme indiqué ci-dessous. La suggestion exacte peut varier.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
   ![Capture d’écran d’une première suggestion {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## Voir d’autres suggestions

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-js-file %}
1. Dans le fichier JavaScript, tapez l’en-tête de fonction suivant. {% data variables.product.prodname_copilot %} affichera une suggestion.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
{% data reusables.copilot.see-alternative-suggestions %}

   | Système d''exploitation | Voir la suggestion suivante | Voir la suggestion précédente |
   | :- | :- | :- |
   |macOS|<kbd>Option (⌥) ou Alt</kbd>+<kbd>]</kbd>|<kbd>Option (⌥) ou Alt</kbd>+<kbd>[</kbd>|
   |Windows|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
   |Linux|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
1. Si vous le souhaitez, vous pouvez pointer sur la suggestion pour afficher la palette de commandes {% data variables.product.prodname_copilot %} afin de choisir des suggestions.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Affichage de plusieurs suggestions sous un nouvel onglet

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-js-file %}
1. Dans le fichier JavaScript, tapez l’en-tête de fonction suivant. {% data variables.product.prodname_copilot %} affichera une suggestion.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
1. Pour ouvrir un nouvel onglet avec plusieurs options supplémentaires, <kbd>appuyez sur Ctrl</kbd>+<kbd>Entrée</kbd>.
1. Pour accepter une suggestion, au-dessus de celle-ci, cliquez sur **Accepter la solution**. Pour rejeter toutes les suggestions, fermez l’onglet.

## Génération de suggestions de code à partir de commentaires

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-js-file %}
1. Dans le fichier JavaScript, tapez le commentaire suivant. {% data variables.product.prodname_copilot %} suggère une implémentation de la fonction.
   ```javascript{:copy}
   // find all images without alternate text
   // and give them a red border
   function process() {
   ```

## Utilisation d’un framework

Vous pouvez également utiliser {% data variables.product.prodname_copilot %} afin de générer des suggestions pour les API et les frameworks. L’exemple suivant utilise {% data variables.product.prodname_copilot %} pour créer un serveur Express simple qui retourne l’heure actuelle.

{% data reusables.copilot.create-js-file %}
1. Dans le fichier JavaScript, tapez le commentaire suivant, puis appuyez sur <kbd>Entrée</kbd>. {% data variables.product.prodname_copilot %} suggère une implémentation de l’application Express.
   ```javascript{:copy}
   // Express server on port 3000
1. To accept each line, press <kbd>Tab</kbd>, then <kbd>Enter</kbd>.
1. Type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation for the default handler. 
   ```javascript{:copy}
   // Return the current time
   ```
1. Pour accepter chaque ligne, appuyez sur la <kbd>touche de tabulation</kbd>.

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Pour aller plus loin

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
