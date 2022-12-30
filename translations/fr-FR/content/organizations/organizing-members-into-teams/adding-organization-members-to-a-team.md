---
title: Ajout de membres d’une organisation à une équipe
intro: 'Les personnes disposant d’autorisations de propriétaire ou de gestionnaire d’équipe peuvent ajouter des membres d’organisation à des équipes. Les personnes disposant d’autorisations de propriétaire peuvent également {% ifversion fpt or ghec %}inviter des non-membres à se joindre{% else %}ajouter des non-membres{% endif %} à une équipe et à l’organisation.'
redirect_from:
  - /articles/adding-organization-members-to-a-team-early-access-program
  - /articles/adding-organization-members-to-a-team
  - /github/setting-up-and-managing-organizations-and-teams/adding-organization-members-to-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add members to a team
ms.openlocfilehash: 0a0dcd6b925c2209ae583197963db84ba881c7ff
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109387'
---
{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_members_tab %}
6. Au-dessus de la liste des membres de l’équipe, cliquez sur **Ajouter un membre**.
![Bouton Ajouter un membre](/assets/images/help/teams/add-member-button.png) {% data reusables.organizations.invite_to_team %} {% data reusables.organizations.review-team-repository-access %}

{% ifversion fpt or ghec %}{% data reusables.organizations.cancel_org_invite %}{% endif %}

## Pour aller plus loin

- « [À propos des équipes](/articles/about-teams) »
- « [Gestion de l’accès de l’équipe à un référentiel de l’organisation](/articles/managing-team-access-to-an-organization-repository) »
