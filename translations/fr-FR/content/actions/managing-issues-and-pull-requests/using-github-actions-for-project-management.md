---
title: Utilisation de GitHub Actions pour la gestion de projet
intro: 'Vous pouvez utiliser {% data variables.product.prodname_actions %} pour automatiser un grand nombre de vos tâches de gestion de projet.'
redirect_from:
  - /actions/guides/using-github-actions-for-project-management
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Project management
shortTitle: Actions for project management
ms.openlocfilehash: 5f5d1cb222824bbb451ad603e35b4986384645e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145105018'
---
Vous pouvez utiliser {% data variables.product.prodname_actions %} pour automatiser vos tâches de gestion de projet en créant des workflows. Chaque workflow contient une série de tâches effectuées automatiquement chaque fois que le workflow s’exécute. Par exemple, vous pouvez créer un workflow qui s’exécute chaque fois qu’un problème est créé pour ajouter une étiquette, laisser un commentaire et déplacer le problème vers un tableau de projet.

## Quand les workflows s’exécutent-ils ?

Vous pouvez configurer vos workflows pour qu’ils s’exécutent selon une planification ou qu’ils soient déclenchés quand un événement se produit. Par exemple, vous pouvez définir votre workflow pour qu’il s’exécute quand quelqu’un crée un problème dans un dépôt.

De nombreux déclencheurs de workflow sont utiles pour automatiser la gestion de projet.

- Un problème est ouvert, affecté ou étiqueté.
- Un commentaire est ajouté à un problème.
- Une carte de projet est créée ou déplacée.
- Une heure planifiée.

Pour obtenir la liste complète des événements qui peuvent déclencher des workflows, consultez « [Événements déclencheurs de workflows](/actions/reference/events-that-trigger-workflows) ».

## Que peuvent faire des workflows ?

Les workflows peuvent effectuer de nombreuses tâches, telles qu’apporter des commentaires sur un problème, ajouter ou supprimer des étiquettes, déplacer des cartes sur les tableaux de projet et ouvrir des problèmes.

Vous pouvez en apprendre plus sur l’utilisation de {% data variables.product.prodname_actions %} pour la gestion de projet en suivant ces tutoriels, qui incluent des exemples de workflows que vous pouvez adapter pour répondre à vos besoins.

- « [Ajout d’étiquettes à des problèmes](/actions/guides/adding-labels-to-issues) »
- « [Suppression d’une étiquette quand une carte est ajoutée à une colonne de tableau de projet](/actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column) »
- « [Déplacement des problèmes affectés sur les tableaux de projet](/actions/guides/moving-assigned-issues-on-project-boards) »
- « [Commentaire sur un problème lors de l’ajout d’une étiquette](/actions/guides/commenting-on-an-issue-when-a-label-is-added) »
- « [Fermeture des problèmes inactifs](/actions/guides/closing-inactive-issues) »
- « [Planification de la création d’un problème](/actions/guides/scheduling-issue-creation) »
