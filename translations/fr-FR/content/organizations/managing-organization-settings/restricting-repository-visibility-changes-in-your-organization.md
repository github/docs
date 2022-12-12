---
title: Restriction des changements de visibilité des dépôts dans votre organisation
intro: 'Pour protéger les données de votre organisation, vous pouvez configurer des autorisations pour le changement de la visibilité du dépôt dans votre organisation.'
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set visibility changes policy
permissions: Organization owners can restrict repository visibility changes for an organization.
ms.openlocfilehash: e404d8dea2e188ff5b0b0a8b15c9767374269436
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106218'
---
Vous pouvez limiter les personnes en mesure de changer la visibilité des dépôts dans votre organisation, notamment de modifier un dépôt privé en dépôt public. Pour plus d’informations sur la visibilité des dépôts, consultez « [À propos des dépôts](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) ». 

Vous pouvez restreindre la capacité à changer la visibilité des dépôts aux seuls propriétaires de l’organisation, ou bien vous pouvez autoriser à changer la visibilité toute personne disposant d’un accès administrateur à un dépôt.

{% warning %}

**Avertissement** : Si ce paramètre est activé, il permet aux personnes disposant d’un accès administrateur de choisir la visibilité d’un dépôt existant, même si vous n’autorisez pas la création de ce type de dépôt. Pour plus d’informations sur la restriction de la visibilité des dépôts lors de la création, consultez « [Restriction de création de dépôts dans votre organisation](/articles/restricting-repository-creation-in-your-organization) ».

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Sous « Modification de la visibilité des dépôts », décochez **Autoriser les membres à modifier la visibilité des dépôts pour cette organisation**.
![Case à cocher pour autoriser les membres à modifier la visibilité des dépôts](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. Cliquez sur **Enregistrer**.
