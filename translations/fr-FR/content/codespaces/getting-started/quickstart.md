---
title: 'Démarrage rapide pour {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Quickstart for {% data variables.product.prodname_codespaces %}'
intro: "Essayez {% data variables.product.prodname_github_codespaces %} en 5\_minutes."
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
ms.openlocfilehash: f35fa87711ff3a7c33ed252d0d1e87865af619bc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158652'
---
## Introduction

Dans ce guide, vous allez créer un codespace à partir d’un modèle de référentiel et explorer certaines des fonctionnalités essentielles disponibles dans le codespace. Vous allez travailler dans la version navigateur de {% data variables.product.prodname_vscode %}, qui est initialement l’éditeur par défaut pour {% data variables.product.prodname_github_codespaces %}. Après avoir essayé ce guide de démarrage rapide, vous pouvez utiliser {% data variables.product.prodname_codespaces %} dans d’autres éditeurs et vous pouvez changer l’éditeur par défaut. Des liens sont fournis à la fin de ce guide.

À partir de ce guide de démarrage rapide, vous allez découvrir comment créer un codespace, vous connecter à un port transféré pour voir votre application s’exécuter, publier votre codespace dans un nouveau dépôt et personnaliser votre configuration avec des extensions.

Pour plus d’informations sur le fonctionnement exact de {% data variables.product.prodname_github_codespaces %}, consultez le guide complémentaire « [Présentation approfondie de {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive) ».

## Création de votre codespace

1. Accédez au dépôt de modèles [github/haikus-for-codespaces](https://github.com/github/haikus-for-codespaces).
{% data reusables.codespaces.open-template-in-codespace-step %}

## Exécution de l'application

Une fois le codespace créé, le dépôt de modèles est automatiquement cloné dans celui-ci. Vous pouvez maintenant exécuter l’application et la lancer dans un navigateur.

1. Lorsque le terminal devient disponible, entrez la commande `npm run dev`. Cet exemple utilise un projet Node.js et cette commande exécute le script intitulé « dev » dans le fichier `package.json`, qui démarre l’application web définie dans l’exemple de dépôt.
   
   ![npm run dev dans le terminal](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   S’il s’agit d’un autre type d’application, entrez la commande de démarrage correspondante pour ce projet.

2. Quand votre application démarre, le codespace reconnaît le port sur lequel l’application s’exécute et affiche une invite pour vous informer du transfert. 

   ![Notification « toast » de transfert de port](/assets/images/help/codespaces/quickstart-port-toast.png)

3. Cliquez sur **Ouvrir dans le navigateur** pour afficher votre application en cours d’exécution dans un nouvel onglet.

## Modifier l’application et afficher les modifications

1. Revenez à votre codespace et ouvrez le fichier `haikus.json` en cliquant dessus dans l’Explorateur.

2. Modifiez le champ `text` du premier haiku pour personnaliser l’application avec votre propre haiku.

3. Revenez à l’onglet de l’application en cours d’exécution dans votre navigateur et actualisez pour afficher vos modifications.
   
   {% octicon "light-bulb" aria-label="The lightbulb icon" %} Si vous avez fermé l’onglet, ouvrez le panneau Ports et cliquez sur l’icône **Ouvrir dans le navigateur** pour le port en cours d’exécution.

   ![Panneau de transfert de port](/assets/images/help/codespaces/quickstart-forward-port.png)

## Validation (commit) et envoi (push) de vos modifications

Maintenant que vous avez apporté quelques modifications, vous pouvez utiliser le terminal intégré ou la vue source pour publier votre travail dans un nouveau dépôt.

{% data reusables.codespaces.source-control-display-dark %}
1. Pour indexer vos changements, cliquez sur **+** à côté du fichier `haikus.json`. Vous pouvez également cliquer à côté de **Changements** si vous avez changé plusieurs fichiers, et si vous souhaitez les indexer.

   ![Barre latérale de contrôle de code source avec bouton de préproduction mis en exergue](/assets/images/help/codespaces/codespaces-commit-stage.png)

2. Pour commiter vos changements indexés, tapez un message de commit décrivant la modification que vous avez apportée, puis cliquez sur **Commiter**.

   ![Barre latérale du contrôle de code source avec un message de validation (commit)](/assets/images/help/codespaces/vscode-commit-button.png)

3. Cliquez sur **Publier la branche**.
   
   ![Capture d’écran du bouton « Publier la branche » dans VS Code](/assets/images/help/codespaces/vscode-publish-branch-button.png)

4. Dans la liste déroulante « Nom du dépôt », tapez un nom pour votre nouveau dépôt, puis sélectionnez **Publier sur le dépôt privé {% data variables.product.company_short %}** ou **Publier sur le dépôt public {% data variables.product.company_short %}** .
   
   ![Capture d’écran de la liste déroulante « Nom du dépôt » dans VS Code](/assets/images/help/codespaces/choose-new-repository.png)

   Le propriétaire du nouveau dépôt est le compte {% data variables.product.prodname_dotcom %} avec lequel vous avez créé le codespace.
5. Dans la fenêtre contextuelle qui s’affiche dans le coin inférieur droit de l’éditeur, cliquez sur **Ouvrir sur {% data variables.product.company_short %}** pour afficher le nouveau dépôt sur {% data variables.product.prodname_dotcom_the_website %}. Dans le nouveau dépôt, affichez le fichier `haikus.json` et vérifiez que la modification que vous avez apportée dans votre codespace a bien été poussée dans le dépôt.
   
   ![Capture d’écran de la fenêtre contextuelle « Ouvrir dans GitHub » dans VS Code](/assets/images/help/codespaces/open-on-github.png)

## Personnalisation avec une extension

Quand vous vous connectez à un codespace avec le navigateur ou l’application de bureau {% data variables.product.prodname_vscode %}, vous pouvez accéder à la Place de marché Visual Studio Code directement à partir de l’éditeur. Pour cet exemple, vous allez installer une extension {% data variables.product.prodname_vscode_shortname %} qui modifie le thème, mais vous pouvez installer toute extension utile pour votre workflow.

1. Dans la barre latérale gauche, cliquez sur l’icône Extensions.
1. Dans la barre de recherche, tapez `fairyfloss` et cliquez sur **Installer**.

   ![Ajouter une extension](/assets/images/help/codespaces/add-extension.png)

1. Sélectionnez le thème `fairyfloss` en le sélectionnant dans la liste.

   ![Sélectionner le thème fairyfloss](/assets/images/help/codespaces/fairyfloss.png)

Si vous utilisez un codespace dans le navigateur ou dans l’application de bureau {% data variables.product.prodname_vscode %} et que vous avez activé [Synchronisation des paramètres](https://code.visualstudio.com/docs/editor/settings-sync), toutes les modifications que vous apportez à la configuration de votre éditeur dans le codespace actuel, comme changer votre thème ou des associations de touches, sont automatiquement synchronisées avec toutes les instances de {% data variables.product.prodname_vscode %} qui sont signées dans votre compte {% data variables.product.prodname_dotcom %} et avec tous les autres codespaces que vous créez.

## Étapes suivantes

Vous avez créé, personnalisé et exécuté avec succès votre première application dans un codespace. Il vous reste encore beaucoup de choses à découvrir. Voici quelques ressources utiles pour effectuer vos étapes suivantes avec {% data variables.product.prodname_github_codespaces %}.

* « [Présentation approfondie](/codespaces/getting-started/deep-dive) » : ce guide de démarrage rapide a présenté certaines des fonctionnalités de {% data variables.product.prodname_github_codespaces %}. La présentation approfondie examine ces domaines d’un point de vue technique.
* « [Ajouter une configuration de conteneur de développement à votre dépôt](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces) » : ces guides fournissent des informations sur la configuration de votre dépôt pour utiliser {% data variables.product.prodname_github_codespaces %} avec des langages spécifiques.
* « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) » : ce guide fournit des détails sur la création d’une configuration personnalisée pour {% data variables.product.prodname_codespaces %} pour votre projet.

## Pour aller plus loin

* « [Activation de {% data variables.product.prodname_github_codespaces %} pour votre organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization) »
* « [Utilisation de {% data variables.product.prodname_github_codespaces %} dans {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code) »
* « [Utilisation de {% data variables.product.prodname_github_codespaces %} dans votre IDE JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide) »
* « [Utilisation de {% data variables.product.prodname_github_codespaces %} avec {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli) »
* « [Définition de votre éditeur par défaut pour {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces) »
* « [Gestion du coût de {% data variables.product.prodname_github_codespaces %} dans votre organisation](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization) »
