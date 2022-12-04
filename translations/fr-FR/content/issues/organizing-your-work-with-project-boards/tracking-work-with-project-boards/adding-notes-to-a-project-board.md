---
title: 'Ajout de notes à un {% data variables.product.prodname_project_v1 %}'
intro: 'Vous pouvez ajouter des notes à un {% data variables.projects.projects_v1_board %} pour servir de rappels de tâches ou pour ajouter des informations relatives au {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-notes-to-a-project-board
  - /articles/adding-notes-to-a-project
  - /articles/adding-notes-to-a-project-board
  - /github/managing-your-work-on-github/adding-notes-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add notes to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: fc9df02b211056a08ed608a6c98b9d2f0b78c5b7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108772'
---
{% data reusables.projects.project_boards_old %}

{% tip %}

**Conseils :**
- Vous pouvez mettre en forme votre note à l’aide de la syntaxe Markdown. Par exemple, vous pouvez utiliser des titres, des liens, des listes de tâches ou des emojis. Pour plus d’informations, consultez « [Syntaxe de base pour l’écriture et la mise en forme ](/articles/basic-writing-and-formatting-syntax) ».
- Vous pouvez utiliser un glisser-déposer ou des raccourcis clavier pour réorganiser les notes et les déplacer d’une colonne à l’autre. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
- Votre {% data variables.projects.projects_v1_board %} doit avoir au moins une colonne pour que vous puissiez ajouter des notes. Pour plus d’informations, consultez « [Création d’un tableau de projet](/articles/creating-a-project-board) ».

{% endtip %}

Lorsque vous ajoutez à une note l’URL d’un problème, d’une demande de tirage ou d’un autre {% data variables.projects.projects_v1_board %}, vous voyez un aperçu dans une carte récapitulative située sous votre texte.

![Cartes de tableau de projet montrant un aperçu d’un problème et d’un autre tableau de projet](/assets/images/help/projects/note-with-summary-card.png)

## Ajout de notes à un {% data variables.projects.projects_v1_board %}

1. Accédez au {% data variables.projects.projects_v1_board %} où vous souhaitez ajouter des notes.
2. Dans la colonne à laquelle vous souhaitez ajouter une note, cliquez sur {% octicon "plus" aria-label="The plus icon" %}.
![Icône de signe plus dans l’en-tête de colonne](/assets/images/help/projects/add-note-button.png)
3. Tapez votre note, puis cliquez sur **Ajouter**.
![Champ pour taper une note et bouton Ajouter une carte](/assets/images/help/projects/create-and-add-note-button.png)

  {% tip %}

  **Conseil :** Vous pouvez référencer un problème ou une demande de tirage dans votre note en tapant son URL dans la carte.

  {% endtip %}

## Conversion d’une note en problème

Si vous avez créé une note et que vous constatez qu’elle ne suffit pas à vos besoins, vous pouvez la convertir en problème.

Lorsque vous convertissez une note en problème, le problème est automatiquement créé à partir du contenu de la note. La première ligne de la note sera le titre du problème et tout contenu supplémentaire de la note sera ajouté à la description du problème.

{% tip %}

**Conseil :** Vous pouvez ajouter du contenu dans le corps de votre note pour mentionner (@mention) une personne, établir une liaison vers un autre problème ou une autre demande de tirage, et ajouter des emojis. Ces fonctionnalités Flavored Markdown {% data variables.product.prodname_dotcom %} ne sont pas prises en charge dans les notes de {% data variables.projects.projects_v1_board %}, mais une fois que votre note est convertie en problème, ces fonctionnalités s’affichent correctement. Pour plus d’informations sur l’utilisation de ces fonctionnalités, consultez « [À propos de l’écriture et de la mise en forme sur {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github) ».

{% endtip %}

1. Accédez à la note que vous souhaitez convertir en problème.
{% data reusables.project-management.project-note-more-options %}
3. Cliquez sur **Convertir en problème**.
  ![Bouton Convertir en problème](/assets/images/help/projects/convert-to-issue.png)
4. Si la carte se trouve dans un {% data variables.projects.projects_v1_board %} à l’échelle de l’organisation, dans le menu déroulant, choisissez le dépôt auquel vous souhaitez ajouter le problème.
  ![Menu déroulant listant les dépôts dans lesquels vous pouvez créer le problème](/assets/images/help/projects/convert-note-choose-repository.png)
5. Si vous le souhaitez, vous pouvez modifier le titre prérempli du problème, puis taper un corps pour le problème.
  ![Champs pour le titre et le corps du problème](/assets/images/help/projects/convert-note-issue-title-body.png)
6. Cliquez sur **Convertir en problème**.
7. La note est automatiquement convertie en problème. Dans le {% data variables.projects.projects_v1_board %}, la nouvelle carte de problème se trouve au même emplacement que la note précédente.

## Modification et suppression d’une note

1. Accédez à la note que vous souhaitez modifier ou supprimer.
{% data reusables.project-management.project-note-more-options %}
3. Pour modifier le contenu de la note, cliquez sur **Modifier la note**.
  ![Bouton Modifier la note](/assets/images/help/projects/edit-note.png)
4. Pour supprimer le contenu des notes, cliquez sur **Supprimer une note**.
  ![Bouton Supprimer la note](/assets/images/help/projects/delete-note.png)

## Pour aller plus loin

- « [À propos des {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards) »
- « [Création d’un {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board) »
- « [Modification d’un {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board) »
- « [Ajout de problèmes et de demandes de tirage à un {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board) »
