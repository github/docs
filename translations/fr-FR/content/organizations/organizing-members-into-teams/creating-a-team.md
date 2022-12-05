---
title: Création d’une équipe
intro: Vous pouvez créer des équipes indépendantes ou imbriquées afin de gérer les autorisations de dépôt et les mentions pour les groupes de personnes.
redirect_from:
  - /articles/creating-a-team-early-access-program
  - /articles/creating-a-team
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: c4ffe03e1108caae9bfed1171b08d8a046caeb76
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109384'
---
Seuls les propriétaires et les responsables de maintenance d’une équipe parente peuvent créer une équipe enfant sous un parent. Les propriétaires peuvent également restreindre les autorisations de création pour toutes les équipes d’une organisation. Pour plus d’informations, consultez « [Définition des autorisations de création d’équipe dans votre organisation](/articles/setting-team-creation-permissions-in-your-organization) ».

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %} {% data reusables.organizations.create-team-choose-parent %} {% ifversion ghec %}
1. Si vous le souhaitez, si votre organisation ou compte d’entreprise utilise la synchronisation d’équipe ou que votre entreprise utilise {% data variables.product.prodname_emus %}, connectez un groupe de fournisseurs d’identité à votre équipe.
    * Si votre entreprise utilise {% data variables.product.prodname_emus %}, utilisez le menu déroulant « Groupes de fournisseurs d’identité » et sélectionnez un groupe de fournisseurs d’identité unique pour vous connecter à la nouvelle équipe. Pour plus d’informations, consultez « [Gestion des appartenances aux équipes avec les groupes d’un fournisseur d’identité](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups) ».
    * Si votre organisation ou compte d’entreprise utilise la synchronisation d’équipe, utilisez le menu déroulant « Groupes de fournisseurs d’identité » et sélectionnez jusqu’à cinq groupes de fournisseurs d’identité pour vous connecter à la nouvelle équipe. Pour plus d’informations, consultez « [Synchronisation d’une équipe avec un groupe de fournisseurs d’identité](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group) ».
    ![Menu déroulant pour choisir des groupes de fournisseur d’identité](/assets/images/help/teams/choose-an-idp-group.png) {% endif %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create_team %}
1. Si vous le souhaitez, [donnez à l’équipe l’accès aux référentiels de l’organisation](/articles/managing-team-access-to-an-organization-repository).

## Pour aller plus loin

- « [À propos des équipes](/articles/about-teams) »
- « [Modification de la visibilité de l’équipe](/articles/changing-team-visibility) »
- « [Déplacement d’une équipe dans la hiérarchie de votre organisation](/articles/moving-a-team-in-your-organization-s-hierarchy) »
