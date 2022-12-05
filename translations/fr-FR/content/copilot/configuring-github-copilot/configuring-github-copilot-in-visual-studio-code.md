---
title: Configuration de GitHub Copilot dans Visual Studio Code
intro: 'Vous pouvez activer, configurer et désactiver {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio Code
topics:
  - Copilot
ms.openlocfilehash: 0c91f9c11f98669ba6bcbf84113a629ae6d53044
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079751'
---
## À propos de {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vscode %}

Si vous utilisez {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_copilot %} peut autocompléter le code à mesure que vous le tapez. Après l’installation, vous pouvez activer ou désactiver {% data variables.product.prodname_copilot %}, et vous pouvez configurer des paramètres avancés dans {% data variables.product.prodname_vscode %} ou sur {% data variables.product.prodname_dotcom_the_website %}.

## Prérequis

Pour configurer {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vscode %}, vous devez installer le plug-in {% data variables.product.prodname_copilot %}. Pour plus d’informations, consultez « [Prise en main de {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vscode %}](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code) ».

## Raccourcis clavier pour {% data variables.product.prodname_copilot %}

Vous pouvez utiliser les raccourcis clavier par défaut dans {% data variables.product.prodname_vscode %} lorsque vous utilisez {% data variables.product.prodname_copilot %}. Vous pouvez également lier à nouveau les raccourcis dans l’éditeur Raccourcis clavier à l’aide de vos raccourcis clavier préférés pour chaque commande spécifique. Vous pouvez rechercher chaque raccourci clavier par nom de commande dans l’éditeur Raccourcis clavier.

{% mac %}

| Action | Raccourci | Nom de commande |
|:---|:---|:---|
|Accepter une suggestion inline|<kbd>Onglet</kbd>|editor.action.inlineSuggest.commit|
|Ignorer une suggestion inline|<kbd>Échap</kbd>|editor.action.inlineSuggest.hide|
|Afficher la suggestion inline suivante| <kbd>Option (⌥)</kbd>+<kbd>]</kbd><br> |editor.action.inlineSuggest.showNext|
|Afficher la suggestion inline précédente| <kbd>Option (⌥)</kbd>+<kbd>[</kbd><br> |editor.action.inlineSuggest.showPrevious|
|Déclencher une suggestion inline| <kbd>Option (⌥)</kbd>+<kbd>\</kbd><br> |editor.action.inlineSuggest.trigger|
|Ouvrez {% data variables.product.prodname_copilot %} (suggestions supplémentaires dans un volet séparé)|<kbd>Ctrl</kbd>+<kbd>Retour</kbd>|github.copilot.generate|
|Activer/désactiver {% data variables.product.prodname_copilot %}|_Pas de raccourci par défaut_|github.copilot.toggleCopilot|

{% endmac %}

{% windows %}

| Action | Raccourci | Nom de commande |
|:---|:---|:---|
|Accepter une suggestion inline|<kbd>Onglet</kbd>|editor.action.inlineSuggest.commit|
|Ignorer une suggestion inline|<kbd>Échap</kbd>|editor.action.inlineSuggest.hide|
|Afficher la suggestion inline suivante|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Afficher la suggestion inline précédente|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Déclencher une suggestion inline|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|Ouvrez {% data variables.product.prodname_copilot %} (suggestions supplémentaires dans un volet séparé)|<kbd>Ctrl</kbd>+<kbd>Entrée</kbd>|github.copilot.generate|
|Activer/désactiver {% data variables.product.prodname_copilot %}|_Pas de raccourci par défaut_|github.copilot.toggleCopilot|

{% endwindows %}


{% linux %}

| Action | Raccourci | Nom de commande |
|:---|:---|:---|
|Accepter une suggestion inline|<kbd>Onglet</kbd>|editor.action.inlineSuggest.commit|
|Ignorer une suggestion inline|<kbd>Échap</kbd>|editor.action.inlineSuggest.hide|
|Afficher la suggestion inline suivante|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Afficher la suggestion inline précédente|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Déclencher une suggestion inline|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|Ouvrez {% data variables.product.prodname_copilot %} (suggestions supplémentaires dans un volet séparé)|<kbd>Ctrl</kbd>+<kbd>Entrée</kbd>|github.copilot.generate|
|Activer/désactiver {% data variables.product.prodname_copilot %}|_Pas de raccourci par défaut_|github.copilot.toggleCopilot|

{% endlinux %}

## Réassocier les raccourcis clavier

Si vous ne voulez pas utiliser les raccourcis clavier par défaut dans {% data variables.product.prodname_vscode %} lorsque vous utilisez {% data variables.product.prodname_copilot %}, vous pouvez relier les raccourcis dans l’éditeur de raccourcis clavier en utilisant vos raccourcis clavier préférés pour chaque commande spécifique.

1. Cliquez sur le menu **Fichier**, puis sur **Préférences** et **Raccourcis clavier**.
![Capture d’écran des raccourcis clavier Visual Studio Code](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)
1. Dans l’éditeur « Raccourcis clavier », recherchez le nom de la commande du raccourci clavier que vous souhaitez modifier.
![Capture d’écran de la barre de recherche de raccourci clavier](/assets/images/help/copilot/vsc-shortcut-search-bar.png)
1. En regard de la commande que vous souhaitez modifier, cliquez sur l’icône de crayon.
![Capture d’écran de l’éditeur de raccourci clavier](/assets/images/help/copilot/vsc-edit-shortcuts.png)
1. Appuyez sur les touches que vous souhaitez utiliser pour la commande, puis appuyez sur <kbd>Entrée</kbd>/<kbd>Retour</kbd>.
![Capture d’écran de la zone de texte Modifier le raccourci clavier](/assets/images/help/copilot/vsc-edit-shortcuts-textbox.png)

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Activation ou désactivation des suggestions inline

Vous pouvez choisir d’activer ou de désactiver les suggestions en ligne pour {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vscode %}. 

1. Dans le menu **Fichier**, accédez aux **Préférences**, puis cliquez sur **Paramètres**.
![Capture d’écran des paramètres de {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/vsc-settings.png)
1. Dans le volet gauche de l’onglet Paramètres, cliquez sur **Extensions**, puis sélectionnez **Copilot**.
1. Sous « Suggestions inline : Activer », sélectionnez ou désélectionnez la case à cocher pour activer ou désactiver les suggestions inline.

## Activer ou désactiver {% data variables.product.prodname_copilot %} pour des langages spécifiques

Vous pouvez spécifier les langages pour lesquels vous souhaitez activer ou désactiver {% data variables.product.prodname_copilot %}.

1. À partir de {% data variables.product.prodname_vscode %}, cliquez sur l’onglet **Extensions**, puis accédez à la section **Copilot**. Pour plus d’informations, consultez « [Activation et désactivation des suggestions inline](#enabling-and-disabling-inline-suggestions) ».
1. Sous « Activer ou désactiver Copilot pour les langages spécifiés », cliquez sur **Modifier dans settings.json**.
1. Dans le fichier _settings.json_, ajoutez ou supprimez les langages pour lesquels vous souhaitez activer ou désactiver {% data variables.product.prodname_copilot %}. Par exemple, pour activer Python dans {% data variables.product.prodname_copilot %}, ajoutez `"python": true` à la liste, en vous assurant qu’il y a une virgule de fin après tous les éléments de la liste sauf le dernier.

    ```json
    {
        "editor.inlineSuggest.enabled": true,
        "github.copilot.enable": {
            "*": true,
            "yaml": false,
            "plaintext": false,
            "markdown": true,
            "javascript": true,
            "python": true
        }
    }
    ```

{% data reusables.copilot.dotcom-settings %}
