---
title: Définition des autorisations de base pour une organisation
intro: Vous pouvez définir des autorisations de base pour les référentiels qu’une organisation possède.
permissions: Organization owners can set base permissions for an organization.
redirect_from:
- /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Set base permissions
ms.openlocfilehash: 734ced023e4a1043634650ff3e4305727397095c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146179926"
---
## À propos des autorisations de base pour une organisation

Vous pouvez définir des autorisations de base qui s’appliquent à tous les membres d’une organisation lors de l’accès à l’un des dépôts de celle-ci. Les autorisations de base ne s’appliquent pas aux collaborateurs externes.

{% ifversion fpt or ghec %}Par défaut, les membres d’une organisation disposent d’autorisations de **lecture** sur les dépôts de l’organisation.{% endif %}

Si une personne disposant d’un accès administrateur au dépôt d’une organisation accorde à un membre un niveau d’accès plus élevé pour le dépôt, le niveau d’accès supérieur remplace l’autorisation de base.

{% ifversion custom-repository-roles %} Si vous avez créé un rôle de référentiel personnalisé avec un rôle hérité dont l’accès est inférieur aux autorisations de base de votre organisation, tous les membres affectés à ce rôle bénéficient par défaut des autorisations de base de l’organisation plutôt que du rôle hérité. Pour plus d’informations, consultez « [Gestion des rôles de dépôt personnalisés pour une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) ».
{% endif %}

## Définition des autorisations de base

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Sous « Autorisations de base », utilisez la liste déroulante pour sélectionner de nouvelles autorisations de base.
  ![Sélection du nouveau niveau d’autorisation dans la liste déroulante des autorisations de base](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Passez en revue les modifications. Pour confirmer, cliquez sur **Changer l’autorisation par défaut pour PERMISSION**.
  ![Examen et confirmation de la modification des autorisations de base](/assets/images/help/organizations/base-permissions-confirm.png)

## Pour aller plus loin

- « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) »
- « [Ajout de collaborateurs externes à des dépôts de votre organisation](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization) »
