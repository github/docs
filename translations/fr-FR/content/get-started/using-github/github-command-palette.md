---
title: Palette de commandes GitHub
intro: 'Utilisez la palette de commandes dans {% data variables.product.product_name %} pour naviguer, rechercher et exécuter des commandes directement à partir de votre clavier.'
versions:
  feature: command-palette
shortTitle: GitHub Command Palette
ms.openlocfilehash: 5c6b739f2422be780cef6fa0e44e5d75663cc036
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159052'
---
{% data reusables.command-palette.beta-note %}

## À propos de la {% data variables.product.prodname_command_palette %}

Vous pouvez naviguer, rechercher et exécuter des commandes sur {% data variables.product.product_name %} avec la {% data variables.product.prodname_command_palette %}. La palette de commandes est un moyen à la demande d’afficher des suggestions en fonction de votre contexte actuel et des ressources que vous avez utilisées récemment. Vous pouvez ouvrir la palette de commandes avec un raccourci clavier à partir de n’importe où sur {% data variables.product.product_name %}, ce qui vous permet de gagner du temps et de garder vos mains sur le clavier.

### Navigation rapide

Lorsque vous ouvrez la palette de commandes, les suggestions sont optimisées afin de vous permettre d’accéder aisément à partir de n’importe où dans un dépôt, un compte personnel ou une organisation à des pages de niveau supérieur comme la page Problèmes. Si l’emplacement souhaité n’est pas listé, commencez à entrer le nom ou le numéro de l’emplacement pour affiner les suggestions.

![Suggestions de dépôt de la palette de commandes](/assets/images/help/command-palette/command-palette-navigation-repo-default.png)

### Accès facile aux commandes

La possibilité d’exécuter des commandes directement à partir de votre clavier, sans parcourir une série de menus, peut changer la façon dont vous utilisez {% data variables.product.prodname_dotcom %}. Par exemple, vous pouvez changer de thème en quelques frappes, ce qui facilite le basculement entre les thèmes à mesure que vos besoins changent.

![Changement de thème avec la palette de commandes](/assets/images/help/command-palette/command-palette-command-change-theme.png)

## Ouverture de la {% data variables.product.prodname_command_palette %}

Ouvrez la palette de commandes à l’aide de l’un des raccourcis clavier par défaut suivants :
- Windows et Linux : <kbd>Ctrl</kbd>+<kbd>K</kbd> ou <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>
- Mac : <kbd>Commande</kbd>+<kbd>K</kbd> ou <kbd>Commande</kbd>+<kbd>Option</kbd>+<kbd>K</kbd>

Vous pouvez personnaliser les raccourcis clavier que vous utilisez pour ouvrir la palette de commandes dans la [section Accessibilité](https://github.com/settings/accessibility) de vos paramètres utilisateur. Pour plus d’informations, consultez « [Personnalisation de vos raccourcis clavier de {% data variables.product.prodname_command_palette %}](#customizing-your-github-command-palette-keyboard-shortcuts) ».

Lorsque vous ouvrez la palette de commandes, elle affiche votre emplacement en haut à gauche et l’utilise comme étendue pour les suggestions (par exemple, l’organisation `mashed-avocado`).

![Lancement de la palette de commandes](/assets/images/help/command-palette/command-palette-launch.png)

{% note %}

**Remarques :**
- Si vous modifiez du texte Markdown, ouvrez la palette de commandes avec <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd> (Windows et Linux) ou <kbd>Commande</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> (Mac).{% ifversion projects-v2 %}
- Si vous travaillez sur un {% data variables.projects.project_v2 %}, une palette de commandes spécifique au projet s’affiche à la place. Pour plus d’informations, consultez « [Personnalisation d’une vue](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view) ».{% endif %}

{% endnote %}

### Personnalisation de vos raccourcis clavier de {% data variables.product.prodname_command_palette %}


Les raccourcis clavier par défaut utilisés pour ouvrir la palette de commandes peuvent entrer en conflit avec les raccourcis clavier par défaut de votre système d’exploitation et de votre navigateur. Vous avez la possibilité de personnaliser vos raccourcis clavier dans la [section Accessibilité](https://github.com/settings/accessibility) des paramètres de votre compte. Dans les paramètres de la palette de commandes, vous pouvez personnaliser les raccourcis clavier d’ouverture de la palette de commandes en mode de recherche et en mode de commande. 

![Paramètres de raccourci clavier de la palette de commandes](/assets/images/help/command-palette/command-palette-keyboard-shortcut-settings.png)
## Navigation avec la {% data variables.product.prodname_command_palette %}

Vous pouvez utiliser la palette de commandes pour accéder à n’importe quelle page à laquelle vous avez accès sur {% data variables.product.product_name %}.

{% data reusables.command-palette.open-palette %}

2. Commencez à taper le chemin auquel vous souhaitez accéder. Les suggestions de la palette de commandes changent en fonction de votre texte.

   ![Étendue actuelle de la navigation avec la palette de commandes](/assets/images/help/command-palette/command-palette-navigation-current-scope.png)

{% data reusables.command-palette.change-scope %}

   Vous pouvez également utiliser des séquences de touches pour affiner votre recherche. Pour plus d’informations, consultez « [Fonctions de séquences de touches](#keystroke-functions) ».

4. Terminez d’entrer le chemin, ou utilisez les touches de direction pour mettre en surbrillance le chemin souhaité dans la liste des suggestions.

5. Utilisez <kbd>Entrée</kbd> pour accéder à votre emplacement choisi. Vous pouvez également utiliser <kbd>Ctrl</kbd>+<kbd>Entrée</kbd> (Windows et Linux) ou <kbd>Commande</kbd>+<kbd>Entrée</kbd> (Mac) pour ouvrir l’emplacement dans un nouvel onglet de navigateur.

## Recherche avec la {% data variables.product.prodname_command_palette %}

Vous pouvez utiliser la palette de commandes pour rechercher ce que voulez sur {% data variables.location.product_location %}.

{% data reusables.command-palette.open-palette %}

{% data reusables.command-palette.change-scope %}

3. Si vous le souhaitez, utilisez des séquences de touches pour rechercher des types spécifiques de ressources :

   - <kbd>#</kbd> Rechercher des problèmes, des demandes de tirage (pull requests), des discussions et des projets
   - <kbd>!</kbd> Rechercher des projets
   - <kbd>@</kbd> Rechercher des utilisateurs, des organisations et des dépôts
   - <kbd>/</kbd> Rechercher des fichiers dans une étendue de dépôt

   ![Recherche de fichiers avec la palette de commandes](/assets/images/help/command-palette/command-palette-search-files.png)

4. Commencez à entrer vos termes de recherche. La palette de commandes vous propose une plage de recherches suggérées en fonction de votre étendue de recherche.

   {% tip %}

   Vous pouvez également utiliser la syntaxe complète de recherche intégrée de {% data variables.product.prodname_dotcom %} dans la palette de commandes. Pour plus d’informations, consultez « [Recherche d’informations sur {% data variables.product.prodname_dotcom %}](/search-github) ».

   {% endtip %}

5. Utilisez les touches de direction pour mettre en surbrillance le résultat de recherche souhaité, et utilisez <kbd>Entrée</kbd> pour accéder à votre emplacement choisi. Vous pouvez également utiliser <kbd>Ctrl</kbd>+<kbd>Entrée</kbd> (Windows et Linux) ou <kbd>Commande</kbd>+<kbd>Entrée</kbd> (Mac) pour ouvrir l’emplacement dans un nouvel onglet de navigateur.

## Exécution de commandes à partir de la {% data variables.product.prodname_command_palette %}

Vous pouvez utiliser la {% data variables.product.prodname_command_palette %} pour exécuter des commandes. Vous pouvez par exemple créer un dépôt ou un problème, ou changer votre thème. Lorsque vous exécutez une commande, l’emplacement de son action est déterminé par la page sous-jacente ou par l’étendue affichée dans la palette de commandes.

- Les commandes liées aux demandes de tirage et aux problèmes s’exécutent toujours sur la page sous-jacente.
- Les commandes de niveau supérieur, telles que les commandes de dépôt, s’exécutent dans l’étendue affichée dans la palette de commandes.

Pour obtenir la liste complète des commandes prises en charge, consultez « [Référence de la {% data variables.product.prodname_command_palette %}](#github-command-palette-reference) ».

1. Les raccourcis clavier par défaut pour ouvrir la palette de commandes en mode de commande sont <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>K</kbd> (Windows et Linux) ou <kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>K</kbd> (Mac). Si la palette de commandes est déjà ouverte, appuyez sur <kbd>></kbd> pour basculer vers le mode de commande. {% data variables.product.prodname_dotcom %} suggère des commandes en fonction de votre emplacement.

   ![Mode de commande de la palette de commandes](/assets/images/help/command-palette/command-palette-command-mode.png)

{% data reusables.command-palette.change-scope %}

3. Si la commande souhaitée n’est pas affichée, vérifiez votre étendue, puis commencez à entrer le nom de la commande dans la zone de texte.

4. Utilisez les touches de direction pour mettre en surbrillance la commande souhaitée, et utilisez <kbd>Entrée</kbd> pour l’exécuter.


## Fermeture de la palette de commandes

Lorsque la palette de commandes est active, vous pouvez utiliser l’un des raccourcis clavier suivants pour la fermer :

- Mode de recherche et de navigation : <kbd>Échap</kbd> ou <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows et Linux)  <kbd>Commande</kbd>+<kbd>K</kbd> (Mac)
- Mode de commande : <kbd>Échap</kbd> ou <kbd>Ctrl</kbd>+<kbd>Maj</kbd>+<kbd>K</kbd> (Windows et Linux)  <kbd>Commande</kbd>+<kbd>Maj</kbd>+<kbd>K</kbd> (Mac)

Si vous avez personnalisé les raccourcis clavier de la palette de commandes dans les paramètres d’accessibilité, vos raccourcis clavier personnalisés seront utilisés pour ouvrir et fermer la palette de commandes.  

## Référence de la {% data variables.product.prodname_command_palette %}

### Fonctions de séquences de touches

Ces séquences de touches sont disponibles lorsque la palette de commandes est en mode de navigation et de recherche (autrement dit, elles ne sont pas disponibles en mode de commande).

| Séquence de touches | Fonction |
| :- | :- |
|<kbd>></kbd>| Passer en mode de commande. Pour plus d’informations, consultez « [Exécution de commandes à partir de la {% data variables.product.prodname_command_palette %}](#running-commands-from-the-github-command-palette) ». |
|<kbd>#</kbd>| Rechercher des problèmes, des demandes de tirage, des discussions et des projets. Pour plus d’informations, consultez « [Recherche avec la {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette) ».|
|<kbd>@</kbd>| Rechercher des utilisateurs, des organisations et des dépôts. Pour plus d’informations, consultez « [Recherche avec la {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette) ».|
|<kbd>/</kbd>| Rechercher des fichiers dans une étendue de dépôt ou des dépôts dans une étendue d’organisation. Pour plus d’informations, consultez « [Recherche avec la {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette) ». |
|<kbd>!</kbd>| Rechercher uniquement des projets. Pour plus d’informations, consultez « [Recherche avec la {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette) ».|
|<kbd>Ctrl</kbd>+<kbd>C</kbd> ou <kbd>Commande</kbd>+<kbd>C</kbd>| Copier l’URL de recherche ou de navigation du résultat mis en surbrillance dans le Presse-papiers.|
|<kbd>Entrée</kbd>| Accéder au résultat mis en surbrillance ou exécuter la commande mise en surbrillance.|
|<kbd>Ctrl</kbd>+<kbd>Entrée</kbd> ou <kbd>Commande</kbd>+<kbd>Entrée</kbd>| Ouvrir le résultat de recherche ou de navigation mis en surbrillance dans un nouvel onglet de navigateur.|
|<kbd>?</kbd>| Afficher l’aide dans la palette de commandes.|

### Commandes globales

Ces commandes sont disponibles à partir de toutes les étendues.

| Commande | Comportement|
| :- | :- | :- |
|`Import repository`|Créer un dépôt en important un projet à partir d’un autre système de gestion de versions. Pour plus d’informations, consultez « [Importation d’un dépôt avec l’importateur GitHub](/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer) ».  |
|`New gist`|Ouvrir un nouveau gist. Pour plus d’informations, consultez « [Création d’un gist](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists) ». |
|`New organization`|Créer une organisation. Pour plus d’informations, consultez « [Création d’une organisation à partir de zéro](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) ». |
|`New project`|Créer un tableau de projet. Pour plus d’informations, consultez « [Création d’un projet](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project) ».  |
|`New repository`|Créer un dépôt à partir de zéro. Pour plus d’informations, consultez « [Création d’un dépôt](/repositories/creating-and-managing-repositories/creating-a-new-repository) ». |
|`Switch theme to <theme name>`|Passer directement à un autre thème pour l’interface utilisateur. Pour plus d’informations, consultez « [Gestion de vos paramètres de thème](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings) ». |


### Commandes d’organisation

Ces commandes sont disponibles uniquement dans l’étendue d’une organisation.

| Commande | Comportement|
| :- | :- |
| `New team`| Créer une équipe dans l’organisation actuelle. Pour plus d’informations, consultez « [Création d’une équipe](/organizations/organizing-members-into-teams/creating-a-team) ».

### Commandes de dépôt

La plupart de ces commandes sont disponibles uniquement dans la page d’accueil du dépôt. Si une commande est également disponible dans d’autres pages, cela est indiqué dans la colonne de comportement.

| Commande | Comportement|
| :- | :- |
|`Clone repository: <URL type>`|Copier l’URL nécessaire pour cloner le dépôt à l’aide de {% data variables.product.prodname_cli %}, HTTPS ou SSH dans le Presse-papiers. Pour plus d’informations, consultez « [Clonage d’un dépôt](/repositories/creating-and-managing-repositories/cloning-a-repository) ».|
|`New discussion`|Créer une discussion dans le dépôt. Pour plus d’informations, consultez « [Création d’une discussion](/discussions/quickstart#creating-a-new-discussion) ».|
|`New file`|Créer un fichier à partir de n’importe quelle page du dépôt. Pour plus d’informations, consultez « [Ajout d’un fichier à un dépôt](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository) ».
|`New issue`|Ouvrir un nouveau problème à partir de n’importe quelle page du dépôt. Pour plus d’informations, consultez « [Création d’un problème](/issues/tracking-your-work-with-issues/creating-an-issue) ».|
|`Open in new codespace`|Créer et ouvrir un espace de code pour ce dépôt. Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository) ».|
|`Open in github.dev editor`|Ouvrir le dépôt actif dans l’éditeur github.dev. Pour plus d’informations, consultez « [Ouverture de l’éditeur web](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor) ».|

### Commandes de fichier

Ces commandes sont disponibles uniquement lorsque vous ouvrez la palette de commandes à partir d’un fichier dans un dépôt.

| Commande | Comportement|
| :- | :- |
|`Copy permalink`|Créer un lien vers le fichier qui inclut le SHA de commit actuel, et copier le lien dans le Presse-papiers. Pour plus d’informations, consultez « [Obtention de liens permanents vers des fichiers](/repositories/working-with-files/using-files/getting-permanent-links-to-files#press-y-to-permalink-to-a-file-in-a-specific-commit) ».
|`Open in github.dev editor`|Ouvrir le fichier actuellement affiché dans l’éditeur github.dev. Pour plus d’informations, consultez « [Ouverture de l’éditeur web](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor) ».|

### Commandes de discussion

Ces commandes sont disponibles uniquement lorsque vous ouvrez la palette de commandes à partir d’une discussion. Elles agissent sur votre page active et ne sont pas affectées par l’étendue définie dans la palette de commandes.

| Commande | Comportement|
| :- | :- |
|`Delete discussion...`|Supprimer définitivement la discussion. Pour plus d’informations, consultez « [Gestion des discussions](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion) ».
|`Edit discussion body`|Ouvrir le corps principal de la discussion, prêt à être modifié.
|`Subscribe`/`unsubscribe`|S’abonner ou de désabonner des notifications pour les ajouts à la discussion. Pour plus d’informations, consultez « [À propos des notifications »](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).
|`Transfer discussion...`|Déplacer la discussion vers un autre dépôt. Pour plus d’informations, consultez « [Gestion des discussions](/discussions/managing-discussions-for-your-community/managing-discussions#transferring-a-discussion) ».

### Commandes de problème

Ces commandes sont disponibles uniquement lorsque vous ouvrez la palette de commandes à partir d’un problème. Elles agissent sur votre page active et ne sont pas affectées par l’étendue définie dans la palette de commandes.

| Commande | Comportement|
| :- | :- |
|`Close`/`reopen issue`|Fermer ou rouvrir le problème actuel. Pour plus d’informations, consultez « [À propos des problèmes](/issues/tracking-your-work-with-issues/about-issues) ».|
|`Convert issue to discussion...`|Convertir le problème actuel en discussion. Pour plus d’informations, consultez « [Modération des discussions](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion) ».
|`Delete issue...`|Supprimer le problème actuel. Pour plus d’informations, consultez « [Suppression d’un problème](/issues/tracking-your-work-with-issues/deleting-an-issue) ».|
|`Edit issue body`|Ouvrir le corps principal du problème, prêt à être modifié.
|`Edit issue title`|Ouvrir le titre du problème, prêt à être modifié.
|`Lock issue`|Limiter les nouveaux commentaires aux utilisateurs disposant d’un accès en écriture au dépôt. Pour plus d’informations, consultez « [Verrouillage des conversations](/communities/moderating-comments-and-conversations/locking-conversations) ».
|`Pin`/`unpin issue`|Définir si le problème est affiché ou non dans la section Problèmes épinglés pour le dépôt. Pour plus d’informations, consultez « [Épinglage d’un problème à votre dépôt](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository) ».|
|`Subscribe`/`unsubscribe`|S’abonner ou de désabonner des notifications pour les modifications apportées à ce problème. Pour plus d’informations, consultez « [À propos des notifications »](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).
|`Transfer issue...`|Transférer le problème vers un autre dépôt. Pour plus d’informations, consultez « [Transfert d’un problème vers un autre dépôt](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository) ».|

### Commandes de demande de tirage

Ces commandes sont disponibles uniquement lorsque vous ouvrez la palette de commandes à partir d’une demande de tirage. Elles agissent sur votre page active et ne sont pas affectées par l’étendue définie dans la palette de commandes.

| Commande | Comportement|
| :- | :- |
|`Close`/`reopen pull request`|Fermer ou rouvrir la demande de tirage actuelle. Pour plus d’informations, consultez « [À propos des demandes de tirage](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) ».|
|`Convert to draft`/`Mark pull request as ready for review`|Changer l’état de la demande de tirage de façon à l’afficher comme prête, ou pas encore prête, pour révision. Pour plus d’informations, consultez « [Modification de l’état d’une demande de tirage](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) ».|
|`Copy current branch name`| Ajouter le nom de la branche principale pour la demande de tirage au Presse-papiers.
|`Edit pull request body`|Ouvrir le corps principal de la demande de tirage, prêt à être modifié.
|`Edit pull request title`|Ouvrir le titre de la demande de tirage, prêt à être modifiée.
|`Open in new codespace`|Créer et ouvrir un espace de code pour la branche principale de la demande de tirage. Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository) ».
|`Subscribe`/`unsubscribe`|S’abonner ou de désabonner des notifications pour les modifications apportées à cette demande de tirage. Pour plus d’informations, consultez « [À propos des notifications »](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).
|`Update current branch`|Mettre à jour la branche principale de la demande de tirage avec les modifications de la branche de base. Cette commande est disponible uniquement pour les demandes de tirage qui ciblent la branche par défaut du dépôt. Pour plus d’informations, consultez « [À propos des branches](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) ».|
