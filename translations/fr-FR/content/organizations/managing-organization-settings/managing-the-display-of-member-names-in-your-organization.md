---
title: Gestion de l’affichage des noms des membres dans votre organisation
intro: Vous pouvez autoriser les membres de votre organisation à voir le nom de profil d’un auteur de commentaire dans les dépôts privés de l’organisation.
product: '{% data reusables.gated-features.display-names %}'
redirect_from:
  - /articles/managing-the-display-of-member-names-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-display-of-member-names-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage display of member names
ms.openlocfilehash: a990098874393e17f992ffac7b04bcef1b1bcfc4
ms.sourcegitcommit: 9e0d21122ddfcf3f0dbba9b365ba902a2f779493
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163142'
---
Les propriétaires de l’organisation peuvent gérer l’affichage des noms des membres dans une organisation.

![Nom de profil du commentateur affiché dans le commentaire](/assets/images/help/issues/commenter-full-name.png)

Les modifications apportées à l’affichage des noms d’utilisateur au sein d’une organisation affecteront l’affichage des noms d’utilisateur d’autres personnes, pas le vôtre. Chaque membre de l’organisation choisit son propre nom de profil dans ses paramètres. Pour plus d’informations, consultez « [Personnalisation de votre profil](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#changing-your-profile-name) ».

{% ifversion profile-name-enterprise-setting %} Vous ne pourrez peut-être pas configurer ce paramètre pour votre organisation si un propriétaire d’entreprise a défini une stratégie au niveau de l’entreprise. Pour plus d’informations, consultez « [Application de stratégies de gestion des dépôts dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories) ».{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Sous « Autorisations du dépôt de l’administrateur », sélectionnez ou désélectionnez **Autoriser les membres à voir le nom de profil de l’auteur des commentaires dans les dépôts privés**.
![Case à cocher Autoriser les membres à voir le nom complet de l’auteur des commentaires dans les dépôts privés](/assets/images/help/organizations/allow-members-to-view-full-names.png)
6. Cliquez sur **Enregistrer**.
