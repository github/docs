---
title: Demande d’ajout ou de modification d’une équipe parente
intro: 'Si vous disposez d’autorisations de maintenance dans une équipe, vous pouvez demander d’imbriquer votre équipe sous une équipe parente dans la hiérarchie de votre organisation.'
redirect_from:
  - /articles/requesting-to-add-or-change-a-parent-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-or-change-a-parent-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add or change parent team
ms.openlocfilehash: d277f8177e6a09e308792b1f7c01832851aec878
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880467'
---
Lorsque vous demandez d’ajouter ou de modifier le parent de votre équipe, une demande est envoyée aux responsables de maintenance de l’équipe parente. Quand un responsable de maintenance de la nouvelle équipe parente approuve votre demande, votre équipe est imbriquée en tant qu’équipe enfant sous l’équipe parente dans la hiérarchie de votre organisation.

Si vous êtes propriétaire d’une organisation ou disposez d’autorisations de responsable de maintenance dans l’équipe enfant et l’équipe parente, vous pouvez ajouter l’équipe parente sans demander d’approbation, ou modifier le parent de votre équipe à partir de la page des paramètres de votre équipe. Pour plus d’informations, consultez « [Déplacement d’une équipe dans la hiérarchie de votre organisation](/articles/moving-a-team-in-your-organization-s-hierarchy) ».

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. Dans la liste des équipes, cliquez sur le nom de l’équipe que vous souhaitez imbriquer sous une équipe parente.
  ![Liste des équipes de l’organisation](/assets/images/help/teams/click-team-name.png) {% data reusables.organizations.team_settings %}
6. Sous « Équipe parente », utilisez le menu déroulant « Sélectionner l’équipe parente », puis cliquez sur le nom de la nouvelle équipe parente.
  ![Menu déroulant répertoriant les équipes de l’organisation](/assets/images/help/teams/choose-parent-team.png)
7. Cliquez sur **Save changes**.
{% data reusables.repositories.changed-repository-access-permissions %}
9. Cliquez sur **Confirmer les modifications** pour envoyer une demande d’ajout ou de modification de l’équipe parente de votre équipe.
  ![Zone modale avec des informations sur les modifications apportées aux autorisations d’accès au dépôt](/assets/images/help/teams/confirm-new-parent-team.png)

## Pour aller plus loin

- « [À propos des équipes](/articles/about-teams) »
- « [Déplacement d’une équipe dans la hiérarchie de votre organisation](/articles/moving-a-team-in-your-organization-s-hierarchy) »
- « [Demande d’ajout d’une équipe enfant](/articles/requesting-to-add-a-child-team) »
