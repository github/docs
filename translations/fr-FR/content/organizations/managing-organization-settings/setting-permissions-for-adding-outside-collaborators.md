---
title: Définition d’autorisations pour l’ajout de collaborateurs externes
intro: 'Pour protéger les données de votre organisation et le nombre de licences payantes utilisées dans votre organisation, vous pouvez configurer qui peut ajouter des collaborateurs externes aux dépôts de l’organisation.'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set collaborator policy
ms.openlocfilehash: ec9133f5a4be38999d1b2051d538dadff4923abf
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108513'
---
Par défaut, toute personne disposant d’un accès administrateur à un dépôt peut inviter des collaborateurs externes à travailler sur celui-ci. Vous pouvez choisir de restreindre la possibilité d’ajouter des collaborateurs externes aux seuls propriétaires de l’organisation.

{% ifversion ghec %} {% note %}

**Remarque :** seules des organisations utilisant {% data variables.product.prodname_ghe_cloud %} peuvent restreindre la possibilité d’inviter des collaborateurs externes aux propriétaires de l’organisation. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% ifversion ghec %}Si votre organisation appartient à un compte d’entreprise, vous{% else %}Vous{% endif %} ne pouvez pas configurer ce paramètre pour votre organisation, si un propriétaire d’entreprise a défini une stratégie au niveau de l’entreprise. Pour plus d’informations, consultez « [Enforcing repository management policies in your enterprise]{% ifversion ghec %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-collaborators-to-repositories)"{% else %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories){% endif %}. »

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Sous « Collaborateurs externes du dépôt », désactivez **Autoriser les administrateurs de dépôt à inviter des collaborateurs externes à des dépôts pour cette organisation**.
  ![Case à cocher pour autoriser les administrateurs de dépôt à inviter des collaborateurs externes à des dépôts de l’organisation](/assets/images/help/organizations/repo-invitations-checkbox-updated.png)
6. Cliquez sur **Enregistrer**.
