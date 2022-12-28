---
title: Création d’équipes
intro: 'Teams permet aux organisations de créer des groupes de membres et de contrôler l’accès aux référentiels. Les membres de l’équipe peuvent accorder des autorisations de lecture, d’écriture ou d’administrateur à des référentiels spécifiques.'
redirect_from:
  - /enterprise/admin/user-management/creating-teams
  - /admin/user-management/creating-teams
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
ms.openlocfilehash: 83db75485e7967941fdcd3ab651e638aa1eabb3f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332335'
---
Les équipes sont au cœur de nombreuses fonctionnalités de collaboration de {% data variables.product.prodname_dotcom %}. Les @mentions d’équipe, par exemple, permettent d’informer les parties concernées que vous avez besoin d’une entrée de leur part ou de leur attention. Pour plus d’informations, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) ».

Une équipe peut représenter un groupe dans votre entreprise ou inclure des personnes ayant certains intérêts ou un une certaine expertise. Par exemple, une équipe d’experts en accessibilité sur {% data variables.product.product_location %} peut inclure des personnes de différents services. Les équipes peuvent représenter des sujets fonctionnels qui complètent la hiérarchie par divisions d’une entreprise.

Les organisations peuvent créer plusieurs niveaux d’équipes imbriquées pour refléter la structure hiérarchique d’une entreprise ou d’un groupe. Pour plus d’informations, consultez « [À propos des équipes](/enterprise/user/articles/about-teams/#nested-teams) ».

## Création d’une équipe

En combinant judicieusement plusieurs équipes, vous disposez d’un moyen puissant de contrôler l’accès aux dépôts. Par exemple, si votre organisation autorise uniquement votre équipe d’ingénierie des mises en production à pousser (push) du code sur la branche par défaut d’un dépôt, vous pouvez accorder les autorisations d’**administrateur** sur les dépôts de votre organisation uniquement à cette équipe et accorder des autorisations de **lecture** à toutes les autres équipes.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create-team-choose-parent %} {% data reusables.organizations.create_team %}

{% ifversion ghes %}

## Création d’équipes avec la synchronisation LDAP activée

Les instances qui utilisent LDAP pour l’authentification utilisateur peuvent utiliser la synchronisation LDAP pour gérer les membres d’une équipe. La définition du **nom unique** du groupe dans le champ **Groupe LDAP** mappe une équipe à un groupe LDAP sur votre serveur LDAP. Si vous utilisez la synchronisation LDAP pour gérer les membres d’une équipe, vous ne pourrez pas gérer votre équipe dans {% data variables.product.product_location %}. L’équipe mappée synchronisera ses membres en arrière-plan et régulièrement selon l’intervalle configuré quand la synchronisation LDAP est activée. Pour plus d’informations, consultez « [Activation de la synchronisation LDAP](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) ».

Vous devez être administrateur de site et propriétaire d’une organisation pour créer une équipe avec la synchronisation LDAP activée.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Remarques :**
- La synchronisation LDAP gère uniquement la liste des membres de l’équipe. Vous devez gérer les dépôts et autorisations de l’équipe à partir de {% data variables.product.prodname_ghe_server %}.
- Si le mappage d’un groupe LDAP à un nom unique est supprimé, par exemple si le groupe LDAP est supprimé, tous les membres de l’équipe {% data variables.product.prodname_ghe_server %} sont supprimés. Pour corriger cela, mappez l’équipe à un nouveau nom unique, ajoutez de nouveau les membres d’équipe et [synchronisez manuellement le mappage](/enterprise/admin/authentication/using-ldap#manually-syncing-ldap-accounts).
- Quand la synchronisation LDAP est activée, si une personne est supprimée d’un dépôt, elle perd l’accès, mais ses duplications (fork) ne sont pas supprimées. Si la personne est ajoutée à une équipe ayant accès au dépôt d’origine de l’organisation dans un délai de trois mois, son accès aux duplications est automatiquement restauré à la prochaine synchronisation.

{% endwarning %}

1. Vérifiez que [la synchronisation LDAP est activée](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync).
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %}
6. Recherchez le nom unique d’un groupe LDAP auquel mapper l’équipe. Si vous ne connaissez pas le nom unique, tapez le nom du groupe LDAP. {% data variables.product.prodname_ghe_server %} recherchera les correspondances et effectuera l’autocomplétion correspondante.
![Mappage au nom unique du groupe LDAP](/assets/images/enterprise/orgs-and-teams/ldap-group-mapping.png) {% data reusables.organizations.team_description %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create-team-choose-parent %} {% data reusables.organizations.create_team %}

{% endif %}
