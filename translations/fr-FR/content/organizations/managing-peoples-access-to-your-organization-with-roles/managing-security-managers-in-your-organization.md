---
title: Gestion des gestionnaires de sécurité dans votre organisation
intro: Vous pouvez accorder à votre équipe de sécurité l’accès le moins nécessaire à votre organisation en affectant une équipe au rôle de gestionnaire de sécurité.
versions:
  feature: security-managers
topics:
  - Organizations
  - Teams
shortTitle: Security manager role
permissions: Organization owners can assign the security manager role.
ms.openlocfilehash: c29dd20a123ccb20a32d40896064e11d59643bd9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145066600'
---
{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

## Autorisations pour le rôle de gestionnaire de sécurité

Les membres d’une équipe avec le rôle de gestionnaire de sécurité ont seulement les autorisations nécessaires pour gérer efficacement la sécurité de l’organisation.

- Accès en lecture sur tous les dépôts de l’organisation, en plus de l’accès aux dépôts existants
- Accès en écriture sur toutes les alertes de sécurité dans l’organisation {% ifversion not fpt %}
- Accès à la vue d’ensemble de la sécurité de l’organisation {% endif %}
- Possibilité de configurer les paramètres de sécurité au niveau de l’organisation{% ifversion not fpt %}, y compris la possibilité d’activer ou de désactiver {% data variables.product.prodname_GH_advanced_security %}{% endif %}
- Possibilité de configurer les paramètres de sécurité au niveau du dépôt{% ifversion not fpt %}, y compris la possibilité d’activer ou de désactiver {% data variables.product.prodname_GH_advanced_security %}{% endif %}

{% ifversion fpt %} Des fonctionnalités supplémentaires, y compris une vue d’ensemble de la sécurité pour l’organisation, sont disponibles dans les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} avec {% data variables.product.prodname_advanced_security %}. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).
{% endif %}

Si une équipe a le rôle de gestionnaire de sécurité, les personnes disposant d’un accès administrateur à l’équipe et à un dépôt spécifique peuvent modifier le niveau d’accès de l’équipe à ce dépôt, mais ne peuvent pas supprimer l’accès. Pour plus d’informations, consultez « [Gestion de l’accès d’une équipe à un dépôt d’organisation](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository){% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} » et « [Gestion des équipes et des personnes ayant accès à votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) ».{% else %} ».{% endif %}

  ![Gérer l’interface utilisateur d’accès au dépôt avec les gestionnaires de sécurité](/assets/images/help/organizations/repo-access-security-managers.png)

## Attribution du rôle de gestionnaire de sécurité à une équipe de votre organisation
Vous pouvez attribuer le rôle de gestionnaire de sécurité à un maximum de 10 équipes dans votre organisation.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
1. Sous **Gestionnaires de sécurité**, recherchez et sélectionnez l’équipe à laquelle attribuer le rôle. Chaque équipe que vous sélectionnez va apparaître dans une liste située sous la barre de recherche. 
  ![Ajouter un gestionnaire de sécurité](/assets/images/help/organizations/add-security-managers.png)
## Suppression du rôle de gestionnaire de sécurité pour une équipe de votre organisation

{% warning %}

**Avertissement :** La suppression du rôle de gestionnaire de sécurité pour une équipe supprime la capacité de l’équipe à gérer les alertes et les paramètres de sécurité dans l’organisation, l’équipe conservant néanmoins l’accès en lecture aux dépôts accordé lors de l’attribution du rôle. Vous devez supprimer manuellement les accès en lecture non souhaités. Pour plus d’informations, consultez « [Gestion de l’accès d’une équipe au dépôt d’une organisation](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#removing-a-teams-access-to-a-repository) ».

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
1. Sous **Gestionnaires de sécurité**, à droite de l’équipe que vous souhaitez supprimer en tant que gestionnaires de sécurité, cliquez sur {% octicon "x" aria-label="The X icon" %}.
  ![Supprimer des gestionnaires de sécurité](/assets/images/help/organizations/remove-security-managers.png)
