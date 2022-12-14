---
title: Développement dans un espace de code
intro: 'Vous pouvez ouvrir un espace de code sur {% data variables.product.product_name %}, puis développer à l’aide des fonctionnalités de {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Develop in a codespace
ms.openlocfilehash: 459e98978fdc062d96372c26c56a0f042878d40d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108408'
---
## À propos du développement avec {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} vous offre l’expérience de développement complète de {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.links-to-get-started %}

![Vue d’ensemble d’un espace de code avec annotations](/assets/images/help/codespaces/codespace-overview-annotated.png)

1. Barre latérale – Par défaut, cette zone affiche vos fichiers projet dans l’Explorateur.
2. Barre d’activité – Affiche les vues et vous offre un moyen de basculer entre elles. Vous pouvez réorganiser les vues en les faisant glisser et en les supprimant.
3. Éditeur – Emplacement où vous modifiez vos fichiers. Vous pouvez utiliser l’onglet pour chaque éditeur pour le positionner exactement où vous en avez besoin.
4. Panneaux – Emplacement où vous pouvez voir les informations de sortie et de débogage, ainsi que l’emplacement par défaut du terminal intégré.
5. Barre d’état – Cette zone vous fournit des informations utiles sur votre espace de code et votre projet. Par exemple, le nom de la branche, les ports configurés, etc.

Pour plus d’informations sur l’utilisation de {% data variables.product.prodname_vscode_shortname %}, consultez le [Guide de l’interface utilisateur](https://code.visualstudio.com/docs/getstarted/userinterface) dans la documentation sur {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.use-chrome %} Pour plus d’informations, consultez « [Résolution des problèmes liés aux clients {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-codespaces-clients) ».

### Personnalisation de votre espace de code

{% data reusables.codespaces.about-personalization %} Pour plus d’informations, consultez « [Personnalisation de {% data variables.product.prodname_github_codespaces %} pour votre compte](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account) ».

{% data reusables.codespaces.apply-devcontainer-changes %} Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) ».

### Exécution de votre application à partir d’un espace de code
{% data reusables.codespaces.about-port-forwarding %} Pour plus d’informations, consultez « [Transfert de ports dans votre espace de code](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace) ».

### Validation (commit) de vos modifications

{% data reusables.codespaces.committing-link-to-procedure %} 

### À l’aide de la {% data variables.product.prodname_vscode_command_palette %}

La {% data variables.product.prodname_vscode_command_palette %} vous permet d’accéder à de nombreuses fonctionnalités et de les gérer pour {% data variables.product.prodname_github_codespaces %} et {% data variables.product.prodname_vscode_shortname %}. Pour plus d’informations, consultez « [Utilisation de la {% data variables.product.prodname_vscode_command_palette_shortname %} dans {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces) ».
