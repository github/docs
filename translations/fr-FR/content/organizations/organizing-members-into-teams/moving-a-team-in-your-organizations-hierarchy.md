---
title: Déplacement d’une équipe dans la hiérarchie de votre organisation
intro: 'Les responsables d’équipe et les propriétaires d’organisation peuvent imbriquer une équipe sous une équipe parente, ou bien changer ou supprimer le parent d’une équipe imbriquée.'
redirect_from:
  - /articles/changing-a-team-s-parent
  - /articles/moving-a-team-in-your-organization-s-hierarchy
  - /articles/moving-a-team-in-your-organizations-hierarchy
  - /github/setting-up-and-managing-organizations-and-teams/moving-a-team-in-your-organizations-hierarchy
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Move a team
ms.openlocfilehash: 205ab40d04d613c54b498b9712e5f199e1433558
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145109378'
---
Les propriétaires d’organisation peuvent modifier le parent de n’importe quelle équipe. Les membres de l’équipe de maintenance peuvent modifier le parent d’une équipe s’ils sont des membres de l’équipe enfant et de l’équipe parente. Les responsables de maintenance d’équipe sans autorisations de maintenance dans l’équipe enfant peuvent demander à ajouter une équipe parente ou enfant. Pour plus d’informations, consultez « [Demande d’ajout ou de modification d’une équipe parente](/articles/requesting-to-add-or-change-a-parent-team) » et « [Demande d’ajout d’une équipe enfant](/articles/requesting-to-add-a-child-team) ».

{% data reusables.organizations.child-team-inherits-permissions %}

{% tip %}

**Conseils :**
- Vous ne pouvez pas remplacer le parent d’une équipe par une équipe secrète. Pour plus d’informations, consultez « [À propos des équipes](/articles/about-teams) ».
- Vous ne pouvez pas imbriquer une équipe parente sous l’une de ses équipes enfants.

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. Dans la liste des équipes, cliquez sur le nom de l’équipe dont vous souhaitez modifier le parent.
  ![Liste des équipes de l’organisation](/assets/images/help/teams/click-team-name.png) {% data reusables.organizations.team_settings %}
6. Utilisez le menu déroulant pour choisir une équipe parente ou pour supprimer un parent existant, puis sélectionnez **Effacer la valeur sélectionnée**.
  ![Menu déroulant répertoriant les équipes de l’organisation](/assets/images/help/teams/choose-parent-team.png)
7. Cliquez sur **Update**.
{% data reusables.repositories.changed-repository-access-permissions %}
9. Cliquez sur **Confirmer la nouvelle équipe parente**.
  ![Zone modale avec des informations sur les modifications apportées aux autorisations d’accès au référentiel](/assets/images/help/teams/confirm-new-parent-team.png)

## Pour aller plus loin

- « [À propos des équipes](/articles/about-teams) »
