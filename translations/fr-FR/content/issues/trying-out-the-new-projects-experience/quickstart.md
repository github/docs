---
title: Démarrage rapide pour les projets (bêta)
intro: Expérimentez la vitesse, la flexibilité et la personnalisation des projets (bêta) en créant un projet dans ce guide interactif.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
- Projects
ms.openlocfilehash: 3baf341d38b59e20e6fe1e677e338d6bec1d57da
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145128650"
---
{% data reusables.projects.projects-beta %}

## <a name="introduction"></a>Introduction

Ce guide montre comment utiliser des projets (bêta) pour planifier et suivre le travail. Dans ce guide, vous allez créer un projet et ajouter un champ personnalisé pour suivre les priorités de vos tâches. Vous apprendrez également à créer des vues enregistrées qui vous aideront à communiquer les priorités et la progression avec vos collaborateurs.

## <a name="prerequisites"></a>Prérequis

Vous pouvez créer un projet d’organisation ou un projet d’utilisateur. Pour créer un projet d’organisation, vous avez besoin d’une organisation {% data variables.product.prodname_dotcom %}. Pour plus d’informations sur la création d’une organisation, consultez « [Création d’une organisation à partir de zéro](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) ».

Dans ce guide, vous allez ajouter à votre nouveau projet des problèmes existants issus de dépôts vous appartenant (projets d’utilisateur) ou appartenant à votre organisation (projets d’organisation). Pour plus d’informations sur la création de problèmes, consultez « [Création d’un problème](/issues/tracking-your-work-with-issues/creating-an-issue) ».

## <a name="creating-a-project"></a>Création d’un projet

Tout d’abord, créez un projet d’organisation ou un projet d’utilisateur.

### <a name="creating-an-organization-project"></a>Création d’un projet d’organisation

{% data reusables.projects.create-project %}

### <a name="creating-a-user-project"></a>Création d’un projet d’utilisateur

{% data reusables.projects.create-user-project %}

## <a name="setting-your-project-description-and-readme"></a>Définition de la description de votre projet et du fichier README

{% data reusables.projects.project-description %}

## <a name="adding-issues-to-your-project"></a>Ajout de problèmes à votre projet

Ensuite, ajoutez quelques problèmes à votre projet.

Quand votre nouveau projet s’initialise, vous êtes invité à ajouter des éléments à ce projet. Si vous perdez cette vue ou souhaitez ajouter d’autres problèmes ultérieurement, placez votre curseur dans la ligne inférieure du projet, à côté de l’icône {% octicon "plus" aria-label="plus icon" %}.

1. Tapez `#`.
2. Sélectionnez le dépôt où se trouve votre problème. Pour affiner les options, vous pouvez commencer à taper une partie du nom du dépôt.
3. Sélectionnez votre problème. Pour affiner les options, vous pouvez commencer à taper une partie du titre du problème.

Répétez les étapes ci-dessus pour ajouter plusieurs problèmes à votre projet.

Pour plus d’informations sur les autres façons d’ajouter des problèmes à votre projet ou sur les autres éléments que vous pouvez ajouter à votre projet, consultez « [Création d’un projet](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-items-to-your-project) ».

## <a name="adding-draft-issues-to-your-project"></a>Ajout de brouillons de problèmes à votre projet

Ensuite, ajoutez un brouillon de problème à votre projet.

1. Placez votre curseur dans la ligne inférieure du projet, à côté de l’icône {% octicon "plus" aria-label="plus icon" %}.
1. Tapez votre idée, puis appuyez sur **Entrée**.
1. Cliquez sur le titre du brouillon de problème. Dans la zone d’entrée Markdown qui s’affiche, entrez quelques informations supplémentaires sur votre idée, puis cliquez sur **Enregistrer**.

## <a name="creating-a-field-to-track-priority"></a>Création d’un champ pour suivre la priorité

À présent, créez un champ personnalisé appelé `Priority` pour contenir les valeurs : `High`, `Medium`ou `Low`.

1. {% data reusables.projects.open-command-palette %}
2. Commencez à taper n’importe quelle partie de « Créer un champ ».
3. Sélectionnez **Créer un champ**.
4. Dans la fenêtre contextuelle résultante, entrez `Priority` dans la zone de texte.
5. Dans la liste déroulante, sélectionnez **Sélection unique**.
6. Ajoutez des options pour `High`, `Medium`et `Low`. Vous pouvez également inclure des emojis dans vos options.
   ![Exemple de nouveau champ de sélection unique](/assets/images/help/projects/new-single-select-field.png)
7. Cliquez sur **Enregistrer**.

Spécifiez une priorité pour tous les problèmes de votre projet.

![Exemples de priorités](/assets/images/help/projects/priority_example.png)

## <a name="grouping-issues-by-priority"></a>Regroupement de problèmes par priorité

Ensuite, regroupez tous les éléments de votre projet par priorité pour identifier plus facilement les éléments prioritaires.

1. {% data reusables.projects.open-command-palette %}
2. Commencez à taper n’importe quelle partie de « Regrouper par ».
3. Sélectionnez **Regrouper par : Priorité**.

À présent, déplacez les problèmes entre les groupes pour changer leur priorité.

1. Choisissez un problème.
2. Faites glisser-déposer le problème dans un groupe avec une priorité différente. Lorsque vous procédez ainsi, la priorité du problème est remplacée par celle de son nouveau groupe.

![Déplacer un problème entre des groupes](/assets/images/help/projects/move_between_group.gif)

## <a name="saving-the-priority-view"></a>Enregistrement de la vue des priorités

Si vous avez regroupé vos problèmes par priorité à l’étape précédente, un indicateur apparaît dans votre projet pour montrer que la vue a été modifiée. Enregistrez ces modifications pour que vos collaborateurs voient également les tâches regroupées par priorité.

1. Sélectionnez le menu déroulant à côté du nom de la vue.
2. Cliquez sur **Save changes**.

Pour indiquer l’objectif de la vue, donnez-lui un nom descriptif.

1. Placez votre curseur dans le nom de la vue actuelle (**Vue 1**).
2. Remplacez le texte existant par le nouveau nom (`Priorities`).

Vous pouvez partager l’URL avec votre équipe pour que tout le monde ait connaissance des priorités du projet.

Quand une vue est enregistrée, toute personne qui ouvre le projet voit la vue enregistrée. Ici, vous avez effectuez un regroupement par priorité, mais vous pouvez également ajouter d’autres modificateurs tels qu’un tri, un filtre ou une disposition. Ensuite, vous allez créer une vue avec la disposition modifiée.

## <a name="adding-a-board-layout"></a>Ajout d’une disposition de tableau

Pour voir la progression des problèmes de votre projet, vous pouvez passer à la disposition de tableau.

La disposition de tableau étant basée sur le champ d’état, spécifiez un état pour chaque problème de votre projet.

![Exemple d’état](/assets/images/help/projects/status_example.png)

Ensuite, créez une vue.

1. Cliquez sur {% octicon "plus" aria-label="the plus icon" %} **Nouvelle vue** à côté de la vue la plus à droite.

Ensuite, passez à la disposition de tableau.

1. {% data reusables.projects.open-command-palette %}
2. Commencez à taper n’importe quelle partie de « Changer de disposition : Tableau ».
3. Sélectionnez **Changer de disposition : Tableau**.
   ![Exemples de priorités](/assets/images/help/projects/example_board.png)

Quand vous changez la disposition, un indicateur apparaît dans votre projet pour montrer que la vue a été modifiée. Enregistrez cette vue pour que vous et vos collaborateurs puissiez y accéder facilement à l’avenir.

1. Sélectionnez le menu déroulant à côté du nom de la vue.
2. Cliquez sur **Save changes**.

Pour indiquer l’objectif de la vue, donnez-lui un nom descriptif.

1. Placez votre curseur dans le nom de la vue actuelle (**Vue 2**).
2. Remplacez le texte existant par le nouveau nom (`Progress`).

![Exemples de priorités](/assets/images/help/projects/project-view-switch.gif)

## <a name="configure-built-in-automation"></a>Configurer l’automatisation intégrée

Enfin, ajoutez un workflow intégré pour définir l’état sur **À faire** quand un élément est ajouté à votre projet.

1. Dans votre projet, cliquez sur {% octicon "workflow" aria-label="the workflow icon" %}.
2. Sous **Workflows par défaut**, cliquez sur **Élément ajouté au projet**.
3. À côté de **Quand**, vérifiez que `issues` et `pull requests` sont sélectionnés.
4. À côté de **Définir**, sélectionnez **État : À faire**.
5. Cliquez sur le bouton bascule **Désactivé** pour activer le workflow.

## <a name="next-steps"></a>Étapes suivantes

Vous pouvez utiliser des projets à des fins très diverses. Par exemple :

- Suivre le travail d’une version
- Planifier un sprint
- Hiérarchiser un backlog

Voici quelques ressources utiles pour effectuer vos étapes suivantes avec {% data variables.product.prodname_github_issues %} :

- Pour fournir des commentaires sur l’expérience des projets (bêta), accédez au [dépôt de commentaires GitHub](https://github.com/github/feedback/discussions/categories/issues-feedback).
- Pour en savoir plus sur la façon dont les projets peuvent vous aider dans la planification et le suivi, consultez « [À propos des projets](/issues/trying-out-the-new-projects-experience/about-projects) ».
- Pour en savoir plus sur les champs et les éléments que vous pouvez ajouter à votre projet, consultez « [Création d’un projet](/issues/trying-out-the-new-projects-experience/creating-a-project) ».
- Pour découvrir d’autres façons d’afficher les informations dont vous avez besoin, consultez « [Personnalisation des vues de votre projet](/issues/trying-out-the-new-projects-experience/customizing-your-project-views) ».
