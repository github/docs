---
title: Conversion d’une équipe Propriétaires en autorisations d’organisation améliorées
intro: "Si votre organisation a été créée après septembre\_2015, elle dispose par défaut d’autorisations d’organisation améliorées. Les organisations créées avant septembre\_2015 peuvent avoir besoin de migrer les anciens propriétaires et équipes d’administration vers le modèle d’autorisations améliorées. Le «\_Propriétaire\_» est maintenant un rôle administratif donné aux membres individuels de votre organisation. Les membres de votre équipe Propriétaires héritée reçoivent automatiquement les privilèges de propriétaire."
redirect_from:
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions-early-access-program
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions
  - /articles/converting-an-owners-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-owners-team-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert Owners team
ms.openlocfilehash: ff4845a8d36ecc757a989ef669b645543addff2d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880379'
---
Vous avez quelques options pour convertir votre équipe Propriétaires héritée :

- Donner à l’équipe un nouveau nom qui indique que les membres ont un statut spécial dans l’organisation.
- Supprimer l’équipe après avoir vérifié que tous les membres ont été ajoutés à des équipes qui accordent l’accès nécessaire aux dépôts de l’organisation.

## Donner un nouveau nom à l’équipe Propriétaires

{% tip %}

   **Remarque :** Comme « admin » est un terme pour les membres de l’organisation ayant un [accès spécifique à certains dépôts](/articles/repository-permission-levels-for-an-organization) dans l’organisation, nous vous recommandons d’éviter ce terme dans les noms d’équipe dont vous décidez.

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.owners-team %} {% data reusables.organizations.convert-owners-team-confirm %}
5. Dans le champ Nom de l’équipe, choisissez un nouveau nom pour l’équipe Propriétaires. Par exemple :
    - Si très peu de membres de votre organisation étaient membres de l’équipe Propriétaires, vous pouvez nommer l’équipe « Principale ».
    - Si tous les membres de votre organisation étaient membres de l’équipe Propriétaires de sorte qu’ils pouvaient utiliser [@mention pour des équipes](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), vous pouvez nommer l’équipe « Employés ».
  ![Le champ Nom de l’équipe, avec l’équipe Propriétaires renommée en Principale](/assets/images/help/teams/owners-team-new-name.png)
6. Sous la description de l’équipe, cliquez sur **Enregistrer et continuer**.
![Bouton Enregistrer et continuer](/assets/images/help/teams/owners-team-save-and-continue.png)
7. Si vous le souhaitez, [rendez l’équipe *publique*](/articles/changing-team-visibility).

## Supprimer l’équipe Propriétaires héritée

{% warning %}

**Avertissement :** S’il existe des membres de votre équipe Propriétaires qui ne sont pas membres d’autres équipes, la suppression de l’équipe va supprimer ces membres de l’organisation. Avant de supprimer l’équipe, vérifiez que les membres sont déjà des membres directs de l’organisation ou qu’ils disposent d’un accès de collaborateur aux dépôts nécessaires.

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.owners-team %} {% data reusables.organizations.convert-owners-team-confirm %}
5. Dans le bas de la page, passez en revue l’avertissement, puis cliquez sur **Supprimer l’équipe Propriétaires**.
  ![Lien pour supprimer l’équipe Propriétaires](/assets/images/help/teams/owners-team-delete.png)
