---
title: Demande d’ajout d’une équipe enfant
intro: 'Si vous disposez d’autorisations de maintenance dans une équipe, vous pouvez demander d’imbriquer une équipe existante sous votre équipe dans la hiérarchie de votre organisation.'
redirect_from:
  - /articles/requesting-to-add-a-child-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-a-child-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add a child team
ms.openlocfilehash: e8012645bb4cdedc2a3aa8f7196adc18253a2600
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147877112'
---
Quand vous demandez à ajouter une équipe en tant qu’enfant, une demande est envoyée aux gestionnaires de l’équipe enfant. Une fois qu’un gestionnaire de l’équipe enfant approuve votre demande, l’équipe enfant est imbriquée sous l’équipe parente dans la hiérarchie de votre organisation.

Si vous êtes propriétaire d’une organisation ou que disposez d’autorisations de gestionnaire à la fois dans l’équipe enfant et dans l’équipe parente, vous pouvez ajouter l’équipe enfant sans demander d’approbation ou changer le parent de l’équipe enfant dans la page des paramètres de l’équipe enfant. Pour plus d’informations, consultez « [Déplacement d’une équipe dans la hiérarchie de votre organisation](/articles/moving-a-team-in-your-organization-s-hierarchy) ».

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. Dans la liste des équipes, cliquez sur le nom de l’équipe où vous voulez ajouter l’équipe enfant.
  ![Liste des équipes de l’organisation](/assets/images/help/teams/click-team-name.png)
5. En haut de la page des équipes, cliquez sur {% octicon "people" aria-label="The people icon" %} **Équipes**.
  ![Onglet Équipes sur une page d’équipe](/assets/images/help/teams/team-teams-tab.png)
6. Cliquez sur **Ajouter une équipe**.
  ![Bouton Ajouter une équipe sur une page d’équipe](/assets/images/help/teams/add-a-team.png)
7. Tapez le nom de l’équipe que vous souhaitez ajouter en tant qu’équipe enfant, puis sélectionnez-le dans la liste déroulante.
  ![Zone de texte où entrer un nom et menu déroulant pour sélectionner le nom de l’équipe enfant ](/assets/images/help/teams/type-child-team-name.png){% data reusables.repositories.changed-repository-access-permissions %}
9. Cliquez sur **Confirmer les modifications** pour envoyer une demande d’ajout de l’équipe enfant.
  ![Zone modale avec des informations sur les modifications apportées aux autorisations d’accès au dépôt](/assets/images/help/teams/confirm-new-parent-team.png)

## Pour aller plus loin

- « [À propos des équipes](/articles/about-teams) »
- « [Déplacement d’une équipe dans la hiérarchie de votre organisation](/articles/moving-a-team-in-your-organization-s-hierarchy) »
- « [Demande d’ajout ou de modification d’une équipe parente](/articles/requesting-to-add-or-change-a-parent-team) »
