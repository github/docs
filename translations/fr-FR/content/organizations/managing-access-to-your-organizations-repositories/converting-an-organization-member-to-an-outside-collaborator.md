---
title: Conversion d’un membre de l’organisation en collaborateur externe
intro: Si un membre actuel de votre organisation a uniquement besoin d’accéder à certains dépôts, tels que des consultants ou des employés temporaires, vous pouvez les convertir en collaborateur externe.
permissions: Organization owners can convert an organization member to an outside collaborator.
redirect_from:
- /articles/converting-an-organization-member-to-an-outside-collaborator
- /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-member-to-an-outside-collaborator
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Convert member to collaborator
ms.openlocfilehash: 4b9330559895ec96cb6c842d89dbe4e9a8773685
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "146754597"
---
## À propos de la conversion des membres de l’organisation en collaborateurs externes

Vous pouvez convertir un membre d’une organisation en collaborateur externe. Pour plus d’informations sur les collaborateurs externes, consultez « [Ajout de collaborateurs externes aux dépôts dans votre organisation](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization) ».

{% ifversion fpt or ghec %}Si l’organisation appartient à une entreprise, la conversion {% elsif ghes or ghae %}La conversion{% endif %} d’un membre de l’organisation en collaborateur externe peut être restreinte. Pour plus d’informations, consultez « [Application de stratégies de gestion des dépôts dans votre entreprise]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-{% ifversion fpt or ghec %}outside-{% endif %}collaborators-to-repositories){% ifversion ghec or ghes or ghae %} ».{% elsif fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% endif %}

{% data reusables.organizations.outside-collaborators-use-seats %} {% data reusables.organizations.outside_collaborator_forks %}

Après avoir converti un membre de l’organisation en collaborateur externe, ce dernier n’a accès qu’aux référentiels que son appartenance à l’équipe actuelle autorise. La personne ne sera plus membre explicite de l’organisation et ne pourra plus :

- Créer des équipes
- Afficher tous les membres et équipes de l’organisation
- @mention toute équipe visible
- Être un responsable d’équipe

Pour plus d’informations, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) ».

Nous vous recommandons d’examiner l’accès des membres de l’organisation aux référentiels pour vous assurer que leur accès est celui prévu. Pour plus d’informations, consultez « [Gestion de l’accès d’un individu référentiel d’une organisation](/articles/managing-an-individual-s-access-to-an-organization-repository) ».

Lorsque vous convertissez un membre de l’organisation en collaborateur externe, ses privilèges en tant que membre de l’organisation sont enregistrés pendant trois mois afin que vous puissiez restaurer ses privilèges d’appartenance si vous{% ifversion fpt or ghec %} l’invitez à rejoindre{% else %} l’ajoutez à{% endif %} votre organisation dans ce délai. Pour plus d’informations, consultez « [Rétablissement d’un ancien membre de votre organisation](/articles/reinstating-a-former-member-of-your-organization) ».

## Conversion d’un membre de l’organisation en collaborateur externe

{% note %}

**Remarque :** Vous ne pourrez peut-être pas convertir un membre de l’organisation en collaborateur externe, si un propriétaire de l’organisation{% ifversion not fpt %} ou un propriétaire d’entreprise{% endif %} a restreint votre capacité à ajouter des collaborateurs externes.

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Sélectionnez la personne ou les personnes que vous souhaitez convertir en collaborateurs externes.
  ![Liste de membres avec deux membres sélectionnés](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Au-dessus de la liste des membres, utilisez le menu déroulant, puis cliquez sur **Convertir en collaborateur externe**.
  ![Menu déroulant avec option permettant de convertir des membres en collaborateurs externes](/assets/images/help/teams/user-bulk-management-options.png)
6. Lisez les informations sur la conversion de membres en collaborateurs externes, puis cliquez sur **Convertir en collaborateur externe**.
  ![Informations sur les autorisations des collaborateurs externes et bouton Convertir en collaborateurs externes](/assets/images/help/teams/confirm-outside-collaborator-bulk.png)

## Pour aller plus loin

- « [Ajout de collaborateurs externes à des dépôts de votre organisation](/articles/adding-outside-collaborators-to-repositories-in-your-organization) »
- « [Suppression d’un collaborateur externe d’un dépôt d’organisation](/articles/removing-an-outside-collaborator-from-an-organization-repository) »
- « [Conversion d’un collaborateur externe en membre de l’organisation](/articles/converting-an-outside-collaborator-to-an-organization-member) »
