---
title: 'À propos des {% data variables.product.prodname_projects_v2 %}'
intro: '{% data variables.product.prodname_projects_v2 %} est un outil flexible et adaptable qui permet de planifier et de suivre le travail sur {% data variables.product.company_short %}.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/about-projects
type: overview
topics:
  - Projects
ms.openlocfilehash: 3190379652fe1c95b8ea6ec7f864c44b72d9a7f7
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180760'
---
## À propos des {% data variables.product.prodname_projects_v2 %}

Un projet est une feuille de calcul adaptable qui intègre vos problèmes et demandes de tirage sur {% data variables.product.company_short %} pour vous aider à planifier et à suivre efficacement votre travail. Vous pouvez créer et personnaliser plusieurs vues en filtrant, en triant, en regroupant vos problèmes et demandes de tirage et en ajoutant des champs personnalisés pour suivre les métadonnées spécifiques à votre équipe et visualiser le travail avec des graphiques configurables. Au lieu d’appliquer une méthodologie spécifique, un projet fournit des fonctionnalités flexibles que vous pouvez personnaliser en fonction des besoins et des processus de votre équipe.

### Actualisation

Vos projets reposent sur les problèmes et des demandes de tirage que vous ajoutez, créant des références directes entre votre projet et votre travail. Les informations sont synchronisées automatiquement avec votre projet lorsque vous apportez des modifications, mettant à jour vos vues et vos graphiques. Cette intégration fonctionne dans les deux sens. Ainsi, quand vous modifiez des informations sur une demande de tirage ou un problème dans votre projet, la demande de tirage ou le problème reflète ces informations. Par exemple, changez un destinataire dans votre projet et vous verrez apparaître ce changement dans votre problème. Vous pouvez aller encore plus loin dans cette intégration, regrouper votre projet par destinataire et apporter des modifications à l’affectation de problèmes en faisant glisser les problèmes dans les différents groupes.

### Ajout de métadonnées à vos éléments

Vous pouvez utiliser des champs personnalisés pour ajouter des métadonnées à vos problèmes, demandes de tirage (pull requests) et brouillons de problèmes et créer une vue plus riche des attributs de vos éléments. Vous n’êtes pas limité aux métadonnées intégrées (destinataire, jalon, étiquettes, etc.) qui existent actuellement pour les problèmes et les demandes de tirage. Par exemple, vous pouvez ajouter les métadonnées suivantes en tant que champs personnalisés :

- Champ de date pour le suivi des dates d’expédition cibles.
- Champ numérique pour le suivi de la complexité d’une tâche.
- Champ de sélection unique pour le suivi du niveau de priorité Bas, Moyen ou Élevé d’une tâche.
- Champ de texte permettant d’ajouter une note rapide.
- Champ d’itération pour planifier le travail hebdomadaire, en incluant des pauses.

{% ifversion projects-v2-tasklists %}

### Exploration des relations entre les problèmes

{% data reusables.projects.tasklists-release-stage %}

Vous pouvez utiliser des listes de tâches pour créer des hiérarchies de problèmes, en divisant vos problèmes en sous-tâches et en créant des relations entre vos problèmes. Pour plus d’informations, consultez « [À propos des listes de tâches](/issues/tracking-your-work-with-issues/about-tasklists) ».

Ces relations sont affichées sur le problème, ainsi que les champs Suivi par et Suivis dans vos projets. Vous pouvez filtrer selon les problèmes suivis par un autre problème. Vous pouvez aussi regrouper vos vues de tableau par le champ Suivi par pour voir tous les problèmes parents avec une liste de leurs sous-tâches.

{% endif %}

### Affichage de votre projet sous différents angles

Répondez rapidement à vos questions les plus pressantes en personnalisant la vue de votre projet pour vous donner les informations dont vous avez besoin. Vous pouvez enregistrer ces vues, ce qui vous permet d’y revenir rapidement si nécessaire et de les mettre à disposition de votre équipe. Les vues vous permettent non seulement d’affiner les éléments listés, mais également d’offrir deux options de disposition différentes.

Vous pouvez afficher votre projet sous la forme d’une table à haute densité :

![Table d’un projet](/assets/images/help/issues/projects_table.png)

Ou sous la forme d’un tableau :

![Tableau d’un projet](/assets/images/help/issues/projects_board.png)

Pour vous aider à focaliser votre attention sur des aspects spécifiques de votre projet, vous pouvez regrouper, trier ou filtrer des éléments :

![Vue du projet](/assets/images/help/issues/project_view.png)

Pour plus d’informations, consultez « [Personnalisation d’une vue](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view) ».
