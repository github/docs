---
title: À propos des listes de tâches
intro: 'Vous pouvez utiliser des listes de tâches pour interrompre le travail d’un problème ou d’une demande de tirage (pull request) dans des tâches plus petites, puis suivre l’ensemble complet du travail jusqu’à la fin.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-task-lists
  - /articles/about-task-lists
  - /github/managing-your-work-on-github/about-task-lists
  - /issues/tracking-your-work-with-issues/creating-issues/about-task-lists
  - /issues/tracking-your-work-with-issues/about-task-lists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
ms.openlocfilehash: dcb8d7972e83d8d35ed2425d57e2950d64ef1352
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159636'
---
{% ifversion projects-v2-tasklists %} {% note %}

**Remarque :** Pour plus d’informations sur la nouvelle itération des listes de tâches, actuellement en version bêta privée, consultez « [À propos des listes de tâches](/issues/tracking-your-work-with-issues/about-tasklists) ».

{% endnote %} {% endif %}

## À propos des listes de tâches

Une liste de tâches est un ensemble de tâches qui s’affichent sur une ligne distincte avec une case à cocher cliquable. Vous pouvez sélectionner ou désélectionner les cases à cocher pour marquer les tâches comme terminées ou non terminées. 

Vous pouvez utiliser Markdown pour créer une liste de tâches dans n’importe quel commentaire sur {% data variables.product.product_name %}. {% ifversion fpt or ghec %}Si vous référencez un problème, une demande de tirage ou une discussion dans une liste de tâches, la référence se déploie pour en afficher le titre et l’état.{% endif %} 

{% ifversion not fpt or ghec %} Vous pouvez afficher les informations récapitulatives de la liste de tâches dans les listes de problèmes et de demandes de tirage, lorsque cette liste des tâches se trouve dans le commentaire initial.
{% else %}

## À propos des listes de tâches ayant trait à un problème

Si vous ajoutez une liste de tâches au corps d’un problème, cette liste dispose de plus de fonctionnalités.

- Pour vous aider à suivre le travail de votre équipe sur un problème, la progression de la liste des tâches correspondante apparaît à différents endroits sur {% data variables.product.product_name %}, comme la liste des problèmes d’un référentiel.
- Si une tâche fait référence à un autre problème et qu’une personne ferme ce problème, la case à cocher de cette tâche est automatiquement marquée comme terminée. 
- Si une tâche nécessite une discussion ou un suivi plus approfondi, vous pouvez la convertir en problème en la survolant et en cliquant sur {% octicon "issue-opened" aria-label="The issue opened icon" %} dans le coin supérieur droit de cette tâche. Pour ajouter plus de détails avant de créer le problème, vous pouvez utiliser des raccourcis clavier afin d’ouvrir le nouveau formulaire de problème. Pour plus d’informations, consultez « [Raccourcis clavier](/github/getting-started-with-github/using-github/keyboard-shortcuts#issues-and-pull-requests) ».
- Tous les problèmes référencés dans la liste de tâches indiquent qu’ils sont suivis dans le problème de référence.

![Liste de tâches affichée](/assets/images/help/writing/task-list-rendered.png)

{% endif %}

## Création de listes de tâches

{% data reusables.repositories.task-list-markdown %}

{% tip %}

**Conseil :** vous ne pouvez pas créer d’éléments de liste de tâches pour des problèmes fermés ou des problèmes associés à des demandes de tirage.

{% endtip %}

## Réorganisation des tâches

Vous pouvez réorganiser les éléments d’une liste de tâches en cliquant à gauche de la case à cocher d’une tâche, en faisant glisser cette tâche vers un nouvel emplacement et en la supprimant. Vous pouvez réorganiser les tâches de différentes listes dans le même commentaire, mais vous ne pouvez pas réorganiser les tâches entre différents commentaires.

{% ifversion fpt %} ![Liste de tâches réorganisées](/assets/images/help/writing/task-list-reordered.gif) {% else %} ![Liste de tâches réorganisées](/assets/images/enterprise/writing/task-lists-reorder.gif) {% endif %}

{% ifversion fpt %}

## Navigation dans les problèmes suivis

Tous les problèmes référencés dans une liste de tâches indiquent qu’ils sont suivis par le problème qui contient la liste des tâches. Pour accéder au problème de suivi depuis le problème suivi, cliquez sur le numéro du problème de suivi dans la section **Suivi dans** en regard de l’état du problème.

![Exemple de suivi](/assets/images/help/writing/task_list_tracked.png)

{% endif %}

## Pour aller plus loin

{% ifversion code-scanning-task-lists %}
* « [Suivi des alertes d’{% data variables.product.prodname_code_scanning %} dans les problèmes à l’aide des listes de tâches](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/tracking-code-scanning-alerts-in-issues-using-task-lists) »{% endif %}
