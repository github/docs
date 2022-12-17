---
title: Création d’un projet (bêta)
intro: Découvrez comment créer un projet, le remplir et ajouter des champs personnalisés.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
- Projects
ms.openlocfilehash: 3fa7e52f09f3be67a036000b13f484b29852a741
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145128682"
---
Les projets sont une collection personnalisable d’éléments qui restent à jour avec les données {% data variables.product.company_short %}. Vos projets peuvent suivre des problèmes, des demandes de tirage et des idées que vous notez. Vous pouvez ajouter des champs personnalisés et créer des vues à des fins spécifiques.

{% data reusables.projects.projects-beta %}

## <a name="creating-a-project"></a>Création d’un projet

### <a name="creating-an-organization-project"></a>Création d’un projet d’organisation

{% data reusables.projects.create-project %}

### <a name="creating-a-user-project"></a>Création d’un projet d’utilisateur

{% data reusables.projects.create-user-project %}

## <a name="updating-your-project-description-and-readme"></a>Mise à jour de la description de votre projet et du fichier README

{% data reusables.projects.project-description %}

## <a name="adding-items-to-your-project"></a>Ajout d’éléments à votre projet

Votre projet peut suivre des brouillons de problèmes, des problèmes et des demandes de tirage.

### <a name="creating-draft-issues"></a>Création de brouillons de problèmes

Les brouillons de problèmes sont utiles pour capturer rapidement des idées.

1. Placez votre curseur dans la ligne inférieure du projet, à côté de l’icône {% octicon "plus" aria-label="plus icon" %}.
1. Entrez votre idée, puis appuyez sur **Entrée**.
1. Pour ajouter du texte de corps, cliquez sur le titre du brouillon de problème. Dans la zone d’entrée Markdown qui s’affiche, entrez le texte du corps du brouillon de problème, puis cliquez sur **Enregistrer**.

Les brouillons de problèmes peuvent être accompagnés d’un titre, d’un corps de texte, de destinataires et de tous les champs personnalisés de votre projet. Pour remplir le référentiel, les étiquettes ou les jalons d’un brouillon de problème, vous devez commencer par convertir ce brouillon de problème en problème. Pour plus d’informations, consultez « [Conversion de brouillons de problèmes en problèmes](#converting-draft-issues-to-issues) ».

{% note %}

**Remarque** : les utilisateurs ne reçoivent pas de notifications lorsqu’ils sont affectés à un brouillon de problème ou y sont mentionnés, sauf si le brouillon de problème est converti en problème.

{% endnote %}

### <a name="issues-and-pull-requests"></a>Problèmes et demandes de tirage

#### <a name="paste-the-url-of-an-issue-or-pull-request"></a>Collez l’URL d’un problème ou d’une demande de tirage

1. Placez votre curseur dans la ligne inférieure du projet, à côté de l’icône {% octicon "plus" aria-label="plus icon" %}.
1. Collez l’URL du problème ou de la demande de tirage.

#### <a name="searching-for-an-issue-or-pull-request"></a>Recherche d’un problème ou d’une demande de tirage

1. Placez votre curseur dans la ligne inférieure du projet, à côté de l’icône {% octicon "plus" aria-label="plus icon" %}.
2. Entrez <kbd>#</kbd> .
3. Sélectionnez le référentiel où se trouve le problème ou la demande de tirage. Vous pouvez entrer une partie du nom du référentiel pour affiner vos options.
4. Sélectionnez le problème ou la demande de tirage. Vous pouvez entrer une partie du titre pour affiner vos options.

#### <a name="adding-multiple-issues-or-pull-requests-from-a-repository"></a>Ajout de plusieurs problèmes ou demandes de tirage à partir d’un référentiel

1. Sur {% data variables.product.product_location %}, accédez au référentiel contenant les problèmes ou les demandes de tirage que vous souhaitez ajouter à votre projet.
{% data reusables.repositories.sidebar-issue-pr %}
1. À gauche de chaque titre de problème, sélectionnez les problèmes que vous souhaitez ajouter à votre projet.
  ![Capture d’écran montrant la case à cocher permettant de sélectionner un problème ou une demande de tirage](/assets/images/help/issues/select-issue-checkbox.png)
1. Si vous le souhaitez, pour sélectionner chaque problème ou demande de tirage de la page, en haut de la liste des problèmes ou demandes de tirage, sélectionnez tout. 
  ![Capture d’écran montrant la case à cocher pour tout sélectionner à l’écran](/assets/images/help/issues/select-all-checkbox.png)
1. Au-dessus de la liste des problèmes ou demandes de tirage, cliquez sur **Projets (bêta)** . 
  ![Capture d’écran montrant la case à cocher pour tout sélectionner à l’écran](/assets/images/help/issues/projects-beta-assign-button.png)
1. Cliquez sur les projets auxquels vous souhaitez ajouter les problèmes ou les demandes de tirage sélectionnés.
  ![Capture d’écran montrant la case à cocher pour tout sélectionner à l’écran](/assets/images/help/issues/projects-beta-assign-dropdown.png)

#### <a name="assigning-a-project-from-within-an-issue-or-pull-request"></a>Attribution d’un projet à partir d’un problème ou d’une demande de tirage

1. Accédez au problème ou à la demande de tirage que vous souhaitez ajouter à un projet.
2. Dans la barre latérale, cliquez sur **Projets**.
3. Sélectionnez le projet auquel vous souhaitez ajouter le problème ou la demande de tirage.
4. Si vous le souhaitez, renseignez les champs personnalisés.

   ![Barre latérale Projet](/assets/images/help/issues/project_side_bar.png)

## <a name="converting-draft-issues-to-issues"></a>Conversion des brouillons de problèmes en problèmes

Dans une disposition de table :

1. Cliquez sur {% octicon "triangle-down" aria-label="the item menu" %} dans le brouillon de problème que vous souhaitez convertir.
2. Sélectionnez **Convertir en problème**.
3. Sélectionnez le référentiel auquel vous souhaitez ajouter le problème.
4. Vous pouvez également modifier les champs `labels`, `milestone` ou `repository` du brouillon de problème que vous souhaitez convertir.

Dans une disposition de tableau :

1. Cliquez sur {% octicon "kebab-horizontal" aria-label="the item menu" %} dans le brouillon de problème que vous souhaitez convertir.
2. Sélectionnez **Convertir en problème**.
3. Sélectionnez le référentiel auquel vous souhaitez ajouter le problème.

## <a name="removing-items-from-your-project"></a>Suppression d’éléments de votre projet

Vous pouvez archiver un élément pour conserver son contexte dans le projet, mais le supprimer des affichages du projet. Vous pouvez supprimer un élément pour le supprimer entièrement du projet.

1. Sélectionnez le ou les éléments à archiver ou à supprimer. Pour sélectionner plusieurs éléments, effectuez l’une des opérations suivantes :
     - <kbd>Commande</kbd>+Clic (Mac) ou <kbd>Ctrl</kbd>+Clic (Windows/Linux) sur chaque élément.
     - Sélectionnez un élément, puis appuyez sur <kbd>Maj</kbd>+<kbd>↑</kbd> ou <kbd>Maj</kbd>+<kbd>></kbd> pour sélectionner des éléments supplémentaires au-dessus ou en dessous de l’élément initialement sélectionné.
     - Sélectionnez un élément, puis appuyez sur <kbd>Maj</kbd> et cliquez sur un autre élément pour sélectionner tous les éléments entre les deux éléments.
     - Entrez <kbd>Command</kbd>+<kbd>A</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>A</kbd> (Windows/Linux) pour sélectionner tous les éléments d’une colonne dans une disposition de tableau ou tous les éléments d’une disposition de table.
2. Pour archiver tous les éléments sélectionnés, entrez <kbd>E</kbd>. Pour supprimer tous les éléments sélectionnés, entrez <kbd>Del</kbd>. Vous pouvez également sélectionner {% octicon "triangle-down" aria-label="the item menu" %} (dans une disposition de table) ou {% octicon "kebab-horizontal" aria-label="the item menu" %} (dans une disposition de tableau), puis sélectionner l’action souhaitée.

Vous pouvez restaurer les éléments archivés, mais pas les éléments supprimés. Pour plus d’informations, consultez « [Restauration d’éléments archivés](#restoring-archived-items) ».

## <a name="restoring-archived-items"></a>Restauration d’éléments archivés

1. Accédez à votre projet.
1. En haut à droite, cliquez sur {% octicon "kebab-horizontal" aria-label="the kebab icon" %}.
1. Dans le menu, cliquez sur **Éléments archivés**.
1. Pour filtrer les éléments archivés qui s’affichent, vous pouvez entrer votre filtre dans la zone de texte au-dessus de la liste des éléments. Pour plus d’informations sur les filtres disponibles, consultez « [Filtrage des projets (bêta)](/issues/trying-out-the-new-projects-experience/filtering-projects) ».

   ![Capture d’écran montrant le champ de filtrage des éléments archivés](/assets/images/help/issues/filter-archived-items.png)
   
1. À gauche de chaque titre d’élément, sélectionnez les éléments que vous souhaitez restaurer.

   ![Capture d’écran montrant les cases à cocher en regard des éléments archivés](/assets/images/help/issues/select-archived-item.png)
   
1. Pour restaurer les éléments sélectionnés, au-dessus de la liste des éléments, cliquez sur **Restaurer**. 

   ![Capture d’écran montrant le bouton « Restaurer »](/assets/images/help/issues/restore-archived-item-button.png)

## <a name="adding-fields"></a>Ajout de champs

À mesure que les valeurs de champ changent, elles sont automatiquement synchronisées afin que votre projet et les éléments qu’il suit soient à jour.

### <a name="showing-existing-fields"></a>Affichage des champs existants

Votre projet effectue le suivi des informations à jour relatives aux problèmes et demandes de tirage, y compris les modifications apportées au titre, aux destinataires, aux étiquettes, aux jalons, aux référentiel, aux réviseurs et aux demandes de tirage liées. Lorsque votre projet s’initialise, « titre » et « destinataires » s’affichent ; les autres champs sont masqués. Vous pouvez modifier la visibilité de ces champs dans votre projet.

1. {% data reusables.projects.open-command-palette %}
2. Commencez par entrer « show ».
3. Sélectionnez la commande souhaitée (par exemple : « Show: Repository »).

Vous pouvez également effectuer cette opération dans l’interface utilisateur :

1. Cliquez sur {% octicon "plus" aria-label="the plus icon" %} dans l’en-tête de champ le plus à droite. Un menu déroulant avec les champs du projet s’affiche.
   ![Afficher ou masquer des champs](/assets/images/help/issues/projects_fields_menu.png)
2. Sélectionnez le ou les champs que vous souhaitez afficher ou masquer. Une icône {% octicon "check" aria-label="check icon" %} indique les champs affichés.

### <a name="adding-custom-fields"></a>Ajout de champs personnalisés

Vous pouvez ajouter des champs personnalisés à votre projet. Les champs personnalisés s’affichent dans la barre latérale des problèmes et des demandes d’extraction du projet.

Les champs personnalisés peuvent correspondre à du texte, un nombre, une date, une sélection unique ou une itération :

- Texte : la valeur peut être n’importe quel texte.
- Nombre : la valeur doit être un nombre.
- Date : la valeur doit être une date.
- Sélection unique : la valeur doit être sélectionnée dans un ensemble de valeurs spécifiées.
- Itération : la valeur doit être sélectionnée dans un ensemble de plages de dates (itérations). Les itérations situées dans le passé sont automatiquement marquées comme « terminées », et l’itération couvrant la plage de dates actuelle est marquée comme « actuelle ». Pour plus d’informations, consultez « [Gestion des itérations dans les projets](/issues/trying-out-the-new-projects-experience/managing-iterations) ».

1. {% data reusables.projects.open-command-palette %} Commencez par entrer n’importe quelle partie de « Créer un champ ». Lorsque « Créer un champ » s’affiche dans la palette de commandes, sélectionnez-le.
2. Vous pouvez également cliquer sur {% octicon "plus" aria-label="the plus icon" %} dans l’en-tête de champ le plus à droite. Un menu déroulant avec les champs du projet s’affiche. Cliquez sur **Nouveau champ**.
3. Une fenêtre contextuelle s’affiche pour vous permettre d’entrer des informations sur le nouveau champ.
   ![Nouveau champ](/assets/images/help/issues/projects_new_field.png)
4. Dans la zone de texte , entrez un nom pour le nouveau champ.
5. Sélectionnez le menu déroulant, puis cliquez sur le type souhaité.
6. Si vous avez spécifié **Sélection unique** comme type, entrez les options.
7. Si vous avez spécifié **Itération** comme type, entrez la date de début de la première itération ainsi que sa durée. Trois itérations sont automatiquement créées et vous pouvez ajouter des itérations supplémentaires sur la page des paramètres du projet.

Vous pouvez également modifier vos champs personnalisés.

{% data reusables.projects.project-settings %}
1. Sous **Champs**, sélectionnez le champ que vous souhaitez modifier.
1. Vous pouvez ajouter, supprimer ou réorganiser les options des champs à sélection unique.
1. Pour les champs d’itération, vous pouvez ajouter ou supprimer des itérations, modifier les noms des itérations et modifier la date de début de l’itération ainsi que sa durée.

   Pour plus d’informations sur la modification des champs d’itération, consultez « [Gestion des itérations dans les projets](/issues/trying-out-the-new-projects-experience/managing-iterations) ».

## <a name="customizing-your-views"></a>Personnalisation de vos vues

Vous pouvez afficher votre projet sous forme de table ou de tableau, regrouper des éléments par champ, filtrer les éléments, etc. Pour plus d’informations, consultez « [Personnalisation des vues de votre projet (bêta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views) ».

## <a name="configuring-built-in-automation"></a>Configuration de l’automatisation intégrée

{% data reusables.projects.about-workflows %}

Vous pouvez activer ou désactiver les workflows intégrés pour votre projet.

{% data reusables.projects.enable-basic-workflow %}

## <a name="adding-your-project-to-a-repository"></a>Ajout de votre projet à un référentiel

Vous pouvez répertorier les projets pertinents dans un référentiel. Vous pouvez uniquement répertorier les projets appartenant au même utilisateur ou à l’organisation propriétaire du référentiel.

Pour que les membres d’un référentiel puissent voir un projet répertorié dans ce référentiel, ils doivent avoir une visibilité sur le projet. Pour plus d’informations, consultez « [Gestion de la visibilité de vos projets (bêta)](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects) » et « [Gestion de l’accès aux projets (bêta)](/issues/trying-out-the-new-projects-experience/managing-access-to-projects) ».

1. Sur {% data variables.product.prodname_dotcom %}, accédez à la page principale de votre référentiel.
1. Cliquez sur {% octicon "table" aria-label="the project icon" %} **Projets**.
1. Cliquez sur **Projets (bêta)** dans la barre latérale.
1. Cliquez sur **Ajouter un projet**.
1. Dans la barre de recherche qui s’affiche, recherchez les projets appartenant au même utilisateur ou à l’organisation propriétaire du référentiel.
1. Cliquez sur un projet pour le répertorier dans votre référentiel.
