---
title: Utilisation de la palette de commandes de code Visual Studio dans GitHub Codespaces
intro: 'Vous pouvez utiliser la fonctionnalité Palette de commandes de {% data variables.product.prodname_vscode %} pour accéder à de nombreuses commandes dans {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
shortTitle: VS Code Command Palette
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/using-the-command-palette-in-codespaces
ms.openlocfilehash: acd462dd1c0b60dced529d7471b9c8638e2f6e91
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180810'
---
## À propos de {% data variables.product.prodname_vscode_command_palette %}

La {% data variables.product.prodname_vscode_command_palette_shortname %} est l’une des fonctionnalités essentielles de {% data variables.product.prodname_vscode %} et est disponible à l’utilisation dans {% data variables.product.prodname_github_codespaces %}. La palette de commandes vous permet d’accéder à de nombreuses commandes pour {% data variables.product.prodname_github_codespaces %} et {% data variables.product.prodname_vscode_shortname %}. Pour plus d’informations sur l’utilisation de {% data variables.product.prodname_vscode_command_palette_shortname %}, consultez « [Interface utilisateur](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) » dans la documentation {% data variables.product.prodname_vscode_shortname %}.

## Accès à {% data variables.product.prodname_vscode_command_palette_shortname %}

Vous pouvez accéder à {% data variables.product.prodname_vscode_command_palette_shortname %} de plusieurs façons.

- <kbd>Maj</kbd>+<kbd>Commande</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>P</kbd> (Windows/Linux).

  Notez que cette commande est un raccourci clavier réservé dans Firefox.
- <kbd>F1</kbd>
- Dans le menu Application, cliquez sur **Afficher > Palette de commandes...** .

  ![Menu de l’application](/assets/images/help/codespaces/codespaces-view-menu.png)

## Commandes pour {% data variables.product.prodname_codespaces %}

Pour afficher toutes les commandes liées à {% data variables.product.prodname_github_codespaces %}, [accédez à {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette), puis commencez à taper « Codespaces ».

![Liste de toutes les commandes liées à {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-command-palette.png)

### Suspension ou arrêt d’un espace de code

Si vous ajoutez un nouveau secret ou modifiez le type de machine, vous devez arrêter et redémarrer l’espace de code pour qu’il applique vos modifications. 

Pour suspendre ou arrêter le conteneur de votre espace de code, [accédez à {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette), puis commencez à taper « stop ». Sélectionnez **Espaces de code : arrêter l’espace de code actuel**.

![Commande pour arrêter un espace de code](/assets/images/help/codespaces/codespaces-stop.png)

### Ajout d’une configuration de conteneur de développement prédéfinie

Pour ajouter une configuration de conteneur de développement prédéfinie, [accédez à la {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette), puis commencez à taper « dev container ». Sélectionnez **Espaces de code : Ajouter des fichiers de configuration de conteneur de développement...**

![Commande permettant d’ajouter un conteneur de développement](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Reconstruction d’un espace de code

Si vous ajoutez un conteneur de développement ou modifiez l’un des fichiers de configuration (`devcontainer.json` et `Dockerfile`), vous devez reconstruire votre espace de code pour qu’il applique vos modifications. 

Pour reconstruire votre conteneur, [accédez à {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette), puis commencez à taper « rebuild ». Sélectionnez **Espaces de code : Reconstruire le conteneur**.

![Commande pour reconstruire un espace de code](/assets/images/help/codespaces/codespaces-rebuild.png)

{% data reusables.codespaces.full-rebuild-tip %}

### Journaux d’espace de code

Vous pouvez utiliser {% data variables.product.prodname_vscode_command_palette_shortname %} pour accéder aux journaux de création de l’espace de code, ou vous pouvez l’utiliser pour exporter tous les journaux. 

Pour récupérer les journaux pour {% data variables.product.prodname_github_codespaces %}, [accédez à la {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette), puis commencez à taper « log ». Sélectionnez **Codespaces : exporter les journaux** pour exporter tous les journaux liés à {% data variables.product.prodname_github_codespaces %}, ou **Codespaces : afficher les journaux de création** pour afficher les journaux liés à l’installation.

![Commande permettant d’accéder aux journaux](/assets/images/help/codespaces/codespaces-logs.png)

## Pour aller plus loin

- « [Utilisation de {% data variables.product.prodname_github_codespaces %} dans {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code) »
