---
title: Suppression d’un collaborateur externe d’un dépôt d’organisation
intro: Les propriétaires et les administrateurs de dépôt peuvent supprimer l’accès d’un collaborateur externe à un dépôt.
redirect_from:
- /articles/removing-an-outside-collaborator-from-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Remove collaborator
ms.openlocfilehash: 71c8017b79425570e4ee7c2d2c7d3ac695c5c531
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145128490"
---
{% ifversion fpt or ghec %}

{% warning %}

**Avertissement :**
- Lors de la suppression d’un collaborateur externe d’un dépôt privé, le nombre de licences payantes n’est pas automatiquement diminué. Pour payer moins de licences après avoir supprimé des utilisateurs de votre organisation, suivez les étapes de « [Diminuer les sièges payants de votre organisation](/articles/downgrading-your-organization-s-paid-seats) ».

- Vous êtes chargé de veiller à ce que les personnes qui ont perdu l’accès à un dépôt suppriment toute information confidentielle ou propriété intellectuelle.

{% endwarning %}

{% endif %}

Bien que les duplications de dépôts privés soient supprimées quand un collaborateur est supprimé, la personne conserve néanmoins toujours tous les clones locaux de votre dépôt.

## Suppression de collaborateurs externes de tous les dépôts d’une organisation

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. Sélectionnez le ou les collaborateurs externes que vous souhaitez supprimer de l’organisation.
![Liste de collaborateurs externes avec deux collaborateurs externes sélectionnés](/assets/images/help/teams/list-of-outside-collaborators-selected-bulk.png)
6. Au-dessus de la liste des collaborateurs externes, utilisez le menu déroulant, puis cliquez sur **Supprimer de tous les dépôts**.
![Menu déroulant avec l’option permettant de supprimer des collaborateurs externes ](/assets/images/help/teams/user-bulk-management-options-for-outside-collaborators.png)
7. Passez en revue le ou les collaborateurs externes qui seront supprimés de l’organisation, puis cliquez sur **Supprimer les collaborateurs externes**.
  ![Liste des collaborateurs externes qui seront supprimés et bouton Supprimer les collaborateurs externes](/assets/images/help/teams/confirm-remove-outside-collaborators-bulk.png)

## Suppression d’un collaborateur externe d’un dépôt particulier dans une organisation

Si vous voulez supprimer un collaborateur externe seulement de certains dépôts de votre organisation, vous pouvez supprimer l’accès de cette personne à un dépôt spécifique à la fois.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. À droite du nom d’utilisateur de la personne que vous voulez supprimer, utilisez le menu déroulant {% octicon "gear" aria-label="The Settings gear" %}, puis cliquez sur **Gérer**.
  ![Bouton Gérer l’accès](/assets/images/help/organizations/member-manage-access.png)
6. À droite du dépôt dont vous souhaitez supprimer le collaborateur externe, cliquez sur **Gérer l’accès**.
![Sélectionnez le bouton Gérer l’accès en regard d’un dépôt auquel le collaborateur extérieur a accès](/assets/images/help/organizations/second-manage-access-selection-for-collaborator.png)
7. Pour supprimer complètement l’accès du collaborateur externe au dépôt, dans le coin supérieur droit, cliquez sur **Supprimer l’accès à ce dépôt**.
![Bouton Supprimer l’accès à ce dépôt](/assets/images/help/organizations/remove-access-to-this-repository.png)
8. Pour confirmer, cliquez sur **Supprimer l’accès**.
![Confirmez le collaborateur externe qui sera supprimé du dépôt](/assets/images/help/teams/confirm-remove-outside-collaborator-from-a-repository.png)

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Vous pouvez aussi supprimer un collaborateur externe d’un dépôt dans la vue d’ensemble de l’accès dans les paramètres de votre dépôt. Pour plus d’informations, consultez « [Gestion des équipes et des personnes ayant accès à votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person) ».
{% endif %}
## Pour aller plus loin

- « [Ajout de collaborateurs externes à des dépôts de votre organisation](/articles/adding-outside-collaborators-to-repositories-in-your-organization) »
- « [Conversion d’un membre de l’organisation en collaborateur externe](/articles/converting-an-organization-member-to-an-outside-collaborator) »
