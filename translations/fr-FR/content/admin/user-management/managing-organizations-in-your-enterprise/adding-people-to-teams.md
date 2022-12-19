---
title: Ajout de membres à des équipes
redirect_from:
  - /enterprise/admin/articles/adding-teams
  - /enterprise/admin/articles/adding-or-inviting-people-to-teams
  - /enterprise/admin/guides/user-management/adding-or-inviting-people-to-teams
  - /enterprise/admin/user-management/adding-people-to-teams
  - /admin/user-management/adding-people-to-teams
intro: 'Après avoir créé une équipe, les administrateurs de l’organisation peuvent ajouter des utilisateurs de {% data variables.product.product_location %} à l’équipe et définir les dépôts auxquels ils ont accès.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
ms.openlocfilehash: 1246641db416630d0faed75821078618a4399eb8
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884252'
---
Chaque équipe dispose de ses propres [autorisations d’accès aux dépôts appartenant à votre organisation](/articles/permission-levels-for-an-organization), définies individuellement.

- Les membres ayant le rôle propriétaire peuvent ajouter des membres d’organisation existants à toutes les équipes ou en supprimer.
- Les membres d’équipes qui accordent des autorisations d’administrateur peuvent modifier uniquement l’appartenance aux équipes et les dépôts pour cette équipe.

## Configuration d’une équipe

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.invite_to_team %} {% data reusables.organizations.review-team-repository-access %}

{% ifversion ghes %}

## Mappage d’équipes à des groupes LDAP (pour les instances utilisant la synchronisation LDAP pour l’authentification utilisateur)

{% data reusables.enterprise_management_console.badge_indicator %}

Pour ajouter un nouveau membre à une équipe synchronisée avec un groupe LDAP, ajoutez l’utilisateur comme membre du groupe LDAP ou contactez votre administrateur LDAP.

{% endif %}
