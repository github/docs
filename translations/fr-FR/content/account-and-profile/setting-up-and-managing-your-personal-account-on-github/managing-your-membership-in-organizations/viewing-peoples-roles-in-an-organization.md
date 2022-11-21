---
title: Affichage des rôles des personnes dans une organisation
intro: "Vous pouvez lister les personnes membres de votre organisation et les filtrer en fonction de leur rôle. Pour plus d’informations sur les rôles d’une organisation, consultez «\_[Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)\_»."
permissions: Organization members can see people's roles in the organization.
redirect_from:
  - /articles/viewing-people-s-roles-in-an-organization
  - /articles/viewing-peoples-roles-in-an-organization
  - /github/setting-up-and-managing-your-github-user-account/viewing-peoples-roles-in-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: View people in an organization
ms.openlocfilehash: e0632ffeb394615b7b64ad55673b69fc738bca27
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: '146179630'
---
## Afficher les rôles d’organisation

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Vous verrez une liste des personnes dans votre organisation. Pour filtrer la liste par rôle, cliquez sur **Rôle** et sélectionnez le rôle que vous recherchez.
  ![cliquez sur Rôle](/assets/images/help/organizations/view-list-of-people-in-org-by-role.png)

{% ifversion fpt %}

Si votre organisation utilise {% data variables.product.prodname_ghe_cloud %}, vous pouvez également afficher les propriétaires d’entreprise qui gèrent les paramètres de facturation et les stratégies pour toutes les organisations de votre entreprise. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization#view-enterprise-owners-and-their-roles-in-an-organization).

{% endif %}

{% ifversion enterprise-owners-visible-for-org-members %}
## Afficher les propriétaires d’entreprise et leurs rôles dans une organisation

Si votre organisation est gérée par un compte d’entreprise, vous pouvez afficher les propriétaires d’entreprise qui gèrent les paramètres de facturation et les stratégies pour toutes les organisations de votre entreprise. Pour plus d’informations sur les comptes d’entreprise, consultez « [Types de comptes {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts) ».

Vous pouvez également voir si un propriétaire d’entreprise a un rôle spécifique dans l’organisation. Les propriétaires d’entreprise peuvent aussi être membres de l’organisation, avoir tout autre rôle d’organisation, ou ne pas être affilié à l’organisation.

{% note %}

**Remarque :** Si vous êtes propriétaire d’une organisation, vous pouvez également inviter un propriétaire d’entreprise à avoir un rôle dans l’organisation. Si un propriétaire d’entreprise accepte l’invitation, un siège ou une licence dans l’organisation est utilisé parmi les licences disponibles pour votre entreprise. Pour plus d’informations sur le fonctionnement des licences, consultez « [Rôles dans une entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner) ».

{% endnote %}

| **Rôle d’entreprise** | **Rôle d’organisation** | **Accès ou impact sur l’organisation** |
|----|----|----|----|
| Propriétaire d’entreprise | Non affilié ou aucun rôle d’organisation officiel | Ne peut pas accéder au contenu ou aux dépôts de l’organisation, mais gère les paramètres et stratégies d’entreprise qui ont un impact sur votre organisation. |
| Propriétaire d’entreprise | Propriétaire de l'organisation | Peut configurer les paramètres de l’organisation et gérer l’accès aux ressources de l’organisation via des équipes, etc. | 
| Propriétaire d’entreprise | Membre d’organisation | Peut accéder aux ressources et au contenu de l’organisation, tels que les dépôts, sans accéder aux paramètres de l’organisation. |

Pour passer en revue tous les rôles au sein d’une organisation, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) ». {% ifversion custom-repository-roles %} Tout membre d’une organisation peut également avoir un rôle personnalisé pour un dépôt spécifique. Pour plus d’informations, consultez « [Gestion des rôles de dépôt personnalisés pour une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) ».{% endif %}

Pour plus d’informations sur le rôle de propriétaire d’entreprise, consultez « [Rôles dans une entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner) ». 

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Dans la barre latérale gauche, sous « Autorisations d’entreprise », cliquez sur **Propriétaires d’entreprise**.
  ![Capture d’écran de l’option « Propriétaires d’entreprise » dans le menu de la barre latérale](/assets/images/help/organizations/enterprise-owners-sidebar.png)
5. Affichez la liste des propriétaires d’entreprise pour votre entreprise. Si le propriétaire de l’entreprise est également membre de votre organisation, vous pouvez voir son rôle dans l’organisation.

  ![Capture d’écran de la liste des propriétaires d’entreprise et de leur rôle dans l’organisation](/assets/images/help/organizations/enterprise-owners-list-on-org-page.png)

{% endif %}
