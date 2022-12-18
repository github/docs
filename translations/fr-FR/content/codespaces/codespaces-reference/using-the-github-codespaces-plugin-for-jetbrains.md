---
title: Utilisation du plug-in GitHub Codespaces pour JetBrains
shortTitle: Plugin for JetBrains
intro: 'Vous pouvez utiliser le plug-in {% data variables.product.prodname_github_codespaces %} pour l’application cliente JetBrains afin d’obtenir des informations sur votre codespace ou pour l’arrêter quand vous avez terminé de travailler.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: 3f4ef139386e616d14ef9a9cc5b474c96983de91
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185176'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## À propos du plug-in {% data variables.product.prodname_github_codespaces %}

L’application cliente JetBrains est lancée quand vous vous connectez à un codespace à partir de l’application JetBrains Gateway. Elle vous permet d’utiliser {% data variables.product.prodname_github_codespaces %} avec votre IDE JetBrains favori. Pour plus d’informations, consultez « [Utilisation de {% data variables.product.prodname_github_codespaces %} dans votre IDE JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide) ».

Le plug-in {% data variables.product.prodname_github_codespaces %} est déjà installé dans le client JetBrains quand vous vous connectez à un codespace à partir de JetBrains Gateway. Le plug-in ajoute la fenêtre d’outils {% data variables.product.prodname_github_codespaces %} à l’interface utilisateur.

Cliquez sur **{% data variables.product.prodname_github_codespaces %}** en bas à gauche de la fenêtre d’application du client JetBrains pour ouvrir la fenêtre d’outils {% data variables.product.prodname_github_codespaces %}.

![Capture d’écran de la fenêtre d’outils {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/jetbrains-codespaces-tool-window.png)

## Utilisation de la fenêtre d’outils {% data variables.product.prodname_github_codespaces %}

La fenêtre d’outils {% data variables.product.prodname_github_codespaces %} affiche :
* Le dépôt à partir duquel vous avez créé ce codespace.
* Le nom d’affichage du codespace.
* La branche actuelle.
* Les spécifications de la machine.
* La durée pendant laquelle ce codespace peut rester inactif avant son arrêt automatique.
* L’ancienneté du codespace.
* La période pendant laquelle un codespace arrêté est conservé avant sa suppression automatique.

Les icônes situées en haut de la fenêtre d’outils {% data variables.product.prodname_github_codespaces %} fournissent les fonctions suivantes.

* **Actualiser le codespace actif**

  ![Capture d’écran du bouton Actualiser](/assets/images/help/codespaces/jetbrains-plugin-icon-refresh.png)

  Actualisez les détails dans la fenêtre d’outils {% data variables.product.prodname_github_codespaces %}. Par exemple, si vous avez utilisé {% data variables.product.prodname_cli %} pour changer le nom d’affichage, vous pouvez cliquer sur ce bouton pour afficher le nouveau nom.

* **Gérer vos codespaces à partir du web**

  ![Capture d’écran du bouton de liste](/assets/images/help/codespaces/jetbrains-plugin-icon-index.png)

  Ouvrez votre liste de codespaces à l’adresse https://github.com/codespaces.

* **Afficher le journal de création des codespaces**

  ![Capture d’écran du bouton de journal](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

  Ouvrez le journal de création des codespaces dans la fenêtre de l’éditeur. Pour plus d’informations, consultez « [Journaux de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs) ».
