---
title: Restauration d’une organisation supprimée
intro: 'Vous pouvez restaurer partiellement une organisation qui a été supprimée précédemment sur {% data variables.product.product_location %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Restore organization
permissions: 'Site administers can restore an organization on {% data variables.product.product_name %}.'
ms.openlocfilehash: 1963b1e55a9c8047c19bafd087162caa8d5085f2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063753'
---
## À propos de la restauration d’organisation

Vous pouvez utiliser le tableau de bord d’administrateur de site pour restaurer une organisation précédemment supprimée sur {% data variables.product.product_location %} tant que les index Elasticsearch du journal d’audit contiennent les données de l’événement `org.delete`.

Quand vous restaurez une organisation, celle-ci ne retrouve par immédiatement le même état qu’avant sa suppression. Vous devez restaurer manuellement tous les dépôts qui lui appartenaient. Pour plus d’informations, consultez « [Restauration d’un dépôt supprimé](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository) ».

Vous pouvez également utiliser le journal d’audit pour ajouter de nouveau des équipes et des membres de l’organisation manuellement. Pour plus d’informations, consultez « [Restauration de membres et d’équipes](#restoring-members-and-teams) ».

## Restauration d’une organisation

{% data reusables.enterprise_site_admin_settings.access-settings %}
1. Sous « Rechercher des utilisateurs, des organisations, des entreprises, des équipes, des dépôts, des Gists et des applications », recherchez l’organisation.

  ![Capture d’écran du champ de recherche et du bouton Rechercher](/assets/images/enterprise/stafftools/search-field.png)

1. Sous « Comptes supprimés », à droite de l’organisation que vous souhaitez restaurer, sélectionnez le menu déroulant {% octicon "kebab-horizontal" aria-label="The edit icon" %}, puis cliquez sur **Recréer**.

   ![Capture d’écran du menu déroulant pour une organisation supprimée](/assets/images/enterprise/stafftools/recreate-organization.png)

## Restauration de membres et d’équipes

Vous pouvez utiliser le journal d’audit pour trouver la liste des membres et équipes précédents de l’organisation, puis les recréer manuellement. Pour plus d’informations sur l’utilisation du journal d’audit, consultez « [Auditer tous les utilisateurs de votre entreprise](/admin/user-management/managing-users-in-your-enterprise/auditing-users-across-your-enterprise) ».

Dans toutes les expressions de recherche ci-dessous, remplacez ORGANIZATION par le nom de l’organisation et TEAM par le nom de l’équipe.

### Restauration des membres d’une organisation

1. Pour rechercher tous les utilisateurs qui ont été ajoutés à l’organisation ou qui en ont été supprimés, recherchez `action:org.add_member org:ORGANIZATION` et `action:org.remove_member org:ORGANIZATION` dans le journal d’audit.
1. Ajoutez manuellement à l’organisation chaque utilisateur qui doit toujours en être membre. Pour plus d’informations, consultez « [Ajout de personnes à votre organisation](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization) ».

### Restauration d’équipes

1. Pour trouver chaque nom d’équipe, recherchez `action:team.create org:ORGANIZATION` dans le journal d’audit.
1. Recréez manuellement l’équipe. Pour plus d’informations, consultez « [Création d’une équipe](/organizations/organizing-members-into-teams/creating-a-team) ».
1. Pour rechercher les membres qui ont été ajoutés à chaque équipe, recherchez `action:team.add_member team:"ORGANIZATION/TEAM"`.
1. Ajoutez de nouveau les membres d’équipe manuellement. Pour plus d’informations, consultez « [Ajout de membres d’une organisation à une équipe](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team) ».
1. Pour rechercher les dépôts auxquels l’équipe avait accès, recherchez `action:team.add_repository team:"ORGANIZATION/TEAM"`.
1. Pour rechercher le niveau d’accès dont bénéficiait l’équipe pour chaque dépôt, recherchez `action:team.update_repository_permission team:"ORGANIZATION/TEAM"`.
1. Donnez de nouveau l’accès à l’équipe manuellement. Pour plus d’informations, consultez « [Gestion de l’accès d’une équipe au dépôt d’une organisation](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository) ».
